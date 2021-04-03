import Head from 'next/head'

const GlobalMeta: React.FC = () => {
  return (
    <Head>
      <title>Natan Cieplinski</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="node_modules/modern-normalize/modern-normalize.css"></link>
    </Head>
  )
}

export { GlobalMeta }