import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link
} from 'react-router-dom'
import '../index.css'
import ErrorPage from '../error-page'
const root = document.getElementById('root')

import Contact from './routes/contact'

const Index = () => {
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
          <form method='post'>
            <button type='submit'>New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`/contacts/1`}>link a</Link>
            </li>
            <li>
              <Link to={`/contacts/2`}>link b</Link>

              {/* <a href={`/contacts/2`}>Your Friend</a> */}
            </li>
          </ul>
        </nav>
      </div>
      <div id='detail'>
        <Outlet />
      </div>
    </>
  )
}

const r = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contacts/:id',
        element: <Contact />
      }
    ]
  }
])

createRoot(root).render(<RouterProvider router={r}></RouterProvider>)
