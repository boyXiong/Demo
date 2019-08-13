import * as ReactDOM from 'react-dom';
import * as React from 'react';
import  Main  from './Main';
import RouterComponent from './routes/RouterComponent';
import { BrowserRouter, Route } from 'react-router-dom';
// export class App
// {
//     constructor()
//     {
//         this.render();
//     }

//     render()
//     {
//         ReactDOM.render(React.createElement(Main, { app: this }), document.getElementById("app"));
//     }
// }

// new App();

ReactDOM.render(
    <BrowserRouter>
        <RouterComponent />
    </BrowserRouter>,
   document.getElementById("app")
);