import { useState } from 'react'

function App() {
 // const [count, setCount] = useState(0) 

  const [color, setColor] = useState('olive'); // this hook is used to manage the background color state and returns an array with two elements

  return (
      <div className="w-full h-screen duration-500"
      // to Implement a dynamic background color change based on state use Style attribute
      // {{}} this is used to pass a JS object in JSX synatax
      // below line how to write inline css in react
      style={{backgroundColor: color}}>

        <div className="fixed flex flex-wrap 
        justify-center bottom-12 inset-x-0 px-2" > 
        
          <div className="flex first-wrap justify-center
          gap-3 shadow-lg p-4 bg-white px-3 py-2 
          rounded-xl"> 
          
          <button
          onClick={() => setColor('red')}
          className="outline-none px-4 py-1 rounded-full text-white
           shadow-lg"
          style={{backgroundColor: 'red'}}
          >Red</button>
          
          <button
          onClick={() => setColor('blue')}
          className="outline-none px-4 py-1 rounded-full text-white
           shadow-lg"
          style={{backgroundColor: 'blue'}}
          >Blue</button>

          <button
          onClick={()=>setColor("green") }
          className="outline-none px-4 py-1 rounded-full text-white
           shadow-lg"
          style={{backgroundColor: 'green'}}
          >Green</button>

          <button
          onClick={()=> setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-back
           shadow-lg"
          style={{backgroundColor: 'yellow'}}
          >Yellow</button>

          <button
          onClick={()=> setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-back
           shadow-lg"
          style={{backgroundColor: 'pink'}}
          >Pink</button>

          <button
          onClick={()=> setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-back
           shadow-lg"
          style={{backgroundColor: 'purple'}}
          >purple</button>

          <button
          onClick={()=> setColor("lavender")}
          className="outline-none px-4 py-1 rounded-full text-back
           shadow-lg"
          style={{backgroundColor: 'lavender'}}
          >Lavender</button>

          <button
          onClick={()=> setColor("white")}
          className="outline-none px-4 py-1 rounded-full text-back
           shadow-lg"
          style={{backgroundColor: 'white'}}
          >white</button>


          <button
          onClick={()=> setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white
           shadow-lg"
          style={{backgroundColor: 'black'}}
          >black</button>

          <button
          onClick={()=> setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-back
           shadow-lg"
          style={{backgroundColor: 'orange'}}
          >Orange</button>

          </div>
        
        </div>  

      </div>
  )
}

export default App
