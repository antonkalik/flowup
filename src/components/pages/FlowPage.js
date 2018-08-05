import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import RenderRelation from '../parts/RenderRelation';
import RenderBox from '../parts/RenderBox';
import { addBox } from '../../redux/actions';
import { Tools } from '../parts/Tools'

class FlowPage extends PureComponent {
    static getDerivedStateFromProps(props, state) {
        return {
            ...state,
            boxesList: Object.values(props.boxes),
            relations: Object.values(props.relations),
        };
    }

    render() {
        return (
            <div className={'flowpage'}>
            <Tools addbox={() => this.props.addBox()} />
            <div className={'flowchart'}>
                <div className={'chart'}>
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
                                        key={`${relation.fromBox}-${relation.toBox}`}
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
        isAnyBoxesActive: !!state.reducers.activeBoxId
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBox: (position) => dispatch(addBox(position)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlowPage);
