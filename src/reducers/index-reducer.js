import {combineReducers} from "redux";
import {booksReducer} from "./books-reducer";
import {cardReducer} from "./cards-reducer";




const reducers = combineReducers({
    books: booksReducer,
    card: cardReducer
});

export default reducers;
