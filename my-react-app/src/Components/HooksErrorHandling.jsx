import { useState,useEffect } from "react";
const HooksErrorHandling = ()=>{
    const [users,setUsers]=useState([])
    const [ loading,setLoading]= useState(true)
    const [error,setError]=useState("")
    useEffect(()=>{
        const getUser = async()=>{
            try{
                const response=await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await response.json();
                        setUsers(data)
                        // setUser(data.users)
            }catch(error) {
                setError("Failed")
            }finally {
                setLoading(false)
            }
        }
        getUser();
    },[]);
    if (loading) return<p>loading...</p>
    if (error) return <p>{error}</p>
    return(
        <>
        {users.map((user)=>(<div key = {users.id}>
            <p>{user.name}</p>
            <p>{user.email}</p><hr/></div>))}
        </>
    )
}
export default HooksErrorHandling;
