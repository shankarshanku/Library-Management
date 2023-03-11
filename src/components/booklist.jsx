import { useState, useEffect } from "react";
import Navbar from "./navbar";
import "../styles/booklist.css"
import { Link } from "react-router-dom";
const BookList = () => {
    let [db, setDb] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch("http://localhost:4000/books")
            let data = await response.json()
            setDb(data)
        }
        fetchData()
    },)
    let deleteBook=(id,title)=>{
        fetch(`http://localhost:4000/books/${id}`,{
            method:'DELETE'
        })
        alert(`${title} has been deleted permenantly`)
    }
    return (
        <div className="BookList">
            <Navbar />
            <div className="container">
                <h1 className="header">BOOK LIST</h1>
                {db.map((x) => (

                    <div className="books">
                        <div className="images">
                            <img src={x.thumbnailUrl} alt="" />
                        </div>
                        <div className="sentence">
                            <h1>Title:  {x.title}</h1>
                            <h3>Page Count:{x.pageCount}</h3>
                            <p> Written by {x.authors}</p>
                            <p>Category: {x.categories}</p>
                          <button className="one"> <Link to={`/book-list/${x.id}`} >Read More</Link></button> 
                          <button onClick={()=>deleteBook(x.id,x.title)} className="two">  <Link >Delete</Link></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookList;