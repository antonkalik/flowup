import React, { Component } from 'react'
import { Tools } from '../'
import Raphael from 'raphael';

export class FlowPage extends Component {
    constructor(props) {
        super(props)
        this.paper = null
        this.state = {
            boxes: [],
            circles: []
        }
    }

    componentDidMount() {
        Raphael.fn.connectionDots = function(rectangles) {
            rectangles.forEach(el => {
                el.click(() => {
                    console.log('click by:', el)
                    // here will create dots for wireBoxes function
                })
            });
        }

        this.paper = Raphael('chart', '100%', '100%')

        // boxes for test
        this.state.boxes.push(this.paper.rect(220, 120, 90, 50, 4))
        this.addBox()
    }

    // create wire function wire between boxes
    wireBoxes() {

    }

    addBox(...params) {
        const size = [90, 50, 4]
        const boxParams = [220, 20, ...size]
        const box = this.paper.rect(...boxParams)

        this.state.boxes.push(box)
        this.doDragBoxes()
    }
    
    doDragBoxes() {
        let { boxes, circles } = this.state
        
        const rectangles = this.paper.set([...boxes]).attr({
            fill: '#fff',
            stroke: 0,
            cursor: 'grab'
        });

        const startDrag = function() {
            this.ox = this.attr('x');
            this.oy = this.attr('y');
        }
        
        const move = function(dx, dy) {
            this.attr({
                x: this.ox + dx,
                y: this.oy + dy
            });
        }
        
        rectangles.drag(move, startDrag);

        this.paper.connectionDots(rectangles);
    }


    
    render() {
        return (
            <div className={'flowpage'}>
                <Tools addbox={() => this.addBox()} />
                <div className={'flowchart'}>
                    <div id={'chart'}></div>
                </div>
            </div>
        )
    }
}