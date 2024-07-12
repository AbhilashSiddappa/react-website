import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const err = useRouteError
  return (
    <div>
        <h1>Opps Something went wrong</h1>
        <p>{err.status}:{err.text}</p>
    </div>
  )
}

export default ErrorPage