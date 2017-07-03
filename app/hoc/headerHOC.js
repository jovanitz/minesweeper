import React, { Component } from 'react';

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

      return (
        <div className={ backgroundColorClass }>
          <header className='header-app'>
            <h1 className='header-app__h1'>MINESWEEPER</h1>
            <img className='header-app__img' src={ 'app/img/minesweeper.png' }/>
          </header>
          <WrappedComponent { ...this.props }/>
        </div>
      );
    }
  }

  return HeaderHOC;
}

export default headerHOC;
