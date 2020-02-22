import React, {Component, useEffect} from 'react';
import './store';
import {connect} from "react-redux";
import {setBooksKreator} from "./actions/books-action";
import * as  axios from 'axios';

import {Container, Card, Icon, Image} from 'semantic-ui-react';
import MenuHeader from "./components/menu/Menu";

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
                            <Card key={index}>
                                <Image src={book.image} wrapped ui={true}/>
                                <Card.Content>
                                    <Card.Header>{book.title}</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Joined in 2015</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        {book.author}
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <a>
                                        <Icon name='user'/>
                                        22 Friends
                                    </a>
                                </Card.Content>
                            </Card>
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

