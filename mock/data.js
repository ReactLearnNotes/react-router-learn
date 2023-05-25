import localforage from 'localforage'
import { matchSorter } from 'match-sorter'
import sortBy from 'sort-by'
/**
 * 创建单条数据
 * @returns
 */
export async function createItem() {
  await fakeNetwork()

  let id = Math.random().toString(36).substring(2, 9)
  const item = { id, createdAt: Date.now() }
  let oldList = await getListArray()

  console.log('add 当前项目', item)
  oldList.unshift(item)
  await set(oldList)
  return oldList
}

export async function getListArray(query) {
  await fakeNetwork(`${query}`)

  let array = await localforage.getItem('_listArray')
  console.log('list 从缓存中取出的数据是', array)
  if (!array) array = []
  // if (query) {
  //   // array = matchSorter
  // }
  console.log('list array的值是', array)

  return array.sort(sortBy('last', 'createdAt'))
}

function set(item) {
  return localforage.setItem('_listArray', item)
}

let fakeCache = {}
async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {}
  }
  if (fakeCache[key]) {
    return
  }
  fakeCache[key] = true
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800)
  })
}
