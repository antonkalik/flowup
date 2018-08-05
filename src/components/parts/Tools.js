import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { addBox } from '../../redux/actions';

class Tools extends PureComponent {
    render() {
        const tools = ['Division', 'Multiplication', 'Addition', 'Subtraction']
        return (
            <div className={'tools'}>
                {
                    tools.map(tool => <button key={tool} onClick={() => this.props.addBox(tool)}>{tool}</button>)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        relations: state.reducers.relations,
        boxes: state.reducers.boxes,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addBox: (position) => dispatch(addBox(position)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tools);