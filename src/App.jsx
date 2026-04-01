import './App.css'
import Workflow from './components/Workflow/Workflow'
import Banner from './components/Banner/Banner'
import Navbar from "./components/Navbar/Navbar"
import Pricing from './components/Pricing/Pricing'
import Stats from './components/Stats/Stats'
import Steps from './components/Steps/Steps'
import Footer from './components/Footer/Footer'
import DigitalTools from './components/DigitalTools/DigitalTools'
import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify'

const digitalToolsRes = fetch('/digitalToolsData.json').then(res => res.json())

function App() {
  const [selectedTools, setSelectedTools] = useState([]);

  return (
    <>
      <header>
        <Navbar selectedTools={selectedTools} />
      </header>

      <main>
        <Banner />

        <Stats />

        <Suspense fallback={<div className='flex justify-center items-center py-20'><span class="loading loading-dots loading-xl"></span></div>}>
          <DigitalTools
            digitalToolsRes={digitalToolsRes}
            setSelectedTools={setSelectedTools}
            selectedTools={selectedTools} />
        </Suspense>

        <ToastContainer />

        <Steps />

        <Pricing />

        <Workflow />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
