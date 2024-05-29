import { NextRequest, NextResponse } from 'next/server'
import { NEXT_PUBLIC_URL } from '../../config'
import exp from 'constants';

export async function POST(req: NextRequest): Promise<Response> {
    const data = await req.json()
    const buttonId = data.untrustedData.buttonIndex
    let path: string;
    if(buttonId == 1) {
        path = ""
    } else if(buttonId == 2) {
        path = "https://app.llama.xyz/orgs/boost/optimism/actions/72"
    } else {
        path = ""
    }

    const headers = new Headers()
    headers.set('Loaction', '')
    const response = NextResponse.redirect(`${path}`, {
        headers,
        status: 302
    })
    return response
}

export const dynamic = "force-dynamic"