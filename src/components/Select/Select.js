import { Radio } from 'antd'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortFlights } from '../../redux/actions'
import './Select.scss'

// import AviasalesApi from '../../api/api'

// // const baseUrl = 'https://aviasales-test-api.kata.academy'

// const newId = new AviasalesApi()

function Select() {
    // eslint-disable-next-line no-unused-vars
    const text = useSelector((state) => {
        const { sortingFlightReducer } = state

        return sortingFlightReducer.text
    })

    // eslint-disable-next-line no-unused-vars
    const [flights, setFlights] = useState('cheapest')

    const dispatch = useDispatch()

    function changeSelect(e) {
        setFlights(e.target.value)
        dispatch(sortFlights(e.target.value))
    }

    // console.log(flights)

    return (
        // eslint-disable-next-line react/jsx-no-bind
        <Radio.Group onChange={changeSelect} className="selectGroup" defaultValue="cheapest" buttonStyle="solid">
            <Radio.Button className="select" value="cheapest">
                Самый дешевый
            </Radio.Button>
            <Radio.Button className="select" value="fastest">
                Самый быстрый
            </Radio.Button>
            <Radio.Button className="select" value="optimal">
                Оптимальный
            </Radio.Button>
        </Radio.Group>
    )
}
export default Select

// const contentStyle = {
//     height: '160px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
// }

// function Select() {
//     const [dotPosition, setDotPosition] = useState('top')
//     const handlePositionChange = ({ target: { value } }) => {
//         // style={{background: '#2196f3', color: 'white' }}
//         setDotPosition(value)
//     }
//     return (
//         <Radio.Group
//             onChange={handlePositionChange}
//             value={dotPosition}
//             style={{
//                 marginBottom: 8,
//             }}
//         >
//             <Radio.Button className={classes.select} value="cheapest">
//                 Самый дешевый
//             </Radio.Button>
//             <Radio.Button className={classes.select} value="fastest">
//                 Самый быстрый
//             </Radio.Button>
//             <Radio.Button className={classes.select} value="optimal">
//                 Оптимальный
//             </Radio.Button>
//         </Radio.Group>
//     )
// }

// export default Select
