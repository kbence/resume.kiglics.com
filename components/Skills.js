import React from 'react';

import style from '../styles/Skills.module.css';

const skills = `
  Linux/Unix, Kubernetes, DevOps,
  AWS, Terraform, Ansible, Chef,
  Go, Python, Bash, C/C++, Java
`.trim().split(',').map(a => a.trim());

export default class Skills extends React.Component {
  render() {
    return <div>
      <h3>My Skills</h3>
      <div className={style.skills}>
        {skills.map(a => <span key={a} className={style.skill}>{a}</span>)}
      </div>
    </div>
  }
}
