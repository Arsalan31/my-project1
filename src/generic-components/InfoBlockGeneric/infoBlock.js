import Sample from '../components/Sample/Sample'
import About from '../components/About_rvr/About_rvr'
import Development from '../components/Development_rvr/Development_rvr'
import Footer from '../components/Footer_rvr/Footer_rvr'
import Hero from '../components/Hero_rvr/Hero_rvr'
import Header from './components/Header_rvr/Header_rvr'


const InfoBlock = () => {
  return (
    <>
      <Sample direction='ltr' />
      <Header direction='ltr' /> 
      <Hero direction='ltr' />
      <Development direction='ltr' />
      <About direction='ltr' />
      <Footer direction='ltr' />
    </>
  )
}

export default InfoBlock