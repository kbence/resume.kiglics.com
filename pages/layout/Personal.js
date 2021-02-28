import Head from 'next/head';
import React from 'react';

import layout from '../../styles/layout.module.css'

export default class Personal extends React.Component {
  render() {
    return <div className={layout.personal}>
      {this.props.children}
    </div>;
  }
}
