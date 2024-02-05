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
    console.log('accountAddress:', accountAddress);
  }

  let number = 0;
  // 第一个按钮
  if (message?.button === 1) {
    console.log('checking quests');
    const checkUrl = `https://api.rabbithole.gg/v1.3/quests/${accountAddress}?status=redeemable`;
    try {
      const result = await axios.get(checkUrl);
      number = result.data.quests.length;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // 第二个按钮
  if (message?.button === 2) {
    console.log('go to quests');
    return NextResponse.redirect(
      'https://rabbithole.gg/quests',
      { status: 302 },
    );
  }

  const buttonLable = number === 0 ? `🐇 Not reward can claim, click to start` : `🐇 Quest Numbers: ${number}, click to check`; 
  return new NextResponse(    
    getFrameHtmlResponse({
      buttons: [
        {
          label: buttonLable,
        },
      ],
      image: `${NEXT_PUBLIC_URL}/park-2.png`,
      post_url: `${NEXT_PUBLIC_URL}/api/frame`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
