import * as React from 'react';
// import { App } from './App';
import RouterComponent from './routes/RouterComponent'
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';

// export interface IMainProps
// {
//     app: App; // Reference to our App.ts class
// }

export default class Main extends React.Component {
    // BrowserRouter 里面 只包含一个组件会好点
    render() {
        return (
            <BrowserRouter>
                <RouterComponent />
            </BrowserRouter>
        );
    }
}