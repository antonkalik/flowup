import React from 'react'
import { NavLink } from 'react-router-dom'
import * as routes from '../../routes/routes'

export const Navigation = () =>
    <div className={'navigation'} role={'navigation'}>
        <ul className={'controls'}>
            <li>
                <NavLink to={routes.HOME}>
                    <svg
                        width={'51px'}
                        height={'51px'}
                        viewBox={'0 0 51 51'}
                        id={'logo'}
                    >
                        <g>
                            <path d={'M5,14 L46,14 C48.209139,14 50,15.790861 50,18 L50,33 C50,35.209139 48.209139,37 46,37 L5,37 C2.790861,37 1,35.209139 1,33 L1,18 C1,15.790861 2.790861,14 5,14 Z M14,2 L37,2 C39.209139,2 41,3.790861 41,6 L41,10 L10,10 L10,6 C10,3.790861 11.790861,2 14,2 Z M10,41 L41,41 L41,45 C41,47.209139 39.209139,49 37,49 L14,49 C11.790861,49 10,47.209139 10,45 L10,41 Z'}></path>
                        </g>
                    </svg>
                    <h2>flowup</h2>
                </NavLink>
            </li>
            <li><NavLink to={routes.HOME}>File</NavLink></li>
            <li><NavLink to={routes.HOME}>Edit</NavLink></li>
            <li><NavLink to={routes.HOME}>View</NavLink></li>
            <li><NavLink to={routes.HOME}>About</NavLink></li>
            <li><p>Anton Kalik</p></li>
            <li><button>Logout</button></li>
        </ul>
    </div>


