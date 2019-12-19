import React, { Component } from 'react'
import {ImgListwrap} from './styledSiders'

export default class Imglist extends Component {
    
    render() {
        
        if(this.props.imginfo.info.video_detail_info!==null){
            return (
                <ImgListwrap>
                    <div className="post-video">
                        <img src={this.props.imginfo.info.video_detail_info.detail_video_large_image.url} alt=""/>
                    </div>
                </ImgListwrap>
            )
        }else{
            return (
                <ImgListwrap>
                   <div className="big-box">
                       {
                           this.props.imginfo.info.image_list.map((item,index) => (
                               <div key={index} className="post-img">
                               <img  src={item.url} alt=""/>
                               </div>
                           ))
                       }
                   </div>
                </ImgListwrap>
            )
        }
        
    }
}
