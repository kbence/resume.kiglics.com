import React from 'react';
import Head from 'next/head';

import Centered from '../components/layout/Centered';
import Personal from '../components/layout/Personal';
import Career from '../components/layout/Career';
import Abilities from '../components/Abilities';
import CoreValues from '../components/CoreValues';
import Successes from '../components/Successes';

export default class Resume extends React.Component {
  render() {
    return <Centered>
      <Head>
        <title>Bence Kiglics - Resume</title>
      </Head>
      <Personal>
        <img style={{borderRadius: "50%"}} width={175} height={175} src="/images/person.png" />
        <div>Bence Kiglics</div>

        <h3>Elerhetosegeim</h3>
        <div><i className="eva eva-phone" />+36 30 658 9308</div>
        <div><i className="eva eva-email" />bence.kiglics@gmail.com</div>
        <div><i className="eva eva-github" />kbence</div>

        <h3>Hobbijaim</h3>
        <ul>
          <li>Játékfejlesztés</li>
        </ul>
      </Personal>
      <Career>
        <h3>Magamról</h3>
        <p></p>
        <blockquote>
          "Azt, aki olyan munkát végez el, amire egy számítógép is képes
          lenne, a gépek az éjszaka közepén összegyűlnek, és közösen
          kiröhögik"
        </blockquote>
        <p>
          Széleskörű tudással és érdeklődéssel rendelkező fejlesztő vagyok.
          A jelenlegi pozícióm <b>Site Reliability Engineer</b>, de a DevOps
          környékén mozgok immár 8 éve. Eredetileg webfejlesztésből érkezem,
          emellett kiberbiztonsági témákkal is foglalkozom, így a fejlesztés
          bármely szakaszában tudok segíteni, ajánlásokat tenni és
          az esetleges hiányosságokat felfedezni. A legtöbb tapasztalatom
          AWS terén van, de hobbiprojektekben már használtam Google Cloud
          Platform szolgáltatásokat is.
        </p>
        <p>
          A szakmámból adódóan mindenem a tanulás, és abban hiszek, hogy
        </p>

        <h3>Amire büszke vagyok</h3>
        <ul>
          <li>Szeretek új dolgokat tanulni</li>
          <li>A problemamegoldás az életem</li>
          <li>Magabiztos tudással rendelkezem</li>
          <li>Könnyen átlátok bonyolult rendszereket</li>
          <li>Mindig segitőkész vagyok</li>
          <li>Felelősségteljesen végzem a munkám</li>
        </ul>

        <Successes />
        <Abilities />
        <CoreValues />
      </Career>
      <span class="print-only">Source: resume.kiglics.com</span>
    </Centered>;
  }
}
