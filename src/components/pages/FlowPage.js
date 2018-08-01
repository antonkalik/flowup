import React, { Component } from 'react'
import { Tools } from '../'
import Raphael from 'raphael';

export class FlowPage extends Component {
    constructor(props) {
        super(props)
        this.paper = null
        this.state = {
            texts: [],
            boxes: [],
            circles: []
        }
    }

    componentDidMount() {
        this.paper = Raphael('chart', '100%', '100%')

        this.setState({ circles: this.paper.set(
            this.paper.circle(10 + this.state.boxes.length * 10, 65, 3),
            this.paper.circle(180 + this.state.boxes.length * 10, 65, 3)
        ).attr({
                'stroke-width': 2,
                stroke: 'blue',
                fill: '#fff'
            }).hide()
        })
    }

    draggable(elements, texts) {
        const { circles } = this.state
        const drag = function() {
            elements.attr({
                fill: '#fff',
                stroke: '#f0f0f0',
                cursor: 'grab',
                'stroke-width': 1
            })
            this.attr({stroke: 'blue', 'stroke-width': 2})

            this.ox = this.type == 'rect' ? this.attr('x') : this.attr('cx');
            this.oy = this.type == 'rect' ? this.attr('y') : this.attr('cy');
            
            const attr1 = {
                cx: this.attr('x'),
                cy: this.attr('y') + 45
            }

            const attr2 = {
                cx: this.attr('x') + 180,
                cy: this.attr('y') + 45
            }
            
            circles[0].attr(attr1).show()
            circles[1].attr(attr2).show()

            this.toFront()
            circles.toFront()
        }

        const move = function(dx, dy) {
            let mx = this.ox + dx;
            let my = this.oy + dy;

            const attributes = this.type == 'rect' ? { x: mx, y: my } : { cx: mx, cy: my };

            this.attr(attributes);

            const attr1 = {
                cx: this.attr('x'),
                cy: this.attr('y') + 45
            }

            const attr2 = {
                cx: this.attr('x') + 180,
                cy: this.attr('y') + 45
            }
            
            circles[0].attr(attr1)
            circles[1].attr(attr2)
        }

        elements.drag(move, drag);
    }

    selectItems(elements) {
        const circles = this.state.circles
        elements.forEach(el => {
            el.click(e => {
                if (el.id === e.target.raphaelid) {
                    el.toFront()
                    el.attr({stroke: 'blue', 'stroke-width': 2})
                    circles.toFront()
                }
            })
        });
    }

    addBox() {
        this.state.boxes.push(
            this.paper.rect(20 + this.state.boxes.length * 10, 20, 180, 90, 4).attr({
                fill: '#fff',
                stroke: '#f0f0f0',
                cursor: 'move',
                'stroke-width': 1
            })
        )

        this.state.texts.push(
            this.paper.text(50 + this.state.boxes.length * 10, 50, 'sometext')
        )

        const elements = this.paper.set([...this.state.boxes])
        const texts = this.paper.set([...this.state.texts])

        this.draggable(elements, texts)
        this.selectItems(elements)
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