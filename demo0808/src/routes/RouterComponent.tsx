import React, { PureComponent } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import ShopsView from '../containers/ShopsView'
import ShopBuyView from '../containers/ShopBuyView'

export default class RouterComponent extends React.Component<any,any> {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={ShopBuyView}/>
        <Route path="/home"  component={ShopsView}/>  
        <Route path="/test"  render={()=>(<div>hello is me.</div>)}/>    
      </Switch>
    )
  }
}
