import React, { Component } from 'react'
import logoimg from 'assets/image/logo.png'
import clientimg from 'assets/image/client.png'
import Choose from './choose/Choose'
import smallVideo from './smallVideo/SmallVideo'
import Index from './index/article'
import Service from './service/Service'
import Rank from './rank/rank'
import Riders from './riders/Riders'
import ArticleItems from '../components/articleList/articleItem'
import { Layoutwrap } from './styledLayout'
import {
    Route,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom'
export default class Layout extends Component {
    render() {
        return (
            <>
            <Layoutwrap>
                  <header>
                    <div className="logo-box"><img  className="logoimg" src={logoimg} alt=""></img></div>
                    <input className="search-box" type="text" placeholder="搜你所想" />
                    <div className="client">
                        <div className="img-box"><img src={clientimg} alt=""/></div>
                        <div className="text-box">
                                打开<br />客户端
                        </div>
                        <div className="more-box">
                            <i className="yo-ico">&#xf07e;</i>
                       </div>
                    </div>
                   </header>
                    <div className="nav-box">
                        <div className="nav">
                               <NavLink to="/index" className="nav-item fontc"  activeClassName="active">首页</NavLink>
                               <NavLink to="/choose" className="nav-item fontc"  activeClassName="active">选车</NavLink>
                               <NavLink to="/smallVideo" className="nav-item fontc"  activeClassName="active">小视频</NavLink>
                               <NavLink to="/rank" className="nav-item fontc" activeClassName="active">排行榜</NavLink>
                               <NavLink to="/service" className="nav-item" activeClassName="active">服务</NavLink>
                               <NavLink to="/riders" className="nav-item" activeClassName="active">车友圈</NavLink>
                           {/* <a className="nav-item" href="">
                               <NavLink to="" >车友圈</NavLink>
                           </a>
                           <a className="nav-item" href="">
                               <NavLink to="" >小视频</NavLink>
                           </a>
                           <a className="nav-item" href="">
                               <NavLink to="" >排行榜</NavLink>
                           </a>
                           <a className="nav-item" href="">
                               <NavLink>服务</NavLink>
                           </a>
                           <a className="nav-item" href="">
                               <NavLink to="" >文章</NavLink>
                           </a>
                           <a className="nav-item" href="">
                               <NavLink to="" >视频</NavLink>
                           </a> */}
                        </div>
                    </div> 

                    <main className="mainbox">
                    <Switch>
                        <Route
                            path="/index"
                            component={Index}
                        />
                        <Route
                            path="/smallVideo"
                            component={smallVideo}
                        />
                        <Route 
                            path="/choose"
                            component={Choose}
                        />
                        <Route
                            path="/service"
                            component={Service}
                        />
                        <Route 
                            path="/rank"
                            component={Rank}
                        />
                        <Route 
                            path="/riders"
                            component={Riders}
                        />
                         <Redirect
                            //精准匹配
                            exact
                            from="/"
                            to='/index'
                        />
                    </Switch>
                    </main>
                    
                </Layoutwrap>
               
            </>
                )
            }
}

