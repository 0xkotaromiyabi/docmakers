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
        Makers memecah satu aset fisik (resort/villa) menjadi unit kepemilikan kecil berbasis Dynamic NFT (dNFT).
      </>
    ),
  },
  {
    title: 'Profit Sharing & Dividend Distribution',
    Svg: require('@site/static/img/profit.svg').default,
    description: (
      <>
        Makers mengintegrasikan sistem distribusi keuntungan dari okupansi villa.
      </>
    ),
  },
  {
    title: 'Tokenization Platform',
    Svg: require('@site/static/img/profit.svg').default,
    description: (
      <>
        Makers bukan hanya platform kepemilikan internal, tapi juga layanan tokenisasi aset bagi pengembang properti atau pemilik aset lain yang ingin mendigitalisasi dan membagi kepemilikan mereka.
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
