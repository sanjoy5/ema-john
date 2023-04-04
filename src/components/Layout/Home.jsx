import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from '../Header/Header'

const Home = () => {
    return (
        <div>
            <Headers />
            <Outlet />
        </div>
    )
}

export default Home