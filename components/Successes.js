import React from 'react';
import { withTranslation } from 'next-i18next';

class Successes extends React.Component {
  render() {
    const { t } = this.props;

    return <div>
      <h3>{t('career.personalAccomplishments.title')}</h3>
      <h4>Instructure</h4>
      <ul>
        <li>Új szolgáltatások éles környezetig vitelét 2-3 hétről 2 órára csökkentettem</li>
        <li>Több szolgáltatást migráltam Kubernetesre</li>
        <li>Megszerveztem az első "Game dayt" és a Kubernetes használatára tartottam workshopokat</li>
      </ul>
      <h4>Prezi</h4>
      <ul>
        <li>Az infrastrúktúra-költség jelentős százalékát sikerült megspórolnom tervezett foglalásokkal</li>
        <li>A felesleges riasztásokat sikerült 70-80%-kal csökkenteni a fejlesztők felé</li>
      </ul>
    </div>;
  }
}

export default withTranslation('main')(Successes);
