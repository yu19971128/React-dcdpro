import React, { Component } from 'react'
import { Rankitemwrap } from './styledrank'
import Rankmedal from './Rankmedal'


export default class Rankitem extends Component {
    render() {
        console.log(this.props)
        return (
           <Rankitemwrap>
               <div className="rankinfo">
                   <Rankmedal rank={this.props.rankitem.rank}></Rankmedal>
                   <div className="equal">
                       <span className="rank_change">
                          {
                                (this.props.rankitem.rank-this.props.rankitem.last_rank)>0 ?
                                <div><i className="up yo-ico">&#xf079;</i>{Math.abs(this.props.rankitem.rank-this.props.rankitem.last_rank)}</div>:
                                ((this.props.rankitem.rank-this.props.rankitem.last_rank)< 0?
                                <div><i className="down yo-ico">&#xf07b;</i>{Math.abs(this.props.rankitem.rank-this.props.rankitem.last_rank)}</div>:
                                <div>_</div>)
                          }
                       </span>
                   </div>
               </div>
               <img src={this.props.rankitem.image} alt="" className="carimg"/>
               <div className="namePrice">
                   <p className="carName">
                     {this.props.rankitem.series_name}
                   </p>
                   <p className="carPrice">
                    {this.props.rankitem.min_price}~{this.props.rankitem.max_price}
                   </p>
               </div>
           </Rankitemwrap>
           )
    }
}
