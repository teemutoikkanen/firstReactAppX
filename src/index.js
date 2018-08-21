import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const { raceRange, rates } = require('pec')


class P1RangeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    // alert('this.state.value: ' + this.state.value);
  }


  render () {
    return (
      <form>
        <label>
          P1 Range Text Input:
          <input type='text' value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
    )
  }
  
}



const combo = [ 'Jh', 'Js' ]
const range = [
  [ 'Kh', 'Ks' ], [ 'Kh', 'Kd' ], [ 'Kh', 'Kc' ],
  [ 'Ks', 'Kd' ], [ 'Ks', 'Kc' ], [ 'Kd', 'Kc' ],
  [ 'Qh', 'Qs' ], [ 'Qh', 'Qd' ], [ 'Qh', 'Qc' ],
  [ 'Qs', 'Qd' ], [ 'Qs', 'Qc' ], [ 'Qd', 'Qc' ]
]

const { win, loose, tie } = raceRange(combo, range, 1E4)
const { winRate, looseRate, tieRate } = rates({ win, loose, tie })

console.log('JJ performs as follows vs. [ KK, QQ ]')
console.log('win: %d%% (%d times)', winRate, win)
console.log('loose: %d%% (%d times)', looseRate, loose)
console.log('tie: %d%% (%d times)', tieRate, tie)






ReactDOM.render(
  <P1RangeForm />,
  document.getElementById('root')
);