import { add } from 'date-fns'

export function getTimeFromMins(mins) {
    const hours = Math.trunc(mins / 60)
    const minutes = mins % 60
    return `${hours} ч ${minutes} м`
}

export function departureTime(data) {
    const newData = new Date(data)
    const hours = newData.getHours()
    const minutes = newData.getMinutes()
    return `${hours}:${minutes} `
}

export function arrivalTime(dataOne, dataTwo) {
    const result = add(new Date(dataOne), { minutes: dataTwo })
    let hours = result.getHours()
    let mins = result.getMinutes()

    hours = hours < 10 ? `0${hours}` : hours
    mins = mins < 10 ? `0${mins}` : mins

    return `${hours}:${mins}`
}
