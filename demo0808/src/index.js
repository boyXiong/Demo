import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { Provider } from 'react-redux'

// 目前 没有用
ReactDOM.render(
     <Provider>
        <Main />
      </Provider>,
    document.getElementById("app")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
