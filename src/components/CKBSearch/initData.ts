import { Site } from "@/const";
import { getLang } from "@/utils/language";
import { useTranslation } from "@/i18n/client";
import { Lang, Local } from "@/i18n/settings";
/**
 * 商品搜索 语言枚举
 */
export enum SearchLangType {
  /** 日文 */
  JA = '1',
  /** 中文 */
  ZH = '2',
  /** 韩文 */
  KR = '3',
  /** 英文 */
  EN = '4',
}

/**
 * 获取语言选项
 */
export const  getSearchLangType=(lang:Local)=>{
  return {
    [Local.JA]: SearchLangType.JA, // 日语
    [Local.KO]: SearchLangType.KR, // 韩语
    [Local.EN]: SearchLangType.EN // 英语
  }[lang]
}


/** 获取语言选项 */
export  const useLangOptions=(site:Site)=>{
  const {t}=useTranslation()
  return [
    {
      value: {
        [Site.JA]: SearchLangType.JA, // 日语
        [Site.KO]: SearchLangType.KR, // 韩语
        [Site.EN]: SearchLangType.EN // 英语
      }[site],
      label: {
        [Site.JA]: '日本语入力',
        [Site.KO]: '한국어 입력',
        [Site.EN]: 'English'
      }[site]
    },
    {
      value: SearchLangType.ZH,
      label: t('请输入中文')
    }
  ]
}


// 排序选项
export const sortData: any = {
  // 淘宝
  TB: [
    {
      label: '综合',
      value: ''
    },
    {
      label: '销量',
      value: 'sale-desc'
    },
    {
      label: '信用',
      value: 'credit-desc'
    },
    {
      label: '价格',
      value: 'price-desc'
    }
  ],
  // 天猫
  TM: [
    {
      label: '综合',
      value: ''
    },
    {
      label: '人气',
      value: 'rq'
    },
    {
      label: '新品',
      value: 'new'
    },
    {
      label: '销量',
      value: 'd'
    },
    {
      label: '价格',
      value: 'p'
    }
  ],
  // 1688
  AM: [
    {
      label: '综合',
      value: ''
    },
    {
      label: '成交额',
      value: 'va_rmdarkgmv30'
    },
    {
      label: '价格',
      value: 'price'
    }
  ]
}

// 其他条件选项
export const otherData: any = {
  // 淘宝
  TB: [
    {
      label: '包邮',
      value: 'baoyou=1'
    },
    {
      label: '赠送退货运费险',
      value: 'auction_tag[]=385'
    },
    {
      label: '新品',
      value: 'auction_tag[]=1154'
    },
    {
      label: '正品保障',
      value: 'user_type=1'
    },
    {
      label: '公益宝贝',
      value: 'gybb=1'
    },
    {
      label: '7+天内退货',
      value: 'auction_tag[]=4806'
    }
  ],
  // 天猫
  TM: [
    {
      label: '包邮',
      value: 'post_fee=-1'
    },
    {
      label: '折扣',
      value: 'miaosha=1'
    },
    {
      label: '搭配满减',
      value: 'combo=1'
    },
    {
      label: '满就减',
      value: 'filter_mj=1'
    },
    {
      label: '货到付款',
      value: 'support_cod=1'
    }
  ],
  // 1688
  AM: [
    {
      label: '48小时内发货',
      value: 'extendProperties=buyerProtection:essxsfh,buyerProtection:ssbxsfh'
    },
    {
      label: '实力商家',
      value: 'memberTags=205185'
    },
    {
      label: '超级工厂',
      value: 'memberTags=3938689'
    },
    {
      label: '加工定制',
      value: 'offerTags=1803842'
    }
  ]
}

export const externalLinks:any= {
  'TB': 'https://s.taobao.com/search?',
  'TM': 'https://list.tmall.com/search_product.htm?',
  'AM': 'https://s.1688.com/selloffer/offer_search.htm?'
}


export const menu1Items = [
  { label: "采购来源", key: "" },
  { label: "1688", key: "AM" },
  { label: "淘宝", key: "TB" },
  { label: "Tmall", key: "TM" },
];

export const pluginImg={
  [Local.JA]:{
    plugin1:'https://static-s.theckb.com/BusinessMarket/Client/plugin/plugin1.png',
    plugin2:'https://static-s.theckb.com/BusinessMarket/Client/plugin/plugin2.png',
    footer:'https://static-s.theckb.com/BusinessMarket/Client/plugin/plugin-btn.png'
  },
  [Local.EN]:{
    plugin1:'https://static-s.theckb.com/BusinessMarket/Client/plugin/en-plugin1.png',
    plugin2:'https://static-s.theckb.com/BusinessMarket/Client/plugin/en-plugin2.png',
    footer:'https://static-s.theckb.com/BusinessMarket/Client/plugin/en-plugin-btn.png',
  },
  [Local.KO]:{
    plugin1:'https://static-s.theckb.com/BusinessMarket/Client/plugin/Kr-plugin1.png',
    plugin2:'https://static-s.theckb.com/BusinessMarket/Client/plugin/Kr-plugin2.png',
    footer:'https://static-s.theckb.com/BusinessMarket/Client/plugin/Kr-plugin-btn.png',
  }
}