import Head from 'next/head';
import React from 'react';

import layout from '../../styles/layout.module.css'
import personal from '../../styles/Personal.module.css'

export default class Personal extends React.Component {
  render() {
    return <div className={`${layout.personal} ${personal.personal}`}>
      {this.props.children}
    </div>;
  }
}
