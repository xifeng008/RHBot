"use client"
import { FrameMetadata } from '@coinbase/onchainkit';
import { NEXT_PUBLIC_URL } from '@/app/config';

import { NETWORK_TO_CHAIN_ID, NetworkName } from '@/lib/network';
import { getActionInfo } from '@/service/getInfoAction';
import BoostImage from '@/app/components/BoostImage/BoostImage';
import { useEffect, useState } from 'react';
import * as htmlToImage from 'html-to-image';

type actionInfoType = {
  title: string,
  creatorAddress: string,
  state: string
}

export default function Page({ params }: { params: { network: NetworkName, actionId: string } }) {

  const [actionData, setActionData] = useState<actionInfoType | null>(null)
  const [ imgUrl, setImgUrl ] = useState<string>("")

  // 根据network name 获取 chainId
  const chainId = NETWORK_TO_CHAIN_ID[params.network]

  useEffect(() => {
    // 请求action数据
    async function fetchData() {
      const actionInfo = await getActionInfo(params.actionId, chainId)
      if(actionInfo) {
        setActionData({
          ...actionData,
          title: actionInfo.title,
          creatorAddress: actionInfo.creatorAddress,
          state: actionInfo.state
        })
      }
    }

    fetchData()

    // 将html内容生成图片
    async function generateImageUrl() {
      const element = document.querySelector('#boost-image-html') as HTMLElement
      const dataUrl = await htmlToImage.toPng(element, { width: 1200, height: 630})
      setImgUrl(dataUrl)
    }
    generateImageUrl()
  }, [])


  return (
    <>
      {/* <FrameMetadata
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
      ></FrameMetadata> */}
      <BoostImage />
    </>
  );
}


