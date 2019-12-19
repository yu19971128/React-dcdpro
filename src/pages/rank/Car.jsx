import React, { Component } from 'react'
import {get} from 'utils/http'
import { Ranktypewrap } from './styledrank'
import Rankitem from './Rankitem'
import BScroll from 'better-scroll'
export default class Car extends Component {
    state={
        rankitemlist:[],
        offset:0
    }
    async componentDidMount(){
        let result = await get({
            url:`/api/motor/car_show/v1/get_rank/?rank_type=100&offset=${this.state.offset}&limit=15&city_name=%E5%8C%97%E4%BA%AC`,
        })
        this.setState({
            rankitemlist:result.data
        })
        console.log(this.state.rankitemlist)
      let bScroll =  new BScroll('.listwrap',{
        pullUpLoad:true,
        click:true,
        probeType:2,
        mouseWheel:true
          
      })
      bScroll.on('pullingUp',async() =>{
        if(bScroll.y<bScroll.maxScrollY ){
          if(this.state.offset<90){
            this.setState({
                offset:this.state.offset+15,
            })
            let result2=await get({
                url:`/api/motor/car_show/v1/get_rank/?rank_type=100&offset=${this.state.offset}&limit=15&city_name=%E5%8C%97%E4%BA%AC` 
            })
            
            this.setState({
                rankitemlist:[...this.state.rankitemlist,...result2.data]
            
            })
            
            bScroll.refresh()
       }else if(this.state.offset>90&&this.state.offset<100){
            this.setState({
                offset:this.state.offset+10,
            })
                let result2=await get({
                    url:`/api/motor/car_show/v1/get_rank/?rank_type=100&offset=100&limit=15&city_name=%E5%8C%97%E4%BA%AC` 
                })
                
                this.setState({
                    rankitemlist:[...this.state.rankitemlist,...result2.data]
                
                })
                
                bScroll.refresh()
             }else{
                 return false;
             }
        }
        bScroll.finishPullUp()
       })
      
    }
    render() {
        return (
            <div style={{
              flex:1,
              overflow:"hidden",
              display:"flex",
              flexDirection:"column",
            }}>
                <Ranktypewrap>
                   <a className="rankTypeitem" href="javascript:void(0)">全部</a>
                   <a className="rankTypeitem" href="javascript:void(0)">紧凑型车</a>
                   <a className="rankTypeitem" href="javascript:void(0)">微型车</a>
                   <a className="rankTypeitem" href="javascript:void(0)">小型车</a>
                   <a className="rankTypeitem" href="javascript:void(0)">中型车</a>
                   <a className="rankTypeitem" href="javascript:void(0)">中大型车</a>
                   <a className="rankTypeitem" href="javascript:void(0)">大型车</a> 
                </Ranktypewrap>
                <div className="listwrap" style={{
                     flex:1,
                     overflow:"hidden"
                }}>
                    <div>
                    {
                        this.state.rankitemlist.map((item,index) => (
                            <Rankitem key={item.series_id} rankitem={item}></Rankitem>
                        ))
                    }
                    </div>
                </div>
            </div>
        )
    }
}
