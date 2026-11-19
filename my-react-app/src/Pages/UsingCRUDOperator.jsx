import { useState } from "react"
function UsingCRUDOperator() {
 const [arr, setArr]= useState([])
 const [text,setText]= useState("")
 const handleAdd = ()=> {
    if (text.trim() !== ""){
        setArr([...arr,text.trim()])
        setText("")
    }
 }


  return (
   <>
   <h2> CRUD Using Array</h2>
   <input value = {text}
    type="text"
    onChange={(e)=> setText(e.target.value)}
    placeholder="Enter text"
    />
    <button onClick={handleAdd}>Add</button>
    <ul>
        {arr.map((item,index)=>(<li key={index}>{item}</li>
    ))}   
    </ul>
   </>
  )  
}
export default UsingCRUDOperator