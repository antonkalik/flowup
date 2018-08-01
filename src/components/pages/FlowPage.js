import React, { Component } from 'react'
import { Tools } from '../'
import Raphael from 'raphael';

export class FlowPage extends Component {
    constructor(props) {
        super(props)
        this.paper = null
        this.state = {
            circles: [],
            boxes: []
        }
    }

    componentDidMount() {
        this.paper = Raphael('chart', '100%', '100%')

        this.setState({ circles: this.paper.set(
            this.paper.circle(10 + this.state.boxes.length * 10, 45, 3),
            this.paper.circle(130 + this.state.boxes.length * 10, 45, 3)
        ).attr({
                'stroke-width': 2,
                stroke: 'blue',
                fill: '#fff'
            }).hide()
        })
    }

    draggable(elements) {
        const circles = this.state.circles
        const drag = function() {
            this.attr({stroke: 'blue', 'stroke-width': 2})

            this.ox = this.type == 'rect' ? this.attr('x') : this.attr('cx');
            this.oy = this.type == 'rect' ? this.attr('y') : this.attr('cy');
            
            const attr1 = {
                cx: this.attr('x'),
                cy: this.attr('y') + 25
            }

            const attr2 = {
                cx: this.attr('x') + 120,
                cy: this.attr('y') + 25
            }
            
            circles[0].attr(attr1).show()
            circles[1].attr(attr2).show()
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

        const up = function() {
            
        }

        elements.drag(move, drag, up);
    }

    selectItems(elements) {
        const circles = this.state.circles
        elements.forEach(el => {
            el.click(e => {
                if (el.id === e.target.raphaelid) {
                    elements.attr({
                        fill: '#fff',
                        stroke: '#f0f0f0',
                        cursor: 'grab',
                        'stroke-width': 1
                    })
                    
                    el.attr({stroke: 'blue', 'stroke-width': 2})
                }
            })
            
        });
    }

    addBox() {
        this.state.boxes.push(
            this.paper.rect(20 + this.state.boxes.length * 10, 20, 120, 50, 4).attr({
                fill: '#fff',
                stroke: '#f0f0f0',
                cursor: 'move',
                'stroke-width': 1
            })
        )
        
        const elements = this.paper.set([...this.state.boxes]).toBack()

        this.draggable(elements)
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