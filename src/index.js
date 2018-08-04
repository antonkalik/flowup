import './scss/styles.scss'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'
import App from './App'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'

const initialState = {
    first: 'One',
    second: 'Two'
}

const ACTION_CHANGE_FIRST = 'ACTION_CHANGE_FIRST'
const ACTION_CHANGE_SECOND = 'ACTION_CHANGE_SECOND'

const actionChangeFirst = {
    type: ACTION_CHANGE_FIRST,
    payload: null
}

const actionChangeSecond = {
    type: ACTION_CHANGE_SECOND,
    payload: null
}

const rootReducer = (state = initialState, action) => {
    return state
}

const store = createStore(rootReducer)

const mapStateToProps = state => {
    return { state }
}

const WrappedMainComponent = withRouter(connect(mapStateToProps)(App))

render(
    <Router>
        <Provider store={store}>
            <WrappedMainComponent />
        </Provider>
    </Router>,
    document.getElementById('root')
)