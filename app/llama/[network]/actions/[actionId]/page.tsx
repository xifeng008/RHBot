import { FrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from '../../../../config';
import { useParams } from 'next/navigation'

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



export default function Page() {
  const params = useParams()
  // const id = params.actionId
  // const network = params.network
  // const { actionId, network } = params
  return (
    <>
      <FrameMetadata
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
        post_url={`${NEXT_PUBLIC_URL}/api/frame?actionId=1&network=optimism`}
      ></FrameMetadata>
      <h1>Boost Guild action network!</h1>
    </>
  );
}
