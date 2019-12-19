import React, { Component } from 'react'
import {Feeditemwrap} from './styleddetails'
export default class Feeditem extends Component {
    render() {
       
        return (
            <>
              <Feeditemwrap>
                  <div className="left">
                      <img src={this.props.feeditem.video.cover_image_url} alt=""/>
                  </div>
                  <div className="right">
                    <div className="feed-title">
                       {this.props.feeditem.title}
                    </div>
                    <div className="feed-meta">
                       {this.props.feeditem.author.name }
                    </div>
                  </div>
              </Feeditemwrap>
            </>
        )
    }
}
