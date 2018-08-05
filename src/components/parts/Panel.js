import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { updateBoxValue, removeBox } from '../../redux/actions'

class Panel extends PureComponent {

    onChangeValue = (e) => {
        this.props.updateBoxValue(e.target.value)
    }

    render() {
        const { box } = this.props
        console.log(box)
        return (
            box ? <div className={'panel'}>
                <div className={'panelContent'}>
                    <h3>{box.type}</h3>
                    <input type={'number'} value={box.value} onChange={this.onChangeValue} />
                    <button>Accept</button>
                    <button>Remove</button>
                </div>
            </div> : null
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