import React, { Component } from 'react'
import Serpro from './serpro'
import {get} from 'utils/http'
import Article from '../index/article'

export default class Service extends Component {
    state={
        serList:[]
    }
    async componentDidMount(){
        let result  =await get({
            url:"/api/motor/serv_page/api/v1/m/service_head?aid=1230&channel=m_web&device_platform=wap&category=motor_car_video&web_id=6757876708164716035&version_code=0&zt=default",
        })
        this.setState({
            serList:[...this.state.serList,...result.data.service_list]
        })
        console.log(this.state.serList)
    }
    render() {
        return (
            <> 
                    <Serpro serList={this.state.serList}></Serpro>
                    <Article></Article>
            </>
        )
    }
}
