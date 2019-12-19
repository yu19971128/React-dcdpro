import React, { Component } from 'react'
import {Carwrap} from './styledChoose'
export default class Car extends Component {
    render() {
        return (
            <>
                <Carwrap>
                    <div className="now">
                        <div className="now-img">
                            <img src={this.props.item.info.image_url} alt=""/>
                        </div>
                        <div className="brand-name">
                            {this.props.item.info.brand_name}
                        </div>
                    </div>      
                </Carwrap>
            </>
        )
    }
}
