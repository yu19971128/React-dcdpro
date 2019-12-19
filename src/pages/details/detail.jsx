import React, { Component } from 'react'
import {Detailwrap} from './styleddetails'
import Navbox from './nav'
import Detailmain from './Detailmain'
import Feed from './Feed'
import Test from './Test'
export default class Detail extends Component {
    render() {
        return (
            <>
              <Detailwrap >
                    <Navbox route={this.props}></Navbox>
                    <div style={{flex:1,
                                 overflow:"scroll",
                                height:"100%",
                                background:"#fff"}}>
                    <Detailmain detailinfo={{id:this.props.match.params.id,type:this.props.match.params.type}}></Detailmain>
                    <Feed></Feed>
                    </div>
                    <Test></Test>
              </Detailwrap>
            </>
        )
    }
}
