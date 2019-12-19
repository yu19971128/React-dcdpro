import styled from 'styled-components'

export const Detailwrap=styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
`
export const Navwrap = styled.div`
    width:100%;
    height:48px;
    background:#333;
    .nav-banner{
      width:100%;
      height:100%;
      padding:0 10px;
      display:flex;
      align-items:center;
      justify-content:center;
      .nav-back{
        display:block;
        width:20px; 
        height:20px;
        margin-right:12px;
        font-size:0;
        i{
            display:inline-block;
            width:100%;
            height:100%;
            font-size:18px;
            line-height:20px; 
            text-align:center;
            color:#fff;
            font-weight:600;
        }  
      }
    }
    .logo-box{
        flex:1;   
        height:100%;  
        display:flex;
        align-items:center;
        justify-content:center;
        .logo{
          width:84px; 
          height:23px;
          font-size:0; 
          img{ 
            height:100%;
            width:100%;
          }
        }
    }
        .act-details{
          flex:1;
          color: #fff;
          font-size: 16px;
          line-height: 22px;
          margin-left: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space:nowrap;
        }
        .client{
        width:96px;
        height:32px;
        display:flex;
        align-items:center;
        justify-content:center;
        .img-box{
          height:24px;
          width:24px;
          font-size:0;
          img{
           width:100%;
           height:100%;
          }
        }
        .text-box{ 
          flex:2;
          height: 32px;
          width:100%;
          line-height:14px;
          font-size:8px;
          color:#fff;
          margin-left:5px;
          overflow:hidden;
          text-overflow: ellipsis;
          white-space:nowrap;
        }
        .more-box{
          flex:1;
          color:#fff;
          font-size:18px;
        }
        }
`

export const Mainwrap = styled.div`
    .wgt-feed-head{
        margin:0 15px;  
        .box-title{
          font-size: 22px;
          line-height: 30px;
          margin: 0 0 10px;
          padding-top:18px;
        }
        .article-meta{
          .source{
            font-size:14px;
          }
          .publish-time{
            display:inline-block;
            margin-left:.05rem;
            font-size:14px;
            color:#999;
          }
        }
    }
    .details-con{
        margin:0 15px;
        .ql-align-center{
        font-size:18px;
        line-height:32px;
         margin-top:20px;
        }
        p{
          font-size:18px;
          line-height:32px;
          margin-top:20px;
        }
        img {
          width: 100%;
          display: block;
          margin: 4px auto;
        }
    }
    .video-box{
        width:100%;
        height:2.11rem;
        img{
          width:100%;
          height:100%;
        }
    }
    .vedio-info{
        width:100%;
        height:81px;
        padding-bottom:20px;
        background:#fff;
       .info-title{
          width:100%;
          padding:12px 15px 4px;
          height:42px;
          display:flex;
          align-items:center;
          justify-content:center;
          h2{ 
            flex:1;
            font-size:18px;
            line-height:26px;
            overflow:hidden; 
            text-overflow:ellipsis; 
            white-space:nowrap;
            font-weight:normal;
          }
          .more-ico{
            width:18px;
            height:8px;
            font-size:16px;
            line-height:8px;
            color:#000;
            text-align:center;
          }
       }
        .mdie{ 
          display:inline-block;
          margin:0 15px;
          color: #999;
          font-size: 14px;
        }
    }
    .cpt-feed-car-card{
        height:147px;
        width:100%;
        padding:0 16px;
        background:#fff;
        .feed-slogan{
          padding:10px 0 8px;
          font-size:16px;
          height:40px;
          line-height:22px;
          color:#000;
        
          /* $border(0 0 1px 0,#ddd,solid) */
          span{
            display:inline-block;
          }
          .sp1{
            padding-right:4px;
            border-right:1px solid #ddd;
          }
          .sp2{
            padding-left:4px;
            color:#999;
          }
        }
        .car-wrap{
          width:100%;
          height:104px;
          padding:12px 0 20px;
          background:#fff;
          display:flex;
          align-items:center; 
          justify-content:center;
          .car-img{
            width:112px;
            height:72px;
            margin-right:10px;
            img {
              height:100%;
              width:100%;
            }
          }
          .others-info{
            flex:1;
            height:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            .car-name{
              flex:1;
              height:100%;
              .name{
                font-size: 16px;
                line-height: 1;
                margin-bottom: 8px;
                color: #222;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              .price{
                font-size:12px;
                color:#999;
              }
            }
            .ask{
              width:66px;
              height:28px;
              background:#ffe100;
              border-radius:14px;
              font-size:14px;
              line-height:28px;
              text-align:center;
            }
          }
              }
    }
              
`

export const Feeditemwrap=styled.div`
        height:94px;
        display:flex;
        align-items:center; 
        justify-content:center;
        margin-bottom:16px;
       .left{
            width:134px;
            height:100%;
            margin-right:8px;
            img{
              height:100%;
              width:100%;
            }
       }
          .right{
            flex:1;
            height:38px;
            .feed-title{
              width:100%;
              font-size: 16px;
              line-height: 22px;
              height:22px;
              margin: 0;
              font-weight: 400;
              color:#000;
              overflow:hidden;
              text-overflow:ellipsis;
            }
            .feed-meta{
                color: #999;
                line-height: 1;
                margin-top: 4px;
                font-size:12px;
            }
          }
          
`
export const Feedwrap=styled.div`
        padding:0 16px;
        background:#fff;
        width:100%;
        .foot-title{
          width:100%;
          padding:10px 0 8px;
          font-size:16px;
          line-height:22px;
          color: #000;
          font-weight: 700;
        }
`