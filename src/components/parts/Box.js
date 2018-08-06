import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { updateBoxPosition, setActiveBox, removeBox, updateBoxValue } from '../../redux/actions'
import Draggable from 'react-draggable'

class Box extends PureComponent {
    onCalculate = (type, valIn, val) => {
        switch (type) {
            case 'Multiplication':
                return valIn * val
                break;
            case 'Division':
                return valIn / val
                break;
            case 'Addition':
                return valIn + val
                break;
            case 'Subtraction':
                return valIn - val
                break;
            default:
                return val
        }
    }

    onDrag = (e) => {
        const position = { x: e.clientX, y: e.clientY }
        this.props.boxPositon(position)
    }

    onStart = () => {
        this.props.setActiveBox()
    }

    onRemove = () => {
        this.props.removeBox()
    }

    onChangeValue = (e) => {
        this.props.boxValue(parseInt(e.target.value))
    }

    render() {
    const { isBoxActive, box, setActiveBox } = this.props
    return (
            <Draggable
                handle={'.handle'}
                defaultPosition={box.position}
                onDrag={this.onDrag}
                onStart={this.onStart}
            >
                <div onClick={setActiveBox} className={isBoxActive ? 'box selected' : 'box'}>
                    <div className={'handle'}>
                        <div className={'boxHead'}>
                            <div><h3>{box.type}</h3></div>
                            <div className={'remove'} onClick={this.onRemove}>{isBoxActive ? <div className={'fas fa-times'} /> : null}</div>
                        </div>
                    </div>
                    <div className={'boxBody'}>
                        {
                            box.type !== 'Init' ?
                            <div className={'boxIn'}>
                                <div className={'dot dotIn'}>
                                    <svg>
                                        <circle stroke={isBoxActive ? '#0772f5' : '#e6e6e6'}cx={'6'} cy={'6'} r={'4'}/>
                                    </svg>
                                </div>
                                <div className={'val'}><span>In: </span>{box.value}</div>
                            </div> : null
                        }
                        <div className={'boxOut'}>
                            <div className={'val'}><span>Out: </span>{this.onCalculate(box.type, box.value, box.value)}</div>
                            <div className={'dot dotOut'}>
                                <svg>
                                    <circle stroke={isBoxActive ? '#0772f5' : '#e6e6e6'} cx={'6'} cy={'6'} r={'4'} />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={'boxFooter'}>
                        <input
                            type={'number'}
                            value={box.value}
                            onChange={this.onChangeValue}
                        />
                    </div>
                </div>
            </Draggable>
        )
    }
}

const mapStateToProps = (state, { boxId }) => {
    return {
        box: state.boxes[boxId],
        isBoxActive: state.activeBoxId === boxId,
    }
}

const mapDispatchToProps = (dispatch, { boxId }) => {
    return {
        boxPositon: (position) => dispatch(updateBoxPosition(boxId, position)),
        boxValue: (value) => dispatch(updateBoxValue(boxId, value)),
        setActiveBox: () => dispatch(setActiveBox(boxId)),
        removeBox: () => dispatch(removeBox(boxId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Box)