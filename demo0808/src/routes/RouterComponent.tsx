import React, { PureComponent } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import ShopsView from '../containers/ShopsView'

export default class RouterComponent extends React.Component<any,any> {
  render() {
    return (
      <BrowserRouter>
                <Route path="/" exact component={ShopsView}/>
                <Route path="/shop" component={ShopsView}></Route>         
      </BrowserRouter> 
    )
  }
}
