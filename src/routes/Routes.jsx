import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'


const Router = () => {
    return (
        <Routes>
            <Route path='/' exact component={Home}/>
            {/* <Route path='/catalog/:slug' component={Product}/> */}
            <Route path='/catalog' component={Catalog}/>
            
        </Routes>
    )
}

export default Router
