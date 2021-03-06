import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addBox } from '../../redux/actions'

const tools = [
    {
        type: 'Division',
        value: 2,
        icon: 'fa-divide'
    },
    {
        type: 'Multiplication',
        value: 3,
        icon: 'fa-times'
    },
    {
        type: 'Addition',
        value: 5,
        icon: 'fa-plus'
    },
    {
        type: 'Subtraction',
        value: 10,
        icon: 'fa-minus'
    }
]

class Tools extends PureComponent {
    render() {
        return (
            <div className={'tools'}>
                {
                    tools.map(({type, value, icon}) =>
                        <button
                            key={type}
                            onClick={() => this.props.addBox(type, value)}>
                                <i className={`fas ${icon}`}></i>{type}
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