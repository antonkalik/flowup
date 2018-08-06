import React, { PureComponent } from 'react'
import { updateJsonValue } from '../../redux/actions'
import Tools from '../parts/Tools'
import { connect } from 'react-redux'

class JsonPage extends PureComponent {
    state = {}

    static getDerivedStateFromProps(props, state) {
        return {
            ...state,
            boxIdsList: Object.keys(props.boxes),
            relations: Object.values(props.relations),
        }
    }

    onChangeValue = (e) => {
        const value = JSON.parse(e.target.value);
        this.props.updateJsonValue(value)
    }

    render() {
        const { boxes, relations } = this.props

        const convertedObj = JSON.stringify({ boxes, relations }, null, 4)

        return (
            <div className={'jsonpage'}>
            <Tools />
            <div className={'raw'}>
                <textarea
                    value={convertedObj}
                    onChange={this.onChangeValue}
                />
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { relations, boxes } = state
    return {
        relations,
        boxes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateJsonValue: (value) => dispatch(updateJsonValue(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JsonPage)