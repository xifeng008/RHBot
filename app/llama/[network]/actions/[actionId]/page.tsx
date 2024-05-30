import {  getFrameMetadata , FrameMetadata  } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from '../../../../config';
import { useParams } from 'next/navigation'


// const frameMetadata = getFrameMetadata({
//   buttons: [
//     {
//       label: 'Read Summary',
//       action: 'post'
//     },
//     {
//       label: 'Go To Approved',
//       action: 'post_redirect',
//     }
//   ],
//   image: `${NEXT_PUBLIC_URL}/boost-pass-display.png`,
//   // post_url: `${NEXT_PUBLIC_URL}/llama/network/actions/acionId`,
//   post_url: `${NEXT_PUBLIC_URL}/api/frame`
// });

export const metadata: Metadata = {
  title: 'Boot Guild!',
  description: 'LFG',
  openGraph: {
    title: 'RH',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    // ...frameMetadata,
  },
};



export default function ActionPage() {
  return (
    <>
    <FrameMetadata 
      buttons={
        [
          {
            label: 'Read Summary123',
            action: 'post'
          },
          {
            label: 'Go To Approved',
            action: 'post_redirect',
          }
        ]
      }
      image={`${NEXT_PUBLIC_URL}/boost-pass-display.png`}
      post_url={`${NEXT_PUBLIC_URL}/api/frame`}
    ></FrameMetadata>
      <h1>Boost Guild action network!</h1>
    </>
  );
}
