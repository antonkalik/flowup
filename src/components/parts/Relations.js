import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

const getFromPositon = ({ position }) => {
    return { x: position.x, y: position.y}
}

const getToPositon = ({ position }) => {
    return { x: position.x, y: position.y}
}

const drawLine = (from, to) => {
    return (
        <svg>
            <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke={'#000'} strokeWidth={'2px'}/>
        </svg>
    )
}

class Relations extends PureComponent {
    render() {
        const from = getFromPositon(this.props.fromBox)
        const to = getToPositon(this.props.toBox)

        return (
            <g>
                {
                    drawLine(from, to)
                }
            </g>
        )
    }
}

const mapStateToProps = (state, { relation }) => {
    return {
        fromBox: state.boxes[relation.fromBox],
        toBox: state.boxes[relation.toBox],
    }
}

const mapDispatchToProps = (dispatch, { relation }) => {
    return {
        addRelation: (relation) => dispatch(addRelation({ fromBox }, { toBox })),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Relations)
