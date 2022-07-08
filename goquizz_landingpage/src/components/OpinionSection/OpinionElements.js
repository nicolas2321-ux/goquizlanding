import styled from 'styled-components'

export const OpinionContainer = styled.div`
background:#f6f7f6;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 1000px;
position:relative;
background:gray;
overflow:hidden;
@media screen and (max-width:768px) {
    height:1300px;
}
`;
export const BgWaveInfo = styled.div`
background-image: url("https://i.ibb.co/Jp86cqZ/waveup.jpg");
width:100%;
height:30%;
position:absolute;
top:0px;
background-size:cover;
overflow:hidden
`
export const BgInfo = styled.div`
background: rgb(133,231,234);
background: linear-gradient(180deg, rgba(133,231,234,1) 0%, rgba(155,108,218,1) 100%, rgba(0,212,255,1) 100%);
height:100%;
width:100%;
position:absolute;
top:240px;
`
export const OpinionContainer1 = styled.div`
position: absolute;
width: 212px;
height: 279px;
left: 100px;
top: 200px;

background: #85EA9B;
border-radius: 15px;
@media screen and (max-width:768px) {
    left:50px
}
@media screen and (max-width:480px) {
        left:10px;
        width: 200px;
        height: 230px;
    }

`
export const OpinionContainer2 = styled.div`
position: absolute;
width: 212px;
height: 279px;
left: 389px;
top: 450px;
background: #FFA895;
border-radius: 15px;
@media screen and (max-width:768px) {
    left:350px;
    top:200px;
}
@media screen and (max-width:480px) {
        left:235px;
        width: 200px;
        height: 230px;
    }

`
export const OpinionContainer3 = styled.div`
position: absolute;
width: 212px;
height: 279px;
left: 639px;
top: 200px;

background: #FCC44A;
border-radius: 15px;
@media screen and (max-width:768px) {
    left:50px;
    top:600px;
}
@media screen and (max-width:480px) {
        left:10px;
        top:500px;
        width: 200px;
        height: 230px;
    }
`

export const OpinionTitle = styled.div`
position: absolute;
width: 642px;
height: 150px;
left: 500px;
top: 0px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
display: flex;
align-items: center;
text-align: center;

color: #003844;
@media screen and (max-width:768px) {
    left:175px
}
@media screen and (max-width:480px) {
        left:100px;
    }


    
`
export const OpinionContainer5 = styled.div`
position: absolute;
width: 212px;
height: 279px;
left: 959px;
top: 450px;

background: #FFAEED;
border-radius: 15px;
@media screen and (max-width:768px) {
    left:350px;
    top:600px;
}
@media screen and (max-width:480px) {
        left:235px;
        top:500px;
        width: 200px;
        height: 230px;
    }
`

export const OpinionH1 = styled.h1`
color: #000;
font-size:48px;
text-align:center;

@media screen and (max-width:768px) {
    font-size:40px;
}
@media screen and (max-width:480px) {
    font-size:32px;
}
`;
export const OpinionP = styled.p`
margin-top:24px;
color:#000;
font-size: 24px;
text-align: center;
max-width: 600px;
@media screen and (max-width:768px) {
    font-size:24px;
}
@media screen and (max-width:480px) {
    font-size:18px;
}
`

export const ImagePhoto = styled.img`
object-fit:fill;
max-width: 60px;
max-height:60px;
top:30px;
left:80px;
margin-bottom:25px;
position:relative;
border-radius:50%;

`
export const OpinionH2 = styled.h2`
color: #000;
font-weight:bold;
font-size:28px;
text-align:center;

@media screen and (max-width:768px) {
    font-size:16px;
}
@media screen and (max-width:480px) {
    font-size:12px;
}
`;