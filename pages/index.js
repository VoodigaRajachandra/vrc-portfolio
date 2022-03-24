import Head from 'next/head'
import Image from 'next/image'
import About from './about'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Voodiga Rajachandra-Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <About/>

    </div>
  )
}
