/* eslint-disable max-len */
import React, { useState } from 'react';
import Btn from './Button';
import calculate from '../dialogue/calculator';

function calculator() {
  const [result, setResult] = useState({ total: 0, next: null, operation: null });
  const Val = [
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
  const handleClick = (e) => {
    const obj = calculate(result, e);
    if (!obj.total && !obj.next && !obj.operation) {
      obj.total = 0;
      obj.next = null;
      obj.operation = null;
    }
    setResult(obj);
  };
  return (
    <div className="calc-container">
      <div className="calc-output">
        { result.next || result.operation || result.total }
      </div>
      <div className="btns-container">
        {
          Val.map((b) => <Btn key={b.btn} btn={b.btn} event={(e) => handleClick(e)} style={b.style} />)
        }
      </div>
    </div>
  );
}
export default calculator;
