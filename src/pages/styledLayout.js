import styled from 'styled-components'

export const Layoutwrap = styled.div`
  display:flex;
  flex-direction:column;
  height:100%;
  margin:0 !important;
  header{
    height:48px;
    width:100%;
    background:#333;
    padding:0 10px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-bottom:1px solid #999;
   
  }
    .logo-box{
        width:84px;
        height:23px;
        font-size:0;
    }
    .logoimg{
        height:23px;
        width :84px;
   }
    .search-box
    {
        flex:2;
        height:26px;
        margin:0 5px;
        outline:none;
        background:rgba(255,255,255.0.2);
        border:0;
        text-align:center;
        line-height:26px;
        font-size:12px; 
    }
    .client
    {
      width:96px;
      height:32px;
      display:flex;
      align-items:center;
      justify-content:center;
    }
    .img-box
    {
        height:24px;
        width:24px;
        font-size:0;
    }        
    img
    {
       width:100%;
       height:100%;
    }
  .text-box 
    {
        flex:2;
        height: 32px;
        width:100%;
        line-height:14px;
        font-size:8px;
        color:#fff;
        margin-left:5px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap; 
    }
  .more-box
   {
        flex:1;
        color:#fff;
        font-size:18px;   
   } 
   .nav-box{
         overflow-x:scroll;
         width:100%;
         height:48px;
         background:#333;
   } 
    .nav{
        width:500px;
        background:#333;
    }
    .nav-item{
        display:inline-block;
        height:100%;
        margin:0 12px;
        color:#fff;
        font-size:16px;
        line-height:48px;
        text-align:center;
        position:relative;
        
    }   
    .active:after{
        position: absolute;
        left: 50%;
        right: 0;
        content: "";
        bottom: 8px;  
        border-bottom: 3px solid #ffcb00;
        width:30px;
        transform: translateX(-50%);
    }
    main{
      flex:1;
      overflow:hidden;
    }
   
`