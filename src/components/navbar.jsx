import { Link } from "react-router-dom";
import "../styles/navbar.css"
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <div className="imgs">
                    <img src={"/images/main-logo-green.svg"} alt="" />
                </div>
                <div className="name">
                    <h1>INDIAN LIBRARY</h1>
                </div>
            </div>
            <div className="links">
                <ul>
                    <li><Link to="/admin">Home</Link> </li>
                    <li><Link to="/book-list">Book List</Link> </li>
                    <li><Link to="/user-list">User List</Link> </li>
                    <li><Link to="/add-book">Add Books</Link> </li>
                    <li><Link to="/add-user"> Add User</Link> </li>
                    <li><Link to="/">Logout</Link> </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;