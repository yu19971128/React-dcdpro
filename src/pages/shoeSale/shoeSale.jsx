import React, { Component } from 'react'
import ShoeLogo from './shoeLogo'
import Hook from './hook'
import Protitle from './protitle'
import ProList from './proList'
import {get} from 'utils/http'
export default class ShoeSale extends Component {
    state={
        proList:[]
    }
    async componentDidMount(){
        let result= await get({
            url:'/jsd/shoe'
        })
        console.log(result);
        this.setState({
            proList:result
        })
        console.log(this.state.proList)
    }
    render() {
        return (
            <div style={{overflow:"scroll"}}>
                <ShoeLogo></ShoeLogo>
                <Hook></Hook>
                <Protitle></Protitle>
                <ProList proList={this.state.proList}></ProList>
            </div>
        )
    }
}
