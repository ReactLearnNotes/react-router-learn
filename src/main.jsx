import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
  useLoaderData,
  Form
} from 'react-router-dom'
import '../index.css'
import ErrorPage from '../error-page'
const root = document.getElementById('root')

import Contact from './routes/contact'
import { getListArray, createItem } from '../mock/data'
const Index = () => {
  const { list } = useLoaderData()
  return (
    <>
      <div id='sidebar'>
        <h1>React Router Contacts</h1>
        <div>
          <form id='search-form' role='search'>
            <input
              id='q'
              aria-label='Search contacts'
              placeholder='Search'
              type='search'
              name='q'
            />
            <div id='search-spinner' aria-hidden hidden={true} />
            <div className='sr-only' aria-live='polite'></div>
          </form>
          <Form method='post'>
            <button type='submit'>+</button>
          </Form>
        </div>
        <nav>
          {list.length ? (
            <ul>
              {list.map((it) => {
                return (
                  <li key={it.id}>
                    <Link to={`/contacts/${it.id}`}>{it.id}</Link>
                  </li>
                )
              })}
            </ul>
          ) : (
            <p>
              <i>no-data</i>
            </p>
          )}
        </nav>
      </div>
      <div id='detail'>
        <Outlet />
      </div>
    </>
  )
}

export async function loader() {
  const list = await getListArray()
  return { list }
}
export async function action() {
  const item = await createItem()
  return { item }
}

const r = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <ErrorPage />,
    loader: loader,
    action: action,
    children: [
      {
        path: 'contacts/:id',
        element: <Contact />
      }
    ]
  }
])

createRoot(root).render(<RouterProvider router={r}></RouterProvider>)
