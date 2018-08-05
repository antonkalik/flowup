import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

const getFromPositon = (boxPositon) => {
  // svg coords shit
};

const getToPositon = (boxPositon) => {
  // svg coords shit
};

const drawLine = (from, to) => {
  // svg line
};

class RenderRelation extends PureComponent {
  render() {
    const from = getFromPositon(this.props.fromBox);
    const to = getFromPositon(this.props.toBox);
    return (
      <g>
        {drawLine(from, to)}
      </g>
    );
  }
}

const mapStateToProps = (state, { relation }) => {
  return {
    fromBox: state.reducers.boxes[relation.fromBox],
    toBox: state.reducers.boxes[relation.toBox],
  };
};

const mapDispatchToProps = (dispatch, { relation }) => {
    return {
      addRelation: (relation) => dispatch(addRelation({ fromBox }, { toBox })),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RenderRelation);
