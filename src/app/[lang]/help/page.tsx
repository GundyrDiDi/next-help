import { request } from '@/config/request';
import CateList from './component/CateList';
import Search from './component/Search'

const mock = {
    label: "分类",
    value: "xx",
    childrenCateList:
        [
            {
                label: "label1",
                value: "xx2"
            },
            {
                label: "label2",
                value: "xx2"
            },
            {
                label: "label3",
                value: "xx2"
            },
            {
                label: "label4",
                value: "xx2"
            },
            {
                label: "label5",
                value: "xx2"
            }
        ]
}
const mockList = [mock,mock,mock,mock]

const Page = async () => {
    // https://master-gateway.theckb.com/customer/base/supportCenter/subject/contentList?subjectId=6
    const res = await request.customer.base.supportCenterSubjectContentList({
        subjectId: 6
    })
    const contentList = (res.data ?? []).map((item) => {
        return {
            label: item.title!,
            value: item.contentUrl!
        }
    });
    const mockList = [
        { label: '测试1', childrenCateList: contentList, value: '测试1'},
        { label: '测试2', childrenCateList: contentList, value: '测试2'},
        { label: '测试3', childrenCateList: contentList, value: '测试3'},
    ]
    console.log(mockList, 3333)

    return (
        <div className="flex justify-center" >
            <div className="pc:w-[1200px]" >
                <Search className="mb-[16px]" />
                {mockList.map((item, key) => {
                    return <CateList
                        className="mb-[16px]"
                        key={key}
                        {...item}
                    />
                })}
                
            </div>
        </div>
    )
}
export default Page;