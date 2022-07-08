import styled from 'styled-components'

export const InfoContainer = styled.div`
background:#f6f7f6;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 1200px;
position:relative;
z-index:1;
@media screen and (max-width:768px) {
    height:1300px;
}

`

export const Infoh1 = styled.h1`
color: #000;
font-size:36px;
font-weight:bold;
text-align:center;

@media screen and (max-width:768px) {
    font-size:40px;
}
@media screen and (max-width:480px) {
    font-size:32px;
}
`

export const InfoP = styled.p`
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
export const InfoSelector1 = styled.div`
  z-index:3;
max-width:1200px;
left:80px;
top:300px;
position:absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
@media screen and (max-width:768px) {
    top:100px;
}
@media screen and (max-width:480px) {
        top:50px;
        left:10px;
    }
`
export const InfoSelector4 = styled.div`
      z-index:3;
max-width:1200px;
left:550px;
bottom:200px;
position:absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
@media screen and (max-width:768px) {
    top:600px;
    left:50px;
}
@media screen and (max-width:480px) {
        left:10px;
    }
`
export const InfoTitle = styled.div`
     z-index:3;

top:50px;
position:absolute;
padding: 8px 24px;
display: flex;@media screen and (max-width:768px) {
    top:-50px;
}
@media screen and (max-width:480px) {
        height:10px;
    }
`
export const Image = styled.img`

object-fit: fill;
max-height:500px;
max-width:500px;

display: flex;
@media screen and (max-width:768px) {
    max-height:300px;
    max-width:300px;
    
}
`
export const Image1 = styled.img`

object-fit: fill;
max-height:500px;
max-width:500px;
position:relative;

@media screen and (max-width:768px) {
    max-height:300px;
    max-width:300px;
    
}
`
export const ImageDiv = styled.div`
position:relative;
left:-150px;
top:250px;
@media screen and (max-width:768px) {
    top:-200px;
    left:100px;
    
}
@media screen and (max-width:480px) {
       top:-250px;
       left:90px;
    }
`
export const ImageDiv_second = styled.div`
position:relative;
left:100px;
top:-150px;
@media screen and (max-width:768px) {
    top:350px;
    left:-60px;
    
}
`
