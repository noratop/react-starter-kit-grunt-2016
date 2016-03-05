import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './container/App';
import Home from './container/Home';
import Followers from './container/Followers';
import Repos from './container/Repos';
import NotFound from './components/NotFound';

import reducer from './redux/reducer';

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="followers" component={Followers}/>
      <Route path="repos" component={Repos}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
)

let store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.querySelector('#app'));
