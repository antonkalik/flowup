import { createReducer } from '../utils';
import { ADD_BOX, SET_ACTIVE_BOX, INACTIVE, ADD_RELATION, DELETE_RELATION, UPDATE_BOX_POSITION, REMOVE_BOX } from './constants';

const initialState = {
  boxes: {
    '15034904136320446': {
      id: '15034904136320446',
      position: {x: 20, y: 20},
      type: 'Init'
    },
    '67738743847829384': {
      id: '67738743847829384',
      position: {x: 250, y: 20},
      type: 'Division'
    },
  },
  relations: []
}

export default createReducer(initialState, {
  [ADD_BOX]: (state, action) => {
    return {
      ...state,
      boxes: {
        ...state.boxes,
        [action.data.box.id]: action.data.box,
      },
    };
  },

  [REMOVE_BOX]: (state, action) => {
    const { boxId } = action.data
    delete state.boxes[boxId]; 
    return {
      ...state,
      boxes: {
        ...state.boxes,
      }
    };
  },

  [SET_ACTIVE_BOX]: (state, action) => {
    return {
      ...state,
      activeBoxId: action.data.activeBoxId,
    };
  },

  [INACTIVE]: (state) => {
    return {
      ...state,
      activeBoxId: false
    };
  },

  [ADD_RELATION]: (state, action) => {
    const { relation } = action.data;
    return {
      ...state,
      relations: [].concat(state.relations || []).concat(relation),
    };
  },

  [DELETE_RELATION]: (state, action) => {
    const { relation } = action.data;
    const relations = [].concat(state.relations || []);
    return {
      ...state,
      relations: {
        [relation.fromBox]: relations.filter((r) => {
          return r.fromBox !== relation.fromBox && r.toBox !== relation.toBox;
        }),
      },
    };
  },

  [UPDATE_BOX_POSITION]: (state, action) => {
    const { position, boxId } = action.data;
    const box = state.boxes[boxId];

    return {
      ...state,
      boxes: {
        ...state.boxes,
        [boxId]: {
          ...box,
          position,
        },
      },
    };
  },
});
