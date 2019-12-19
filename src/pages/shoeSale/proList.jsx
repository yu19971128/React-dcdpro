import React, { Component } from 'react'
import {ProListwrap} from './styledshoe'
import Proitem from './proitem'
export default class ProList extends Component {
    render() {

        return (
           <>
              <ProListwrap>
                  {
                      this.props.proList.map((item,index)=>{
                          return(
                            <Proitem key={index} pro={item}></Proitem>
                          )
                      })
                    
                  }
                    
              </ProListwrap>
           </>
        )
    }
}
