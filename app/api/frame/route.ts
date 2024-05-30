import { NextRequest, NextResponse } from 'next/server'
import { NEXT_PUBLIC_URL } from '../../config'

export async function POST(req: NextRequest): Promise<Response> {
    // const searchParams = req.nextUrl.searchParams
    // const actionId = searchParams.get("actionId")
    // const network = searchParams.get("network")
    const data = await req.json()
    const buttonId = data.untrustedData.buttonIndex
    let path: string;
    if(buttonId == 1) {
        path = ''
        path = `${NEXT_PUBLIC_URL}/llama/op/actions/1`
    } else if(buttonId == 2) {
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