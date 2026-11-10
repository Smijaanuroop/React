function Products() {
   
    return(
        <>
        <h2>Product List</h2>
        const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 }
  ];
        <ul>
            {Products.map((id,index)=>(<li key={id}>{Products}</li>))}
            
        </ul>
        </>
    )
}
export default List