/**
 * Created by Dell on 04.02.2020.
 */

let initialState = {
    books: null,
    isReady: false
};

export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOOKS':
            return {
                ...state,
                books: action.payload,
                isReady: true
            };
        default:
            return state
    }
};



/*case 'ADD BOOKS':
let newBook = {
    name: action.name,
    author: action.author,
    price: action.price
};
return {
    ...state,
    books: [
        ...state.books, newBook
    ]
};*/
