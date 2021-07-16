import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import App from '../App'
import Description from './Description'


function router() {
    return (
        <div>
           
                <Route exact path='/' component={App}/>
                <Route path='/description/:title' component={Description}/>
             
        </div>
    ) 
}

export default router
