/*
 * @Author: shiguang
 * @Date: 2024-04-09 16:28:24
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-10 16:20:50
 * @Description: 
 */
import { request } from "@/config/request";
interface PageProps {
    params: {
        supportCenterContentId: string
    }
}

// 通过 supportCenterContentId 查询内容

const Page = async (props: PageProps) => {
    const { params } = props;
    const res = await request.customer.base.supportCenterQueryGetSupportCenterContentById({
        contentId: params.supportCenterContentId as unknown as number
    })
    console.log(3333, res)

    const videoUrl = res.data?.contentUrl
    return <div>
        <video controls className="h-[calc(100vh-32px)] w-[100%] bg-[#262626]" >
            {!!videoUrl && <source src={videoUrl} />}
        </video>
    </div>
}
export default Page;