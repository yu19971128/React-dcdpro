import React, { Component } from 'react'
import {Recommendwrap} from './styledChoose'
export default class Recommend extends Component {
    render() {
        return (
            <Recommendwrap>
                {
                  this.props.recommendList.map((item,index) => {
                      return(
                      <div key={item.series_id} className="rec-box">
                          <div className="img-box">
                              <img src={item.cover_image} alt=""/>
                          </div>
                          <div className="name-box">
                              {item.series_name}
                          </div>
                      </div>
                      )
                  })  
                }
            </Recommendwrap>
        )
    }
}
