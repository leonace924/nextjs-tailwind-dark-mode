import type { NextPage } from 'next'
import Head from 'next/head'
import Home from '@modules/Home'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      
      <Home />
    </>
  )
}

export default HomePage