function List() {
    const students = ["AAA","BBB","CCC"];
    return(
        <>
        <h2>Student List</h2>
        {/* const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 }
  ]; */}
        <ul>
            {students.map((students,index)=>(<li key={index}>{students}</li>))}
            
        </ul>
        </>
    )
}
export default List