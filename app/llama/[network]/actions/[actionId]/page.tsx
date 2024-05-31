import { FrameMetadata } from '@coinbase/onchainkit';
import { NEXT_PUBLIC_URL } from '@/app/config';

import { NETWORK_TO_CHAIN_ID, NetworkName } from '@/lib/network';
import { getActionInfo } from '@/service/getInfoAction';
import BoostImage from '@/app/components/BoostImage/BoostImage';


export default async function Page({ params }: { params: { network: NetworkName, actionId: string } }) {

  // 根据network name 获取 chainId
  const chainId = NETWORK_TO_CHAIN_ID[params.network]

  const actionInfo = await getActionInfo(params.actionId, chainId)

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
        image={`${NEXT_PUBLIC_URL}/boost-pass-display.png`}
        post_url={`${NEXT_PUBLIC_URL}/api/frame?network=${params.network}&actionId=${params.actionId}`}
      ></FrameMetadata>
      <BoostImage />
    </>
  );
}


