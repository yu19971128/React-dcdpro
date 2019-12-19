import styled from 'styled-components'
import React from 'react'

export const Choosewrap=styled.div`
    width:100%;
    overflow:hidden;
    .choose{
      width :100%;
      height:36px;
      line-height:36px;
      font-size:14px;
      display:block ;
      text-align:center;
      background:#fff;
      
}     
.history{
        width:100%;
        height:47px;
        padding:10px 14px 20px;
        background:#fff;
        color:rgb(153, 153, 153);
        font-size:rgb(153, 153, 153);
      }                                                                                                                                                                                                                                           ;
`
export const Explamewrap=styled.div`
      width:100%;
      height:50px;
      padding:15px 10px;
      display:flex; 
      align-items:center;
      justify-content:center;
      background:#fff;
      .explame-item{
        flex:1;
        height:100%;
        .pic-box{
          display:inline-block;
          width:20px; 
          height:20px;
          img{
            width:100%;
            height:100%;
          }
        }
        .name-box{
          height:19px;
          line-height:19px;
          font-size:14px;
          display: inline-block;
        }
      }
`
export const Recommendwrap = styled.div`
      width:100%;
      height:2.08rem;
      padding:0 10px 4px;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-wrap:wrap;
      background:#fff;
      .rec-box{
        width:1.18rem;
        height:.92rem;
        margin-top:.1rem;
        .img-box{
          width:1.05rem;
          height:.7rem;
          img {
            width:100%;
            height:100%;
          }
        }
        .name-box{
          width:100%;
          height:.22rem;
          line-height:.22rem;
          font-size:.16rem;
          text-align:center;
        }
      }
`

export const Pinyintitlewrap = styled.div`
    .pin{
          width:100%;
          height:28px;
          line-height:20px;
          font-size:14px;
          padding:4px 15px;
          background:#F5F5F5;
          }
`

export const Carwrap  =  styled.div`
     .now{
          width:100%;
          height:61px;
          background:#fff;
          .now-img{
            width:40px;
            height:40px;
            margin:0 15px;
            display:inline-block;
            img {
              width:100%;
              height:100%;
            }
          }
          .brand-name{
              display:inline-block;
          }
     }
`

export const Namelistwrap = styled.ul`
    position:fixed;
    top:100px;
    right:0;
    .frist-name{
      width:.39rem;
      height:.2rem;
      font-size:.09rem;
      text-align:center;
      line-height:.2rem;
      padding:0 5px 0 15px;
      color:rgb(42, 144, 215);
      font-weight:700;  
    }
`