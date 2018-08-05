import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { updateBoxPosition, setActiveBox, removeBox, updateBoxValue } from '../../redux/actions';
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
    const position = { x: e.clientX, y: e.clientY }
    this.props.boxPositon(position);
  }

  onStart = () => {
    this.props.setActiveBox();
  }

  onRemove = () => {
    this.props.removeBox()
  }

  onChangeValue = (value) => {
    this.props.boxValue(value)
  }

  render() {
    let { isBoxActive } = this.props
    return (
      <Draggable
        handle={'.handle'}
        defaultPosition={this.props.box.position}
        position={null}
        onDrag={this.onDrag}
        onStart={this.onStart}
      >
        <div onClick={() => this.props.setActiveBox()} className={isBoxActive ? 'box selected' : 'box'}>
          <div className={'handle'}>
            <div className={'boxHead'}>
                <div><h3>{this.props.box.type}</h3></div>
                <div className={'remove'} onClick={() => this.onRemove()}>{isBoxActive ? <div className={'fas fa-times'} /> : null}</div>
              </div>
          </div>
          <div className={'boxBody'}>
            <div className={'boxIn'}>
              <div className={'dot dotIn'}>
                <svg>
                  <circle stroke={isBoxActive ? '#0772f5' : '#e6e6e6'}  cx={'6'} cy={'6'} r={'4'}/>
                </svg> 
              </div>
              <div className={'val'}><span>In:</span> 50</div>
            </div>
            <div className={'boxOut'}>
              <div className={'val'}><span>Out:</span> 150</div>
              <div className={'dot dotOut'}>
                <svg>
                  <circle stroke={isBoxActive ? '#0772f5' : '#e6e6e6'} cx={'6'} cy={'6'} r={'4'}/>
                </svg>
              </div>
            </div>
          </div>
          <div className={'boxFooter'}>
            <input type={'number'} value={this.props.box.value} onChange={(e) => this.onChangeValue(e.target.value)} />
          </div>
        </div>
      </Draggable>
    );
  }
}

const mapStateToProps = (state, { box }) => {
  return {
    isBoxActive: state.reducers.activeBox.id === box.id,
  };
};

const mapDispatchToProps = (dispatch, { box }) => {
  return {
    boxPositon: (position) => dispatch(updateBoxPosition(box.id, position)),
    boxValue: (value) => dispatch(updateBoxValue(box.id, value)),
    setActiveBox: () => dispatch(setActiveBox(box)),
    removeBox: () => dispatch(removeBox(box.id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RenderBox);
