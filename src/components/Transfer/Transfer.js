import { Checkbox } from 'antd'
import { useState } from 'react'
import './Transfer.scss'
import { useDispatch, useSelector } from 'react-redux'
import { changeTransfers } from '../../redux/actions'

// import './Transfer.module.scss'
// import Check from '../Checkbox/Checkbox'
// import '../Checkbox/Сheckbox.module.scss'

export default function Transfer() {
    const CheckboxGroup = Checkbox.Group
    const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']

    const dispatch = useDispatch()

    const [checkedList, setCheckedList] = useState('')
    const [indeterminate, setIndeterminate] = useState(true)
    const [checkAll, setCheckAll] = useState(false)

    // eslint-disable-next-line no-unused-vars
    const text = useSelector((state) => state.changeTransfers.transfers)

    const onChange = (list) => {
        setCheckedList(list)
        setIndeterminate(!!list.length && list.length < plainOptions.length)
        setCheckAll(list.length === plainOptions.length)
        dispatch(changeTransfers(list))
    }
    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions : [])
        setIndeterminate(false)
        setCheckAll(e.target.checked)
        dispatch(changeTransfers(e.target.checked ? plainOptions : []))
    }

    return (
        <div className="transfers">
            <span className="transfers__name">Количество пересадок</span>
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll} value={1}>
                Все
            </Checkbox>
            <div className="transfers__low">
                <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
            </div>
        </div>
        // <div className={classes.transfer}>
        //     <h2 className={classes.transferTitle}>Количество пересадок</h2>
        //     <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        //         Все
        //     </Checkbox>

        //     <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
        // </div>
    )
}

// eslint-disable-next-line no-lone-blocks
{
    //
    //
    /* <ul className={classes.transferList}>
                <li className={classes.transferItem}>
                    <input className={classes.transferInput} type="checkbox" id="AllTransfers" />
                    <label htmlFor="AllTransfers">Все</label>
                </li>

                <li className={classes.transferItem}>
                    <input className={classes.transferInput} type="checkbox" id="NoTransfers" />
                    <label htmlFor="NoTransfers">Без пересадок</label>
                </li>

                <li className={classes.transferItem}>
                    <input className={classes.transferInput} type="checkbox" id="OneTransfer" />
                    <label htmlFor="OneTransfer">1 пересадка</label>
                </li>
                <li className={classes.transferItem}>
                    <input className={classes.transferInput} type="checkbox" id="TwoTransfers" />
                    <label htmlFor="TwoTransfers">2 пересадки</label>
                </li>
                <li className={classes.transferItem}>
                    <input className={classes.transferInput} type="checkbox" id="ThreeTransfers" />
                    <label htmlFor="ThreeTransfers">3 пересадки</label>
                </li>
            </ul> */
}
