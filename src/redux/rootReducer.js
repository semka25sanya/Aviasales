import { combineReducers } from 'redux'
import { sortingFlightReducer } from './sortingFlightReducer'
import { changeTransfers } from './transfersReducer'
import { ticketsReducer } from './ticketsReducer'

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
    sortingFlightReducer,
    changeTransfers,
    ticketsReducer,
})
