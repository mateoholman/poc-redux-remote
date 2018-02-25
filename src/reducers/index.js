/*
  Reducers specify how the application's state changes in response to actions sent to the store.
  We suggest that you keep your state as normalized as possible, without any nesting. Keep every entity in an object stored with an ID as a key, and use IDs to reference it from other entities, or lists. Think of the app's state as a database.
  It's very important that the reducer stays pure. Things you should never do inside a reducer:
    * Mutate its arguments
    * Perform side effects like API calls and routing transitions
    * Call non-pure functions, e.g. Date.now() or Math.random()
*/

import { combineReducers } from 'redux';
//Import other reducers here
//ex: import BooksReducer from './reducer_books';
//ex: import ActiveBookReducer from './reducer_active_book';

const rootReducer = combineReducers({
//Insert k/v pairs for reducers to combine here
//ex: books: BooksReducer
//ex: activeBook: ActiveBookReducer
});

export default rootReducer;
