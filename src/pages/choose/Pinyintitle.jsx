import React, { Component } from 'react'
import {Pinyintitlewrap} from './styledChoose'
import Car from './Car'
export default class Pinyintitle extends Component {
 
    render() {
        
        return (
           <>
                <Pinyintitlewrap >
                    <div className="pin">
                    {this.props.item.info.pinyin}
                    </div>
                </Pinyintitlewrap>
                {
                    this.props.all.map((item,index) => {
                        
                        if(this.props.item.info.pinyin===item.info.pinyin && item.type!=='1000'){
                        return(
                           <Car key={index} item={item}></Car>
                        )
                        
                    }
                  }
                )
                
                }
           </>
        )
    }
}
