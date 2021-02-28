import Head from 'next/head';
import React from 'react';

import layout from '../../styles/layout.module.css'

export default class Career extends React.Component {
  render() {
    return <div className={layout.career}>
      {this.props.children}
    </div>;
  }
}
