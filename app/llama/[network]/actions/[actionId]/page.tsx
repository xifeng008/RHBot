import { FrameMetadata } from '@coinbase/onchainkit';
import { NEXT_PUBLIC_URL } from '../../../../config';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest): Promise<Response> {
  const searchParams = req.nextUrl.searchParams
  const actionId = searchParams.get("actionId")
  const network = searchParams.get("network")
  const data = await req.json()
  const buttonId = data.untrustedData.buttonIndex
  let path: string;
  if (buttonId == 1) {
    path = `${NEXT_PUBLIC_URL}/llama/${network}/actions/${actionId}`
  } else if (buttonId == 2) {
    // path = `https://app.llama.xyz/orgs/boost/${network}/actions/${actionId}/${req.url}/${req.nextUrl}`
    path = `https://${req.url}/${req.nextUrl}`
  } else {
    path = ""
  }

  const headers = new Headers()
  headers.set('Loaction', NEXT_PUBLIC_URL)
  const response = NextResponse.redirect(`${path}`, {
    headers,
    status: 302
  })
  return response
}

export const dynamic = "force-dynamic"

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
        post_url={`${NEXT_PUBLIC_URL}/llama/${network}/actions/${actionId}`}
      ></FrameMetadata>
      <h1>Boost Guild action network!</h1>
    </>
  );
}
