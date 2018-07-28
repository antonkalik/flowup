import React from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../routes/routes'

export const NotFoundPage = () => 
  <div className={'notfound'}>
    <div>
      <h1>Not found</h1>
      <Link to={routes.HOME}>Go to Home</Link>
    </div>
  </div>