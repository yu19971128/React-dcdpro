import React, { Component } from 'react'
import {get} from 'utils/http'
import {Smallvideowrap} from './styledSmallvideo'
import Bscroll from 'better-scroll'

export default class SmallVideo extends Component {
    constructor(){
        super()
        this.leftHeight = 0;
        this.rightHeight = 0;
    }
    state={
        leftList:[],
        rightList:[]
    }
    async componentDidMount(){
        let result = await get({
          url:'/api/motor/stream/api/news/feed/web/v47/?aid=1230&channel=m_web&device_platform=wap&category=motor_car_ugc&max_behot_time=0&min_behot_time=1574591936&web_id=6757876708164716035&impression_info=%7B%22page_id%22%3A%22page_ugc_video%22%2C%22product_name%22%3A%22m_station%22%2C%22zt%22%3A%22default%22%7D&tt_from=pull&aid=1230&channel=m_web&device_platform=wap&category=motor_car_ugc&max_behot_time=0&min_behot_time=1574591936&web_id=6757876708164716035&impression_info=%7B%22page_id%22:%22page_ugc_video%22,%22product_name%22:%22m_station%22,%22zt%22:%22default%22%7D&tt_from=pull'
        })
        console.log(result);
        for(var i of result.data){
            if(this.leftHeight<=this.rightHeight){
                // this.leftlist.push(i)
                this.setState((state) => {
                    return({
                        leftList:[...state.leftList,i]
                    }
                    )
                })
                this.leftHeight+=i.info.image_list[0].height  
            }else{
                this.setState((state) => {
                    return({
                        rightList:[...state.rightList,i]
                    }
                    )
                })
                this.rightHeight+=i.info.image_list[0].height
            }
        
    }
     console.log(this.state.leftList,this.state.rightList,this.leftHeight,this.rightHeight)
     
     let bscroll=new Bscroll('.wrap-con',{
        pullUpLoad:true,
        click:true,
        probeType: 2,
        mouseWheel: true
   })

   bscroll.on('pullingUp',async () =>{
    if(bscroll.y<bscroll.maxScrollY){
      let result2=await get({
        url:'/api/motor/stream/api/news/feed/web/v47/?aid=1230&channel=m_web&device_platform=wap&category=motor_car_ugc&max_behot_time=0&min_behot_time=1574591936&web_id=6757876708164716035&impression_info=%7B%22page_id%22%3A%22page_ugc_video%22%2C%22product_name%22%3A%22m_station%22%2C%22zt%22%3A%22default%22%7D&tt_from=pull&aid=1230&channel=m_web&device_platform=wap&category=motor_car_ugc&max_behot_time=0&min_behot_time=1574591936&web_id=6757876708164716035&impression_info=%7B%22page_id%22:%22page_ugc_video%22,%22product_name%22:%22m_station%22,%22zt%22:%22default%22%7D&tt_from=pull',
      })
      for(var i of result2.data){
        if(this.leftHeight<=this.rightHeight){
            // this.leftlist.push(i)
            this.setState((state) => {
                return({
                    leftList:[...state.leftList,i]
                }
                )
            })
            this.leftHeight+=i.info.image_list[0].height  
        }else{
            this.setState((state) => {
                return({
                    rightList:[...state.rightList,i]
                }
                )
            })
            this.rightHeight+=i.info.image_list[0].height
        }
     }
      bscroll.refresh()
    }                                                                                                                         
    bscroll.finishPullUp()
  })

    }
    render() {
        return (
           <Smallvideowrap className="wrap-con">
                <div className="video-con">
                    <div className="left-con">
                        {
                            this.state.leftList.map((item,index) => (
                              <div className="left-wrap" key={item.unique_id}>
                                  {
                                    // (item.info.imge_list[0].height>=leftitem.info.image_list[0].width) ? 
                                    // <img src={item.info.image_list[0].url} alt="">:
                                    // <img src={item.info.image_list[0].url} alt=""/>
                                    item.info.image_list[0].height>=item.info.image_list[0].width?
                                    <div className="left-box"><img src={item.info.image_list[0].url} alt=""/></div>:
                                    <div className="left-box1"><img src={item.info.image_list[0].url} alt=""/></div>
                                  }
                               </div>
                            ))
                        }
                    </div>
                    <div className="right-con">
                        {
                            this.state.rightList.map((item,index) => (
                              <div className="right-wrap" key={item.unique_id}>
                                  {
                                    // (item.info.imge_list[0].height>=leftitem.info.image_list[0].width) ? 
                                    // <img src={item.info.image_list[0].url} alt="">:
                                    // <img src={item.info.image_list[0].url} alt=""/>
                                    item.info.image_list[0].height>=item.info.image_list[0].width?
                                    <div className="right-box"><img src={item.info.image_list[0].url} alt=""/></div>:
                                    <div className="right-box1"><img src={item.info.image_list[0].url} alt=""/></div>
                                  }
                               </div>
                            ))
                        }
                    </div>
                </div>
           </Smallvideowrap>
        )
    }
}
