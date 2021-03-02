import React from 'react';
import Head from 'next/head';

import Abilities from '../components/Abilities';
import AboutMe from '../components/AboutMe';
import Career from '../components/layout/Career';
import Centered from '../components/layout/Centered';
import CoreValues from '../components/CoreValues';
import Personal from '../components/layout/Personal';
import PersonalInfo from '../components/PersonalInfo';
import ProudOfStuff from '../components/ProudOfStuff';
import Successes from '../components/Successes';

export default class Resume extends React.Component {
  render() {
    return <Centered>
      <Head>
        <title>Bence Kiglics - Resume</title>
      </Head>
      <Personal>
        <PersonalInfo />
      </Personal>
      <Career>
        <AboutMe />
        <ProudOfStuff />
        <Successes />
        <Abilities />
        <CoreValues />
      </Career>
    </Centered>;
  }
}
