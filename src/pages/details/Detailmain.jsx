import React, { Component } from 'react'
import {Mainwrap} from './styleddetails'
import {get} from 'utils/http'
export default class Detailmain extends Component {
    state={
        detailinfo:{},
    }
    async componentDidMount(){
        let result=await get({
            url: "/api/motor/m/article/detail",
            params: {
              group_id:this.props.detailinfo.id
            }
        })
        this.setState({
            detailinfo:result.data
        })
      
    }
    render() {  
        if(this.state.detailinfo.title===undefined){
            return false;
        }
        if(this.props.detailinfo.type==3){
        return (
          <Mainwrap>
                <div className="wgt-feed-head">
                   <div className="box-title">
                     {this.state.detailinfo.title}
                   </div>
                   <div className="article-meta">
                     <span className="source">
                       {this.state.detailinfo.source}
                     </span>
                     <span className="publish-time">
                        {this.state.detailinfo.publish_time}
                     </span>
                   </div>
               </div>
               <div className="details-con"  dangerouslySetInnerHTML={{__html: this.state.detailinfo.content}}></div>
          </Mainwrap>
        )
        }else{
            return (
                <Mainwrap>
                    <div className="video-box">
                        <img src={`http://p3.pstatp.com/large/w240/${this.state.detailinfo.video_info.cover_uri}.png`} alt=""/>
                    </div>
                    <div className="vedio-info">
                         <div className="info-title">
                            <h2>{this.state.detailinfo.title}</h2>
                            <i className="yo-ico more-ico">&#xf033;</i>
                        </div>
                        <span className="mdie">{this.state.detailinfo.source}</span>
                        <span className="mdie">{Math.round((this.state.detailinfo.video_play_count)/1000)}万次观看</span>
                    </div>

                    <div className="cpt-feed-car-card">
                         <div className="feed-slogan">
                            <span className="sp1">相关车型</span>
                            <span className="sp2">数据来源于懂车帝APP</span>
                         </div>
                         <div className="car-wrap">
                            <div className="car-img">
                                <img src={this.state.detailinfo.car_card.cover} alt=""/>
                            </div>

                            <div className="others-info">
                               <div className="car-name">
                                  <div className="name">
                                    {this.state.detailinfo.car_card.series_name}
                                  </div>
                                  
                                       <div  className="price">
                                            暂无报价
                                        </div>
                                    {/* <div className="price">
                                        {this.state.detailinfo.car_card.offical_price}
                                   </div> */}
                                </div>
                                <div className="ask">
                                    询底价
                                </div>
                            </div>
                         </div>
                    </div>
                </Mainwrap>
            )
        }
    }
}
