import React, { Component } from 'react'
import { Tools } from '../'
import Draggable from 'react-draggable';
import Box from '../parts/Box'

export class FlowPage extends Component {
    constructor(props) {
        super(props)
        this.handleRef = React.createRef()
        this.paper = null
        this.state = { boxes: [], boxSelected: false }
    }

    selectItem() {
        console.log(this.handleRef.current)
        this.setState({boxSelected: true})
    }

    addBox() {
        this.setState(prevState => ({
            boxes: [...prevState.boxes, <Box key={this.state.boxes.length} />]
        }))
    }
    
    render() {        
        return (
            <div className={'flowpage'}>
                <Tools addbox={() => this.addBox()} />
                <div className={'flowchart'}>
                    <div 
                        id={'chart'}
                        onClick={e => e.target.className === 'chart' ? this.setState({boxSelected: false}) : null}
                        className={'chart'}
                    >
                        {
                            !this.state.boxes ? <p>No elements</p> : this.state.boxes.map(el => {
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
                                        <div onClick={() => this.selectItem()} className={'handle'} ref={this.handleRef}>
                                            {el}
                                        </div>
                                    </Draggable>
                                )
                            })
                        }
                    </div>
                        {
                            this.state.boxSelected ? <div id={'panel'} style={{width: 200}} /> : <div id={'panel'} style={{width: 0}} />
                        }
                </div>
            </div>
        )
    }
}