/*
 * @Author: shiguang
 * @Date: 2024-05-16 14:42:07
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-22 11:54:05
 * @Description: 
 */
'use client'
import { BizResponsePageFrogArticleRespDTO, GetFrogArticleArchivePageDTO, GetFrogArticlePageDTO } from "@/service/customer";
import SearchBanner from "./components/SearchBanner";
import ArticleCategroy from "./components/ArticleCategroy";
import ArticleList from "./components/ArticleList";
import TimeArchiveCate, { TimeArchiveCateValue } from "./components/TimeArchiveCate";
import HotArticalList from "./components/HotArticalList";
import { Form, Pagination } from "antd";
import { request } from "@/config/request";
import { useRequest } from "ahooks";
import { useSearchParams } from "next/navigation";
import {requestReadRecordContext } from "./components/SearchBanner/utils";
import { useEffect, useRef } from "react";

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
        timeArchiveCate?: TimeArchiveCateValue;
        isArticalReadRecord?: boolean;
    } & GetFrogArticleArchivePageDTO & GetFrogArticlePageDTO & GetFrogArticlePageDTO
    ;



interface IndexProps {
    // SSRArticleListData: BizResponsePageFrogArticleRespDTO;
}
request.customer.frog.articleFootPage
interface IndexProps {
    siteStation: string;
    SSRArticleListData: BizResponsePageFrogArticleRespDTO;
}

const Index = (props: IndexProps) => {
    const { siteStation, SSRArticleListData } = props;
    const searchParams = useSearchParams()
    const frogArticleTypeId = searchParams.get('articleTypeId')
    const [form] = Form.useForm()
    const isClentRender = useRef(false)
    useEffect(() => {
        isClentRender.current = true;
    })
    
    const { data: res, loading, run: reqArticleList, params } = useRequest(
        async (requestParams: RequestType = {} as RequestType) => {
            const { timeArchiveCate } = requestParams;
            const w: any = window;
            w.fff = form;
            const formValues = form.getFieldsValue()
            const { pageNum: _pageNum, keyword, frogArticleTypeId } = formValues;
            const isArticalReadRecord = requestParams.isArticalReadRecord ?? formValues.isArticalReadRecord
            let res: BizResponsePageFrogArticleRespDTO | undefined = undefined;
            const pageNum = requestParams.pageNum ?? _pageNum
            if (isArticalReadRecord) {
                res = await request.customer.frog.articleFootPage({
                    pageNum, pageSize: 10, stationCode: siteStation
                })
            // 说明看的是归档文章
            }else if(timeArchiveCate){
                timeArchiveCate.frogArticleMonth
                res = await request.customer.frog.articleArchivePage({
                    pageNum, pageSize: 10, 
                    stationCode: siteStation,
                    frogArticleMonth: String(timeArchiveCate.frogArticleMonth),
                    frogArticleYear: String(timeArchiveCate.frogArticleYear),
                })
            }else {
                const params = {
                    pageNum, pageSize: 10,
                    ...requestParams, stationCode: siteStation,
                    keyword,
                    frogArticleTypeId
                }
                if(params.frogArticleTypeId === -1){
                    delete params.frogArticleTypeId
                }
                res = await request.customer.frog.articlePage(params)
            }
            return {
                total: res?.data?.total ?? 0,
                list: res?.data?.records ?? [],
                pageNum,
            }
        },
        { manual: false },
    );
    
    requestReadRecordContext.setRequestReadRecordContext(() => {
        form.setFieldsValue({ 
            isArticalReadRecord: true,
            timeArchiveCate: undefined
        })
        reqArticleList({ pageSize: 10, pageNum: 1, type: RequestArticleListType.VIST_RECORD })
    })

    const onClickReadRecord=() => {
        form.setFieldsValue({
            frogArticleTypeId: undefined,
            isArticalReadRecord: true
        })
        reqArticleList({ pageSize: 10, pageNum: 1, isArticalReadRecord: true })
    }
    const data = isClentRender.current ? res : {
        total: SSRArticleListData?.data?.total ?? 0,
        list: SSRArticleListData?.data?.records ?? [],
    }
    // const articleList = isClentRender.current ? data?.list : ;
    return <div className="bg-[#F5F5F5] mo:bg-white" >
        <Form form={form} initialValues={frogArticleTypeId ? { frogArticleTypeId } : undefined} >
            <Form.Item name="keyword" noStyle >
                <SearchBanner
                    onSearch={() => {
                        form.setFieldsValue({
                            isArticalReadRecord: false,
                            timeArchiveCate: undefined,
                        })
                        reqArticleList({ pageSize: 10 })
                    }}
                    onClickReadRecord={onClickReadRecord}
                />
            </Form.Item>
            {/* 隐藏域 用于存放是否是浏览记录 */}
            <Form.Item name="isArticalReadRecord" noStyle >
                <input style={{ display: 'none' }} />
            </Form.Item>
            <div className="py-[20px] mo:py-[8px]" >
                <Form.Item name="frogArticleTypeId" noStyle >
                    <ArticleCategroy
                        onChange={(value) => {
                            reqArticleList({ pageSize: 10, pageNum: 1, frogArticleTypeId: value })
                            form.setFieldsValue({
                                isArticalReadRecord: false,
                                timeArchiveCate: undefined
                            })
                        }}
                    />
                </Form.Item>
            </div>
            <div className="flex mo:!block pad:!block justify-center mo:bg-white pad:p-[20px] pad:pt-[0px]" >
                <div className="pc:w-[1200px] pc:flex mo:!block pad:!block mo:bg-white" >
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
                        <HotArticalList isShowHeaderIcon={false} />
                        <div className="pc:mt-[20px]" >
                            <Form.Item name="timeArchiveCate" noStyle >
                                <TimeArchiveCate
                                 onChange={(val) => {
                                    form.setFieldsValue({
                                        pageNum: 1,
                                        isArticalReadRecord: undefined
                                    })
                                    reqArticleList({ 
                                        pageNum: 1, 
                                        timeArchiveCate: val  
                                    })
                                 }} 
                                />
                            </Form.Item>
                        </div>
                    </div>
                </div>
            </div>
        </Form>
    </div>
}

export default Index;