import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

const getFromPositon = (fromPosition) => {
    // do pos 1
}

const getToPositon = (toPosition) => {
    // do pos 2
}

const drawLine = (from, to) => {
    // svg line
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
