import './App.css'
import Background from './components/Background'
import Foreground from './components/Foreground'

function App() {

  return (
    <>
      <div className='w-full min-h-screen bg-zinc-800 relative'>
       <Background/>
       <Foreground/>
      </div>
    </>
  )
}

export default App
