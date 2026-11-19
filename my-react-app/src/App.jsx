// import Sample from "./Components/Sample"
// import Clock from "./Components/clock"
// import StudentCard from "./Components/studentCard"
// import NavBar from "./Components/NavBar"
// import Footer from "./Components/Footer"
// import StudentCard1 from "./Components/StudentCard1"
// import WelcomeMessage from "./Components/WelcomeMessage"
// import Training from "./Components/Training"
// import List from "./Components/List"
// import Products from "./Components/Products"
// import Counting from "./Components/Counting"
// import CounterCreate from "./Components/CounterCreate"
// import HooksUseEffect from "./Components/HooksUseEffect"
// import HooksErrorHandling from "./Components/HooksErrorHandling"
// import HooksUseContext from "./Components/HooksUseContext"
// import AskAI from "./Components/AskAI"
// function App() {
//     return (  
// <div>
//   <NavBar/>
//   {/* <StudentCard1/> */}
//   {/* <StudentCard/> */}
//  {/* <Sample/> */}
//  {/* <Clock/>  */}
//  {/* <WelcomeMessage/> */}
//  {/* <Training/> */}
//  {/* <List/> */}
//  {/* <Products/>  */}
//  <CounterCreate/>
//  <Counting/>
//  <HooksUseEffect/>
//  <HooksErrorHandling/>
//   <HooksUseContext />
// <Footer/>
// {/* <AskAI/> */}
//   </div>
//     )
// }
// export default App


import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"

import NavBar from "./Components/NavBar"
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import StudentDetails from "./Pages/StudentDetails"
import UsingCRUDOperator from './Pages/UsingCRUDOperator'
function App() {
  const [student, setStudent] = useState(null)

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register setStudent={setStudent} />} />
        <Route path="/student" element={<StudentDetails student={student} />} />
        <Route path="/Data" element={<UsingCRUDOperator />}/>
      </Routes>
     
    </div>
  )
}

export default App