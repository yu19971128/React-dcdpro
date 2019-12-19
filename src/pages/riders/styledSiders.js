import styled from 'styled-components'

export const Riderwrap =  styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
`

export const Ridersitemwrap = styled.div`
    margin-bottom:5px;
    .author-info{
    width:100%;
    height:64px;
    padding:14px 14px 10px;
    display:flex;
    align-items:center;
    justify-content:center;
    .user-img{
        width:40px; 
        height:40px;
        margin-right:10px;
        border-radius:20px;
        overflow:hidden;
        img {
        height:100%;
        width:100%;
        }
    }
    .name-box{
        flex:1;
        height:100%;
        font-size:16px;
        color:#666;
        line-height:40px;
        font-weight :700;
    }
}
.post-content {
            width:100%;
            padding:0 14px;
        .post-text{
            width:100%;
            height:48px;
            margin-bottom:10px;
            overflow:hidden;
            text-overflow:ellipsis;
            .post-link{
                display:inline;
                color:#406599;
                margin-right:8px;
                
                line-height:24px;
            }
            .text-box{
                height:24px;
                font-size:18px;
                color:#000;
                line-height:24px;
            }
        }
}
.post-foot{
    width:100%;
    height:40px;
    display:flex;
    align-items:center;
    justify-content:center;
    .post-digg{
        flex:1;
        height:100%;
        line-height:40px;
        text-align:center;
    }
    .post-comment{
        flex:1;
        height:100%;
        line-height:40px;
        text-align:center;
    }
}
`

export const ImgListwrap = styled.div`
      
       .post-video{
            width:1.73rem;
            height:3.08rem;
            position:relative;
            img{
                width:100%;
                height:100%;
            }
            .pause{
                position: absolute;
                width:40px;
                height:40px;
                left:50%;
                top:50%;
                margin-left:-20px;
                margin-top:-20px;
                border-radius:50%;
                background-color:rgba(0,0,0,.4);
            }
            .pause:after{
                content: "";
                width: 20px;
                height: 20px;
                position: absolute;
                left: 50%;
                top: 50%;
                margin-left: -10px;
                margin-top: -10px;
                background: url("~assets/image/play.png") no-repeat 50%;
                background-size: contain;
            }
       }
    .big-box{
        display:flex;
        align-items:center;
        justify-content:left;
        flex-wrap:wrap; 
        .post-img{
            width:1.1rem;
            height:1.1rem;
            margin-left:3px;
            position:relative;
            img{
                width:100%;
                height:100%;
            }
        }
    }
`