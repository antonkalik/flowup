import React, { Component } from 'react'

export class Tools extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { addbox } = this.props
        return (
            <div className={'tools'}>
                <button onClick={addbox}>Add Box</button>
            </div>
        )
    }
}
    