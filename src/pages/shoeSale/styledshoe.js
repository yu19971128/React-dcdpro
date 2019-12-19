import styled from 'styled-components'

export const ShoeLogowrap = styled.div`
    width:100%;
    height:135px;
    img{
        width:100%;
        height:100%;
    }
`

export const Hookwrap = styled.div`
    width:100%;
    height:40px;
    display:flex;
    align-items:center;
    justify-content:center;
    .actitem1{
        width:82px;
        padding:0 13px;
        text-align:center;
        height:100%;
        line-height:40px;
        font-size:14px;
        color:#fff;
        font-weight:600;
        background: linear-gradient(131.1deg,#de3333,rgba(243,56,27,.56));
    }
    .actitem2{
        flex:1;
        height:100%;
        line-height:40px;
        padding-left:10px;
    }
`
export const Protitlewrap = styled.div`
    width:100%;
    height:72px;
    border:none!important;
    img{
        width:100%;
        height:100%;
        display:block;
    }
`
export const ProListwrap  = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    background:rgb(245, 54, 40);
    flex-wrap:wrap;
`
export const Proitemwrap = styled.div`
    width:115px;
    height:181px;
    margin:0 5px 5px 5px;
    background:#fff;
    .imgbox{
        width:115px;
        height:115px;
        img{
            width:100%;
            height:100%;
        } 
    }
    .infobox{
        width:100%;
        height:51px;
        margin-top:10px;
        padding:0 8px;
        .typebox{
            line-height: 16px;
            height: 33px;
            font-size: 12px;
        }
        .price{
            font-size:16px;
            color: #df3348;
            height:18px;
            line-height:18px;
        }
    }
    
`