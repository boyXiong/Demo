import * as React from 'react';
import { App } from './App';
import RouterComponent from './routes/RouterComponent'

export interface IMainProps
{
    app: App; // Reference to our App.ts class
}

export class Main extends React.Component<IMainProps, {}>
{
    constructor(props: IMainProps){
        super(props);
    }

    render(){
        return (
               <RouterComponent/>       
        );
    }
}