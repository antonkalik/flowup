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
        console.log(this.handleRef)
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