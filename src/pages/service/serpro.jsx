import {SerproWrap} from './styledService'
import Seritem from './seritem'
import React, { Component } from 'react'

export default class Serpro extends Component {
    render() {
        return (
           <>
              <SerproWrap>
                  {
                    this.props.serList.map((item,index) => {
                        return(
                        <Seritem key={index} seritem={item}></Seritem>
                        )
                    })
                  }
              </SerproWrap>
           </>
        )
    }
}
