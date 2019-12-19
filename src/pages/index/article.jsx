import React, { Component } from 'react'
import {ArticleItems,ArticleItems1} from '../../components/articleList/articleItem'
import Bscroll from 'better-scroll'
import {get} from 'utils/http'
import  {NavLink} from 'react-router-dom'
export default class Article extends Component {
        state={
            articleList:[]
        }
    async componentDidMount(){
       let result = await get({
           url:'/ajax',
       })
       this.setState({
           articleList:result.data
       })
        let bScroll=new Bscroll('.listcon',{
            pullUpLoad:true,
            click:true,
            probeType:2,
            mouseWheel:true
        })
        bScroll.on('pullingUp',async() =>{
            if(bScroll.y<bScroll.maxScrollY){
              let result2=await get({
                url:'/ajax' 
              })
              this.setState({
                articleList:[...this.state.articleList,...result2.data]
            })
              bScroll.refresh()
            }
            bScroll.finishPullUp()
           })
        
    }
    render() {
        return (
            <div className="listcon" style={{height:'100%'}}>
                <div>
            {
                    this.state.articleList.map((item,index) => {
                        if(item.info.image_list.length===3){
                            return (
                            <NavLink key={item.unique_id_str} to={"/detail/"+item.unique_id_str+"/"+item.info.image_type}>
                            <ArticleItems  item={item}></ArticleItems> 
                            </NavLink>
                            )
                        }else{
                            return (
                                <NavLink key={item.unique_id_str} to={"/detail/"+item.unique_id_str+"/"+item.info.image_type}>
                                <ArticleItems1  item={item}></ArticleItems1>
                                </NavLink>
                                )
                        }
                    })
                }
                </div>
            </div>
        )
    }
}
