import { FrameMetadata } from '@coinbase/onchainkit';

import { NEXT_PUBLIC_URL } from './config';

export default function Page() {
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
        post_url={`${NEXT_PUBLIC_URL}/api/frame`}
      ></FrameMetadata>
      <h1>Boost Guild!</h1>
    </>
  );
}


