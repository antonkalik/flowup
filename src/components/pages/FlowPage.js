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
        this.paper = Raphael('chart', '100%', '100%')
    }

    addControles() {
        this.state.circles.push(
            this.paper.circle(20, 45, 3).attr({
                fill: 'blue',
                stroke: 0,
                cursor: 'grab'
            }),
            this.paper.circle(110, 45, 3).attr({
                fill: 'blue',
                stroke: 0,
                cursor: 'grab'
            })
        )
    }

    addBox() {
        this.state.boxes.push(
            this.paper.rect(20, 20, 90, 50, 4)
        )
        this.addControles()
        this.dragElements()
    }

    dragElements() {
        let { boxes, circles } = this.state
        
        const controles = this.paper.set([...circles])
        
        const rectangles = this.paper.set([...boxes]).attr({
            fill: '#fff',
            stroke: 0,
            cursor: 'grab'
        });

        const startDrag = function() {
            this.ox = this.type == "rect" ? this.attr("x") : this.attr("cx");
            this.oy = this.type == "rect" ? this.attr("y") : this.attr("cy");
        }
        
        const move = function(dx, dy) {
            let x = this.ox + dx;
            let y = this.oy + dy;
            let attr = this.type == "rect" ? { x, y } : { cx: x, cy: y }
            this.attr(attr);
        }
        
        rectangles.drag(move, startDrag);
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

