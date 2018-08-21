import React from 'react';
import ReactDOM from 'react-dom';

const { raceRange, rates } = require('pec')
const prange = require('prange')
const { expandRange, arryifyCombo } = require('./asd')



class EquityCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      p1TextInput: '',
      p2TextInput: '',
      // more vars here ..
    }
    this.handleP1Input = this.handleP1Input.bind(this);
    this.handleCalcButton = this.handleCalcButton.bind(this);
  }

  handleP1Input(event) {
    this.setState({p1TextInput: event.target.value});
    
  }

  handleCalcButton() {
    console.log(this.state.p1TextInput);
    console.log(expandRange(this.state.p1TextInput))
  }

  // EquityCalculator render() function..
  render () {
    // render stuff here..
    return (
      <div className="equityCalculator">
        <div className="p1TextInput">
          <form>
            <label>
              P1 Range Text Input:
              <input type='text' value={this.state.p1TextInput} onChange={this.handleP1Input} />
            </label>
          </form>
        </div>
        <div className ="calcButton">
          <button onClick={() => this.handleCalcButton()}>Calculate</button>
        </div>
      </div>
    );
  }
}










// PEC EXAMPLE
// const combo = [ 'Jh', 'Js' ]
// const range = [
//   [ 'Kh', 'Ks' ], [ 'Kh', 'Kd' ], [ 'Kh', 'Kc' ],
//   [ 'Ks', 'Kd' ], [ 'Ks', 'Kc' ], [ 'Kd', 'Kc' ],
//   [ 'Qh', 'Qs' ], [ 'Qh', 'Qd' ], [ 'Qh', 'Qc' ],
//   [ 'Qs', 'Qd' ], [ 'Qs', 'Qc' ], [ 'Qd', 'Qc' ]
// ]

// const { win, loose, tie } = raceRange(combo, range, 1E4)
// const { winRate, looseRate, tieRate } = rates({ win, loose, tie })

// console.log('JJ performs as follows vs. [ KK, QQ ]')
// console.log('win: %d%% (%d times)', winRate, win)
// console.log('loose: %d%% (%d times)', looseRate, loose)
// console.log('tie: %d%% (%d times)', tieRate, tie)

// prange example

// // const prange = require('./')

// const r1 = prange('AKs-ATs, QQ+')
// const r2 = prange('JTs-54s')

// console.log(r1)
// // [ 'AA', 'AKs', 'AQs', 'AJs', 'ATs', 'KK', 'QQ' ]

// console.log(r2)
// // [ 'JTs', 'T9s', '98s', '87s', '76s', '65s', '54s' ]

// console.log(prange.reverse(r1))
// // QQ+, ATs+

// console.log(prange.reverse(r2))
// // JTs-54s



ReactDOM.render(
  <EquityCalculator />,
  document.getElementById('root')
);