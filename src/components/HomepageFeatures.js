import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Apple Watch',
    Svg: require('../../static/img/apple-brands.svg').default,
    description: (
      <>
        Duo to the broad usage of the Apple Watch, it's been choosen
        as the IMU to track certain events. This Bachelor Thesis provides
        a framework to inspect sensor data in near real-time.
      </>
    ),
  },
  {
    title: 'Logging',
    Svg: require('../../static/img/chart-line-solid.svg').default,
    description: (
      <>
        Using a combination of <strong>InfluxDB, Telegraf and Grafana</strong> you can
        log various sensor data events from the Apple Watch in real-time.
      </>
    ),
  },
  {
    title: 'Sit-Stand Detector',
    Svg: require('../../static/img/chair-solid.svg').default,
    description: (
      <>
        Use the SitStand Watch App to detect wether a paticipant
        stood up or sat down. Every event get's logged in a dashboard
        so that you can monitor your participants.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
