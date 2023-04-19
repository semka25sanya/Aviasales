import { Checkbox } from 'antd'
import { useState } from 'react'
import './Transfer.scss'
import { useDispatch } from 'react-redux'
import { changeTransfers } from '../../redux/actions'

export default function Transfer() {
    const CheckboxGroup = Checkbox.Group
    const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']

    const dispatch = useDispatch()

    const [checkedList, setCheckedList] = useState('')
    const [checkAll, setCheckAll] = useState(false)

    const onChange = (list) => {
        setCheckedList(list)

        setCheckAll(list.length === plainOptions.length)
        dispatch(changeTransfers(list))
    }
    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions : [])
        setCheckAll(e.target.checked)
        dispatch(changeTransfers(e.target.checked ? plainOptions : []))
    }

    return (
        <div className="transfers">
            <span className="transfers__name">Количество пересадок</span>
            <Checkbox className="transfersAll" onChange={onCheckAllChange} checked={checkAll} value={1}>
                Все
            </Checkbox>
            <div className="transfers__low">
                <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
            </div>
        </div>
    )
}
