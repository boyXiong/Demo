import React, { PureComponent } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import ShopsView from '../containers/ShopsView'
import ShopBuyView from '../containers/ShopBuyView'
import ShopMorePlayView from '../containers/ShopMorePlayView'

export default class RouterComponent extends React.Component<any,any> {
  render() {
    return (
      <Switch>
        <Route path="/buy" exact component={ShopBuyView}/>
        <Route path="/home"  component={ShopsView}/> 
        <Route path="/more" component={ShopMorePlayView}/>     
        <Route path="/test"  render={()=>(<div>hello is me.</div>)}/>    
      </Switch>
    )
  }
}
