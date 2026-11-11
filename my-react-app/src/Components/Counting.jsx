// import {useState} from "react";
// function Counting() {
//     const [count,setCount]=useState(0)
//     return(
//         <>
//             <h2>{count}</h2>
//             <button onClick={()=>count<10 && setCount(count+1)}>+</button>
//             <button onClick={()=>count >1 && setCount(count-1)}>-</button>
//         </>
//     )
// }
// export default Counting
// function Counting() {
//     const [isOn, setIsOn] = useState(false);
//     return(
//             <>
//                 <h2>{isOn ? "On":"Off"}</h2>
//                 <button onClick={()=>setIsOn(!isOn)}>{isOn ? "turnOff" : "turnOn"}</button>
//             </>

//     );
// }
// export default Counting


import { useState, useEffect } from "react"

function Counting() {

  // 1. Add two numbers
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [sum, setSum] = useState(0)

  const addNumbers = () => {
    setSum(Number(num1) + Number(num2))
  }

  // 2. Chech if two inputs match
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')

  // 3. array of objects using map
  const students = [
    { id: 1, name: 'Anu', place: 'Kochi' },
    { id: 2, name: 'Miya', place: 'Calicut' },
    { id: 3, name: 'Arjun', place: 'Trivandrum' },
  ]

  // 4. List <ul> <li>
  const fruits = ['Apple', 'Mango', 'Banana', 'Orange']

  // 5. Input show in <h1>
  const [name, setName] = useState('')

  // 6. Stopwatch
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let timer
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isRunning])

  // 7. On-Off toggle
  const [isOn, setIsOn] = useState(false)

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>React Practice - 7 Tasks</h1>
      <hr />

      {/* 1. Add two numbers */}
      <h2>1. Add Two Numbers</h2>
      <input type="number" placeholder="First number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input type="number" placeholder="Second number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <button onClick={addNumbers}>Add</button>
      <p>Result: {sum}</p>
      <hr />

      {/* 2. Check match */}
      <h2>2. Check If Text Matches</h2>
      <input placeholder="Type here" value={text1} onChange={(e) => setText1(e.target.value)} />
      <input placeholder="Type again" value={text2} onChange={(e) => setText2(e.target.value)} />
      <p>{text1 === '' ? 'Type something...' : text1 === text2 ? '✅ Matched!' : '❌ Not Matching'}</p>
      <hr />

      {/* 3. Array of objects */}
      <h2>3. Array of Objects using map</h2>
      {students.map((student) => (
        <div key={student.id}>
          <p>{student.name} - {student.place}</p>
        </div>
      ))}
      <hr />

      {/* 4. <ul> <li> list> */}
      <h2>4. List ul li</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <hr />

      {/* 5. Input to <h1> */}
      <h2>5. Input to H1</h2>
      <input placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
      <h1>Hello, {name}</h1>
      <hr />

      {/* 6. Stopwatch */}
      <h2>6. Stopwatch</h2>
      <h1>{seconds} sec</h1>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => { setIsRunning(false); setSeconds(0) }}>Reset</button>
      <hr />

      {/* 7. ON-OFF Toggle */}
      <h2>7. On-Off Toggle</h2>
      <h3>{isOn ? ' ON' : ' OFF'}</h3>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'Turn OFF' : 'Turn ON'}
      </button>

    </div>
  )
}

export default Counting