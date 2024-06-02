import { NEXT_PUBLIC_URL } from "@/app/config"


export function getBoostGuildHomeHtml(creatorAddress: string, title: string, state: string) {
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