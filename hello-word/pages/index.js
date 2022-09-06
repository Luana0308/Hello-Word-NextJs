import styles from '../styles/Home.module.css'

import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Página principal</title>
        <meta
          name="description"
          content="Encontre a melhor roupa para você"
        ></meta>
      </Head>
      <h1 className={styles.title}>Hello World Next!</h1>
      <Image src="/images/city.jpeg" width="400px" height="500px" alt="A noite de uma cidade" />
    </>
  )
}