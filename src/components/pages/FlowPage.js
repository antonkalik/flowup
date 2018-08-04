import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import RenderRelation from '../parts/RenderRelation';
import RenderBox from '../parts/RenderBox';
import { addBox, updateBoxPosition } from '../../redux/actions';

class FlowPage extends PureComponent {
    static getDerivedStateFromProps(props, state) {
        return {
            ...state,
            boxesList: Object.values(props.boxes),
        };
    }

    render() {
        return (
            <div className={'flowpage'}>
            <Tools addbox={() => this.props.addBox()} />
            <div className={'flowchart'}>
                <div className={'chart'}>
                    <div className={'box'}>
                        {
                            this.state.boxesList.map((box) => {
                            return (
                                <RenderBox key={`box-${box.id}`} box={box} />
                                );
                            })
                        }
                    </div>
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
            </div>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => {
    console.log(state)
    return {
        relations: state.paper.relations,
        boxes: state.paper.boxes,
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBoxPosition: (position) => dispatch(updateBoxPosition(position)),
    addBox: (position) => dispatch(addBox(position)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlowPage);
