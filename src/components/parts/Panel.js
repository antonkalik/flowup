import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { updateBoxValue, removeBox } from '../../redux/actions';

class Panel extends PureComponent {
    onChangeValue = (value) => {
        this.props.boxValue(value)
    }

    render() {
        let { box } = this.props
        return (
            <div className={'panel'} style={{width: box.id ? 200 : 0}}>
                <div className={'panelContent'}>
                    <h3>{box.type}</h3>
                    <input type={'number'} value={box.value} onChange={(e) => this.onChangeValue(e.target.value)} />
                    <button>Accept</button>
                    <button>Remove</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      activeBox: state.reducers.activeBox,
    };
};
  
const mapDispatchToProps = (dispatch, { box }) => {
    return {
      boxValue: (value) => dispatch(updateBoxValue(box.id, value)),
      removeBox: () => dispatch(removeBox(box.id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Panel);