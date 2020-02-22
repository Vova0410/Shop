import {combineReducers} from "redux";
import {booksReducer} from "./books-reducer";




const reducers = combineReducers({
    books: booksReducer
});

export default reducers;
