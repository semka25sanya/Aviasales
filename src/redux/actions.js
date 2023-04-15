import {
    SORT_FLIGHTS,
    CHANGE_TRANSFERS,
    LOAD_TICKETS_PART,
    LOAD_ALL,

    // GET_ID
} from './types'

import AviasalesApi from '../api/api'

// const baseUrl = 'https://aviasales-test-api.kata.academy'

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
//

// export async function getId() {
//     const response = await fetch('https://aviasales-test-api.kata.academy/search')

//     const jsonData = await response.json()
//     console.log()
//     return jsonData
//     // dispatch({
//     //     type: GET_ID,
//     //     data: jsonData,
//     // })
// }

export function ticketsLoad(id) {
    // eslint-disable-next-line no-unused-vars
    return (dispatch) => {
        fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
            // eslint-disable-next-line consistent-return
            .then((data) => {
                if (data.status === 500) {
                    dispatch(ticketsLoad(id))
                } else if (data.status === 200) {
                    return data.json()
                }
            })
            .then(({ tickets, stop }) => {
                if (!stop) {
                    dispatch({
                        type: LOAD_TICKETS_PART,
                        payload: tickets,
                        loading: true
                    })
                    dispatch(ticketsLoad(id))
                } else if (stop) {
                    dispatch({ type: LOAD_ALL, payload: tickets, loading: false})
                }
            })
            .catch(() => {
                dispatch(ticketsLoad(id))
            })
    }
    //     type: TICKETS_LOAD,
    // })
    // fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${id}`).then((data) => data.json())
    // let idForTicketLoad = null

    // await newId.getId().then((id) => {
    //     // idForTicketLoad = id.searchId
    //    .then((data) => console.log(data))
    // })

    // await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${idForTicketLoad}`).then((data) =>
    //     console.log(data)
    // )
    // eslint-disable-next-line no-unused-vars

    // fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${id.searchId}`
    // const tickets = await )
    // console.log(tickets)
    // return tickets
}

export function getSearchId() {
    return (dispatch) => {
        newId.getId().then((id) => dispatch(ticketsLoad(id.searchId)))
    }
}
