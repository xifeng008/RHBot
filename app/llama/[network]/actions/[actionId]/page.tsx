import { FrameMetadata } from '@coinbase/onchainkit';
import { NEXT_PUBLIC_URL } from '@/app/config';

import { NETWORK_TO_CHAIN_ID, NetworkName } from '@/lib/network';
import { getActionInfo } from '@/service/getInfoAction';
import * as htmlToImage from 'html-to-image';


export default async function Page({ params }: { params: { network: NetworkName, actionId: string } }) {


  // 根据network name 获取 chainId
  const chainId = NETWORK_TO_CHAIN_ID[params.network]

  const actionInfo = await getActionInfo(params.actionId, chainId)

  const imgUrl1 = `${NEXT_PUBLIC_URL}/boost-pass-display.png`
  // const parser = new DOMParser();
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








