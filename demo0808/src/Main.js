import * as React from 'react';
// import { App } from './App';
import RouterComponent from './routes/RouterComponent'

// export interface IMainProps
// {
//     app: App; // Reference to our App.ts class
// }

export default class Main extends React.Component
{
    render(){
        return (
               <RouterComponent/>       
        );
    }
}