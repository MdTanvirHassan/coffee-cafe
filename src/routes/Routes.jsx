import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            {/* <Route path='/catalog/:slug' component={Product}/> */}
            <Route path='/catalog' component={Catalog}/>
            
        </Switch>
    )
}

export default Routes
