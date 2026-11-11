import { createContext,useState, useContext } from "react";
//Create Context
const CounterContext = createContext()
//Provider-here CounterCreate- where put data
const CounterCreate = ()=> {
    const [ count,setCount] = useState(0)
    const increment = ()=> count < 10 && setCount(count+1)
    const decrement = ()=> count>0 && setCount(count-1)
    const reset = () => setCount(0)
    return(
            <CounterContext.Provider value= {{count, increment, decrement,reset}}>
                <ChildComponent/>
            </CounterContext.Provider>

    )
}

//Child - useContext- Take Data directly from here
const ChildComponent = () => {
    const {count, increment, decrement,reset}=useContext(CounterContext)
    return(
            <>
                <h2>{count}</h2>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={reset}>Reset</button>
            </>
    )

}
export default CounterCreate