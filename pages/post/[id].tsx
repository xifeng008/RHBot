import { FrameMetadata } from '@coinbase/onchainkit';
import { NEXT_PUBLIC_URL } from '../../app/config';
import { useRouter } from 'next/router'
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Boot Guild!',
    description: 'LFG',
    openGraph: {
        title: 'RH',
        description: 'LFG',
        images: [`${NEXT_PUBLIC_URL}/park-1.png`],
    },
    other: {

    },
};


export default function Page() {
    // const network = "optimism"
    // const actionId = 72

    const router = useRouter();
    console.log(router.pathname)
    const pathname = router.pathname

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
                post_url={`${NEXT_PUBLIC_URL}/api/frame?actionId=${pathname}`}
            ></FrameMetadata>
            <h1>Boost Guild action network!</h1>
        </>
    );
}
