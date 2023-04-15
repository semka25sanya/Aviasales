import { SORT_FLIGHTS } from './types'

const initialState = {
    text: 'cheapest',
}

// eslint-disable-next-line default-param-last, import/prefer-default-export
export const sortingFlightReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case SORT_FLIGHTS:
            // console.log(state)
            return { ...state, text: action.text }

        default:
            return state
    }
}
