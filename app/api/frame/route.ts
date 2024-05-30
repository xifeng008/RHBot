import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';
import { useParams } from 'next/navigation';

// import axios from 'axios';

async function getResponse(req: NextRequest, llama: { network: string, actionId: string }): Promise<NextResponse> {
    const data = await req.json()
    
    const buttonId = data.untrustedData.buttonIndex
    let path: string;
    if(buttonId == 1) {
        path = ""
    } else if(buttonId == 2) {
        path = `https://app.llama.xyz/orgs/boost/${llama.network}/actions/${llama.actionId}`
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

export async function POST(req: NextRequest): Promise<Response> {
    const params = useParams();
    const { network, actionId } = params
    const llama = { network, actionId } as { network: string, actionId: string }
    return getResponse(req, llama);
}

export const dynamic = 'force-dynamic';
