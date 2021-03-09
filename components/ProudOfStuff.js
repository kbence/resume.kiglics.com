import React from 'react';

import style from '../styles/ProudOfStuff.module.css';

export default class ProudOfStuff extends React.Component {
  render() {
    return <div>
      <div className={style.proudof}>
        <h3>Amire büszke vagyok</h3>
        <ul>
          <li>Szeretek új dolgokat tanulni</li>
          <li>A problemamegoldás az életem</li>
          <li>Magabiztos tudással rendelkezem</li>
          <li>Könnyen átlátok bonyolult rendszereket</li>
          <li>Mindig segitőkész vagyok</li>
          <li>Felelősségteljesen végzem a munkám</li>
        </ul>
      </div>
    </div>
  }
}
