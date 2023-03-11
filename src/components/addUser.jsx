import Navbar from "./navbar";
import "../styles/addUser.css"
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
const AddUsers= () => {
    let firstname = useRef(null)
    let lastname = useRef(null)
    let email = useRef(null)
    let contact = useRef(null)
    let Navigate = useNavigate() 
    let addUser =(e)=>{
        e.preventDefault()
       let data ={
        firstname:firstname.current.value,
        lastname:lastname.current.value,
        email:email.current.value,
        contact:contact.current.value
       }
       fetch("http://localhost:4000/users",{
        method:'POST',
        headers: { 'content-Type': 'application/json' },
        body:JSON.stringify(data)
       })
       alert("Book added successfully")

       Navigate("/user-list")
    }
    // let [fn, setFn] = useState("")
    // let [ln, setLn] = useState("")
    // let [email, setEmail] = useState("")
    // let [contact, setContact] = useState("")

    // let navigate = useNavigate()

    // let handleSubmit = (e) => {

    //     e.preventDefault()
    //     let data = { fn, ln, email, contact }
    //     fetch("http://localhost:4010/books", {
    //         method: 'POST',
    //         headers: { 'content-Type': 'application/json' },
    //         body: JSON.stringify(data)

    //     })
    //     alert("User added successfully")

    //     navigate('/user-list')

    // }

    return (
        <div className="addUser">
        <Navbar />
        <div className="bodys">
            <div className="titles">
                <h1>Add Users</h1>
            </div>

            <div className="details">
                <div className="form">
                    <form action="" onSubmit={addUser}>

                        <div className="name">
                            <label  style={{margin:"0px" , padding:"28px"}}  htmlFor="" >Name: </label>
                            <input ref={firstname} type="text" placeholder="Enter First Name" />

                            <label style={{margin:"0px" , padding:"30px"}} htmlFor="" ></label>
                            <input ref={lastname} type="text" placeholder="Enter Last Name" />
                        </div>

                        <div className="email">
                            <label style={{margin:"0px" , padding:"30px"}} htmlFor="Email" >Email: </label>
                            <input ref={email} type="email" placeholder="Enter Email" />
                        </div>

                        <div className="contact">
                            <label style={{margin:"0px" , padding:"20px"}} htmlFor="" >Contact: </label>
                            <input ref={contact} type="number" placeholder="Enter Contact" />
                             <br />
                            <button style={{marginLeft:"105px" , padding:"0px"}} className="on">Add User</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AddUsers;