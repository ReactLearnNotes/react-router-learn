import { Form, useLoaderData } from 'react-router-dom'
const Favorite = ({ contact }) => {
  let favorite = contact.favorite
  return <Form></Form>
}
const Contact = () => {
  const contact = {
    first: 'you',
    last: 'name',
    // avatar: 'https://placekitten.com/g/200/200',
    avatar: '',

    notes: 'some notes',
    favorite: true
  }
  return (
    <div id='contact'>
      <div>
        <img src={contact.avatar || null} key={contact.avatar} />
      </div>
      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{' '}
          <Favorite contact={contact}></Favorite>
        </h1>
        <div>
          <Form action='edit'>
            <button type='submit'>编辑</button>
          </Form>
          <Form
            method='post'
            action='destroy'
            onSubmit={(event) => {
              if (!confirm('请确认')) {
                event.preventDefault()
              }
            }}
          >
            <button type='submit'>删除</button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Contact
