import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory';
import { ConnectedRouter } from 'react-router-redux';
import store from 'state/store';
import 'sass/minesweeper.scss';

const history = createHistory();

export default class App extends Component {
  render() {

    const Home = () => <div>'Home'</div>;
    const Address = () => <div>'Address'</div>;

    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/minesweeper' component={ Address } />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}
