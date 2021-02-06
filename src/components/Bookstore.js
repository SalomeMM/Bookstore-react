import React, { Component } from "react";
import Book from "./Book";

class Bookstore extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    fetch("https://api.jsonbin.io/b/5ea833484c87c3359a632938")
      .then(res => {
        return res.json();
      })
      .then(result => {
        console.log("result :", result);
        this.setState({ books: result.books });
      });
  }

  cutArray() {
    return this.state.books.filter((book, index) => {
      return index < 10;
    });
  }

  render() {
    return (
      <div className="flipCardContainer">
        {this.state.books.map((book, index) => {
          return <Book key={index} book={book} i={index} />;
        })}
      </div>
    );
  }
}

export default Bookstore;
