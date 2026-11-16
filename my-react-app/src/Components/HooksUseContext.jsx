import { createContext, useState, useContext } from "react";

//  1. COUNTER
//Create Context
const CounterContext = createContext()
//Provider- Here to put data
const CounterCreate = () => {
  const [count, setCount] = useState(0)
  const increment = () => count < 10 && setCount(count + 1)
  const decrement = () => count > 0 && setCount(count - 1)
  const reset = () => setCount(0)
  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      <CounterChild />
    </CounterContext.Provider>
  )
}

//Child - useContext - Take Data directly from here
const CounterChild = () => {
  const { count, increment, decrement, reset } = useContext(CounterContext)
  return (
    <>
      <h2>1. Counter using useContext</h2>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

//  2. THEME
const ThemeContext = createContext()
const ThemeCreate = () => {
  const [dark, setDark] = useState(false)
  const toggle = () => setDark(!dark)
  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <ThemeChild />
    </ThemeContext.Provider>
  )
}

// const ThemeChild = () => {
//   const { dark, toggle } = useContext(ThemeContext)
//   return (
//     <>
//       <h2>2. Toggle Theme using Context API</h2>
//       <h2>{dark ? "Dark Mode" : "Light Mode"}</h2>
//       <button onClick={toggle}>Toggle Theme Change</button>
//     </>
//   )
// }

const ThemeChild = () => {
  const { dark, toggle } = useContext(ThemeContext)
  return (
    <div style={{ backgroundColor: dark ? "black" : "white", color: dark ? "white" : "black", padding: "20px" }}>
      <h2>2. Toggle Theme using Context API</h2>
      <h2>{dark ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={toggle}>Toggle Theme Change</button>
    </div>
  )
}


//  3. CALCULATOR 
const CalcContext = createContext()
const CalcCreate = () => {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  return (
    <CalcContext.Provider value={{ num1, setNum1, num2, setNum2 }}>
      <CalcChild />
    </CalcContext.Provider>
  )
}

const CalcChild = () => {
  const { num1, setNum1, num2, setNum2 } = useContext(CalcContext)
  return (
    <>
      <h2>3. Calculator using useContext</h2>
      <input type="number" placeholder="First Number" onChange={(e) => setNum1(Number(e.target.value))} />
      <br /><br />
      <input type="number" placeholder="Second Number" onChange={(e) => setNum2(Number(e.target.value))} />
      <h3>Addition: {num1 + num2}</h3>
      <h3>Subtraction: {num1 - num2}</h3>
      <h3>Multiplication: {num1 * num2}</h3>
      <h3>Division: {num2 !== 0 ? num1 / num2 : "Cannot divide by 0"}</h3>
    </>
  )
}

// MAIN - 3 TOGETHER 
const HooksUseContext = () => {
  return (
    <>
      <h1>useContext</h1>
      <CounterCreate />
      <hr />
      <ThemeCreate />
      <hr />
      <CalcCreate />
    </>
  )
}

export default HooksUseContext