import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Relations from '../parts/Relations'
import Box from '../parts/Box'
import { deActivate } from '../../redux/actions'
import Tools from '../parts/Tools'
import Panel from '../parts/Panel'

class FlowPage extends PureComponent {
    state = {}

    static getDerivedStateFromProps(props, state) {
        return {
            ...state,
            boxIdsList: Object.keys(props.boxes),
            relations: Object.values(props.relations),
        }
    }

    // deactivate if any boxes active by click on chart
    deActivate = (e) => {
        if (e.target.className === 'chart') {
            this.props.deAcitvate()
        }
    }

    render() {
        const { activeBoxId, relations } = this.props
        return (
            <div className={'flowpage'}>
                <Tools />
                <div className={'flowchart'}>
                    <div onClick={this.deActivate} className={'chart'}>
                    {
                        this.state.boxIdsList.map((boxId) => {
                            return <Box key={`box-${boxId}`} boxId={boxId} />
                        })
                    }
                    <svg>
                        {
                            relations.map((relation) => {
                                return (
                                    <Relations
                                        key={`${relation.fromBox}${relation.toBox}`}
                                        relation={relation}
                                    />
                                )
                            })
                        }
                    </svg>
                </div>
                        {
                            activeBoxId ? <Panel activeBoxId={activeBoxId} /> : null
                        }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { relations, boxes, activeBoxId } = state
    return {
        relations,
        boxes,
        activeBoxId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deAcitvate: () => dispatch(deActivate()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlowPage)