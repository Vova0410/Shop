import React, {Component, useEffect} from 'react';
import './store';
import {connect} from "react-redux";
import {setBooksKreator} from "./actions/books-action";
import * as  axios from 'axios';

import {Container, Card} from 'semantic-ui-react';
import MenuHeader from "./components/menu/Menu";
import BookCard from "./components/bookCard/BookCard";

class App extends Component {

    componentDidMount() {
        axios.get('/books.json').then((respons) => {
            this.props.setBooks(respons.data)
        })
    }

    render() {
        let isReady = this.props.isReady;
        let books = this.props.books;

        return (
            <Container>
                <MenuHeader />
                <Card.Group itemsPerRow={4}>
                    {!isReady ? "LOADING..." : books.books.map((book, index) => (
                        <BookCard book={book} index={index} />
                        )
                    )}
                </Card.Group>
            </Container>
        );
    }

}


const mapStateToProps = (state) => {
    return {
        books: state.books,
        isReady: state.books.isReady
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setBooks: (book) => dispatch(setBooksKreator(book))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

{/*
 <div key={index}>
 {book.title}- {book.author}
 </div>*/
}


/*class App extends Component {

 componentDidMount() {
 axios.get('/books.json').then((respons) => {
 this.props.setBooks(respons.data)
 })
 }

 render() {

 return (
 <div className="container">
 {this.props.books.books.map((book, index) => {
 return(
 <div key={index}>
 {book.title}- {book.author}
 </div>
 )
 })}
 </div>
 );
 }

 }*/


{/*<button onClick={()=>this.props.setBooks(books)}>GET BOOKS</button>*/
}

/*const newBooks = [
 {
 id: 0,
 name: 'Shoping Cart- ' + new Date()
 }
 ];*/

/*const App = (props) => {

 useEffect(() => {
 debugger;
 axios.get('/books.json').then((respons) => {
 props.setBooks(respons.data)
 })
 }, []);

 return (
 <div className="container">
 {props.books.books.map((book, index) => {
 return (
 <div key={index}>
 {book.title}- {book.author}
 </div>
 )
 })}
 </div>
 );

 };*/

