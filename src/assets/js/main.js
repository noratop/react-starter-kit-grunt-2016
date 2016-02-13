import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Followers from './components/Followers';
import Repos from './components/Repos';
import Test from './components/Test';


var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="followers" component={Followers}/>
      <Route path="repos" component={Repos}/>
        <Route path="test" component={Test}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
)

ReactDOM.render(routes, document.querySelector('#app'));
