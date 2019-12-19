import React, { Component } from 'react'
import {Classifywrap} from './styledrank'
import Car from './Car'
import {
    Route,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom'

export default class Classify extends Component {
    render() {
        return (
            <>
                <Classifywrap>
                    <div className="tabBox">
                        <NavLink  to="/rank/car" className="otheritem1"  activeClassName="active1">轿车</NavLink>
                        <NavLink  to="/rank/suv" className="middleitem"                                                activeClassName="active1">SUV</NavLink>
                        <NavLink  to="/rank/mvp" className="otheritem2"  activeClassName="active1">MVP</NavLink>
                    </div> 
                </Classifywrap>
                {/* <Switch>
                        <Route
                            path="/rank/car"
                            component={Car}
                        />
                </Switch> */}
            </>
        )
    }
}
