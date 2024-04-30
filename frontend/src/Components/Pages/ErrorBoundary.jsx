
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

function ErrorBoundary() {
  let error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <div style={{color: 'red'}}>Dang!</div>
        <h1>{error.status}</h1>
        <h2>{error.status.message}</h2>
        <h3>{error.data.reason}</h3>
      </div>
    )
  }
  throw error
}

export { ErrorBoundary };