import { Radio } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sortFlights } from '../../redux/actions'
import './Select.scss'

function Select() {
    const [flights, setFlights] = useState('cheapest')

    const dispatch = useDispatch()

    function changeSelect(e) {
        setFlights(flights)
        dispatch(sortFlights(e.target.value))
    }

    return (
        <Radio.Group
            onChange={(e) => changeSelect(e)}
            className="selectGroup"
            defaultValue="cheapest"
            buttonStyle="solid"
        >
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
