import { Local } from "@/i18n/settings";
// import

export const bannerData={
  [Local.EN]:{
    B2B:'https://static-s.theckb.com/BusinessMarket/Client/frag-bg-b2b-en.png',
    D2C:'https://static-s.theckb.com/BusinessMarket/Client/frag-bg-d2c-en.png',
  },
  [Local.JA]:{
    B2B:'https://static-s.theckb.com/BusinessMarket/Client/frag/frag-bg1.jpg',
    D2C:'https://static-s.theckb.com/BusinessMarket/Client/frag/frag-bg.jpg',
  },
  [Local.KO]:{
    B2B:'https://static-s.theckb.com/BusinessMarket/Client/frag/frag_bg_2b_ko.png',
    D2C:'https://static-s.theckb.com/BusinessMarket/Client/frag/frag_bg_2c_ko.png',
  }
}

export interface NavItem {
  label: string;
  value: number;
}

/** 青蛙频道nav */
export const navList:NavItem[] = [
  {
    label: '全部',
    value: -1
  },
  {
    label: '采购相关',
    value: 1
  },
  {
    label: '物流相关',
    value: 2
  },
  {
    label: '优惠相关',
    value: 3
  },
  {
    label: 'OME相关',
    value: 4
  },
  {
    label: '他社合作相关',
    value: 5
  },
  {
    label: '其他',
    value: 0
  }
]