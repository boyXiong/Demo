import React, { PureComponent } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import ShopsView from '../containers/ShopsView'
import ShopBuyView from '../containers/ShopBuyView'

export default class RouterComponent extends React.Component<any,any> {
  render() {
    return (
      <BrowserRouter>
                <Route path="/" exact component={ShopBuyView}/>
                <Route path="/home" component={ShopBuyView}></Route>         
      </BrowserRouter> 
    )
  }
}
