import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { updateBoxPosition, setActiveBox, removeBox } from '../../redux/actions';
import Draggable from 'react-draggable'

// const getFromPositon = (boxPositon) => {
//   // svg coords shit
// };

// const getToPositon = (boxPositon) => {
//   // svg coords shit
// };

// const drawLine = (from, to) => {
//   // svg line
// };

class RenderBox extends PureComponent {

  onDrag = (e) => {
    // detect position via event here
    const position = { x: e.clientX, y: e.clientY }
    this.props.boxPositon(position);
  }

  onStart = () => {
    this.props.setActiveBox();
  }

  onRemove = () => {
    this.props.removeBox()
  }

  render() {
    return (
      <Draggable
        handle={'.handle'}
        defaultPosition={this.props.box.position}
        position={null}
        onDrag={this.onDrag}
        onStart={this.onStart}
      >
        <div className={this.props.isBoxActive ? 'box selected' : 'box'}>
          <div className={'handle'}>
            <div className={'boxHead'}>
                <div><h3>Title</h3></div>
                <div className={'remove'} onClick={() => this.onRemove()}>X</div>
              </div>
          </div>
          <div>
            <div>In</div>
            <div>Out</div>
            <input value={100} onChange={(e) => console.log(e.target.value)} />
          </div>
        </div>
      </Draggable>
    );
  }
}

const mapStateToProps = (state, { box }) => {
  return {
    isBoxActive: state.reducers.activeBoxId === box.id,
  };
};

const mapDispatchToProps = (dispatch, { box }) => {
  return {
    boxPositon: (position) => dispatch(updateBoxPosition(box.id, position)),
    setActiveBox: () => dispatch(setActiveBox(box.id)),
    removeBox: () => dispatch(removeBox(box.id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RenderBox);
