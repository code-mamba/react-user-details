import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";

const AddUser = ()=>{
	const [state, setState] = useState({
		name:"",
		email:"",
		contact:"",
		address:"",
	});
const [error,setError] = useState('');
let dispatch =useDispatch()
	
const{name,email,contact,address} = state;

const handleInputChange = (e) =>{
		let{name,value}= e.target;
		setState({...state,[name]:value});
}
const handleSubmit = (e)=>{
	e.preventDefault()
	if(!name ||!address||!email|| !contact){
		setError("Please fill all input field")
	}
	else{
		dispatch(addUser(state))
		setError("")
	}

}

	return(
		<div>
			<div>
			<h2>Add user</h2>
			{error && <h2 style={{color:"red"}}>{error}</h2>}
			<section className="vh-100" style={{backgroundColor: "#eee"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Create User</p>

                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" value={name} id="form3Example1c" name ="name" className="form-control" onChange={handleInputChange} />
                      <label className="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>
				
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" value={email} id="form3Example3c" name="email" className="form-control"  onChange={handleInputChange}/>
                      <label className="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

               

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" value={contact} id="form3Example4cd" name="contact" className="form-control" onChange={handleInputChange} />
                      <label className="form-label" for="form3Example4cd">Contact</label>
                    </div>
                  </div>
				  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" value={address} id="form3Example4c" name="address" className="form-control" onChange={handleInputChange} />
                      <label className="form-label" for="form3Example4c">Address</label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
			</div>
		</div>
	)
}
export default AddUser