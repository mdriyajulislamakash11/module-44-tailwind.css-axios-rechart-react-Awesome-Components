import './App.css'
import LChart from './components/LChart'
import NavBar from './components/NavBar'
import PriceOptions from './components/PriceOptions'



function App() {

  return (
    <>

      <NavBar />
      <div className='w-11/12 mx-auto'>
      <h1 className='text-2xl font-bold'>My Awesome React Components</h1>

      <PriceOptions />

      <LChart />
      </div>
      
    </>
  )
}

export default App
