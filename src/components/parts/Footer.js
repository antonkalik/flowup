import React from 'react'
import { NavLink } from 'react-router-dom'
import * as routes from '../../routes/routes'

export const Footer = () =>
    <div className={'footer'}>
        <ul>
            <li><NavLink to={routes.FLOW}>Flow</NavLink></li>
            <li><NavLink to={routes.JSON}>JSON</NavLink></li>
            <li>My file name</li>
        </ul>
    </div>