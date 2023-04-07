import Head from 'next/head';
import IndexPage from '../components/IndexPage';

export default function() {
  return (
    <div>
      <Head>
          <title>Vinyl NFT</title>
          <link rel="icon" href="/file-image.svg" />
      </Head>
      <IndexPage />
    </div>
  )
}
