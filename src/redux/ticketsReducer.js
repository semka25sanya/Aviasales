import { LOAD_TICKETS_PART, LOAD_ALL, LOAD_ERROR } from './types'

const initialState = {
    tickets: [],
    loading: true,
    error: false,
}

export const ticketsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOAD_TICKETS_PART:
            return {
                ...state,
                tickets: [
                    ...state.tickets,
                    ...action.payload.filter(
                        (ticket) =>
                            !state.tickets.some(
                                (t) =>
                                    t.price === ticket.price &&
                                    t.carrier === ticket.carrier &&
                                    t.segments[0].date === ticket.segments[0].date
                            )
                    ),
                ],
            }

        case LOAD_ALL:
            return {
                ...state,
                loading: false,
            }

        case LOAD_ERROR:
            return {
                ...state,
                error: true,
            }

        default:
            return state
    }
}

export default ticketsReducer
