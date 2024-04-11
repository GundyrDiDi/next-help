/*
 * @Author: shiguang
 * @Date: 2024-04-11 11:30:19
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-11 14:16:51
 * @Description: 
 */
'use client'
import { useState } from 'react';
import CateList from './component/CateList';
import Search from './component/Search'
import SearchResult from './component/SearchResult';
import { SupportCenterContentDTO, SupportCenterSubjectDTO } from '@/service/customer';
import { request } from '@/config/request';
import { getSiteStation } from '@/utils/language';
import { isD2C } from '@/utils';
import { SupportCenterbizType } from './utils';

interface HelpProps{
    supportCenterSubjectList: SupportCenterSubjectDTO[]
}

const Help = (props: HelpProps) => {
    const { supportCenterSubjectList } = props;
    const [searchKeywords, setSearchKeywords] = useState<string>()
    const [isShowSearchResult, setIsShowSearchResult] = useState(false);
    const [searchResList, setSearchResList] = useState<SupportCenterContentDTO[]>();

    return (
        <div className="flex justify-center" >
            <div className="pc:w-[1200px] mo:w-[100%] pad:w-[100%]" >
                <Search 
                    className="mb-[16px] mo:mb-0"
                    value={searchKeywords} 
                    onChange={setSearchKeywords} 
                    onSearch={async() => {
                        if(!searchKeywords){
                            return setSearchResList(undefined)
                        }
                        const res = await request.customer.base.supportCenterContentQuery({
                            bizType: isD2C() ? SupportCenterbizType.C : SupportCenterbizType.B,
                            contentType: 'text',
                            keyword: searchKeywords,
                            stationCode: getSiteStation()
                        })
                        setSearchResList(res.data)
                        setIsShowSearchResult(true)
                    }}
                />
                {isShowSearchResult ? <SearchResult searchKeywords={searchKeywords} searchResList={searchResList ?? []} onCloseSearch={() => setIsShowSearchResult(false)} /> : <div className="mo:p-[12px]" >
                    {supportCenterSubjectList.map((item, key) => {
                        return <CateList
                            label={item.subject!}
                            value={item.supportCenterSubjectId! as unknown as string}
                            className="pc:mb-[16px] mo:p-[12px] mo:bg-white"
                            contentType={item.contentType as any}
                            childrenCateList={
                                (() => {
                                    if(item?.contentList?.length){
                                        return (item.contentList ?? []) .map(it => {
                                            return {
                                                label: it.title!,
                                                // value: it.contentUrl!,
                                                value: it.supportCenterContentId! as unknown as string,
                                                contentType: item.contentType as any
                                            }
                                        })
                                    }
                                    return (item.childrenList ?? []) .map(it => {
                                        return {
                                            label: it.subject!,
                                            value: it.supportCenterSubjectId! as unknown as string,
                                            contentType: item.contentType as any
                                        }
                                    })
                                })()
                            }
                            key={key}
                        />
                    })}
                </div>}
                
                
            </div>
        </div>
    )
}
export default Help;