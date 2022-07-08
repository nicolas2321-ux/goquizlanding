import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'


export const DownloandContainer = styled.div`
background:#fff;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position:relative;
z-index:1;
@media screen and (max-width:768px) {
    height:1000px;
}
`;


export const Bgnormal = styled.div`
background: rgb(133,231,234);
background: linear-gradient(180deg, rgba(133,231,234,1) 0%, rgba(155,108,218,1) 100%, rgba(0,212,255,1) 100%);
height:70%;
width:100%;
position:absolute;
top:0;
`
export const Bgwave = styled.div`
background-image: url("https://i.ibb.co/WypKRG2/wave.jpg");
width:100%;
height:30%;
position:absolute;
top:560px;
background-size:cover;
overflow:hidden;
@media screen and (max-width:768px) {
    top: 700px;
}


`



export const DownloandContent = styled.div`
z-index:3;
max-width:1200px;
top:30%;
position:absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
@media screen and (max-width:768px) {
    top:5%;
}
`;


export const DownloandH1 = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 72px;
display: flex;
align-items: center;

text-align: center;

color: #003844;

@media screen and (max-width:768px) {
    font-size:32px;
}
@media screen and (max-width:480px) {
    font-size:16px;
}
`;


export const DownloandP = styled.p`
margin-top:24px;
color:#000;
font-size: 28px;
text-align: center;
max-width: 600px;
@media screen and (max-width:768px) {
    font-size:24px;
}
@media screen and (max-width:480px) {
    font-size:18px;
}

`;

export const DownloandWrapper = styled.div`
margin-top:32px;
display: flex;
flex-direction:column;
align-items:center;
`;

export const ArrrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size:20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size:20px;
`;


export const Image = styled.img`

object-fit: fill;
max-height:500px;
max-width:500px;
position:relative;
left:600px;
top:-380px;
@media screen and (max-width:768px) {
    max-height:300px;
    max-width:300px;
    left:10px;
    top:80%;
}
`