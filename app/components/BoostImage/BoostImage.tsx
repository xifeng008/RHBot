import classNames from "classnames";
import Image from 'next/image'
import boostImage from '@/public/images/boostLog.png'

export default function BoostImage() {
    return (
        <div id="boost-image-html" className={classNames("w-[1200px] h-[630px] box-border text-[#202042] bg-[#fff] px-[45px] pt-[50px] pb-[25px] relative")}>
            <Image 
                width={431}
                height={78}
                alt="boost"
                src={boostImage}
            />
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className="text-[24px] absolute bottom-0 right-0">boostguild.xyz</div>
        </div>
    )
}