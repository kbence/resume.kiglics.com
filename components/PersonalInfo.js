import React from 'react';

import style from '../styles/PersonalInfo.module.css';

const hobbies = [
  { style: "coding",  name: "Coding" },
  { style: "vfx",     name: "VFX" },
  { style: "cooking", name: "Cooking" },
];

export default class PersonalInfo extends React.Component {
  render() {
    return <div>
    <div className={style.profileimage}></div>
    <div className={style.name}>Bence Kiglics</div>

    <h3>Contact</h3>
    <div><i className="eva eva-phone" />+36 30 658 9308</div>
    <div><i className="eva eva-email" />bence.kiglics@gmail.com</div>
    <div><i className="eva eva-github" />kbence</div>

    <h3>My Career</h3>

    <div className={style.careerstep}>
      <h4>Instructure</h4>
      <span>Site Reliability Engineer</span>
      <span>2019 -</span>
    </div>

    <div className={style.careerstep}>
      <h4>Prezi</h4>
      <span>Infrastructure Engineer, SRE</span>
      <span>2013 - 2019</span>
    </div>

    <div className={style.careerstep}>
      <h4>Emarsys</h4>
      <span>Web Developer, DevOps Engineer</span>
      <span>2012 - 2013</span>
    </div>

    <div className={style.careerstep}>
      <h4>DuoDecad Kft.</h4>
      <span>Web Developer, Flash Developer</span>
      <span>2008 - 2012</span>
    </div>

    <h3>My hobbies</h3>
    {hobbies.map(hobby =>
      <div className={style.hobby}>
        <span className={`${style.hobbyIcon} ${style[hobby.style]}`} />
        <span className={style.hobbyName}>{hobby.name}</span>
      </div>
    )}

    <span className="footer print-only">Source: resume.kiglics.com</span>
  </div>
  }
}
