import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Fractional Ownership',
    Svg: require('@site/static/img/Green Modern Badge Gardening Logo Design.svg').default,
    description: (
      <>
        Makers divides a single physical asset (resort/villa) into smaller ownership units represented through Dynamic NFTs (dNFTs)..
      </>
    ),
  },
  {
    title: 'Profit Sharing & Dividend Distribution',
    Svg: require('@site/static/img/profit.svg').default,
    description: (
      <>
        Makers integrates a profit distribution system derived from villa occupancy.
      </>
    ),
  },
  {
    title: 'Tokenization Platform',
    Svg: require('@site/static/img/profit.svg').default,
    description: (
      <>
        Makers is not only an internal ownership platform but also an asset tokenization service for property developers or other asset owners seeking to digitize and fractionalize their holdings.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
