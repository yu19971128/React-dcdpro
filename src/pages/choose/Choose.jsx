import React,{Component} from 'react'
import {get} from 'utils/http'
import Explame from './Explame'
import Recommend from './Recommend'
import Pinyintitle from './Pinyintitle'
import Namelist from './Namelist'
import {Choosewrap} from './styledChoose'
import Bscroll from 'better-scroll'

export default class Choose extends Component{
    constructor(props) {
        super(props);
        this.ref=React.createRef()
        this.toEle = []
      }
    state={
        explame:[],
        recommend:[],
        pinyin:[],
        all:[],
        bscroll:{},
    }
    async componentDidMount(){
        let result = await get({
            url:'/api/motor/brand/m/v1/brand/?device_id=0',
        })
        for(var i  of result.data){
            if(i.type ==='1000'){
             this.state.pinyin.push(i)
             
            }
            this.setState({})
           }
        this.setState({
            explame:result.data[0].info.brand,
            recommend:result.data[0].info.series,
            all:result.data
        })
        let bscroll = new Bscroll('.mainbox',{
            pullUpLoad:true,
            click:true,
            probeType:2,
            mouseWheel:true
        })
        this.setState({
            bscroll
        })
        // for(var item of this.state.pinyin){
        //     React.createRef()
        //     this.toEle.push(React.createRef())
        // }
        // for(var item of this.state.pinyin){
        //     this.toEle.push(item.info.pinyin)
        // }
        for(var i=0 ;i<26;i++){
            this.toEle[i]=React.createRef()
        }
       
    }
    render(){
        return (
            <>
            <Choosewrap>
                <Explame explameList={this.state.explame}></Explame>
                <Recommend recommendList={this.state.recommend}></Recommend>
                <div className="choose">
                    按照价格、级别、排量等条件选车
                    <i className="yo-ico">&#xf07f;</i>
                </div>
                 <div className="history">
                     我浏览过：
                 </div>
                 {
                  this.state.pinyin.map((item,index) =>(
                  <Pinyintitle  key={item.info.pinyin} item={item} all={this.state.all}></Pinyintitle>
                  ))
                 }
               
            </Choosewrap>
            <Namelist namelist={this.state.pinyin} ele={this.toEle[1]} bscroll={this.state.bscroll}></Namelist>
            </>
        )
    }
}