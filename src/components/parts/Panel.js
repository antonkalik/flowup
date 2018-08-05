import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { updateBoxValue, removeBox } from '../../redux/actions'

class Panel extends PureComponent {
    state = {}
    static getDerivedStateFromProps(props, state) {
        return {
            ...state,
            value: props.box.value,
        }
    }

    onChangeValue = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            value: e.target.value,
        }))
        this.props.updateBoxValue(e.target.value)
    }

    render() {
        const { box } = this.props
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
        box: state.boxes[state.activeBoxId],
    }
}

const mapDispatchToProps = (dispatch, { activeBoxId }) => {
    return {
        updateBoxValue: (value) => dispatch(updateBoxValue(activeBoxId, value)),
        removeBox: () => dispatch(removeBox(activeBoxId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel)