import { Menu } from 'antd';
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

const Page = () => {
    return (
        <div className="flex justify-center" >
            <div className="pc:w-[1200px]" >
                <Menu
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={[
                        {
                            label: 'qqq',
                            key: 88
                        },
                        {
                            label: 'qqq',
                            key: 888543
                        },
                        {
                            label: 'qqqf',
                            key: 885436
                        }
                    ]}
                />
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