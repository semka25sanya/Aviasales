// eslint-disable-next-line import/no-extraneous-dependencies
import { add } from 'date-fns'
import classes from './Ticket.module.scss'

export default function Ticket({ price, segments, carrier }) {
    function getTimeFromMins(mins) {
        const hours = Math.trunc(mins / 60)
        const minutes = mins % 60
        return `${hours} ч ${minutes} м`
    }

    function departureTime(data) {
        const newData = new Date(data)
        const hours = newData.getHours()
        const minutes = newData.getMinutes()
        return `${hours}:${minutes} `
    }

    function arrivalTime(dataOne, dataTwo) {
        const result = add(new Date(dataOne), { minutes: dataTwo })
        let hours = result.getHours()
        let mins = result.getMinutes()

        hours = hours < 10 ? `0${hours}` : hours
        mins = mins < 10 ? `0${mins}` : mins

        return `${hours}:${mins}`
    }
    const urlForImg = `https://pics.avs.io/99/36/${carrier}.png`
    return (
        <li className={classes.Ticket}>
            <div className={classes.TicketTop}>
                <p className={classes.TicketPrice}>{price} P</p>
                <img alt="icon" className={classes.TicketIcon} src={urlForImg} />
            </div>
            <div className={classes.TicketBottom}>
                <ul className={classes.TicketFlightTo}>
                    <li className={classes.TicketFlightToItem}>
                        <p className={classes.TicketFlightToTop}>
                            {segments[0].destination} - {segments[0].origin}
                        </p>
                        <p className={classes.TicketFlightToBottom}>
                            {departureTime(segments[0].date)} – {arrivalTime(segments[0].date, segments[0].duration)}
                        </p>
                    </li>
                    <li className={classes.TicketFlightToItem}>
                        <p className={classes.TicketFlightToTop}>В пути</p>
                        <p className={classes.TicketFlightToBottom}>{getTimeFromMins(segments[0].duration)}</p>
                    </li>
                    <li className={classes.TicketFlightToItem}>
                        <p className={classes.TicketFlightToTop}>{segments[0].stops.length} пересадки</p>
                        <p className={classes.TicketFlightToBottom}>{segments[0].stops.join(', ')}</p>
                    </li>
                </ul>

                <ul className={classes.TicketFlightFrom}>
                    <li className={classes.TicketFlightFromItem}>
                        <p className={classes.TicketFlightFromTop}>
                            {' '}
                            {segments[1].destination} - {segments[1].origin}
                        </p>
                        <p className={classes.TicketFlightFromBottom}>
                            {' '}
                            {departureTime(segments[1].date)} – {arrivalTime(segments[1].date, segments[1].duration)}
                        </p>
                    </li>
                    <li className={classes.TicketFlightFromItem}>
                        <p className={classes.TicketFlightFromTop}>В пути</p>
                        <p className={classes.TicketFlightFromBottom}>{getTimeFromMins(segments[1].duration)}</p>
                    </li>
                    <li className={classes.TicketFlightFromItem}>
                        <p className={classes.TicketFlightFromTop}>{segments[1].stops.length} пересадки</p>
                        <p className={classes.TicketFlightFromBottom}>{segments[1].stops.join(', ')}</p>
                    </li>
                </ul>
            </div>
        </li>
    )
}
