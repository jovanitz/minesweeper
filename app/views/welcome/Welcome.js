import React, { Component } from 'react';
import headerHOC from 'hoc/headerHOC';
import { push } from 'react-router-redux'

class Welcome extends Component {
  render() {
    const { dispatch } = this.props;

    return (
      <div className='welcome'>
        <h3>Bienvenido</h3>
        <p> Este es el juego clasico de buscaminas.</p>
        <p> Esta elaborado con las siguientes herramientas: </p>
        <ul>
          <li>react</li>
          <li>redux</li>
          <li>webpack</li>
          <li>sass</li>
          <li>react-router-redux</li>
        </ul>
        <button className='button-app' onClick={ () => dispatch(push('/minesweeper')) }>Jugar</button>
      </div>
    );
  }
}

export default headerHOC(Welcome);
