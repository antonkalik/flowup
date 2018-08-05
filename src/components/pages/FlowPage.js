import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import RenderRelation from '../parts/RenderRelation';
import RenderBox from '../parts/RenderBox';
import { deActivate } from '../../redux/actions';
import Tools from '../parts/Tools'

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
        console.log(this.props)
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
                    {
                        this.props.isAnyBoxesActive ? <div id={'panel'} style={{width: 200}} /> : <div id={'panel'} style={{width: 0}} />
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        relations: state.reducers.relations,
        boxes: state.reducers.boxes,
        isAnyBoxesActive: state.reducers.activeBoxId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deAcitvate: () => dispatch(deActivate()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlowPage);