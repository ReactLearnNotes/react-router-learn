import { useRouteError } from 'react-router-dom'
const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <div id='error-page'>
      <p>
        <i>{error.statusText}</i>
      </p>
    </div>
  )
}

export default ErrorPage
