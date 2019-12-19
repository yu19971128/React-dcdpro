//使用hooks实现
import React, { Component,useState,useEffect } from 'react'
import {get} from  'utils/http'
import {Riderwrap} from './styledSiders'
import Rideritem from './Rideritem'
import memoize from 'memoize-one'

import Bscroll from 'better-scroll'

// export default class Riders extends Component {
//     state={
//         riderslist:[]
//     }
//     async componentWillMount(){
//         let result = await get({
//             url:'/api/motor/stream/api/news/feed/web/v47/?aid=1230&channel=m_web&device_platform=wap&category=motor_car_cmg&max_behot_time=1574150928&min_behot_time=0&web_id=6757876708164716035&impression_info=%7B%22page_id%22:%22page_cmg_list%22,%22product_name%22:%22m_station%22,%22zt%22:%22default%22%7D&tt_from=load_more',
//         })
       
//         this.setState({
//             riderslist:result.data
//         })
//         console.log(this.state.riderslist);
//         let bScroll = new Bscroll('.wrap-con',{
//             pullUpLoad:true,
//             click:true,
//             probeType:2,
//             mouseWheel:true
//         })
//         bScroll.on('pullingUp',async() =>{
//             if(bScroll.y<bScroll.maxScrollY){
//               let result2=await get({
//                 url:'/api/motor/stream/api/news/feed/web/v47/?aid=1230&channel=m_web&device_platform=wap&category=motor_car_cmg&max_behot_time=1574150928&min_behot_time=0&web_id=6757876708164716035&impression_info=%7B%22page_id%22:%22page_cmg_list%22,%22product_name%22:%22m_station%22,%22zt%22:%22default%22%7D&tt_from=load_more' 
//               })
              
//               this.setState({
//                 riderslist:[...this.state.riderslist,...result2.data]
              
//             })
              
//               bScroll.refresh()
//             }
//             bScroll.finishPullUp()
//            })
//     }
//     render() {
//         return (
//              <Riderwrap className="wrap-con">
//                 <div>
//                  {
//                    this.state.riderslist.map((item,index) => (
//                        <Rideritem key={index} ridersitem={item}></Rideritem>
//                    )) 
//                  }
//                  </div>
//              </Riderwrap>
//         )
//     }
// }

export default function Riders (){

    const [riderslist,setRiders] = useState([]);


    useEffect(async () => {
        let result = await get({
            url:'/api/motor/stream/api/news/feed/web/v47/?aid=1230&channel=m_web&device_platform=wap&category=motor_car_cmg&max_behot_time=1574150928&min_behot_time=0&web_id=6757876708164716035&impression_info=%7B%22page_id%22:%22page_cmg_list%22,%22product_name%22:%22m_station%22,%22zt%22:%22default%22%7D&tt_from=load_more',
            })
            //第一次加载数据，不需要依赖原值。所以不需要使用箭头函数，直接修改就行
            setRiders(result.data)
            let bScroll = new Bscroll('.wrap-con',{
                pullUpLoad:true,
                click:true,
                probeType:2,
                mouseWheel:true
            })
            bScroll.on('pullingUp',async() =>{
                if(bScroll.y<bScroll.maxScrollY){
                    let result2=await get({
                    url:'/api/motor/stream/api/news/feed/web/v47/?aid=1230&channel=m_web&device_platform=wap&category=motor_car_cmg&max_behot_time=1574150928&min_behot_time=0&web_id=6757876708164716035&impression_info=%7B%22page_id%22:%22page_cmg_list%22,%22product_name%22:%22m_station%22,%22zt%22:%22default%22%7D&tt_from=load_more' 
                    })
                    //注意此处，因为要依赖原值，所以要写成回调的形式，否则拿不到上次的值
                    setRiders((riderslist) => {
                        return ([...riderslist,...result2.data])
                    })

                    bScroll.refresh()
                }
                bScroll.finishPullUp()
                })
    },[])
    return (
            <Riderwrap className="wrap-con">
            <div>
                {
                riderslist.map((item,index) => (
                    <Rideritem key={index} ridersitem={item}></Rideritem>
                )) 
                }
                </div>
            </Riderwrap>                                               
    )
}
