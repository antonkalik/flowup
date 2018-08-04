import { ADD_BOX, BOX_SELECT, ACTION_CHANGE_SECOND } from './consts'

export const addBox = newBox => {
    return {
        type: ADD_BOX,
        payload: newBox
    }
}

export const boxSelect = select => {
    return {
        type: BOX_SELECT,
        payload: select
    }
}

export const changeSecond = newSecond => {
    return {
        type: ACTION_CHANGE_SECOND,
        payload: newSecond
    }
}