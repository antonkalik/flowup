import {
    ADD_BOX,
    SET_ACTIVE_BOX,
    ADD_RELATION,
    DELETE_RELATION,
    UPDATE_BOX_POSITION,
    DEFAULT_TYPE,
    DEACTIVATE_BOX,
    REMOVE_BOX,
    UPDATE_BOX_VALUE,
    UPDATE_JSON_VALUE
} from './constants'

const generateId = () => `${new Date().getTime() * Math.random() * 10000}`

const generatePositon = () => {
    const x = Math.floor(Math.random() * 100)
    const y = Math.floor(Math.random() * 100)
    return { x, y }
}

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
  }
}

export const removeBox = (boxId) => {
    return {
        type: REMOVE_BOX,
        data: {
            boxId,
        },
    }
}

export const setActiveBox = (activeBoxId) => {
    return {
        type: SET_ACTIVE_BOX,
        data: {
            activeBoxId,
        },
    }
}

export const deActivate = () => {
    return {
        type: DEACTIVATE_BOX,
        data: null
    }
}

export const addRelation = (formBox, toBox) => {
    return {
        type: ADD_RELATION,
        data: {
            relation: {
                formBox,
                toBox,
            },
        },
    }
}

export const deleteRelation = (formBox, toBox) => {
    return {
        type: DELETE_RELATION,
        data: {
            relation: {
                formBox,
                toBox,
            },
        },
    }
}

export const updateBoxPosition = (boxId, position) => {
    return {
        type: UPDATE_BOX_POSITION,
        data: {
            boxId,
            position,
        },
    }
}

export const updateBoxValue = (boxId, value) => {
    return {
        type: UPDATE_BOX_VALUE,
        data: {
            boxId,
            value,
        },
    }
}

export const updateJsonValue = (value) => {
    return {
        type: UPDATE_JSON_VALUE,
        data: {
            value,
        },
    }
}