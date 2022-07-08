import React from 'react'
import { OpinionContainer, OpinionContainer1, OpinionContainer2, OpinionContainer3,
    OpinionTitle, OpinionContainer5, 
    ImagePhoto,BgInfo,BgWaveInfo,OpinionH1,OpinionH2, OpinionP } from './OpinionElements'

const Opinion = () => {
  return (
    <OpinionContainer id="Last">
        <BgWaveInfo></BgWaveInfo>
        <BgInfo>
        <OpinionTitle>
            <OpinionH1>Lo que los expertos<br/> opinan de Quizzes</OpinionH1>
        </OpinionTitle>
        <OpinionContainer1>
        <ImagePhoto src='https://i.ibb.co/xHCjSpj/marce.jpg'/>
            <OpinionP>
                <OpinionH2>Marcela Portillo<br/></OpinionH2>
                "Con Go Quizz aprendi a bañarme"
            </OpinionP>
        </OpinionContainer1>
        <OpinionContainer2>
            <ImagePhoto src='https://i.ibb.co/2PYLDjT/katya.jpg'/>
            <OpinionP>
                <OpinionH2>Katya Agustin<br/></OpinionH2>
                Gracias a Go Quizz tengo 3 doctorados y 2 maestrias

            </OpinionP>
        </OpinionContainer2>
        <OpinionContainer3>
            <ImagePhoto src='https://i.ibb.co/CmYt82N/nicky.jpg'/>
            <OpinionP>
               <OpinionH2> Nicky<br/></OpinionH2>
                Gracias a Go Quizz soy mas guapo de lo que ya soy

            </OpinionP>
        </OpinionContainer3>
        <OpinionContainer5>
            <ImagePhoto src='https://i.ibb.co/9Wrr44S/omar.jpg'/>
            <OpinionP>
                <OpinionH2>Omar Escamilla<br/></OpinionH2>
                Todos los recreos ocupaba Go quizz

            </OpinionP>
        </OpinionContainer5>
    </BgInfo>
    </OpinionContainer>
  )
}

export default Opinion