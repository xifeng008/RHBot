import { FrameMetadata } from '@coinbase/onchainkit';
import { NEXT_PUBLIC_URL } from '@/app/config';

import { NETWORK_TO_CHAIN_ID, NetworkName } from '@/lib/network';
import { getActionInfo } from '@/service/getInfoAction';
// import { getBoostGuildHomeHtml } from '@/lib/template';
import htmlToBase64 from '@/lib/htmlToBase64';

function getBoostGuildHomeHtml(creatorAddress: string, title: string, state: string) {
  const html_str = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
      <style>
          * {
              margin: 0;
              padding: 0
          }
  
          ul {
              list-style: none;
          }
          #boost_image_html {
              position: relative;
              width: 1200px;
              height: 630px;
              box-sizing: border-box;
              color: #202042;
              background-color: #fff;
              padding: 50px 45px 25px;
          }
  
          #boost_image_html .url_text {
              position: absolute;
              bottom: 0;
              right: 0;
              font-size: 22px;
  
          }
  
          .boost_logo {
              width: 431px;
              height: 78px;
              margin-bottom: 80px;
          }
  
          .boost_logo img {
              width: 100%;
              height: 100%;
          }
  
          .action_info_box > li {
              font-size: 24px;
              margin-bottom: 45px;
          }
      </style>
  </head>
  <body>
      <div id="boost_image_html">
          <div class="boost_logo">
              <img src=${NEXT_PUBLIC_URL + '/images/boostLog.png'} alt="">
          </div>
          <ul class="action_info_box">
              <li>CreatorAddress: ${creatorAddress.slice(0, 5) + "..." + creatorAddress.slice(creatorAddress.length-5)}</li>
              <li>Title: ${title}</li>
              <li>State: ${state}</li>
          </ul>
          <div class="url_text">boostguild.xyz</div>
      </div>
  </body>
  </html>
`

return html_str
}

export default async function Page({ params }: { params: { network: NetworkName, actionId: string } }) {


  // 根据network name 获取 chainId
  const chainId = NETWORK_TO_CHAIN_ID[params.network]

  const actionInfo = await getActionInfo(params.actionId, chainId)

  const html = getBoostGuildHomeHtml(actionInfo.creatorAddress, actionInfo.title, actionInfo.state)

  const imgUrl = "data:image/png;base64," + await htmlToBase64(html, 1200, 630)

  console.log(imgUrl)
  
  return (
    <>
      <FrameMetadata
        buttons={
          [
            {
              label: `Read Summary12${actionInfo.state}`,
              action: 'post'
            },
            {
              label: 'Go To Approved23',
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








