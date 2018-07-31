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

    draggable(elements, circles) {
        const drag = function() {
            this.ox = this.type == 'rect' ? this.attr('x') : this.attr('cx');
            this.oy = this.type == 'rect' ? this.attr('y') : this.attr('cy');
            this.animate({stroke: 'blue', 'stroke-width': 2}, 500);
            circles.show()
        }

        const move = function(dx, dy) {
            let mx = this.ox + dx;
            let my = this.oy + dy;

            const attributes = this.type == 'rect' ? { x: mx, y: my } : { cx: mx, cy: my };

            this.attr(attributes);

            const attr1 = {
                cx: this.attr('x'),
                cy: this.attr('y') + 25
            }

            const attr2 = {
                cx: this.attr('x') + 120,
                cy: this.attr('y') + 25
            }
            
            circles[0].attr(attr1)
            circles[1].attr(attr2)
        }

        const up = function () {
            circles.show()
        }

        elements.drag(move, drag, up);
    }

    addBox() {
        
        this.state.boxes.push(
            this.paper.rect(20 + this.state.boxes.length * 10, 20, 120, 50, 4).attr({
                fill: '#fff',
                stroke: '#f0f0f0',
                cursor: 'grab',
                'stroke-width': 1
            })
        )
        const circles = this.paper.set([
            this.paper.circle(10 + this.state.boxes.length * 10, 45, 3),
            this.paper.circle(130 + this.state.boxes.length * 10, 45, 3)
        ]).attr({fill: 'blue', stroke: 0})

        const elements = this.paper.set([...this.state.boxes])

        this.draggable(elements, circles)
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