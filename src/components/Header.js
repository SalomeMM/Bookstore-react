import React, { Component } from "react";

// export default class Header extends Component {
//   render() {
//     return (
//       <header>
//         <div class="header-div">
//         <h1 id="header-title">Ubiqum Bookstore</h1>
//         {/* <input
//           id="search-bar"
//           onChange={event => this.props.search(event.target.value)}
//           type="textarea"
//           placeholder="Search here"
//         ></input> */}
//         </div>
//       </header>
//     );
//   }
// }

export default class Header extends Component {
  render() {
    return (
      <header>
<nav class="navbar navbar-expand-lg navbar-light bg-light header-div">
                <a class="navbar-brand" href="#">My Bookstore</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse search-div" id="navbarSupportedContent">
                    {/* <form class="form-inline my-2 my-lg-0 search-form" action="" method="get">
                        <input id="search-input" class="form-control mr-sm-2" type="search" placeholder="Search"
                            aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>
      </header>
    );
  }
}