import React, { Component } from 'react'
import {Seritemwrap} from './styledService'
import {
    NavLink,
} from 'react-router-dom'

export default class seritem extends Component {

    render() {
        return (
        <>
            <NavLink to="/shoesale">
                <Seritemwrap >
                    <div className="img-box1">
                            <img src={this.props.seritem.icon_url} alt=""/>
                    </div>
                    <span className="text-box1">
                            {this.props.seritem.title}
                    </span>
                </Seritemwrap>
            </NavLink>
        </>
        )
    }
}

