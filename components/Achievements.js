import React from 'react';
import { withTranslation } from 'next-i18next';

export default class Achievements extends React.Component {
  render() {
    const { t } = this.props;

    return <div>
      <h3>My achievements</h3>
      <h4>Instructure</h4>
      <ul>
        <li>Shortening the time to get new services to production from 2-3 weeks to 2 hours</li>
        <li>Migrating a wide range of services to Kubernetes</li>
        <li>Organizing and conducting the first "Game Day" and regular workshops for engineers</li>
      </ul>
      <h4>Prezi</h4>
      <ul>
        <li>Saving a significant portion of the infrastructural costs by carefully planned reservations</li>
        <li>Helping decreasing the number of alerts by 70-80% using better monitoring principles</li>
      </ul>
    </div>;
  }
}
