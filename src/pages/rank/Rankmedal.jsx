import React, { Component } from 'react'
import { Rankmedalwrapone ,Rankmedalwraptwo ,Rankmedalwrapthree,Rankmedalwrap} from './styledrank'
export default class Rankmedal extends Component {
    render() {
        console.log(this.props.rank)
        if(this.props.rank===1){
            return (
                <Rankmedalwrapone></Rankmedalwrapone>
            )
        }else if(this.props.rank===2){
            return(
            <Rankmedalwraptwo></Rankmedalwraptwo>
            )
        }else if(this.props.rank===3){
            return(
                <Rankmedalwrapthree></Rankmedalwrapthree>
                )
        }else{
            return(
                <Rankmedalwrap>
                    {this.props.rank}
                </Rankmedalwrap>
                )
        }
    }
}
