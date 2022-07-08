import React, { useState } from 'react'
import {Button} from '../ButtonElements'
import { DownloandContainer,Form, Image,Bgnormal,DownloandH1,DownloandP, DownloandContent, DownloandWrapper, ArrowRight, ArrrowForward, Bgwave} from './DownloandElements'

const Downloand = () => {
    const [hover, setHover]= useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    
  return (
    <DownloandContainer id="Downloand">
        
        <Bgnormal>
    <DownloandContent>
    
        <DownloandH1>Moderniza tu estudio<br/> con GoQuizz
        
        </DownloandH1>
        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' id="downloand">
            <Button  onMouseEnter={onHover} onMouseLeave={onHover}
            onClick="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Descargar
            {hover ? <ArrowRight/> : <ArrrowForward/>}

            </Button>
            
        </a>
           
        <DownloandP>Diviertete estudiando de manera interactiva de la mano de nuestra comunidad</DownloandP>
        <DownloandWrapper>
        
        g
           
        </DownloandWrapper>
        <Image src='https://i.ibb.co/gjTS6vt/Inicio-de-sesi-n.jpg'></Image>
        
    </DownloandContent>
    </Bgnormal>
    <Bgwave/>
    </DownloandContainer>
    
    
  )
}

export default Downloand