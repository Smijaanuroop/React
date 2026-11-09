import StudentName1 from "./StudentName1"
function StudentCard1() {
  return (
    <>
    <h2>Student Card</h2>
    <div>
        <StudentName1 name="Sneha" course="Python"/>
         <StudentName1 name="Sara" course="React"/>
    </div>
    {/* <StudentName1/> */}
    </>
  )
}
export default StudentCard1