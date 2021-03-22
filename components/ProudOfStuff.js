import React from 'react';

import style from '../styles/ProudOfStuff.module.css';

export default class ProudOfStuff extends React.Component {
  render() {
    return <div>
      <div className={style.proudof}>
        <h3>Things that make me proud</h3>
        <ul>
          <li>I love learning new stuff</li>
          <li>Problem solving is my essence</li>
          <li>I have confidence in my knowledge</li>
          <li>I'm great at understanding and overseeing complex systems</li>
          <li>I'm always helpful</li>
          <li>I do my job responsibly</li>
        </ul>
      </div>
    </div>
  }
}
