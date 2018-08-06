import { createReducer } from '../utils'
import {
    ADD_BOX,
    SET_ACTIVE_BOX,
    ADD_RELATION,
    DELETE_RELATION,
    UPDATE_BOX_POSITION,
    DEACTIVATE_BOX,
    REMOVE_BOX,
    UPDATE_BOX_VALUE,
    UPDATE_JSON_VALUE
} from './constants'

const initialState = {
    boxes: {
        '15034904136320446': {
            id: '15034904136320446',
            position: {x: 20, y: 20},
            type: 'Init',
            value: 0
        },
        '8284397942684193': {
            id: '8284397942684193',
            position: {x: 240, y: 20},
            type: 'Addition',
            value: 5
        },
    },
    relations: [{
        fromBox: '15034904136320446',
        toBox: '8284397942684193'
    }]
}

export default createReducer(initialState, {
    [ADD_BOX]: (state, action) => {
        return {
            ...state,
            boxes: {
                ...state.boxes,
                [action.data.box.id]: action.data.box,
            },
        }
    },

    [UPDATE_BOX_VALUE]: (state, action) => {
        const { value, boxId } = action.data
        const box = state.boxes[boxId]
        return {
            ...state,
            boxes: {
                ...state.boxes,
                [boxId]: {
                    ...box,
                    value,
                },
            },
        }
    },

    [UPDATE_JSON_VALUE]: (state, action) => {
        return {
            ...state,
            boxes: action.data.value.boxes
        }
    },

    [REMOVE_BOX]: (state, action) => {
        const { boxId } = action.data
        delete state.boxes[boxId]
        return {
            ...state,
            activeBoxId: null,
            boxes: {
                ...state.boxes,
            },
        }
    },

    [SET_ACTIVE_BOX]: (state, action) => {
        return {
            ...state,
            activeBoxId: action.data.activeBoxId,
        }
    },

    [DEACTIVATE_BOX]: (state, action) => {
        return {
            ...state,
            activeBoxId: action.data
        }
    },

    [ADD_RELATION]: (state, action) => {
        const { relation } = action.data
        return {
            ...state,
            relations: [].concat(state.relations || []).concat(relation),
        }
    },

    [DELETE_RELATION]: (state, action) => {
        const { relation } = action.data
        const relations = [].concat(state.relations || [])
        return {
            ...state,
            relations: {
                [relation.fromBox]: relations.filter((r) => {
                    return r.fromBox !== relation.fromBox && r.toBox !== relation.toBox
                }),
            },
        }
    },

    [UPDATE_BOX_POSITION]: (state, action) => {
        const { position, boxId } = action.data
        const box = state.boxes[boxId]
        return {
            ...state,
            boxes: {
                ...state.boxes,
                [boxId]: {
                    ...box,
                    position,
                },
            },
        }
    },
})
