import { createReducer } from '../utils'
import { ADD_BOX, SET_ACTIVE_BOX, INACTIVE, ADD_RELATION, DELETE_RELATION, UPDATE_BOX_POSITION, REMOVE_BOX, UPDATE_BOX_VALUE } from './constants'

const initialState = {
    boxes: {
        '15034904136320446': {
            id: '15034904136320446',
            position: {x: 20, y: 20},
            type: 'Init',
            value: 0
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

    [INACTIVE]: (state) => {
        return {
            ...state,
            activeBoxId: null
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
