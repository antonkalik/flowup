import React, { Component, createRef } from 'react'
import { Tools } from '../'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addBox, boxSelect, changeSecond } from '../../store/actions'
import Box from '../parts/Box'

class FlowPage extends Component {
    constructor(props) {
        super(props)
        this.handleRef = createRef()
    }

    selectItem() {
        this.props.boxSelect(true)
    }
 
    addBoxToPaper() {
        this.props.addBox([
            <Box key={this.props.state.boxes.length} {...this.props} onClick={this.selectItem.bind(this)} />
        ])
    }
    
    render() {
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
                            this.props.state.boxes.length === 0 ? <p>No elements</p> : this.props.state.boxes.map(el => el)
                        }
                    </div>
                        {
                            this.props.state.boxSelect ? <div id={'panel'} style={{width: 200}} /> : <div id={'panel'} style={{width: 0}} />
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