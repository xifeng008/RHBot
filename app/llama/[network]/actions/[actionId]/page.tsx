import { FrameMetadata } from '@coinbase/onchainkit';
import { NEXT_PUBLIC_URL } from '../../../../config';

export default function Page() {
  const network = "optimism"
  const actionId = 72
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
        post_url={`${NEXT_PUBLIC_URL}/api/frame/op/72`}
      ></FrameMetadata>
      <h1>Boost Guild action network!</h1>
    </>
  );
}
