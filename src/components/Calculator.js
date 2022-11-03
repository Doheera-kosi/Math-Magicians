import React, { Component } from 'react';
import Btn from './Button';
import calculate from '../dialogue/calculator';

class CalcRender extends Component {
  constructor(props) {
    super(props);
    this.Val = [
      { btn: 'AC', style: 'btn gc' },
      { btn: '+/-', style: 'btn gc' },
      { btn: '%', style: 'btn gc' },
      { btn: '÷', style: 'btn orange' },
      { btn: '7', style: 'btn gc' },
      { btn: '8', style: 'btn gc' },
      { btn: '9', style: 'btn gc' },
      { btn: 'x', style: 'btn orange' },
      { btn: '4', style: 'btn gc' },
      { btn: '5', style: 'btn gc' },
      { btn: '6', style: 'btn gc' },
      { btn: '-', style: 'btn orange' },
      { btn: '1', style: 'btn gc' },
      { btn: '2', style: 'btn gc' },
      { btn: '3', style: 'btn gc' },
      { btn: '+', style: 'btn orange' },
      { btn: '0', style: 'btn gc btn-zero' },
      { btn: '.', style: 'btn gc' },
      { btn: '=', style: 'btn orange' },
    ];
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    const obj = calculate(this.state, e);
    this.setState(obj);
  }

  render() {
    let { total, next, operation } = this.state;
    if (!total && !next && !operation) {
      total = 0;
      next = null;
      operation = null;
    }
    return (
      <div className="calc-container">
        <div className="calc-output">
          { next || operation || total }
        </div>
        <div className="btns-container">
          {
            this.Val.map((b) => (
              <Btn
                key={b.btn}
                btn={b.btn}
                event={(e) => this.handleClick(e)}
                style={b.style}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default CalcRender;
