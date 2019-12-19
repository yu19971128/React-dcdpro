import React, { Component } from 'react'
import {
    ArticleItem,
    ArticleItem1
} from './styledarticleList'

export  class ArticleItems extends Component {
    render() {
        return (
            <>
            { 
            <ArticleItem>
               <div className="detailid">
                    <p className ="title">{this.props.item.info.abstract_content}}</p>
                    <ul className="img-list">
                        <li>
                            <img src={this.props.item.info.image_list[0].url} alt=""/>
                        </li>
                      
                        <li>
                            <img src={this.props.item.info.image_list[1].url} alt=""/>
                        </li>
                       
                        <li>
                            <img src={this.props.item.info.image_list[2].url} alt=""/>
                        </li>
                    </ul>
                    <div className="article-footer">
                        <span>{this.props.item.info.source}</span>
                        <span>{this.props.item.info.comment_count}评论</span>
                    </div>
               </div>
           </ArticleItem>
            }
            </>
                )
        }
}


export  class ArticleItems1 extends Component {
    render() {
        return (
            <>
            <ArticleItem1>
                <p className="title">{this.props.item.info.abstract_content}</p>
               <div className="article-img">
                   <img src={this.props.item.info.image_list[0].url_list[0].url} alt=""/>
               </div>
               <div className="article-footer">
                        <span>{this.props.item.info.source}</span>
                        <span>{this.props.item.info.comment_count}评论</span>
               </div>
               </ArticleItem1>
            </>
        )
    }
}
