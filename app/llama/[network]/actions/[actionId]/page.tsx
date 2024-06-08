import { FrameMetadata } from '@coinbase/onchainkit';
import { NEXT_PUBLIC_URL } from '@/app/config';

import { NETWORK_TO_CHAIN_ID, NetworkName } from '@/lib/network';
import { getActionInfo } from '@/service/getInfoAction';
import classNames from 'classnames';



export default async function Page({ params}: { params: { network: NetworkName, actionId: string }}) {
  let imgUrl: string = ""
  try {

    // 根据network name 获取 chainId
    const chainId = NETWORK_TO_CHAIN_ID[params.network]

    const result = await getActionInfo(params.actionId, chainId, 0)

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
      <div className='w-[100vw] h-[100vh] bg-[#000] flex'>
        <img src={imgUrl} alt="" className='w-[1200px] h-[630px] m-auto' />
      </div>
    </>
  );
}








