/* eslint-disable no-else-return */

const filterRate = (tickets, rate) => {
    if (rate === 'cheapest') {
        tickets.sort((a, b) => a.price - b.price)
    }
    if (rate === 'fastest') {
        tickets.sort(
            (a, b) =>
                a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
        )
    }

    if (rate === 'optimal') {
        tickets.sort((a, b) => {
            if (
                a.segments[0].stops.length + a.segments[1].stops.length <
                b.segments[0].stops.length + b.segments[1].stops.length
            ) {
                return -1
            } else if (
                a.segments[0].stops.length + a.segments[1].stops.length >
                b.segments[0].stops.length + b.segments[1].stops.length
            ) {
                return 1
            } else if (
                a.price + a.segments[0].duration + a.segments[1].duration <
                b.price + b.segments[0].duration + b.segments[1].duration
            ) {
                return -1
            } else if (
                a.price + a.segments[0].duration + a.segments[1].duration >
                b.price + b.segments[0].duration + b.segments[1].duration
            ) {
                return 1
            } else if (a.price < b.price) {
                return -1
            } else if (a.price > b.price) {
                return 1
            } else {
                return 0
            }
        })
    }

    return tickets
}

export default filterRate
