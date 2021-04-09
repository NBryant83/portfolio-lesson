import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Cat Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        {/* meta tag seo */}
      </Head>

      <h1>Welcome to the jungle! This is my portfolio </h1>
      
    </div>
  )
}
