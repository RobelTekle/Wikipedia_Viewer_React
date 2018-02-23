import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import reducer from "./reducers/";

const store = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
<Provider store={store(reducer)}>
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
