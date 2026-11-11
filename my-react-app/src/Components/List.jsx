function List() {
    const students = ["AAA","BBB","CCC"];
    return(
        <>
        <h2>Student List</h2>
  
        <ul>
            {students.map((students,index)=>(<li key={index}>{students}</li>))}
            
        </ul>
        </>
    )
}
export default List