import styled from 'styled-components'

export const SerproWrap=styled.div`
    width:100%;
    height:236px;
    padding-top:8px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
`

export const Seritemwrap=styled.div`
        width:93px;
        height:74px;
        padding:8px 0;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        .img-box1{
            width:36px;
            height:36px;
            margin-bottom:5px;
            img {
                  width:100%;
                  height:100%;
            }
        }
        .text-box1{
                flex:1;
                font-size:14px;
                line-height:1;
                color:#000;
        }
`