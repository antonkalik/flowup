import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { updateBoxValue, removeBox } from '../../redux/actions'

class Panel extends PureComponent {
    state = {}
    static getDerivedStateFromProps(props, state) {
        return {
            ...state,
            value: 'props.box.value',
        }
    }

    onChangeValue = (e) => {
        this.setState((state) => ({
            ...state,
            value: e.target.value,
        }))
        this.props.updateBoxValue(e.target.value)
    }

    render() {
        const { box } = this.props
        console.log(this.props)
        return (
            <div className={'panel'}>
                <div className={'panelContent'}>
                    <h3>{box.type}</h3>
                    <input type={'number'} value={this.state.value} onKeyPress={this.onChangeValue} />
                    <button>Accept</button>
                    <button>Remove</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        activeBox: state.activeBox,
        box: state.boxes[state.activeBox],
    }
}

const mapDispatchToProps = (dispatch, { box }) => {
    return {
        updateBoxValue: (value) => dispatch(updateBoxValue(box.id, value)),
        removeBox: () => dispatch(removeBox(box.id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel)