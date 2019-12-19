import React, { Component } from 'react'
import {Proitemwrap} from './styledshoe'

export default class Proitem extends Component {
    render() {
        console.log(this.props)
        return (
           <>
               <Proitemwrap>
                   <div className="imgbox">
                        <img src={this.props.pro.img} alt=""/>
                   </div>
                   <div className="infobox">
                       <div className="typebox">
                           {this.props.pro.type}
                       </div>
                       <div className="price">
                           ￥{this.props.pro.price}
                       </div>
                   </div>
               </Proitemwrap>
           </>
        )
    }
}
