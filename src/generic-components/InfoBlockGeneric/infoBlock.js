import Sample from '../components/Sample/Sample'
import About from './components/Sample/About'
import Hero from './components/Sample/Hero'
import Solutions from './components/Sample/Solutions'

const InfoBlock = () => {
  return (
    <>
      <Hero />
      <Sample direction='ltr' />
      <Solutions />
      <About />
    </>
  )
}

export default InfoBlock