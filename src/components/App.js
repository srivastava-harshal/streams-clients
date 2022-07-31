import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import { applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from '../Header';
import history from '../history';

const App = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
  );
  return (
    <Provider store={store}>
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={StreamList} />
              <Route path="/streams/new" exact component={StreamCreate} />
              <Route path="/streams/edit/:id" exact component={StreamEdit} />
              <Route
                path="/streams/delete/:id"
                exact
                component={StreamDelete}
              />
              <Route path="/streams/:id" exact component={StreamShow} />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
