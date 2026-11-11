import { useState } from "react";
function Message() {
    //starts with boolean state-false
 const [isAuth,setIsAuth]= useState(false)

 const toggle = ()=> setIsAuth(!isAuth)
 // use && oerator
    return(
 <div>
      <hr />
      
     {isAuth && <h2>Welcome User</h2> 
    }
    <button onClick={toggle}>{isAuth ? "Show" : "Hide"}</button>
    </div>
 )
}
export default Message