import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Natan Cieplinski</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="node_modules/modern-normalize/modern-normalize.css"></link>
      </Head>
    </div>
  )
}
