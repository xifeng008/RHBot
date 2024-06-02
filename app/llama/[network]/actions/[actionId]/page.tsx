import { FrameMetadata } from '@coinbase/onchainkit';
import { NEXT_PUBLIC_URL } from '@/app/config';

import { NETWORK_TO_CHAIN_ID, NetworkName } from '@/lib/network';
import { getActionInfo } from '@/service/getInfoAction';
import { getBoostGuildHomeHtml } from '@/lib/template';
import htmlToBase64 from '@/lib/htmlToBase64';


export default async function Page({ params }: { params: { network: NetworkName, actionId: string } }) {


  // 根据network name 获取 chainId
  const chainId = NETWORK_TO_CHAIN_ID[params.network]

  const actionInfo = await getActionInfo(params.actionId, chainId)

  const html = getBoostGuildHomeHtml(actionInfo.creatorAddress, actionInfo.title, actionInfo.state)

  const imgUrl = "data:image/png;base64," + await htmlToBase64(html, 1200, 630)
  const imgUrl1 = `${NEXT_PUBLIC_URL}/boost-pass-display.png`

  console.log(imgUrl)
  
  return (
    <>
      <FrameMetadata
        buttons={
          [
            {
              label: `Read Summary12`,
              action: 'post'
            },
            {
              label: 'Go To Approved23',
              action: 'post_redirect',
            }
          ]
        }
        image={imgUrl1}
        post_url={`${NEXT_PUBLIC_URL}/api/frame?network=${params.network}&actionId=${params.actionId}`}
      ></FrameMetadata>
    </>
  );
}








