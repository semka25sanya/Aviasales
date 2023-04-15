import { LOAD_TICKETS_PART, LOAD_ALL } from './types'

const initialState = {
    tickets: [],
    loading: true,
}

// eslint-disable-next-line default-param-last, import/prefer-default-export
export const ticketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TICKETS_PART:
            return {
                ...state,
                tickets: [...state.tickets, ...action.payload],
            }
        case LOAD_ALL:
            return {
                ...state,
                loading: false,
            }

        // console.log(state)
        // return { ...state }, [...action.payload]

        default:
            return state
    }
}
