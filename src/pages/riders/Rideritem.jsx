import React, { Component } from 'react'
import {Ridersitemwrap} from './styledSiders'
import Imglist from './Imglist'
export default class Rideritem extends Component {
    render() {
        return (
           <Ridersitemwrap>
               <div className="author-info">
                   <div className="user-img">
                       <img src={this.props.ridersitem.info.repost_info.image_url} alt=""/>
                   </div>
                   <div className="name-box">
                       {this.props.ridersitem.info.repost_info.name}
                   </div>
               </div>

               <div className="post-content">
                   <div className="post-text">
                       <a href="#" className="post-link">#{this.props.ridersitem.info.repost_info.community_info.motor_name}#</a>
                       <div className="text-box">
                           {this.props.ridersitem.info.repost_info.title}
                       </div>
                   </div>
                   <Imglist imginfo={this.props.ridersitem}></Imglist>
                   <div className="post-foot">
                    <div className="post-digg">
                        {this.props.ridersitem.info.digg_count}
                    </div>
                    <div className="post-comment">
                        {this.props.ridersitem.info.comment_count}
                    </div>
                </div>
               
               </div>
               
           </Ridersitemwrap>
        )
    }
}
