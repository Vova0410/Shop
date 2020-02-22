/**
 * Created by Dell on 04.02.2020.
 */
export const addBookToCardCreator = (book) => (
    {
        type: 'ADD_BOOK_TO_CARD',
        payload: book
    }
);

export const removeBookFromCard = (id) => (
    {
        type: 'REMOVE_BOOK_FROM_CARD',
        payload: id
    }
);