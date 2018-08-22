import React from 'react';
import ReactDOM from 'react-dom';

const { raceRange, rates } = require('pec')
const { expandRange, arryifyCombo } = require('./asd')



class EquityCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      p1TextInput: '',
      p2TextInput: '',
      winRate: 0,
      looseRate: 0,
      tieRate: 0,
      p1Equity: 0,
      p2Equity: 0,
      nSims: 0,

    }
    this.handleP1Input = this.handleP1Input.bind(this);
    this.handleP2Input = this.handleP2Input.bind(this);
    this.handleCalcButton = this.handleCalcButton.bind(this);
  }

  handleP1Input(event) {
    this.setState({p1TextInput: event.target.value});
  }
  handleP2Input(event) {
    this.setState({p2TextInput: event.target.value});
  }

  handleCalcButton() {
    const combo = this.state.p1TextInput;
    const range = this.state.p2TextInput;

    console.log("p1 combo: " + combo);
    console.log("p2 range: " + range);
    try {
      const expandedRange = expandRange(range)
      const expandedCombo = arryifyCombo(combo)
      console.log(expandedRange);
      console.log(expandedCombo);

      const { win, loose, tie } = raceRange(expandedCombo, expandedRange, 1E4)
      const { winRate, looseRate, tieRate } = rates({ win, loose, tie })

      const p1Equity = winRate/100+0.5*tieRate/100

      this.setState( {
          p1Equity: p1Equity,
          winRate: winRate,
          looseRate: looseRate,
          tieRate: tieRate,
          p1Equity: 0,
          p2Equity: 0,
      });

      console.log("p1eq: ", p1Equity)
    } catch (error) {
      console.log(error);
    }
  }

  // EquityCalculator render() function..
  render () {
    // render stuff here..

    const results = this.state.winRate;
    console.log("results: " + results)

    return (
      <div className="equityCalculator">
        <div className="p1TextInput">
          <form>
            <label>
              P1 Combo:
              <input type='text' value={this.state.p1TextInput} onChange={this.handleP1Input} />
            </label>
          </form>
        </div>
        <div className="p2TextInput">
          <form>
            <label>
              P2 Range Text Input:
              <input type='text' value={this.state.p2TextInput} onChange={this.handleP2Input} />
            </label>
          </form>
        </div>
        <div className ="calcButton">
          <button onClick={() => this.handleCalcButton()}>Calculate</button>
        </div>
        <div className ="Results">
        {results}
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