import { ADD_BOX, SET_ACTIVE_BOX, ADD_RELATION, DELETE_RELATION, UPDATE_BOX_POSITION, DEFAULT_TYPE, INACTIVE, REMOVE_BOX } from './constants';

const generateId = () => `${Math.random() * 1000}-${new Date().getTime()}`;
const generatePositon = () => ({ x: 20, y: 20 });

export const addBox = (type = DEFAULT_TYPE, position) => {
  return {
    type: ADD_BOX,
    data: {
      box: {
        id: generateId(),
        type,
        position: position || generatePositon(),
      },
    },
  };
};

export const removeBox = (boxId) => {
  return {
    type: REMOVE_BOX,
    data: {
      boxId,
    },
  };
};

export const setActiveBox = (activeBoxId) => {
  return {
    type: SET_ACTIVE_BOX,
    data: {
      activeBoxId,
    },
  };
};

export const deActivate = (activeBoxId) => {
  return {
    type: INACTIVE,
    data: {
      activeBoxId,
    }
  };
};

export const addRelation = (formBox, toBox) => {
  return {
    type: ADD_RELATION,
    data: {
      relation: {
        formBox,
        toBox,
      },
    },
  };
};

export const deleteRelation = (formBox, toBox) => {
  return {
    type: DELETE_RELATION,
    data: {
      relation: {
        formBox,
        toBox,
      },
    },
  };
};


export const updateBoxPosition = (boxId, position) => {
  return {
    type: UPDATE_BOX_POSITION,
    data: {
      boxId,
      position,
    },
  };
};


/*
{
  box: {
    1: {
      type: '',
      position: {},
    },
    2: {
      type: '',
      position: {},
    }
  }
}
*/
