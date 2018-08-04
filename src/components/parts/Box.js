import React, { Component } from 'react'
import Draggable from 'react-draggable';

export default class Box extends Component {
    constructor(props) {
        super(props)
        this.handleRef = React.createRef()
        this.state = {
            select: false
        }
    }
    
    render() {
        const { value } = this.props
        return (
            <Draggable
                handle={'.handle'}
                defaultPosition={{x: 20, y: 20}}
                position={null}
                onStart={() => this.props.onClick()}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
                ref={this.handleRef}
            >
                <div className={this.props.state.boxSelect ? 'handle selected' : 'handle'} ref={this.handleRef}>
                <div className={'box'}>
                    <div className={'boxHead'}>
                        <h3>Init</h3>
                    </div>
                    <div className={'boxBody'}>
                        <div className={'boxIn'}>
                            In
                        </div>
                        <div className={'BoxOut'}>
                            Out
                        </div>
                    </div>
                    <div className={'boxFooter'}>
                        <input onChange={() => {}} value={value} />
                    </div>
                </div>   
                </div>
            </ Draggable>      
        )
    }
}