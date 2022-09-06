import axios from "axios";
import { useEffect, useState } from "react"

const ListUsers =()=>{
    const [users,setUsers]=useState ([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then ((res)=>setUsers(res.data))
        .then (()=>setLoading(false))
        .catch ((error)=>console.log (error))

    },[])
    return(
        <div className="list">
        {
            loading? " ll assaf": users.map((user)=><h5>{user.name}</h5>)
        }

        </div>
    )
}
export default ListUsers