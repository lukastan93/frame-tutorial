import { NextRequest, NextResponse } from 'next/server';
import { FrameRequest, getFrameMessage } from '@coinbase/onchainkit'; 


async function getResponse(req: NextRequest): Promise<NextResponse> {
  const frameRequest: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(frameRequest); 
 console.log(message)
  if (isValid) {
    console.log(message)
  }

  // const searchParams = req.nextUrl.searchParams
      return new NextResponse(`<!DOCTYPE html><html><head>
    <title>$ROYAL Allocation</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://cdn.discordapp.com/attachments/892878888445804545/1083049214948409424/FqJkIcSWAAsuyMz.png?ex=65fb012e&is=65e88c2e&hm=fc63d1ad4854e2bb446235dc2f82a6cad846dde1e06457a53ab5ec325a8d608c&" />
    <meta property="og:image" content="https://cdn.discordapp.com/attachments/892878888445804545/1083049214948409424/FqJkIcSWAAsuyMz.png?ex=65fb012e&is=65e88c2e&hm=fc63d1ad4854e2bb446235dc2f82a6cad846dde1e06457a53ab5ec325a8d608c&" />
  </head></html>`);
  // } else {
  // return new NextResponse(`<!DOCTYPE html><html><head>
  //   <title>This is frame ${id}</title>
  //   <meta property="fc:frame" content="vNext" />
  //   <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qme4FXhoxHHfyzTfRxSpASbMF8kajLEPkRQWhwWu9pkUjm/${id}.png" />
  //   <meta property="fc:frame:button:1" content="Next Page" />
  //   <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
  // </head></html>`);
  // }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
