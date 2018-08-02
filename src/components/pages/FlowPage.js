import React, { Component } from 'react'
import { Tools } from '../'
import Draggable, {DraggableCore} from 'react-draggable';

export class FlowPage extends Component {
    constructor(props) {
        super(props)
        this.paper = null
        this.state = { boxes: [], boxSelected: false }
        this.handleDrag = this.handleDrag.bind(this);
    }

    handleDrag() {
        this.setState({boxSelected: true})
    }

    eventLogger() {
        console.log(this)
    }

    addBox() {
        const box = <Draggable
                key={this.state.boxes.length}
                handle=".handle"
                defaultPosition={{x: 20, y: 20}}
                position={null}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
               
            >
            <div onClick={e => {
                console.log(e.target)
                this.setState({boxSelected: true})
            }}>
                <div className={'handle'}>
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
                            <input onChange={() => console.log(this)} value={'10'} />
                        </div>
                    </div>
                </div>
            </div>
        </Draggable>

        this.setState(prevState => ({
            boxes: [...prevState.boxes, box]
        }))
    }
    
    render() {
        return (
            <div className={'flowpage'}>
                <Tools addbox={() => this.addBox()} />
                <div className={'flowchart'}>
                    <div onClick={e => this.setState({boxSelected: false})} id={'chart'}>
                        {
                            !this.state.boxes ? <p>No elements</p> : this.state.boxes.map(el => el)
                        }
                    </div>
                    {
                        this.state.boxSelected ? <div id={'panel'} style={{width: 200, flexGrow: 1}} /> : <div id={'panel'} style={{width: 0, flexGrow: 0}} />
                    } 
                </div>
            </div>
        )
    }
}