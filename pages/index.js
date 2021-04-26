import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure
          eaque officiis facere officia reiciendis nesciunt aliquid quasi, neque
          sit sint, veniam repudiandae est sunt quod earum recusandae.
          Aspernatur, repudiandae.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
          nostrum distinctio commodi recusandae iure vel sint porro praesentium
          exercitationem incidunt repudiandae debitis id, beatae illo animi,
          nemo numquam possimus cupiditate!
        </p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
