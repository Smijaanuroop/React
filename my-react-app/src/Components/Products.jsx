function Products() {
   
   
      
        const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 }
  ];
   return(
        <>
          <h2>Product List</h2>
        <ul>
            {products.map((product)=>(<li key={product.id}>{product.id}:{product.name}, price : {product.price}

            </li>
        ))}
            
        </ul>
        </>
    );
}
export default Products;