/**
 * Created by Dell on 04.02.2020.
 */
let initialState = {
        items: []
};

export const cardReducer = (state = initialState, action) => {
  switch(action.type) {
      case 'ADD_BOOK_TO_CARD':
          return {
              ...state,
              items: [
                  ...state.items,
                  action.payload
              ]
          };
      case 'REMOVE_BOOK_FROM_CARD':
          return{
              ...state,
              items: [
                  state.items.filter( book => book.id !== action.payload )
              ]
          };
      default: return state
  }
};
