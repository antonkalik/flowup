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

    doDeActivate = (e) => {
        if (e.target.className.baseVal === 'svgBack') {
            this.props.deActivate()
        }
    }

    render() {
        const { activeBoxId, relations } = this.props
        return (
            <div className={'flowpage'}>
                <Tools />
                <div className={'flowchart'}>
                    <div onClick={this.doDeActivate} className={'chart'}>
                        {
                            this.state.boxIdsList.map((boxId) => {
                                return <Box
                                    key={`box-${boxId}`}
                                    boxId={boxId}
                                />
                            })
                        }
                        <svg className={'svgBack'}>
                            {
                                relations.map((relation) => {
                                    return <Relations
                                        key={`${relation.fromBox}${relation.toBox}`}
                                        relation={relation}
                                    />
                                })
                            }
                        </svg>
                    </div>
                    <Panel activeBoxId={activeBoxId} />
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
        deActivate: () => dispatch(deActivate()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlowPage)