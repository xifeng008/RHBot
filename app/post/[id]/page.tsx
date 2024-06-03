"use client"
import { FrameMetadata } from '@coinbase/onchainkit';
import { NEXT_PUBLIC_URL } from '@/app/config';

export default function PostPage({ params }: { params: { id: string }}) {
    const imgUrl1 = `${NEXT_PUBLIC_URL}/boost-pass-display.png`
    return (
        <>
      <FrameMetadata
        buttons={
          [
            {
              label: `Read Summary${params.id}`,
              action: 'post'
            },
            {
              label: 'Go To Approved',
              action: 'post_redirect',
            }
          ]
        }
        image={imgUrl1}
        post_url={`${NEXT_PUBLIC_URL}/api/frame`}
      ></FrameMetadata>
    </>
    )
}