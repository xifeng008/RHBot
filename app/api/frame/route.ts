import { NextRequest, NextResponse } from 'next/server'
import { NEXT_PUBLIC_URL } from '../../config'
import {usePathname } from 'next/navigation'

export async function POST(req: NextRequest): Promise<Response> {
    const pathname = usePathname()
    const searchParams = req.nextUrl.searchParams
    const actionId = searchParams.get("actionId")
    const network = searchParams.get("network")
    const data = await req.json()
    const buttonId = data.untrustedData.buttonIndex
    let path: string;
    if(buttonId == 1) {
        path = `${NEXT_PUBLIC_URL}/llama/${network}/actions/${actionId}/${pathname}`
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