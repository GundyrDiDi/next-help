/*
 * @Author: shiguang
 * @Date: 2024-05-16 14:42:07
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-16 17:28:58
 * @Description: 
 */
'use client'
import { BizResponsePageFrogArticleRespDTO, GetFrogArticleArchivePageDTO, GetFrogArticlePageDTO } from "@/service/customer";
import SearchBanner from "./components/SearchBanner";
import ArticleCategroy from "./components/ArticleCategroy";
import ArticleList from "./components/ArticleList";
import TimeArchiveCate from "./components/TimeArchiveCate";
import HotArticalList from "./components/HotArticalList";
import { Form, Pagination } from "antd";
import { request } from "@/config/request";
import { usePagination, useRequest } from "ahooks";

// 查询历史记录
// const res = await api.customer.frog.articleFootPage({

// 查询归档文章分页
// const res = await api.customer.frog.articleArchivePage({

// 查询默认文章分页
// const res = await api.customer.frog.articlePage({

enum RequestArticleListType {
    /** 查询归档 */
    ARCHINVE = 'ARCHINVE',
    /** 普通查询 */
    NOMAL = 'NOMAL',
    /** 普通查看历史记录 */
    VIST_RECORD = 'VIST_RECORD'
}

type RequestType = 
    {
        type?: RequestArticleListType;
        pageNum?: number;
        pageSize?: number;
    } & GetFrogArticleArchivePageDTO & GetFrogArticlePageDTO & GetFrogArticlePageDTO
;



interface IndexProps {
    // SSRArticleListData: BizResponsePageFrogArticleRespDTO;
}
request.customer.frog.articleFootPage
interface IndexProps{
    siteStation: string;
}

const Index = (props: IndexProps) => {
    const { siteStation } = props;
    const [form] = Form.useForm()
    const { data, loading, run: reqArticleList, params } = useRequest(
        async (requestParams: RequestType = {} as RequestType) => {
            const { pageNum: _pageNum, keyword } = form.getFieldsValue()
            let res: BizResponsePageFrogArticleRespDTO | undefined = undefined;
            const pageNum = requestParams.pageNum ?? _pageNum
            if (requestParams.type === RequestArticleListType.VIST_RECORD) {
                res = await request.customer.frog.articleFootPage({ 
                    pageNum, pageSize: 10, stationCode: siteStation 
                })
            }
            res = await request.customer.frog.articlePage({ 
                pageNum, pageSize: 10, 
                ...requestParams, stationCode: siteStation,
                keyword
            })
            return {
                total: res?.data?.total ?? 0,
                list: res?.data?.records ?? [],
                pageNum,
            }
        },
        { manual: false },
    );
    return <div className="bg-[#F5F5F5]" >
        <div
            onClick={() => {
                console.log(form.getFieldsValue())
            }}
        >
            点我
        </div>
        <Form form={form} >
            <Form.Item name="keyword" noStyle >
                <SearchBanner 
                    onSearch={() => {
                        reqArticleList({pageSize: 10})
                    }} 
                    onClickReadRecord={() => {
                        reqArticleList({ pageSize: 10, pageNum: 1 })
                    }}
                />
            </Form.Item>
        </Form>
        <div className="pc:py-[20px]" >
            <Form.Item name="frogArticleTypeId" noStyle >
                <ArticleCategroy />
            </Form.Item>
        </div>
        <div>
            <div>
                <ArticleList list={data?.list ?? []} />
                <Form.Item name="keyword" noStyle valuePropName="current" >
                    <Pagination
                        pageSize={10}
                        total={data?.total}
                        style={{ marginTop: 16, textAlign: 'right' }}
                        showQuickJumper
                    />
                </Form.Item>
            </div>

            <div>
                <HotArticalList />
                <TimeArchiveCate />
            </div>
        </div>
    </div>
}

export default Index;