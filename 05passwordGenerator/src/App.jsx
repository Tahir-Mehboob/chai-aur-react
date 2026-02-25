import { useState,useCallback,useEffect,useRef, use} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")
     
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str += "0123456789"
    }
    if(characterAllowed){
      str += "!@#$%^&*()_+~`|}{[]:;?><,./-="
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()
                * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword]) //if any of these change, it will store in cache again and memoize it
  // b/c this is function definition not call 
  
  //generatePassword()  // throw error in console b/c too many re-rendering 
  
  // solution 1 use use Button to trigger password generation

  // solution 2 use useEffect is responsible for calling generatePassword when any of its dependencies change
  // when page is loaded, it will call generatePassword once
  useEffect( () => {
    generatePassword()
  }, [length, numberAllowed, characterAllowed, generatePassword])

  // copy to clipboard
  const copyPasswordToClipboard = useCallback(() =>{
    // for optimization purpose selected password in the text filed
    passwordRef.current?.select();
    //passwordRef.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
   
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">

        <h1 className=" text-white  text-center my-4">Password Generator</h1>
       
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none  bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipboard}
            >
               Copy </button>
        </div>

        <div className="flex text-sm-gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label> Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={(e) => setNumberAllowed((prev) => !prev)} // this mean prev value reverse it
            />
            <label htmlFor="numberInput"> Numbers </label>
          </div>

            <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id='characterInput'
              onChange={(e) => setCharacterAllowed((prev) => !prev)} // this mean prev value reverse it
            />
            <label htmlFor="characterInput"> Character </label>
          </div>

        </div>
      </div>
  )
}

export default App
