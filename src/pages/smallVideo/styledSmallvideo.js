import styled from 'styled-components'

export const Smallvideowrap = styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
    .video-con{
        width:100%;
        display:flex;
        .left-con{
            flex:1;
            .left-box{
                width:1.82rem;
                height:3.33rem;
                margin-bottom:4px;
                img{
                    width:100%;
                    height:100%;
                }
            }
            .left-box1{
                width:1.84rem;
                height:1.05rem;
                margin-bottom:4px;
                img{
                    width:100%;
                    height:100%;
                }
            } 
            
        }
        .right-con{
                flex:1;
                .right-box{
                    width:1.87rem;
                    height:3.33rem;
                    margin-bottom:4px;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .right-box1{
                    width:1.87rem;
                    height:1.05rem;
                    margin-bottom:4px;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
            }
        
    }
`