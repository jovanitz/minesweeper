import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory';
import { ConnectedRouter } from 'react-router-redux';
import store from 'state/store';
import 'sass/minesweeper.scss';
import Welcome from 'views/welcome/WelcomeContainer';
import Game from 'views/game/Game';

const history = createHistory();

export default class App extends Component {
  render() {
    const welcome = () => <Welcome changingBackground= { true } />;

    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <Switch>
            <Route exact path='/' component={ welcome }/>
            <Route path='/minesweeper' component={ Game } />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}
