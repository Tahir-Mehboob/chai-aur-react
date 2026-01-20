import { use, useState} from 'react'
import './App.css'

function App() {
{/* how to apply hooks useState() */}
  let [counter, setCounter] = useState(15)  // array destructuring


  {/* create a state variable for counter */}
  //let counter = 5

  {/* create a function  */}
  const addValue = () => {
    console.log("Button Clicked")
    if(counter >=0 && counter <20){
     // counter = counter + 1
    setCounter(counter+1)
    setCounter(counter+1) //passing the updated value to the state variable 
    setCounter(counter+1)
    setCounter(counter+1)

    console.log(counter)
    }
  }
  

  // create a function to decrease the counter value
  const removeValue = () => {
    console.log("Remove Button Clicked")
    if(counter > 0){
    //counter = counter - 1
    setCounter (counter-1) // passing the updated value to the state variable
    console.log(counter)
    }
  }

    // interview question
  const multiplyValueAdd = () => {
    
    //passing the updated value to the state variable 
    // setCounter(counter+1)
    // setCounter(counter+1) 
    // setCounter(counter+1)
    // setCounter(counter+1)

    // result will be +1 only because react batches the state updates for performance optimization
    // to overcome this issue we can use functional updates
    // example below
    
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    
  
  }
  return (
    <>
     <h1>Chai or React</h1>
     <h2>Counter Values : {counter}</h2> {/* to Inject the variable value into html {} */}
     
     <button onClick={addValue} >  {/* addValue is  reference holder means function name */}
     Add Value {counter} 
     </button>
    <br></br>

    <button onClick={multiplyValueAdd}>Multiple Value</button>

     <br></br>
     <button onClick={removeValue}
     >Remove Value {counter}
     </button>

    </>
  )
}

export default App
