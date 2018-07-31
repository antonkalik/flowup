import React, { Component } from 'react'
import { Tools } from '../'
import Raphael from 'raphael';

export class FlowPage extends Component {
    constructor(props) {
        super(props)
        this.paper = null
        this.state = {
            boxes: []
        }
    }

    componentDidMount() {
        this.paper = Raphael('chart', '100%', '100%')
    }

    addBox() {
        this.state.boxes.push(
            this.paper.rect(20, 20, 90, 50, 4).attr({
                fill: '#fff',
                stroke: 0,
                cursor: 'grab'
            })
        )
        this.dragElements()
    }

    dragElements() {
        let { boxes } = this.state

        const dragger = function() {
            this.ox = this.type == 'rect' ? this.attr('x') : this.attr('cx');
            this.oy = this.type == 'rect' ? this.attr('y') : this.attr('cy');
        }

        const move = function(dx, dy) {
            let mx = this.ox + dx;
            let my = this.oy + dy;

            const attributes = this.type == 'rect' ? {
                x: mx,
                y: my
            } : {
                cx: mx,
                cy: my
            };

            this.attr(attributes);

            const attrContr1 = {
                cx: this.attr('x'),
                cy: this.attr('y') + 25
            }

            const attrContr2 = {
                cx: this.attr('x') + 90,
                cy: this.attr('y') + 25
            }
            
            circles[0].attr(attrContr1);
            circles[1].attr(attrContr2);
        }

        const elements = this.paper.set([...boxes])
        const circles = this.paper.set([
            this.paper.circle(20, 45, 3).attr({fill: 'blue', stroke: 0}),
            this.paper.circle(110, 45, 3).attr({fill: 'blue', stroke: 0})
        ])

        elements.drag(move, dragger);
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

