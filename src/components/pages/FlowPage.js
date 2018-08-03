import React, { Component, createRef } from 'react'
import { Tools } from '../'
import Box from '../parts/Box'

export class FlowPage extends Component {
    constructor(props) {
        super(props)
        this.handleRef = createRef()
        this.paper = null
        this.state = { boxes: [], boxSelected: false, value: 10 }
    }

    selectItem() {
        // redux for this state
        this.setState({boxSelected: true})
    }
 
    addBox() {
        this.setState(prevState => ({
            boxes: [...prevState.boxes,
            <Box 
                value={this.state.value}
                key={this.state.boxes.length}
            />]
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
                            !this.state.boxes ? <p>No elements</p> : this.state.boxes.map(el => el)
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