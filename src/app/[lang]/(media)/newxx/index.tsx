/*
 * @Author: shiguang
 * @Date: 2024-05-16 14:42:07
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-17 11:49:00
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
import { useParams, useSearchParams } from "next/navigation";

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
interface IndexProps {
    siteStation: string;
}

const Index = (props: IndexProps) => {
    const { siteStation } = props;
    const searchParams = useSearchParams()
    const frogArticleTypeId = searchParams.get('frogArticleTypeId')

    // const { frogArticleTypeId } = useSearchParams()
    console.log(frogArticleTypeId, frogArticleTypeId, 'frogArticleTypeId')
    const [form] = Form.useForm()
    const { data, loading, run: reqArticleList, params } = useRequest(
        async (requestParams: RequestType = {} as RequestType) => {
            const w: any = window;
            w.fff = form;
            const { pageNum: _pageNum, keyword, frogArticleTypeId } = form.getFieldsValue()
            let res: BizResponsePageFrogArticleRespDTO | undefined = undefined;
            const pageNum = requestParams.pageNum ?? _pageNum
            if (requestParams.type === RequestArticleListType.VIST_RECORD) {
                res = await request.customer.frog.articleFootPage({
                    pageNum, pageSize: 10, stationCode: siteStation
                })
            } else {
                res = await request.customer.frog.articlePage({
                    pageNum, pageSize: 10,
                    ...requestParams, stationCode: siteStation,
                    keyword,
                    frogArticleTypeId
                })
            }
            return {
                total: res?.data?.total ?? 0,
                list: res?.data?.records ?? [],
                pageNum,
            }
        },
        { manual: false },
    );
    return <div className="bg-[#F5F5F5] mo:bg-white" >
        <Form form={form} initialValues={frogArticleTypeId ? { frogArticleTypeId } : undefined} >
            <Form.Item name="keyword" noStyle >
                <SearchBanner
                    onSearch={() => {
                        reqArticleList({ pageSize: 10 })
                    }}
                    onClickReadRecord={() => {
                        form.setFieldsValue({
                            frogArticleTypeId: -99,
                        })
                        reqArticleList({ pageSize: 10, pageNum: 1, type: RequestArticleListType.VIST_RECORD })
                    }}
                />
            </Form.Item>

            <div className="py-[20px] mo:py-[8px]" >
                <Form.Item name="frogArticleTypeId" noStyle >
                    <ArticleCategroy
                        onChange={(value) => {
                            reqArticleList({ pageSize: 10, pageNum: 1, frogArticleTypeId: value })
                        }}
                    />
                </Form.Item>
            </div>
            <div className="flex mo:!block pad:!block justify-center mo:bg-white pad:p-[20px] pad:pt-[0px]" >
                <div className="pc:w-[1200px] flex mo:!block mo:bg-white" >
                    <div className="pc:mr-[20px] mo:!bg-white" >
                        <ArticleList list={data?.list ?? []} />
                        {!!data?.list.length && <div className="pc:py-[32px]" >
                            <Form.Item name="pageNum" noStyle valuePropName="current" >
                                <Pagination
                                    pageSize={10}
                                    total={data?.total}
                                    onChange={(pageNum) => {
                                        reqArticleList({ pageNum })
                                    }}
                                    className="text-center mo:!mb-[40px]"
                                    style={{ marginTop: 16 }}
                                    showQuickJumper
                                />
                            </Form.Item>
                        </div>}
                    </div>
                    <div className="mo:hidden pad:hidden " >
                        <HotArticalList />
                        <div className="pc:mt-[20px]" >
                            <TimeArchiveCate />
                        </div>
                    </div>
                </div>
            </div>
        </Form>
    </div>
}

export default Index;