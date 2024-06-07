import { FrameMetadata } from '@coinbase/onchainkit';
import { NEXT_PUBLIC_URL } from '@/app/config';

import { NETWORK_TO_CHAIN_ID, NetworkName } from '@/lib/network';
import { getActionInfo } from '@/service/getInfoAction';



export default async function Page({ params }: { params: { network: NetworkName, actionId: string } }) {
  let imgUrl: string = ""
  try {
    // 根据network name 获取 chainId
    const chainId = NETWORK_TO_CHAIN_ID[params.network]

    // 将16进制数转换为10进制的数
    const decimalChainId = parseInt(chainId + "", 16)

    const result = await getActionInfo(params.actionId, decimalChainId)

    imgUrl = result.message
    
  } catch (error) {
    console.log(error)
  }

  return (
    <>
      <FrameMetadata
        buttons={
          [
            {
              label: 'Read Summary',
              action: 'post'
            },
            {
              label: 'Go To Approved',
              action: 'post_redirect',
            }
          ]
        }
        image={imgUrl}
        post_url={`${NEXT_PUBLIC_URL}/api/frame?network=${params.network}&actionId=${params.actionId}`}
      ></FrameMetadata>
    </>
  );
}








