import { CHANGE_TRANSFERS } from './types'

const initialState = {
    transfers: '',
}

// eslint-disable-next-line default-param-last, import/prefer-default-export
export const changeTransfers = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TRANSFERS:
            // console.log(state)
            return { ...state, transfers: action.transfers }

        default:
            return state
    }
}
