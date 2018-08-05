import { ADD_BOX, SET_ACTIVE_BOX, ADD_RELATION, DELETE_RELATION, UPDATE_BOX_POSITION, DEFAULT_TYPE, INACTIVE, REMOVE_BOX, UPDATE_BOX_VALUE } from './constants';

const generateId = () => `${new Date().getTime() * Math.random() * 10000}`;

const generatePositon = () => ({ x: 20, y: 20 });

export const addBox = (type = DEFAULT_TYPE, value = 1, position) => {
  return {
    type: ADD_BOX,
    data: {
      box: {
        id: generateId(),
        type,
        value,
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

export const setActiveBox = (box) => {
  return {
    type: SET_ACTIVE_BOX,
    data: {
      activeBox: {
        id: box.id,
        position: box.position,
        type: box.type,
        value: box.value
      },
    },
  };
};

export const deActivate = (activeBox) => {
  return {
    type: INACTIVE,
    data: {
      activeBox,
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

export const updateBoxValue = (boxId, value) => {
  return {
    type: UPDATE_BOX_VALUE,
    data: {
      boxId,
      value,
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
