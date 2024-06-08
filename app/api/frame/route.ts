import { NextRequest, NextResponse } from 'next/server'
import { NEXT_PUBLIC_URL } from '../../config'
import { getFrameHtmlResponse } from '@coinbase/onchainkit';
import { getActionInfo } from '@/service/getInfoAction';
import { NETWORK_TO_CHAIN_ID, NetworkName } from '@/lib/network';

export async function POST(req: NextRequest): Promise<Response> {
    const searchParams = req.nextUrl.searchParams
    const actionId = searchParams.get("actionId") as (string | number)
    const network = searchParams.get("network")
    const chainId = NETWORK_TO_CHAIN_ID[network as NetworkName]
    const data = await req.json()
    const buttonId = data.untrustedData.buttonIndex
    let path: string;
    if(buttonId == 1) {
        // 获取图片URL
        const result = await getActionInfo(actionId, chainId, 1)
        const imgUrl = result.message
        return new NextResponse(
            getFrameHtmlResponse({
                // 在这里可以添加buttons按钮组件
                buttons: [
                    {
                        label: 'Return'
                    }
                ],
                image: `${imgUrl}`,
                // 在这里可以添加post_url
                post_url: `${NEXT_PUBLIC_URL}/llama/${network}/actions/${actionId}`
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