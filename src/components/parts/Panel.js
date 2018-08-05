import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { updateBoxValue, removeBox } from '../../redux/actions';

class Panel extends PureComponent {
    onChangeValue = (value) => {
        this.props.boxValue(value)
    }

    render() {
        let { activeBox } = this.props
        return (
            <div className={'panel'} style={{width: activeBox.id ? 200 : 0}}>
                <div className={'panelContent'}>
                    <h3>{activeBox.type}</h3>
                    <input type={'number'} value={activeBox.value} onChange={(e) => this.onChangeValue(e.target.value)} />
                    <button>Accept</button>
                    <button>Reset</button>
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
  
const mapDispatchToProps = (dispatch, props) => {
    console.log('Тут нужно чтобы появились пропсы:', props)
    return {
      boxValue: (value) => dispatch(updateBoxValue(activeBox.id, value)),
      removeBox: () => dispatch(removeBox(activeBox.id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Panel);