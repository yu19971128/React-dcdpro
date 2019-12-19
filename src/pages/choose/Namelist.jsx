import React, { Component } from 'react'
import {Namelistwrap} from './styledChoose'
export default class Namelist extends Component {
    handleClick=(id)=>{
        return () => {
           
            // console.log(id,this.props)
            // let target = this.props.$refs[id][0]
            //  this.props.bscroll.scrollToElement(<this.props.ele.current />)
        }
    }
    render() {
        return (
            <>
                <Namelistwrap>
                    {
                    this.props.namelist.map((item,index) => (
                        <li key={index} className="frist-name" onClick={this.handleClick(index)}>
                            {item.info.pinyin}
                        </li>
                    ))
                   
                   }
                </Namelistwrap>
            </>
        )
    }
}
