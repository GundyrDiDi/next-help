/*
 * @Author: shiguang
 * @Date: 2024-04-11 11:30:19
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-16 23:02:23
 * @Description: 
 */
'use client'
import { useEffect, useState } from 'react';
import CateList from './component/CateList';
import Search from './component/Search'
import SearchResult from './component/SearchResult';
import { SupportCenterContentDTO, SupportCenterSubjectDTO } from '@/service/customer';
import { request } from '@/config/request';
import { getSiteStation } from '@/utils/language';
import { isD2C } from '@/utils';
import { SupportCenterbizType } from './utils';
import { Plat } from '@/model';
import { useAtom } from 'jotai';
import { ENUM_PLATE } from '@/model/Plat';
import { Site } from '@/const';
import { useParams } from 'next/navigation';
import { Local } from '@/i18n/settings';
import Breadcrumb from './component/Breadcrumb';
import { useTranslation } from 'react-i18next';

interface HelpProps {
    supportCenterSubjectList: SupportCenterSubjectDTO[];
    siteStation: Site;
    // onChangePlate: (plat: ENUM_PLATE) => void;
}

const Help = (props: HelpProps) => {
    const { supportCenterSubjectList: _supportCenterSubjectList } = props;
    const [searchKeywords, setSearchKeywords] = useState<string>()
    const [isShowSearchResult, setIsShowSearchResult] = useState(false);
    const [searchResList, setSearchResList] = useState<SupportCenterContentDTO[]>();
    const [supportCenterSubjectList, setSupportCenterSubjectList] = useState(_supportCenterSubjectList);
    const { lang } = useParams();
    const siteStation = getSiteStation(lang as Local)
    const [plat] = useAtom(Plat);
    const { t } = useTranslation();
    
    // 第一次进来还是会重新请求，但是期待如果数据没变化就不请求了
    useEffect(() => {
        (async () => {
            const res = await request.customer.base.supportCenterTree({
                bizType: plat === ENUM_PLATE.b2b ? SupportCenterbizType.B : SupportCenterbizType.C,
                stationCode: siteStation,
            });
            setSupportCenterSubjectList((preData) => {
                const newData = res.data ?? [];
                if(JSON.stringify(newData) === JSON.stringify(preData)){
                    return preData;
                }
                return newData;
            })
        })();
    }, [plat, siteStation])
    return (
        <div className="flex justify-center" >
            <div className="hidden" >
                <div>
                    NEXT_PUBLIC_ENV{process.env.NEXT_PUBLIC_ENV}
                </div>
                <div>
                    SERVER_ENV: {process.env.SERVER_ENV}
                </div>
            </div>
            {lang === 'ja' ? <h1 className="hidden" >
                THE CKBヘルプガイド
            </h1> : null}
            <div className="pc:w-[1200px] mo:w-[100%] pad:w-[100%]" >
                <div className="mo:bg-white pc:mt-[16px] pad:mt-[16px] pc:mb-[16px] pad:mb-[16px] mo:!py-[0px]" >
                    <Breadcrumb
                        className="mo:py-[8px] mo:px-[12px]"
                        dataSource={[
                            { title: 'TOP', href: 'https://s.theckb.com' },
                            { title: t('帮助中心'), href: `/${lang}/help` },
                        ]}
                    />
                </div>
                <Search
                    className="mb-[16px] mo:mb-0"
                    value={searchKeywords}
                    onChange={setSearchKeywords}
                    onSearch={async () => {
                        if (!searchKeywords) {
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
                                    if (item?.contentList?.length) {
                                        return (item.contentList ?? []).map(it => {
                                            return {
                                                label: it.title!,
                                                // value: it.contentUrl!,
                                                value: it.supportCenterContentId! as unknown as string,
                                                contentType: item.contentType as any
                                            }
                                        })
                                    }
                                    return (item.childrenList ?? []).map(it => {
                                        return {
                                            label: it.subject!,
                                            // value: it.supportCenterSubjectId! as unknown as string,
                                            value: it.path! as unknown as string,
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