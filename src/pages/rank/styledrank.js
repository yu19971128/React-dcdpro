 import styled from 'styled-components'

 export const Classifywrap=styled.div`
        position:relative;
        height:48px;
        
        
        .tabBox{
            width:171px;
            height:100%;
            position:absolute;
            margin-left:50%;
            left:-85px;
            display:flex;
        }
        .otheritem1{
            height:100%;
            line-height:1;
            flex:1;
            text-align:right;
            flex:1;
            line-height:48px;
            text-align:center;
            font-size:16px;
            color:#999;
            position:relative;
        }
        .middleitem{
            width:57px;
            height:100%;
            line-height:1;
            text-align:center;
            flex:1;
            line-height:48px;
            text-align:center;
            font-size:16px;
            color:#999;
            position:relative;
        }
        .otheritem2{
            height:100%;
            line-height:1;
            flex:1;
            text-align:left;
            flex:1;
            line-height:48px;
            text-align:center;
            font-size:16px;
            color:#999;
            position:relative;
        }
        .active1:after{
            content:'';
            border-bottom: 3px solid #ffcb00;
            position:absolute;
            height:1px;
            left:50%;
            bottom:8px;
            width:30px;
            transform: translateX(-50%);
    }
 `
export const Ranktypewrap = styled.div`
    width:100%;
    height:46px;
    padding:0 30px 8px 14px;
    white-space: nowrap;
    overflow-x: scroll;
    .rankTypeitem{
        font-size: 14px;
        line-height: 16px;
        padding: 6px 12px;
        background: #f6f6f6;
        border-radius: 2px;
        display: inline-block;
        margin-right: 10px;
        margin-top: 10px;
        color: #666;
    }
`

export const Rankitemwrap = styled.a`
    width:100%;
    height:100px;
    padding:8px 14px;
    display:block;
    display:flex;
    align-items:center;
    justify-content:center;
    .rankinfo{
       display:flex;
       flex-direction:column;
       align-items:center;
       justify-content:center;  
       .equal{
        margin-top: 2px;
        text-align: center;
        line-height: 16px;
        .rank_change{
            font-size: 10px;
            line-height: 14px;
            color: #999;
            .up{
                color:#ff5f00;
            }
            .down{
                color:skyblue;
            }
        }
      }
        
    }
    .carimg{ 
        height:100%;
        width: 125px;
       margin: 0 10px;
    }
    .namePrice{
        flex:1;
        .carName{
            font-size: 16px;
            height:22px;
            line-height: 22px;
            color:#000; 
        }
        .carPrice{
            color:#ff5f00;
            font-size:14px;
            line-height:20px;
            height:20px;
        }
    }
`

export const Rankmedalwrapone = styled.i`
      width: 32px;
      height: 32px;
      color: transparent;
      color:#000;
      font-size:18px;
      font-weight:600;
      background:url(data:image/png;base64,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) no-repeat 50%;
      background-size: contain;
       
    `
export const Rankmedalwraptwo = styled.i`
        width: 32px;
        height: 32px;
        color: transparent;
        color:#000;
        font-size:18px;
        font-weight:600;
        background: url(data:image/png;base64,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) no-repeat 50%;
        background-size: contain;
`
export const Rankmedalwrapthree = styled.i`
      width: 32px;
      height: 32px;
      color: transparent;
      color:#000;
      font-size:18px;
      font-weight:600;
      background: url(//s3.pstatp.com/motor/fe/m_web/image/icon_copper@3x_662c963873690ef19f47193d5501da46.png) no-repeat 50%;
      background-size: contain; 
    `
export const Rankmedalwrap = styled.i`
    width: 32px;
    height: 32px;
    color: transparent;
    color:#000;
    font-size:18px;
    font-weight:600;
    line-height:32px;
    text-align:center;
`

