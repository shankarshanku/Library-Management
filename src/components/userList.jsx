import { useState, useEffect } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import "../styles/userlist.css"

const UserList = () => {
    let [lb, setLb] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch("http://localhost:4000/users")
            let data = await response.json()
            setLb(data)
        }
        fetchData()
    },)
    let deleteuser = (id, firstname) => {
        fetch(`http://localhost:4000/users/${id}`, {
            method: 'DELETE'
        })
        alert(`${firstname} has been deleted permenantly`)
    }
    
    return (
        <div className="userlist">
            <Navbar />
            <div className="container1">
                <h1 className="header1">USER LIST</h1>
                {lb.map((x) => (
                    <div className="userss">
                        <div className="displayalpha">
                            <h1>{x.firstname.split("")[0]}</h1>
                        </div>
                        <div className="sentence">
                            <h1>Name:  {x.firstname} {x.lastname}</h1>
                            {/* <h3>lastname: {x.lastname}</h3> */}
                            <p> Email : {x.email}</p>
                            <p>Contact: {x.contact}</p>
                            {/* <button className="two"> <Link to={`/user-list/${x.id}`} >Read More</Link></button>  */}
                            <button onClick={() => deleteuser(x.id, x.fisrtname)} className="three">  <Link >Delete</Link></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserList;