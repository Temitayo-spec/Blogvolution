import Head from 'next/head';
import styles from '../styles/default.module.css';

const Default = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>Blog App</title>
    </Head>
    { children }
  </div>
);

export default Default;
