import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { deleteUser, loadUsers } from "../redux/actions";
import '../Pages/Home.css'
import { useNavigate } from 'react-router-dom'


const Home = () =>{

	let dispatch = useDispatch();
	const{users} = useSelector((state=>state.data))
	const navigate = useNavigate()


useEffect(()=>{
	dispatch(loadUsers())
},[users])

const handleDelete = (id)=>{
	if(window.confirm("Are you sure you wanted to delete the user")){
		dispatch(deleteUser(id))
	}
}


	return(
		<div>
			<h2>Home</h2>
			<button className="btn btn-success" onClick = {()=>navigate('/addUser')} style={{marginBottom:"10px"}} >Add User</button>
			<table className="table">
    <thead className="table-dark">
        <tr>
            <th>SI.No</th>
            <th>Name</th>
            <th>Email</th>
			<th>contact</th>
			<th>Address</th>
			<th>Action</th>
        </tr>
    </thead>
	{users && users.map((user)=>(
		<tbody key={user.id}>
			<tr>
				<td>{user.id}</td>
				<td>{user.name}</td>
				<td>{user.email}</td>
				<td>{user.contact}</td>
				<td>{user.address}</td>
				<button  onClick ={()=>navigate(`/editUser/${user.id}`)} style={{ color:'black', marginRight:"10px", marginBottom:"3px"}}  type="button" className="btn btn-primary">Edit</button>
				<button onClick = {()=>handleDelete(user.id)} style={{color:"black"}} type = "button" className="btn btn-danger">Delete</button>
			</tr>
		</tbody>

	))}
</table>
		</div>
	)
}
export default Home