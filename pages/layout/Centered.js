import Head from 'next/head';
import React from 'react';

import layout from '../../styles/layout.module.css'

export default class Centered extends React.Component {
  render() {
    return <div className={layout.centered}>
      <div>
      {this.props.children}
      </div>
    </div>;
  }
}
