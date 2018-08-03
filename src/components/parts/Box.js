import React, { Component } from 'react'
import { Tools } from '../'
import Draggable, {DraggableCore} from 'react-draggable';

export default class Box extends Component {
    constructor(props) {
        super(props)
        this.handleRef = React.createRef()
    }
    
    render() {        
        return (
            <Draggable
                handle={'.handle'}
                defaultPosition={{x: 20, y: 20}}
                position={null}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
                someprops={'someprops'}
            >
                <div onClick={() => console.log(this)} className={'handle'} ref={this.handleRef}>
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
                            <input onChange={() => {}} value={'10'} />
                        </div>
                    </div>
                </div>
            </Draggable>
        )
    }
}