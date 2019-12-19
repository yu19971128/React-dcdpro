import React, { Component } from 'react'
import Feeditem from './Feeditem'
import {get} from 'utils/http'
import {Feedwrap} from './styleddetails'
export default class Feed extends Component {
    state={
        feed:[]
    }
    async componentDidMount(){
       
        let result2= await get({
            url:'/jsd/relted',
    
          })
        this.setState({
            feed:[...this.state.feed,...result2]
        })
    }
    render() {
            return (
            <Feedwrap>
        {
            this.state.feed.map((item,index) => {
                if(item.video!==null){
                    return(
                     
                        <Feeditem key={item.id} feeditem={item}></Feeditem>
                        
                    )
                } 
            })
        }
           </Feedwrap> 
            )
       
    }
}
