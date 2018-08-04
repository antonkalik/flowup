import { ADD_BOX, BOX_SELECT, ACTION_CHANGE_SECOND } from './consts'

const initialState = {
    boxes: [],
    boxSelect: false,
    second: 'Two'
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOX:
            return { 
                ...state,
                boxes: [...state.boxes, action.payload]
            }
        case BOX_SELECT:
            return { 
                ...state,
                boxSelect: action.payload
            }

        case ACTION_CHANGE_SECOND:
            return { ...state, second: action.payload }
    }
    return state
}