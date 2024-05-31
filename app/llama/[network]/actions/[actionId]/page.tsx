"use client";

import { FrameMetadata } from '@coinbase/onchainkit';
import { NEXT_PUBLIC_URL } from '@/app/config';

import { NETWORK_TO_CHAIN_ID, NetworkName } from '@/lib/network';
import { getActionInfo } from '@/service/getInfoAction';
import BoostImage from '@/app/components/BoostImage/BoostImage';
import * as htmlToImage from 'html-to-image';
import { useEffect, useState } from 'react';




export default function Page({ params }: { params: { network: NetworkName, actionId: string } }) {

  const [imgUrl, setImgUrl] = useState<string>("");

  // 根据network name 获取 chainId
  const chainId = NETWORK_TO_CHAIN_ID[params.network]

  useEffect(() => {
    async function fetchData() { 
      const actionInfo = await getActionInfo(params.actionId, chainId)
      console.log(actionInfo)

      const boostImg = document.querySelector("#boost-image-html") as HTMLElement;
      const dataUrl = await htmlToImage.toPng(boostImg, { width: 1200, height: 630})
      setImgUrl(dataUrl)
    }

    fetchData()
    
  }, [])


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
        image={`${NEXT_PUBLIC_URL}/boost-pass-disaplay.png`}
        post_url={`${NEXT_PUBLIC_URL}/api/frame?network=${params.network}&actionId=${params.actionId}/imgUrl=${imgUrl}`}
      ></FrameMetadata>
      <BoostImage />
    </>
  );
}


