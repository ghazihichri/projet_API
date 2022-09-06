import { Link } from "react-router-dom"


const ListNav =()=>{
    return (
        <div className="navbarr">
         <Link to='/' id="notligne"><h3>Home</h3></Link> 
         <Link to='/Users' id="notligne"> <h3>ListUsers</h3> </Link>

        </div>
    )
}
export default ListNav