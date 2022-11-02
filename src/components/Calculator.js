import React, { Component } from 'react';

class CalcRender extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-container">
        <span className="calc-output">0</span>

        <span className="calc-grid">
          <button type="button" className="btn-gc">AC</button>
          <button type="button" className="btn-gc">+/-</button>
          <button type="button" className="btn-gc">%</button>
          <button type="button" className="btn-orange">/</button>
        </span>

        <span className="calc-grid">
          <button type="button" className="btn-gc">7</button>
          <button type="button" className="btn-gc">8</button>
          <button type="button" className="btn-gc">9</button>
          <button type="button" className="btn-orange">x</button>
        </span>

        <span className="calc-grid">
          <button type="button" className="btn-gc">4</button>
          <button type="button" className="btn-gc">5</button>
          <button type="button" className="btn-gc">6</button>
          <button type="button" className="btn-orange">-</button>
        </span>

        <span className="calc-grid">
          <button type="button" className="btn-gc">1</button>
          <button type="button" className="btn-gc">2</button>
          <button type="button" className="btn-gc">3</button>
          <button type="button" className="btn-orange">+</button>
        </span>

        <span className="calc-gl">
          <button type="button" className="btn-gc">0</button>
          <button type="button" className="btn-gc">.</button>
          <button type="button" className="btn-orange">=</button>
        </span>

      </div>
    );
  }
}

export default CalcRender;
