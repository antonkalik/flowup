import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { addBox } from '../../redux/actions';

const tools = [{
        type: 'Division',
        value: 2,
    },
    {
        type: 'Multiplication',
        value: 3,
    },
    {
        type: 'Addition',
        value: 5,
    },
    {
        type: 'Subtraction',
        value: 10,
    }]

class Tools extends PureComponent {
    render() {
        const lastPostion = Object.values(this.props.boxes).slice(-1)[0].position
        const position = {x: lastPostion.x + 20, y: lastPostion.y}
        
        return (
            <div className={'tools'}>
                {
                    tools.map(tool => 
                        <button 
                            key={tool.type}
                            onClick={() => this.props.addBox(tool.type, tool.value, position)}>
                                {tool.type}
                            </button>
                        )
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
        addBox: (type, value, position) => dispatch(addBox(type, value, position)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tools);