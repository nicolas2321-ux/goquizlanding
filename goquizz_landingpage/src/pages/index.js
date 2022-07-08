import React, {useState} from 'react'
import Downloand from '../components/DownloandSection'
import InfoSection from '../components/Infosection'
import Opinion from '../components/OpinionSection'
// import Footer from '../components/Footer'

const Home = () => {
const [isOpen, setIsOpen] = useState(false)
const toggle = () => {
    setIsOpen(!isOpen)
} 

  return (
      <>
    
    <Downloand/>
    <InfoSection/>
    <Opinion/>
    {/*<Footer/> */}

    </>
   
    
    
  )
}

export default Home