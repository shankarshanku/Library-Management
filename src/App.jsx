import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Admin from "./components/admin";
import BookList from "./components/booklist";
import AddBook from "./components/addBook";
import AddUsers from "./components/addUser";
import ReadBook from "./components/readBook";
import UserList from "./components/userList";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Login/>} path="/"/>
          <Route element={<Admin/>} path="/admin"/>
          <Route element={<BookList/>} path="/book-list"/>
          <Route element={<AddBook/>} path="/add-book"/>
          <Route element={<AddUsers/>} path="/add-user"/>
          <Route element={<ReadBook/>} path="/book-list/:id"/>
          <Route element ={<UserList/>} path="/user-list"/>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;
