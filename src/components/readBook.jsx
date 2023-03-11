import Navbar from "./navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";// to fetch information from router or url for seperate ids
import "../styles/readbook.css"
const ReadBook = () => {
    let params = useParams()//to fetch id from url or route

    let [book, setBook] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`http://localhost:4000/books/${params.id}`)
            let data = await response.json()
            setBook(data)
        }
        fetchData()
    })
    return (
        <div className="readbook">
            <Navbar />
            <div className="wholecontent">
                <div className="picture">
                    <img src={book.thumbnailUrl} alt="" />
                </div>
                <div className="contents">
                    <h1>Title: {book.title}</h1>
                    <h2>Author: {book.authors}</h2>
                    <h3>Short Description:</h3> <p>{book.shortDescription}</p>
                    <h3>Long Description:</h3><p>{book.longDescription}</p>
                </div>
            </div>
        </div>
    );
}

export default ReadBook;