import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

//Add any middlewear to the HOC below
const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(),
  // other store enhancers if any
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
