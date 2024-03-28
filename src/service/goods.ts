/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** AdjustTranslateReqDTO */
export interface AdjustTranslateReqDTO {
  list?: TranslateCommonTextReqDTO[];
}

/** BaseQueryPage */
export interface BaseQueryPage {
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
}

/** BizResponse */
export interface BizResponse {
  code?: string;
  data?: object;
  msg?: string;
  success?: boolean;
}

/** BrandBannnerQueryRespDTO */
export interface BrandBannnerQueryRespDTO {
  /**
   * 品牌编号
   * @format int64
   */
  brandId?: number;
  /** 品牌Logo */
  brandLogo?: string;
  /** 品牌名称 */
  brandName?: string;
  /** 展示商品主图 */
  displayedProductMainImg?: string;
}

/** BrandDisplayedProductImgDTO */
export interface BrandDisplayedProductImgDTO {
  /**
   * 图片高
   * @format int32
   */
  height?: number;
  /** 主图标识  true：是， false：不是 */
  mainImgFlag?: boolean;
  /** 图片url */
  url?: string;
  /**
   * 图片宽
   * @format int32
   */
  width?: number;
}

/** BrandInfoDTO */
export interface BrandInfoDTO {
  /** @format int32 */
  authStatus?: number;
  /** @format int64 */
  brandId?: number;
  brandName?: string;
  /** @format int32 */
  brandStatus?: number;
  /** @format int32 */
  hasReleased?: number;
  /** @format int32 */
  isAuthorizing?: number;
}

/** BrandInfoReqDTO */
export interface BrandInfoReqDTO {
  productCodeList?: string[];
  shopCodeList?: string[];
  /** @format int64 */
  superCustomerId?: number;
}

/** BrandInfoRespDTO */
export interface BrandInfoRespDTO {
  brandInfo?: BrandInfoDTO;
  productCode?: string;
  shopCode?: string;
}

/** BrandItemDTO */
export interface BrandItemDTO {
  /**
   * 主键id
   * @format int64
   */
  brandId?: number;
  /** 品牌名称 */
  brandName?: string;
}

/**
 * BrandManageDetailRespDTO
 * 后台管理-品牌详情
 */
export interface BrandManageDetailRespDTO {
  /** 最大平均客单价 */
  averagePriceMax?: number;
  /** 最小平均客单价 */
  averagePriceMin?: number;
  /**
   * 签约状态 0-未签订、1-已签订
   * @format int32
   */
  brandAuthContractStatus?: number;
  /**
   * 品牌授权有效期结束时间
   * @format date-time
   */
  brandAuthPeriodEnd?: string;
  /**
   * 品牌授权有效期开始时间
   * @format date-time
   */
  brandAuthPeriodStart?: string;
  /**
   * 品牌授权状态 0未生效、1生效中、2已过期
   * @format int32
   */
  brandAuthStatus?: number;
  /** 品牌授权类型 0-普通授权、1-独家授权、2-简易贩卖授权 */
  brandAuthTypeList?: number[];
  /** 品牌理念(中文) */
  brandConceptCn?: string;
  /** 品牌理念(英文) */
  brandConceptEn?: string;
  /** 品牌理念(日文) */
  brandConceptJp?: string;
  /** 品牌理念(韩文) */
  brandConceptKr?: string;
  /**
   * 主键id
   * @format int64
   */
  brandId?: number;
  /** 品牌logo */
  brandLogo?: string;
  /** 品牌说明书(中文) */
  brandManualCn?: string;
  /** 品牌说明书(英文) */
  brandManualEn?: string;
  /** 品牌说明书(日文) */
  brandManualJp?: string;
  /** 品牌说明书(韩文) */
  brandManualKr?: string;
  /** 品牌名称 */
  brandName?: string;
  /** 店铺列表 */
  brandShopList?: BrandShopRespDTO[];
  /**
   * 品牌发布状态 0草稿 1未发布 2已发布
   * @format int32
   */
  brandStatus?: number;
  /** 品牌风格 */
  brandStyleList?: BrandStyleRespDTO[];
  /**
   * 品牌类别 0:店铺 1:商品
   * @format int32
   */
  brandType?: number;
  /**
   * 是否可联名：0否 1是
   * @format int32
   */
  canJointName?: number;
  /** 市 */
  city?: string;
  /** 国家 */
  country?: string;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  creatorId?: string;
  creatorName?: string;
  /** 客户授权条件(中文) */
  customerAuthConditionCn?: string;
  /** 客户授权条件(英文) */
  customerAuthConditionEn?: string;
  /** 客户授权条件(日文) */
  customerAuthConditionJp?: string;
  /** 客户授权条件(韩文) */
  customerAuthConditionKr?: string;
  /** 客户授权类型 0普通授权 1独家授权 2不可授权 */
  customerAuthTypeList?: number[];
  /** 开拓人 */
  developPerson?: string;
  /**
   * 开拓方式
   * @format int32
   */
  developWay?: number;
  /** 展示的商品主图 */
  displayedProductImgList?: BrandDisplayedProductImgDTO[];
  editorId?: string;
  editorName?: string;
  /**
   * 是否删除：0未删除 1已删除
   * @format int32
   */
  isDeleted?: number;
  /** 主营客户端类目 */
  mainCategoryFrontList?: ProductCategoryFrontendRespDTO[];
  /** 主营类目 */
  mainCategoryIdList?: string[];
  /** 省 */
  province?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/**
 * BrandManageInfoRespDTO
 * 后台管理-品牌查询列表
 */
export interface BrandManageInfoRespDTO {
  /** 最大平均客单价 */
  averagePriceMax?: number;
  /** 最小平均客单价 */
  averagePriceMin?: number;
  /**
   * 签约状态 0-未签订、1-已签订
   * @format int32
   */
  brandAuthContractStatus?: number;
  /**
   * 品牌授权有效期结束时间
   * @format date-time
   */
  brandAuthPeriodEnd?: string;
  /**
   * 品牌授权有效期开始时间
   * @format date-time
   */
  brandAuthPeriodStart?: string;
  /**
   * 品牌授权状态 0未生效、1生效中、2已过期
   * @format int32
   */
  brandAuthStatus?: number;
  /** 品牌授权类型 0-普通授权、1-独家授权、2-简易贩卖授权 */
  brandAuthTypeList?: number[];
  /** 品牌理念(中文) */
  brandConceptCn?: string;
  /** 品牌理念(英文) */
  brandConceptEn?: string;
  /** 品牌理念(日文) */
  brandConceptJp?: string;
  /** 品牌理念(韩文) */
  brandConceptKr?: string;
  /**
   * 主键id
   * @format int64
   */
  brandId?: number;
  /** 品牌logo */
  brandLogo?: string;
  /** 品牌说明书(中文) */
  brandManualCn?: string;
  /** 品牌说明书(英文) */
  brandManualEn?: string;
  /** 品牌说明书(日文) */
  brandManualJp?: string;
  /** 品牌说明书(韩文) */
  brandManualKr?: string;
  /** 品牌名称 */
  brandName?: string;
  /**
   * 品牌发布状态 0草稿 1未发布 2已发布
   * @format int32
   */
  brandStatus?: number;
  /** 品牌风格 */
  brandStyleList?: BrandStyleRespDTO[];
  /**
   * 品牌类别 0:店铺 1:商品
   * @format int32
   */
  brandType?: number;
  /**
   * 是否可联名：0否 1是
   * @format int32
   */
  canJointName?: number;
  /** 市 */
  city?: string;
  /** 国家 */
  country?: string;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  creatorId?: string;
  creatorName?: string;
  /** 客户授权条件(中文) */
  customerAuthConditionCn?: string;
  /** 客户授权条件(英文) */
  customerAuthConditionEn?: string;
  /** 客户授权条件(日文) */
  customerAuthConditionJp?: string;
  /** 客户授权条件(韩文) */
  customerAuthConditionKr?: string;
  /** 客户授权类型 0普通授权 1独家授权 2不可授权 */
  customerAuthTypeList?: number[];
  /** 开拓人 */
  developPerson?: string;
  /**
   * 开拓方式
   * @format int32
   */
  developWay?: number;
  /** 展示的商品主图 */
  displayedProductImgList?: BrandDisplayedProductImgDTO[];
  editorId?: string;
  editorName?: string;
  /**
   * 是否删除：0未删除 1已删除
   * @format int32
   */
  isDeleted?: number;
  /** 主营客户端类目 */
  mainCategoryFrontList?: ProductCategoryFrontendRespDTO[];
  /** 主营类目 */
  mainCategoryIdList?: string[];
  /** 省 */
  province?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/**
 * BrandManageQueryReqDTO
 * 品牌管理查询
 */
export interface BrandManageQueryReqDTO {
  /** 均价范围-最大平均客单价 */
  averagePriceMax?: number;
  /** 均价范围-最小平均客单价 */
  averagePriceMin?: number;
  /**
   * 签约状态 0-未签订、1-已签订
   * @format int32
   */
  brandAuthContractStatus?: number;
  /**
   * 品牌授权状态 0未生效、1生效中、2已过期
   * @format int32
   */
  brandAuthStatus?: number;
  /**
   * 品牌授权类型 0-普通授权、1-独家授权
   * @format int32
   */
  brandAuthType?: number;
  /** @format int64 */
  brandId?: number;
  brandIdList?: number[];
  /** 品牌名称 */
  brandName?: string;
  /**
   * 品牌发布状态 0草稿 1未发布 2已发布
   * @format int32
   */
  brandStatus?: number;
  /**
   * 品牌风格id
   * @format int64
   */
  brandStyleId?: number;
  /**
   * 品牌类型 0:店铺 1:商品
   * @format int32
   */
  brandType?: number;
  /**
   * 客户授权类型 0普通授权 1独家授权 2不可授权
   * @format int32
   */
  customerAuthType?: number;
  /** 主营类目 */
  mainCategoryId?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** 来源平台 */
  platformType?: string;
  /** 店铺url */
  shopUrl?: string;
  /** @format int32 */
  startIndex?: number;
}

/**
 * BrandOperationReqDTO
 * 品牌操作
 */
export interface BrandOperationReqDTO {
  /**
   * 品牌id
   * @format int64
   */
  brandId?: number;
  /** 是否查询店铺商品数量  false-不查询，true-查询 */
  queryShopGoodsNum?: boolean;
}

/**
 * BrandReqDTO
 * 品牌创建
 */
export interface BrandReqDTO {
  /** 最大平均客单价 */
  averagePriceMax?: number;
  /** 最小平均客单价 */
  averagePriceMin?: number;
  /**
   * 签约状态 0-未签订、1-已签订
   * @format int32
   */
  brandAuthContractStatus?: number;
  /**
   * 品牌授权有效期结束时间
   * @format date-time
   */
  brandAuthPeriodEnd?: string;
  /**
   * 品牌授权有效期开始时间
   * @format date-time
   */
  brandAuthPeriodStart?: string;
  /**
   * 品牌授权状态 0未生效、1生效中、2已过期
   * @format int32
   */
  brandAuthStatus?: number;
  /** 品牌授权类型 0-普通授权、1-独家授权、2-简易贩卖授权 */
  brandAuthTypeList?: number[];
  /** 品牌理念(中文) */
  brandConceptCn?: string;
  /** 品牌理念(英文) */
  brandConceptEn?: string;
  /** 品牌理念(日文) */
  brandConceptJp?: string;
  /** 品牌理念(韩文) */
  brandConceptKr?: string;
  /**
   * 品牌id
   * @format int64
   */
  brandId?: number;
  /** 品牌logo */
  brandLogo?: string;
  /** 品牌说明书(中文) */
  brandManualCn?: string;
  /** 品牌说明书(英文) */
  brandManualEn?: string;
  /** 品牌说明书(日文) */
  brandManualJp?: string;
  /** 品牌说明书(韩文) */
  brandManualKr?: string;
  /** 品牌名称 */
  brandName?: string;
  /** 店铺列表 */
  brandShopList?: BrandShopReqDTO[];
  /**
   * 品牌发布状态 0草稿 1未发布 2已发布
   * @format int32
   */
  brandStatus?: number;
  /** 品牌风格 */
  brandStyleIdList?: number[];
  /**
   * 品牌类别 0:店铺 1:商品
   * @format int32
   */
  brandType?: number;
  /**
   * 是否可联名：0否 1是
   * @format int32
   */
  canJointName?: number;
  /** 市 */
  city?: string;
  /** 国家 */
  country?: string;
  creatorId?: string;
  creatorName?: string;
  /** 客户授权条件(中文) */
  customerAuthConditionCn?: string;
  /** 客户授权条件(英文) */
  customerAuthConditionEn?: string;
  /** 客户授权条件(日文) */
  customerAuthConditionJp?: string;
  /** 客户授权条件(韩文) */
  customerAuthConditionKr?: string;
  /** 客户授权类型 0普通授权 1独家授权 2不可授权 */
  customerAuthTypeList?: number[];
  /** 开拓人 */
  developPerson?: string;
  /**
   * 开拓方式
   * @format int32
   */
  developWay?: number;
  /** 展示的商品主图 */
  displayedProductImgList?: BrandDisplayedProductImgDTO[];
  editorId?: string;
  editorName?: string;
  /**
   * 是否删除：0未删除 1已删除
   * @format int32
   */
  isDeleted?: number;
  /** 主营类目 */
  mainCategoryIdList?: string[];
  /** 省 */
  province?: string;
}

/**
 * BrandSetInfoRespDTO
 * 客户端-品牌集查询
 */
export interface BrandSetInfoRespDTO {
  /**
   * 授权有效期结束时间
   * @format date-time
   */
  authEndTime?: string;
  /**
   * 授权有效期开始时间
   * @format date-time
   */
  authStartTime?: string;
  /** 授权书链接 */
  authUrl?: string;
  /** 最大平均客单价 */
  averagePriceMax?: number;
  /** 最小平均客单价 */
  averagePriceMin?: number;
  /** 品牌理念(中文) */
  brandConceptCn?: string;
  /** 品牌理念(英文) */
  brandConceptEn?: string;
  /** 品牌理念(日文) */
  brandConceptJp?: string;
  /** 品牌理念(韩文) */
  brandConceptKr?: string;
  /**
   * 品牌id
   * @format int64
   */
  brandId?: number;
  /** 品牌logo */
  brandLogo?: string;
  /** 品牌说明书(中文) */
  brandManualCn?: string;
  /** 品牌说明书(英文) */
  brandManualEn?: string;
  /** 品牌说明书(日文) */
  brandManualJp?: string;
  /** 品牌说明书(韩文) */
  brandManualKr?: string;
  /** 品牌名称 */
  brandName?: string;
  /**
   * 品牌状态 0-草稿 1-未发布 2-已发布
   * @format int32
   */
  brandStatus?: number;
  /** 品牌风格 */
  brandStyleList?: BrandStyleRespDTO[];
  /**
   * 品牌类别 0:店铺 1:商品
   * @format int32
   */
  brandType?: number;
  /**
   * 是否可联名：0否 1是
   * @format int32
   */
  canJointName?: number;
  /** 市 */
  city?: string;
  /** 国家 */
  country?: string;
  /** @format date-time */
  createTime?: string;
  /** 客户授权条件(中文) */
  customerAuthConditionCn?: string;
  /** 客户授权条件(英文) */
  customerAuthConditionEn?: string;
  /** 客户授权条件(日文) */
  customerAuthConditionJp?: string;
  /** 客户授权条件(韩文) */
  customerAuthConditionKr?: string;
  /** 当前客户授权状态 */
  customerAuthStatus?: string;
  /** 客户授权类型 0普通授权 1独家授权 2不可授权 */
  customerAuthTypeList?: number[];
  /** 展示的商品主图 */
  displayedProductImgList?: BrandDisplayedProductImgDTO[];
  /** 是否收藏 */
  favorite?: boolean;
  /** 主营客户端类目 */
  mainCategoryFrontList?: ProductCategoryFrontendRespDTO[];
  /** 主营类目 */
  mainCategoryIdList?: string[];
  /** 省 */
  province?: string;
  /** @format date-time */
  updateTime?: string;
}

/**
 * BrandSetQueryReqDTO
 * 客户端-品牌集查询
 */
export interface BrandSetQueryReqDTO {
  /** 均价范围-最大平均客单价 */
  averagePriceMax?: number;
  /** 均价范围-最小平均客单价 */
  averagePriceMin?: number;
  /** @format int32 */
  brandAuthStatus?: number;
  /**
   * 品牌
   * @format int64
   */
  brandId?: number;
  brandIdList?: number[];
  /** @format int32 */
  brandStatus?: number;
  /**
   * 品牌风格
   * @format int64
   */
  brandStyleId?: number;
  /**
   * 可授权形式 0普通授权 1独家授权 2不可授权
   * @format int32
   */
  customerAuthType?: number;
  /** @format int64 */
  customerId?: number;
  /** 主营类目 */
  mainCategoryId?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** 采购市场(来源平台) */
  platformType?: string;
  /**
   * 商品前端类目ID
   * @format int64
   */
  productCategoryFrontendId?: number;
  /** @format int32 */
  startIndex?: number;
  /** 站点 */
  stationCode?: string;
  /** @format int64 */
  superCustomerId?: number;
}

/**
 * BrandSetSearchReqDTO
 * 客户端-品牌集搜索
 */
export interface BrandSetSearchReqDTO {
  /** 均价范围-最大平均客单价 */
  averagePriceMax?: number;
  /** 均价范围-最小平均客单价 */
  averagePriceMin?: number;
  /** @format int32 */
  brandAuthStatus?: number;
  /**
   * 品牌
   * @format int64
   */
  brandId?: number;
  brandIdList?: number[];
  /** @format int32 */
  brandStatus?: number;
  /**
   * 品牌风格
   * @format int64
   */
  brandStyleId?: number;
  /**
   * 可授权形式 0普通授权 1独家授权 2不可授权
   * @format int32
   */
  customerAuthType?: number;
  /** @format int64 */
  customerId?: number;
  /** 关键字 */
  keyword?: string;
  /**
   * 语言
   * @format int32
   */
  langType?: number;
  /** 主营类目 */
  mainCategoryId?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** 采购市场(来源平台) */
  platformType?: string;
  /**
   * 商品前端类目ID
   * @format int64
   */
  productCategoryFrontendId?: number;
  /** @format int32 */
  startIndex?: number;
  /** 站点 */
  stationCode?: string;
  /** @format int64 */
  superCustomerId?: number;
}

/**
 * BrandShopReqDTO
 * 品牌创建-店铺
 */
export interface BrandShopReqDTO {
  /** 品牌联系方式 */
  brandContactInfo?: string;
  /** 品牌联系人 */
  brandContactPerson?: string;
  /** 品牌折扣 */
  brandDiscount?: string;
  /**
   * 品牌id
   * @format int64
   */
  brandId?: number;
  /**
   * 品牌名称
   * @format int64
   */
  brandShopId?: number;
  /** @format date-time */
  createTime?: string;
  /** 介绍人提点 */
  introducerRebate?: string;
  /**
   * 是否删除：0未删除 1已删除
   * @format int32
   */
  isDeleted?: number;
  /** 来源平台 */
  platformType?: string;
  /** 店铺code */
  shopCode?: string;
  /** 店铺名称 */
  shopName?: string;
  /** 店铺url */
  shopUrl?: string;
  /** @format date-time */
  updateTime?: string;
}

/** BrandShopRespDTO */
export interface BrandShopRespDTO {
  /** 品牌联系方式 */
  brandContactInfo?: string;
  /** 品牌联系人 */
  brandContactPerson?: string;
  /** 品牌折扣 */
  brandDiscount?: string;
  /**
   * 品牌id
   * @format int64
   */
  brandId?: number;
  /**
   * 品牌店铺id
   * @format int64
   */
  brandShopId?: number;
  /** @format date-time */
  createTime?: string;
  /**
   * 商品数量
   * @format int64
   */
  goodsNum?: number;
  /** 介绍人提点 */
  introducerRebate?: string;
  /**
   * 是否删除：0未删除 1已删除
   * @format int32
   */
  isDeleted?: number;
  /** 来源平台 */
  platformType?: string;
  /** 店铺code */
  shopCode?: string;
  /** 店铺名称 */
  shopName?: string;
  /** 店铺url */
  shopUrl?: string;
  /** @format date-time */
  updateTime?: string;
}

/** BrandStyleReqDTO */
export interface BrandStyleReqDTO {
  /** @format int64 */
  creatorId?: number;
  /** @format int64 */
  editorId?: number;
  /** @format int64 */
  id?: number;
  /** 风格名称(中文) */
  nameCn?: string;
  /** 风格名称(英文) */
  nameEn?: string;
  /** 风格名称(日文) */
  nameJp?: string;
  /** 风格名称(韩文) */
  nameKr?: string;
}

/** BrandStyleRespDTO */
export interface BrandStyleRespDTO {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 风格名称(中文) */
  nameCn?: string;
  /** 风格名称(英文) */
  nameEn?: string;
  /** 风格名称(日文) */
  nameJp?: string;
  /** 风格名称(韩文) */
  nameKr?: string;
}

/** CheckSearchAgreeVO */
export interface CheckSearchAgreeVO {
  /**
   * 是否满意 0-否 1-是
   * @format int32
   */
  agreeFlag?: number;
  /**
   * 类目id
   * @format int64
   */
  categoryId?: number;
  /** 不好的点 */
  comments?: string;
  /** 筛选项 */
  filters?: string;
  /** 关键词 */
  keyWords?: string;
  /**
   * 用户id
   * @format int64
   */
  superCustomerId?: number;
}

/** CustomerBehaviorProductPageReqDTO */
export interface CustomerBehaviorProductPageReqDTO {
  /** @format int32 */
  behaviorChannel?: number;
  /** @format int32 */
  behaviorFlag?: number;
  /** @format int64 */
  customerId?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
}

/** CustomerBehaviorProductRespDTO */
export interface CustomerBehaviorProductRespDTO {
  /** @format int32 */
  behaviorChannel?: number;
  /**
   * 客户行为;1-喜欢;2-不喜欢
   * @format int32
   */
  behaviorFlag?: number;
  /**
   * 黑名单加入时间
   * @format date-time
   */
  blackAddTime?: string;
  /** 黑名单原因 */
  blackReason?: string;
  /**
   * 黑名单原因编码
   * @format int32
   */
  blackReasonCode?: number;
  /**
   * 黑名单标记
   * @format int32
   */
  blackTag?: number;
  /**
   * 黑名单类型:1-商品,2-供应商,类型为2的无法解除黑名单限制
   * @format int32
   */
  blackType?: number;
  /** 黑名单操作员id */
  blackUserId?: string;
  /** 黑名单操作员 */
  blackUserName?: string;
  /**
   * 渠道
   * @format int32
   */
  channel?: number;
  /** 一件代发价 */
  consignPrice?: number;
  /** 一件代发价,当地汇率价格 */
  consignPriceJpy?: number;
  /** @format int32 */
  countryProductTag?: number;
  /** @format date-time */
  createTime?: string;
  /**
   * 是否收藏;1-已收藏;0-未收藏
   * @format int32
   */
  favoriteFlag?: number;
  /** @format int32 */
  isCkbDiscount?: number;
  jxhyPrice?: number;
  originalPrice?: number;
  platformType?: string;
  productCode?: string;
  productDetailUrl?: string;
  productMainImg?: string;
  /** 商品原销售价格 */
  productOriginPriceRange?: string;
  /** 商品原销售价格-日元 */
  productOriginPriceRangeJpy?: string;
  /** 商品阶梯价 */
  productPriceLadderList?: ProductPriceLadderRespDTO[];
  productSellPrice?: number;
  /** 商品销售价格-日元 */
  productSellPriceJpy?: number;
  /** 商品销售价格范围 */
  productSellPriceRange?: string;
  /** 商品销售价格范围-日元 */
  productSellPriceRangeJpy?: string;
  /** @format int32 */
  productTag?: number;
  productTitle?: string;
  /** 商品标题翻译; 日文 */
  productTitleEn?: string;
  /** 商品标题翻译; 日文 */
  productTitleJp?: string;
  /** 商品标题翻译; 日文 */
  productTitleKr?: string;
  /** 店铺编码 */
  shopCode?: string;
  /** 店铺主图 */
  shopMainImg?: string;
  /** 商品sku信息 */
  skuList?: SkuRespDTO[];
  stationCode?: string;
  /** @format date-time */
  updateTime?: string;
}

/** CustomerBehaviorProductSaveReqDTO */
export interface CustomerBehaviorProductSaveReqDTO {
  /** @format int32 */
  behaviorChannel?: number;
  /** @format int32 */
  behaviorFlag?: number;
  /** @format int64 */
  customerId?: number;
  productCode?: string;
}

/** CustomerBehaviorShopPageReqDTO */
export interface CustomerBehaviorShopPageReqDTO {
  /** @format int32 */
  behaviorFlag?: number;
  /** @format int64 */
  customerId?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
}

/** CustomerBehaviorShopRespDTO */
export interface CustomerBehaviorShopRespDTO {
  /** @format int32 */
  behaviorChannel?: number;
  /** @format int32 */
  behaviorFlag?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int32 */
  favoriteFlag?: number;
  platformType?: string;
  shopCode?: string;
  shopMainImg?: string;
  shopName?: string;
  shopUrl?: string;
  /** @format date-time */
  updateTime?: string;
}

/** CustomerBehaviorShopSaveReqDTO */
export interface CustomerBehaviorShopSaveReqDTO {
  /** @format int32 */
  behaviorChannel?: number;
  /** @format int32 */
  behaviorFlag?: number;
  /** @format int64 */
  customerId?: number;
  shopCode?: string;
}

/** CustomerBoughtProductReqDTO */
export interface CustomerBoughtProductReqDTO {
  /** @format int64 */
  customerId?: number;
  descendOrder?: boolean;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  sortType?: string;
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
}

/** CustomerBoughtProductRespDTO */
export interface CustomerBoughtProductRespDTO {
  /** @format int32 */
  behaviorFlag?: number;
  /**
   * 黑名单加入时间
   * @format date-time
   */
  blackAddTime?: string;
  /** 黑名单原因 */
  blackReason?: string;
  /**
   * 黑名单原因编码
   * @format int32
   */
  blackReasonCode?: number;
  /**
   * 黑名单标记
   * @format int32
   */
  blackTag?: number;
  /**
   * 黑名单类型:1-商品,2-供应商,类型为2的无法解除黑名单限制
   * @format int32
   */
  blackType?: number;
  /** 黑名单操作员id */
  blackUserId?: string;
  /** 黑名单操作员 */
  blackUserName?: string;
  /** @format int32 */
  channel?: number;
  /** 一件代发价 */
  consignPrice?: number;
  /** 一件代发价,当地汇率价格 */
  consignPriceJpy?: number;
  /** @format int32 */
  countryProductTag?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int32 */
  favoriteFlag?: number;
  /** @format int32 */
  isCkbDiscount?: number;
  jxhyPrice?: number;
  originalPrice?: number;
  platformType?: string;
  productCode?: string;
  productDetailUrl?: string;
  productMainImg?: string;
  /** 商品原销售价格 */
  productOriginPriceRange?: string;
  /** 商品原销售价格-日元 */
  productOriginPriceRangeJpy?: string;
  /** 商品阶梯价 */
  productPriceLadderList?: ProductPriceLadderRespDTO[];
  productSellPrice?: number;
  productSellPriceJpy?: number;
  /** 商品销售价格范围 */
  productSellPriceRange?: string;
  /** 商品销售价格范围-日元 */
  productSellPriceRangeJpy?: string;
  /** @format int32 */
  productSellQuantity?: number;
  /** @format int32 */
  productTag?: number;
  productTitle?: string;
  /** 商品标题翻译; 日文 */
  productTitleEn?: string;
  /** 商品标题翻译; 日文 */
  productTitleJp?: string;
  /** 商品标题翻译; 日文 */
  productTitleKr?: string;
  shopCode?: string;
  /** 店铺主图 */
  shopMainImg?: string;
  shopName?: string;
  /** 商品sku信息 */
  skuList?: SkuRespDTO[];
  stationCode?: string;
  /** @format date-time */
  updateTime?: string;
}

/** CustomerBoughtShopReqDTO */
export interface CustomerBoughtShopReqDTO {
  /** @format int64 */
  customerId?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
}

/** CustomerBoughtShopRespDTO */
export interface CustomerBoughtShopRespDTO {
  /** @format int32 */
  behaviorFlag?: number;
  /** @format int32 */
  blackReasonCode?: number;
  /** @format int32 */
  blackTag?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int32 */
  favoriteFlag?: number;
  platformType?: string;
  shopCode?: string;
  shopMainImg?: string;
  shopMajorCateCode?: string;
  shopMajorCateName?: string;
  shopName?: string;
  /** @format date-time */
  updateTime?: string;
}

/** CustomerBrandAuthApplyAuditQueryRespDTO */
export interface CustomerBrandAuthApplyAuditQueryRespDTO {
  /** 操作后状态 */
  afterStatus?: string;
  /** @format int64 */
  applyId?: number;
  /** @format int32 */
  auditFlow?: number;
  /**
   * 时间
   * @format date-time
   */
  auditTime?: string;
  /** @format date-time */
  authEndTime?: string;
  /** @format date-time */
  authStartTime?: string;
  /** 授权书链接 */
  authUrl?: string;
  /** @format int32 */
  brandAuthType?: number;
  /** 内容 */
  content?: string;
  discount?: string;
  /** 操作人 */
  editorName?: string;
  /** @format int64 */
  id?: number;
  /** @format int32 */
  isAgree?: number;
  remark?: string;
}

/** CustomerBrandAuthApplyQueryFrontRespDTO */
export interface CustomerBrandAuthApplyQueryFrontRespDTO {
  /**
   * 申请id
   * @format int64
   */
  applyId?: number;
  /** 申请状态 */
  applyStatus?: string;
  /**
   * 申请日期
   * @format date-time
   */
  applyTime?: string;
  /** 审核状态 */
  auditStatus?: string;
  /**
   * 授权有效期结束时间
   * @format date-time
   */
  authEndTime?: string;
  /**
   * 授权有效期开始时间
   * @format date-time
   */
  authStartTime?: string;
  authTime?: string;
  /** 授权书链接 */
  authUrl?: string;
  /**
   * 申请授权类型
   * @format int32
   */
  brandAuthType?: number;
  /**
   * 品牌ID
   * @format int64
   */
  brandId?: number;
  /** 品牌名称 */
  brandName?: string;
  /** 店铺URL */
  brandShopUrlList?: string[];
  /** 品牌URL */
  brandUrl?: string;
  /**
   * 是否需要联名
   * @format int32
   */
  canJoint?: number;
  /** 用途 */
  content?: string;
  /** 统一客户全名 */
  customerName?: string;
  /** @format int64 */
  id?: number;
  /** 品牌是否有效 true:有效,品牌存在 false:失效,品牌不存在 */
  invalidBrand?: boolean;
  /** 联名品牌 */
  jointBrand?: string;
  /** 联名需求描述 */
  jointContent?: string;
  /** 品牌主图 */
  mainImgUrl?: string;
  /** 客户等级名称 */
  membershipTemplateName?: string;
  /** 预计月采购额 */
  planMonthPurAmt?: number;
  /** 预计年采购额 */
  planYearPurAmt?: number;
  /** 平台链接 */
  platformUrl?: string;
  /** 其他补充说明 */
  remark?: string;
  /** 销售平台 */
  salePlatform?: string;
  /**
   * 客户id
   * @format int64
   */
  superCustomerId?: number;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/** CustomerBrandAuthApplyQueryReqDTO */
export interface CustomerBrandAuthApplyQueryReqDTO {
  /**
   * 申请日期结束时间
   * @format date-time
   */
  applyEndTime?: string;
  /**
   * 申请日期开始时间
   * @format date-time
   */
  applyStartTime?: string;
  /** 申请状态 WAIT待提交 AUDIT审核中 SUCCESS已授权 CANCEL已取消 REJECT已拒绝 OVERDUE已过期 */
  applyStatus?: string;
  /**
   * 审核节点 用于区别初审终审页面 1:初审 2:终审
   * @format int32
   */
  auditFlow?: number;
  /** 审核状态 WAIT待审核 SUCCESS审核通过 REJECT审核拒绝 */
  auditStatus?: string;
  /**
   * 申请授权类型 0普通授权 1独家授权
   * @format int32
   */
  brandAuthType?: number;
  /** 品牌名称 */
  brandName?: string;
  /** 客户名称 */
  customerName?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  /** 站点 日本:JapanStation 韩国KoreaStation 英国UkStation */
  station?: string;
  /**
   * 客户号
   * @format int64
   */
  superCustomerId?: number;
  /**
   * 系统来源 1:d2c,2:b2b
   * @format int32
   */
  systemSource?: number;
}

/** CustomerBrandAuthApplyQueryRespDTO */
export interface CustomerBrandAuthApplyQueryRespDTO {
  /**
   * 申请id
   * @format int64
   */
  applyId?: number;
  /** 申请状态 */
  applyStatus?: string;
  /**
   * 申请日期
   * @format date-time
   */
  applyTime?: string;
  /** 审核状态 */
  auditStatus?: string;
  /**
   * 授权有效期结束时间
   * @format date-time
   */
  authEndTime?: string;
  /**
   * 授权有效期开始时间
   * @format date-time
   */
  authStartTime?: string;
  authTime?: string;
  /** 授权书链接 */
  authUrl?: string;
  /**
   * 申请授权类型
   * @format int32
   */
  brandAuthType?: number;
  /** 品牌信息 */
  brandInfo?: BrandManageInfoRespDTO;
  /** 品牌名称 */
  brandName?: string;
  /** 品牌URL */
  brandUrl?: string;
  /**
   * 是否需要联名
   * @format int32
   */
  canJoint?: number;
  /** 用途 */
  content?: string;
  /** 统一客户全名 */
  customerName?: string;
  /** @format int64 */
  id?: number;
  /** 品牌是否有效 true:有效,品牌存在 false:失效,品牌不存在 */
  invalidBrand?: boolean;
  /** 联名品牌 */
  jointBrand?: string;
  /** 联名需求描述 */
  jointContent?: string;
  /** 客户等级名称 */
  membershipTemplateName?: string;
  /** 预计月采购额 */
  planMonthPurAmt?: number;
  /** 预计年采购额 */
  planYearPurAmt?: number;
  /** 平台链接 */
  platformUrl?: string;
  /** 其他补充说明 */
  remark?: string;
  /** 销售平台 */
  salePlatform?: string;
  /**
   * 客户id
   * @format int64
   */
  superCustomerId?: number;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/** CustomerBrandAuthApplyReqDTO */
export interface CustomerBrandAuthApplyReqDTO {
  /** @format int64 */
  applyId?: number;
  /**
   * 申请授权类型 0普通授权 1独家授权
   * @format int32
   */
  brandAuthType?: number;
  /**
   * 品牌id
   * @format int64
   */
  brandId?: number;
  /**
   * 是否需要联名
   * @format int32
   */
  canJoint?: number;
  /** 用途 */
  content?: string;
  /** @format int64 */
  customerId?: number;
  /** 联名品牌 */
  jointBrand?: string;
  /** 联名需求描述 */
  jointContent?: string;
  /** @format int64 */
  mainCustomerId?: number;
  /** 预计月采购额 */
  planMonthPurAmt?: number;
  /** 预计年采购额 */
  planYearPurAmt?: number;
  /** 平台链接 */
  platformUrl?: string;
  /** 其他补充说明 */
  remark?: string;
  /** 销售平台 */
  salePlatform?: string;
  /** 站点 日本:JapanStation 韩国KoreaStation 英国UkStation */
  station?: string;
  /** 是否提交 保存不提交:false 保存并提交时:true) */
  submit?: boolean;
  /**
   * 客户id
   * @format int64
   */
  superCustomerId?: number;
  /**
   * 系统来源 1:d2c,2:b2b
   * @format int32
   */
  systemSource?: number;
}

/** CustomerBrandAuthApplyStatisticRespDTO */
export interface CustomerBrandAuthApplyStatisticRespDTO {
  /** @format int64 */
  auditCount?: number;
  /** @format int64 */
  cancelCount?: number;
  /** @format int64 */
  overdueCount?: number;
  /** @format int64 */
  rejectCount?: number;
  /** @format int64 */
  successCount?: number;
  /** @format int64 */
  totalCount?: number;
  /** @format int64 */
  waitCount?: number;
}

/** CustomerBrandAuthAuditReqDTO */
export interface CustomerBrandAuthAuditReqDTO {
  /**
   * 申请id
   * @format int64
   */
  applyId?: number;
  /**
   * 授权结束时间
   * @format date-time
   */
  authEndTime?: string;
  /**
   * 授权开始时间
   * @format date-time
   */
  authStartTime?: string;
  /** 授权链接 */
  authUrl?: string;
  /**
   * 申请授权类型 0普通授权 1独家授权
   * @format int32
   */
  brandAuthType?: number;
  /** @format int64 */
  creatorId?: number;
  creatorName?: string;
  /** 客户折扣 */
  discount?: string;
  /**
   * 审核意见 通过1 不通过0
   * @format int32
   */
  isAgree?: number;
  /** 审核备注 */
  remark?: string;
}

/** CustomerFavoriteBrandReqDTO */
export interface CustomerFavoriteBrandReqDTO {
  /**
   * 店铺编码
   * @format int64
   */
  brandId?: number;
  /** 店铺编码列表 */
  brandIdList?: number[];
  /**
   * 客户ID; 不传
   * @format int64
   */
  customerId?: number;
  /** 降序 */
  descendOrder?: boolean;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** 排序字段; 默认收藏时间 */
  sortType?: string;
  /** @format int32 */
  startIndex?: number;
}

/** CustomerFavoriteBrandRespDTO */
export interface CustomerFavoriteBrandRespDTO {
  /**
   * 收藏品牌ID
   * @format int64
   */
  brandId?: number;
  /** 品牌logo */
  brandLogo?: string;
  /** 品牌主图 */
  brandMainImg?: string;
  /** 品牌名称 */
  brandName?: string;
  /** 品牌风格 */
  brandStyle?: object[];
  /** 主营类目 */
  mainCategory?: object[];
}

/** CustomerFavoriteProductReqDTO */
export interface CustomerFavoriteProductReqDTO {
  cateCodeList?: string[];
  /** @format int64 */
  customerId?: number;
  descendOrder?: boolean;
  filterCombinationProduct?: boolean;
  filterOemProduct?: boolean;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  priceEnd?: number;
  priceStart?: number;
  /** @format int64 */
  productCategoryFrontendId?: number;
  productCode?: string;
  productCodeList?: string[];
  productDetailUrl?: string;
  productTitle?: string;
  sortType?: string;
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
}

/** CustomerFavoriteProductRespDTO */
export interface CustomerFavoriteProductRespDTO {
  /** @format int32 */
  behaviorFlag?: number;
  /**
   * 黑名单加入时间
   * @format date-time
   */
  blackAddTime?: string;
  /** 黑名单原因 */
  blackReason?: string;
  /** @format int32 */
  blackReasonCode?: number;
  /** @format int32 */
  blackTag?: number;
  /**
   * 黑名单类型:1-商品,2-供应商,类型为2的无法解除黑名单限制
   * @format int32
   */
  blackType?: number;
  /** 黑名单操作员id */
  blackUserId?: string;
  /** 黑名单操作员 */
  blackUserName?: string;
  /** @format int32 */
  channel?: number;
  /** 一件代发价 */
  consignPrice?: number;
  /** 一件代发价,当地汇率价格 */
  consignPriceJpy?: number;
  /** @format int32 */
  countryProductTag?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  customerFavoriteProductId?: number;
  /** @format int32 */
  favoriteFlag?: number;
  /** @format int32 */
  isCkbDiscount?: number;
  /**
   * 1-上架;0-下架;
   * @format int32
   */
  isOnline?: number;
  jxhyPrice?: number;
  originalPrice?: number;
  platformType?: string;
  productCode?: string;
  productDetailUrl?: string;
  productMainImg?: string;
  /** 商品原销售价格 */
  productOriginPriceRange?: string;
  /** 商品原销售价格-日元 */
  productOriginPriceRangeJpy?: string;
  /** 商品阶梯价 */
  productPriceLadderList?: ProductPriceLadderRespDTO[];
  productSellPrice?: number;
  productSellPriceJpy?: number;
  /** 商品销售价格范围 */
  productSellPriceRange?: string;
  /** 商品销售价格范围-日元 */
  productSellPriceRangeJpy?: string;
  /** @format int32 */
  productSellQuantity?: number;
  /** @format int32 */
  productTag?: number;
  productTitle?: string;
  /** 商品标题翻译; 日文 */
  productTitleEn?: string;
  /** 商品标题翻译; 日文 */
  productTitleJp?: string;
  /** 商品标题翻译; 日文 */
  productTitleKr?: string;
  shopCode?: string;
  /** 店铺主图 */
  shopMainImg?: string;
  shopName?: string;
  /** 商品sku信息 */
  skuList?: SkuRespDTO[];
  stationCode?: string;
  /** @format date-time */
  updateTime?: string;
}

/** CustomerFavoriteShopReqDTO */
export interface CustomerFavoriteShopReqDTO {
  /** @format int64 */
  customerId?: number;
  descendOrder?: boolean;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  shopCode?: string;
  shopCodeList?: string[];
  sortType?: string;
  /** @format int32 */
  startIndex?: number;
}

/** CustomerFavoriteShopRespDTO */
export interface CustomerFavoriteShopRespDTO {
  /** @format int32 */
  behaviorFlag?: number;
  /** @format int32 */
  blackReasonCode?: number;
  /** @format int32 */
  blackTag?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  customerFavoriteShopId?: number;
  /** @format int32 */
  favoriteFlag?: number;
  platformType?: string;
  shopCode?: string;
  shopMainImg?: string;
  shopMajorCateCode?: string;
  shopMajorCateName?: string;
  shopName?: string;
  /** @format date-time */
  updateTime?: string;
}

/** CustomerFocusProduct */
export interface CustomerFocusProduct {
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** @format int64 */
  id?: number;
  /**
   * 是否删除
   * @format int32
   */
  isDelete?: number;
  /**
   * 价格变动是否提醒
   * @format int32
   */
  isNotify?: number;
  /**
   * 是否上下架,0下架,1上架
   * @format int32
   */
  isOnline?: number;
  /** 最新商品价格 */
  latestProductSellPrice?: number;
  /** 平台类型 */
  platformType?: string;
  /** 商品编码 */
  productCode?: string;
  /** 商品url */
  productDetailUrl?: string;
  /** 商品主图 */
  productMainImg?: string;
  /** 商品价格 */
  productSellPrice?: number;
  /** 商品标题 */
  productTitle?: string;
  /**
   * 客户ID
   * @format int64
   */
  superCustomerId?: number;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/** CustomerFocusProductPrice */
export interface CustomerFocusProductPrice {
  /** @format int64 */
  createTime?: number;
  /** @format int32 */
  isDelete?: number;
  /** @format int32 */
  isOnline?: number;
  productCode?: string;
  productSellPrice?: number;
  time?: string;
  /** @format int64 */
  updateTime?: number;
}

/** CustomerFocusProductRespDTO */
export interface CustomerFocusProductRespDTO {
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** @format int64 */
  id?: number;
  /**
   * 是否删除
   * @format int32
   */
  isDelete?: number;
  /**
   * 是否较关注时价格降低
   * @format int32
   */
  isLow?: number;
  /**
   * 价格变动是否提醒
   * @format int32
   */
  isNotify?: number;
  /**
   * 是否上下架,0下架,1上架
   * @format int32
   */
  isOnline?: number;
  /** 最新商品价格 */
  latestProductSellPrice?: number;
  /** 平台类型 */
  platformType?: string;
  /** 商品编码 */
  productCode?: string;
  /** 商品url */
  productDetailUrl?: string;
  /** 商品主图 */
  productMainImg?: string;
  /** 商品价格 */
  productSellPrice?: number;
  /** 商品标题 */
  productTitle?: string;
  /**
   * 客户ID
   * @format int64
   */
  superCustomerId?: number;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/** CustomerFootprintProductPluginSaveReqDTO */
export interface CustomerFootprintProductPluginSaveReqDTO {
  /** @format int64 */
  customerId?: number;
  platformType?: string;
  productDetailUrl?: string;
}

/** CustomerFootprintProductReqDTO */
export interface CustomerFootprintProductReqDTO {
  /** @format int64 */
  customerId?: number;
  descendOrder?: boolean;
  filterCombinationProduct?: boolean;
  filterOemProduct?: boolean;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  sortType?: string;
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
}

/** CustomerFootprintProductRespDTO */
export interface CustomerFootprintProductRespDTO {
  /** @format int32 */
  behaviorFlag?: number;
  /**
   * 黑名单加入时间
   * @format date-time
   */
  blackAddTime?: string;
  /** 黑名单原因 */
  blackReason?: string;
  /** @format int32 */
  blackReasonCode?: number;
  /** @format int32 */
  blackTag?: number;
  /**
   * 黑名单类型:1-商品,2-供应商,类型为2的无法解除黑名单限制
   * @format int32
   */
  blackType?: number;
  /** 黑名单操作员id */
  blackUserId?: string;
  /** 黑名单操作员 */
  blackUserName?: string;
  /** @format int32 */
  channel?: number;
  /** 一件代发价 */
  consignPrice?: number;
  /** 一件代发价,当地汇率价格 */
  consignPriceJpy?: number;
  /** @format int32 */
  countryProductTag?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int32 */
  favoriteFlag?: number;
  /** @format int32 */
  isCkbDiscount?: number;
  jxhyPrice?: number;
  originalPrice?: number;
  platformType?: string;
  productCode?: string;
  productDetailUrl?: string;
  productMainImg?: string;
  /** 商品原销售价格 */
  productOriginPriceRange?: string;
  /** 商品原销售价格-日元 */
  productOriginPriceRangeJpy?: string;
  /** 商品阶梯价 */
  productPriceLadderList?: ProductPriceLadderRespDTO[];
  productSellPrice?: number;
  productSellPriceJpy?: number;
  /** 商品销售价格范围 */
  productSellPriceRange?: string;
  /** 商品销售价格范围-日元 */
  productSellPriceRangeJpy?: string;
  /** @format int32 */
  productSellQuantity?: number;
  /** @format int32 */
  productTag?: number;
  productTitle?: string;
  /** 商品标题翻译; 日文 */
  productTitleEn?: string;
  /** 商品标题翻译; 日文 */
  productTitleJp?: string;
  /** 商品标题翻译; 日文 */
  productTitleKr?: string;
  shopCode?: string;
  /** 店铺主图 */
  shopMainImg?: string;
  shopName?: string;
  /** 商品sku信息 */
  skuList?: SkuRespDTO[];
  stationCode?: string;
  /** @format date-time */
  updateTime?: string;
}

/** CustomerFootprintShopReqDTO */
export interface CustomerFootprintShopReqDTO {
  /** @format int64 */
  customerId?: number;
  descendOrder?: boolean;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  sortType?: string;
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
}

/** CustomerFootprintShopRespDTO */
export interface CustomerFootprintShopRespDTO {
  /** @format int32 */
  behaviorFlag?: number;
  /** @format int32 */
  blackReasonCode?: number;
  /** @format int32 */
  blackTag?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int32 */
  favoriteFlag?: number;
  platformType?: string;
  shopCode?: string;
  shopMainImg?: string;
  shopMajorCateCode?: string;
  shopMajorCateName?: string;
  shopName?: string;
  /** @format date-time */
  updateTime?: string;
}

/** CustomerHomeFastCategoryRespDTO */
export interface CustomerHomeFastCategoryRespDTO {
  /** @format int32 */
  channel?: number;
  /** @format int64 */
  productCategoryFrontendId?: number;
  /** @format int32 */
  sort?: number;
}

/** CustomerInfo */
export interface CustomerInfo {
  /**
   * 用户主键
   * @format int64
   */
  customerId?: number;
  /** 用户名称 */
  customerName?: string;
}

/** CustomerSearchKeywordHotRespDTO */
export interface CustomerSearchKeywordHotRespDTO {
  cateIcon?: string;
  cateNameEn?: string;
  cateNameJp?: string;
  cateNameKr?: string;
  cateNameZh?: string;
  keywordList?: string[];
  /** @format int64 */
  productCategoryFrontendId?: number;
}

/** CustomerStrategyProductReqDTO */
export interface CustomerStrategyProductReqDTO {
  /** @format int64 */
  customerId?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
}

/** CustomerStrategyProductRespDTO */
export interface CustomerStrategyProductRespDTO {
  /** @format int32 */
  behaviorFlag?: number;
  /**
   * 黑名单加入时间
   * @format date-time
   */
  blackAddTime?: string;
  /** 黑名单原因 */
  blackReason?: string;
  /**
   * 黑名单原因编码
   * @format int32
   */
  blackReasonCode?: number;
  /**
   * 黑名单标记
   * @format int32
   */
  blackTag?: number;
  /**
   * 黑名单类型:1-商品,2-供应商,类型为2的无法解除黑名单限制
   * @format int32
   */
  blackType?: number;
  /** 黑名单操作员id */
  blackUserId?: string;
  /** 黑名单操作员 */
  blackUserName?: string;
  /** @format int32 */
  channel?: number;
  /** 一件代发价 */
  consignPrice?: number;
  /** 一件代发价,当地汇率价格 */
  consignPriceJpy?: number;
  /** @format int32 */
  countryProductTag?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int32 */
  favoriteFlag?: number;
  /** @format int32 */
  isCkbDiscount?: number;
  jxhyPrice?: number;
  originalPrice?: number;
  platformType?: string;
  productCode?: string;
  productDetailUrl?: string;
  productMainImg?: string;
  /** 商品原销售价格 */
  productOriginPriceRange?: string;
  /** 商品原销售价格-日元 */
  productOriginPriceRangeJpy?: string;
  /** 商品阶梯价 */
  productPriceLadderList?: ProductPriceLadderRespDTO[];
  productSellPrice?: number;
  productSellPriceJpy?: number;
  /** 商品销售价格范围 */
  productSellPriceRange?: string;
  /** 商品销售价格范围-日元 */
  productSellPriceRangeJpy?: string;
  /** @format int32 */
  productSellQuantity?: number;
  /** @format int32 */
  productTag?: number;
  productTitle?: string;
  /** 商品标题翻译; 日文 */
  productTitleEn?: string;
  /** 商品标题翻译; 日文 */
  productTitleJp?: string;
  /** 商品标题翻译; 日文 */
  productTitleKr?: string;
  shopCode?: string;
  /** 店铺主图 */
  shopMainImg?: string;
  shopName?: string;
  /** 商品sku信息 */
  skuList?: SkuRespDTO[];
  stationCode?: string;
  /** @format date-time */
  updateTime?: string;
}

/** CustomerStrategyShopRespDTO */
export interface CustomerStrategyShopRespDTO {
  shopInfoList?: ShopInfo[];
  shopType?: string;
}

/** DirectImageSearchReqDTO */
export interface DirectImageSearchReqDTO {
  descendOrder?: boolean;
  imageId?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  sellPriceEnd?: number;
  sellPriceStart?: number;
  sortType?: string;
  /** @format int32 */
  startIndex?: number;
}

/** DiscountInfoUpdateVO */
export interface DiscountInfoUpdateVO {
  /**
   * 让利折扣比例:%
   * @format double
   */
  discount?: number;
  /** sku列表 */
  productSkuList?: string[];
  /** 优惠方式:1-改价,2-返金 */
  promotionMethod?: string;
  /** 优惠方式:1-立减,2-折扣 */
  promotionType?: string;
  /** 立减金额 */
  reductionAmount?: string;
}

/** EngineResult */
export interface EngineResult {
  /** @format int32 */
  code?: number;
  data?: object;
  message?: string;
}

/** HandlerServiceMeta */
export interface HandlerServiceMeta {
  aliasName?: string;
  className?: string;
  desc?: string;
  /** @format int64 */
  registerTime?: number;
  version?: string;
}

/** ImageAddNumReqDTO */
export interface ImageAddNumReqDTO {
  /** 商品编码 */
  productCode?: string;
}

/** ImageSearchReqDTO */
export interface ImageSearchReqDTO {
  /** 降序 */
  descendOrder?: boolean;
  /** 筛选项，多个choiceKey根据逗号分隔 */
  filters?: string;
  /** 图片地址 */
  imageAddress?: string;
  /** 图片id */
  imageId?: string;
  /** 图片地址 */
  imageUrl?: string;
  isOnePsale?: boolean;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /**
   * 商品标签 1 精选货源
   * @format int32
   */
  productTag?: number;
  /** 结束销售价 */
  sellPriceEnd?: number;
  /** 起始销售价 */
  sellPriceStart?: number;
  /** 排序字段; (默认)更新时间: update_time; 销量: product_sell_quantity; 价格: product_sell_price; */
  sortType?: string;
  /** @format int32 */
  startIndex?: number;
  /** 站点code */
  stationCode?: string;
}

/** ImageUploadReqDTO */
export interface ImageUploadReqDTO {
  /** 图片base64 */
  imageBase64?: string;
  /** 图片url 当拿不到图片时，传url */
  imageUrl?: string;
}

/** KeyWordSearchReqDTO */
export interface KeyWordSearchReqDTO {
  /**
   * 页码
   * @format int32
   */
  beginPage?: number;
  /**
   * 类目ID
   * @format int64
   */
  categoryId?: number;
  /** 国别 */
  country?: string;
  /** 筛选字段，逗号分隔 */
  filter?: string;
  /** 关键词 */
  keyword?: string;
  /** 会员ID */
  outMemberId?: string;
  /**
   * 页大小
   * @format int32
   */
  pageSize?: number;
  /** 价格区间-结束 */
  priceEnd?: string;
  /** 价格区间-开始 */
  priceStart?: string;
  /** 排序 */
  sort?: string;
}

/** LiveSellPriceReq */
export interface LiveSellPriceReq {
  /** 直播销售价 */
  liveSellPrice?: number;
  /**
   * 直播销售价有效结束时间
   * @format date-time
   */
  liveSellPriceEndTime?: string;
  /**
   * 直播销售价有效开始时间
   * @format date-time
   */
  liveSellPriceStartTime?: string;
  /** 商品sku */
  productSku?: string;
}

/** LiveSellPriceTimeReq */
export interface LiveSellPriceTimeReq {
  /**
   * 直播销售价有效结束时间
   * @format date-time
   */
  liveSellPriceEndTime?: string;
  /**
   * 直播销售价有效开始时间
   * @format date-time
   */
  liveSellPriceStartTime?: string;
  /** 商品skuList */
  productSkuList?: string[];
}

/** MallCategoryFormReqDTO */
export interface MallCategoryFormReqDTO {
  /** @format int64 */
  mallCategoryId?: number;
  mallCategoryNameJp?: string;
  productCategoryFrontendIdList?: number[];
}

/** MallCategoryPageReqDTO */
export interface MallCategoryPageReqDTO {
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
  /** @format int32 */
  status?: number;
}

/** MallCategoryReqDTO */
export interface MallCategoryReqDTO {
  /** @format int32 */
  deleteFlag?: number;
  stationCode?: string;
  /** @format int32 */
  status?: number;
}

/** MallCategoryRespDTO */
export interface MallCategoryRespDTO {
  mallCategoryCode?: string;
  /** @format int64 */
  mallCategoryId?: number;
  mallCategoryNameEn?: string;
  mallCategoryNameJp?: string;
  mallCategoryNameKr?: string;
  mallCategoryNameZh?: string;
  manageBannerList?: ManageBannerRespDTO[];
  productCategoryFrontendList?: ProductCategoryFrontendRespDTO[];
  stationCode?: string;
  /** @format int32 */
  status?: number;
}

/** MallDoorFormReqDTO */
export interface MallDoorFormReqDTO {
  marketCode?: string;
  shopCode?: string;
  shopDoor?: string;
  shopFloor?: string;
  shopMall?: string;
}

/** ManageBannerRespDTO */
export interface ManageBannerRespDTO {
  /** @format int64 */
  bannerApplicableTemplateId?: number;
  bannerApplicableTemplateName?: string;
  /** @format int32 */
  bannerClickNum?: number;
  bannerDesignatedUserId?: string;
  /** @format int64 */
  bannerId?: number;
  bannerImgUrl?: string;
  bannerJumpLink?: string;
  bannerName?: string;
  /** @format int32 */
  bannerStatus?: number;
  /** @format int32 */
  bannerUserClickNum?: number;
  /** @format date-time */
  endTime?: string;
  /** @format int64 */
  mallCategoryId?: number;
  /** @format date-time */
  startTime?: string;
  /** @format int32 */
  systemSource?: number;
}

/** MaterialInfoUpdateVO */
export interface MaterialInfoUpdateVO {
  /** 材质英文 */
  materialInfoEn?: string;
  /** 材质信息日文 */
  materialInfoJa?: string;
  /** 材质韩文 */
  materialInfoKr?: string;
  /** 材质信息中文 */
  materialInfoZh?: string;
  /** sku */
  productSku?: string;
  /** sku列表 */
  productSkuList?: string[];
  /** 站点code */
  stationCode?: string;
}

/** NameValueDict */
export interface NameValueDict {
  name?: string;
  value?: string;
}

/** NameValueDictDTO */
export interface NameValueDictDTO {
  name?: string;
  value?: string;
}

/** OnlineManageAddVO */
export interface OnlineManageAddVO {
  appUrl?: string;
  /** banner */
  bannerList?: OnlineManageBannerUpsertVO[];
  canDelete?: boolean;
  canSettingBannerOrPromotion?: boolean;
  /** @format date-time */
  createTime?: string;
  deleteFlag?: boolean;
  /** @format int64 */
  onlineManageId?: number;
  /** 透明购类型 */
  onlineType?: string;
  /** 平台图标 */
  platformImageUrl?: string;
  /** 平台名称 */
  platformName?: string;
  platformStatus?: boolean;
  /** 平台链接 */
  platformUrl?: string;
  /** 平台活动 */
  promotionList?: OnlineManagePromotionUpsertVO[];
  stationCode?: string;
  /** @format date-time */
  updateTime?: string;
}

/** OnlineManageBannerDTO */
export interface OnlineManageBannerDTO {
  bannerUrl?: string;
  /** @format date-time */
  createTime?: string;
  jumpUrl?: string;
  /** @format int64 */
  onlineManageBannerId?: number;
  /** @format int64 */
  onlineManageId?: number;
  /** @format date-time */
  updateTime?: string;
}

/** OnlineManageBannerUpsertVO */
export interface OnlineManageBannerUpsertVO {
  /** banner url */
  bannerUrl?: string;
  /** @format date-time */
  createTime?: string;
  /** 跳转链接 */
  jumpUrl?: string;
  /** @format int64 */
  onlineManageBannerId?: number;
  /**
   * 透明购管理主键
   * @format int64
   */
  onlineManageId?: number;
  /** @format date-time */
  updateTime?: string;
}

/** OnlineManageDetailVO */
export interface OnlineManageDetailVO {
  appUrl?: string;
  bannerList?: OnlineManageBannerDTO[];
  canDelete?: boolean;
  canSettingBannerOrPromotion?: boolean;
  /** @format date-time */
  createTime?: string;
  deleteFlag?: boolean;
  /** @format int64 */
  onlineManageId?: number;
  onlineType?: string;
  platformImageUrl?: string;
  platformName?: string;
  platformStatus?: boolean;
  platformUrl?: string;
  promotionList?: OnlineManagePromotionDTO[];
  stationCode?: string;
  /** @format date-time */
  updateTime?: string;
}

/** OnlineManagePromotionDTO */
export interface OnlineManagePromotionDTO {
  /** @format date-time */
  createTime?: string;
  jumpUrl?: string;
  /** @format int64 */
  onlineManageId?: number;
  /** @format int64 */
  onlineManagePromotionId?: number;
  promotionButtonText?: string;
  promotionUrl?: string;
  /** @format date-time */
  updateTime?: string;
}

/** OnlineManagePromotionUpsertVO */
export interface OnlineManagePromotionUpsertVO {
  /** @format date-time */
  createTime?: string;
  /** 跳转链接 */
  jumpUrl?: string;
  /**
   * 透明购管理主键
   * @format int64
   */
  onlineManageId?: number;
  /** @format int64 */
  onlineManagePromotionId?: number;
  /** 活动按钮文本	 */
  promotionButtonText?: string;
  /** 活动url	 */
  promotionUrl?: string;
  /** @format date-time */
  updateTime?: string;
}

/** OnlineManageStatusUpdateVO */
export interface OnlineManageStatusUpdateVO {
  /**
   * 主键
   * @format int64
   */
  onlineManageId?: number;
  /** 平台状态；0：下架；1：上架 */
  platformStatus?: boolean;
}

/** OnlineManageTypeVO */
export interface OnlineManageTypeVO {
  /** 类型 */
  key?: string;
  /** 透明购 */
  onlineManageList?: OnlineManageVO[];
  /** 类型 */
  type?: string;
}

/** OnlineManageUpdateVO */
export interface OnlineManageUpdateVO {
  appUrl?: string;
  /** banner */
  bannerList?: OnlineManageBannerUpsertVO[];
  canDelete?: boolean;
  canSettingBannerOrPromotion?: boolean;
  /** @format date-time */
  createTime?: string;
  deleteFlag?: boolean;
  /**
   * 主键
   * @format int64
   */
  onlineManageId?: number;
  /** 透明购类型 */
  onlineType?: string;
  /** 平台图标 */
  platformImageUrl?: string;
  /** 平台名称 */
  platformName?: string;
  platformStatus?: boolean;
  /** 平台链接 */
  platformUrl?: string;
  /** 平台活动 */
  promotionList?: OnlineManagePromotionUpsertVO[];
  /** 站点code */
  stationCode?: string;
  /** @format date-time */
  updateTime?: string;
}

/** OnlineManageVO */
export interface OnlineManageVO {
  appUrl?: string;
  bannerList?: OnlineManageBannerDTO[];
  canDelete?: boolean;
  canSettingBannerOrPromotion?: boolean;
  /** @format date-time */
  createTime?: string;
  deleteFlag?: boolean;
  /** @format int64 */
  onlineManageId?: number;
  /** 透明购类型 */
  onlineType?: string;
  platformImageUrl?: string;
  platformName?: string;
  platformStatus?: boolean;
  platformUrl?: string;
  promotionList?: OnlineManagePromotionDTO[];
  stationCode?: string;
  /** @format date-time */
  updateTime?: string;
}

/** OrderItem */
export interface OrderItem {
  asc?: boolean;
  column?: string;
}

/** Product */
export interface Product {
  /** @format int32 */
  addChannel?: number;
  /** @format date-time */
  addedTime?: string;
  /** @format int32 */
  batchNumber?: number;
  /** @format date-time */
  blackAddTime?: string;
  blackReason?: string;
  /** @format int32 */
  blackReasonCode?: number;
  /** @format int32 */
  blackTag?: number;
  blackUserId?: string;
  blackUserName?: string;
  /** @format int32 */
  channel?: number;
  /** @format int32 */
  christmasClothingTag?: number;
  /** @format int32 */
  christmasGroceriesTag?: number;
  consignPrice?: number;
  /** @format int32 */
  countryProductTag?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int32 */
  directSaleFlag?: number;
  directStoreProductDescImgs?: string;
  directStoreProductItemImgs?: string;
  directStoreProductItemImgsS?: string;
  directStoreProductMainImg?: string;
  /** @format double */
  height?: number;
  intactCateCode?: string;
  intactCateName?: string;
  /** @format int32 */
  isCkbDiscount?: number;
  isOnePsale?: boolean;
  /** @format int32 */
  isOnline?: number;
  /** @format int32 */
  isPick?: number;
  jxhyPrice?: number;
  /** @format double */
  length?: number;
  mallCode?: string;
  materialInfoEn?: string;
  materialInfoJa?: string;
  materialInfoKr?: string;
  materialInfoZh?: string;
  /** @format int32 */
  offlineDirectSaleFlag?: number;
  originalId?: string;
  originalPrice?: number;
  platformType?: string;
  productAppSellPrice?: number;
  productBrandId?: string;
  productBrandName?: string;
  /** @format int32 */
  productBuyMininum?: number;
  productCateCode?: string;
  productCode?: string;
  /** @format int32 */
  productCommentCount?: number;
  productDescImgs?: string;
  productDescOcrImgs?: string;
  /** @format int32 */
  productDescOcrImgsFlag?: number;
  productDescription?: string;
  productDescriptionEn?: string;
  productDescriptionJa?: string;
  productDescriptionKr?: string;
  productDetailSniffUrl?: string;
  productDetailUrl?: string;
  /** @format int64 */
  productId?: number;
  productItemCategoryZh?: string;
  productItemImgs?: string;
  productItemImgsS?: string;
  productKeywords?: string;
  productMainImg?: string;
  productOriginPriceRange?: string;
  productPriceLadder?: string;
  productPropImgs?: string;
  productProps?: string;
  /** @format int32 */
  productPropsAddMode?: number;
  productPropsJa?: string;
  productPropsJaList?: string;
  productPropsList?: string;
  productSellPrice?: number;
  productSellPriceRange?: string;
  /** @format int32 */
  productSellQuantity?: number;
  productStallNumber?: string;
  /** @format int32 */
  productStockQuantity?: number;
  /** @format int32 */
  productTag?: number;
  productTitle?: string;
  productTitleJa?: string;
  productVideo?: string;
  productVideoImg?: string;
  sellerId?: string;
  sellerNick?: string;
  shopCode?: string;
  shopLocation?: string;
  shopName?: string;
  /** @format int32 */
  sortNum?: number;
  supplierSpu?: string;
  thirdProductCateCode?: string;
  transportationAttrCode?: string;
  /** @format date-time */
  updateTime?: string;
  /** @format int64 */
  weight?: number;
  /** @format double */
  width?: number;
}

/** ProductAddBlackDTO */
export interface ProductAddBlackDTO {
  /** 黑名单原因 */
  blackReason?: string;
  /**
   * 黑名单原因编码
   * @format int32
   */
  blackReasonCode?: number;
  /**
   * 黑名单标记:1-黑名单,0-移除黑名单
   * @format int32
   */
  blackTag?: number;
  /** 商品code */
  productCode?: string;
  /** 商品codeList */
  productCodeList?: string[];
}

/** ProductAndSkuRespDTO */
export interface ProductAndSkuRespDTO {
  product?: Product;
  productPropGroupList?: ProductPropGroupRespDTO[];
  skuList?: Sku[];
}

/** ProductAndSkusDTO */
export interface ProductAndSkusDTO {
  productCode?: string;
  productSkuList?: string[];
}

/** ProductCategoryAddRequVO */
export interface ProductCategoryAddRequVO {
  /** 类目名称 */
  cateName?: string;
  /** 国际运费 */
  internationalFreight?: number;
  /**
   * 类目等级
   * @format int32
   */
  level?: number;
  /** 维护人员ID; 前端不需要传 */
  maintainManagerId?: string;
  /** 维护人员名称; 前端不需要传 */
  maintainManagerName?: string;
  /** 映射类目编码 */
  mapList?: ProductCategoryMapSaveReqDTO[];
  pcode?: string;
  /**
   * 商品报关中文品名主键ID
   * @format int64
   */
  productCustomsId?: number;
  /** 运输属性code列表 */
  transportAttrCodeList?: string[];
  /** 运输属性名字列表 */
  transportAttrNameList?: string[];
  /**
   * 重量
   * @format int32
   */
  weight?: number;
}

/** ProductCategoryCustomsMapFormReqDTO */
export interface ProductCategoryCustomsMapFormReqDTO {
  maintainManagerId?: string;
  maintainManagerName?: string;
  productCategoryCateCode?: string;
  /** @format int64 */
  productCustomsId?: number;
}

/** ProductCategoryFixDTO */
export interface ProductCategoryFixDTO {
  /** 动作 */
  action?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 操作Id */
  id?: string;
  operator?: string;
}

/** ProductCategoryFrontendAllParentNodeDTO */
export interface ProductCategoryFrontendAllParentNodeDTO {
  cateIcon?: string;
  cateNameEn?: string;
  cateNameJp?: string;
  cateNameKr?: string;
  cateNameZh?: string;
  /** @format int32 */
  defaultFlag?: number;
  /** @format int32 */
  level?: number;
  /** @format int64 */
  parentId?: number;
  /** @format int64 */
  productCategoryFrontendId?: number;
  stationCode?: string;
  /** @format int32 */
  status?: number;
}

/** ProductCategoryFrontendGroupChannelRespDTO */
export interface ProductCategoryFrontendGroupChannelRespDTO {
  /** @format int32 */
  channel?: number;
  productCategoryFrontendShortRespDTOList?: ProductCategoryFrontendShortRespDTO[];
}

/** ProductCategoryFrontendInsertReqDTO */
export interface ProductCategoryFrontendInsertReqDTO {
  cateCodeList?: string[];
  cateIcon?: string;
  /** 类目名称（英文） */
  cateNameEn?: string;
  /** 类目名称（日文） */
  cateNameJp?: string;
  /** 类目名称（韩文） */
  cateNameKr?: string;
  cateNameZh?: string;
  /** @format int32 */
  defaultFlag?: number;
  /** @format int32 */
  level?: number;
  /** @format int64 */
  parentId?: number;
  /** 站点code */
  stationCode?: string;
}

/** ProductCategoryFrontendMapGroupRespDTO */
export interface ProductCategoryFrontendMapGroupRespDTO {
  cateCodeList?: ProductCategorySingleRespDTO[];
  /** @format int64 */
  productCategoryFrontendId?: number;
}

/** ProductCategoryFrontendMapReqDTO */
export interface ProductCategoryFrontendMapReqDTO {
  cateCode?: string;
  cateCodeList?: string[];
  /** @format int64 */
  productCategoryFrontendId?: number;
  /** @format int32 */
  productCategoryFrontendLevel?: number;
  stationCode?: string;
}

/** ProductCategoryFrontendReqDTO */
export interface ProductCategoryFrontendReqDTO {
  cateName?: string;
  cateNameJp?: string;
  cateNameZh?: string;
  /** @format int32 */
  level?: number;
  /** @format int64 */
  parentId?: number;
  productCategoryFrontendIdList?: number[];
  stationCode?: string;
  /** @format int32 */
  status?: number;
}

/** ProductCategoryFrontendRespDTO */
export interface ProductCategoryFrontendRespDTO {
  cateIcon?: string;
  cateNameEn?: string;
  cateNameJp?: string;
  cateNameKr?: string;
  cateNameZh?: string;
  channels?: number[];
  children?: ProductCategoryFrontendRespDTO[];
  /** @format date-time */
  createTime?: string;
  /** @format int32 */
  defaultFlag?: number;
  /** @format int32 */
  fastCategoryFlag?: number;
  /** @format int32 */
  level?: number;
  /** @format int64 */
  parentId?: number;
  /** @format int64 */
  productCategoryFrontendId?: number;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  status?: number;
  /** @format date-time */
  updateTime?: string;
}

/** ProductCategoryFrontendShortRespDTO */
export interface ProductCategoryFrontendShortRespDTO {
  cateIcon?: string;
  cateNameEn?: string;
  cateNameJp?: string;
  cateNameKr?: string;
  cateNameZh?: string;
  children?: ProductCategoryFrontendShortRespDTO[];
  /** @format int32 */
  level?: number;
  /** @format int64 */
  parentId?: number;
  /** @format int64 */
  productCategoryFrontendId?: number;
  stationCode?: string;
}

/** ProductCategoryFrontendUpdateReqDTO */
export interface ProductCategoryFrontendUpdateReqDTO {
  cateCodeList?: string[];
  cateIcon?: string;
  /** 类目名称（英文） */
  cateNameEn?: string;
  /** 类目名称（日文） */
  cateNameJp?: string;
  /** 类目名称（韩文） */
  cateNameKr?: string;
  cateNameZh?: string;
  /** @format int32 */
  defaultFlag?: number;
  /** @format int64 */
  productCategoryFrontendId?: number;
  /** 站点code */
  stationCode?: string;
}

/** ProductCategoryMapGroupRespDTO */
export interface ProductCategoryMapGroupRespDTO {
  cateCodeList?: ProductCategoryThirdSingleRespDTO[];
  platformType?: string;
}

/** ProductCategoryMapReqDTO */
export interface ProductCategoryMapReqDTO {
  cateCode?: string;
  cateCodeList?: string[];
  platformType?: string;
  thirdCateCode?: string;
  /** @format int32 */
  thirdCateCodeLevel?: number;
}

/** ProductCategoryMapRespDTO */
export interface ProductCategoryMapRespDTO {
  cateCode?: string;
  mallCode?: string;
  platformType?: string;
  thirdCateCode?: string;
  /** @format int32 */
  thirdCateCodeLevel?: number;
}

/** ProductCategoryMapSaveReqDTO */
export interface ProductCategoryMapSaveReqDTO {
  cateCodeMapList?: ProductCategoryThirdSingleUpdateReqDTO[];
  platformType?: string;
}

/** ProductCategoryPageRequVO */
export interface ProductCategoryPageRequVO {
  /** 类目编码; */
  cateCode?: string;
  /** 类目编码列表 */
  cateCodeList?: string[];
  /** 类目名称 */
  cateName?: string;
  /**
   * 子类目是否存在报关关联信息;1-存在,0-不存在
   * @format int64
   */
  isExistProductCustoms?: number;
  /**
   * 类目等级
   * @format int32
   */
  level?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  pcode?: string;
  pcodeList?: string[];
  /** @format int32 */
  startIndex?: number;
  /**
   * 启用状态;1-开;0-关
   * @format int32
   */
  status?: number;
}

/** ProductCategoryReqDTO */
export interface ProductCategoryReqDTO {
  cateCode?: string;
  cateCodeList?: string[];
  cateName?: string;
  intactCateName?: string;
  /** @format int32 */
  level?: number;
  pcode?: string;
  pcodeList?: string[];
  /** @format int32 */
  status?: number;
}

/** ProductCategoryRequVO */
export interface ProductCategoryRequVO {
  /** 类目编码; */
  cateCode?: string;
  /** 类目编码列表 */
  cateCodeList?: string[];
  /** 类目名称 */
  cateName?: string;
  intactCateCode?: string;
  intactCateName?: string;
  /**
   * 类目等级
   * @format int32
   */
  level?: number;
  pcode?: string;
  pcodeList?: string[];
  /**
   * 启用状态;1-开;0-关
   * @format int32
   */
  status?: number;
}

/** ProductCategoryRespDTO */
export interface ProductCategoryRespDTO {
  cateCode?: string;
  cateName?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 完整层级类目代码 */
  intactCateCode?: string;
  /** 完整层级类目名称 */
  intactCateName?: string;
  /** 国际运费 */
  internationalFreight?: number;
  /**
   * 子类目存在未关联中文品名
   * @format int64
   */
  isProductCustomsEmpty?: number;
  /**
   * 子类目存在运输属性为空
   * @format int64
   */
  isTransportationPropertiesEmpty?: number;
  /**
   * 子类目存在重量为空
   * @format int64
   */
  isWeightEmpty?: number;
  /** @format int32 */
  level?: number;
  maintainManagerId?: string;
  maintainManagerName?: string;
  pcode?: string;
  /** 操作日志 */
  productCategoryFixDTOS?: ProductCategoryFixDTO[];
  /** 已绑定三方类目 */
  productCategoryThirdOnlineList?: ProductCategoryThirdRespDTO[];
  /**
   * 商品报关主键ID
   * @format int64
   */
  productCustomsId?: number;
  /** 申报中文品名 */
  productItemCategoryZh?: string;
  /** @format int32 */
  status?: number;
  /** @format int32 */
  subCateCount?: number;
  /** 运输属性code列表 */
  transportAttrCodeList?: string[];
  /** 运输属性 */
  transportationProperties?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /**
   * 重量
   * @format int32
   */
  weight?: number;
}

/** ProductCategoryRespVO */
export interface ProductCategoryRespVO {
  /** 类目编码 */
  cateCode?: string;
  /** 类目名称 */
  cateName?: string;
  children?: ProductCategoryRespVO[];
  /** 完整层级类目代码 */
  intactCateCode?: string;
  /** 完整层级类目名称 */
  intactCateName?: string;
  /**
   * 子类目是否存在报关关联信息
   * @format int64
   */
  isExistProductCustoms?: number;
  /**
   * 类目等级
   * @format int32
   */
  level?: number;
  /** 维护人员ID */
  maintainManagerId?: string;
  /** 维护人员名称 */
  maintainManagerName?: string;
  pcode?: string;
  /**
   * 商品报关主键ID
   * @format int64
   */
  productCustomsId?: number;
  /** 申报中文品名 */
  productItemCategoryZh?: string;
  /**
   * 启用状态;1-开;0-关;
   * @format int32
   */
  status?: number;
  /**
   * 子级数量
   * @format int32
   */
  subCateCount?: number;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/** ProductCategorySingleRespDTO */
export interface ProductCategorySingleRespDTO {
  cateCodeList?: string[];
  /** @format int32 */
  level?: number;
}

/** ProductCategoryThirdBlackSaveReqDTO */
export interface ProductCategoryThirdBlackSaveReqDTO {
  maintainManagerId?: string;
  maintainManagerName?: string;
  platformType?: string;
  /** @format int64 */
  productCategoryThirdId?: number;
  singleReqDTOList?: ProductCategoryThirdBlackSingleReqDTO[];
}

/** ProductCategoryThirdBlackSingleReqDTO */
export interface ProductCategoryThirdBlackSingleReqDTO {
  cateCodeList?: string[];
  /** @format int32 */
  level?: number;
}

/** ProductCategoryThirdChannelPlatformTypeRespDTO */
export interface ProductCategoryThirdChannelPlatformTypeRespDTO {
  /** @format int32 */
  channel?: number;
  platformTypeRespDTOList?: ProductCategoryThirdPlatformTypeRespDTO[];
}

/** ProductCategoryThirdGroupTreeShortRespDTO */
export interface ProductCategoryThirdGroupTreeShortRespDTO {
  list?: ProductCategoryThirdShortRespDTO[];
  platformType?: string;
}

/** ProductCategoryThirdPageReqDTO */
export interface ProductCategoryThirdPageReqDTO {
  /**
   * 黑名单;1-黑名单;0-非黑名单;2-半选;
   * @format int32
   */
  blackFlag?: number;
  /**
   * 黑名单列表传这个值; 1:表示获取黑名单或者半选
   * @format int32
   */
  blackFlagStatus?: number;
  /** 类目编码 */
  cateCode?: string;
  /** 类目名称 */
  cateName?: string;
  /** 降序 */
  descendOrder?: boolean;
  /** 是否叶子类目:true,false */
  isLeaf?: string;
  /**
   * 类目等级
   * @format int32
   */
  level?: number;
  /**
   * 是否映射;1-已映射;0-未映射
   * @format int32
   */
  mappingFlag?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** 父级编码 */
  pcode?: string;
  /** 平台类型;TB:淘宝;AM:1688;TM:天猫; */
  platformType?: string;
  /** 排序字段; (默认)更新时间: update_time,level; */
  sortType?: string;
  /** @format int32 */
  startIndex?: number;
}

/** ProductCategoryThirdPlatformTypeRespDTO */
export interface ProductCategoryThirdPlatformTypeRespDTO {
  platformName?: string;
  platformType?: string;
}

/** ProductCategoryThirdReqDTO */
export interface ProductCategoryThirdReqDTO {
  /** @format int32 */
  blackFlag?: number;
  cateCode?: string;
  cateCodeList?: string[];
  excludeLevel?: number[];
  /** 是否为叶子类目;true/false */
  isLeaf?: string;
  /** @format int32 */
  level?: number;
  /** @format int32 */
  mappingFlag?: number;
  pcode?: string;
  platformType?: string;
}

/** ProductCategoryThirdRespDTO */
export interface ProductCategoryThirdRespDTO {
  /**
   * 黑名单;1-黑名单;0-非黑名单;2-非全选黑名单;
   * @format int32
   */
  blackFlag?: number;
  /** 类目编码; */
  cateCode?: string;
  /** 类目名称 */
  cateName?: string;
  /**
   * 来源类型;1-档口(市场购);2-线上平台（透明购）
   * @format int32
   */
  channel?: number;
  /** 子级类目 */
  children?: ProductCategoryThirdRespDTO[];
  /** 完整层级类目编码 */
  intactCateCode?: string;
  /** 完整层级类目名称 */
  intactCateName?: string;
  /** 国际运费 */
  internationalFreight?: number;
  /** 是否叶子类目 */
  isLeaf?: string;
  /**
   * 类目等级
   * @format int32
   */
  level?: number;
  /** 维护人员名称 */
  maintainManagerName?: string;
  /** 市场编码 */
  mallCode?: string;
  /** 市场名称 */
  mallName?: string;
  /**
   * 是否已mapping;1-已映射;0-未映射
   * @format int32
   */
  mappingFlag?: number;
  /** 父级编码 */
  pcode?: string;
  /** 平台类型;TB:淘宝;AM:1688;TM:天猫; */
  platformType?: string;
  /**
   * 类目ID
   * @format int64
   */
  productCategoryThirdId?: number;
  /**
   * 子级数量
   * @format int32
   */
  subCount?: number;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/** ProductCategoryThirdShortRespDTO */
export interface ProductCategoryThirdShortRespDTO {
  /** @format int32 */
  blackFlag?: number;
  cateCode?: string;
  cateName?: string;
  children?: ProductCategoryThirdShortRespDTO[];
  /** 是否叶子类目 */
  isLeaf?: string;
  /** @format int32 */
  level?: number;
  /** @format int32 */
  mappingFlag?: number;
  pcode?: string;
}

/** ProductCategoryThirdSingleRespDTO */
export interface ProductCategoryThirdSingleRespDTO {
  /** @format int32 */
  thirdCateCodeLevel?: number;
  thirdCateCodeList?: string[];
}

/** ProductCategoryThirdSingleUpdateReqDTO */
export interface ProductCategoryThirdSingleUpdateReqDTO {
  cateCode?: string[];
  /** @format int32 */
  level?: number;
}

/** ProductCategoryUpdateRequVO */
export interface ProductCategoryUpdateRequVO {
  /** 类目编码 */
  cateCode?: string;
  /** 类目名称 */
  cateName?: string;
  /** 国际运费 */
  internationalFreight?: number;
  /**
   * 类目等级
   * @format int32
   */
  level?: number;
  /** 维护人员ID; 前端不需要传 */
  maintainManagerId?: string;
  /** 维护人员名称; 前端不需要传 */
  maintainManagerName?: string;
  /** 映射类目编码 */
  mapList?: ProductCategoryMapSaveReqDTO[];
  /**
   * 商品报关中文品名主键ID
   * @format int64
   */
  productCustomsId?: number;
  /**
   * 启用状态;1-开;0-关
   * @format int32
   */
  status?: number;
  /** 运输属性code列表 */
  transportAttrCodeList?: string[];
  /** 运输属性名字列表 */
  transportAttrNameList?: string[];
  /**
   * 重量
   * @format int32
   */
  weight?: number;
}

/** ProductCodeSkuMapRespDTO */
export interface ProductCodeSkuMapRespDTO {
  productCode?: string;
  productSku?: string;
}

/** ProductCustomsFormReqDTO */
export interface ProductCustomsFormReqDTO {
  compilationMethod?: string;
  /** 报关编码(日文) */
  customsCode?: string;
  /** 报关编码（英文） */
  customsCodeEn?: string;
  /** 报关编码（韩文） */
  customsCodeKr?: string;
  /** @format int64 */
  productCustomsId?: number;
  productItemCategoryEn?: string;
  productItemCategoryZh?: string;
  simpleReportCode?: string;
  stationCode?: string;
}

/** ProductCustomsHsCodeCrawlReqDTO */
export interface ProductCustomsHsCodeCrawlReqDTO {
  /** HS CODE 列表详情 */
  productCustomsHsCodeReqDTOList?: ProductHsCodeKeywordReqDTO[];
  /** 报关中文品名(站点语种) */
  productItemCateLanguage?: string;
  /** 报关中文品名 */
  productItemCategoryZh?: string;
  /**
   * 来源
   * @format int32
   */
  source?: number;
  /** 站点code */
  stationCode?: string;
}

/** ProductCustomsPageReqDTO */
export interface ProductCustomsPageReqDTO {
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  productItemCategoryZh?: string;
  /** @format int32 */
  startIndex?: number;
}

/** ProductCustomsReqDTO */
export interface ProductCustomsReqDTO {
  productCustomsIdList?: number[];
  productItemCategoryZh?: string;
  stationCode?: string;
}

/** ProductCustomsRespDTO */
export interface ProductCustomsRespDTO {
  compilationMethod?: string;
  customsCode?: string;
  customsCodeEn?: string;
  customsCodeKr?: string;
  customsPriceJp?: number;
  /** @format int64 */
  productCustomsId?: number;
  productItemCategoryEn?: string;
  productItemCategoryZh?: string;
  simpleReportCode?: string;
  stationCode?: string;
}

/** ProductDetailByPluginPddRequest */
export interface ProductDetailByPluginPddRequest {
  html?: string;
}

/** ProductDetailDTO */
export interface ProductDetailDTO {
  add_time?: string;
  /** @format int32 */
  batch_number?: number;
  cate_code?: string;
  category_code?: string;
  channel_source?: string;
  /** @format int32 */
  christmas_clothing_tag?: number;
  /** @format int32 */
  christmas_groceries_tag?: number;
  consign_price?: number;
  /** @format int32 */
  country_product_tag?: number;
  data_source?: string;
  description?: string;
  description_imgs?: string[];
  detail_url?: string;
  /** @format int32 */
  direct_sale_flag?: number;
  direct_store_description_imgs?: string[];
  direct_store_item_imgs_b?: string[];
  direct_store_item_imgs_s?: string[];
  direct_store_main_img?: string;
  dk_hh?: string;
  /** @format double */
  height?: number;
  /** @format int32 */
  html_type?: number;
  is_one_psale?: boolean;
  /** @format int32 */
  is_online?: number;
  item_imgs_b?: string[];
  item_imgs_s?: string[];
  jxhy_price?: number;
  /** @format double */
  length?: number;
  main_img?: string;
  material?: string;
  msg?: string;
  original_price?: number;
  platform_code?: string;
  price_range_list?: object[];
  price_range_str?: string;
  product_code?: string;
  /** @format int32 */
  product_comment?: number;
  product_id?: string;
  product_keywords?: string;
  /** @format int32 */
  product_tag?: number;
  props?: ProductPropDTO[];
  props_dict?: Record<string, string>;
  props_dict_ja?: Record<string, string>;
  props_img?: ProductPropImgDTO[];
  props_ja?: ProductPropDTO[];
  sell_price?: number;
  /** @format int32 */
  sell_quantity?: number;
  seller_info?: SellerInfoDTO;
  shop_code?: string;
  shop_id?: string;
  shop_location?: string[];
  shop_url?: string;
  sku_list?: ProductSkuDTO[];
  /** @format int32 */
  sort_num?: number;
  /** @format int32 */
  start_count?: number;
  /** @format int32 */
  stock_quantity?: number;
  title?: string;
  title_ja?: string;
  video_img?: string;
  video_url?: string;
  /** @format int64 */
  weight?: number;
  /** @format double */
  width?: number;
}

/** ProductDetailListReqDTO */
export interface ProductDetailListReqDTO {
  cateCode?: string;
  /** @format int32 */
  channel?: number;
  isOnePsale?: boolean;
  /** @format int32 */
  isOnline?: number;
  /** @format int32 */
  offlineDirectSaleFlag?: number;
  productCodeList?: string[];
  productTitle?: string;
  productUrls?: string[];
  shopCode?: string;
  shopName?: string;
}

/** ProductDetailParamReqDTO */
export interface ProductDetailParamReqDTO {
  /** @format int32 */
  black_validate?: number;
  /** @format int32 */
  cate_map_validate?: number;
}

/** ProductDetailReqDTO */
export interface ProductDetailReqDTO {
  /** @format int64 */
  customerId?: number;
  /** 忽略上下架 */
  ignoreIsOnline?: boolean;
  /** @format int32 */
  isOnline?: number;
  productCode?: string;
  productCodeList?: string[];
  /** 站点 */
  stationCode?: string;
}

/** ProductDetailRequVO */
export interface ProductDetailRequVO {
  ignoreBlack?: boolean;
  platform?: string;
  productCode: string;
  stationCode?: string;
}

/** ProductDetailRespDTO */
export interface ProductDetailRespDTO {
  /**
   * 商品一手数量
   * @format int32
   */
  batchNumber?: number;
  /**
   * 客户行为;1-喜欢;2-不喜欢
   * @format int32
   */
  behaviorFlag?: number;
  /**
   * 黑名单加入时间
   * @format date-time
   */
  blackAddTime?: string;
  /** 黑名单原因 */
  blackReason?: string;
  /**
   * 黑名单原因编码
   * @format int32
   */
  blackReasonCode?: number;
  /**
   * 黑名单标记
   * @format int32
   */
  blackTag?: number;
  /**
   * 黑名单类型:1-商品,2-供应商,类型为2的无法解除黑名单限制
   * @format int32
   */
  blackType?: number;
  /** 黑名单操作员id */
  blackUserId?: string;
  /** 黑名单操作员 */
  blackUserName?: string;
  /**
   * 来源类型;1-档口(市场购);2-线上平台（透明购）
   * @format int32
   */
  channel?: number;
  /** 一件代发价 */
  consignPrice?: number;
  /** 一件代发价,当地汇率价格 */
  consignPriceJpy?: number;
  /** @format int32 */
  countryProductTag?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /**
   * 是否收藏;1-已收藏;0-未收藏
   * @format int32
   */
  favoriteFlag?: number;
  /** @format int32 */
  isCkbDiscount?: number;
  /** 是否一件代发(ture:是) */
  isOnePsale?: boolean;
  jxhyPrice?: number;
  /** 材质信息-日文（注意：订单使用） */
  materialInfoJa?: string;
  /** 材质信息-中文（注意：订单使用） */
  materialInfoZh?: string;
  /**
   * oem最小起订量
   * @format int32
   */
  minOrderQuantity?: number;
  /**
   * OEM商品分类表id：1-服装; 2-杂货; 3-辅料
   * @format int32
   */
  oemProductClassificationId?: number;
  /** 商品原始价格 */
  originalPrice?: number;
  paymentDetail?: string;
  /** @format int32 */
  paymentType?: number;
  /** 平台类型;TB:淘宝;AM:1688;TM:天猫;VC:搜款网;WS:网商园 */
  platformType?: string;
  /** 商品APP价格 */
  productAppSellPrice?: number;
  /** 品牌id */
  productBrandId?: string;
  /** 品牌名称 */
  productBrandName?: string;
  /**
   * 最小购买数/起拍数
   * @format int32
   */
  productBuyMininum?: number;
  /** 类目编码; */
  productCateCode?: string;
  /**
   * 前台类目二级ID
   * @format int64
   */
  productCategoryFrontendNdId?: number;
  /** 平台商品SPU */
  productCode?: string;
  /**
   * 商品评论数
   * @format int32
   */
  productCommentCount?: number;
  /** 描述图片 */
  productDescImgs?: string[];
  /** 商品描述 */
  productDescription?: string;
  /** 详情URL */
  productDetailUrl?: string;
  /** item缩略图（大） */
  productItemImgs?: ProductImageUrlDTO[];
  /** item缩略图（小） */
  productItemImgsS?: ProductImageUrlDTO[];
  /** 主图 */
  productMainImg?: string;
  /** 商品原销售价格 */
  productOriginPriceRange?: string;
  /** 商品原销售价格-日元 */
  productOriginPriceRangeJpy?: string;
  /** 商品阶梯价 */
  productPriceLadderList?: ProductPriceLadderRespDTO[];
  /** 商品阶梯价 */
  productPriceRangeLadderList?: ProductPriceLadderRespDTO[];
  /** 商品属性 */
  productPropGroupJaList?: ProductPropGroupRespDTO[];
  /** 商品属性 */
  productPropGroupList?: ProductPropGroupRespDTO[];
  /** 属性图片 */
  productPropImgs?: string[];
  /** 属性标识（注意：订单使用） */
  productProperties?: string;
  /** 属性名称（注意：订单使用） */
  productPropertiesName?: string;
  /** 属性名称parse（注意：sku使用） */
  productPropertiesNameParse?: string;
  /** 商品详情属性 */
  productProps?: string;
  productPropsJa?: string;
  productPropsJaList?: string;
  /** 商品sku属性列表 */
  productPropsList?: string;
  /** 商品资源 */
  productResource?: ProductResourceRespDTO;
  /** 商品价格 */
  productSellPrice?: number;
  /** 商品销售价格-日元 */
  productSellPriceJpy?: number;
  /** 商品价格范围 */
  productSellPriceRange?: string;
  /** 商品销售价格范围-日元 */
  productSellPriceRangeJpy?: string;
  /**
   * 销量
   * @format int32
   */
  productSellQuantity?: number;
  /** 平台商品SKU */
  productSku?: string;
  /** sku对应图片（注意：订单使用） */
  productSkuImg?: string;
  /** 档口货号 */
  productStallNumber?: string;
  /**
   * 库存
   * @format int32
   */
  productStockQuantity?: number;
  /** @format int32 */
  productTag?: number;
  /** 商品标题 */
  productTitle?: string;
  /** 商品标题翻译; 日文 */
  productTitleEn?: string;
  /** 商品标题翻译; 日文 */
  productTitleJp?: string;
  /** 商品标题翻译; 日文 */
  productTitleKr?: string;
  /** 商品视频介绍 */
  productVideo?: string;
  /** 问题-商品类型【问题一：商品类型】（注意：订单使用） */
  questionClassificationName?: string;
  /** 请求商品详情URL */
  requestProductDetailUrl?: string;
  /**
   * 寻源单复购申请表id
   * @format int64
   */
  searchSourcePriceId?: number;
  /** 二级类目编码 */
  secondaryProductCateCode?: string;
  /** 卖家id */
  sellerId?: string;
  /** 掌柜昵称 */
  sellerNick?: string;
  /** 店铺code */
  shopCode?: string;
  /** 发货地 */
  shopLocation?: string;
  /** 店铺主图 */
  shopMainImg?: string;
  /** 店铺名称 */
  shopName?: string;
  /** 店铺商品SKU(店铺商品库)（注意：订单使用） */
  shopProductSku?: string;
  /**
   * 1-单尺码; 2-多尺码（注意：订单使用）
   * @format int32
   */
  sizeFlag?: number;
  /** 商品sku信息 */
  skuList?: SkuRespDTO[];
  stationCode?: string;
}

/** ProductDetailResponse */
export interface ProductDetailResponse {
  addTime?: string;
  /** @format int32 */
  batchNumber?: number;
  cateCode?: string;
  categoryCode?: string;
  channelSource?: string;
  /** @format int32 */
  code?: number;
  consignPrice?: number;
  /** @format int32 */
  countryProductTag?: number;
  dataSource?: string;
  description?: string;
  descriptionImgs?: string[];
  detailUrl?: string;
  dkHh?: string;
  /** @format double */
  height?: number;
  /** @format int32 */
  htmlType?: number;
  isOnePsale?: boolean;
  /** @format int32 */
  isOnline?: number;
  itemImgsB?: string[];
  itemImgsS?: string[];
  jxhyPrice?: number;
  /** @format double */
  length?: number;
  mainImg?: string;
  material?: string;
  msg?: string;
  originalPrice?: number;
  platformCode?: string;
  priceRangeList?: object[];
  priceRangeStr?: string;
  productCode?: string;
  /** @format int32 */
  productComment?: number;
  productId?: string;
  /** @format int32 */
  productTag?: number;
  props?: ProductProp[];
  propsDict?: Record<string, string>;
  propsDictJa?: Record<string, string>;
  propsImg?: ProductPropImg[];
  propsJa?: ProductProp[];
  sellPrice?: number;
  /** @format int32 */
  sellQuantity?: number;
  sellerInfo?: SellerInfo;
  shopCode?: string;
  shopId?: string;
  shopLocation?: string[];
  shopUrl?: string;
  skuList?: ProductSku[];
  /** @format int32 */
  startCount?: number;
  /** @format int32 */
  stockQuantity?: number;
  title?: string;
  titleJa?: string;
  videoImg?: string;
  videoUrl?: string;
  /** @format int64 */
  weight?: number;
  /** @format double */
  width?: number;
}

/** ProductDetailSaveReqDTO */
export interface ProductDetailSaveReqDTO {
  data?: ProductDetailDTO;
  param?: ProductDetailParamReqDTO;
}

/** ProductDetailUrlReqDTO */
export interface ProductDetailUrlReqDTO {
  channelList?: number[];
  /**
   * 是否需要1688实时数据 0 1
   * @format int32
   */
  currentData?: number;
  /** @format int64 */
  customerId?: number;
  detailUrl?: string;
  stationCode?: string;
}

/** ProductDetailVo */
export interface ProductDetailVo {
  /**
   * 来源类型;1-档口(市场购);2-线上平台(透明购);4-线下
   * @format int32
   */
  channel?: number;
  consignPrice?: number;
  consignPriceMax?: number;
  /**
   * 高，单位cm
   * @format double
   */
  height?: number;
  /** 完整层级类目代码 */
  intactCateCode?: string;
  /** 完整层级类目名称 */
  intactCateName?: string;
  isOnePsale?: boolean;
  /**
   * 是否有效：1:有效;0:无效;2:备用
   * @format int32
   */
  isOnline?: number;
  /**
   * 长，单位cm
   * @format double
   */
  length?: number;
  /** 英文材质 */
  materialInfoEn?: string;
  /** 日文材质 */
  materialInfoJa?: string;
  /** 韩文材质 */
  materialInfoKr?: string;
  /** 中文材质 */
  materialInfoZh?: string;
  /**
   * 直营商城标识
   * @format int32
   */
  offlineDirectSaleFlag?: number;
  /**
   * 最小购买数/起拍数
   * @format int32
   */
  productBuyMininum?: number;
  /** 类目编码 */
  productCateCode?: string;
  /** 商品SPU */
  productCode?: string;
  /** 商品详情图 */
  productDescImgs?: string[];
  /** 商品描述 */
  productDescription?: string;
  /** 英文商品描述 */
  productDescriptionEn?: string;
  /** 日文商品描述 */
  productDescriptionJa?: string;
  /** 韩文商品描述 */
  productDescriptionKr?: string;
  /** 商品链接 */
  productDetailSniffUrl?: string;
  /**
   * spu主键
   * @format int64
   */
  productId?: number;
  /** 中文品名 */
  productItemCategoryZh?: string;
  /** 商品轮播图 */
  productItemImgs?: ProductImageUrlDTO[];
  /** 主图 */
  productMainImg?: string;
  /** 商品阶梯价 */
  productPriceLadderVoList?: ProductPriceLadderVo[];
  /**
   * 规格属性创建模式，0-属性模式，1-自定义模式
   * @format int32
   */
  productPropsAddMode?: number;
  /** 规格属性映射列表，如：[{'0:0':'颜色:白色'}] */
  productPropsMap?: Record<string, string>;
  /** sku规格属性列表 */
  productSkuVoList?: ProductSkuVo[];
  /** 商品名称 */
  productTitle?: string;
  /** 商品主视频 */
  productVideo?: string;
  /** 供应商id */
  supplierId?: string;
  /** 供应商名称 */
  supplierName?: string;
  /** 供应商spu */
  supplierSpu?: string;
  /** 运输属性 */
  transportationAttrCodeList?: string[];
  /**
   * 重，单位g
   * @format int64
   */
  weight?: number;
  /**
   * 宽，单位cm
   * @format double
   */
  width?: number;
}

/** ProductEditReqDTO */
export interface ProductEditReqDTO {
  productCode?: string;
  productStallNumber?: string;
}

/** ProductHsCodeKeywordDeleteReqDTO */
export interface ProductHsCodeKeywordDeleteReqDTO {
  /**
   * 报关名称与hsCode映射关系
   * @format int64
   */
  id?: number;
  /** 站点code */
  stationCode?: string;
}

/** ProductHsCodeKeywordMappingPageReqDTO */
export interface ProductHsCodeKeywordMappingPageReqDTO {
  /** hsCode */
  hsCode?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** 报关中文品名 */
  productHsCodeKeywordZh?: string;
  /** @format int32 */
  startIndex?: number;
  /** 站点code */
  stationCode?: string;
  /** 税率 */
  taxRate?: number;
}

/** ProductHsCodeKeywordMappingRespDTO */
export interface ProductHsCodeKeywordMappingRespDTO {
  /** 描述 */
  description?: string;
  /** 描述(站点多语言) */
  descriptionLanguage?: string;
  /** hsCode */
  hsCode?: string;
  /**
   * 品名与hsCode映射id
   * @format int64
   */
  id?: number;
  /**
   * 商品HSCODE关键字id
   * @format int64
   */
  productHsCodeKeywordId?: number;
  /** 申报中文品名 */
  productHsCodeKeywordZh?: string;
  /** 站点code */
  stationCode?: string;
  /** 税率 */
  taxRate?: number;
}

/** ProductHsCodeKeywordPageReqDTO */
export interface ProductHsCodeKeywordPageReqDTO {
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /**
   * hsCode关键字Id
   * @format int64
   */
  productHsCodeKeywordId?: number;
  /** 报关中文品名 */
  productHsCodeKeywordZh?: string;
  /** @format int32 */
  startIndex?: number;
}

/** ProductHsCodeKeywordReqDTO */
export interface ProductHsCodeKeywordReqDTO {
  /** 描述 */
  description?: string;
  /** 描述（站点语种） */
  descriptionLanguage?: string;
  /** hsCode */
  hsCode?: string;
  /**
   * 报关名称与hsCode映射关系
   * @format int64
   */
  id?: number;
  /**
   * hsCode关键字Id
   * @format int64
   */
  productHsCodeKeywordId?: number;
  /** 报关中文品名 */
  productHsCodeKeywordZh?: string;
  /**
   * 来源
   * @format int32
   */
  source?: number;
  /** 站点code */
  stationCode?: string;
  /** 税率 */
  taxRate?: number;
}

/** ProductHsCodeKeywordRespDTO */
export interface ProductHsCodeKeywordRespDTO {
  /**
   * 中文品名id
   * @format int64
   */
  id?: number;
  /** hsCode关键字（日文） */
  productHsCodeKeywordJp?: string;
  /** hsCode关键字（韩文） */
  productHsCodeKeywordKr?: string;
  /** hsCode关键字（英文） */
  productHsCodeKeywordUk?: string;
  /** hsCode关键字(中文) */
  productHsCodeKeywordZh?: string;
}

/**
 * ProductImageConfigRespDTO
 * 无水印图配置
 */
export interface ProductImageConfigRespDTO {
  /**
   * 次数/月
   * @format int32
   */
  num?: number;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  stationCode?: string;
  /** 会员身份名称 */
  templateName?: string;
}

/** ProductImageUrlDTO */
export interface ProductImageUrlDTO {
  url?: string;
}

/** ProductInfo */
export interface ProductInfo {
  /** @format int32 */
  countryProductTag?: number;
  /**
   * 高，单位cm
   * @format double
   */
  height?: number;
  /** 完整层级类目名称 */
  intactCateName?: string;
  /**
   * 是否有效：1:有效;0:无效;2:备用
   * @format int32
   */
  isOnline?: number;
  /**
   * 长，单位cm
   * @format double
   */
  length?: number;
  /**
   * 直营商城标识
   * @format int32
   */
  offlineDirectSaleFlag?: number;
  /** 类目编码 */
  productCateCode?: string;
  /** 商品编码 */
  productCode?: string;
  /** sniff商品详情URL */
  productDetailSniffUrl?: string;
  /** 商品url */
  productDetailUrl?: string;
  /** 商品轮播图 */
  productItemImgs?: ProductImageUrlDTO[];
  /** 商品主图 */
  productMainImg?: string;
  /** 商品价格 */
  productSellPrice?: number;
  /** 商品货号 */
  productStallNumber?: string;
  /**
   * 商品标签 1 精选货源
   * @format int32
   */
  productTag?: number;
  /** 商品标题 */
  productTitle?: string;
  /** 供应商id */
  supplierId?: string;
  /** 供应商名称 */
  supplierName?: string;
  /** 供应商款式编码 */
  supplierSpu?: string;
  /** 运输属性 */
  transportationAttrCode?: string;
  /**
   * 重，单位kg
   * @format int64
   */
  weight?: number;
  /**
   * 宽，单位cm
   * @format double
   */
  width?: number;
}

/** ProductItemCategoryZhUpdateVO */
export interface ProductItemCategoryZhUpdateVO {
  /**
   * 商品报关ID
   * @format int64
   */
  productCustomsId?: number;
  /** 中文品名 */
  productItemCategoryZh?: string;
  /** sku */
  productSku?: string;
  /** sku列表 */
  productSkuList?: string[];
}

/** ProductKpiDTO */
export interface ProductKpiDTO {
  /** @format int32 */
  avgDeliveryTime?: number;
  /** @format date-time */
  createTime?: string;
  defectivePer?: number;
  /** @format int32 */
  defectiveQty?: number;
  errorPer?: number;
  /** @format int32 */
  errorQty?: number;
  minPurchaseUnitPrice?: number;
  moreLessPer?: number;
  /** @format int32 */
  moreLessQty?: number;
  productCode?: string;
  /**
   * 商品不良率显示:1-不良率≥40%,2-不良率≥50%
   * @format int32
   */
  showDefectiveStatus?: number;
  /**
   * 回货时长过长显示:3-回货时长≥15天
   * @format int32
   */
  showDeliveryTimeStatus?: number;
  /**
   * 优先显示状态:1-不良率≥40%,2-不良率≥50%,3-回货时长≥15天
   * @format int32
   */
  showStatus?: number;
  /** @format int32 */
  totalPurchaseQty?: number;
  /** @format date-time */
  updateTime?: string;
}

/** ProductMallFrontendRespDTO */
export interface ProductMallFrontendRespDTO {
  mallNameEn?: string;
  mallNameJp?: string;
  mallNameKr?: string;
  mallNameZh?: string;
  /** @format int64 */
  productMallFrontendId?: number;
}

/** ProductOcrUpdateVo */
export interface ProductOcrUpdateVo {
  /** OCR处理后的描述图片 */
  ocrImageList?: string[];
  /** 商品编码 */
  productCode?: string;
}

/** ProductOperatorLogVo */
export interface ProductOperatorLogVo {
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** @format int64 */
  id?: number;
  /** 操作编码 */
  operateCode?: string;
  /** 操作内容 */
  operateContent?: string;
  /**
   * 操作对象:1-供应商,2-spu,3-sku
   * @format int32
   */
  operateObject?: number;
  /** 操作人id */
  operateUserId?: string;
  /** 操作人姓名 */
  operateUserName?: string;
  /** 更新后的值 */
  payload?: string;
  /** 商品SKU */
  productSku?: string;
}

/** ProductPluginSearchLogReqVo */
export interface ProductPluginSearchLogReqVo {
  /**
   * 客户ID
   * @format int64
   */
  customerId?: number;
  /** 关键字 */
  keyword?: string;
  /** 平台类型;TB:淘宝;AM:1688;TM:天猫;VC:搜款网;WS:网商园 */
  platformType?: string;
  /**
   * 商品类目ID
   * @format int64
   */
  productCategoryFrontendId?: number;
}

/** ProductPopularMallReqDTO */
export interface ProductPopularMallReqDTO {
  blackCategoryCodeList?: string[];
  categorySourceList?: string[];
  /** @format int64 */
  customerId?: number;
  disableProductCategoryCodeList?: string[];
  dislikeProductCodeList?: string[];
  /** @format date-time */
  fetchDate?: string;
  /** @format int64 */
  mallCategoryId?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
}

/** ProductPopularMallRespDTO */
export interface ProductPopularMallRespDTO {
  /**
   * 客户行为;1-喜欢;2-不喜欢
   * @format int32
   */
  behaviorFlag?: number;
  /**
   * 黑名单加入时间
   * @format date-time
   */
  blackAddTime?: string;
  /** 黑名单原因 */
  blackReason?: string;
  /**
   * 黑名单原因编码
   * @format int32
   */
  blackReasonCode?: number;
  /**
   * 黑名单标记
   * @format int32
   */
  blackTag?: number;
  /**
   * 黑名单类型:1-商品,2-供应商,类型为2的无法解除黑名单限制
   * @format int32
   */
  blackType?: number;
  /** 黑名单操作员id */
  blackUserId?: string;
  /** 黑名单操作员 */
  blackUserName?: string;
  /**
   * 渠道
   * @format int32
   */
  channel?: number;
  /** 一件代发价 */
  consignPrice?: number;
  /** 一件代发价,当地汇率价格 */
  consignPriceJpy?: number;
  /** @format int32 */
  countryProductTag?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /**
   * 是否收藏;1-已收藏;0-未收藏
   * @format int32
   */
  favoriteFlag?: number;
  /** @format int32 */
  isCkbDiscount?: number;
  jxhyPrice?: number;
  originalPrice?: number;
  productCode?: string;
  productMainImg?: string;
  /** 商品原销售价格 */
  productOriginPriceRange?: string;
  /** 商品原销售价格-日元 */
  productOriginPriceRangeJpy?: string;
  /** 商品阶梯价 */
  productPriceLadderList?: ProductPriceLadderRespDTO[];
  productSellPrice?: number;
  productSellPriceJpy?: number;
  /** 商品销售价格范围 */
  productSellPriceRange?: string;
  /** 商品销售价格范围-日元 */
  productSellPriceRangeJpy?: string;
  /** @format int32 */
  productTag?: number;
  productTitle?: string;
  /** 商品标题翻译; 日文 */
  productTitleEn?: string;
  /** 商品标题翻译; 日文 */
  productTitleJp?: string;
  /** 商品标题翻译; 日文 */
  productTitleKr?: string;
  /** 店铺编码 */
  shopCode?: string;
  /** 店铺主图 */
  shopMainImg?: string;
  /** 商品sku信息 */
  skuList?: SkuRespDTO[];
  stationCode?: string;
}

/** ProductPriceLadderReq */
export interface ProductPriceLadderReq {
  /** @format int32 */
  count?: number;
  /**
   * 结束数量
   * @format int32
   */
  endQty?: number;
  /** 销售单价 */
  price?: number;
  /** 采购单价 */
  purchasePrice?: number;
  /**
   * 起始数量
   * @format int32
   */
  startQty?: number;
}

/** ProductPriceLadderRespDTO */
export interface ProductPriceLadderRespDTO {
  appPrice?: number;
  /** @format int32 */
  count?: number;
  discount?: number;
  originPrice?: number;
  price?: number;
  purchasePrice?: number;
}

/** ProductPriceLadderVo */
export interface ProductPriceLadderVo {
  /** @format int32 */
  count?: number;
  /**
   * 结束数量
   * @format int32
   */
  endQty?: number;
  /** 销售单价 */
  price?: number;
  /** 采购单价 */
  purchasePrice?: number;
  /**
   * 起始数量
   * @format int32
   */
  startQty?: number;
}

/** ProductPriceRequVO */
export interface ProductPriceRequVO {
  /**
   * 天
   * @format int32
   */
  day?: number;
  /** 商品编码 */
  productCode?: string;
  time?: string;
}

/** ProductProp */
export interface ProductProp {
  name?: string;
  value?: string;
  values?: string[];
}

/** ProductPropDTO */
export interface ProductPropDTO {
  name?: string;
  value?: string;
}

/** ProductPropGroupRespDTO */
export interface ProductPropGroupRespDTO {
  id?: string;
  props?: ProductPropRespDTO[];
  type?: string;
}

/** ProductPropImg */
export interface ProductPropImg {
  properties?: string;
  url?: string;
  url_s?: string;
}

/** ProductPropImgDTO */
export interface ProductPropImgDTO {
  properties?: string;
  url?: string;
  url_s?: string;
}

/** ProductPropRespDTO */
export interface ProductPropRespDTO {
  id?: string;
  propKey?: string;
  propValue?: string;
  props?: ProductPropRespDTO[];
  /** @format int64 */
  sort?: number;
  type?: string;
  url?: string;
}

/** ProductQueryDTO */
export interface ProductQueryDTO {
  /**
   * 黑名单标记:1-黑名单
   * @format int32
   */
  blackTag?: number;
  /** 是否一件代发 true:是 */
  isOnePsale?: boolean;
  /** @format int32 */
  pageNum?: number;
  /**
   * 导出第几页结束
   * @format int32
   */
  pageNumEnd?: number;
  /**
   * 导出第几页开始
   * @format int32
   */
  pageNumStart?: number;
  /** @format int32 */
  pageSize?: number;
  /** 平台类型;TB:淘宝;AM:1688;TM:天猫;VC:搜款网;WS:网商园 */
  platformType?: string;
  /** 商品编码 */
  productCode?: string;
  /** 商品codeList */
  productCodeList?: string[];
  /** @format int32 */
  startIndex?: number;
  /** 采购链接 */
  url?: string;
}

/** ProductReferenceEditReqDTO */
export interface ProductReferenceEditReqDTO {
  /** 后台类目 */
  cateCode?: string;
  /** 高，单位cm */
  height?: number;
  /**
   * 参考库id
   * @format int64
   */
  id?: number;
  /** 长，单位cm */
  length?: number;
  /** 参考分类名称（英语） */
  referenceCategoryEn?: string;
  /** 参考分类名称（日语） */
  referenceCategoryJp?: string;
  /** 参考分类名称（韩文） */
  referenceCategoryKr?: string;
  /** 参考分类名称（中文） */
  referenceCategoryZh?: string;
  /** 商品图片 */
  referenceProductImg?: string;
  /** 参考商品简称（英语） */
  referenceProductNameEn?: string;
  /** 参考商品简称（日语） */
  referenceProductNameJp?: string;
  /** 参考商品简称（韩文） */
  referenceProductNameKr?: string;
  /** 参考商品简称（中文） */
  referenceProductNameZh?: string;
  /**
   * 体总（单位：g）
   * @format int64
   */
  weight?: number;
  /** 宽，单位cm */
  width?: number;
}

/** ProductReferencePageReqDTO */
export interface ProductReferencePageReqDTO {
  /** 后台类目 */
  cateCode?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** 类目分类 */
  referenceCategoryZh?: string;
  /** @format int32 */
  startIndex?: number;
}

/** ProductReferenceRespDTO */
export interface ProductReferenceRespDTO {
  /** 分类编码 */
  cateCode?: string;
  /** 分类名称 */
  cateName?: string;
  /**
   * 高，单位cm
   * @format double
   */
  height?: number;
  /**
   * 品名与HSCODE映射id
   * @format int64
   */
  id?: number;
  /**
   * 长，单位cm
   * @format double
   */
  length?: number;
  /** 参考分类名称（英语） */
  referenceCategoryEn?: string;
  /** 参考分类名称（日语） */
  referenceCategoryJp?: string;
  /** 参考分类名称（韩文） */
  referenceCategoryKr?: string;
  /** 参考分类名称（中文） */
  referenceCategoryZh?: string;
  /** 商品图片 */
  referenceProductImg?: string;
  /** 参考商品简称（英语） */
  referenceProductNameEn?: string;
  /** 参考商品简称（日语） */
  referenceProductNameJp?: string;
  /** 参考商品简称（韩文） */
  referenceProductNameKr?: string;
  /** 参考商品简称（中文） */
  referenceProductNameZh?: string;
  /**
   * 体总（单位：g）
   * @format int32
   */
  weight?: number;
  /**
   * 宽，单位cm
   * @format double
   */
  width?: number;
}

/** ProductReferenceSaveReqDTO */
export interface ProductReferenceSaveReqDTO {
  /** 后台类目 */
  cateCode?: string;
  /** 高，单位cm */
  height?: number;
  /** 长，单位cm */
  length?: number;
  /** 参考分类名称（英语） */
  referenceCategoryEn?: string;
  /** 参考分类名称（日语） */
  referenceCategoryJp?: string;
  /** 参考分类名称（韩文） */
  referenceCategoryKr?: string;
  /** 参考分类名称（中文） */
  referenceCategoryZh?: string;
  /** 商品图片 */
  referenceProductImg?: string;
  /** 参考商品简称（英语） */
  referenceProductNameEn?: string;
  /** 参考商品简称（日语） */
  referenceProductNameJp?: string;
  /** 参考商品简称（韩文） */
  referenceProductNameKr?: string;
  /** 参考商品简称（中文） */
  referenceProductNameZh?: string;
  /**
   * 体总（单位：g）
   * @format int64
   */
  weight?: number;
  /** 宽，单位cm */
  width?: number;
}

/** ProductReq */
export interface ProductReq {
  /**
   * 来源类型;1-档口(市场购);2-线上平台(透明购);4-线下
   * @format int32
   */
  channel?: number;
  /**
   * 高，单位cm
   * @format double
   */
  height?: number;
  intactCateCode?: string;
  intactCateName?: string;
  /**
   * 是否有效：1:启用;0:禁用;2:备用
   * @format int32
   */
  isOnline?: number;
  /**
   * 长，单位cm
   * @format double
   */
  length?: number;
  /** 英文材质 */
  materialInfoEn?: string;
  /** 日文材质 */
  materialInfoJa?: string;
  /** 韩文材质 */
  materialInfoKr?: string;
  /** 中文材质 */
  materialInfoZh?: string;
  /**
   * 直营商城标识
   * @format int32
   */
  offlineDirectSaleFlag?: number;
  /**
   * 最小购买数/起拍数
   * @format int32
   */
  productBuyMininum?: number;
  /** 类目编码; */
  productCateCode?: string;
  /** 商品SPU */
  productCode?: string;
  /** 商品详情图 */
  productDescImgs?: string[];
  /** 中文商品描述 */
  productDescription?: string;
  /** 英文商品描述 */
  productDescriptionEn?: string;
  /** 日文商品描述 */
  productDescriptionJa?: string;
  /** 韩文商品描述 */
  productDescriptionKr?: string;
  /** 商品链接不能为空 */
  productDetailSniffUrl?: string;
  /**
   * spu主键
   * @format int64
   */
  productId?: number;
  /** 中文品名 */
  productItemCategoryZh?: string;
  /** 商品轮播图 */
  productItemImgs?: ProductImageUrlDTO[];
  /** 主图 */
  productMainImg?: string;
  /** 商品阶梯价 */
  productPriceLadderReqList?: ProductPriceLadderReq[];
  /**
   * 规格属性创建模式，0-属性模式，1-自定义模式
   * @format int32
   */
  productPropsAddMode?: number;
  /** 规格属性映射列表，如：[{'0:0':'颜色:白色'}] */
  productPropsMap?: Record<string, string>;
  /** sku规格属性列表 */
  productSkuReqList?: ProductSkuReq[];
  /** 商品名称 */
  productTitle?: string;
  /** 商品主视频 */
  productVideo?: string;
  /** 供应商id */
  supplierId?: string;
  /** 供应商名称 */
  supplierName?: string;
  /** 供应商spu */
  supplierSpu?: string;
  /** 运输属性 */
  transportationAttrCodeList?: string[];
  /**
   * 重，单位g
   * @format int64
   */
  weight?: number;
  /**
   * 宽，单位cm
   * @format double
   */
  width?: number;
}

/** ProductResourceRespDTO */
export interface ProductResourceRespDTO {
  descImgs?: string[];
  itemImgs?: string[];
  mainImg?: string;
  propImgs?: string;
  video?: string;
}

/** ProductRespDTO */
export interface ProductRespDTO {
  /**
   * 商品一手数量
   * @format int32
   */
  batchNumber?: number;
  /**
   * 客户行为;1-喜欢;2-不喜欢
   * @format int32
   */
  behaviorFlag?: number;
  /**
   * 黑名单加入时间
   * @format date-time
   */
  blackAddTime?: string;
  /**
   * 黑名单;1-黑名单;0-白名单
   * @format int32
   */
  blackFlag?: number;
  /** 黑名单原因 */
  blackReason?: string;
  /**
   * 商品加入黑名单原因编码
   * @format int32
   */
  blackReasonCode?: number;
  /**
   * 黑名单标记
   * @format int32
   */
  blackTag?: number;
  /**
   * 黑名单类型:1-商品,2-供应商,类型为2的无法解除黑名单限制
   * @format int32
   */
  blackType?: number;
  /** 黑名单操作员id */
  blackUserId?: string;
  /** 黑名单操作员 */
  blackUserName?: string;
  /**
   * 来源类型;1-档口(市场购);2-线上平台（透明购）
   * @format int32
   */
  channel?: number;
  consignPrice?: number;
  consignPriceJpy?: number;
  consignPriceMax?: number;
  consignPriceMaxJpy?: number;
  /** @format int32 */
  countryProductTag?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /**
   * 是否收藏;1-已收藏;0-未收藏
   * @format int32
   */
  favoriteFlag?: number;
  /**
   * 高，单位cm
   * @format double
   */
  height?: number;
  /** @format int32 */
  isCkbDiscount?: number;
  isOnePsale?: boolean;
  /** @format int32 */
  isOnline?: number;
  jxhyPrice?: number;
  /**
   * 长，单位cm
   * @format double
   */
  length?: number;
  /** 材质信息-日文（注意：订单使用） */
  materialInfoJa?: string;
  /** 材质信息-中文（注意：订单使用） */
  materialInfoZh?: string;
  /**
   * oem最小起订量
   * @format int32
   */
  minOrderQuantity?: number;
  /**
   * OEM商品分类表id：1-服装; 2-杂货; 3-辅料
   * @format int32
   */
  oemProductClassificationId?: number;
  /** 商品原始价格 */
  originalPrice?: number;
  paymentDetail?: string;
  /** @format int32 */
  paymentType?: number;
  /** 平台类型;TB:淘宝;AM:1688;TM:天猫;VC:搜款网;WS:网商园 */
  platformType?: string;
  /** 商品APP价格 */
  productAppSellPrice?: number;
  /** 品牌id */
  productBrandId?: string;
  /** 品牌名称 */
  productBrandName?: string;
  /**
   * 最小购买数/起拍数
   * @format int32
   */
  productBuyMininum?: number;
  /** 类目编码; */
  productCateCode?: string;
  /** 前台一级类目名 */
  productCategoryFrontendFirstName?: string;
  /** 前台一级类目名jp */
  productCategoryFrontendFirstNameJp?: string;
  /**
   * 前台类目二级ID
   * @format int64
   */
  productCategoryFrontendNdId?: number;
  /** 前台二级类目名 */
  productCategoryFrontendSecondName?: string;
  /** 前台二级类目名jp */
  productCategoryFrontendSecondNameJp?: string;
  /**
   * 平台类目状态;1-启用;0-停用
   * @format int32
   */
  productCategoryStatusFlag?: number;
  /** 平台商品SPU */
  productCode?: string;
  /**
   * 商品评论数
   * @format int32
   */
  productCommentCount?: number;
  /** 描述图片 */
  productDescImgs?: string[];
  /** 商品描述 */
  productDescription?: string;
  productDescriptionEn?: string;
  productDescriptionJa?: string;
  productDescriptionKr?: string;
  /** 详情URL */
  productDetailUrl?: string;
  /** item缩略图（大） */
  productItemImgs?: ProductImageUrlDTO[];
  /** item缩略图（小） */
  productItemImgsS?: ProductImageUrlDTO[];
  /** 主图 */
  productMainImg?: string;
  /**
   * 前台市场ID
   * @format int64
   */
  productMallFrontendId?: number;
  /** 商品原销售价格 */
  productOriginPriceRange?: string;
  /** 商品原销售价格-日元 */
  productOriginPriceRangeJpy?: string;
  /** 商品阶梯价 */
  productPriceLadderList?: ProductPriceLadderRespDTO[];
  /** 商品阶梯价 */
  productPriceRangeLadderList?: ProductPriceLadderRespDTO[];
  /** 商品属性 */
  productPropGroupJaList?: ProductPropGroupRespDTO[];
  /** 商品属性 */
  productPropGroupList?: ProductPropGroupRespDTO[];
  /** 属性图片 */
  productPropImgs?: string[];
  /** 属性标识（注意：订单使用） */
  productProperties?: string;
  /** 属性名称（注意：订单使用） */
  productPropertiesName?: string;
  /** 属性名称parse（注意：sku使用） */
  productPropertiesNameParse?: string;
  /** 商品详情属性 */
  productProps?: string;
  productPropsJa?: string;
  productPropsJaList?: string;
  /** 商品sku属性列表 */
  productPropsList?: string;
  /** 商品资源 */
  productResource?: ProductResourceRespDTO;
  /** 商品价格 */
  productSellPrice?: number;
  /** 商品销售价格-日元 */
  productSellPriceJpy?: number;
  /** 商品价格范围 */
  productSellPriceRange?: string;
  /** 商品价格范围-日币 */
  productSellPriceRangeJpy?: string;
  /**
   * 销售价类型， 0-原价,1-精选货源价,2-销售折扣价
   * @format int32
   */
  productSellPriceType?: number;
  /**
   * 销量
   * @format int32
   */
  productSellQuantity?: number;
  /** 平台商品SKU */
  productSku?: string;
  /** sku对应图片（注意：订单使用） */
  productSkuImg?: string;
  /** 档口货号 */
  productStallNumber?: string;
  /**
   * 库存
   * @format int32
   */
  productStockQuantity?: number;
  /** @format int32 */
  productTag?: number;
  /** 商品名称 */
  productTitle?: string;
  /** 商品标题翻译; 日文 */
  productTitleEn?: string;
  /** 商品标题翻译; 日文 */
  productTitleJp?: string;
  /** 商品标题翻译; 日文 */
  productTitleKr?: string;
  /** 商品视频介绍 */
  productVideo?: string;
  /** 问题-商品类型【问题一：商品类型】（注意：订单使用） */
  questionClassificationName?: string;
  /** 请求商品详情URL */
  requestProductDetailUrl?: string;
  /**
   * 寻源单复购申请表id
   * @format int64
   */
  searchSourcePriceId?: number;
  /** 二级类目编码 */
  secondaryProductCateCode?: string;
  /** 卖家id */
  sellerId?: string;
  /** 掌柜昵称 */
  sellerNick?: string;
  /** 店铺code */
  shopCode?: string;
  /**
   * 店铺是否为黑名单
   * @format int32
   */
  shopIsBlack?: number;
  /** 发货地 */
  shopLocation?: string;
  /** 店铺主图 */
  shopMainImg?: string;
  /** 店铺名称 */
  shopName?: string;
  /** 店铺商品SKU(店铺商品库)（注意：订单使用） */
  shopProductSku?: string;
  /** 店铺链接 */
  shopUrl?: string;
  /**
   * 1-单尺码; 2-多尺码（注意：订单使用）
   * @format int32
   */
  sizeFlag?: number;
  /** 商品sku信息 */
  skuList?: SkuRespDTO[];
  stationCode?: string;
  /** 运输属性列表 */
  transportationAttrCodeList?: string[];
  /** 运输属性(多个逗号隔开) */
  transportationAttrNameStr?: string;
  /**
   * 重，单位kg
   * @format int64
   */
  weight?: number;
  /**
   * 宽，单位cm
   * @format double
   */
  width?: number;
}

/** ProductSameStylePutInRespVO */
export interface ProductSameStylePutInRespVO {
  /**
   * 来源类型;1-档口(市场购);2-线上平台（透明购）
   * @format int32
   */
  channel?: number;
  /** 同款商品SPU */
  productCode?: string;
  /**
   * 同款商品id
   * @format int64
   */
  productSameStyleId?: number;
}

/** ProductSameStyleRespVO */
export interface ProductSameStyleRespVO {
  /** @format int32 */
  channel?: number;
  /**
   * 商品价格
   * @format int32
   */
  countryProductTag?: number;
  /** @format date-time */
  createTime?: string;
  originalId?: string;
  platformType?: string;
  productCode?: string;
  productDetailUrl?: string;
  productMainImg?: string;
  /** @format int64 */
  productSameStyleId?: number;
  productSellPrice?: number;
  /** 商品价格 */
  productSellPriceJpa?: number;
  /** @format int32 */
  productStockQuantity?: number;
  productTitle?: string;
  putIn?: boolean;
  shopLocation?: string;
  sourceProductCode?: string;
  /** @format date-time */
  updateTime?: string;
}

/** ProductSimilar */
export interface ProductSimilar {
  /** @format int32 */
  channel?: number;
  /** @format date-time */
  createTime?: string;
  mallCode?: string;
  platformType?: string;
  productCode?: string;
  productSellPrice?: number;
  /** @format int32 */
  productSellQuantity?: number;
  productSimilarId?: string;
  similarProductCode?: string;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  status?: number;
  /** @format date-time */
  updateTime?: string;
}

/** ProductSimilarSearchReqDTO */
export interface ProductSimilarSearchReqDTO {
  /** @format int32 */
  channel?: number;
  channelList?: number[];
  /** @format int64 */
  customerId?: number;
  descendOrder?: boolean;
  dislikeProductCodeList?: string[];
  mallCodeList?: string[];
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  platformType?: string;
  productCode?: string;
  /** @format int64 */
  productMallFrontendId?: number;
  sellPriceEnd?: number;
  sellPriceStart?: number;
  sortType?: string;
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
}

/** ProductSimpleRespDTO */
export interface ProductSimpleRespDTO {
  /**
   * 高，单位cm
   * @format double
   */
  height?: number;
  /** 完整层级类目代码; */
  intactCateCode?: string;
  /** 完整层级类目名称; */
  intactCateName?: string;
  /**
   * 长，单位cm
   * @format double
   */
  length?: number;
  /** 材质信息中文 */
  materialInfoZh?: string;
  /** 类目编码; */
  productCateCode?: string;
  /** 平台商品SPU */
  productCode?: string;
  /** 描述图片 */
  productDescImgs?: string[];
  /** 商品描述 */
  productDescription?: string;
  /** 详情URL */
  productDetailUrl?: string;
  /** 中文品名 */
  productItemCategoryZh?: string;
  /** item缩略图（大） */
  productItemImgs?: ProductImageUrlDTO[];
  /** 主图 */
  productMainImg?: string;
  /** 商品名称 */
  productTitle?: string;
  /** 商品名称 */
  productTitleJa?: string;
  /**
   * 重，单位g
   * @format int64
   */
  weight?: number;
  /**
   * 宽，单位cm
   * @format double
   */
  width?: number;
}

/** ProductSku */
export interface ProductSku {
  consignPrice?: number;
  /** @format int32 */
  countryProductTag?: number;
  discountprice?: number;
  /** @format double */
  height?: number;
  isOnePsale?: boolean;
  jxhyPrice?: number;
  /** @format double */
  length?: number;
  price?: number;
  productOriginSellPrice?: number;
  properties?: string;
  propertiesName?: string;
  propertiesNameJa?: string;
  /** @format int32 */
  quantity?: number;
  /** @format int32 */
  sellQuantity?: number;
  /** @format int32 */
  skuComment?: number;
  skuId?: string;
  specId?: string;
  /** @format int64 */
  weight?: number;
  /** @format double */
  width?: number;
}

/** ProductSkuDTO */
export interface ProductSkuDTO {
  consign_price?: number;
  /** @format int32 */
  country_product_tag?: number;
  discountprice?: number;
  /** @format double */
  height?: number;
  is_one_psale?: boolean;
  jxhy_price?: number;
  /** @format double */
  length?: number;
  price?: number;
  productOriginSellPrice?: number;
  properties?: string;
  properties_name?: string;
  properties_name_ja?: string;
  /** @format int32 */
  quantity?: number;
  /** @format int32 */
  sell_quantity?: number;
  /** @format int32 */
  sku_comment?: number;
  sku_id?: string;
  spec_id?: string;
  /** @format int64 */
  weight?: number;
  /** @format double */
  width?: number;
}

/** ProductSkuReq */
export interface ProductSkuReq {
  /**
   * 是否有效：1:启用;0:禁用;2:备用
   * @format int32
   */
  isOnline?: number;
  /**
   * 操作类型: 0-none,1-add,2-modify,3-delete
   * @format int32
   */
  operationType?: number;
  /** 商品编码 */
  productCode?: string;
  /** 规格属性 */
  productProperties?: string;
  /** 属性名称 */
  productPropertiesName?: string;
  /** 属性名称parse */
  productPropertiesNameParse?: string;
  /** 销售单价 */
  productSellPrice?: number;
  /**
   * 销售量
   * @format int32
   */
  productSellQuantity?: number;
  /** 平台商品SKU */
  productSku?: string;
  /**
   * sku主键
   * @format int64
   */
  productSkuId?: number;
  /** sku规格图片 */
  productSkuImg?: string;
  /**
   * 库存(上架总库存)
   * @format int32
   */
  productStockQuantity?: number;
  /** 采购单价 */
  purchasePrice?: number;
  /** 供应商sku */
  supplierSku?: string;
}

/** ProductSkuVo */
export interface ProductSkuVo {
  consignPrice?: number;
  isOnePsale?: boolean;
  /**
   * 是否有效：1:有效;0:无效;2:备用
   * @format int32
   */
  isOnline?: number;
  /**
   * 操作类型: 0-none,1-add,2-modify,3-delete
   * @format int32
   */
  operationType?: number;
  /** 商品编码 */
  productCode?: string;
  /** 规格属性 */
  productProperties?: string;
  /** 属性名称 */
  productPropertiesName?: string;
  /** 属性名称parse */
  productPropertiesNameParse?: string;
  /** 销售单价 */
  productSellPrice?: number;
  /**
   * 销售量
   * @format int32
   */
  productSellQuantity?: number;
  /** 平台商品SKU */
  productSku?: string;
  /**
   * sku主键
   * @format int64
   */
  productSkuId?: number;
  /** sku规格图片 */
  productSkuImg?: string;
  /**
   * 库存(上架总库存)
   * @format int32
   */
  productStockQuantity?: number;
  /** 采购单价 */
  purchasePrice?: number;
  /** 供应商sku */
  supplierSku?: string;
}

/** ProductStallEditReqDTO */
export interface ProductStallEditReqDTO {
  productCode?: string;
  productSku?: string;
  productStallNumber?: string;
  stallProductSellPrice?: number;
}

/** ProductStallNumberUpdateVO */
export interface ProductStallNumberUpdateVO {
  /** productCode */
  productCode?: string;
  /** 档口货号 */
  productStallNumber?: string;
}

/** ProductTransAndStoragePropertyDTO */
export interface ProductTransAndStoragePropertyDTO {
  /**
   * 高，单位cm
   * @format double
   */
  height?: number;
  /**
   * 长，单位cm
   * @format double
   */
  length?: number;
  /** 商品编码 */
  productCode?: string;
  /** 运输属性 */
  transportationAttrCodeList?: string[];
  /**
   * 重，单位kg
   * @format int64
   */
  weight?: number;
  /**
   * 宽，单位cm
   * @format double
   */
  width?: number;
}

/** PurchaseMallReqDTO */
export interface PurchaseMallReqDTO {
  /** @format int32 */
  level?: number;
  /** @format int32 */
  parentId?: number;
  /** @format int32 */
  status?: number;
}

/** PurchaseMallRespDTO */
export interface PurchaseMallRespDTO {
  /** @format date-time */
  createTime?: string;
  intactTitle?: string;
  /** @format int32 */
  level?: number;
  marketCode?: string;
  /** @format int64 */
  parentId?: number;
  /** @format int64 */
  purchaseMallId?: number;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  status?: number;
  title?: string;
  /** @format date-time */
  updateTime?: string;
}

/** ReceiveTaskParam */
export interface ReceiveTaskParam {
  businessId?: string;
  flowCode?: string;
  /** @format int32 */
  identity?: number;
  retry?: boolean;
  /** @format int64 */
  taskId?: number;
  taskMeta?: TaskMeta;
  /** @format int64 */
  threadId?: number;
}

/** RecommendProductSearchReqDTO */
export interface RecommendProductSearchReqDTO {
  /** @format int32 */
  channel?: number;
  /** @format int64 */
  customerId?: number;
  dislikeProductCodeList?: string[];
  keyword?: string;
  keywordList?: string[];
  /** @format int32 */
  langType?: number;
  /** @format int64 */
  mallCategoryId?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  platform?: string;
  platformType?: string;
  productCateCodeList?: string[];
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
}

/** RecommendProductSearchRespDTO */
export interface RecommendProductSearchRespDTO {
  /**
   * 客户行为;1-喜欢;2-不喜欢
   * @format int32
   */
  behaviorFlag?: number;
  /**
   * 黑名单加入时间
   * @format date-time
   */
  blackAddTime?: string;
  /** 黑名单原因 */
  blackReason?: string;
  /**
   * 黑名单原因编码
   * @format int32
   */
  blackReasonCode?: number;
  /**
   * 黑名单标记
   * @format int32
   */
  blackTag?: number;
  /**
   * 黑名单类型:1-商品,2-供应商,类型为2的无法解除黑名单限制
   * @format int32
   */
  blackType?: number;
  /** 黑名单操作员id */
  blackUserId?: string;
  /** 黑名单操作员 */
  blackUserName?: string;
  /** @format int32 */
  channel?: number;
  /** 一件代发价 */
  consignPrice?: number;
  /** 一件代发价,当地汇率价格 */
  consignPriceJpy?: number;
  /** @format int32 */
  countryProductTag?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /**
   * 是否收藏;1-已收藏;0-未收藏
   * @format int32
   */
  favoriteFlag?: number;
  /** @format int32 */
  isCkbDiscount?: number;
  jxhyPrice?: number;
  originalPrice?: number;
  platformType?: string;
  productCode?: string;
  productMainImg?: string;
  /** 商品原销售价格 */
  productOriginPriceRange?: string;
  /** 商品原销售价格-日元 */
  productOriginPriceRangeJpy?: string;
  /** 商品阶梯价 */
  productPriceLadderList?: ProductPriceLadderRespDTO[];
  productSellPrice?: number;
  productSellPriceJpy?: number;
  /** 商品销售价格范围 */
  productSellPriceRange?: string;
  /** 商品销售价格范围-日元 */
  productSellPriceRangeJpy?: string;
  /** @format int32 */
  productSellQuantity?: number;
  /** @format int32 */
  productTag?: number;
  productTitle?: string;
  /** 商品标题翻译; 日文 */
  productTitleEn?: string;
  /** 商品标题翻译; 日文 */
  productTitleJp?: string;
  /** 商品标题翻译; 日文 */
  productTitleKr?: string;
  /** 店铺编码 */
  shopCode?: string;
  /** 店铺主图 */
  shopMainImg?: string;
  /** 商品sku信息 */
  skuList?: SkuRespDTO[];
  stationCode?: string;
}

/** RecommendProductSkuUpdateVO */
export interface RecommendProductSkuUpdateVO {
  /** sku */
  productSku?: string;
  /** 推荐商品SKU */
  recommendProductSku?: string;
}

/** RecommendSupplierSearchReqDTO */
export interface RecommendSupplierSearchReqDTO {
  /** @format int32 */
  channel?: number;
  /** @format int64 */
  customerId?: number;
  dislikeShopCodeList?: string[];
  /** @format int64 */
  mallCategoryId?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  platformType?: string;
  productCateCodeList?: string[];
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
}

/** RecommendSupplierSearchRespDTO */
export interface RecommendSupplierSearchRespDTO {
  /** @format int32 */
  behaviorFlag?: number;
  /** @format int32 */
  channel?: number;
  /** @format int32 */
  favoriteFlag?: number;
  platformType?: string;
  recommendProductList?: RecommendProductSearchRespDTO[];
  shopCode?: string;
  shopMainImg?: string;
  shopMajorCateCode?: string;
  shopMajorCateName?: string;
  shopName?: string;
}

/** SearchAndSaveProductVo */
export interface SearchAndSaveProductVo {
  /** 商品信息 */
  data?: Record<string, object>;
  /** platformType:taobao,1688,tmall, */
  platformType?: string;
}

/** SearchProductReqDTO */
export interface SearchProductReqDTO {
  blackCategoryCodeList?: string[];
  /** 黑名单供应商 */
  blackShopCodeList?: string[];
  /**
   * 黑名单标记:1-黑名单
   * @format int32
   */
  blackTag?: number;
  cateCode?: string;
  cateCodeList?: string[];
  /** @format int64 */
  categoryId?: number;
  /** @format int32 */
  channel?: number;
  channelList?: number[];
  /**
   * 圣诞活动标签:1-杂货,2服装
   * @format int32
   */
  christmasTag?: number;
  /** @format int32 */
  countryProductTag?: number;
  createTimeGe?: string;
  /** @format int64 */
  customerId?: number;
  descendOrder?: boolean;
  /** @format int32 */
  directSaleFlag?: number;
  disableProductCategoryCodeList?: string[];
  dislikeProductCodeList?: string[];
  filters?: string;
  /** @format int32 */
  isCkbDiscount?: number;
  /** 是否忽略直采标记 */
  isIgnoreDirect?: boolean;
  isOnePsale?: boolean;
  keyword?: string;
  keywordList?: string[];
  /** @format int32 */
  langType?: number;
  mallCodeList?: string[];
  /** 是否只查看上线商品 */
  onlyOnline?: boolean;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  platformType?: string;
  /** @format int64 */
  productCategoryFrontendId?: number;
  /** 商品编码 */
  productCode?: string;
  /** 商品codeList */
  productCodeList?: string[];
  /** @format int64 */
  productMallFrontendId?: number;
  /** @format int32 */
  productTag?: number;
  sellPriceEnd?: number;
  sellPriceStart?: number;
  shopCode?: string;
  shopCodeList?: string[];
  shopMajorCateName?: string;
  sortType?: string;
  /** @format int32 */
  source?: number;
  /** @format int32 */
  startIndex?: number;
  /** 站点code */
  stationCode?: string;
  /** 采购链接 */
  url?: string;
}

/** SearchProductRequVO */
export interface SearchProductRequVO {
  /** 是否灰度用户 */
  abUser?: boolean;
  /** 黑名单类目编码列表；后台设置 */
  blackCategoryCodeList?: string[];
  /**
   * 品牌id
   * @format int64
   */
  brandId?: number;
  /** 平台商品类目编码；后台设置：前台传productCategoryFrontendId值 */
  cateCodeList?: string[];
  /**
   * 1688平台类目id
   * @format int64
   */
  categoryId?: number;
  /**
   * 来源类型;1-档口(市场购);2-线上平台（透明购）
   * @format int32
   */
  channel?: number;
  /** 来源类型;1-档口(市场购);2-线上平台（透明购） */
  channelList?: number[];
  /**
   * 圣诞活动标签:1-杂货,2服装
   * @format int32
   */
  christmasTag?: number;
  /**
   * 是否需要1688实时数据 0 1
   * @format int32
   */
  currentData?: number;
  /**
   * 客户ID; 前端不传
   * @format int64
   */
  customerId?: number;
  /** 降序 */
  descendOrder?: boolean;
  /** 平台商品停用类目编码列表; 后台设置 */
  disableProductCategoryCodeList?: string[];
  /** 筛选项，多个choiceKey根据逗号分隔 */
  filters?: string;
  /**
   * 价格优势 0 1
   * @format int32
   */
  isCkbDiscount?: number;
  isOnePsale?: boolean;
  /** 关键词 */
  keyword?: string;
  /** 关键词列表; 前端不传；使用空格分隔关键词 */
  keywordList?: string[];
  /**
   * 关键字语言类型(1:日文(默认) 2:中文)
   * @format int32
   */
  langType?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  platform?: string;
  /** 平台类型;TB:淘宝;AM:1688;TM:天猫;VC:搜款网;WS:网商园 */
  platformType?: string;
  /**
   * 商品类目ID
   * @format int64
   */
  productCategoryFrontendId?: number;
  /** 商品编码 */
  productCode?: string;
  /**
   * 市场ID
   * @format int64
   */
  productMallFrontendId?: number;
  /** 结束销售价 */
  sellPriceEnd?: number;
  /** 起始销售价 */
  sellPriceStart?: number;
  /**
   * 7日上新, 0否1是
   * @format int32
   */
  sevenDaysNew?: number;
  /** 店铺编码 */
  shopCode?: string;
  /** 主营类目 */
  shopMajorCateName?: string;
  /** 相似商品编码; 查询相似商品数据 */
  similarProductCode?: string;
  /** 排序字段; (默认)更新时间: update_time; 销量: product_sell_quantity; 价格: product_sell_price; */
  sortType?: string;
  /** @format int32 */
  startIndex?: number;
  /** 站点code */
  stationCode?: string;
}

/** SearchProductRespDTO */
export interface SearchProductRespDTO {
  /**
   * 客户行为;1-喜欢;2-不喜欢
   * @format int32
   */
  behaviorFlag?: number;
  /**
   * 黑名单加入时间
   * @format date-time
   */
  blackAddTime?: string;
  /** 黑名单原因 */
  blackReason?: string;
  /**
   * 黑名单原因编码
   * @format int32
   */
  blackReasonCode?: number;
  /**
   * 黑名单标记
   * @format int32
   */
  blackTag?: number;
  /**
   * 黑名单类型:1-商品,2-供应商,类型为2的无法解除黑名单限制
   * @format int32
   */
  blackType?: number;
  /** 黑名单操作员id */
  blackUserId?: string;
  /** 黑名单操作员 */
  blackUserName?: string;
  /**
   * 来源类型;1-档口(市场购);2-线上平台（透明购）
   * @format int32
   */
  channel?: number;
  /** 一件代发价格 */
  consignPrice?: number;
  /** 一件代发价格Jpy */
  consignPriceJpy?: number;
  /**
   * 国家货源标签 1 1688国家货盘
   * @format int32
   */
  countryProductTag?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /**
   * 是否收藏;1-已收藏;0-未收藏
   * @format int32
   */
  favoriteFlag?: number;
  /** @format int32 */
  isCkbDiscount?: number;
  /** 是否一件代发(ture:是) */
  isOnePsale?: boolean;
  jxhyPrice?: number;
  /**
   * 近30天销量
   * @format int32
   */
  monthSold?: number;
  /** 商品原始价格 */
  originalPrice?: number;
  /** 平台类型;TB:淘宝;AM:1688;TM:天猫;VC:搜款网;WS:网商园 */
  platformType?: string;
  /**
   * 最小购买数/起拍数
   * @format int32
   */
  productBuyMininum?: number;
  /** 类目编码; */
  productCateCode?: string;
  /** 平台商品SPU */
  productCode?: string;
  /** 主图 */
  productMainImg?: string;
  /** 商品原销售价格 */
  productOriginPriceRange?: string;
  /** 商品原销售价格-日元 */
  productOriginPriceRangeJpy?: string;
  /** 商品阶梯价 */
  productPriceLadderList?: ProductPriceLadderRespDTO[];
  /** 商品价格 */
  productSellPrice?: number;
  /** 商品价格-日币 */
  productSellPriceJpy?: number;
  /** 商品价格范围 */
  productSellPriceRange?: string;
  /** 商品价格范围-日币 */
  productSellPriceRangeJpy?: string;
  /**
   * 销量
   * @format int32
   */
  productSellQuantity?: number;
  /** 档口货号 */
  productStallNumber?: string;
  /**
   * 库存
   * @format int32
   */
  productStockQuantity?: number;
  /**
   * 商品标签 1 精选货源
   * @format int32
   */
  productTag?: number;
  /** 商品名称 */
  productTitle?: string;
  /** 商品标题翻译; 日文 */
  productTitleEn?: string;
  /** 商品标题翻译; 日文 */
  productTitleJp?: string;
  /** 商品标题翻译; 日文 */
  productTitleKr?: string;
  /** 商品视频介绍 */
  productVideo?: string;
  /** 近30天复购率 */
  repurchaseRate?: string;
  /** 店铺code */
  shopCode?: string;
  /** 发货地 */
  shopLocation?: string;
  /** 店铺主图 */
  shopMainImg?: string;
  /** 店铺名称 */
  shopName?: string;
  /** 商品sku信息 */
  skuList?: SkuRespDTO[];
  stationCode?: string;
}

/** SearchProductRespVO */
export interface SearchProductRespVO {
  /**
   * 客户行为;1-喜欢;2-不喜欢
   * @format int32
   */
  behaviorFlag?: number;
  /**
   * 来源类型;1-档口(市场购);2-线上平台（透明购）
   * @format int32
   */
  channel?: number;
  consignPrice?: number;
  /** 一件代发价格Jpy */
  consignPriceJpy?: number;
  /** @format int32 */
  countryProductTag?: number;
  /**
   * 是否收藏;1-已收藏;0-未收藏
   * @format int32
   */
  favoriteFlag?: number;
  isOnePsale?: boolean;
  jxhyPrice?: number;
  /**
   * 近30天销量
   * @format int32
   */
  monthSold?: number;
  /** 商品原始价格 */
  originalPrice?: number;
  /** 平台类型;TB:淘宝;AM:1688;TM:天猫;VC:搜款网;WS:网商园 */
  platformType?: string;
  /**
   * 最小购买数/起拍数
   * @format int32
   */
  productBuyMininum?: number;
  /** 类目编码; */
  productCateCode?: string;
  /** 平台商品SPU */
  productCode?: string;
  /** 主图 */
  productMainImg?: string;
  /** 商品价格 */
  productSellPrice?: number;
  /** 商品价格-日币 */
  productSellPriceJpy?: number;
  /** 商品价格范围 */
  productSellPriceRange?: string;
  /** 商品价格范围-日币 */
  productSellPriceRangeJpy?: string;
  /**
   * 销量
   * @format int32
   */
  productSellQuantity?: number;
  /** 档口货号 */
  productStallNumber?: string;
  /**
   * 库存
   * @format int32
   */
  productStockQuantity?: number;
  /** @format int32 */
  productTag?: number;
  /** 商品名称 */
  productTitle?: string;
  /** 商品名称日文 */
  productTitleJp?: string;
  /** 商品视频介绍 */
  productVideo?: string;
  /** 近30天复购率 */
  repurchaseRate?: string;
  /** 店铺code */
  shopCode?: string;
  /** 发货地 */
  shopLocation?: string;
  /** 店铺名称 */
  shopName?: string;
}

/** SearchSupplierReqDTO */
export interface SearchSupplierReqDTO {
  /** @format int64 */
  customerId?: number;
  descendOrder?: boolean;
  footprint?: boolean;
  /** @format int64 */
  mallCategoryId?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  sellPriceEnd?: number;
  sellPriceStart?: number;
  shopCode?: string;
  shopMajorCateName?: string;
  sortType?: string;
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
}

/** SearchSupplierRespDTO */
export interface SearchSupplierRespDTO {
  /** @format int32 */
  behaviorFlag?: number;
  /** @format int32 */
  favoriteFlag?: number;
  shopCode?: string;
  shopMainImg?: string;
  shopName?: string;
}

/** SellerInfo */
export interface SellerInfo {
  categoryCode?: string;
  companyId?: string;
  conpamyAdd?: string;
  /** @format double */
  customerStar?: number;
  dkFloor?: string;
  dkMarket?: string;
  dkNumber?: string;
  mainSell?: string[];
  qrCode?: string;
  saleTag?: string;
  sellerContact?: NameValueDict[];
  sellerId?: string;
  sellerNick?: string;
  sellerService?: NameValueDict[];
  serviceList?: object[];
  shopAddress?: string;
  shopId?: string;
  shopName?: string;
  shopUrl?: string;
}

/** SellerInfoDTO */
export interface SellerInfoDTO {
  category_code?: string;
  company_add?: string;
  conpamy_add?: string;
  dk_floor?: string;
  dk_market?: string;
  dk_number?: string;
  main_sell?: string[];
  platform_code?: string;
  seller_contact?: NameValueDictDTO[];
  seller_id?: string;
  seller_nick?: string;
  seller_service?: NameValueDictDTO[];
  shop_address?: string;
  shop_code?: string;
  shop_id?: string;
  shop_location?: string[];
  shop_name?: string;
  shop_url?: string;
  sz_city?: string;
}

/** ShopInfo */
export interface ShopInfo {
  /** 店铺编码 */
  shopCode?: string;
  /** 店铺位置 */
  shopLocation?: string;
  /** 店铺名称 */
  shopName?: string;
  /** 店铺URL */
  shopUrl?: string;
}

/** ShopProductRequVO */
export interface ShopProductRequVO {
  shopUrl: string;
}

/** ShopProductRespVO */
export interface ShopProductRespVO {
  /** 接口来源 */
  dataSource?: string;
  /** 商品信息 */
  productInfoList?: ProductInfo[];
  /** 资源来源 */
  productItemCategoryZh?: string;
  /** 店铺信息 */
  sellerInfoDTO?: SellerInfoDTO;
  /** 店铺id */
  shopId?: string;
}

/** ShopTypeInfo */
export interface ShopTypeInfo {
  /** 店铺信息 */
  shopInfoList?: ShopInfo[];
  /** 店铺类目 */
  shopType?: string;
}

/** SizenfoUpdateVO */
export interface SizenfoUpdateVO {
  /** 尺码信息 */
  productSizePropertiesName?: string;
  /** sku */
  productSku?: string;
}

/** Sku */
export interface Sku {
  /** @format int32 */
  blackTag?: number;
  bought?: boolean;
  /** @format int32 */
  channel?: number;
  consignPrice?: number;
  /** @format int32 */
  countryProductTag?: number;
  /** @format date-time */
  createTime?: string;
  /** @format double */
  discount?: number;
  /** @format date-time */
  firstApiTime?: string;
  /** @format date-time */
  firstCartTime?: string;
  /** @format date-time */
  firstOrderTime?: string;
  /** @format double */
  height?: number;
  /** @format int32 */
  hotFlag?: number;
  isOnePsale?: boolean;
  /** @format int32 */
  isOnline?: number;
  jxhyPrice?: number;
  /** @format double */
  length?: number;
  liveSellPrice?: number;
  /** @format date-time */
  liveSellPriceEndTime?: string;
  /** @format date-time */
  liveSellPriceStartTime?: string;
  /** @format int32 */
  maintainFlag?: number;
  maintainManagerId?: string;
  /** @format date-time */
  mantainTime?: string;
  materialInfoEn?: string;
  materialInfoJa?: string;
  materialInfoKr?: string;
  materialInfoZh?: string;
  /** @format date-time */
  newOrderTime?: string;
  /** @format int32 */
  offlineDirectSaleFlag?: number;
  platformType?: string;
  productAppSellPrice?: number;
  productCode?: string;
  /** @format int32 */
  productCommentCount?: number;
  /** @format int64 */
  productCustomsId?: number;
  productItemCategoryZh?: string;
  productOriginSellPrice?: number;
  productProperties?: string;
  productPropertiesName?: string;
  productPropertiesNameJa?: string;
  productSellPrice?: number;
  /** @format int32 */
  productSellQuantity?: number;
  productSizePropertiesName?: string;
  productSku?: string;
  /** @format int64 */
  productSkuId?: number;
  productSkuImg?: string;
  /** @format int32 */
  productStockQuantity?: number;
  /** @format int32 */
  productTag?: number;
  promotionMethod?: string;
  promotionType?: string;
  purchasePrice?: number;
  recommendProductSku?: string;
  reductionAmount?: string;
  skuId?: string;
  specId?: string;
  stallProductSellPrice?: number;
  supplierSku?: string;
  transportationAttrCode?: string;
  /** @format date-time */
  updateTime?: string;
  /** @format int64 */
  weight?: number;
  /** @format double */
  width?: number;
}

/** SkuEditReqDTO */
export interface SkuEditReqDTO {
  productItemCategoryZh?: string;
  productSku?: string;
}

/** SkuKpiInfo */
export interface SkuKpiInfo {
  /**
   * 平均交货时长
   * @format date-time
   */
  avgDeliveryTime?: string;
  /**
   * 总次品数
   * @format int32
   */
  defectiveQty?: number;
  /** 次品率 */
  defectiveRate?: number;
  /** 最低采购单价RMB */
  minPurchaseUnitPrice?: number;
  /** 商品code */
  productCode?: string;
  /** sku编码 */
  productSku?: string;
  /**
   * 总采购数量
   * @format int32
   */
  totalPurchaseQty?: number;
}

/** SkuOperatorLogVO */
export interface SkuOperatorLogVO {
  /** 操作类型编码:MODIFY_DISCOUNT_SKU -> 修改Sku折扣价 */
  operateCode?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** 商品spu */
  productCode?: string;
  /** 商品sku */
  productSku?: string;
  /** 供应商编码 */
  shopCode?: string;
  /** @format int32 */
  startIndex?: number;
}

/** SkuProductSimpleRespDTO */
export interface SkuProductSimpleRespDTO {
  productSimpleRespDTO?: ProductSimpleRespDTO;
  skuRespDTO?: SkuRespDTO;
}

/** SkuReqDTO */
export interface SkuReqDTO {
  columns?: string[];
  /** @format int64 */
  customerId?: number;
  /** @format int32 */
  isOnline?: number;
  needCalculateSellDiscount?: boolean;
  needSellDiscountPriceSetting?: boolean;
  productCode?: string;
  productCodeList?: string[];
  productSku?: string;
  productSkuList?: string[];
}

/** SkuReqVO */
export interface SkuReqVO {
  /**
   * 客户ID；价格配置需要
   * @format int64
   */
  customerId?: number;
  /**
   * 上下架;1-上架;0-下架
   * @format int32
   */
  isOnline?: number;
  needSellDiscountPriceSetting?: boolean;
  /** 商品编码 */
  productCode?: string;
  /** 商品编码列表 */
  productCodeList?: string[];
  /** 商品SKU */
  productSku?: string;
  /** 商品SKU编码列表 */
  productSkuList?: string[];
  /** 站点 */
  stationCode?: string;
}

/** SkuRespDTO */
export interface SkuRespDTO {
  /** @format int32 */
  availableQty?: number;
  /** @format int32 */
  batchNumber?: number;
  /** @format int32 */
  blackReasonCode?: number;
  /** @format int32 */
  blackTag?: number;
  bought?: boolean;
  /** @format int32 */
  channel?: number;
  consignPrice?: number;
  /** @format int32 */
  countryProductTag?: number;
  /** @format int64 */
  customerId?: number;
  /** @format double */
  discount?: number;
  discountPriceSetting?: string;
  /** @format int32 */
  hotFlag?: number;
  isInBlank?: boolean;
  isInProductCategoryClose?: boolean;
  isOnePsale?: boolean;
  isOnline?: boolean;
  isOnlineProduct?: boolean;
  jxhyPrice?: number;
  liveSellPrice?: number;
  /** @format date-time */
  liveSellPriceEndTime?: string;
  /** @format date-time */
  liveSellPriceStartTime?: string;
  materialInfoEn?: string;
  materialInfoJa?: string;
  materialInfoKr?: string;
  materialInfoZh?: string;
  /** @format int32 */
  notInStorage?: number;
  productCategoryFrontendNdId?: string;
  productCode?: string;
  productCustoms?: ProductCustomsRespDTO;
  /** @format int64 */
  productCustomsId?: number;
  productDetailUrl?: string;
  productItemCategoryZh?: string;
  productOriginSellPrice?: number;
  productPriceLadderList?: ProductPriceLadderRespDTO[];
  productProperties?: string;
  productPropertiesName?: string;
  productPropertiesNameJa?: string;
  productPropertiesNameParse?: string;
  /** @format int64 */
  productPropertiesSort?: number;
  productSellPrice?: number;
  /** @format int32 */
  productSellPriceType?: number;
  /** @format int32 */
  productSellQuantity?: number;
  productSku?: string;
  productSkuImg?: string;
  /** @format int32 */
  productStockQuantity?: number;
  /** @format int32 */
  productTag?: number;
  productTitle?: string;
  productTitleEn?: string;
  productTitleJp?: string;
  productTitleKr?: string;
  promotionMethod?: string;
  promotionType?: string;
  purchasePrice?: number;
  recommendProductSku?: string;
  reductionAmount?: string;
  shopCode?: string;
  /** @format int32 */
  shopIsBlack?: number;
  skuId?: string;
  specId?: string;
  stallProductSellPrice?: number;
  stationCode?: string;
  supplierSku?: string;
}

/** SkuRespVO */
export interface SkuRespVO {
  /** @format int32 */
  availableQty?: number;
  /**
   * 商品一手数量
   * @format int32
   */
  batchNumber?: number;
  /** @format int32 */
  blackReasonCode?: number;
  /** @format int32 */
  blackTag?: number;
  /** @format int32 */
  channel?: number;
  consignPrice?: number;
  /** @format int64 */
  customerId?: number;
  /** @format double */
  discount?: number;
  discountPriceSetting?: string;
  /** @format int32 */
  hotFlag?: number;
  isOnePsale?: boolean;
  jxhyPrice?: number;
  liveSellPrice?: number;
  /** @format date-time */
  liveSellPriceEndTime?: string;
  /** @format date-time */
  liveSellPriceStartTime?: string;
  materialInfoJa?: string;
  materialInfoZh?: string;
  /** 商品编码 */
  productCode?: string;
  /** 中文品名 */
  productItemCategoryZh?: string;
  productOriginSellPrice?: number;
  productPriceLadderList?: ProductPriceLadderRespDTO[];
  /** 属性标识 */
  productProperties?: string;
  /** 属性名称 */
  productPropertiesName?: string;
  /** 属性名称parse */
  productPropertiesNameParse?: string;
  /** pc销售单价 */
  productSellPrice?: number;
  /** @format int32 */
  productSellPriceType?: number;
  /**
   * 销售量
   * @format int32
   */
  productSellQuantity?: number;
  /** 平台商品SKU */
  productSku?: string;
  /** sku对应图片 */
  productSkuImg?: string;
  /**
   * 库存
   * @format int32
   */
  productStockQuantity?: number;
  /** @format int32 */
  productTag?: number;
  productTitle?: string;
  productTitleEn?: string;
  productTitleJp?: string;
  productTitleKr?: string;
  promotionMethod?: string;
  promotionType?: string;
  purchasePrice?: number;
  /** 推荐商品SKU */
  recommendProductSku?: string;
  reductionAmount?: string;
  shopCode?: string;
  /** @format int32 */
  shopIsBlack?: number;
  /** 档口价格 */
  stallProductSellPrice?: number;
  stationCode?: string;
  supplierSku?: string;
}

/** SkuTransPropertyBatchEditDTO */
export interface SkuTransPropertyBatchEditDTO {
  /** sku编码列表 */
  productSkuList?: string[];
  /** 运输属性code列表 */
  transportationAttrCodeList?: string[];
}

/** StallProductSellPriceUpdateVO */
export interface StallProductSellPriceUpdateVO {
  /** sku */
  productSku?: string;
  /** 档口价格 */
  stallProductSellPrice?: number;
}

/** StrategyConfigProductAddVO */
export interface StrategyConfigProductAddVO {
  /** 用户信息 */
  customerInfoList?: CustomerInfo[];
  /** 是否用户全局 */
  productGlobal?: boolean;
  /** 商品信息 */
  productInfoList?: ProductInfo[];
  /** 站点code */
  stationCode?: string;
  /**
   * 策略结束时间
   * @format date-time
   */
  strategyEndTime?: string;
  /** 策略名称 */
  strategyName?: string;
}

/** StrategyConfigProductEnableStatusVO */
export interface StrategyConfigProductEnableStatusVO {
  /** 启用状态；1：启用；0：不启用 */
  enableStatus?: boolean;
  /**
   * 主键
   * @format int64
   */
  strategyConfigProductId?: number;
}

/** StrategyConfigProductGlobalStatusVO */
export interface StrategyConfigProductGlobalStatusVO {
  /** 是否用户全局；1：全局，0：不全局 */
  productGlobal?: boolean;
  /**
   * 主键
   * @format int64
   */
  strategyConfigProductId?: number;
}

/** StrategyConfigProductItemVO */
export interface StrategyConfigProductItemVO {
  /** 用户信息 */
  customerInfoList?: CustomerInfo[];
  /** 是否用户全局 */
  productGlobal?: boolean;
  /** 商品信息 */
  productInfoList?: ProductInfo[];
  /** 站点code */
  stationCode?: string;
  /**
   * 商品策略主键
   * @format int64
   */
  strategyConfigProductId?: number;
  /**
   * 策略结束时间
   * @format date-time
   */
  strategyEndTime?: string;
  /** 策略名称 */
  strategyName?: string;
}

/** StrategyConfigProductUrlImportVo */
export interface StrategyConfigProductUrlImportVo {
  /**
   * 序号
   * @format int64
   */
  nu?: number;
  /** 商品url */
  productUrl?: string;
}

/** StrategyConfigProductUrlResultVo */
export interface StrategyConfigProductUrlResultVo {
  /** 是否导入成功 */
  importSuccess?: boolean;
  /**
   * 序号
   * @format int64
   */
  nu?: number;
  /** 商品详情 */
  product?: ProductInfo;
  /** 商品url */
  productUrl?: string;
}

/** StrategyConfigProductVO */
export interface StrategyConfigProductVO {
  /** @format date-time */
  createTime?: string;
  deleteFlag?: boolean;
  enableStatus?: boolean;
  manageUserId?: string;
  manageUserName?: string;
  productGlobal?: boolean;
  stationCode?: string;
  /** @format int64 */
  strategyConfigProductId?: number;
  /** @format date-time */
  strategyEndTime?: string;
  strategyName?: string;
  /** @format date-time */
  updateTime?: string;
}

/** StrategyConfigShopAddVO */
export interface StrategyConfigShopAddVO {
  /** 用户信息 */
  customerInfoList?: CustomerInfo[];
  /** 是否用户全局 */
  shopGlobal?: boolean;
  /** 店铺类目 */
  shopTypeInfoList?: ShopTypeInfo[];
  /** 站点code */
  stationCode?: string;
  /**
   * 策略结束时间
   * @format date-time
   */
  strategyEndTime?: string;
  /** 策略名称 */
  strategyName?: string;
}

/** StrategyConfigShopEnableStatusVO */
export interface StrategyConfigShopEnableStatusVO {
  /** 启用状态；1：启用；0：不启用 */
  enableStatus?: boolean;
  /**
   * 主键
   * @format int64
   */
  strategyConfigShopId?: number;
}

/** StrategyConfigShopGlobalStatusVO */
export interface StrategyConfigShopGlobalStatusVO {
  /** 是否用户全局；1：全局，0：不全局 */
  shopGlobal?: boolean;
  /**
   * 主键
   * @format int64
   */
  strategyConfigShopId?: number;
}

/** StrategyConfigShopItemVO */
export interface StrategyConfigShopItemVO {
  /** 用户信息 */
  customerInfoList?: CustomerInfo[];
  /** 是否用户全局 */
  shopGlobal?: boolean;
  /** 店铺类目信息 */
  shopTypeInfoList?: ShopTypeInfo[];
  /** 站点code */
  stationCode?: string;
  /**
   * 商品策略主键
   * @format int64
   */
  strategyConfigShopId?: number;
  /**
   * 策略结束时间
   * @format date-time
   */
  strategyEndTime?: string;
  /** 策略名称 */
  strategyName?: string;
}

/** StrategyConfigShopUrlImportVo */
export interface StrategyConfigShopUrlImportVo {
  /**
   * 序号
   * @format int64
   */
  nu?: number;
  /** 商品url */
  shopUrl?: string;
}

/** StrategyConfigShopUrlResultVo */
export interface StrategyConfigShopUrlResultVo {
  /** 是否导入成功 */
  importSuccess?: boolean;
  /**
   * 序号
   * @format int64
   */
  nu?: number;
  /** 店铺详情 */
  shopInfo?: ShopInfo;
  /** shopUrl */
  shopUrl?: string;
}

/** StrategyConfigShopVo */
export interface StrategyConfigShopVo {
  /** @format date-time */
  createTime?: string;
  deleteFlag?: boolean;
  enableStatus?: boolean;
  manageUserId?: string;
  manageUserName?: string;
  shopGlobal?: boolean;
  stationCode?: string;
  /** @format int64 */
  strategyConfigShopId?: number;
  /** @format date-time */
  strategyEndTime?: string;
  strategyName?: string;
  /** @format date-time */
  updateTime?: string;
}

/** SupplierDetailSaveReqDTO */
export interface SupplierDetailSaveReqDTO {
  /** 工厂数据 */
  factory_info?: SupplierFactoryInfoDTO;
  /** 店铺参数 */
  seller_info?: SupplierShopInfoDTO;
}

/** SupplierFactoryInfoDTO */
export interface SupplierFactoryInfoDTO {
  /** 履约率 */
  compliance_rate?: string;
  /** 定制起订量 */
  customized_minimum_order_quantity?: string;
  /** 次品率 */
  defective_rate?: string;
  /** 厂房面积 */
  factory_area?: string;
  /** 工厂牌评级 */
  factory_brand_rating?: string;
  /** 市 */
  factory_city?: string;
  /** 工厂联系方式 */
  factory_concat_num?: string;
  /** 工厂联系人 */
  factory_concat_person?: string;
  /** 工厂详细地址 */
  factory_detail_address?: string;
  /** 区 */
  factory_district?: string;
  /** 工厂主营类目 */
  factory_main_sell?: string[];
  /** 工厂memberId */
  factory_member_code?: string;
  /** 工厂名称 */
  factory_name?: string;
  /** 工厂人数 */
  factory_number_employees?: string;
  /** 省 */
  factory_province?: string;
  /** 工厂链接 */
  factory_url?: string;
  /**
   * 是否金牌制造:0-不是,1-是
   * @format int32
   */
  is_gold_medal?: number;
  /**
   * 是否实力商家:0-不是,1-是
   * @format int32
   */
  is_power_seller?: number;
  /**
   * 是否超级工厂:0-不是,1-是
   * @format int32
   */
  is_super_factory?: number;
  /** 管理体系认证 */
  management_system_certification?: string;
  /** 平台编码 */
  platform_code?: string;
  /** 生产质量认证 */
  production_quality_certification?: string;
  /** 复购率 */
  repurchase_rate?: string;
  /** 服务响应率 */
  service_response_rate?: string;
}

/** SupplierFactoryRespDTO */
export interface SupplierFactoryRespDTO {
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 市 */
  factoryCity?: string;
  /** 市代码 */
  factoryCityCode?: string;
  /** 工厂联系方式 */
  factoryConcatNum?: string;
  /** 工厂联系人 */
  factoryConcatPerson?: string;
  /** 区 */
  factoryDistrict?: string;
  /** 区代码 */
  factoryDistrictCode?: string;
  /** 工厂详细地址 */
  factoryLocation?: string;
  /** 工厂主营类目名称;格式","分隔 */
  factoryMajorCateName?: string;
  /** 工厂memberCode */
  factoryMemberCode?: string;
  /** 卖家店铺名 */
  factoryName?: string;
  /** 国家 */
  factoryNation?: string;
  /** 国家代码 */
  factoryNationCode?: string;
  /** 省 */
  factoryProvince?: string;
  /** 省代码 */
  factoryProvinceCode?: string;
  /** 工厂标签 */
  factoryTag?: string;
  /** 标签列表 */
  factoryTagList?: string[];
  /** 工厂URL */
  factoryUrl?: string;
  /** @format int64 */
  id?: number;
  /**
   * 是否金牌制造:0-不是,1-是
   * @format int32
   */
  isGoldMedal?: number;
  /**
   * 是否实力商家:0-不是,1-是
   * @format int32
   */
  isPowerSeller?: number;
  /**
   * 是否超级工厂:0-不是,1-是
   * @format int32
   */
  isSuperFactory?: number;
  /** Oem供应商准入考核数据json:工厂规模,价格,次品率,履约率,服务响应率,复购率 */
  oemSupplierOriginalInfoJson?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/** SupplierInfo */
export interface SupplierInfo {
  /** 平台类型;TB:淘宝;AM:1688;TM:天猫;VC:搜款;WS:网商园; */
  platformType?: string;
  /** 卖家联系综合信息;包括qq,wx,电话号码等 */
  sellerContactInfo?: object;
  /** 店铺编码 */
  shopCode?: string;
  /** 档口号 */
  shopDoor?: string;
  /** 档口楼层 */
  shopFloor?: string;
  /** 店铺所在地;省市区 */
  shopLocation?: string;
  /** 店铺主营类目编码-一级；格式","分隔 */
  shopMajorCateCode?: string;
  /** 店铺主营类目名称;格式","分隔 */
  shopMajorCateName?: string;
  /** 档口市场 */
  shopMall?: string;
  /** 卖家店铺名 */
  shopName?: string;
  /** 店铺服务信息；综合服务,物流等;格式json对象 */
  shopServiceInfo?: object;
  /** 店铺URL */
  shopUrl?: string;
}

/** SupplierListReqDTO */
export interface SupplierListReqDTO {
  /** @format int32 */
  blackTag?: number;
  /** 店铺编码列表 */
  shopCodeList?: string[];
  /** 店铺名称列表 */
  shopNameList?: string[];
  /** 店铺url */
  shopUrls?: string[];
  stationCode?: string;
}

/** SupplierManageListQueryVO */
export interface SupplierManageListQueryVO {
  /**
   * 黑名单标记
   * @format int32
   */
  blackTag?: number;
  bought?: boolean;
  /** @format int32 */
  channel?: number;
  /**
   * 首次加购或关联结束时间
   * @format date-time
   */
  firstCartOrApiTimeEnd?: string;
  /**
   * 首次加购或关联开始时间
   * @format date-time
   */
  firstCartOrApiTimeStart?: string;
  /**
   * 首次下单结束时间
   * @format date-time
   */
  firstOrderTimeEnd?: string;
  /**
   * 首次下单开始时间
   * @format date-time
   */
  firstOrderTimeStart?: string;
  isOnePsale?: boolean;
  /** @format int32 */
  isOnline?: number;
  /** 待补充英文材质 */
  materialInfoEnIsEmptyString?: boolean;
  materialInfoJaIsEmptyString?: boolean;
  /** 待补充韩文材质 */
  materialInfoKrIsEmptyString?: boolean;
  materialInfoZhIsEmptyString?: boolean;
  /**
   * 最近下单结束时间
   * @format date-time
   */
  newOrderTimeEnd?: string;
  /**
   * 最近下单开始时间
   * @format date-time
   */
  newOrderTimeStart?: string;
  /**
   * 线下商品直营标识 0-普通 1-直营
   * @format int32
   */
  offlineDirectSaleFlag?: number;
  /** @format int32 */
  pageNum?: number;
  /**
   * 第几页结束
   * @format int32
   */
  pageNumEnd?: number;
  /**
   * 第几页开始
   * @format int32
   */
  pageNumStart?: number;
  /** @format int32 */
  pageSize?: number;
  platformType?: string;
  productCode?: string;
  productCodeList?: string[];
  productItemCategoryZhIsNull?: boolean;
  productSku?: string;
  /** 商品SKU批量搜索 */
  productSkuList?: string[];
  /**
   * 商品标签 1 精选货源
   * @format int32
   */
  productTag?: number;
  /** 商品名称 */
  productTitle?: string;
  /** 商品采购链接 */
  productUrl?: string;
  /** 推荐商品sku */
  recommendProductSku?: string;
  /** 待补充推荐商品sku */
  recommendProductSkuIsEmptyString?: boolean;
  /** 推荐商品sku批量搜索 */
  recommendProductSkuList?: string[];
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
  /** 供应商id */
  supplierId?: string;
  /** 供应商名称 */
  supplierName?: string;
}

/** SupplierManageListVO */
export interface SupplierManageListVO {
  /**
   * 可用库存
   * @format int32
   */
  availableQuantity?: number;
  /** @format int32 */
  blackTag?: number;
  bought?: boolean;
  /** @format int32 */
  channel?: number;
  /** 一件代发价格 */
  consignPrice?: number;
  /**
   * 国家货盘标签 1 国家货盘
   * @format int32
   */
  countryProductTag?: number;
  /** @format date-time */
  createTime?: string;
  /** @format double */
  discount?: number;
  /**
   * 首次关联时间
   * @format date-time
   */
  firstApiTime?: string;
  /**
   * 首次加购时间
   * @format date-time
   */
  firstCartTime?: string;
  /**
   * 首次下单时间
   * @format date-time
   */
  firstOrderTime?: string;
  /** @format double */
  height?: number;
  /** @format int32 */
  hotFlag?: number;
  /** 是否一件代发(ture:是) */
  isOnePsale?: boolean;
  /** @format int32 */
  isOnline?: number;
  jxhyPrice?: number;
  /** @format double */
  length?: number;
  liveSellPrice?: number;
  /** @format date-time */
  liveSellPriceEndTime?: string;
  /** @format date-time */
  liveSellPriceStartTime?: string;
  /** @format int32 */
  maintainFlag?: number;
  maintainManagerId?: string;
  /** @format date-time */
  mantainTime?: string;
  /** 材质信息英文 */
  materialInfoEn?: string;
  /** 材质信息日文 */
  materialInfoJa?: string;
  /** 材质信息韩文 */
  materialInfoKr?: string;
  /** 材质信息中文 */
  materialInfoZh?: string;
  /**
   * 最近下单时间
   * @format date-time
   */
  newOrderTime?: string;
  /** @format int32 */
  offlineDirectSaleFlag?: number;
  platformType?: string;
  /** 商品信息 */
  product?: ProductInfo;
  productAppSellPrice?: number;
  /** 商品编码 */
  productCode?: string;
  /**
   * 商品评论数
   * @format int32
   */
  productCommentCount?: number;
  /** @format int64 */
  productCustomsId?: number;
  /** 中文品名 */
  productItemCategoryZh?: string;
  productOriginSellPrice?: number;
  productProperties?: string;
  /** 属性名称 */
  productPropertiesName?: string;
  productPropertiesNameJa?: string;
  /** 销售单价 */
  productSellPrice?: number;
  /** @format int32 */
  productSellQuantity?: number;
  /** 尺码属性名称 */
  productSizePropertiesName?: string;
  /** sniff生成超级ID基础码 */
  productSku?: string;
  /** @format int64 */
  productSkuId?: number;
  /** 商品sku图 */
  productSkuImg?: string;
  /** @format int32 */
  productStockQuantity?: number;
  /**
   * 商品标签 1 精选货源
   * @format int32
   */
  productTag?: number;
  promotionMethod?: string;
  promotionType?: string;
  purchasePrice?: number;
  /** 推荐商品SKU */
  recommendProductSku?: string;
  reductionAmount?: string;
  skuId?: string;
  /** 商品沉淀数据 */
  skuKpi?: SkuKpiInfo;
  specId?: string;
  stallProductSellPrice?: number;
  /** 供应商信息 */
  supplier?: SupplierInfo;
  supplierSku?: string;
  transportationAttrCode?: string;
  /** 运输属性code列表 */
  transportationAttrCodeList?: string[];
  /** 运输属性名称 */
  transportationAttrName?: string;
  /** @format date-time */
  updateTime?: string;
  /**
   * 重，单位kg
   * @format int64
   */
  weight?: number;
  /** @format double */
  width?: number;
}

/** SupplierManageSkuCountInfoVo */
export interface SupplierManageSkuCountInfoVo {
  /**
   * 待补充材质日文数量
   * @format int64
   */
  materialInfoJaEmptyCount?: number;
  /**
   * 待补充材质中文数量
   * @format int64
   */
  materialInfoZhEmptyCount?: number;
  /**
   * 未关联中文品名数量
   * @format int64
   */
  notAssociatedProductItemCategoryZhNumber?: number;
}

/** SupplierOperateBlackFlagDTO */
export interface SupplierOperateBlackFlagDTO {
  /**
   * 加黑原因
   * @format int32
   */
  blackReasonCode?: number;
  /** 审核拒绝原因 */
  rejectReason?: string;
  /** 供应商编码列表 */
  shopCodeList?: string[];
  /** 操作人id */
  userId?: string;
  /** 操作人姓名 */
  userName?: string;
}

/** SupplierPaymentAccountRespDTO */
export interface SupplierPaymentAccountRespDTO {
  /** 账号 */
  account?: string;
  /** 户名 */
  accountName?: string;
  /** 开户行 */
  accountOpeningBank?: string;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 创建者 */
  creatorId?: string;
  /** @format int64 */
  id?: number;
  /**
   * 是否默认账号
   * @format int32
   */
  isDefault?: number;
  /** 收款账户名 */
  paymentAccountName?: string;
  /**
   * 店铺code
   * @format int32
   */
  supplierShopCode?: number;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  /** 更新者 */
  updaterId?: string;
}

/** SupplierPerformanceSyncRespDTO */
export interface SupplierPerformanceSyncRespDTO {
  /** 平均单价 */
  averageUnitPrice?: number;
  /** 议价率 */
  bargainingRate?: number;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 累计金额 */
  cumulativeAmount?: number;
  /** 次品率 */
  defectiveRate?: number;
  /** @format int64 */
  id?: number;
  /**
   * 最近下单时间
   * @format date-time
   */
  lastOrderTime?: string;
  /** OEM次品率 */
  oemDefectiveRate?: number;
  /** OEM交付超期率 */
  oemDeliveryOverdueRate?: number;
  /**
   * 采购商品数
   * @format int32
   */
  purchaseItemNum?: number;
  /**
   * 采购次数
   * @format int32
   */
  purchaseTimes?: number;
  /** 退款率 */
  refundRate?: number;
  /**
   * 回货时长
   * @format int32
   */
  returnTime?: number;
  /** 店铺编码 */
  supplierShopCode?: string;
  /**
   * 店铺id
   * @format int32
   */
  supplierShopId?: number;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/** SupplierProductRespDTO */
export interface SupplierProductRespDTO {
  productPage?: PageSearchProductRespDTO;
  supplierRespDTO?: SupplierRespDTO;
}

/** SupplierReqDTO */
export interface SupplierReqDTO {
  shopCode?: string;
  shopUrl: string;
}

/** SupplierRespDTO */
export interface SupplierRespDTO {
  /** @format int32 */
  behaviorFlag?: number;
  /** @format int32 */
  channel?: number;
  city?: string;
  discountRate?: string;
  /** @format int32 */
  favoriteFlag?: number;
  marketCode?: string;
  platformType?: string;
  provice?: string;
  sellerContactInfo?: object;
  shopCode?: string;
  shopDescription?: string;
  shopDistrict?: string;
  shopDoor?: string;
  shopFloor?: string;
  shopLocation?: string;
  shopMainImg?: string;
  shopMajorCateCode?: string;
  shopMajorCateName?: string;
  shopMall?: string;
  shopName?: string;
  shopPosition?: string;
  shopServiceInfo?: object;
  shopUrl?: string;
  /** @format int32 */
  status?: number;
}

/** SupplierSaveReqDTO */
export interface SupplierSaveReqDTO {
  /**
   * 供应商状态;0:禁用;1:启用;
   * @format int32
   */
  status?: number;
  /** 店铺编码 */
  supplierShopCode?: string;
}

/** SupplierSettlementRespDTO */
export interface SupplierSettlementRespDTO {
  /**
   * 账期结算方式:1-按月,2-按周
   * @format int32
   */
  accountSettlementMethod?: number;
  /**
   * 账期结算日期:周一到周日1234567
   * @format int32
   */
  accountSettlementTime?: number;
  /** 实际折扣 */
  actualDiscount?: string;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** @format int64 */
  id?: number;
  /** 分期付款额度百分比，共三期 */
  installmentPercentage?: number[];
  /** 支付方式 */
  payMethod?: string;
  /** 优惠方式:1-改价,2-返金 */
  promotionMethod?: string;
  /** 优惠备注 */
  promotionRemark?: string;
  /**
   * 结算方式:1-按采购单,2-按账期,3-分期付款
   * @format int32
   */
  settlementMethod?: number;
  /** 统一社会信用代码 */
  socialCreditCode?: string;
  /**
   * 店铺code
   * @format int32
   */
  supplierShopCode?: number;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/** SupplierShopInfoDTO */
export interface SupplierShopInfoDTO {
  /** 档口市场编码 */
  category_code?: string;
  /** 履约率 */
  compliance_rate?: string;
  /** 综合服务评分 */
  comprehensive_service_rating?: string;
  /** 档口楼层 */
  dk_floor?: string;
  /** 档口市场 */
  dk_market?: string;
  /** 档口号 */
  dk_number?: string;
  /** 工厂memberId */
  factory_member_code?: string;
  /**
   * 是否有工厂:0-没有,1-有
   * @format int32
   */
  is_having_factory?: number;
  /** 店铺主营类目 */
  main_sell?: string[];
  /** 近30天支付订单数 */
  number_pay_orders_amonth?: string;
  /** 平台编码 */
  platform_code?: string;
  /** 揽收率 */
  recovery_rate?: string;
  /** 退款率 */
  refund_rate?: string;
  /** 响应率 */
  response_rate?: string;
  /** 市 */
  shop_city?: string;
  /** 店铺编码 */
  shop_code?: string;
  /** 店铺详细地址 */
  shop_detail_address?: string;
  /** 区 */
  shop_district?: string;
  /** 店铺ID */
  shop_id?: string;
  /** 店铺主图 */
  shop_main_img?: string;
  /** 店铺名称 */
  shop_name?: string;
  /** 省 */
  shop_province?: string;
  /** 店铺链接 */
  shop_url?: string;
}

/** SupplierShopQueryVO */
export interface SupplierShopQueryVO {
  /**
   * 黑名单标记:0-不是,1-是
   * @format int32
   */
  blackTag?: number;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 排除黑名单标记:0-不是,1-是
   * @format int32
   */
  isExcludeblackTag?: number;
  /**
   * 排除黑名单待审核状态:0-不是,1-是
   * @format int32
   */
  isExcludewaitAuditFlag?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** 平台类型:TB:淘宝;AM:1688;TM:天猫;VC搜款网;WS:网商园;YW:义乌小商品市场;OL:线下 */
  platformType?: string;
  /** 采购渠道:TB:淘宝;AM:1688;TM:天猫;VC搜款网;WS:网商园;YW:义乌小商品市场;OL:线下 */
  purchaseChannel?: string;
  /** 采购员id */
  purchaserId?: string;
  /**
   * 查询类型: 1-供应商列表, 2-黑名单待审核列表, 3-黑名单列表
   * @format int32
   */
  queryType?: number;
  /** @format int32 */
  startIndex?: number;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /** 供应商名称 */
  supplierShopName?: string;
  /**
   * 供应商类型:1-成品,2-OEM,3-成品和OEM
   * @format int32
   */
  supplierType?: number;
  /** 供应商类型列表:1-成品,2-OEM,3-成品和OEM */
  supplierTypeList?: number[];
  /**
   * 黑名单待审核状态:0-不是,1-是
   * @format int32
   */
  waitAuditFlag?: number;
}

/** SupplierShopRespDTO */
export interface SupplierShopRespDTO {
  /**
   * 添加方式:1-系统,2-手动
   * @format int32
   */
  addMethod?: number;
  /** 附件地址 */
  appendix?: string;
  /** 基本资质 */
  basicQualifications?: string;
  /**
   * 黑名单加入时间
   * @format date-time
   */
  blackAddTime?: string;
  /** 黑名单原因 */
  blackReason?: string;
  /**
   * 黑名单原因编码
   * @format int32
   */
  blackReasonCode?: number;
  /**
   * 黑名单标记:0-不是,1-是
   * @format int32
   */
  blackTag?: number;
  /** 黑名单操作员id */
  blackUserId?: string;
  /** 黑名单操作员id */
  blackUserName?: string;
  /** 品牌id */
  brandId?: string;
  /** 品牌名称 */
  brandName?: string;
  /**
   * 渠道;1-档口(市场购);2-线上平台(透明购):3-线下合作
   * @format int32
   */
  channel?: number;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 额外信息json:基本资质,是否有廉政协议,供应商优势,推荐原因 */
  extraInfoJson?: string;
  /** 工厂信息code */
  factoryMemberCode?: string;
  /**
   * 次品处理方式:1-直接退款,2-退货退款,3-退货返修
   * @format int32
   */
  handleDefectiveMethod?: number;
  /** @format int64 */
  id?: number;
  /**
   * 是否自有工厂
   * @format int32
   */
  isHavingFactory?: number;
  /**
   * 是否有廉政协议
   * @format int32
   */
  isHavingIntegrityAgreement?: number;
  /**
   * 是否支持定制:0-不支持,1-支持
   * @format int32
   */
  isSupportCustomization?: number;
  /** 市场编码 */
  marketCode?: string;
  /** 员工人数 */
  numberEmployees?: string;
  /** oem评级 */
  oemSorceLevel?: string;
  /**
   * 操作人id
   * @format int64
   */
  operatorId?: number;
  /** 操作人名称 */
  operatorName?: string;
  /** 原始卖家店铺id */
  originalShopId?: string;
  /** 原始卖家店铺名 */
  originalShopName?: string;
  /** 来源平台类型;TB:淘宝;AM:1688;TM:天猫;VC:搜款网;WS:网商园;YW:义乌小商品市场;OL:线下 */
  platformType?: string;
  /** 成品评级 */
  productSorceLevel?: string;
  /** 成品供应商准入考核数据json:揽收率,履约率,退款率,响应率,综合服务评分,近30天支付订单数 */
  productSupplierOriginalInfoJson?: string;
  /** 采购渠道:TB:淘宝;AM:1688;TM:天猫;VC:搜款网;WS:网商园;YW:义乌小商品市场;OL:线下 */
  purchaseChannel?: string;
  /** 采购员id */
  purchaserId?: string;
  /** 采购员名字 */
  purchaserName?: string;
  /** 推荐原因 */
  reasonsForRecommendation?: string;
  /** 拒绝原因 */
  rejectReason?: string;
  /** 备注 */
  remark?: string;
  /** 供应商联系电话 */
  sellerContactMobilePhone?: string;
  /** 供应商联系人 */
  sellerContactPerson?: string;
  /** 市 */
  shopCity?: string;
  /** 市代码 */
  shopCityCode?: string;
  /** 店铺编码 */
  shopCode?: string;
  /** 区 */
  shopDistrict?: string;
  /** 区代码 */
  shopDistrictCode?: string;
  /** 档口号 */
  shopDoor?: string;
  /** 档口楼层 */
  shopFloor?: string;
  /** 详细地址 */
  shopLocation?: string;
  /** 店铺主图 */
  shopMainImg?: string;
  /** 店铺主营类目名称;格式","分隔 */
  shopMajorCateName?: string;
  /** 档口市场 */
  shopMall?: string;
  /** 卖家店铺名 */
  shopName?: string;
  /** 国家 */
  shopNation?: string;
  /** 国家代码 */
  shopNationCode?: string;
  /** 省 */
  shopProvince?: string;
  /** 省代码 */
  shopProvinceCode?: string;
  /** 店铺URL */
  shopUrl?: string;
  /**
   * 供应商状态;0:禁用;1:启用;
   * @format int32
   */
  status?: number;
  /** 供应商优势 */
  supplierAdvantages?: string;
  /** 供应商工厂信息 */
  supplierFactoryRespDTO?: SupplierFactoryRespDTO;
  /** 供应商收款信息 */
  supplierPaymentAccountRespDTOS?: SupplierPaymentAccountRespDTO[];
  /** 供应商履约信息 */
  supplierPerformanceSyncRespDTO?: SupplierPerformanceSyncRespDTO;
  /** 供应商结算信息 */
  supplierSettlementRespDTO?: SupplierSettlementRespDTO;
  /** 店铺编码 */
  supplierShopCode?: string;
  /** 店铺编码 */
  supplierShopName?: string;
  /**
   * 供应商类型:1-成品,2-OEM,3-成品和OEM
   * @format int32
   */
  supplierType?: number;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  /**
   * 黑名单待审核状态:0-不是,1-是
   * @format int32
   */
  waitAuditFlag?: number;
}

/** SupplierSimilarSearchReqDTO */
export interface SupplierSimilarSearchReqDTO {
  /** @format int64 */
  customerId?: number;
  dislikeShopCodeList?: string[];
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  shopCode?: string;
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
}

/** SyncSupplierReq */
export interface SyncSupplierReq {
  productCode?: string;
  shopCode?: string;
  shopUrl?: string;
}

/** TaskMeta */
export interface TaskMeta {
  aliasName?: string;
  businessSerializeInfo?: string;
  nexts?: TaskMeta[];
  /** @format int32 */
  stepId?: number;
  /** @format int32 */
  timeout?: number;
}

/** TranslateCommonTextReqDTO */
export interface TranslateCommonTextReqDTO {
  from?: string;
  text?: string;
  to?: string;
}

/** TranslateReqVo */
export interface TranslateReqVo {
  /** 翻译后语言代码:zh-中文,ja-日语,ko-韩语,en-英语 */
  afterLanguageCode?: string;
  /** 原语言代码:zh-中文,ja-日语,ko-韩语,en-英语 */
  beforeLanguageCode?: string;
  /** 关键字 */
  keyword?: string;
}

/** TranslateTextReqDTO */
export interface TranslateTextReqDTO {
  text?: string;
}

/** UpdateStockDetailReqDTO */
export interface UpdateStockDetailReqDTO {
  /** @format int32 */
  changeQty?: number;
  orderNo?: string;
  productSku?: string;
}

/** UpdateStockReqDTO */
export interface UpdateStockReqDTO {
  detailReqDTOS?: UpdateStockDetailReqDTO[];
  operateUserId?: string;
  operateUserName?: string;
  operationType?: string;
  requestId?: string;
}

/** UserImageUsageAddReqDTO */
export interface UserImageUsageAddReqDTO {
  /** 商品编码 */
  productCode?: string;
  /**
   * 统一用户id
   * @format int64
   */
  superCustomerId?: number;
  /**
   * 使用时间
   * @format date-time
   */
  userTime?: string;
}

/**
 * UserImageUsageRespDTO
 * 用户无水印使用详情
 */
export interface UserImageUsageRespDTO {
  /**
   * 最大使用次数 -1 无限制
   * @format int32
   */
  maxNum?: number;
  /**
   * 本月使用次数
   * @format int32
   */
  num?: number;
}

/** BizResponse«BrandManageDetailRespDTO» */
export interface BizResponseBrandManageDetailRespDTO {
  code?: string;
  /** 后台管理-品牌详情 */
  data?: BrandManageDetailRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«BrandSetInfoRespDTO» */
export interface BizResponseBrandSetInfoRespDTO {
  code?: string;
  /** 客户端-品牌集查询 */
  data?: BrandSetInfoRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerBrandAuthApplyAuditQueryRespDTO» */
export interface BizResponseCustomerBrandAuthApplyAuditQueryRespDTO {
  code?: string;
  data?: CustomerBrandAuthApplyAuditQueryRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerBrandAuthApplyQueryRespDTO» */
export interface BizResponseCustomerBrandAuthApplyQueryRespDTO {
  code?: string;
  data?: CustomerBrandAuthApplyQueryRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerBrandAuthApplyStatisticRespDTO» */
export interface BizResponseCustomerBrandAuthApplyStatisticRespDTO {
  code?: string;
  data?: CustomerBrandAuthApplyStatisticRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«HashMap«string,List«SkuRespDTO»»» */
export interface BizResponseHashMapStringListSkuRespDTO {
  code?: string;
  data?: Record<string, SkuRespDTO[]>;
  msg?: string;
  success?: boolean;
}

/** BizResponse«IPage«OnlineManageVO»» */
export interface BizResponseIPageOnlineManageVO {
  code?: string;
  data?: IPageOnlineManageVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«IPage«StrategyConfigProductVO»» */
export interface BizResponseIPageStrategyConfigProductVO {
  code?: string;
  data?: IPageStrategyConfigProductVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«IPage«StrategyConfigShopVo»» */
export interface BizResponseIPageStrategyConfigShopVo {
  code?: string;
  data?: IPageStrategyConfigShopVo;
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«BrandBannnerQueryRespDTO»» */
export interface BizResponseListBrandBannnerQueryRespDTO {
  code?: string;
  data?: BrandBannnerQueryRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«BrandInfoRespDTO»» */
export interface BizResponseListBrandInfoRespDTO {
  code?: string;
  data?: BrandInfoRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«BrandItemDTO»» */
export interface BizResponseListBrandItemDTO {
  code?: string;
  data?: BrandItemDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«BrandShopRespDTO»» */
export interface BizResponseListBrandShopRespDTO {
  code?: string;
  data?: BrandShopRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«BrandStyleRespDTO»» */
export interface BizResponseListBrandStyleRespDTO {
  code?: string;
  data?: BrandStyleRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerBrandAuthApplyAuditQueryRespDTO»» */
export interface BizResponseListCustomerBrandAuthApplyAuditQueryRespDTO {
  code?: string;
  data?: CustomerBrandAuthApplyAuditQueryRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerFocusProductPrice»» */
export interface BizResponseListCustomerFocusProductPrice {
  code?: string;
  data?: CustomerFocusProductPrice[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerFocusProductRespDTO»» */
export interface BizResponseListCustomerFocusProductRespDTO {
  code?: string;
  data?: CustomerFocusProductRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerHomeFastCategoryRespDTO»» */
export interface BizResponseListCustomerHomeFastCategoryRespDTO {
  code?: string;
  data?: CustomerHomeFastCategoryRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerSearchKeywordHotRespDTO»» */
export interface BizResponseListCustomerSearchKeywordHotRespDTO {
  code?: string;
  data?: CustomerSearchKeywordHotRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerStrategyShopRespDTO»» */
export interface BizResponseListCustomerStrategyShopRespDTO {
  code?: string;
  data?: CustomerStrategyShopRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«MallCategoryRespDTO»» */
export interface BizResponseListMallCategoryRespDTO {
  code?: string;
  data?: MallCategoryRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«Map«string,object»»» */
export interface BizResponseListMapStringObject {
  code?: string;
  data?: MapStringObject[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«OnlineManageTypeVO»» */
export interface BizResponseListOnlineManageTypeVO {
  code?: string;
  data?: OnlineManageTypeVO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ProductCategoryFrontendGroupChannelRespDTO»» */
export interface BizResponseListProductCategoryFrontendGroupChannelRespDTO {
  code?: string;
  data?: ProductCategoryFrontendGroupChannelRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ProductCategoryFrontendMapGroupRespDTO»» */
export interface BizResponseListProductCategoryFrontendMapGroupRespDTO {
  code?: string;
  data?: ProductCategoryFrontendMapGroupRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ProductCategoryFrontendRespDTO»» */
export interface BizResponseListProductCategoryFrontendRespDTO {
  code?: string;
  data?: ProductCategoryFrontendRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ProductCategoryMapGroupRespDTO»» */
export interface BizResponseListProductCategoryMapGroupRespDTO {
  code?: string;
  data?: ProductCategoryMapGroupRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ProductCategoryMapRespDTO»» */
export interface BizResponseListProductCategoryMapRespDTO {
  code?: string;
  data?: ProductCategoryMapRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ProductCategoryRespDTO»» */
export interface BizResponseListProductCategoryRespDTO {
  code?: string;
  data?: ProductCategoryRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ProductCategoryRespVO»» */
export interface BizResponseListProductCategoryRespVO {
  code?: string;
  data?: ProductCategoryRespVO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ProductCategoryThirdChannelPlatformTypeRespDTO»» */
export interface BizResponseListProductCategoryThirdChannelPlatformTypeRespDTO {
  code?: string;
  data?: ProductCategoryThirdChannelPlatformTypeRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ProductCategoryThirdRespDTO»» */
export interface BizResponseListProductCategoryThirdRespDTO {
  code?: string;
  data?: ProductCategoryThirdRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ProductCodeSkuMapRespDTO»» */
export interface BizResponseListProductCodeSkuMapRespDTO {
  code?: string;
  data?: ProductCodeSkuMapRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ProductCustomsRespDTO»» */
export interface BizResponseListProductCustomsRespDTO {
  code?: string;
  data?: ProductCustomsRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ProductDetailRespDTO»» */
export interface BizResponseListProductDetailRespDTO {
  code?: string;
  data?: ProductDetailRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ProductImageConfigRespDTO»» */
export interface BizResponseListProductImageConfigRespDTO {
  code?: string;
  data?: ProductImageConfigRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ProductKpiDTO»» */
export interface BizResponseListProductKpiDTO {
  code?: string;
  data?: ProductKpiDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ProductMallFrontendRespDTO»» */
export interface BizResponseListProductMallFrontendRespDTO {
  code?: string;
  data?: ProductMallFrontendRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ProductRespDTO»» */
export interface BizResponseListProductRespDTO {
  code?: string;
  data?: ProductRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«PurchaseMallRespDTO»» */
export interface BizResponseListPurchaseMallRespDTO {
  code?: string;
  data?: PurchaseMallRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«SkuProductSimpleRespDTO»» */
export interface BizResponseListSkuProductSimpleRespDTO {
  code?: string;
  data?: SkuProductSimpleRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«SkuRespDTO»» */
export interface BizResponseListSkuRespDTO {
  code?: string;
  data?: SkuRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«SkuRespVO»» */
export interface BizResponseListSkuRespVO {
  code?: string;
  data?: SkuRespVO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«StrategyConfigProductUrlResultVo»» */
export interface BizResponseListStrategyConfigProductUrlResultVo {
  code?: string;
  data?: StrategyConfigProductUrlResultVo[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«StrategyConfigShopUrlResultVo»» */
export interface BizResponseListStrategyConfigShopUrlResultVo {
  code?: string;
  data?: StrategyConfigShopUrlResultVo[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«SupplierShopRespDTO»» */
export interface BizResponseListSupplierShopRespDTO {
  code?: string;
  data?: SupplierShopRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«string»» */
export interface BizResponseListString {
  code?: string;
  data?: string[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«Map«string,boolean»» */
export interface BizResponseMapStringBoolean {
  code?: string;
  data?: Record<string, boolean>;
  msg?: string;
  success?: boolean;
}

/** BizResponse«OnlineManageDetailVO» */
export interface BizResponseOnlineManageDetailVO {
  code?: string;
  data?: OnlineManageDetailVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PageResult«ProductHsCodeKeywordRespDTO»» */
export interface BizResponsePageResultProductHsCodeKeywordRespDTO {
  code?: string;
  data?: PageResultProductHsCodeKeywordRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«BrandItemDTO»» */
export interface BizResponsePageBrandItemDTO {
  code?: string;
  data?: PageBrandItemDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«BrandManageInfoRespDTO»» */
export interface BizResponsePageBrandManageInfoRespDTO {
  code?: string;
  data?: PageBrandManageInfoRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«BrandSetInfoRespDTO»» */
export interface BizResponsePageBrandSetInfoRespDTO {
  code?: string;
  data?: PageBrandSetInfoRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«BrandStyleRespDTO»» */
export interface BizResponsePageBrandStyleRespDTO {
  code?: string;
  data?: PageBrandStyleRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerBehaviorProductRespDTO»» */
export interface BizResponsePageCustomerBehaviorProductRespDTO {
  code?: string;
  data?: PageCustomerBehaviorProductRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerBehaviorShopRespDTO»» */
export interface BizResponsePageCustomerBehaviorShopRespDTO {
  code?: string;
  data?: PageCustomerBehaviorShopRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerBoughtProductRespDTO»» */
export interface BizResponsePageCustomerBoughtProductRespDTO {
  code?: string;
  data?: PageCustomerBoughtProductRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerBoughtShopRespDTO»» */
export interface BizResponsePageCustomerBoughtShopRespDTO {
  code?: string;
  data?: PageCustomerBoughtShopRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerBrandAuthApplyQueryFrontRespDTO»» */
export interface BizResponsePageCustomerBrandAuthApplyQueryFrontRespDTO {
  code?: string;
  data?: PageCustomerBrandAuthApplyQueryFrontRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerBrandAuthApplyQueryRespDTO»» */
export interface BizResponsePageCustomerBrandAuthApplyQueryRespDTO {
  code?: string;
  data?: PageCustomerBrandAuthApplyQueryRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerFavoriteBrandRespDTO»» */
export interface BizResponsePageCustomerFavoriteBrandRespDTO {
  code?: string;
  data?: PageCustomerFavoriteBrandRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerFavoriteProductRespDTO»» */
export interface BizResponsePageCustomerFavoriteProductRespDTO {
  code?: string;
  data?: PageCustomerFavoriteProductRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerFavoriteShopRespDTO»» */
export interface BizResponsePageCustomerFavoriteShopRespDTO {
  code?: string;
  data?: PageCustomerFavoriteShopRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerFocusProduct»» */
export interface BizResponsePageCustomerFocusProduct {
  code?: string;
  data?: PageCustomerFocusProduct;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerFootprintProductRespDTO»» */
export interface BizResponsePageCustomerFootprintProductRespDTO {
  code?: string;
  data?: PageCustomerFootprintProductRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerFootprintShopRespDTO»» */
export interface BizResponsePageCustomerFootprintShopRespDTO {
  code?: string;
  data?: PageCustomerFootprintShopRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerStrategyProductRespDTO»» */
export interface BizResponsePageCustomerStrategyProductRespDTO {
  code?: string;
  data?: PageCustomerStrategyProductRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«MallCategoryRespDTO»» */
export interface BizResponsePageMallCategoryRespDTO {
  code?: string;
  data?: PageMallCategoryRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«ProductCategoryRespVO»» */
export interface BizResponsePageProductCategoryRespVO {
  code?: string;
  data?: PageProductCategoryRespVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«ProductCategoryThirdRespDTO»» */
export interface BizResponsePageProductCategoryThirdRespDTO {
  code?: string;
  data?: PageProductCategoryThirdRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«ProductCustomsRespDTO»» */
export interface BizResponsePageProductCustomsRespDTO {
  code?: string;
  data?: PageProductCustomsRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«ProductHsCodeKeywordMappingRespDTO»» */
export interface BizResponsePageProductHsCodeKeywordMappingRespDTO {
  code?: string;
  data?: PageProductHsCodeKeywordMappingRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«ProductOperatorLogVo»» */
export interface BizResponsePageProductOperatorLogVo {
  code?: string;
  data?: PageProductOperatorLogVo;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«ProductPopularMallRespDTO»» */
export interface BizResponsePageProductPopularMallRespDTO {
  code?: string;
  data?: PageProductPopularMallRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«ProductReferenceRespDTO»» */
export interface BizResponsePageProductReferenceRespDTO {
  code?: string;
  data?: PageProductReferenceRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«ProductRespDTO»» */
export interface BizResponsePageProductRespDTO {
  code?: string;
  data?: PageProductRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«ProductSameStyleRespVO»» */
export interface BizResponsePageProductSameStyleRespVO {
  code?: string;
  data?: PageProductSameStyleRespVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«ProductSimilar»» */
export interface BizResponsePageProductSimilar {
  code?: string;
  data?: PageProductSimilar;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«RecommendProductSearchRespDTO»» */
export interface BizResponsePageRecommendProductSearchRespDTO {
  code?: string;
  data?: PageRecommendProductSearchRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«RecommendSupplierSearchRespDTO»» */
export interface BizResponsePageRecommendSupplierSearchRespDTO {
  code?: string;
  data?: PageRecommendSupplierSearchRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«SearchProductRespDTO»» */
export interface BizResponsePageSearchProductRespDTO {
  code?: string;
  data?: PageSearchProductRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«SearchProductRespVO»» */
export interface BizResponsePageSearchProductRespVO {
  code?: string;
  data?: PageSearchProductRespVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«SearchSupplierRespDTO»» */
export interface BizResponsePageSearchSupplierRespDTO {
  code?: string;
  data?: PageSearchSupplierRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«SupplierManageListVO»» */
export interface BizResponsePageSupplierManageListVO {
  code?: string;
  data?: PageSupplierManageListVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«SupplierShopRespDTO»» */
export interface BizResponsePageSupplierShopRespDTO {
  code?: string;
  data?: PageSupplierShopRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ProductAndSkuRespDTO» */
export interface BizResponseProductAndSkuRespDTO {
  code?: string;
  data?: ProductAndSkuRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ProductCategoryFrontendRespDTO» */
export interface BizResponseProductCategoryFrontendRespDTO {
  code?: string;
  data?: ProductCategoryFrontendRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ProductCategoryRespDTO» */
export interface BizResponseProductCategoryRespDTO {
  code?: string;
  data?: ProductCategoryRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ProductCategoryThirdGroupTreeShortRespDTO» */
export interface BizResponseProductCategoryThirdGroupTreeShortRespDTO {
  code?: string;
  data?: ProductCategoryThirdGroupTreeShortRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ProductDetailRespDTO» */
export interface BizResponseProductDetailRespDTO {
  code?: string;
  data?: ProductDetailRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ProductDetailResponse» */
export interface BizResponseProductDetailResponse {
  code?: string;
  data?: ProductDetailResponse;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ProductDetailVo» */
export interface BizResponseProductDetailVo {
  code?: string;
  data?: ProductDetailVo;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ProductHsCodeKeywordMappingRespDTO» */
export interface BizResponseProductHsCodeKeywordMappingRespDTO {
  code?: string;
  data?: ProductHsCodeKeywordMappingRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ProductReferenceRespDTO» */
export interface BizResponseProductReferenceRespDTO {
  code?: string;
  data?: ProductReferenceRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ProductRespDTO» */
export interface BizResponseProductRespDTO {
  code?: string;
  data?: ProductRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ProductSameStylePutInRespVO» */
export interface BizResponseProductSameStylePutInRespVO {
  code?: string;
  data?: ProductSameStylePutInRespVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ProductSimpleRespDTO» */
export interface BizResponseProductSimpleRespDTO {
  code?: string;
  data?: ProductSimpleRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ShopProductRespVO» */
export interface BizResponseShopProductRespVO {
  code?: string;
  data?: ShopProductRespVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«SkuRespDTO» */
export interface BizResponseSkuRespDTO {
  code?: string;
  data?: SkuRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«SkuRespVO» */
export interface BizResponseSkuRespVO {
  code?: string;
  data?: SkuRespVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«StrategyConfigProductItemVO» */
export interface BizResponseStrategyConfigProductItemVO {
  code?: string;
  data?: StrategyConfigProductItemVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«StrategyConfigShopItemVO» */
export interface BizResponseStrategyConfigShopItemVO {
  code?: string;
  data?: StrategyConfigShopItemVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«SupplierManageListVO» */
export interface BizResponseSupplierManageListVO {
  code?: string;
  data?: SupplierManageListVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«SupplierManageSkuCountInfoVo» */
export interface BizResponseSupplierManageSkuCountInfoVo {
  code?: string;
  data?: SupplierManageSkuCountInfoVo;
  msg?: string;
  success?: boolean;
}

/** BizResponse«SupplierProductRespDTO» */
export interface BizResponseSupplierProductRespDTO {
  code?: string;
  data?: SupplierProductRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«SupplierShopRespDTO» */
export interface BizResponseSupplierShopRespDTO {
  code?: string;
  data?: SupplierShopRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«UserImageUsageRespDTO» */
export interface BizResponseUserImageUsageRespDTO {
  code?: string;
  /** 用户无水印使用详情 */
  data?: UserImageUsageRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«boolean» */
export interface BizResponseBoolean {
  code?: string;
  data?: boolean;
  msg?: string;
  success?: boolean;
}

/** BizResponse«int» */
export interface BizResponseInt {
  code?: string;
  /** @format int32 */
  data?: number;
  msg?: string;
  success?: boolean;
}

/** BizResponse«long» */
export interface BizResponseLong {
  code?: string;
  /** @format int64 */
  data?: number;
  msg?: string;
  success?: boolean;
}

/** BizResponse«object» */
export interface BizResponseObject {
  code?: string;
  data?: object;
  msg?: string;
  success?: boolean;
}

/** BizResponse«string» */
export interface BizResponseString {
  code?: string;
  data?: string;
  msg?: string;
  success?: boolean;
}

/** EngineResult«List«HandlerServiceMeta»» */
export interface EngineResultListHandlerServiceMeta {
  /** @format int32 */
  code?: number;
  data?: HandlerServiceMeta[];
  message?: string;
}

/** EngineResult«string» */
export interface EngineResultString {
  /** @format int32 */
  code?: number;
  data?: string;
  message?: string;
}

/** HashMap«string,List«SkuRespDTO»» */
export type HashMapStringListSkuRespDTO = Record<string, any>;

/** IPage«OnlineManageVO» */
export interface IPageOnlineManageVO {
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  pages?: number;
  records?: OnlineManageVO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«StrategyConfigProductVO» */
export interface IPageStrategyConfigProductVO {
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  pages?: number;
  records?: StrategyConfigProductVO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«StrategyConfigShopVo» */
export interface IPageStrategyConfigShopVo {
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  pages?: number;
  records?: StrategyConfigShopVo[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Map«string,boolean» */
export type MapStringBoolean = Record<string, boolean>;

/** Map«string,object» */
export type MapStringObject = Record<string, object>;

/** PageResult«ProductHsCodeKeywordRespDTO» */
export interface PageResultProductHsCodeKeywordRespDTO {
  /** @format int64 */
  current?: number;
  records?: ProductHsCodeKeywordRespDTO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
  /** @format int64 */
  totalPage?: number;
}

/** Page«BrandItemDTO» */
export interface PageBrandItemDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: BrandItemDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«BrandManageInfoRespDTO» */
export interface PageBrandManageInfoRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: BrandManageInfoRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«BrandSetInfoRespDTO» */
export interface PageBrandSetInfoRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: BrandSetInfoRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«BrandStyleRespDTO» */
export interface PageBrandStyleRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: BrandStyleRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerBehaviorProductRespDTO» */
export interface PageCustomerBehaviorProductRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: CustomerBehaviorProductRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerBehaviorShopRespDTO» */
export interface PageCustomerBehaviorShopRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: CustomerBehaviorShopRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerBoughtProductRespDTO» */
export interface PageCustomerBoughtProductRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: CustomerBoughtProductRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerBoughtShopRespDTO» */
export interface PageCustomerBoughtShopRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: CustomerBoughtShopRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerBrandAuthApplyQueryFrontRespDTO» */
export interface PageCustomerBrandAuthApplyQueryFrontRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: CustomerBrandAuthApplyQueryFrontRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerBrandAuthApplyQueryRespDTO» */
export interface PageCustomerBrandAuthApplyQueryRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: CustomerBrandAuthApplyQueryRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerFavoriteBrandRespDTO» */
export interface PageCustomerFavoriteBrandRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: CustomerFavoriteBrandRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerFavoriteProductRespDTO» */
export interface PageCustomerFavoriteProductRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: CustomerFavoriteProductRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerFavoriteShopRespDTO» */
export interface PageCustomerFavoriteShopRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: CustomerFavoriteShopRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerFocusProduct» */
export interface PageCustomerFocusProduct {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: CustomerFocusProduct[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerFootprintProductRespDTO» */
export interface PageCustomerFootprintProductRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: CustomerFootprintProductRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerFootprintShopRespDTO» */
export interface PageCustomerFootprintShopRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: CustomerFootprintShopRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerStrategyProductRespDTO» */
export interface PageCustomerStrategyProductRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: CustomerStrategyProductRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«MallCategoryRespDTO» */
export interface PageMallCategoryRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: MallCategoryRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«ProductCategoryRespVO» */
export interface PageProductCategoryRespVO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: ProductCategoryRespVO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«ProductCategoryThirdRespDTO» */
export interface PageProductCategoryThirdRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: ProductCategoryThirdRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«ProductCustomsRespDTO» */
export interface PageProductCustomsRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: ProductCustomsRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«ProductHsCodeKeywordMappingRespDTO» */
export interface PageProductHsCodeKeywordMappingRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: ProductHsCodeKeywordMappingRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«ProductOperatorLogVo» */
export interface PageProductOperatorLogVo {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: ProductOperatorLogVo[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«ProductPopularMallRespDTO» */
export interface PageProductPopularMallRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: ProductPopularMallRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«ProductReferenceRespDTO» */
export interface PageProductReferenceRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: ProductReferenceRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«ProductRespDTO» */
export interface PageProductRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: ProductRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«ProductSameStyleRespVO» */
export interface PageProductSameStyleRespVO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: ProductSameStyleRespVO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«ProductSimilar» */
export interface PageProductSimilar {
  /** @format int32 */
  limit?: number;
  list?: ProductSimilar[];
  /** @format int32 */
  offset?: number;
  /** @format int64 */
  totalCount?: number;
  /** @format int64 */
  totalPage?: number;
}

/** Page«RecommendProductSearchRespDTO» */
export interface PageRecommendProductSearchRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: RecommendProductSearchRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«RecommendSupplierSearchRespDTO» */
export interface PageRecommendSupplierSearchRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: RecommendSupplierSearchRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«SearchProductRespDTO» */
export interface PageSearchProductRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: SearchProductRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«SearchProductRespVO» */
export interface PageSearchProductRespVO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: SearchProductRespVO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«SearchSupplierRespDTO» */
export interface PageSearchSupplierRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: SearchSupplierRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«SupplierManageListVO» */
export interface PageSupplierManageListVO {
  /** @format int32 */
  limit?: number;
  list?: SupplierManageListVO[];
  /** @format int32 */
  offset?: number;
  /** @format int64 */
  totalCount?: number;
  /** @format int64 */
  totalPage?: number;
}

/** Page«SupplierShopRespDTO» */
export interface PageSupplierShopRespDTO {
  countId?: string;
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders?: OrderItem[];
  /** @format int64 */
  pages?: number;
  records?: SupplierShopRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

import axios, { AxiosInstance, AxiosRequestConfig, HeadersDefaults, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "//master-gateway.theckb.com:443/goods",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance
      .request({
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        },
        params: query,
        responseType: responseFormat,
        data: body,
        url: path,
      })
      .then((response) => response.data);
  };
}

/**
 * @title API文档
 * @version v1.0.0
 * @baseUrl //master-gateway.theckb.com:443/goods
 * @contact 史尼芙 (https://www.taobaockb.com/)
 *
 * 史尼芙API文档
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  probe = {
    /**
     * No description
     *
     * @tags livens-probe-controller
     * @name Test
     * @summary 执行一次健康检查探针
     * @request GET:/Probe/test
     */
    test: (params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/Probe/test`,
        method: "GET",
        ...params,
      }),
  };
  actuator1 = {
    /**
     * No description
     *
     * @tags monitor-contorller
     * @name JvmInfo
     * @summary jvmInfo
     * @request GET:/actuator1/jvmInfo
     */
    jvmInfo: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/actuator1/jvmInfo`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags monitor-contorller
     * @name HeadActuator1
     * @summary jvmInfo
     * @request HEAD:/actuator1/jvmInfo
     */
    headActuator1: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/actuator1/jvmInfo`,
        method: "HEAD",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags monitor-contorller
     * @name JvmInfo2
     * @summary jvmInfo
     * @request POST:/actuator1/jvmInfo
     * @originalName jvmInfo
     * @duplicate
     */
    jvmInfo2: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/actuator1/jvmInfo`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags monitor-contorller
     * @name JvmInfo3
     * @summary jvmInfo
     * @request PUT:/actuator1/jvmInfo
     * @originalName jvmInfo
     * @duplicate
     */
    jvmInfo3: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/actuator1/jvmInfo`,
        method: "PUT",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags monitor-contorller
     * @name JvmInfo4
     * @summary jvmInfo
     * @request DELETE:/actuator1/jvmInfo
     * @originalName jvmInfo
     * @duplicate
     */
    jvmInfo4: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/actuator1/jvmInfo`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags monitor-contorller
     * @name OptionsActuator1
     * @summary jvmInfo
     * @request OPTIONS:/actuator1/jvmInfo
     */
    optionsActuator1: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/actuator1/jvmInfo`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags monitor-contorller
     * @name JvmInfo5
     * @summary jvmInfo
     * @request PATCH:/actuator1/jvmInfo
     * @originalName jvmInfo
     * @duplicate
     */
    jvmInfo5: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/actuator1/jvmInfo`,
        method: "PATCH",
        type: ContentType.Json,
        ...params,
      }),
  };
  backdoor = {
    /**
     * No description
     *
     * @tags 类目后门接口
     * @name ProductCategoryAddKrAndEnData
     * @summary addKrAndEnData
     * @request GET:/backdoor/productCategory/addKrAndEnData
     */
    productCategoryAddKrAndEnData: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/backdoor/productCategory/addKrAndEnData`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 类目后门接口
     * @name ProductCategoryInitEnAndKr
     * @summary initEnAndKr
     * @request GET:/backdoor/productCategory/initEnAndKr
     */
    productCategoryInitEnAndKr: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/backdoor/productCategory/initEnAndKr`,
        method: "GET",
        ...params,
      }),
  };
  behavior = {
    /**
     * No description
     *
     * @tags 用户行为记录
     * @name Product
     * @summary recordProduct
     * @request POST:/behavior/product
     */
    product: (saveReqDTO: CustomerBehaviorProductSaveReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/behavior/product`,
        method: "POST",
        body: saveReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户行为记录
     * @name ProductList
     * @summary productList
     * @request POST:/behavior/product/list
     */
    productList: (pageReqDTO: CustomerBehaviorProductPageReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerBehaviorProductRespDTO, any>({
        path: `/behavior/product/list`,
        method: "POST",
        body: pageReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户行为记录
     * @name Shop
     * @summary recordShop
     * @request POST:/behavior/shop
     */
    shop: (saveReqDTO: CustomerBehaviorShopSaveReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/behavior/shop`,
        method: "POST",
        body: saveReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户行为记录
     * @name ShopList
     * @summary shopList
     * @request POST:/behavior/shop/list
     */
    shopList: (pageReqDTO: CustomerBehaviorShopPageReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerBehaviorShopRespDTO, any>({
        path: `/behavior/shop/list`,
        method: "POST",
        body: pageReqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  brand = {
    /**
     * No description
     *
     * @tags 用户品牌授权相关
     * @name AuthApply
     * @summary 用户发起品牌授权申请
     * @request POST:/brand/auth/apply
     */
    authApply: (reqDTO: CustomerBrandAuthApplyReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/brand/auth/apply`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户品牌授权相关
     * @name AuthAudit
     * @summary 用户品牌授权申请审核
     * @request POST:/brand/auth/audit
     */
    authAudit: (reqDTO: CustomerBrandAuthAuditReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/brand/auth/audit`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户品牌授权相关
     * @name AuthCancel
     * @summary 用户品牌授权申请取消
     * @request GET:/brand/auth/cancel
     */
    authCancel: (
      query: {
        /**
         * applyId
         * @format int64
         */
        applyId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/brand/auth/cancel`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户品牌授权相关
     * @name AuthEdit
     * @summary 用户品牌授权申请修改
     * @request POST:/brand/auth/edit
     */
    authEdit: (reqDTO: CustomerBrandAuthApplyReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/brand/auth/edit`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户品牌授权查询相关
     * @name AuthQueryAuditLastDetail
     * @summary 客户品牌授权终审-查询最近初审审核信息
     * @request GET:/brand/auth/query/audit/last/detail
     */
    authQueryAuditLastDetail: (
      query: {
        /**
         * applyId
         * @format int64
         */
        applyId: number;
        /**
         * auditFlow
         * @format int32
         */
        auditFlow?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerBrandAuthApplyAuditQueryRespDTO, any>({
        path: `/brand/auth/query/audit/last/detail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户品牌授权查询相关
     * @name AuthQueryAuditList
     * @summary 客户品牌授权申请 审核记录查询
     * @request GET:/brand/auth/query/audit/list
     */
    authQueryAuditList: (
      query: {
        /**
         * applyId
         * @format int64
         */
        applyId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCustomerBrandAuthApplyAuditQueryRespDTO, any>({
        path: `/brand/auth/query/audit/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户品牌授权查询相关
     * @name AuthQueryAuditListFront
     * @summary 客户品牌授权申请 审核记录查询(前台)
     * @request GET:/brand/auth/query/audit/list/front
     */
    authQueryAuditListFront: (
      query: {
        /**
         * applyId
         * @format int64
         */
        applyId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCustomerBrandAuthApplyAuditQueryRespDTO, any>({
        path: `/brand/auth/query/audit/list/front`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户品牌授权查询相关
     * @name AuthQueryBackListPage
     * @summary 客户品牌授权申请分页查询(后台)
     * @request POST:/brand/auth/query/back/list/page
     */
    authQueryBackListPage: (reqDTO: CustomerBrandAuthApplyQueryReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerBrandAuthApplyQueryRespDTO, any>({
        path: `/brand/auth/query/back/list/page`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户品牌授权查询相关
     * @name AuthQueryDetail
     * @summary 客户品牌授权申请详情
     * @request GET:/brand/auth/query/detail
     */
    authQueryDetail: (
      query: {
        /**
         * applyId
         * @format int64
         */
        applyId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerBrandAuthApplyQueryRespDTO, any>({
        path: `/brand/auth/query/detail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户品牌授权查询相关
     * @name AuthQueryExport
     * @summary 客户品牌授权申请导出
     * @request POST:/brand/auth/query/export
     */
    authQueryExport: (reqDTO: CustomerBrandAuthApplyQueryReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/brand/auth/query/export`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户品牌授权查询相关
     * @name AuthQueryFrontLast
     * @summary 查询最近一次已失效的授权申请(前台)
     * @request GET:/brand/auth/query/front/last/{applyStatus}
     */
    authQueryFrontLast: (
      applyStatus: string,
      query: {
        /**
         * brandId
         * @format int64
         */
        brandId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerBrandAuthApplyQueryRespDTO, any>({
        path: `/brand/auth/query/front/last/${applyStatus}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户品牌授权查询相关
     * @name AuthQueryFrontListPage
     * @summary 用户品牌授权申请分页查询(前台)
     * @request POST:/brand/auth/query/front/list/page
     */
    authQueryFrontListPage: (reqDTO: CustomerBrandAuthApplyQueryReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerBrandAuthApplyQueryFrontRespDTO, any>({
        path: `/brand/auth/query/front/list/page`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户品牌授权查询相关
     * @name AuthQueryFrontStatistic
     * @summary 客户品牌授权申请统计
     * @request GET:/brand/auth/query/front/statistic
     */
    authQueryFrontStatistic: (params: RequestParams = {}) =>
      this.request<BizResponseCustomerBrandAuthApplyStatisticRespDTO, any>({
        path: `/brand/auth/query/front/statistic`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户品牌授权相关
     * @name AuthSubmit
     * @summary 用户品牌授权申请提交
     * @request GET:/brand/auth/submit
     */
    authSubmit: (
      query: {
        /**
         * applyId
         * @format int64
         */
        applyId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/brand/auth/submit`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 品牌相关
     * @name ListByProducts
     * @summary 根据商品返回品牌列表
     * @request POST:/brand/listByProducts
     */
    listByProducts: (reqDTO: BrandInfoReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListBrandInfoRespDTO, any>({
        path: `/brand/listByProducts`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 品牌相关
     * @name ListByShops
     * @summary 根据店铺返回品牌列表
     * @request POST:/brand/listByShops
     */
    listByShops: (reqDTO: BrandInfoReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListBrandInfoRespDTO, any>({
        path: `/brand/listByShops`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 品牌相关
     * @name ManageAdd
     * @summary 后台管理-新增品牌
     * @request POST:/brand/manage/add
     */
    manageAdd: (brandReqDTO: BrandReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseLong, any>({
        path: `/brand/manage/add`,
        method: "POST",
        body: brandReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 品牌相关
     * @name ManageCancelRelease
     * @summary 后台管理-品牌取消发布
     * @request POST:/brand/manage/cancelRelease
     */
    manageCancelRelease: (brandOperationReqDTO: BrandOperationReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/brand/manage/cancelRelease`,
        method: "POST",
        body: brandOperationReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 品牌相关
     * @name ManageDelete
     * @summary 后台管理-品牌删除
     * @request POST:/brand/manage/delete
     */
    manageDelete: (brandOperationReqDTO: BrandOperationReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/brand/manage/delete`,
        method: "POST",
        body: brandOperationReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 品牌相关
     * @name ManageEdit
     * @summary 后台管理-编辑品牌
     * @request POST:/brand/manage/edit
     */
    manageEdit: (brandReqDTO: BrandReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseLong, any>({
        path: `/brand/manage/edit`,
        method: "POST",
        body: brandReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 品牌相关
     * @name ManageExcelTmpImport
     * @summary tmpImportBrand
     * @request POST:/brand/manage/excel/tmp/import
     */
    manageExcelTmpImport: (
      data: {
        /** file */
        file?: File;
      },
      query?: {
        /** isCheck */
        isCheck?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseString, any>({
        path: `/brand/manage/excel/tmp/import`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 品牌相关
     * @name ManageExport
     * @summary 后台管理-品牌导出
     * @request POST:/brand/manage/export
     */
    manageExport: (brandManageQueryReqDTO: BrandManageQueryReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/brand/manage/export`,
        method: "POST",
        body: brandManageQueryReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 品牌相关
     * @name ManageQuery
     * @summary 后台管理-查询品牌列表
     * @request POST:/brand/manage/query
     */
    manageQuery: (brandManageQueryReqDTO: BrandManageQueryReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageBrandManageInfoRespDTO, any>({
        path: `/brand/manage/query`,
        method: "POST",
        body: brandManageQueryReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 品牌相关
     * @name ManageQueryDetail
     * @summary 后台管理-查询品牌明细
     * @request GET:/brand/manage/queryDetail
     */
    manageQueryDetail: (
      query: {
        /**
         * brandId
         * @format int64
         */
        brandId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBrandManageDetailRespDTO, any>({
        path: `/brand/manage/queryDetail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 品牌相关
     * @name ManageQueryShop
     * @summary 后台管理-查询品牌关联的店铺
     * @request POST:/brand/manage/queryShop
     */
    manageQueryShop: (brandOperationReqDTO: BrandOperationReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListBrandShopRespDTO, any>({
        path: `/brand/manage/queryShop`,
        method: "POST",
        body: brandOperationReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 品牌相关
     * @name ManageRelease
     * @summary 后台管理-品牌发布
     * @request POST:/brand/manage/release
     */
    manageRelease: (brandOperationReqDTO: BrandOperationReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/brand/manage/release`,
        method: "POST",
        body: brandOperationReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 品牌相关
     * @name QueryBrandItem
     * @summary 品牌项查询(全部)
     * @request GET:/brand/queryBrandItem
     */
    queryBrandItem: (params: RequestParams = {}) =>
      this.request<BizResponseListBrandItemDTO, any>({
        path: `/brand/queryBrandItem`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 品牌相关
     * @name QueryBrandItemPage
     * @summary 品牌项查询
     * @request GET:/brand/queryBrandItem/page
     */
    queryBrandItemPage: (
      query: {
        /**
         * pageNum
         * @format int32
         */
        pageNum: number;
        /**
         * pageSize
         * @format int32
         */
        pageSize: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageBrandItemDTO, any>({
        path: `/brand/queryBrandItem/page`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 品牌搜索相关
     * @name SearchBanner
     * @summary 客户端-品牌轮播图
     * @request GET:/brand/search/banner
     */
    searchBanner: (params: RequestParams = {}) =>
      this.request<BizResponseListBrandBannnerQueryRespDTO, any>({
        path: `/brand/search/banner`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 品牌搜索相关
     * @name SearchDetail
     * @summary 客户端-品牌集单个详情
     * @request GET:/brand/search/detail
     */
    searchDetail: (
      query: {
        /**
         * brandId
         * @format int64
         */
        brandId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBrandSetInfoRespDTO, any>({
        path: `/brand/search/detail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 品牌搜索相关
     * @name SearchHistory
     * @summary 客户端-品牌搜索历史
     * @request GET:/brand/search/history
     */
    searchHistory: (params: RequestParams = {}) =>
      this.request<BizResponseListString, any>({
        path: `/brand/search/history`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 品牌搜索相关
     * @name SearchQueryBrandSet
     * @summary 客户端-查询品牌集
     * @request POST:/brand/search/queryBrandSet
     */
    searchQueryBrandSet: (brandSetQueryReqDTO: BrandSetQueryReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageBrandSetInfoRespDTO, any>({
        path: `/brand/search/queryBrandSet`,
        method: "POST",
        body: brandSetQueryReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 品牌搜索相关
     * @name SearchSearchBrandSet
     * @summary 客户端-搜索品牌集(搜索框)
     * @request POST:/brand/search/searchBrandSet
     */
    searchSearchBrandSet: (reqDTO: BrandSetSearchReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageBrandSetInfoRespDTO, any>({
        path: `/brand/search/searchBrandSet`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 品牌风格相关
     * @name StyleAdd
     * @summary 品牌风格新增
     * @request POST:/brand/style/add
     */
    styleAdd: (reqDTO: BrandStyleReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/brand/style/add`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 品牌风格相关
     * @name StyleDelete
     * @summary 品牌风格删除
     * @request GET:/brand/style/delete
     */
    styleDelete: (
      query: {
        /**
         * id
         * @format int64
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/brand/style/delete`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 品牌风格相关
     * @name StyleEdit
     * @summary 品牌风格编辑
     * @request POST:/brand/style/edit
     */
    styleEdit: (reqDTO: BrandStyleReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/brand/style/edit`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 品牌风格相关
     * @name StyleQueryAll
     * @summary 品牌风格查询
     * @request GET:/brand/style/query/all
     */
    styleQueryAll: (params: RequestParams = {}) =>
      this.request<BizResponseListBrandStyleRespDTO, any>({
        path: `/brand/style/query/all`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 品牌风格相关
     * @name StyleQueryPage
     * @summary 品牌风格查询
     * @request GET:/brand/style/query/page
     */
    styleQueryPage: (
      query: {
        /**
         * pageNum
         * @format int32
         */
        pageNum: number;
        /**
         * pageSize
         * @format int32
         */
        pageSize: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageBrandStyleRespDTO, any>({
        path: `/brand/style/query/page`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  category = {
    /**
     * No description
     *
     * @tags 策略配置
     * @name ConfigProductAdd
     * @summary 商品策略添加
     * @request POST:/category/config/product/add
     */
    configProductAdd: (addVO: StrategyConfigProductAddVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/category/config/product/add`,
        method: "POST",
        body: addVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 策略配置
     * @name ConfigProductEnableStatusUpdate
     * @summary 商品策略启用状态更新
     * @request POST:/category/config/product/enable/status/update
     */
    configProductEnableStatusUpdate: (vo: StrategyConfigProductEnableStatusVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/category/config/product/enable/status/update`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 策略配置
     * @name ConfigProductGlobalUpdate
     * @summary 商品策略全局状态更新
     * @request POST:/category/config/product/global/update
     */
    configProductGlobalUpdate: (vo: StrategyConfigProductGlobalStatusVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/category/config/product/global/update`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 策略配置
     * @name ConfigProductImportFromUrl
     * @summary 商品策略-商品批量导入
     * @request POST:/category/config/product/import/from/url
     */
    configProductImportFromUrl: (importVoList: StrategyConfigProductUrlImportVo[], params: RequestParams = {}) =>
      this.request<BizResponseListStrategyConfigProductUrlResultVo, any>({
        path: `/category/config/product/import/from/url`,
        method: "POST",
        body: importVoList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 策略配置
     * @name ConfigProductItem
     * @summary 商品策略详情
     * @request GET:/category/config/product/item/{strategyConfigProductId}
     */
    configProductItem: (strategyConfigProductId: number, params: RequestParams = {}) =>
      this.request<BizResponseStrategyConfigProductItemVO, any>({
        path: `/category/config/product/item/${strategyConfigProductId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 策略配置
     * @name ConfigProductQuery
     * @summary 商品策略查询
     * @request GET:/category/config/product/query
     */
    configProductQuery: (
      query?: {
        /** 删除标志 */
        deleteFlag?: boolean;
        /** 启用状态；1：启用；0：不启用 */
        enableStatus?: boolean;
        /** true：失效；false：投放中 */
        invalid?: boolean;
        /** 创建人id */
        manageUserId?: string;
        /** 创建时间降序 */
        orderByCreateTimeDesc?: boolean;
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        /** 是否用户全局；1：全局，0：不全局 */
        productGlobal?: boolean;
        /** @format int32 */
        startIndex?: number;
        /** 站点code */
        stationCode?: string;
        /**
         * 主键
         * @format int64
         */
        strategyConfigProductId?: number;
        /** 策略名称 */
        strategyName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseIPageStrategyConfigProductVO, any>({
        path: `/category/config/product/query`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 策略配置
     * @name ConfigShopAdd
     * @summary 店铺策略添加
     * @request POST:/category/config/shop/add
     */
    configShopAdd: (addVO: StrategyConfigShopAddVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/category/config/shop/add`,
        method: "POST",
        body: addVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 策略配置
     * @name ConfigShopEnableStatusUpdate
     * @summary 店铺策略启用状态更新
     * @request POST:/category/config/shop/enable/status/update
     */
    configShopEnableStatusUpdate: (vo: StrategyConfigShopEnableStatusVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/category/config/shop/enable/status/update`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 策略配置
     * @name ConfigShopGlobalUpdate
     * @summary 商品策略全局状态更新
     * @request POST:/category/config/shop/global/update
     */
    configShopGlobalUpdate: (vo: StrategyConfigShopGlobalStatusVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/category/config/shop/global/update`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 策略配置
     * @name ConfigShopImportFromUrl
     * @summary 店铺策略-店铺批量导入
     * @request POST:/category/config/shop/import/from/url
     */
    configShopImportFromUrl: (importVoList: StrategyConfigShopUrlImportVo[], params: RequestParams = {}) =>
      this.request<BizResponseListStrategyConfigShopUrlResultVo, any>({
        path: `/category/config/shop/import/from/url`,
        method: "POST",
        body: importVoList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 策略配置
     * @name ConfigShopItem
     * @summary 店铺策略详情
     * @request GET:/category/config/shop/item/{strategyConfigShopId}
     */
    configShopItem: (strategyConfigShopId: number, params: RequestParams = {}) =>
      this.request<BizResponseStrategyConfigShopItemVO, any>({
        path: `/category/config/shop/item/${strategyConfigShopId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 策略配置
     * @name ConfigShopQuery
     * @summary 店铺策略查询
     * @request GET:/category/config/shop/query
     */
    configShopQuery: (
      query?: {
        /** 删除标志 */
        deleteFlag?: boolean;
        /** 启用状态；1：启用；0：不启用 */
        enableStatus?: boolean;
        /** true：失效；false：投放中 */
        invalid?: boolean;
        /** 创建人id */
        manageUserId?: string;
        /** 创建时间降序 */
        orderByCreateTimeDesc?: boolean;
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        /** 是否用户全局；1：全局，0：不全局 */
        shopGlobal?: boolean;
        /** @format int32 */
        startIndex?: number;
        /** 站点code */
        stationCode?: string;
        /**
         * 主键
         * @format int64
         */
        strategyConfigShopId?: number;
        /** 策略名称 */
        strategyName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseIPageStrategyConfigShopVo, any>({
        path: `/category/config/shop/query`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  directStore = {
    /**
     * No description
     *
     * @tags direct-store-goods-feign-impl
     * @name CheckNewGoods
     * @summary checkNewGoods
     * @request GET:/directStore/checkNewGoods
     */
    checkNewGoods: (
      query: {
        /** productCode */
        productCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/directStore/checkNewGoods`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags direct-store-goods-feign-impl
     * @name ImageSearch
     * @summary imageSearch
     * @request POST:/directStore/imageSearch
     */
    imageSearch: (reqDTO: DirectImageSearchReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageSearchProductRespDTO, any>({
        path: `/directStore/imageSearch`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags direct-store-goods-feign-impl
     * @name ImageUpload
     * @summary imageUpload
     * @request POST:/directStore/imageUpload
     */
    imageUpload: (reqDTO: ImageUploadReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/directStore/imageUpload`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  engineClient = {
    /**
     * No description
     *
     * @tags engine-task-controller
     * @name GetRegisterServices
     * @summary getRegisterServices
     * @request GET:/engine-client/getRegisterServices
     */
    getRegisterServices: (params: RequestParams = {}) =>
      this.request<EngineResultListHandlerServiceMeta, any>({
        path: `/engine-client/getRegisterServices`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags engine-task-controller
     * @name HeadEngineClient
     * @summary getRegisterServices
     * @request HEAD:/engine-client/getRegisterServices
     */
    headEngineClient: (params: RequestParams = {}) =>
      this.request<EngineResultListHandlerServiceMeta, any>({
        path: `/engine-client/getRegisterServices`,
        method: "HEAD",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags engine-task-controller
     * @name GetRegisterServices2
     * @summary getRegisterServices
     * @request POST:/engine-client/getRegisterServices
     * @originalName getRegisterServices
     * @duplicate
     */
    getRegisterServices2: (params: RequestParams = {}) =>
      this.request<EngineResultListHandlerServiceMeta, any>({
        path: `/engine-client/getRegisterServices`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags engine-task-controller
     * @name GetRegisterServices3
     * @summary getRegisterServices
     * @request PUT:/engine-client/getRegisterServices
     * @originalName getRegisterServices
     * @duplicate
     */
    getRegisterServices3: (params: RequestParams = {}) =>
      this.request<EngineResultListHandlerServiceMeta, any>({
        path: `/engine-client/getRegisterServices`,
        method: "PUT",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags engine-task-controller
     * @name GetRegisterServices4
     * @summary getRegisterServices
     * @request DELETE:/engine-client/getRegisterServices
     * @originalName getRegisterServices
     * @duplicate
     */
    getRegisterServices4: (params: RequestParams = {}) =>
      this.request<EngineResultListHandlerServiceMeta, any>({
        path: `/engine-client/getRegisterServices`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags engine-task-controller
     * @name OptionsEngineClient
     * @summary getRegisterServices
     * @request OPTIONS:/engine-client/getRegisterServices
     */
    optionsEngineClient: (params: RequestParams = {}) =>
      this.request<EngineResultListHandlerServiceMeta, any>({
        path: `/engine-client/getRegisterServices`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags engine-task-controller
     * @name GetRegisterServices5
     * @summary getRegisterServices
     * @request PATCH:/engine-client/getRegisterServices
     * @originalName getRegisterServices
     * @duplicate
     */
    getRegisterServices5: (params: RequestParams = {}) =>
      this.request<EngineResultListHandlerServiceMeta, any>({
        path: `/engine-client/getRegisterServices`,
        method: "PATCH",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags engine-task-controller
     * @name GetThreadPoolInfo
     * @summary getThreadPoolInfo
     * @request GET:/engine-client/getThreadPoolInfo
     */
    getThreadPoolInfo: (
      query: {
        /**
         * threadId
         * @format int64
         */
        threadId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<EngineResultString, any>({
        path: `/engine-client/getThreadPoolInfo`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags engine-task-controller
     * @name HeadEngineClient2
     * @summary getThreadPoolInfo
     * @request HEAD:/engine-client/getThreadPoolInfo
     * @originalName headEngineClient
     * @duplicate
     */
    headEngineClient2: (
      query: {
        /**
         * threadId
         * @format int64
         */
        threadId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<EngineResultString, any>({
        path: `/engine-client/getThreadPoolInfo`,
        method: "HEAD",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags engine-task-controller
     * @name GetThreadPoolInfo2
     * @summary getThreadPoolInfo
     * @request POST:/engine-client/getThreadPoolInfo
     * @originalName getThreadPoolInfo
     * @duplicate
     */
    getThreadPoolInfo2: (
      query: {
        /**
         * threadId
         * @format int64
         */
        threadId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<EngineResultString, any>({
        path: `/engine-client/getThreadPoolInfo`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags engine-task-controller
     * @name GetThreadPoolInfo3
     * @summary getThreadPoolInfo
     * @request PUT:/engine-client/getThreadPoolInfo
     * @originalName getThreadPoolInfo
     * @duplicate
     */
    getThreadPoolInfo3: (
      query: {
        /**
         * threadId
         * @format int64
         */
        threadId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<EngineResultString, any>({
        path: `/engine-client/getThreadPoolInfo`,
        method: "PUT",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags engine-task-controller
     * @name GetThreadPoolInfo4
     * @summary getThreadPoolInfo
     * @request DELETE:/engine-client/getThreadPoolInfo
     * @originalName getThreadPoolInfo
     * @duplicate
     */
    getThreadPoolInfo4: (
      query: {
        /**
         * threadId
         * @format int64
         */
        threadId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<EngineResultString, any>({
        path: `/engine-client/getThreadPoolInfo`,
        method: "DELETE",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags engine-task-controller
     * @name OptionsEngineClient2
     * @summary getThreadPoolInfo
     * @request OPTIONS:/engine-client/getThreadPoolInfo
     * @originalName optionsEngineClient
     * @duplicate
     */
    optionsEngineClient2: (
      query: {
        /**
         * threadId
         * @format int64
         */
        threadId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<EngineResultString, any>({
        path: `/engine-client/getThreadPoolInfo`,
        method: "OPTIONS",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags engine-task-controller
     * @name GetThreadPoolInfo5
     * @summary getThreadPoolInfo
     * @request PATCH:/engine-client/getThreadPoolInfo
     * @originalName getThreadPoolInfo
     * @duplicate
     */
    getThreadPoolInfo5: (
      query: {
        /**
         * threadId
         * @format int64
         */
        threadId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<EngineResultString, any>({
        path: `/engine-client/getThreadPoolInfo`,
        method: "PATCH",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags engine-task-controller
     * @name ReceiveTask
     * @summary receiveTask
     * @request POST:/engine-client/receiveTask
     */
    receiveTask: (taskParam: ReceiveTaskParam, params: RequestParams = {}) =>
      this.request<EngineResult, any>({
        path: `/engine-client/receiveTask`,
        method: "POST",
        body: taskParam,
        type: ContentType.Json,
        ...params,
      }),
  };
  fastCategory = {
    /**
     * No description
     *
     * @tags 前台类目快捷方式
     * @name FastCategory
     * @summary getFastCategories
     * @request GET:/fastCategory
     */
    fastCategory: (
      query: {
        /**
         * channel
         * @format int32
         */
        channel: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCustomerHomeFastCategoryRespDTO, any>({
        path: `/fastCategory`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 前台类目快捷方式
     * @name FastCategory2
     * @summary saveFastCategories
     * @request POST:/fastCategory
     * @originalName fastCategory
     * @duplicate
     */
    fastCategory2: (
      query?: {
        /** @format int32 */
        channel?: number;
        /** @format int64 */
        fixedCategoryId?: number;
        /** @format int64 */
        moveCategoryId?: number;
        /** @format int32 */
        offset?: number;
        /** @format int64 */
        productCategoryFrontendId?: number;
        /** @format int32 */
        switchFlag?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/fastCategory`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 前台类目快捷方式
     * @name Sort
     * @summary sortFastCategory
     * @request POST:/fastCategory/sort
     */
    sort: (
      query?: {
        /** @format int32 */
        channel?: number;
        /** @format int64 */
        fixedCategoryId?: number;
        /** @format int64 */
        moveCategoryId?: number;
        /** @format int32 */
        offset?: number;
        /** @format int64 */
        productCategoryFrontendId?: number;
        /** @format int32 */
        switchFlag?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/fastCategory/sort`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),
  };
  favorite = {
    /**
     * No description
     *
     * @tags 收藏品牌
     * @name BrandAdd
     * @summary 品牌添加收藏
     * @request POST:/favorite/brand/add
     */
    brandAdd: (
      query: {
        /**
         * brandId
         * @format int64
         */
        brandId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseString, any>({
        path: `/favorite/brand/add`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收藏品牌
     * @name BrandCancel
     * @summary 品牌取消收藏
     * @request POST:/favorite/brand/cancel
     */
    brandCancel: (
      query: {
        /**
         * brandId
         * @format int64
         */
        brandId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseString, any>({
        path: `/favorite/brand/cancel`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收藏品牌
     * @name BrandIsFavorite
     * @summary 是否收藏
     * @request POST:/favorite/brand/isFavorite
     */
    brandIsFavorite: (
      query: {
        /**
         * brandId
         * @format int64
         */
        brandId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/favorite/brand/isFavorite`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收藏品牌
     * @name BrandList
     * @summary 品牌收藏列表
     * @request POST:/favorite/brand/list
     */
    brandList: (reqDTO: CustomerFavoriteBrandReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerFavoriteBrandRespDTO, any>({
        path: `/favorite/brand/list`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收藏商品
     * @name ProductAdd
     * @summary saveFavorite
     * @request GET:/favorite/product/add
     */
    productAdd: (
      query: {
        /** productCode */
        productCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/favorite/product/add`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收藏商品
     * @name ProductCancel
     * @summary cancelFavorite
     * @request GET:/favorite/product/cancel
     */
    productCancel: (
      query: {
        /** productCode */
        productCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/favorite/product/cancel`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收藏商品
     * @name ProductIsFavorite
     * @summary isFavorite
     * @request GET:/favorite/product/isFavorite
     */
    productIsFavorite: (
      query?: {
        /** productCode */
        productCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/favorite/product/isFavorite`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收藏商品
     * @name ProductIsFavorites
     * @summary isFavorites
     * @request GET:/favorite/product/isFavorites
     */
    productIsFavorites: (
      query?: {
        /** productCodeList */
        productCodeList?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseMapStringBoolean, any>({
        path: `/favorite/product/isFavorites`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收藏商品
     * @name ProductList
     * @summary getPageList
     * @request POST:/favorite/product/list
     */
    productList: (reqDTO: CustomerFavoriteProductReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerFavoriteProductRespDTO, any>({
        path: `/favorite/product/list`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收藏商品
     * @name ProductNotShow
     * @summary doNotShow
     * @request GET:/favorite/product/notShow
     */
    productNotShow: (
      query: {
        /**
         * id
         * @format int64
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/favorite/product/notShow`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收藏店铺
     * @name ShopAdd
     * @summary saveFavorite
     * @request GET:/favorite/shop/add
     */
    shopAdd: (
      query: {
        /** shopCode */
        shopCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/favorite/shop/add`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收藏店铺
     * @name ShopCancel
     * @summary cancelFavorite
     * @request GET:/favorite/shop/cancel
     */
    shopCancel: (
      query: {
        /** shopCode */
        shopCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/favorite/shop/cancel`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收藏店铺
     * @name ShopIsFavorite
     * @summary isFavorite
     * @request GET:/favorite/shop/isFavorite
     */
    shopIsFavorite: (
      query?: {
        /** shopCode */
        shopCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/favorite/shop/isFavorite`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收藏店铺
     * @name ShopList
     * @summary getPageList
     * @request POST:/favorite/shop/list
     */
    shopList: (reqDTO: CustomerFavoriteShopReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerFavoriteShopRespDTO, any>({
        path: `/favorite/shop/list`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  footprint = {
    /**
     * No description
     *
     * @tags 我的足迹
     * @name BoughtProduct
     * @summary boughtProductPage
     * @request POST:/footprint/bought/product
     */
    boughtProduct: (reqDTO: CustomerBoughtProductReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerBoughtProductRespDTO, any>({
        path: `/footprint/bought/product`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 我的足迹
     * @name BoughtShop
     * @summary boughtShopPage
     * @request POST:/footprint/bought/shop
     */
    boughtShop: (reqDTO: CustomerBoughtShopReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerBoughtShopRespDTO, any>({
        path: `/footprint/bought/shop`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 我的足迹
     * @name FootprintProduct
     * @summary footprintProduct
     * @request POST:/footprint/footprint/product
     */
    footprintProduct: (reqDTO: CustomerFootprintProductReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerFootprintProductRespDTO, any>({
        path: `/footprint/footprint/product`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 我的足迹
     * @name FootprintRecordPluginProduct
     * @summary recordPluginProduct
     * @request POST:/footprint/footprint/recordPluginProduct
     */
    footprintRecordPluginProduct: (reqDTO: CustomerFootprintProductPluginSaveReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/footprint/footprint/recordPluginProduct`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 我的足迹
     * @name FootprintShop
     * @summary footprintShop
     * @request POST:/footprint/footprint/shop
     */
    footprintShop: (reqDTO: CustomerFootprintShopReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerFootprintShopRespDTO, any>({
        path: `/footprint/footprint/shop`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 我的足迹
     * @name StrategyProduct
     * @summary strategyProductPage
     * @request POST:/footprint/strategy/product
     */
    strategyProduct: (reqDTO: CustomerStrategyProductReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerStrategyProductRespDTO, any>({
        path: `/footprint/strategy/product`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 我的足迹
     * @name StrategyShop
     * @summary strategyShopList
     * @request POST:/footprint/strategy/shop
     */
    strategyShop: (reqDTO: CustomerStrategyProductReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListCustomerStrategyShopRespDTO, any>({
        path: `/footprint/strategy/shop`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  hscode = {
    /**
     * No description
     *
     * @tags 平台报文HsCode映射
     * @name Crawl
     * @summary 爬虫Hs Code入库
     * @request POST:/hscode/crawl
     */
    crawl: (productCustomsHsCodeCrawlReqDTO: ProductCustomsHsCodeCrawlReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/hscode/crawl`,
        method: "POST",
        body: productCustomsHsCodeCrawlReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台报文HsCode映射
     * @name Delete
     * @summary 删除
     * @request POST:/hscode/delete
     */
    delete: (productHsCodeKeywordDeleteReqDTO: ProductHsCodeKeywordDeleteReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/hscode/delete`,
        method: "POST",
        body: productHsCodeKeywordDeleteReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台报文HsCode映射
     * @name Detail
     * @summary 详情
     * @request GET:/hscode/detail
     */
    detail: (
      query: {
        /**
         * id
         * @format int64
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseProductHsCodeKeywordMappingRespDTO, any>({
        path: `/hscode/detail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台报文HsCode映射
     * @name Edit
     * @summary 编辑
     * @request POST:/hscode/edit
     */
    edit: (productHsCodeKeyReqDTO: ProductHsCodeKeywordReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/hscode/edit`,
        method: "POST",
        body: productHsCodeKeyReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台报文HsCode映射
     * @name KeywordPage
     * @summary HsCode关键字列表
     * @request POST:/hscode/keyword/page
     */
    keywordPage: (productHsCodeKeywordPageReqDTO: ProductHsCodeKeywordPageReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageResultProductHsCodeKeywordRespDTO, any>({
        path: `/hscode/keyword/page`,
        method: "POST",
        body: productHsCodeKeywordPageReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台报文HsCode映射
     * @name Page
     * @summary 分页查询
     * @request POST:/hscode/page
     */
    page: (hsCodePageReqDTO: ProductHsCodeKeywordMappingPageReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageProductHsCodeKeywordMappingRespDTO, any>({
        path: `/hscode/page`,
        method: "POST",
        body: hsCodePageReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台报文HsCode映射
     * @name Save
     * @summary 新增
     * @request POST:/hscode/save
     */
    save: (hsCodeSaveReqDTO: ProductHsCodeKeywordReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/hscode/save`,
        method: "POST",
        body: hsCodeSaveReqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  image = {
    /**
     * No description
     *
     * @tags 图搜
     * @name SearchAddNum
     * @summary 使用精选货源无水印图片
     * @request POST:/image/search/addNum
     */
    searchAddNum: (reqDTO: ImageAddNumReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/image/search/addNum`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags image-search-feign-impl
     * @name SearchAddUseNum
     * @summary addUseNum
     * @request POST:/image/search/addUseNum
     */
    searchAddUseNum: (reqDTO: UserImageUsageAddReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/image/search/addUseNum`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 图搜
     * @name SearchList
     * @summary 图搜
     * @request POST:/image/search/list
     */
    searchList: (dto: ImageSearchReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageSearchProductRespDTO, any>({
        path: `/image/search/list`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 图搜
     * @name SearchListImageConfig
     * @summary listImageConfig
     * @request GET:/image/search/listImageConfig
     */
    searchListImageConfig: (params: RequestParams = {}) =>
      this.request<BizResponseListProductImageConfigRespDTO, any>({
        path: `/image/search/listImageConfig`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags image-search-feign-impl
     * @name SearchResetUseNum
     * @summary resetUseNum
     * @request POST:/image/search/resetUseNum
     */
    searchResetUseNum: (reqDTO: UserImageUsageAddReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/image/search/resetUseNum`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 图搜
     * @name SearchUpload
     * @summary 图搜-图片上传
     * @request POST:/image/search/upload
     */
    searchUpload: (reqDTO: ImageUploadReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/image/search/upload`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags image-search-feign-impl
     * @name SearchUserImageInfo
     * @summary userImageInfo
     * @request GET:/image/search/userImageInfo
     */
    searchUserImageInfo: (
      query: {
        /**
         * membershipTemplateId
         * @format int64
         */
        membershipTemplateId: number;
        /**
         * superCustomerId
         * @format int64
         */
        superCustomerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseUserImageUsageRespDTO, any>({
        path: `/image/search/userImageInfo`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 图搜
     * @name SearchUserUsageInfo
     * @summary userUsageInfo
     * @request GET:/image/search/userUsageInfo
     */
    searchUserUsageInfo: (params: RequestParams = {}) =>
      this.request<BizResponseUserImageUsageRespDTO, any>({
        path: `/image/search/userUsageInfo`,
        method: "GET",
        ...params,
      }),
  };
  mall = {
    /**
     * No description
     *
     * @tags 市场购管理
     * @name CategoryList
     * @summary selectList
     * @request POST:/mall/category/list
     */
    categoryList: (reqDTO: MallCategoryReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListMallCategoryRespDTO, any>({
        path: `/mall/category/list`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 市场购管理
     * @name CategoryListFrontend
     * @summary 市场购管理-前台列表
     * @request GET:/mall/category/list/frontend
     */
    categoryListFrontend: (
      query?: {
        /** @format int32 */
        deleteFlag?: number;
        stationCode?: string;
        /** @format int32 */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListMallCategoryRespDTO, any>({
        path: `/mall/category/list/frontend`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 市场购管理
     * @name CategoryPageList
     * @summary pageList
     * @request POST:/mall/category/pageList
     */
    categoryPageList: (pageReqDTO: MallCategoryPageReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageMallCategoryRespDTO, any>({
        path: `/mall/category/pageList`,
        method: "POST",
        body: pageReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 市场购管理
     * @name CategoryStatusClose
     * @summary closeStatus
     * @request GET:/mall/category/status/close
     */
    categoryStatusClose: (
      query: {
        /**
         * id
         * @format int64
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/mall/category/status/close`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 市场购管理
     * @name CategoryStatusOpen
     * @summary openStatus
     * @request GET:/mall/category/status/open
     */
    categoryStatusOpen: (
      query: {
        /**
         * id
         * @format int64
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/mall/category/status/open`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 市场购管理
     * @name CategoryUpdate
     * @summary update
     * @request POST:/mall/category/update
     */
    categoryUpdate: (formReqDTO: MallCategoryFormReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/mall/category/update`,
        method: "POST",
        body: formReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 爆款推荐
     * @name PopularProductList
     * @summary 爆款推荐商品分页列表
     * @request POST:/mall/popular/product/list
     */
    popularProductList: (reqDTO: ProductPopularMallReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageProductPopularMallRespDTO, any>({
        path: `/mall/popular/product/list`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  online = {
    /**
     * No description
     *
     * @tags 透明购平台管理
     * @name ManageAddOnline
     * @summary 新增透明购
     * @request POST:/online/manage/add/online
     */
    manageAddOnline: (addVO: OnlineManageAddVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/online/manage/add/online`,
        method: "POST",
        body: addVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 透明购平台管理
     * @name ManageDeleteOnline
     * @summary 删除平台
     * @request POST:/online/manage/delete/online/{onlineManageId}
     */
    manageDeleteOnline: (onlineManageId: number, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/online/manage/delete/online/${onlineManageId}`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 透明购平台管理
     * @name ManageDetail
     * @summary 透明购平台详情
     * @request GET:/online/manage/detail
     */
    manageDetail: (
      query: {
        /**
         * onlineManageId
         * @format int64
         */
        onlineManageId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseOnlineManageDetailVO, any>({
        path: `/online/manage/detail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 透明购平台管理
     * @name ManageDetailType
     * @summary 透明购平台类型详情
     * @request GET:/online/manage/detail/type
     */
    manageDetailType: (
      query?: {
        /** stationCode */
        stationCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListOnlineManageTypeVO, any>({
        path: `/online/manage/detail/type`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 透明购平台管理
     * @name ManageOnlineType
     * @summary 平台类型
     * @request GET:/online/manage/online/type
     */
    manageOnlineType: (params: RequestParams = {}) =>
      this.request<BizResponseListMapStringObject, any>({
        path: `/online/manage/online/type`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 透明购平台管理
     * @name ManageQuery
     * @summary 分页列表
     * @request GET:/online/manage/query
     */
    manageQuery: (
      query?: {
        /** 透明购类型 */
        onlineType?: string;
        /** 创建时间降序 */
        orderByCreateTimeAsc?: boolean;
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        /** 平台名称 */
        platformName?: string;
        /** 平台状态；0：下架；1：上架 */
        platformStatus?: boolean;
        /** @format int32 */
        startIndex?: number;
        /** 站点code */
        stationCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseIPageOnlineManageVO, any>({
        path: `/online/manage/query`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 透明购平台管理
     * @name ManageUpdateOnline
     * @summary 更新透明购
     * @request POST:/online/manage/update/online
     */
    manageUpdateOnline: (updateVO: OnlineManageUpdateVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/online/manage/update/online`,
        method: "POST",
        body: updateVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 透明购平台管理
     * @name ManageUpdateOnlineStatus
     * @summary 更新透明购状态
     * @request POST:/online/manage/update/online/status
     */
    manageUpdateOnlineStatus: (updateVO: OnlineManageStatusUpdateVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/online/manage/update/online/status`,
        method: "POST",
        body: updateVO,
        type: ContentType.Json,
        ...params,
      }),
  };
  product = {
    /**
     * No description
     *
     * @tags 商品
     * @name CheckAgree
     * @summary 用户满意度调研
     * @request POST:/product/checkAgree
     */
    checkAgree: (checkSearchAgreeVO: CheckSearchAgreeVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/product/checkAgree`,
        method: "POST",
        body: checkSearchAgreeVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name CheckJxhy
     * @summary 检测是否是精选货源
     * @request GET:/product/checkJxhy
     */
    checkJxhy: (
      query?: {
        /** 商品编码 */
        productCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/product/checkJxhy`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name CodeListBySkus
     * @summary productCodeListBySkus
     * @request POST:/product/codeListBySkus
     */
    codeListBySkus: (productSkuList: string[], params: RequestParams = {}) =>
      this.request<BizResponseListProductCodeSkuMapRespDTO, any>({
        path: `/product/codeListBySkus`,
        method: "POST",
        body: productSkuList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name CustomerSubscriptionGoodsPriceHistory
     * @summary 新插件用户订阅商品价格历史
     * @request POST:/product/customerSubscriptionGoodsPriceHistory
     */
    customerSubscriptionGoodsPriceHistory: (vo: ProductPriceRequVO, params: RequestParams = {}) =>
      this.request<BizResponseListCustomerFocusProductPrice, any>({
        path: `/product/customerSubscriptionGoodsPriceHistory`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name CustomerSubscriptionGoodsPriceRemind
     * @summary 新插件用户订阅商品价格下降提醒
     * @request POST:/product/customerSubscriptionGoodsPriceRemind
     */
    customerSubscriptionGoodsPriceRemind: (params: RequestParams = {}) =>
      this.request<BizResponseListCustomerFocusProductRespDTO, any>({
        path: `/product/customerSubscriptionGoodsPriceRemind`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品报关
     * @name CustomsExport
     * @summary 导出报关信息
     * @request POST:/product/customs/export
     */
    customsExport: (
      query?: {
        productCustomsIdList?: number[];
        productItemCategoryZh?: string;
        stationCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/product/customs/export`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品报关
     * @name CustomsImport
     * @summary 导入报关信息
     * @request POST:/product/customs/import
     */
    customsImport: (
      data: {
        /**
         * file
         * @format binary
         */
        file: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/product/customs/import`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品报关
     * @name CustomsInsert
     * @summary insertCustoms
     * @request POST:/product/customs/insert
     */
    customsInsert: (reqDTO: ProductCustomsFormReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/product/customs/insert`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品报关
     * @name CustomsList
     * @summary customsList
     * @request POST:/product/customs/list
     */
    customsList: (reqDTO: ProductCustomsReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListProductCustomsRespDTO, any>({
        path: `/product/customs/list`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品报关
     * @name CustomsPageList
     * @summary customsPageList
     * @request POST:/product/customs/pageList
     */
    customsPageList: (pageReqDTO: ProductCustomsPageReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageProductCustomsRespDTO, any>({
        path: `/product/customs/pageList`,
        method: "POST",
        body: pageReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品报关
     * @name CustomsUpdate
     * @summary updateCustoms
     * @request POST:/product/customs/update
     */
    customsUpdate: (reqDTO: ProductCustomsFormReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/product/customs/update`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name DeleteCustomerSubscriptionGoods
     * @summary 新插件用户取消订阅商品
     * @request POST:/product/deleteCustomerSubscriptionGoods
     */
    deleteCustomerSubscriptionGoods: (customerFocusProduct: CustomerFocusProduct, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/product/deleteCustomerSubscriptionGoods`,
        method: "POST",
        body: customerFocusProduct,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name Detail
     * @summary 商品详情
     * @request POST:/product/detail
     */
    detail: (vo: ProductDetailRequVO, params: RequestParams = {}) =>
      this.request<BizResponseProductRespDTO, any>({
        path: `/product/detail`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name DetailBackend
     * @summary 后台：根据商品编码获取商品详情; 没有任何限制
     * @request GET:/product/detail/backend
     */
    detailBackend: (
      query: {
        /** productCode */
        productCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/product/detail/backend`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name DetailBackendByProductSku
     * @summary 后台: 根据单个sku获取商品详情; 没有任何限制
     * @request GET:/product/detail/backend/byProductSku
     */
    detailBackendByProductSku: (
      query: {
        /** productSku */
        productSku: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/product/detail/backend/byProductSku`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name DetailBackendSpu
     * @summary 后台：根据商品编码获取spu详情;
     * @request GET:/product/detail/backend/spu
     */
    detailBackendSpu: (
      query: {
        /** productCode */
        productCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseProductSimpleRespDTO, any>({
        path: `/product/detail/backend/spu`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name DetailFeign
     * @summary productDetail
     * @request POST:/product/detail/feign
     */
    detailFeign: (dto: ProductDetailReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseProductDetailRespDTO, any>({
        path: `/product/detail/feign`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name DetailIgnoreBlack
     * @summary 商品详情忽略黑名单
     * @request POST:/product/detail/ignoreBlack
     */
    detailIgnoreBlack: (vo: ProductDetailRequVO, params: RequestParams = {}) =>
      this.request<BizResponseProductRespDTO, any>({
        path: `/product/detail/ignoreBlack`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name DetailListFeign
     * @summary productDetailList
     * @request POST:/product/detail/list/feign
     */
    detailListFeign: (dto: ProductDetailListReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListProductDetailRespDTO, any>({
        path: `/product/detail/list/feign`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name DetailAndSaveByUrl
     * @summary getDetailAndSaveParseUrl
     * @request POST:/product/detailAndSaveByUrl
     */
    detailAndSaveByUrl: (reqDTO: ProductDetailUrlReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseProductDetailRespDTO, any>({
        path: `/product/detailAndSaveByUrl`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name DetailBySkuFeign
     * @summary productDetailBySku
     * @request GET:/product/detailBySku/feign
     */
    detailBySkuFeign: (
      query: {
        /** productSku */
        productSku: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseProductDetailRespDTO, any>({
        path: `/product/detailBySku/feign`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name DetailByUrl
     * @summary productDetailByUrl
     * @request POST:/product/detailByUrl
     */
    detailByUrl: (reqDTO: ProductDetailUrlReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseProductDetailRespDTO, any>({
        path: `/product/detailByUrl`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name DetailSpiderByUrl
     * @summary detailSpiderByUrl
     * @request POST:/product/detailSpiderByUrl
     */
    detailSpiderByUrl: (reqDTO: ProductDetailUrlReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseProductDetailRespDTO, any>({
        path: `/product/detailSpiderByUrl`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name DetailSpiderByUrlWithoutToken
     * @summary 商品详情-url--包含爬虫--不需要token
     * @request POST:/product/detailSpiderByUrlWithoutToken
     */
    detailSpiderByUrlWithoutToken: (reqDTO: ProductDetailUrlReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseProductDetailRespDTO, any>({
        path: `/product/detailSpiderByUrlWithoutToken`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name EditShippingAndVolumeWeight
     * @summary 编辑商品运输体积重量
     * @request POST:/product/editShippingAndVolumeWeight
     */
    editShippingAndVolumeWeight: (
      productTransAndStoragePropertyDTO: ProductTransAndStoragePropertyDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/product/editShippingAndVolumeWeight`,
        method: "POST",
        body: productTransAndStoragePropertyDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name ExcelExport
     * @summary 商品spu导出
     * @request POST:/product/excel/export
     */
    excelExport: (dto: ProductQueryDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/product/excel/export`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name ExcelExportBlack
     * @summary 黑名单商品spu导出
     * @request POST:/product/excel/export/black
     */
    excelExportBlack: (dto: ProductQueryDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/product/excel/export/black`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name Insert
     * @summary insertProduct
     * @request POST:/product/insert
     */
    insert: (detailReqDTO: ProductDetailSaveReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/product/insert`,
        method: "POST",
        body: detailReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name InsertCustomerFocusProductPrice
     * @summary 新插件爬虫商品价格变化插入
     * @request POST:/product/insertCustomerFocusProductPrice
     */
    insertCustomerFocusProductPrice: (
      customerFocusProductPrice: CustomerFocusProductPrice,
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/product/insertCustomerFocusProductPrice`,
        method: "POST",
        body: customerFocusProductPrice,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name InsertCustomerSubscriptionGoods
     * @summary 新插件用户新增订阅商品
     * @request POST:/product/insertCustomerSubscriptionGoods
     */
    insertCustomerSubscriptionGoods: (customerFocusProduct: CustomerFocusProduct, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/product/insertCustomerSubscriptionGoods`,
        method: "POST",
        body: customerFocusProduct,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name ManageDetail
     * @summary 商品后台详情
     * @request GET:/product/manage/detail
     */
    manageDetail: (
      query: {
        /** productCode */
        productCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseProductDetailRespDTO, any>({
        path: `/product/manage/detail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name NewSkuFeign
     * @summary sku
     * @request POST:/product/new/sku/feign
     */
    newSkuFeign: (skuReqDTO: SkuReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseSkuRespDTO, any>({
        path: `/product/new/sku/feign`,
        method: "POST",
        body: skuReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name NewSkusFeign
     * @summary skuList
     * @request POST:/product/new/skus/feign
     */
    newSkusFeign: (skuReqDTO: SkuReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListSkuRespDTO, any>({
        path: `/product/new/skus/feign`,
        method: "POST",
        body: skuReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name NewDetail
     * @summary 商品详情【兼容1688实时接口】
     * @request POST:/product/newDetail
     */
    newDetail: (vo: ProductDetailRequVO, params: RequestParams = {}) =>
      this.request<BizResponseProductRespDTO, any>({
        path: `/product/newDetail`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name NumberSubscription
     * @summary getCustomerSubscriptionNum
     * @request GET:/product/number/subscription
     */
    numberSubscription: (
      query: {
        /**
         * superCustomerId
         * @format int64
         */
        superCustomerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseInt, any>({
        path: `/product/number/subscription`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name OfflineAdd
     * @summary 创建线下商品
     * @request POST:/product/offline/add
     */
    offlineAdd: (productReq: ProductReq, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/product/offline/add`,
        method: "POST",
        body: productReq,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name OfflineEdit
     * @summary 编辑线下商品
     * @request POST:/product/offline/edit
     */
    offlineEdit: (productReq: ProductReq, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/product/offline/edit`,
        method: "POST",
        body: productReq,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name OfflineExcelExport
     * @summary 线下商品导出
     * @request GET:/product/offline/excel/export
     */
    offlineExcelExport: (
      query?: {
        /**
         * 黑名单标记
         * @format int32
         */
        blackTag?: number;
        bought?: boolean;
        /** @format int32 */
        channel?: number;
        /**
         * 首次加购或关联结束时间
         * @format date-time
         */
        firstCartOrApiTimeEnd?: string;
        /**
         * 首次加购或关联开始时间
         * @format date-time
         */
        firstCartOrApiTimeStart?: string;
        /**
         * 首次下单结束时间
         * @format date-time
         */
        firstOrderTimeEnd?: string;
        /**
         * 首次下单开始时间
         * @format date-time
         */
        firstOrderTimeStart?: string;
        isOnePsale?: boolean;
        /** @format int32 */
        isOnline?: number;
        /** 待补充英文材质 */
        materialInfoEnIsEmptyString?: boolean;
        materialInfoJaIsEmptyString?: boolean;
        /** 待补充韩文材质 */
        materialInfoKrIsEmptyString?: boolean;
        materialInfoZhIsEmptyString?: boolean;
        /**
         * 最近下单结束时间
         * @format date-time
         */
        newOrderTimeEnd?: string;
        /**
         * 最近下单开始时间
         * @format date-time
         */
        newOrderTimeStart?: string;
        /**
         * 线下商品直营标识 0-普通 1-直营
         * @format int32
         */
        offlineDirectSaleFlag?: number;
        /** @format int32 */
        pageNum?: number;
        /**
         * 第几页结束
         * @format int32
         */
        pageNumEnd?: number;
        /**
         * 第几页开始
         * @format int32
         */
        pageNumStart?: number;
        /** @format int32 */
        pageSize?: number;
        platformType?: string;
        productCode?: string;
        productCodeList?: string[];
        productItemCategoryZhIsNull?: boolean;
        productSku?: string;
        /** 商品SKU批量搜索 */
        productSkuList?: string[];
        /**
         * 商品标签 1 精选货源
         * @format int32
         */
        productTag?: number;
        /** 商品名称 */
        productTitle?: string;
        /** 商品采购链接 */
        productUrl?: string;
        /** 推荐商品sku */
        recommendProductSku?: string;
        /** 待补充推荐商品sku */
        recommendProductSkuIsEmptyString?: boolean;
        /** 推荐商品sku批量搜索 */
        recommendProductSkuList?: string[];
        /** @format int32 */
        startIndex?: number;
        stationCode?: string;
        /** 供应商id */
        supplierId?: string;
        /** 供应商名称 */
        supplierName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/product/offline/excel/export`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name OfflineExcelImport
     * @summary 线下商品导入
     * @request POST:/product/offline/excel/import
     */
    offlineExcelImport: (data: any, params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/product/offline/excel/import`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name OnlineSkuFeign
     * @summary onlineSku
     * @request POST:/product/onlineSku/feign
     */
    onlineSkuFeign: (
      query: {
        /** productSku */
        productSku: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseSkuRespDTO, any>({
        path: `/product/onlineSku/feign`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name QueryPage
     * @summary 商品分页列表
     * @request POST:/product/query/page
     */
    queryPage: (dto: ProductQueryDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageProductRespDTO, any>({
        path: `/product/query/page`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name RecommendedDetailListFeign
     * @summary recommendedList
     * @request POST:/product/recommended/detail/list/feign
     */
    recommendedDetailListFeign: (dto: ProductDetailListReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListProductKpiDTO, any>({
        path: `/product/recommended/detail/list/feign`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SamleStyleProductPutIn
     * @summary 同款商品入库
     * @request POST:/product/samle/style/product/put/in/{id}
     */
    samleStyleProductPutIn: (id: number, params: RequestParams = {}) =>
      this.request<BizResponseProductSameStylePutInRespVO, any>({
        path: `/product/samle/style/product/put/in/${id}`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SaveProductByPddHtml
     * @summary 拼多多商品通过html入库
     * @request POST:/product/saveProductByPddHtml
     */
    saveProductByPddHtml: (vo: ProductDetailByPluginPddRequest, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/product/saveProductByPddHtml`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SearchAndSaveProductByPdd
     * @summary 手动商品入库-PDD
     * @request POST:/product/searchAndSaveProductByPdd
     */
    searchAndSaveProductByPdd: (vo: ProductDetailDTO, params: RequestParams = {}) =>
      this.request<BizResponseListSkuRespDTO, any>({
        path: `/product/searchAndSaveProductByPdd`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SearchAndSaveProductByPlugin
     * @summary 手动商品入库爬虫-插件
     * @request POST:/product/searchAndSaveProductByPlugin
     */
    searchAndSaveProductByPlugin: (vo: SearchAndSaveProductVo, params: RequestParams = {}) =>
      this.request<BizResponseListSkuRespDTO, any>({
        path: `/product/searchAndSaveProductByPlugin`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SelectAllCustomerSubscriptionGoods
     * @summary 新插件获取全部用户订阅商品列表
     * @request POST:/product/selectAllCustomerSubscriptionGoods
     */
    selectAllCustomerSubscriptionGoods: (baseQueryPage: BaseQueryPage, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerFocusProduct, any>({
        path: `/product/selectAllCustomerSubscriptionGoods`,
        method: "POST",
        body: baseQueryPage,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SelectCustomerSubscriptionGoods
     * @summary 新插件获取用户订阅商品列表
     * @request POST:/product/selectCustomerSubscriptionGoods
     */
    selectCustomerSubscriptionGoods: (params: RequestParams = {}) =>
      this.request<BizResponseListCustomerFocusProductRespDTO, any>({
        path: `/product/selectCustomerSubscriptionGoods`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name GetProduct
     * @summary sku查询
     * @request GET:/product/sku
     */
    getProduct: (
      query: {
        /** productSku */
        productSku: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseSkuRespVO, any>({
        path: `/product/sku`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SkuBoughtUpdateList
     * @summary updateSkuBoughtList
     * @request POST:/product/sku/bought/update/list
     */
    skuBoughtUpdateList: (productSkuList: string[], params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/product/sku/bought/update/list`,
        method: "POST",
        body: productSkuList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SkuBoughtUpdate
     * @summary updateSkuBought
     * @request POST:/product/sku/bought/update/{productSku}
     */
    skuBoughtUpdate: (productSku: string, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/product/sku/bought/update/${productSku}`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SkuCustomerFeign
     * @summary sku
     * @request POST:/product/sku/customer/feign
     */
    skuCustomerFeign: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId?: number;
        /** productSku */
        productSku: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseSkuRespDTO, any>({
        path: `/product/sku/customer/feign`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SkuCustomerFeignWithStation
     * @summary skuWithStation
     * @request POST:/product/sku/customer/feign/withStation
     */
    skuCustomerFeignWithStation: (vo: SkuReqVO, params: RequestParams = {}) =>
      this.request<BizResponseSkuRespDTO, any>({
        path: `/product/sku/customer/feign/withStation`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SkuFeign
     * @summary sku
     * @request POST:/product/sku/feign
     */
    skuFeign: (
      query: {
        /** productSku */
        productSku: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseSkuRespDTO, any>({
        path: `/product/sku/feign`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SkuItemCategoryZhUpdate
     * @summary updateSkuItemCategoryZh
     * @request POST:/product/sku/item/category/zh/update
     */
    skuItemCategoryZhUpdate: (skuEditReqDTO: SkuEditReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/product/sku/item/category/zh/update`,
        method: "POST",
        body: skuEditReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SkuListBySku
     * @summary listBySku
     * @request POST:/product/sku/listBySku
     */
    skuListBySku: (productSkuList: string[], params: RequestParams = {}) =>
      this.request<BizResponseListSkuProductSimpleRespDTO, any>({
        path: `/product/sku/listBySku`,
        method: "POST",
        body: productSkuList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SkuStockUpdate
     * @summary updateStock
     * @request POST:/product/sku/stock/update
     */
    skuStockUpdate: (updateStockReqDTO: UpdateStockReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/product/sku/stock/update`,
        method: "POST",
        body: updateStockReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SkuUpdateRecommendProductSku
     * @summary updateRecommendProductSku
     * @request POST:/product/sku/updateRecommendProductSku
     */
    skuUpdateRecommendProductSku: (updateVO: RecommendProductSkuUpdateVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/product/sku/updateRecommendProductSku`,
        method: "POST",
        body: updateVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SkuUpdateStallItem
     * @summary updateStallItem
     * @request POST:/product/sku/updateStallItem
     */
    skuUpdateStallItem: (updateVO: ProductStallEditReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/product/sku/updateStallItem`,
        method: "POST",
        body: updateVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SkuListByUrls
     * @summary skuListByUrls
     * @request POST:/product/skuListByUrls
     */
    skuListByUrls: (urls: ProductDetailUrlReqDTO[], params: RequestParams = {}) =>
      this.request<BizResponseHashMapStringListSkuRespDTO, any>({
        path: `/product/skuListByUrls`,
        method: "POST",
        body: urls,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name Skus
     * @summary sku列表
     * @request GET:/product/skus
     */
    skus: (
      query: {
        /** productCode */
        productCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListSkuRespVO, any>({
        path: `/product/skus`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SkusByProductSkuListCustomerFeign
     * @summary skuList
     * @request POST:/product/skus/byProductSkuList/customer/feign
     */
    skusByProductSkuListCustomerFeign: (
      productSkuList: string[],
      query?: {
        /**
         * customerId
         * @format int64
         */
        customerId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListSkuRespDTO, any>({
        path: `/product/skus/byProductSkuList/customer/feign`,
        method: "POST",
        query: query,
        body: productSkuList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SkusByProductSkuListFeign
     * @summary skuList
     * @request POST:/product/skus/byProductSkuList/feign
     */
    skusByProductSkuListFeign: (productSkuList: string[], params: RequestParams = {}) =>
      this.request<BizResponseListSkuRespDTO, any>({
        path: `/product/skus/byProductSkuList/feign`,
        method: "POST",
        body: productSkuList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SkusByProductSkusCustomerFeign
     * @summary skuListByProductSkus
     * @request POST:/product/skus/byProductSkus/customer/feign
     */
    skusByProductSkusCustomerFeign: (
      dtoList: ProductAndSkusDTO[],
      query?: {
        /**
         * customerId
         * @format int64
         */
        customerId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListSkuRespDTO, any>({
        path: `/product/skus/byProductSkus/customer/feign`,
        method: "POST",
        query: query,
        body: dtoList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SkusByProductSkusFeign
     * @summary skuListByProductSkus
     * @request POST:/product/skus/byProductSkus/feign
     */
    skusByProductSkusFeign: (dtoList: ProductAndSkusDTO[], params: RequestParams = {}) =>
      this.request<BizResponseListSkuRespDTO, any>({
        path: `/product/skus/byProductSkus/feign`,
        method: "POST",
        body: dtoList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SkusFeign
     * @summary skuList
     * @request GET:/product/skus/feign
     */
    skusFeign: (
      query: {
        /** productCode */
        productCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListSkuRespDTO, any>({
        path: `/product/skus/feign`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SkusFeign2
     * @summary skuList
     * @request POST:/product/skus/feign
     * @originalName skusFeign
     * @duplicate
     */
    skusFeign2: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId?: number;
        /** productCode */
        productCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListSkuRespDTO, any>({
        path: `/product/skus/feign`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SpuBlack
     * @summary spu是否为黑名单列表
     * @request POST:/product/spu/black
     */
    spuBlack: (reqDTO: ProductDetailReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListProductRespDTO, any>({
        path: `/product/spu/black`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SpuDefective
     * @summary spu次品率列表
     * @request GET:/product/spu/defective
     */
    spuDefective: (
      query: {
        /** productCodeList */
        productCodeList: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListProductKpiDTO, any>({
        path: `/product/spu/defective`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name StallNumberUpdate
     * @summary updateProductStallNumber
     * @request POST:/product/stall/number/update
     */
    stallNumberUpdate: (productEditReqDTO: ProductEditReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/product/stall/number/update`,
        method: "POST",
        body: productEditReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name SubscriptionDelete
     * @summary deleteFocusPriceGoodsByMembership
     * @request GET:/product/subscription/delete
     */
    subscriptionDelete: (
      query: {
        /**
         * superCustomerId
         * @format int64
         */
        superCustomerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/product/subscription/delete`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name UpdateBlackTag
     * @summary 批量更新黑名单
     * @request POST:/product/updateBlackTag
     */
    updateBlackTag: (dto: ProductAddBlackDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/product/updateBlackTag`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name UpdateProduct
     * @summary 更新商品
     * @request POST:/product/updateProduct
     */
    updateProduct: (UpdateVo: Product, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/product/updateProduct`,
        method: "POST",
        body: UpdateVo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品
     * @name UpdateProductOcr
     * @summary 更新商品ocr信息
     * @request POST:/product/updateProductOcr
     */
    updateProductOcr: (ocrUpdateVo: ProductOcrUpdateVo, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/product/updateProductOcr`,
        method: "POST",
        body: ocrUpdateVo,
        type: ContentType.Json,
        ...params,
      }),
  };
  productCategory = {
    /**
     * No description
     *
     * @tags 平台商品类目
     * @name PostProductCategory
     * @summary 平台商品类目新增
     * @request POST:/productCategory/add
     */
    postProductCategory: (vo: ProductCategoryAddRequVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/productCategory/add`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台商品类目
     * @name AssociateProductCustoms
     * @summary 平台商品类目关联商品报关
     * @request POST:/productCategory/associateProductCustoms
     */
    associateProductCustoms: (formReqDTO: ProductCategoryCustomsMapFormReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/productCategory/associateProductCustoms`,
        method: "POST",
        body: formReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台商品类目
     * @name GetCategoryFeign
     * @summary getCategory
     * @request GET:/productCategory/getCategory/feign
     */
    getCategoryFeign: (
      query: {
        /** cate_code */
        cate_code: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseProductCategoryRespDTO, any>({
        path: `/productCategory/getCategory/feign`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台商品类目
     * @name GetOneCategory
     * @summary 平台商品类目详情
     * @request GET:/productCategory/getOneCategory
     */
    getOneCategory: (
      query?: {
        /** cateCode */
        cateCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseProductCategoryRespDTO, any>({
        path: `/productCategory/getOneCategory`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台商品类目
     * @name List
     * @summary 平台商品类目列表
     * @request POST:/productCategory/list
     */
    list: (vo: ProductCategoryPageRequVO, params: RequestParams = {}) =>
      this.request<BizResponsePageProductCategoryRespVO, any>({
        path: `/productCategory/list`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台商品类目
     * @name ListFeign
     * @summary categoryList
     * @request POST:/productCategory/list/feign
     */
    listFeign: (dto: ProductCategoryReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListProductCategoryRespDTO, any>({
        path: `/productCategory/list/feign`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台商品类目
     * @name StatusDisable
     * @summary 平台商品类目停用
     * @request GET:/productCategory/status/disable/{cateCode}
     */
    statusDisable: (cateCode: string, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/productCategory/status/disable/${cateCode}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台商品类目
     * @name StatusEnable
     * @summary 平台商品类目启用
     * @request GET:/productCategory/status/enable/{cateCode}
     */
    statusEnable: (cateCode: string, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/productCategory/status/enable/${cateCode}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台商品类目
     * @name TreeList
     * @summary 平台商品类目列表-树形
     * @request POST:/productCategory/treeList
     */
    treeList: (vo: ProductCategoryRequVO, params: RequestParams = {}) =>
      this.request<BizResponseListProductCategoryRespVO, any>({
        path: `/productCategory/treeList`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台商品类目
     * @name Update
     * @summary 平台商品类目更新
     * @request POST:/productCategory/update
     */
    update: (vo: ProductCategoryUpdateRequVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/productCategory/update`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),
  };
  productCategoryFrontend = {
    /**
     * No description
     *
     * @tags 前台类目
     * @name PostProductCategoryFrontend
     * @summary insertCategory
     * @request POST:/productCategoryFrontend/add
     */
    postProductCategoryFrontend: (reqDTO: ProductCategoryFrontendInsertReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/productCategoryFrontend/add`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 前台类目
     * @name Close
     * @summary closeCategory
     * @request GET:/productCategoryFrontend/close
     */
    close: (
      query: {
        /**
         * id
         * @format int64
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/productCategoryFrontend/close`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 前台类目
     * @name Delete
     * @summary deleteCategory
     * @request GET:/productCategoryFrontend/delete
     */
    delete: (
      query: {
        /**
         * id
         * @format int64
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/productCategoryFrontend/delete`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 前台类目
     * @name GetOne
     * @summary getFrontendCategory
     * @request GET:/productCategoryFrontend/getOne
     */
    getOne: (
      query: {
        /**
         * id
         * @format int64
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseProductCategoryFrontendRespDTO, any>({
        path: `/productCategoryFrontend/getOne`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 前台类目
     * @name List
     * @summary getFrontendCategoryList
     * @request POST:/productCategoryFrontend/list
     */
    list: (reqDTO: ProductCategoryFrontendReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListProductCategoryFrontendRespDTO, any>({
        path: `/productCategoryFrontend/list`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 前台类目
     * @name Open
     * @summary openCategory
     * @request GET:/productCategoryFrontend/open
     */
    open: (
      query: {
        /**
         * id
         * @format int64
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/productCategoryFrontend/open`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 前台类目
     * @name Tree
     * @summary frontendTreeList
     * @request POST:/productCategoryFrontend/tree
     */
    tree: (
      productCategoryFrontendAllParentNodeDTO: ProductCategoryFrontendAllParentNodeDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListProductCategoryFrontendGroupChannelRespDTO, any>({
        path: `/productCategoryFrontend/tree`,
        method: "POST",
        body: productCategoryFrontendAllParentNodeDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 前台类目
     * @name TreeAll
     * @summary frontendTreeAllList
     * @request POST:/productCategoryFrontend/tree/all
     */
    treeAll: (params: RequestParams = {}) =>
      this.request<BizResponseListProductCategoryFrontendRespDTO, any>({
        path: `/productCategoryFrontend/tree/all`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 前台类目
     * @name TreeList
     * @summary treeList
     * @request GET:/productCategoryFrontend/treeList
     */
    treeList: (
      query?: {
        /** cateName */
        cateName?: string;
        /** stationCode */
        stationCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListProductCategoryFrontendRespDTO, any>({
        path: `/productCategoryFrontend/treeList`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 前台类目
     * @name Update
     * @summary updateCategory
     * @request POST:/productCategoryFrontend/update
     */
    update: (reqDTO: ProductCategoryFrontendUpdateReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/productCategoryFrontend/update`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  productCategoryFrontendMap = {
    /**
     * No description
     *
     * @tags 前台商品类目映射
     * @name ListGroup
     * @summary productCategoryFrontendMapGroupList
     * @request POST:/productCategoryFrontendMap/list/group
     */
    listGroup: (reqDTO: ProductCategoryFrontendMapReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListProductCategoryFrontendMapGroupRespDTO, any>({
        path: `/productCategoryFrontendMap/list/group`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  productCategoryMap = {
    /**
     * No description
     *
     * @tags 平台商品类目映射
     * @name List
     * @summary 映射列表
     * @request POST:/productCategoryMap/list
     */
    list: (reqDTO: ProductCategoryMapReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListProductCategoryMapRespDTO, any>({
        path: `/productCategoryMap/list`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台商品类目映射
     * @name ListGroup
     * @summary 映射分组列表
     * @request POST:/productCategoryMap/list/group
     */
    listGroup: (reqDTO: ProductCategoryMapReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListProductCategoryMapGroupRespDTO, any>({
        path: `/productCategoryMap/list/group`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台商品类目映射
     * @name ListGroupNomapping
     * @summary 未映射分组列表
     * @request POST:/productCategoryMap/list/group/nomapping
     */
    listGroupNomapping: (reqDTO: ProductCategoryMapReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListProductCategoryMapGroupRespDTO, any>({
        path: `/productCategoryMap/list/group/nomapping`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  productCategoryThird = {
    /**
     * No description
     *
     * @tags 第三方平台商品类目
     * @name AliCategoryUpdate
     * @summary 1688三方类目更新
     * @request GET:/productCategoryThird/ali/category/update
     */
    aliCategoryUpdate: (params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/productCategoryThird/ali/category/update`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方平台商品类目
     * @name AliCategoryWaitMatch
     * @summary 1688三方类目待匹配类目
     * @request POST:/productCategoryThird/ali/category/wait/match
     */
    aliCategoryWaitMatch: (reqDTO: ProductCategoryThirdPageReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageProductCategoryThirdRespDTO, any>({
        path: `/productCategoryThird/ali/category/wait/match`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方平台商品类目
     * @name BlackCategory
     * @summary thirdBlackCategoryList
     * @request GET:/productCategoryThird/black/category
     */
    blackCategory: (params: RequestParams = {}) =>
      this.request<BizResponseListString, any>({
        path: `/productCategoryThird/black/category`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方平台商品类目
     * @name BlackDelete
     * @summary deleteBlackCategory
     * @request POST:/productCategoryThird/black/delete
     */
    blackDelete: (
      query: {
        /**
         * id
         * @format int64
         */
        id: number;
        /** platformType */
        platformType: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/productCategoryThird/black/delete`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方平台商品类目
     * @name BlackDisplayBackList
     * @summary selectDisplayBackList
     * @request POST:/productCategoryThird/black/displayBack/list
     */
    blackDisplayBackList: (reqDTO: ProductCategoryThirdReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListProductCategoryThirdRespDTO, any>({
        path: `/productCategoryThird/black/displayBack/list`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方平台商品类目
     * @name BlackInsert
     * @summary insertBlackCategory
     * @request POST:/productCategoryThird/black/insert
     */
    blackInsert: (
      productCategoryThirdBlackSaveReqDTO: ProductCategoryThirdBlackSaveReqDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/productCategoryThird/black/insert`,
        method: "POST",
        body: productCategoryThirdBlackSaveReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方平台商品类目
     * @name BlackList
     * @summary selectThirdList
     * @request POST:/productCategoryThird/black/list
     */
    blackList: (reqDTO: ProductCategoryThirdReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListProductCategoryThirdRespDTO, any>({
        path: `/productCategoryThird/black/list`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方平台商品类目
     * @name BlackPageList
     * @summary selectThirdPageList
     * @request POST:/productCategoryThird/black/page/list
     */
    blackPageList: (pageReqDTO: ProductCategoryThirdPageReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageProductCategoryThirdRespDTO, any>({
        path: `/productCategoryThird/black/page/list`,
        method: "POST",
        body: pageReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方平台商品类目
     * @name BlackUpdate
     * @summary updateBlackCategory
     * @request POST:/productCategoryThird/black/update
     */
    blackUpdate: (
      productCategoryThirdBlackSaveReqDTO: ProductCategoryThirdBlackSaveReqDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/productCategoryThird/black/update`,
        method: "POST",
        body: productCategoryThirdBlackSaveReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方平台商品类目
     * @name ChannelPlatformType
     * @summary thirdChannelPlatformType
     * @request GET:/productCategoryThird/channelPlatformType
     */
    channelPlatformType: (params: RequestParams = {}) =>
      this.request<BizResponseListProductCategoryThirdChannelPlatformTypeRespDTO, any>({
        path: `/productCategoryThird/channelPlatformType`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方平台商品类目
     * @name GroupTreeList
     * @summary 平台分组-类目三级树形结构
     * @request GET:/productCategoryThird/group/tree/list
     */
    groupTreeList: (
      query: {
        /** platformType */
        platformType: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseProductCategoryThirdGroupTreeShortRespDTO, any>({
        path: `/productCategoryThird/group/tree/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 第三方平台商品类目
     * @name ListSimple
     * @summary 获取第三方类目信息
     * @request POST:/productCategoryThird/list/simple
     */
    listSimple: (reqDTO: ProductCategoryThirdReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListProductCategoryThirdRespDTO, any>({
        path: `/productCategoryThird/list/simple`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  productMall = {
    /**
     * No description
     *
     * @tags 市场购档口信息
     * @name Frontend
     * @summary getFrontendList
     * @request GET:/productMall/frontend
     */
    frontend: (params: RequestParams = {}) =>
      this.request<BizResponseListProductMallFrontendRespDTO, any>({
        path: `/productMall/frontend`,
        method: "GET",
        ...params,
      }),
  };
  purchase = {
    /**
     * No description
     *
     * @tags 采购市场
     * @name MallPurchaseMallList
     * @summary selectList
     * @request POST:/purchase/mall/purchase/mall/list
     */
    mallPurchaseMallList: (reqDTO: PurchaseMallReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListPurchaseMallRespDTO, any>({
        path: `/purchase/mall/purchase/mall/list`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  recommend = {
    /**
     * No description
     *
     * @tags 推荐
     * @name Product
     * @summary 推荐商品列表
     * @request POST:/recommend/product
     */
    product: (reqDTO: RecommendProductSearchReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageRecommendProductSearchRespDTO, any>({
        path: `/recommend/product`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 推荐
     * @name ProductSearch
     * @summary 搜索推荐商品列表
     * @request POST:/recommend/product/search
     */
    productSearch: (reqDTO: RecommendProductSearchReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageRecommendProductSearchRespDTO, any>({
        path: `/recommend/product/search`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 推荐
     * @name Supplier
     * @summary 推荐店铺列表
     * @request POST:/recommend/supplier
     */
    supplier: (reqDTO: RecommendSupplierSearchReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageRecommendSupplierSearchRespDTO, any>({
        path: `/recommend/supplier`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  reference = {
    /**
     * No description
     *
     * @tags 商品参考库
     * @name Delete
     * @summary 删除
     * @request GET:/reference/delete
     */
    delete: (
      query: {
        /**
         * id
         * @format int64
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/reference/delete`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品参考库
     * @name Detail
     * @summary 详情
     * @request POST:/reference/detail
     */
    detail: (
      query: {
        /**
         * id
         * @format int64
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseProductReferenceRespDTO, any>({
        path: `/reference/detail`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品参考库
     * @name Edit
     * @summary 编辑
     * @request POST:/reference/edit
     */
    edit: (productReferenceEditReqDTO: ProductReferenceEditReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/reference/edit`,
        method: "POST",
        body: productReferenceEditReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品参考库
     * @name Page
     * @summary 分页查询
     * @request POST:/reference/page
     */
    page: (productReferencePageReqDTO: ProductReferencePageReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageProductReferenceRespDTO, any>({
        path: `/reference/page`,
        method: "POST",
        body: productReferencePageReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品参考库
     * @name Save
     * @summary 新增
     * @request POST:/reference/save
     */
    save: (productReferenceSaveReqDTO: ProductReferenceSaveReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/reference/save`,
        method: "POST",
        body: productReferenceSaveReqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  search = {
    /**
     * No description
     *
     * @tags 搜索
     * @name IsInBlacklist
     * @summary 验证是否在黑名单之内
     * @request POST:/search/isInBlacklist
     */
    isInBlacklist: (detail: ProductDetailDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/search/isInBlacklist`,
        method: "POST",
        body: detail,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 搜索
     * @name IsInStore
     * @summary 验证是否在库
     * @request POST:/search/isInStore
     */
    isInStore: (productSkuList: string[], params: RequestParams = {}) =>
      this.request<BizResponseListSkuRespDTO, any>({
        path: `/search/isInStore`,
        method: "POST",
        body: productSkuList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 搜索
     * @name KeyPluginLog
     * @summary 插件搜索记录
     * @request POST:/search/key/plugin/log
     */
    keyPluginLog: (vo: ProductPluginSearchLogReqVo, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/search/key/plugin/log`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 搜索
     * @name KeywordHistory
     * @summary 客户历史搜索商品关键词
     * @request GET:/search/keyword/history
     */
    keywordHistory: (params: RequestParams = {}) =>
      this.request<BizResponseListString, any>({
        path: `/search/keyword/history`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 搜索
     * @name KeywordHost
     * @summary 客户商品热搜词
     * @request GET:/search/keyword/host
     */
    keywordHost: (params: RequestParams = {}) =>
      this.request<BizResponseListCustomerSearchKeywordHotRespDTO, any>({
        path: `/search/keyword/host`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 搜索
     * @name KeywordTranslate
     * @summary 搜索词转换为中文
     * @request POST:/search/keyword/translate
     */
    keywordTranslate: (vo: TranslateReqVo, params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/search/keyword/translate`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 搜索
     * @name Products
     * @summary 商品搜索
     * @request POST:/search/products
     */
    products: (vo: SearchProductRequVO, params: RequestParams = {}) =>
      this.request<BizResponsePageSearchProductRespVO, any>({
        path: `/search/products`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 搜索
     * @name ProductsFeign
     * @summary 商品搜索feign
     * @request POST:/search/products/feign
     */
    productsFeign: (vo: SearchProductReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageSearchProductRespDTO, any>({
        path: `/search/products/feign`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 搜索
     * @name SameStyleProductQuery
     * @summary 同款商品搜索
     * @request GET:/search/same/style/product/query
     */
    sameStyleProductQuery: (
      query?: {
        /** 图片id */
        imageId?: string;
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        /** 源商品SPU */
        sourceProductCode?: string;
        /** 源商品主图 */
        sourceProductMainImg?: string;
        /** @format int32 */
        startIndex?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageProductSameStyleRespVO, any>({
        path: `/search/same/style/product/query`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 搜索
     * @name StatProductCategory
     * @summary 统计商品类目
     * @request GET:/search/stat/productCategory
     */
    statProductCategory: (params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/search/stat/productCategory`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 搜索
     * @name StatProductMall
     * @summary 统计市场和商品类目
     * @request GET:/search/stat/productMall
     */
    statProductMall: (params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/search/stat/productMall`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 搜索
     * @name Suppliers
     * @summary 供应商商品搜索
     * @request POST:/search/suppliers
     */
    suppliers: (reqDTO: SearchSupplierReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseSupplierProductRespDTO, any>({
        path: `/search/suppliers`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 搜索
     * @name PostSearch
     * @summary 根据url搜索商品-前台
     * @request POST:/search/url
     */
    postSearch: (reqDTO: ProductDetailUrlReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseProductRespDTO, any>({
        path: `/search/url`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 搜索
     * @name UrlAll
     * @summary 根据url搜索商品-全部接口
     * @request POST:/search/url/all
     */
    urlAll: (reqDTO: ProductDetailUrlReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseProductRespDTO, any>({
        path: `/search/url/all`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 搜索
     * @name UrlMall
     * @summary 根据url搜索商品-市场购
     * @request POST:/search/url/mall
     */
    urlMall: (reqDTO: ProductDetailUrlReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseProductRespDTO, any>({
        path: `/search/url/mall`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 搜索
     * @name UrlOnline
     * @summary 根据url搜索商品-透明购
     * @request POST:/search/url/online
     */
    urlOnline: (reqDTO: ProductDetailUrlReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseProductRespDTO, any>({
        path: `/search/url/online`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 搜索
     * @name UrlRead
     * @summary 根据url搜索商品不入库-app
     * @request POST:/search/url/read
     */
    urlRead: (reqDTO: ProductDetailUrlReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseProductAndSkuRespDTO, any>({
        path: `/search/url/read`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 搜索
     * @name UrlSpider
     * @summary 根据url搜索商品-必走爬虫
     * @request GET:/search/url/spider
     */
    urlSpider: (
      query: {
        /** detailUrl */
        detailUrl: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseString, any>({
        path: `/search/url/spider`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 搜索
     * @name UrlSpiderOrAm
     * @summary 根据url搜索商品-走爬虫/1688
     * @request GET:/search/url/spiderOrAm
     */
    urlSpiderOrAm: (
      query: {
        /** detailUrl */
        detailUrl: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseString, any>({
        path: `/search/url/spiderOrAm`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  similarSearch = {
    /**
     * No description
     *
     * @tags 相似搜索
     * @name Product
     * @summary similarProduct
     * @request POST:/similarSearch/product
     */
    product: (dto: ProductSimilarSearchReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageSearchProductRespDTO, any>({
        path: `/similarSearch/product`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 相似搜索
     * @name SimilarProductTest
     * @summary 测试相似商品-tablestore-api
     * @request POST:/similarSearch/similar/product/test
     */
    similarProductTest: (dto: ProductSimilarSearchReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageProductSimilar, any>({
        path: `/similarSearch/similar/product/test`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 相似搜索
     * @name Supplier
     * @summary similarSupplier
     * @request POST:/similarSearch/supplier
     */
    supplier: (dto: SupplierSimilarSearchReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageSearchSupplierRespDTO, any>({
        path: `/similarSearch/supplier`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),
  };
  sku = {
    /**
     * No description
     *
     * @tags sku-controller
     * @name DangKouExcelImport
     * @summary 档口商品导入
     * @request POST:/sku/dangKou/excel/import
     */
    dangKouExcelImport: (data: any, params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/sku/dangKou/excel/import`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sku-controller
     * @name ExportSkuInfo
     * @summary 导出sku信息
     * @request POST:/sku/exportSkuInfo
     */
    exportSkuInfo: (data: any, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sku/exportSkuInfo`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sku-controller
     * @name ImportExcelUpdateRecommendProductSku
     * @summary 导入更新推荐商品sku
     * @request POST:/sku/importExcelUpdateRecommendProductSku
     */
    importExcelUpdateRecommendProductSku: (data: any, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sku/importExcelUpdateRecommendProductSku`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sku-controller
     * @name ImportExcelUpdateSkuBought
     * @summary 导入更新sku已购买
     * @request POST:/sku/importExcelUpdateSkuBought
     */
    importExcelUpdateSkuBought: (data: any, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sku/importExcelUpdateSkuBought`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sku-controller
     * @name ImportExcelUpdateSkuCustoms
     * @summary 更新sku中文品名
     * @request POST:/sku/importExcelUpdateSkuCustoms
     */
    importExcelUpdateSkuCustoms: (data: any, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sku/importExcelUpdateSkuCustoms`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sku-controller
     * @name ImportExcelUpdateSkuMaterialInfo
     * @summary 更新sku材质信息
     * @request POST:/sku/importExcelUpdateSkuMaterialInfo
     */
    importExcelUpdateSkuMaterialInfo: (data: any, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sku/importExcelUpdateSkuMaterialInfo`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sku-controller
     * @name ImportExcelUpdateSkuMaterialInfoJp
     * @summary 更新sku日文材质信息
     * @request POST:/sku/importExcelUpdateSkuMaterialInfoJp
     */
    importExcelUpdateSkuMaterialInfoJp: (data: any, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sku/importExcelUpdateSkuMaterialInfoJp`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sku-controller
     * @name ImportExcelUpdateSkuMaterialInfoJpByCh
     * @summary 更新sku日文材质信息
     * @request POST:/sku/importExcelUpdateSkuMaterialInfoJpByCh
     */
    importExcelUpdateSkuMaterialInfoJpByCh: (data: any, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/sku/importExcelUpdateSkuMaterialInfoJpByCh`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sku-controller
     * @name OnlineExcelImport
     * @summary 线上商品导入
     * @request POST:/sku/online/excel/import
     */
    onlineExcelImport: (data: any, params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/sku/online/excel/import`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),
  };
  supplier = {
    /**
     * No description
     *
     * @tags 供应商
     * @name Export
     * @summary 导出供应商
     * @request POST:/supplier/export
     */
    export: (vo: SupplierShopQueryVO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/supplier/export`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name ManageDeleteErrorColumn
     * @summary 批量删除商品的列
     * @request POST:/supplier/manage/deleteErrorColumn
     */
    manageDeleteErrorColumn: (productSkuList: string[], params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/supplier/manage/deleteErrorColumn`,
        method: "POST",
        body: productSkuList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name ManageDeleteRecommendProductSku
     * @summary 批量删除推荐商品SKU
     * @request POST:/supplier/manage/deleteRecommendProductSku
     */
    manageDeleteRecommendProductSku: (productSkuList: string[], params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/supplier/manage/deleteRecommendProductSku`,
        method: "POST",
        body: productSkuList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name ManageGetRecommendProductCode
     * @summary 获取商品的推荐商品的productCode
     * @request GET:/supplier/manage/getRecommendProductCode/{productSku}
     */
    manageGetRecommendProductCode: (productSku: string, params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/supplier/manage/getRecommendProductCode/${productSku}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name ManageGetSkuAboutCountInfo
     * @summary 获取sku相关统计信息
     * @request POST:/supplier/manage/getSkuAboutCountInfo
     */
    manageGetSkuAboutCountInfo: (params: RequestParams = {}) =>
      this.request<BizResponseSupplierManageSkuCountInfoVo, any>({
        path: `/supplier/manage/getSkuAboutCountInfo`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name ManageOfflineDetail
     * @summary 商品详情
     * @request GET:/supplier/manage/offline/detail
     */
    manageOfflineDetail: (
      query: {
        /** productCode */
        productCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseProductDetailVo, any>({
        path: `/supplier/manage/offline/detail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name ManageProductExcelExport
     * @summary sku导出
     * @request POST:/supplier/manage/product/excel/export
     */
    manageProductExcelExport: (queryVO: SupplierManageListQueryVO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/supplier/manage/product/excel/export`,
        method: "POST",
        body: queryVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name ManageProductExcelImport
     * @summary 批量导入采购链接excel
     * @request POST:/supplier/manage/product/excel/import
     */
    manageProductExcelImport: (data: any, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/supplier/manage/product/excel/import`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name ManageQuery
     * @summary sku分页列表
     * @request POST:/supplier/manage/query
     */
    manageQuery: (queryVO: SupplierManageListQueryVO, params: RequestParams = {}) =>
      this.request<BizResponsePageSupplierManageListVO, any>({
        path: `/supplier/manage/query`,
        method: "POST",
        body: queryVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name ManageQueryOperatorLog
     * @summary 查询商品操作日志
     * @request POST:/supplier/manage/query/operatorLog
     */
    manageQueryOperatorLog: (skuOperatorLogVO: SkuOperatorLogVO, params: RequestParams = {}) =>
      this.request<BizResponsePageProductOperatorLogVo, any>({
        path: `/supplier/manage/query/operatorLog`,
        method: "POST",
        body: skuOperatorLogVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name ManageQueryOperatorLogDiscount
     * @summary 查询商品折扣价操作日志
     * @request POST:/supplier/manage/query/operatorLog/discount
     */
    manageQueryOperatorLogDiscount: (skuOperatorLogVO: SkuOperatorLogVO, params: RequestParams = {}) =>
      this.request<BizResponsePageProductOperatorLogVo, any>({
        path: `/supplier/manage/query/operatorLog/discount`,
        method: "POST",
        body: skuOperatorLogVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name ManageRefresh
     * @summary 刷新中文材质
     * @request GET:/supplier/manage/refresh
     */
    manageRefresh: (
      query?: {
        /**
         * 黑名单标记
         * @format int32
         */
        blackTag?: number;
        bought?: boolean;
        /** @format int32 */
        channel?: number;
        /**
         * 首次加购或关联结束时间
         * @format date-time
         */
        firstCartOrApiTimeEnd?: string;
        /**
         * 首次加购或关联开始时间
         * @format date-time
         */
        firstCartOrApiTimeStart?: string;
        /**
         * 首次下单结束时间
         * @format date-time
         */
        firstOrderTimeEnd?: string;
        /**
         * 首次下单开始时间
         * @format date-time
         */
        firstOrderTimeStart?: string;
        isOnePsale?: boolean;
        /** @format int32 */
        isOnline?: number;
        /** 待补充英文材质 */
        materialInfoEnIsEmptyString?: boolean;
        materialInfoJaIsEmptyString?: boolean;
        /** 待补充韩文材质 */
        materialInfoKrIsEmptyString?: boolean;
        materialInfoZhIsEmptyString?: boolean;
        /**
         * 最近下单结束时间
         * @format date-time
         */
        newOrderTimeEnd?: string;
        /**
         * 最近下单开始时间
         * @format date-time
         */
        newOrderTimeStart?: string;
        /**
         * 线下商品直营标识 0-普通 1-直营
         * @format int32
         */
        offlineDirectSaleFlag?: number;
        /** @format int32 */
        pageNum?: number;
        /**
         * 第几页结束
         * @format int32
         */
        pageNumEnd?: number;
        /**
         * 第几页开始
         * @format int32
         */
        pageNumStart?: number;
        /** @format int32 */
        pageSize?: number;
        platformType?: string;
        productCode?: string;
        productCodeList?: string[];
        productItemCategoryZhIsNull?: boolean;
        productSku?: string;
        /** 商品SKU批量搜索 */
        productSkuList?: string[];
        /**
         * 商品标签 1 精选货源
         * @format int32
         */
        productTag?: number;
        /** 商品名称 */
        productTitle?: string;
        /** 商品采购链接 */
        productUrl?: string;
        /** 推荐商品sku */
        recommendProductSku?: string;
        /** 待补充推荐商品sku */
        recommendProductSkuIsEmptyString?: boolean;
        /** 推荐商品sku批量搜索 */
        recommendProductSkuList?: string[];
        /** @format int32 */
        startIndex?: number;
        stationCode?: string;
        /** 供应商id */
        supplierId?: string;
        /** 供应商名称 */
        supplierName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/supplier/manage/refresh`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name ManageSkuBatchModifyTransProperty
     * @summary 更新推荐商品SKU
     * @request POST:/supplier/manage/sku/batchModifyTransProperty
     */
    manageSkuBatchModifyTransProperty: (
      skuTransPropertyBatchEditDTO: SkuTransPropertyBatchEditDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/supplier/manage/sku/batchModifyTransProperty`,
        method: "POST",
        body: skuTransPropertyBatchEditDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name ManageSkuDetail
     * @summary sku详情
     * @request GET:/supplier/manage/sku/detail
     */
    manageSkuDetail: (
      query: {
        /** productSku */
        productSku: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseSupplierManageListVO, any>({
        path: `/supplier/manage/sku/detail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name ManageUpdateDiscountInfo
     * @summary 更新折扣信息
     * @request POST:/supplier/manage/updateDiscountInfo
     */
    manageUpdateDiscountInfo: (updateVO: DiscountInfoUpdateVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/supplier/manage/updateDiscountInfo`,
        method: "POST",
        body: updateVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name ManageUpdateLiveSellPrice
     * @summary 更新直播销售价
     * @request POST:/supplier/manage/updateLiveSellPrice
     */
    manageUpdateLiveSellPrice: (liveSellPriceReq: LiveSellPriceReq, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/supplier/manage/updateLiveSellPrice`,
        method: "POST",
        body: liveSellPriceReq,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name ManageUpdateLiveSellPriceTime
     * @summary 更新直播销售价有效期
     * @request POST:/supplier/manage/updateLiveSellPriceTime
     */
    manageUpdateLiveSellPriceTime: (updateLiveSellPriceTime: LiveSellPriceTimeReq, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/supplier/manage/updateLiveSellPriceTime`,
        method: "POST",
        body: updateLiveSellPriceTime,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name ManageUpdateMaterialInfo
     * @summary 更新材质信息
     * @request POST:/supplier/manage/updateMaterialInfo
     */
    manageUpdateMaterialInfo: (updateVO: MaterialInfoUpdateVO, params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/supplier/manage/updateMaterialInfo`,
        method: "POST",
        body: updateVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name ManageUpdateProductItemCategoryZh
     * @summary 更新中文品名
     * @request POST:/supplier/manage/updateProductItemCategoryZh
     */
    manageUpdateProductItemCategoryZh: (updateVO: ProductItemCategoryZhUpdateVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/supplier/manage/updateProductItemCategoryZh`,
        method: "POST",
        body: updateVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name ManageUpdateProductStallNumber
     * @summary 更新档口货号
     * @request POST:/supplier/manage/updateProductStallNumber
     */
    manageUpdateProductStallNumber: (updateVO: ProductStallNumberUpdateVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/supplier/manage/updateProductStallNumber`,
        method: "POST",
        body: updateVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name ManageUpdateRecommendProductSku
     * @summary 更新推荐商品SKU
     * @request POST:/supplier/manage/updateRecommendProductSku
     */
    manageUpdateRecommendProductSku: (updateVO: RecommendProductSkuUpdateVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/supplier/manage/updateRecommendProductSku`,
        method: "POST",
        body: updateVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name ManageUpdateSizeInfo
     * @summary 更新尺码信息
     * @request POST:/supplier/manage/updateSizeInfo
     */
    manageUpdateSizeInfo: (updateVO: SizenfoUpdateVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/supplier/manage/updateSizeInfo`,
        method: "POST",
        body: updateVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商管理
     * @name ManageUpdateStallProductSellPrice
     * @summary 更新档口价格
     * @request POST:/supplier/manage/updateStallProductSellPrice
     */
    manageUpdateStallProductSellPrice: (updateVO: StallProductSellPriceUpdateVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/supplier/manage/updateStallProductSellPrice`,
        method: "POST",
        body: updateVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商
     * @name MarketShopProduct
     * @summary 店铺商品接口
     * @request POST:/supplier/marketShopProduct
     */
    marketShopProduct: (vo: ShopProductRequVO, params: RequestParams = {}) =>
      this.request<BizResponseShopProductRespVO, any>({
        path: `/supplier/marketShopProduct`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),
  };
  supplierShop = {
    /**
     * No description
     *
     * @tags 供应商店铺
     * @name AddBlackList
     * @summary 加入黑名单
     * @request POST:/supplierShop/addBlackList
     */
    addBlackList: (dto: SupplierOperateBlackFlagDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/supplierShop/addBlackList`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商店铺
     * @name Agree
     * @summary 黑名单待审核-同意
     * @request POST:/supplierShop/agree
     */
    agree: (dto: SupplierOperateBlackFlagDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/supplierShop/agree`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商店铺
     * @name Detail
     * @summary 供应商详情
     * @request GET:/supplierShop/detail
     */
    detail: (
      query: {
        /** shopCode */
        shopCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseSupplierShopRespDTO, any>({
        path: `/supplierShop/detail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商店铺
     * @name FeignDetail
     * @summary feign:供应商详情
     * @request POST:/supplierShop/feign/detail
     */
    feignDetail: (dto: SupplierReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseSupplierShopRespDTO, any>({
        path: `/supplierShop/feign/detail`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商店铺
     * @name FeignSearch
     * @summary feign:批量获取供应商详情
     * @request POST:/supplierShop/feign/search
     */
    feignSearch: (dto: SupplierListReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListSupplierShopRespDTO, any>({
        path: `/supplierShop/feign/search`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商店铺
     * @name FeignSyncSupplier
     * @summary feign:通过店铺url同步店铺信息(爬虫)
     * @request POST:/supplierShop/feign/syncSupplier
     */
    feignSyncSupplier: (req: SyncSupplierReq, params: RequestParams = {}) =>
      this.request<BizResponseSupplierShopRespDTO, any>({
        path: `/supplierShop/feign/syncSupplier`,
        method: "POST",
        body: req,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商店铺
     * @name ImportSupplier
     * @summary 后台-导入供应商
     * @request GET:/supplierShop/importSupplier
     */
    importSupplier: (
      query: {
        /** url */
        url: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseObject, any>({
        path: `/supplierShop/importSupplier`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商店铺
     * @name ImportSupplierFromTablestore
     * @summary 后台-从tablestore导入系统原有供应商
     * @request POST:/supplierShop/importSupplierFromTablestore
     */
    importSupplierFromTablestore: (
      query: {
        /** shopCodeList */
        shopCodeList: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListString, any>({
        path: `/supplierShop/importSupplierFromTablestore`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商店铺
     * @name ImportSupplierHandle
     * @summary 后台-导入供应商处理
     * @request POST:/supplierShop/importSupplierHandle
     */
    importSupplierHandle: (
      query: {
        /**
         * taskId
         * @format int64
         */
        taskId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseObject, any>({
        path: `/supplierShop/importSupplierHandle`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商店铺
     * @name InsertSupplier
     * @summary 插入供应商
     * @request POST:/supplierShop/insertSupplier
     */
    insertSupplier: (insertDTO: SupplierShopRespDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/supplierShop/insertSupplier`,
        method: "POST",
        body: insertDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商店铺
     * @name InsertSupplierBySpider
     * @summary 爬虫抓取供应商
     * @request POST:/supplierShop/insertSupplierBySpider
     */
    insertSupplierBySpider: (insertDTO: SupplierDetailSaveReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseSupplierShopRespDTO, any>({
        path: `/supplierShop/insertSupplierBySpider`,
        method: "POST",
        body: insertDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商店铺
     * @name PageList
     * @summary 供应商店铺分页列表
     * @request POST:/supplierShop/pageList
     */
    pageList: (queryVO: SupplierShopQueryVO, params: RequestParams = {}) =>
      this.request<BizResponsePageSupplierShopRespDTO, any>({
        path: `/supplierShop/pageList`,
        method: "POST",
        body: queryVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商店铺
     * @name Reject
     * @summary 黑名单待审核-拒绝
     * @request POST:/supplierShop/reject
     */
    reject: (dto: SupplierOperateBlackFlagDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/supplierShop/reject`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商店铺
     * @name RemoveBlackList
     * @summary 单个/批量解除黑名单
     * @request POST:/supplierShop/removeBlackList
     */
    removeBlackList: (dto: SupplierOperateBlackFlagDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/supplierShop/removeBlackList`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商店铺
     * @name Save
     * @summary 保存供应商详情
     * @request POST:/supplierShop/save
     */
    save: (insertDTO: SupplierShopRespDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/supplierShop/save`,
        method: "POST",
        body: insertDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商店铺
     * @name UpdateMarketInfoFeign
     * @summary feign:更新市场购档口信息
     * @request POST:/supplierShop/updateMarketInfo/feign
     */
    updateMarketInfoFeign: (dto: MallDoorFormReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/supplierShop/updateMarketInfo/feign`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 供应商店铺
     * @name UpdateStatus
     * @summary 修改供应商状态启用/关闭
     * @request POST:/supplierShop/updateStatus
     */
    updateStatus: (reqDTO: SupplierSaveReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/supplierShop/updateStatus`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  translate = {
    /**
     * No description
     *
     * @tags 翻译接口
     * @name Translate
     * @summary 日文转英文
     * @request POST:/translate
     */
    translate: (reqDTO: TranslateTextReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/translate`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 翻译接口
     * @name Adjust
     * @summary 翻译纠正接口
     * @request POST:/translate/adjust
     */
    adjust: (reqDTO: AdjustTranslateReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/translate/adjust`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 翻译接口
     * @name Common
     * @summary 通用翻译接口
     * @request POST:/translate/common
     */
    common: (reqDTO: TranslateCommonTextReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/translate/common`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  validate = {
    /**
     * No description
     *
     * @tags 商品入库验证
     * @name ProductInfo
     * @summary 国家站商品信息
     * @request GET:/validate/product/info
     */
    productInfo: (
      query?: {
        /**
         * 1688上【 ID
         * @format int64
         */
        offerId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseProductDetailResponse, any>({
        path: `/validate/product/info`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品入库验证
     * @name ProductInsert
     * @summary 商品入库验证接口-验证通过后入库
     * @request POST:/validate/product/insert
     */
    productInsert: (detail: ProductDetailSaveReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/validate/product/insert`,
        method: "POST",
        body: detail,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品入库验证
     * @name ProductInsertNew
     * @summary 商品入库验证接口-验证通过后入库(新)
     * @request POST:/validate/product/insert/new
     */
    productInsertNew: (detail: ProductDetailSaveReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/validate/product/insert/new`,
        method: "POST",
        body: detail,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品入库验证
     * @name ProductWordSearch
     * @summary 国家站词搜接口
     * @request POST:/validate/product/wordSearch
     */
    productWordSearch: (reqDTO: KeyWordSearchReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageSearchProductRespDTO, any>({
        path: `/validate/product/wordSearch`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
}
