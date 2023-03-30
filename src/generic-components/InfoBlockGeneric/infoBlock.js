import Sample from '../components/Sample/Sample'
import About from './components/About_rvr/About_rvr'
import Development from './components/Development_rvr/Development_rvr'
import Hero from './components/Hero_rvr/Hero_rvr'
import Solutions from './components/Solution_rvr/Solutions_rvr'


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