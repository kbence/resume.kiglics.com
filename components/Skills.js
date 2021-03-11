import React from 'react';

import style from '../styles/Skills.module.css';

const skills = `
  Unix/Linux, Kubernetes, DevOps,
  AWS, Terraform, Ansible, Chef,
  Go, Python, Bash, C/C++, Java
`.trim().split(',').map(skill => skill.trim());

export default class Skills extends React.Component {
  render() {
    return <div>
      <h3>My Skills</h3>
      <div className={style.skills}>
        {skills.map(skill => <span key={skill} className={style.skill}>{skill}</span>)}
      </div>
    </div>
  }
}
