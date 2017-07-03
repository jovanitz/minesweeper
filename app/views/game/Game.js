import React, { Component } from 'react';
import headerHOC from 'hoc/headerHOC';
import Minesweeper from 'components/minesweeper/Minesweeper';

class Game extends Component {
  render() {
    return (
      <div className='game'>
        <Minesweeper />
      </div>
    );
  }
}

export default headerHOC(Game);
