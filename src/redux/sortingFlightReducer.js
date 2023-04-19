import { SORT_FLIGHTS } from './types'

const initialState = {
    text: 'cheapest',
}

export const sortingFlightReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SORT_FLIGHTS:
            return { ...state, text: action.text }

        default:
            return state
    }
}

export default sortingFlightReducer
