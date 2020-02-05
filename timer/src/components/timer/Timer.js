import React from 'react';

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }

  componentDidMount() {

    this.timer = (setInterval(() => this.setState({

      time: ((this.state.time + 1)),

    }), 1000));

  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {





    return (
      <div data-testid="timer">
        <h1>Timer: {this.state.time}</h1>
      </div>
    );
  }
}

export default Timer;

