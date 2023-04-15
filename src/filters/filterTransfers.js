const filterTransfers = (tickets, valueOfTransfers) => {
    function stops(stop) {
        return stop.segments[0].stops.length + stop.segments[1].stops.length
    }

    for (let i = 0; i < valueOfTransfers.length; i++) {
        const numberTransfers = Number(valueOfTransfers[i][0])
        const withoutTransfers = valueOfTransfers[0] === 'Без пересадок'

        if (valueOfTransfers.length === 1 && valueOfTransfers.includes(valueOfTransfers[i])) {
            return tickets.filter((item) => (withoutTransfers ? stops(item) === 0 : stops(item) === numberTransfers))
        }
        if (valueOfTransfers.length === 2 && valueOfTransfers.includes(valueOfTransfers[i])) {
            return tickets.filter((item) =>
                withoutTransfers
                    ? stops(item) === 0 || stops(item) === Number(valueOfTransfers[1][0])
                    : stops(item) === numberTransfers || stops(item) === numberTransfers + 1
            )
        }
        if (valueOfTransfers.length === 3 && valueOfTransfers.includes(valueOfTransfers[i])) {
            return tickets.filter((item) =>
                withoutTransfers
                    ? stops(item) === 0 ||
                      stops(item) === Number(valueOfTransfers[1][0]) ||
                      stops(item) === Number(valueOfTransfers[2][0])
                    : stops(item) === numberTransfers ||
                      stops(item) === numberTransfers + 1 ||
                      stops(item) === numberTransfers + 2
            )
        }
    }

    return tickets
}

export default filterTransfers
