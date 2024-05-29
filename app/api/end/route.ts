import { NextRequest, NextResponse } from 'next/server'
import { NEXT_PUBLIC_URL } from '../../config'
import { useParams } from 'next/navigation'

export async function POST(req: NextResponse): Promise<Response> {
    const data = await req.json()
    const buttonId = data.untrustedData.buttonIndex
    const params = useParams()
    const { network, actionId } = params
    let path: string;
    if(buttonId == 1) {
        path = ""
    } else if(buttonId == 2) {
        path = `https://app.llama.xyz/orgs/boost/${network}/actions/${actionId}`
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