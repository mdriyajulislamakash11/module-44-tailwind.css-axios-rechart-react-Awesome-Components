import './App.css'
import NavBar from './components/NavBar'
import PriceOptions from './components/PriceOptions'



function App() {

  return (
    <>

      <NavBar />
      <div className='w-11/12 mx-auto'>
      <h1 className='text-2xl font-bold'>My Awesome React Components</h1>

      <PriceOptions />

      </div>
      
    </>
  )
}

export default App
