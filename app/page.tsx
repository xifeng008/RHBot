import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Read SUMMARY',
    },
    {
      label: 'Go to Approved',
    }
  ],
  image: `${NEXT_PUBLIC_URL}/boost-pass-display.png`,
  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'Boot Guild!',
  description: 'LFG',
  openGraph: {
    title: 'RH',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Boost Guild!</h1>
    </>
  );
}
