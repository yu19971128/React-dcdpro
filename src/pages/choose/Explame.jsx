import React, { Component } from 'react'
import {Explamewrap} from './styledChoose'
export default class Explame extends Component {
    render() {
        return (
          <Explamewrap>
          {
            this.props.explameList.map((item,index) => {
            return(
              <div key={item.brand_id} className="explame-item">
                  <span className="pic-box">
                      <img src={item.image_url} alt=""/>
                  </span>
                  <span className="name-box">
                      {item.brand_name}
                  </span>
              </div>
            )
            })
           
          }
          </Explamewrap>
        )
    }
}
