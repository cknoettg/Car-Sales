import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//decide if we should use rootReducer or just reducer
import rootReducer from './reducers/carReducer';

import 'bulma/css/bulma.css';
import './styles.scss';

//add store
const store = createStore(rootReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, rootElement);
