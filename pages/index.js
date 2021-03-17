import React from 'react';
import Head from 'next/head';

import Skills from '../components/Skills';
import AboutMe from '../components/AboutMe';
import Career from '../components/layout/Career';
import Centered from '../components/layout/Centered';
import CoreValues from '../components/CoreValues';
import Personal from '../components/layout/Personal';
import PersonalInfo from '../components/PersonalInfo';
import ProudOfStuff from '../components/ProudOfStuff';
import Achievements from '../components/Achievements';
import GitHubCorner from '../components/GitHubCorner';

export default class Resume extends React.Component {
  render() {
    return <Centered>
      <GitHubCorner href="https://github.com/kbence/resume.kiglics.com" />
      <Head>
        <title>Bence Kiglics - Resume</title>
      </Head>
      <Personal>
        <PersonalInfo />
      </Personal>
      <Career>
        <AboutMe />
        <ProudOfStuff />
        <Achievements />
        <Skills />
        <CoreValues />
      </Career>
    </Centered>;
  }
}
