import React, { Component, createRef } from 'react'
import { Tools } from '../'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addBox, boxSelect, changeSecond } from '../../store/actions'
import Box from '../parts/Box'
import Draggable from 'react-draggable';

class FlowPage extends Component {
    constructor(props) {
        super(props)
        this.handleRef = createRef()
    }

    clickByItem() {
        console.log(this)
        this.children.ref.current.style.border = '2px solid blue'
    }

    selectItem() {
        this.props.boxSelect(true)
    }
    
    addBoxToPaper() {
        this.props.addBox(
            <Draggable
                key={this.props.state.boxes.length}
                handle={'.handle '}
                defaultPosition={{x: 20, y: 20}}
                position={null}
                onStart={this.clickByItem}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
            >
                <div key={this.props.state.boxes.length} className={'box'} onClick={() => this.selectItem()} ref={this.handleRef}>
                    <div className={'handle'}>
                        <div className={'boxHead'}>
                                <h3>Init</h3>
                        </div>
                    </div>
                    <div className={'boxContent'}>
                        <div className={'boxBody'}>
                            <div className={'boxIn'}>
                                In
                            </div>
                            <div className={'BoxOut'}>
                                Out
                            </div>
                        </div>
                        <div className={'boxFooter'}>
                            <input onChange={() => {}} value={10} />
                        </div>
                    </div>
                </div>
            </Draggable>
        )
    }
    
    render() {
        const { boxes, boxSelect } = this.props.state
        return (
            <div className={'flowpage'}>
                <Tools addbox={() => this.addBoxToPaper()} />
                <div className={'flowchart'}>
                    <div 
                        id={'chart'}
                        onClick={e => e.target.className === 'chart' ? this.props.boxSelect(false) : null}
                        className={'chart'}
                    >
                        {
                            boxes.length === 0 ? <p>No elements</p> : boxes.map(el => el)
                        }
                    </div>
                        {
                            boxSelect ? <div id={'panel'} style={{width: 200}} /> : <div id={'panel'} style={{width: 0}} />
                        }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { state }
}

const mapDispatchToProps = dispatch => {
    return {
        addBox: bindActionCreators(addBox, dispatch),
        boxSelect: bindActionCreators(boxSelect, dispatch),
        changeSecond: bindActionCreators(changeSecond, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FlowPage)