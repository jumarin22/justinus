import type {ReactNode} from 'react';
import {Redirect} from 'react-router-dom';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Head from '@docusaurus/Head';

export default function Home(): ReactNode {
  const introUrl = useBaseUrl('/docs/intro');
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0; url=${introUrl}`} />
      </Head>
      <Redirect to={introUrl} />
    </>
  );
}
