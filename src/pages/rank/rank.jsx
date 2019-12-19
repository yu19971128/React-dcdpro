import React, { Component } from 'react'
import Classify from './Classify'
import Car from './Car'
import Mvp from './Mvp'
import Suv from './Suv'
import {
    Route,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom'


export default class rank extends Component {
    render() {
        return (
            <div style={{
               height:"100%",
               display:"flex",
               flexDirection:"column",
            }}>
                <Classify></Classify>
                <Switch>
                        <Route 
                            path="/rank/car"
                            component={Car}
                        />
                        <Route 
                           path="/rank/mvp"
                           component={Mvp}
                        />
                        <Route 
                            path="/rank/suv"
                            component={Suv}
                        />
                        {/* 解决首次进入此页面的渲染问题 */}
                        <Redirect
                           from="/rank"
                           to="/rank/car"
                        />
                    </Switch>
            </div>
        )
    }
}
