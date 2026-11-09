import Sample from "./Components/Sample"
import Clock from "./Components/clock"
import StudentCard from "./Components/studentCard"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import StudentCard1 from "./Components/StudentCard1"
import WelcomeMessage from "./Components/WelcomeMessage"
import Training from "./Components/Training"
function App() {
    return (  
<div>
  <NavBar/>
  <StudentCard1/>
  {/* <StudentCard/> */}
 {/* <Sample/> */}
 {/* <Clock/>  */}
 <WelcomeMessage/>
 <Training/>
<Footer/>
  </div>
    )
}
export default App

