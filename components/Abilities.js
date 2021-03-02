import React from 'react';

import style from '../styles/Abilities.module.css';

const abilities = `
  Linux/Unix, Kubernetes, DevOps,
  AWS, Terraform, Ansible, Chef,
  Go, Python, Bash, C/C++, Java
`.trim().split(',').map(a => a.trim());

export default class Abilities extends React.Component {
  render() {
    return <div>
      <h3>Képességeim</h3>
      <div className={style.abilities}>
        {abilities.map(a => <span className={style.ability}>{a}</span>)}
      </div>
    </div>
  }
}
