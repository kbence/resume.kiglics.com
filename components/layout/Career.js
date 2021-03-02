import Head from 'next/head';
import React from 'react';

import layout from '../../styles/layout.module.css'
import career from '../../styles/Career.module.css'

export default class Career extends React.Component {
  render() {
    return <div className={`${layout.career} ${career.career}`}>
      {this.props.children}
    </div>;
  }
}
