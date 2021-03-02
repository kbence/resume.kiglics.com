import React from 'react';

import style from '../styles/PersonalInfo.module.css'

export default class PersonalInfo extends React.Component {
  render() {
    return <div>
    <div className={style.profileimage}></div>
    <div className={style.name}>Bence Kiglics</div>

    <h3>Elérhetőségeim</h3>
    <div><i className="eva eva-phone" />+36 30 658 9308</div>
    <div><i className="eva eva-email" />bence.kiglics@gmail.com</div>
    <div><i className="eva eva-github" />kbence</div>

    <h3>Karrierem</h3>

    <div className={style.careerstep}>
      <h4>Instructure</h4>
      <span>Site Reliability Engineer</span>
      <span>2019 -</span>
    </div>

    <div className={style.careerstep}>
      <h4>Prezi</h4>
      <span>Infra Engineer, SRE</span>
      <span>2013 - 2019</span>
    </div>

    <div className={style.careerstep}>
      <h4>Emarsys</h4>
      <span>Web Developer, DevOps Engineer</span>
      <span>2012 - 2013</span>
    </div>

    <div className={style.careerstep}>
      <h4>DuoDecad Kft.</h4>
      <span>Developer, DevOps Engineer</span>
      <span>2008 - 2012</span>
    </div>

    <h3>Hobbijaim</h3>
    <ul>
      <li>Játékfejlesztés</li>
      <li>Sütés/főzés</li>
    </ul>

    <span class="footer print-only">Source: resume.kiglics.com</span>
  </div>
  }
}
