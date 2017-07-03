import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

function headerHOC(WrappedComponent) {
  class HeaderHOC extends Component {

    constructor() {
      super();
      this.state = {
        backgroundColorClass: '',
      };
    }

    componentDidMount() {
      const { changingBackground = false } = this.props;
      if (!changingBackground) return;

      const backgroundColors = [
        'backgroundColorGreen',
        'backgroundColorRed',
        'backgroundColorBlue',
      ];

      let counter = 0;

      this.intervalColor = setInterval(() => {
        if (counter == 2) {
          counter = 0;
        } else {
          counter += 1;
        }
        this.setState({ backgroundColorClass: backgroundColors[counter] });
      }, 2000);
    }

    componentWillUnmount() {
      const { changingBackground = false } = this.props;
      if (!changingBackground) return;
      clearInterval(this.intervalColor);
    }

    render() {
      const { backgroundColorClass = '' } = this.state;
      const { dispatch } = this.props;

      return (
        <div className={ backgroundColorClass }>
          <header className='header-app'>
            <h1 className='header-app__h1' onClick={ () => dispatch(push('/')) }>MINESWEEPER</h1>
            <img className='header-app__img' src={ 'app/img/minesweeper.png' }/>
          </header>
          <WrappedComponent { ...this.props }/>
        </div>
      );
    }
  }

  return connect()(HeaderHOC);
}

export default headerHOC;
