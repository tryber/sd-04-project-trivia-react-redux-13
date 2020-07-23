import React, { Component } from 'react';

// const Timer = () => {
//   let n = 0;

//   const setInt = () => {
//     if(n >= 30) {
//       clearInterval(setInt);
//     }
//     return n++;
//   };

//   return (
//     <div>
//       <p>{setInterval(setInt, 1000)}</p>
//     </div>
//   );
// };

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 30,
    }
  }

  componentDidMount() {
    const setInt = setInterval(() => {
      if (this.state.number === 0) {
        clearInterval(setInt)
        return true;
      }
      return this.setState((prevState) => ({
        number: prevState.number - 1,
      }))
    }, 1000);
  }

  render() {
    const { number } = this.state; // Ao renderizar novamente, lê o state decrescido
    return (
      <div>
        <p>{number}</p>
      </div>
    );
  }
}

export default Timer;
