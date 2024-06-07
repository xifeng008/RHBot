import { NextRequest, NextResponse } from 'next/server'
import { NEXT_PUBLIC_URL } from '../../config'
import { getFrameHtmlResponse } from '@coinbase/onchainkit';

export async function POST(req: NextRequest): Promise<Response> {
    const searchParams = req.nextUrl.searchParams
    const actionId = searchParams.get("actionId")
    const network = searchParams.get("network")
    const data = await req.json()
    const buttonId = data.untrustedData.buttonIndex
    let path: string;
    if(buttonId == 1) {
        // 获取图片URL
        // path = `${NEXT_PUBLIC_URL}/llama/${network}/actions/${actionId}?type=1`
        return new NextResponse(
            getFrameHtmlResponse({
                buttons: [
                    { 
                        label: 'Go To Approved',
                        action: 'post_redirect',
                    },
                ],
                image: `${NEXT_PUBLIC_URL}/park-2.png`,
                post_url: `${NEXT_PUBLIC_URL}/api/frame?network=${network}&actionId=${actionId}`
            })
        )
    } else if(buttonId == 2) {
        path = `https://app.llama.xyz/orgs/boost/${network}/actions/${actionId}`
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