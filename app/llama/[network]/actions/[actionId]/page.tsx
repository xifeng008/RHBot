import { getFrameMetadata, FrameMetadata  } from '@coinbase/onchainkit/src/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from '../../../../config';

// const frameMetadata = getFrameMetadata({
//   buttons: [
//     {
//       label: 'Read Summary',
//     },
//     {
//       label: 'Go To Approved',
//       action: 'link',
//       target: ''
//     }
//   ],
//   // image: `${NEXT_PUBLIC_URL}/boost-pass-display.png`,
//   image: "",
//   post_url: `${NEXT_PUBLIC_URL}/llama/network/actions/acionId`,
// });

// export const metadata: Metadata = {
//   title: 'Boot Guild!',
//   description: 'LFG',
//   openGraph: {
//     title: 'RH',
//     description: 'LFG',
//     images: [`${NEXT_PUBLIC_URL}/park-1.png`],
//   },
//   other: {
//     ...frameMetadata,
//   },
// };

export default function ActionPage() {
  
  return (
    <>
    <FrameMetadata
      buttons={[
        {
          label: 'Read Summary',
        },
        {
          action: 'link',
          label: 'Go To Approved',
          target: `${NEXT_PUBLIC_URL}/llama/network/actions/acionId`
        },
      ]}
      image={{
       src: `${NEXT_PUBLIC_URL}/boost-pass-display.png`,
       aspectRatio: '1:1'
      }}
      
    />
      <h1>Boost Guild action network!</h1>
    </>
  );
}
