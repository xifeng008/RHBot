"use client"
import classNames from "classnames";
import Image from 'next/image'
import boostImage from '@/public/images/boostLog.png'
import { useEffect } from 'react'
// import * as htmlToImage from 'html-to-image';

export default function BoostImage({
    creatorAddress,
    state,
    title
}:{ 
    creatorAddress:string,
    state: string,
    title: string
}) {
    
    useEffect(() => {
        // async function generateImagurl() {
        //     const element = document.querySelector("#boost-image-html") as HTMLElement
        //     const dataUrl = await htmlToImage.toPng(element, {width: 1200, height: 640})
        // }

        // generateImagurl();
    }, [])

    return (
        <div id="boost-image-html" className={classNames("w-[1200px] h-[630px] box-border text-[#202042] bg-[#fff] px-[45px] pt-[50px] pb-[25px] relative")} >
            <Image 
                width={431}
                height={78}
                alt="boost"
                src={boostImage}
            />
            <ul>
                <li>CreatorAddress: {creatorAddress}</li>
                <li>Title: {title}</li>
                <li>State: {state}</li>
            </ul>
            <div className="text-[24px] absolute bottom-0 right-0">boostguild.xyz</div>
        </div>
    )
}