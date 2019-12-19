import React, { Component } from 'react'
import {Navwrap}  from './styleddetails'
import logoimg from 'assets/image/logo.png'
import clientimg from 'assets/image/client.png'

export default class Navbox extends Component {
    handleClick=()=>{
        this.props.route.history.goBack();
    }
    render() {
        return (
            <>
                <Navwrap>
                    <div className="nav-banner">
                        <div onClick={this.handleClick} className="nav-back">
                        <i className="yo-ico">&#xf07d;</i>
                        </div>
                        <div className="logo-box">
                            <div className="logo">
                                <img src={logoimg} alt=""/>
                            </div>
                            <div className="act-details">
                                 文章详情
                            </div>
                        </div>
                   

                    <div className="client">
                        <div className="img-box">
                            <img src={clientimg} alt=""/>
                        </div>
                        <div className="text-box">
                            打开<br/>客户端
                        </div>
                        <div className="more-box">
                            <i></i>
                        </div>
                    </div>
                    </div>

                    {/* <div className="cpt-feed-car-card">
                      <div className="feed-slogan">
                        <span className="sp1">相关车型</span>
                        <span className="sp2">数据来源于懂车帝APP</span>
                      </div>
                      
                    </div> */}
                </Navwrap>
            </>
        )
    }
}
