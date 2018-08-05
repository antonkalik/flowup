import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import RenderRelation from '../parts/RenderRelation';
import RenderBox from '../parts/RenderBox';
import { deActivate } from '../../redux/actions';
import Tools from '../parts/Tools'
import Panel from '../parts/Panel'

class FlowPage extends PureComponent {
    state = {}

    static getDerivedStateFromProps(props, state) {
        return {
            ...state,
            boxesList: Object.values(props.boxes),
            relations: Object.values(props.relations),
        };
    }

    // deactivate if any boxes active by click on chart
    deActivate = (e) => {
        if (e.target.className === 'chart') {
            this.props.deAcitvate()
        }
    }

    render() {
        let { activeBox } = this.props
        return (
            <div className={'flowpage'}>
                <Tools />
                <div className={'flowchart'}>
                    <div onClick={(e) => this.deActivate(e)} className={'chart'}>
                        {
                            this.state.boxesList.map((box) => {
                            return (
                                <RenderBox key={`box-${box.id}`} box={box} />
                                );
                            })
                        }
                        <svg>
                            {
                                this.props.relations.map((relation) => {
                                    return (
                                        <RenderRelation
                                            key={`${relation.fromBox}${relation.toBox}`}
                                            relation={relation}
                                        />
                                    );
                                })
                            }
                        </svg>
                    </div>
                    <Panel />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let { relations, boxes, activeBox } = state.reducers;
    return {
        relations,
        boxes,
        activeBox
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deAcitvate: () => dispatch(deActivate()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlowPage);