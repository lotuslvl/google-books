import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Search extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Google Book Search
              </h1>
              <h3>
                Search for and Save Books of Interest
              </h3>
              
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Enter a Book Title</h1>
              <p>
                {this.state.book.synopsis}
              </p>
              <div className="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-sm">Search</span>
                </div>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                </div>
            
            </article>
          </Col>
        </Row>

        <Row>
     









        </Row>

      </Container>
    );
  }
}

export default Search;
