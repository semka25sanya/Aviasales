import { CHANGE_TRANSFERS } from './types'

const initialState = {
    transfers: '',
}

export const changeTransfers = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_TRANSFERS:
            return { ...state, transfers: action.transfers }

        default:
            return state
    }
}

export default changeTransfers
