import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

const getFromPositon = (boxPositon) => {
    // svg coords shit
}

const getToPositon = (boxPositon) => {
    // svg coords shit
}

const drawLine = (from, to) => {
    // svg line
}

class Relations extends PureComponent {
    render() {
        const from = getFromPositon(this.props.fromBox)
        const to = getFromPositon(this.props.toBox)
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
