import { request } from "@/config/request"
import Container from "./Index"

// https://gateway-prod.theckb.com/goods/product/detail


export default async function Page() {
    // https://master-gateway.theckb.com/customer/base/supportCenter/subject/contentList?subjectId=108
    const res = await request.customer.base.supportCenterSubjectContentList({
        subjectId: 108
    })
    const contentList = (res.data ?? []).map((item) => {
        return {
            label: item.title!,
            value: item.contentUrl!
        }
    });

    //  ({productCode: 'AM-1131743594'}).catch(e => {
    //     console.log(e)
    // })

    // const res = await request.goods.product.detail({productCode: 'AM-1131743594'}).catch(e => {
    //     console.log(e)
    // })
    console.log(res);
    return contentList.length ? <Container contentList={contentList}/> : null;
}