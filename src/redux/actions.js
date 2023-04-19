import { SORT_FLIGHTS, CHANGE_TRANSFERS, LOAD_TICKETS_PART, LOAD_ALL, LOAD_ERROR } from './types'

import AviasalesApi from '../api/api'

const newId = new AviasalesApi()

export function sortFlights(text) {
    return {
        type: SORT_FLIGHTS,
        text,
    }
}

export function changeTransfers(transfers) {
    return {
        type: CHANGE_TRANSFERS,
        transfers,
    }
}

export function ticketsLoad(id) {
    return (dispatch) => {
        fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
            // eslint-disable-next-line consistent-return
            .then((data) => {
                if (data.status === 500) {
                    dispatch(ticketsLoad(id))
                } else if (data.status === 200) {
                    return data.json()
                } else {
                    dispatch({ type: LOAD_ERROR, error: true })
                }
            })
            .then(({ tickets, stop }) => {
                if (!stop) {
                    dispatch({
                        type: LOAD_TICKETS_PART,
                        payload: tickets,
                        loading: true,
                    })

                    dispatch(ticketsLoad(id))
                } else if (stop) {
                    dispatch({ type: LOAD_ALL, payload: tickets, loading: false })
                }
            })
            .catch(() => {
                dispatch(ticketsLoad(id))
            })
    }
}

export function getSearchId() {
    return (dispatch) => {
        newId.getId().then((id) => dispatch(ticketsLoad(id.searchId)))
    }
}
