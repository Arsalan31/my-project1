import Sample from '../components/Sample/Sample'
import About from './components/Sample/About/About_rvr'
import Development from './components/Sample/Development/Development_rvr'
import Hero from './components/Sample/Hero/Hero_rvr'
import Solutions from './components/Sample/Solution/Solutions_rvr'


const InfoBlock = () => {
  return (
    <>
      <Sample direction='ltr' />
      <Hero direction='ltr' />
      <Solutions direction='ltr' />
      <Development direction='ltr' />
      <About direction='ltr' />
    </>
  )
}

export default InfoBlock