import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';
import axios from 'axios';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  let accountAddress: string | undefined = '';

  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

  if (isValid) {
    accountAddress = message.interactor.verified_accounts[0];
    console.log('checking pass for account:', accountAddress);
    const boostPassUrl = `https://api.boost.xyz/v1/boost-pass/${accountAddress}`;
    try {
      const result = await axios.get(boostPassUrl);
      console.log('result:', result.data);
      if (result.data.error) {
        return new NextResponse(
          getFrameHtmlResponse({
            buttons: [
              {
                label: `Mint a new pass`,
              },
            ],
            image: `${NEXT_PUBLIC_URL}/park-2.png`,
            post_url: `${NEXT_PUBLIC_URL}/api/frame`,
          }),
        );
      } else {
        const imageUrl = result.data.image;
        return new NextResponse(
          getFrameHtmlResponse({
            image: imageUrl,
            post_url: `${NEXT_PUBLIC_URL}/api/frame`,
          }),
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  } else { 
    return new NextResponse(
      getFrameHtmlResponse({
        buttons: [
          {
            label: `Mint a new pass`,
          },
        ],
        image: `${NEXT_PUBLIC_URL}/boost-pass-disaplay.png`,
        post_url: `${NEXT_PUBLIC_URL}/api/frame`,
      }),
    );
  }


 
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
