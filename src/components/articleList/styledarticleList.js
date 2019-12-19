import styled from 'styled-components'

export const ArticleItem=styled.div`
     .detailid{
          width:100%;
          height:1.58rem;
          padding:.13rem .15rem;
          background:#fff;
     }
     .title{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space:nowrap; 
        font-size:.19rem;
        color:#333;
        line-height:.2rem;
     }
     .img-list{
         width:100%;
         height:.78rem;
         display:flex;
         margin-top:.08rem;
         li{
           flex:1;
           margin-left:.02rem;
           img {
              width:100%;
              height:100%;
           }
         }
     } 
     .article-footer{
         width:100%;
         height:16px;
         margin-top:8px;
         span{
           line-height:16px;
           font-size:12px;
           color:#999;
           margin-right:8px;
         }
           i{
            font-size:12px;
            font-style:oblique;
            color:#ffe100; 
           }
          }        
`
export const ArticleItem1=styled.div`
     display:block;
     width:100%;
     height:2.76rem;
     padding:.13rem .15rem;
     background:#fff;
      .title{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space:nowrap; 
        font-size:.19rem;
        color:#333;
        line-height:.2rem;
     }
     .article-img{
         width:100%;
         height:1.94rem;
         margin-top:.08rem;
         img {
            width:100%;
            height:100%;
         }

     }
     .article-footer{
         width:100%;
         height:16px;
         margin-top:8px;
         span{
           line-height:16px;
           font-size:12px;
           color:#999;
           margin-right:8px;
         }
           i{
            font-size:12px;
            font-style:oblique;
            color:#ffe100; 
           }
          } 
`

