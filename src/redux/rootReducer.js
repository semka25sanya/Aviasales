import { combineReducers } from 'redux'
import { sortingFlightReducer } from './sortingFlightReducer'
import { changeTransfers } from './transfersReducer'
import { ticketsReducer } from './ticketsReducer'

export const rootReducer = combineReducers({
    sortingFlightReducer,
    changeTransfers,
    ticketsReducer,
})

export default rootReducer
