/*
 * @Author: shiguang
 * @Date: 2024-04-09 16:28:24
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-09 18:32:45
 * @Description: 
 */
interface PageProps {
    params: {
        supportCenterContentId: string
    }
}

// 通过 supportCenterContentId 查询内容

const Page = async (props: PageProps) => {
    const { params } = props;
    return <div>
        <video controls  className="h-[calc(100vh-32px)] w-[100%] bg-black" >
  {/* <source src="/media/cc0-videos/flower.webm" type="video/webm" /> */}

  <source src="https://theckbstest-oss.theckbs.com/transfer/1699350478000%E5%8D%A1%E4%BA%86.mp4" />

  {/* Download the
  <a href="/media/cc0-videos/flower.webm">WEBM</a>
  or
  <a href="/media/cc0-videos/flower.mp4">MP4</a>
  video. */}
</video>
        {/* <video className="h-[calc(100vh-32px)] w-[100%]" src="https://theckbstest-oss.theckbs.com/transfer/1699350478000%E5%8D%A1%E4%BA%86.mp4"></video> */}
    </div>
}

export default Page;