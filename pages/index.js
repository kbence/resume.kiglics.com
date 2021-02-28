import React from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import Centered from './layout/Centered';
import Personal from './layout/Personal';
import Career from './layout/Career';

export default class Resume extends React.Component {
  render() {
    return <Centered>
      <Head>
        <title>Bence Kiglics - Resume</title>
      </Head>
      <Personal>
        <img width={210} height={210} src="/images/person.png" />
        <div>Bence Kiglics</div>
        <div><i className="eva eva-phone" />+36 30 658 9308</div>
        <div><i className="eva eva-email" />bence.kiglics@gmail.com</div>
      </Personal>
      <Career>
        <h3>Tulajdonságaim, amikre büszke vagyok</h3>
        <ul>
          <li>Tanulás szeretete</li>
          <li>Problémamegoldás szeretete</li>
          <li>Magabiztos tudással rendelkezem</li>
          <li>Bonyolult összefüggésben való gondolkodás</li>
        </ul>
      </Career>
    </Centered>;
  }
}
