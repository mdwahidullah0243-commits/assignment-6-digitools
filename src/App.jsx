import './App.css'
import Workflow from './components/Workflow/Workflow'
import Banner from './components/Banner/Banner'
import Navbar from "./components/Navbar/Navbar"
import Pricing from './components/Pricing/Pricing'
import Stats from './components/Stats/Stats'
import Steps from './components/Steps/Steps'
import Footer from './components/Footer/Footer'
import DigitalTools from './components/DigitalTools/DigitalTools'
import { useState } from 'react'

const digitalToolsRes = fetch('/digitalToolsData.json').then(res => res.json())

function App() {
  const [selectedTools, setSelectedTools] = useState([]); 

  return (
    <>
      <Navbar selectedTools={selectedTools} />

      <Banner />

      <Stats />

      <DigitalTools 
        digitalToolsRes={digitalToolsRes}
        setSelectedTools={setSelectedTools} 
        selectedTools={selectedTools} />

      <Steps />

      <Pricing />

      <Workflow />

      <Footer />
    </>
  )
}

export default App
