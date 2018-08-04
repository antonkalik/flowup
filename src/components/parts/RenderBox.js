import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { updateBoxPosition, setActiveBox } from '../../redux/actions';

const getFromPositon = (boxPositon) => {
  // svg coords shit
};

const getToPositon = (boxPositon) => {
  // svg coords shit
};

const drawLine = (from, to) => {
  // svg line
};

class RenderBox extends PureComponent {
  onDrag = (e) => {
    const positon = e.target.positon;
    this.props.updateBoxPosition(positon);
  }

  onStart = () => {
    this.props.setActiveBox();
  }

  render() {
    return (
      <Draggable
        handle={'.handle'}
        defaultPosition={this.props.box.position}
        onDrag={this.onDrag}
        onStart={this.onStart}
      >
        <div className={this.props.isBoxActive ? 'active' : 'inactive'}>
          <div className={'handle'}>Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
    );
  }
}

const mapStateToProps = (state, { box }) => {
  return {
    isBoxActive: state.paper.activeBoxId === box.id,
  };
};

const mapDispatchToProps = (dispatch, { box }) => {
  return {
    updateBoxPosition: (postion) => dispatch(updateBoxPosition(box.id, position)),
    setActiveBox: () => dispatch(setActiveBox(box.id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RenderBox);
