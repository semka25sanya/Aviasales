export default class AviasalesApi {
    async getId() {
        const response = await fetch('https://aviasales-test-api.kata.academy/search')

        const jsonData = await response.json()

        return jsonData
    }
}
