import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tabel from './assets/Component/Tabel'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <div className=' bg-gray-400 p-2'>
        <input onChange={console.log("Test")} className='bg-gray-200 p-2 rounded-2xl' placeholder='ค้นหา' type='text'></input>
      </div>
 <Tabel/>
    </main>
    </>
  )
}

export default App
