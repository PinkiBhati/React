import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {createStore , combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import counterReducer from './store/reducers/counter'
import resultReducer from './store/reducers/result'

const rootReducer = combineReducers({ctr : counterReducer, res: resultReducer})

const logger= store =>{
  return next =>{
    return action=>{
      console.log('MIDDLE-WARE dispatching', action);
      const result= next(action);
      console.log('MiddleWare next state', store.getState())
      return result
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store= createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
//provider helps to inject our store into the react app

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
