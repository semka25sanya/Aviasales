/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Alert, Space } from 'antd'
import { useSelector } from 'react-redux'
import Ticket from '../Ticket/Ticket'
import classes from '../App/App.module.scss'

import filterRate from '../../filters/filterRate'
import filterTransfers from '../../filters/filterTransfers'

function TicketsList() {
    const transfers = useSelector((state) => {
        const { changeTransfers } = state

        return changeTransfers.transfers
    })

    const rate = useSelector((state) => {
        const { sortingFlightReducer } = state

        return sortingFlightReducer.text
    })

    const ticketsContent = useSelector((state) => {
        const { ticketsReducer } = state

        const res = filterTransfers(ticketsReducer.tickets, transfers)
        return filterRate(res, rate)
        // return filterRate(ticketsReducer.tickets, rate)
    })

    const [count, setCount] = useState(5)
    const fiveTickets = ticketsContent.slice(0, count)

    const ticketsMain =
        transfers === '' || transfers.length === 0 ? (
            <Alert
                message="Внимание!"
                description="Рейсов, подходящих под заданные фильтры, не найдено"
                type="info"
                showIcon
            />
        ) : (
            fiveTickets.map((item) => (
                <Ticket
                    price={item.price}
                    carrier={item.carrier}
                    segments={item.segments}
                    key={item.price + item.carrier + item.segments[0].duration}
                >
                    {item}
                </Ticket>
            ))
        )

    return (
        <>
            {ticketsMain}
            {transfers === '' || transfers.length === 0 ? null : (
                <button type="button" onClick={() => setCount(count + 5)} className={classes.buttonMore}>
                    Показать еще 5 билетов!
                </button>
            )}
        </>
    )
}

export default TicketsList