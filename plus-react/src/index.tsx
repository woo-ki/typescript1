import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

const init: {count: number} = {count: 0}

const reducer = (state = init, action: {type: string}): {count: number} => {
    if(action.type === '증가') {
        return {...state, count: state.count + 1}
    } else if(action.type === '감소') {
        return {...state, count: state.count - 1}
    } else {
        return init
    }
}
const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>;

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
