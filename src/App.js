import React from "react";
import "./App.css";
import Header from "./components/Header";
import Bookstore from "./components/Bookstore";
// import Book from "./components/Book";

function App() {
  // const helloBook = {
  //   title: "hello",
  //   description: "hello book"
  // };

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* {" "}
        <Hello msg="First Hello" />
        <Hello msg="Second Hello" /> */}
        {/* <Book book={helloBook} i={99999} />  */}
      {/* </header>{" "} */}
      
      <div>
        <Header />
        <Bookstore />
      </div>
    </div>
  );
}

export default App;
