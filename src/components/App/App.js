import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './App.module.scss'
import Transfer from '../Transfer/Transfer'
import Select from '../Select/Select'

import { getSearchId } from '../../redux/actions'
import TicketsList from '../TicketList/TicketList'
import imgLogo from '../../images/Logo.svg'

function App() {
    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 30,
                marginBottom: '20px',
            }}
            spin
        />
    )

    // eslint-disable-next-line no-unused-vars
    const load = useSelector((state) => {
        const { ticketsReducer } = state

        return ticketsReducer.loading
    })

    const loadingIcon = load === true ? <Spin indicator={antIcon} /> : null

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSearchId())
    }, [])

    return (
        <div className={classes.app}>
            <img className={classes.logo} alt="" src={imgLogo} />

            <div className={classes.information}>
                <Transfer />

                <div className={classes['main-content']}>
                    <Select />
                    {loadingIcon}
                    <TicketsList />
                </div>
            </div>
        </div>
    )
}

export default App
