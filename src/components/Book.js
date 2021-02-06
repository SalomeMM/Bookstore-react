import React from "react";

export default function Book(props) {
  console.log("props :", props);
  const book = props.book;
  //   const index = props.i;

  return (
    <div style={style.container} className="flipCardContainer">
      <div style={style.flipCard} className="flipCard">
        <div style={style.flipCardInner} className="flipCardInner">
          <div style={style.flipCardFront} className="flipCardFront">
            {book.cover && (
              <React.Fragment>
                <img alt="img" src={book.cover} className="bookCover" />
                {/* <p>image</p> */}
              </React.Fragment>
            )}
          </div>
          <div style={style.flipCardBack} className="flipCardBack">
            <h6 className="cardTextTag">
              {/* {index} */}
              Title:
            </h6>
            <p className="cardText">{book.title}</p>
            {/* {index === 2 ?
                (<h2>index is 2</h2>) :
                (<h2>not 2</h2>)} */}
            <h6 className="cardTextTag"> Description:</h6>
            <p className="cardText">{book.description}</p>
            <h6 className="cardTextTag"> Language:</h6>
            <p className="cardText">{book.language}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const style = {
  title: {
    color: "white"
  },
  container: {
    // backgroundColor: 'white'
  }
};
