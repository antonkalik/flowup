import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addBox } from '../../redux/actions'

const tools = [{
        type: 'Division',
        value: 2,
    },
    {
        type: 'Multiplication',
        value: 3,
    },
    {
        type: 'Addition',
        value: 5,
    },
    {
        type: 'Subtraction',
        value: 10,
    }]

class Tools extends PureComponent {
    render() {
        return (
            <div className={'tools'}>
                {
                    tools.map(({type, value}) =>
                        <button
                            key={type}
                            onClick={() => this.props.addBox(type, value)}>
                                {type}
                        </button>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        relations: state.relations,
        boxes: state.boxes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBox: (type, value, position) => dispatch(addBox(type, value, position)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tools)