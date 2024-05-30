import { FrameMetadata } from '@coinbase/onchainkit';
import { NEXT_PUBLIC_URL } from '../../../../app/config';
import { useRouter } from 'next/router'
import type { Metadata } from 'next';
import Head from 'next/head';

// export const metadata: Metadata = {
//   title: 'Boot Guild!',
//   description: 'LFG',
//   openGraph: {
//     title: 'RH',
//     description: 'LFG',
//     images: [`${NEXT_PUBLIC_URL}/park-1.png`],
//   },
//   other: {
//     // ...frameMetadata,
//   },
// };

export default function Page() {
    const router = useRouter()
    const { network, actionId } = router.query
  return (
    <>
      {/* <FrameMetadata
        buttons={
          [
            {
              label: 'Read Summary',
              action: 'post'
            },
            {
              label: 'Go To Approved',
              action: 'post_redirect',
            }
          ]
        }
        image={`${NEXT_PUBLIC_URL}/boost-pass-display.png`}
        post_url={`${NEXT_PUBLIC_URL}/api/frame?network=${network}&actionId=${actionId}`}
      ></FrameMetadata> */}
      <Head>
        <meta property="fc:frame:image" content={`${NEXT_PUBLIC_URL}/boost-pass-display.png`} />
        <meta property="fc:frame:button:1" content="Read Summary" />
        <meta property="fc:frame:button:1:action" content="post" />
        <meta property="fc:frame:button:2" content="Go To Approved" />
        <meta property="fc:frame:button:2:action" content="post_redirect" />
        <meta property="fc:frame:post_url" content={`${NEXT_PUBLIC_URL}/api/frame?network=${network}&actionId=${actionId}`} />
        <title>Boot Guild!</title>
        <meta property="og:title" content="RH" />
        <meta name="description" content="LFG" />
        <meta property="og:title" content="RH" />
        <meta property="og:description" content="LFG" />
        <meta property="og:image" content={`${NEXT_PUBLIC_URL}/park-1.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RH" />
        <meta name="twitter:description" content="LFG" />
        <meta name="twitter:image" content={`${NEXT_PUBLIC_URL}/park-1.png`} />
      </Head>
      <h1>Boost Guild action network!</h1>
    </>
  );
}

export async function getServerSideProps(context: any) {
    return {
        props: {

        }
    };
}
