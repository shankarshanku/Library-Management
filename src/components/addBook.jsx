import { useState } from "react";
import Navbar from "./navbar";
import "../styles/addbook.css"
import {  useNavigate } from "react-router-dom";

const AddBook = () => {
    let [title,setTitle]=useState("")
    let [pageCount,setPageCount]=useState("")
    let [authors,setAuthors]=useState("")
    let [categories,setCategories]=useState("")
    let[shortDescription,setShortDescription]=useState("")
    let [thumbnailUrl,setThumbnailUrl]=useState("")
    let Navigate = useNavigate() 
    let handlesubmit=(e)=>{
        e.preventDefault() // use to prevent reloding of the site(should pass any parameter in above call back function,eg here passing 'e').
        let data = { title, pageCount, authors, categories,shortDescription, thumbnailUrl }
        fetch("http://localhost:4000/books", {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(data) //used to convert the entered data to String

        })
        alert("Book added successfully")

        Navigate("/book-list")
    }
    return (  
        <div className="addbook">
            <Navbar/>
            <div className="box1">
                <div className="title">
                <h1>Add Books</h1>
                </div>
                <div className="forms">
                    <form action="" onSubmit={handlesubmit}>
                       
                    <label style={{margin:"0px" , padding:"35px"}} htmlFor="">Title:</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="enter title" />
                   <br />
                    <label style={{margin:"0px" , padding:"30px"}} htmlFor="">Pages:</label>
                    <input type="text" value={pageCount} onChange={(e)=>setPageCount(e.target.value)} placeholder="enter the pagecount" />
                    <br />
                    <label style={{margin:"0px" , padding:"30px"}} htmlFor="">Author:</label>
                    <input type="text" value={authors} onChange={(e)=>setAuthors(e.target.value)} placeholder="enter the author" />
                    <br />
                   <label style={{margin:"0px" , padding:"23px"}} htmlFor="">Category:</label>
                    <input type="text" value={categories} onChange={(e)=>setCategories(e.target.value)} placeholder="enter the category" />
                    <br />
                    <label style={{margin:"0px" , padding:"18px"}} htmlFor="">Description:</label>
                    <input type="text" value={shortDescription} onChange={(e)=>setShortDescription(e.target.value)} placeholder="enter the description" />
                    <br />
                    <label style={{margin:"0px" , padding:"26px"}} htmlFor="">ImageUrl:</label>
                    <input type="text"value={thumbnailUrl} onChange={(e)=>setThumbnailUrl(e.target.value)} placeholder="enter the image url" />
                    
                    <br />
    
                    <button style={{marginLeft:"50px" , padding:"0px"}}>Click</button>
                    <button>Cancel</button>
                    </form>

                </div>
            </div>
        </div>
    );
}
 
export default AddBook;