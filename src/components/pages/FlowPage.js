import React, { Component } from 'react'
import { Tools } from '../'
import Raphael from 'raphael';

export class FlowPage extends Component {

    componentDidMount() {

        const paper = Raphael('chart', '100%', '100%')
        const boxSize = [90, 50, 4]

        var rectangles = paper.set(
            paper.rect(190, 100, ...boxSize),
            paper.rect(290, 20, ...boxSize),
            paper.rect(310, 190, ...boxSize),
            paper.rect(450, 150, ...boxSize),
            paper.rect(550, 150, ...boxSize)
        ).attr({
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
            })
        }

        rectangles.drag(move, startDrag);
    }
    
    render() {
        
        return (
            <div className={'flowpage'}>
                <Tools />
                <div className={'flowchart'}>
                    <div id={'chart'}></div>
                </div>
            </div>
        )
    }
}