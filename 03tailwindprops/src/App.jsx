import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards.jsx'

function App() {
  const [count, setCount] = useState(0)


  let obj = {
    name: "Tahir Mehboob",
    channel: "Tahir Mehboob",
    course: "React JS"
  }


  let myArray = [10,20,30,40,50];

      return (
    <>

      <h1 className="bg-green-400 text-black p-4 rounded-xl">
        Tailwind v4 is working 🚀
      </h1>
      {/* <Card channel="Tahir Mehboob" obj={obj} arr={myArray}/>   */}
      <Card username="Zainab Tahir" btnText="Click me" />
       
    </>
  )
}

export default App
