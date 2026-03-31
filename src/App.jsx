import './App.css'
import Workflow from './components/Workflow/Workflow'
import Banner from './components/Banner/Banner'
import Navbar from "./components/Navbar/Navbar"
import Pricing from './components/Pricing/Pricing'
import Stats from './components/Stats/Stats'
import Steps from './components/Steps/Steps'
import Footer from './components/Footer/Footer'
import DigitalTools from './components/DigitalTools/DigitalTools'

const digitalToolsRes = fetch('/digitalToolsData.json').then(res => res.json())

function App() {

  return (
    <>
      <Navbar />

      <Banner />

      <Stats />

      <DigitalTools digitalToolsRes={digitalToolsRes} />

      <Steps />

      <Pricing />

      <Workflow />

      <Footer />
    </>
  )
}

export default App
