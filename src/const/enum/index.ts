/*
 * @Author: shiguang
 * @Date: 2023-04-26 10:22:04
 * @LastEditors: lihwang_wf@126.com
 * @LastEditTime: 2023-12-05 19:06:45
 * @Description: 56
 */

export enum ENUM_PICK_MAP_TYPE {
    /** 选择 map 中部分 key 映射到 options */
    PICK = 1,
    /** 剔除 map 中部分 key 映射到 options */
    OMIT = 2,
    /** 所有 map 中 key 映射到 options */
    ALL = 3
}




export enum ENUM_PAGE {
    HOME="/index/pure",
  /** 登录账号管理 */
  SETUP_ACCOUNT = '/vip/setupUser',
  /** 店铺采购管理 */
  SETUP_SHOP = '/authorized/setupShop',
  /** 我收藏的商品/店铺 */
  PRODUCT_COLLECT = '/product/CollectProduct',
  /** 我买过的商品/店铺 */
  PRODUCT_AFTER_PURCHASE = '/product/AfterPurchase',
  /** 我看过的商品/店铺 */
  PRODUCT_FOOT_PRINT = '/product/FootPrint',
  /** 我的钱包 */
  FUND_STORE_FUND = '/fund/StoreFund',
  /** 帮助 */
  HELP = '/help',
  /** oem 工作台 */
  WORKER_SPACE = '/user/UserCenter',
  /** oem 会员中心 */
  VIP_LEVEL = '/vip/VipLevel',
  /** oem 推广联盟 */
  MY_PROMOTION = '/smc/promotion/Index?redirect=MyPromotion&lang=jp',
  /** oem 购物车 */
  SHOP_CART = '/shopcart',
  /** oem 购物车 */
  INFORMATION = '/vip/Information',
  /** 登录 */
  LOGIN = "/login",
  /** 注册 */
  REGISTER = "/signup"
}

/** 系统类型 1-D2C; 2-B2B （后端字段 system_source） */
export enum ENUM_SYSTEM_SOURCE {
    /** D2C */
    D2C = 1,
    /** B2B */
    B2B = 2
}

/** 主子账号类型 （后端字段 account_type） */
export enum ENUM_ACCOUNT_TYPE {
    /** 主账号 */
    PARENT = 1,
    /** 子账号 */
    CHILD = 2
}

/** 页面配置 */
export interface PageConfig {
    /** 登录账号管理 */
    [ENUM_PAGE.SETUP_ACCOUNT]: {};
    /** 店铺采购管理 */
    [ENUM_PAGE.SETUP_SHOP]: {};
    /** 我收藏的商品/店铺 */
    [ENUM_PAGE.PRODUCT_COLLECT]: {};
    /** 我买过的商品/店铺 */
    [ENUM_PAGE.PRODUCT_AFTER_PURCHASE]: {};
    /** 我买过的商品/店铺 */
    [ENUM_PAGE.PRODUCT_FOOT_PRINT]: {};
    /** 我的钱包 */
    [ENUM_PAGE.FUND_STORE_FUND]: {};
    /** 帮助 */
    [ENUM_PAGE.HELP]: {
        query: {
            tab: number;
            /** tab 下面左侧tab 的 id */
            id: number;
        };
    };
    /** 报价信息 */
    [ENUM_PAGE.QUOTATION_INFO]: {
        query?: {
            rowItem?: string;
        };
    };
    /** 添加寻源单 */
    [ENUM_PAGE.ADD_FIND_SOURCE]: {
        query?: {
            searchSourceOrderId?: number;
        };
    };
    /** 寻源单详情 */
    [ENUM_PAGE.FIND_SOURCE_DETAIL]: {
        query?: {
            searchSourceOrderId?: number;
        };
    };
    /** 编辑寻源单 */
    [ENUM_PAGE.EDIT_FIND_SOURCE]: {
        query?: {
            searchSourceOrderId?: number;
        };
    };
    /** 寻源商品列表 */
    [ENUM_PAGE.OEM_GOODS_LIST]: {};
    /** oem 寻源列表 */
    [ENUM_PAGE.OEM_FIND_SOURCE_LIST]: {};
    /** oem 工作台 */
    [ENUM_PAGE.WORKER_SPACE]: {};
    /** oem 会员中心 */
    [ENUM_PAGE.VIP_LEVEL]: {};
    /** oem 推广联盟 */
    [ENUM_PAGE.MY_PROMOTION]: {};
    [ENUM_PAGE.SHOP_CART]: {};
    [ENUM_PAGE.INFORMATION]: {};
}

/** 寻源列表加购类型 */
export enum ENMU_ADD_CART_TYPE {
    /** 加购样品 */
    SAMPLE = 1,
    /** 加购大货 */
    BLUK = 2,
    /** 复购样品 */
    RE_SAMPLE = 3,
    /** 复购大货 */
    RE_BLUK = 4
}

/* 报价操作类型 */
export enum ENMU_PRICE_OPERATE {
    /* 拒绝新报价 */
    REJECT = 0,
    /* 接受新报价 */
    ACCEPT = 1
}

/** 贷款结算方式 */
export enum ENMU_PAYMENT_TYPE {
    /** 一次性扣款 */
    ONE_TIME_PAYMENT = 0,
    /** 按账期扣款 */
    INSTALLMENT_PAYMENT = 1
}


/** 未登录限制 */
export enum NO_LOGIN_RESTRICTION_TYPE {
    /** 可查看全文 */
    CHECK_ALL=1,
    /** 部分可查看 */
    CHECK_PART=2,
    /** 不可查看 */
    CHECK_DISABLE=3
}

/** 未入会限制 */
export enum NO_MEMBERSHIP_RESTRICTION_TYPE {
    /** 可查看全文 */
    CHECK_ALL=1,
    /** 部分可查看 */
    CHECK_PART=2,
    /** 不可查看 */
    CHECK_DISABLE=3
}

export {};
