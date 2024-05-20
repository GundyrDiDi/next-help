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

/**
 * ActivityPriceReqDTO
 * 价格配置
 */
export interface ActivityPriceReqDTO {
  combinationNum?: string;
  /**
   * 开始时间
   * @format date-time
   */
  endDate?: string;
  /** 阶梯价格 */
  ladderPrices?: LadderPrice[];
  lastDefaultLadderPrices?: number;
  /** 活动价格 */
  price?: number;
  /**
   * 开始时间
   * @format date-time
   */
  startDate?: string;
}

/** AddAdditionTemplateReqDTO */
export interface AddAdditionTemplateReqDTO {
  additionIdList?: number[];
  additionTemplateImg?: string;
  /** @format int32 */
  systemSource?: number;
}

/** AddTransportationAttributesDTO */
export interface AddTransportationAttributesDTO {
  /** 异常原因编码 */
  abnormalReasonCode?: string;
  /** 运输属性英文名称 */
  attributeEnName?: string;
  /** 运输属性日文名称 */
  attributeJpName?: string;
  /** 运输属性英文名称 */
  attributeKoName?: string;
  /** 运输属性中文名称 */
  attributeName?: string;
  /**
   * 是否可以发货:  0 是  1否
   * @format int32
   */
  enableOutBound?: number;
}

/**
 * AdditionAmtResultVO
 * 附加项计算结果
 */
export interface AdditionAmtResultVO {
  /** 附加项明细 */
  additionPriceResult?: AdditionPriceResultVO[];
  /** 汇率 */
  exchangeRate?: number;
  /** 总金额(外币) */
  totalAmt?: number;
  /** 总金额(人民币) */
  totalAmtCn?: number;
}

/**
 * AdditionCalculateConfigReqDTO
 * 扣费依据
 */
export interface AdditionCalculateConfigReqDTO {
  /** 价格配置 */
  activityPriceReqDTOList?: ActivityPriceReqDTO[];
  /** 适用类型,逗号分隔;  */
  adaptType?: string;
  /**
   * 扣费依据id 接口中获取
   * @format int32
   */
  calculateConfigId?: number;
  combinationFeeRespDTO?: CombinationFeeRespDTO;
  /** 定价 */
  cost?: number;
  /**
   * 费用类型 0 金额 1 百分比
   * @format int32
   */
  costType?: number;
  /** 针对扣费依据额外填写数据:库存保管费和包裹滞留费填写免费天数 */
  data?: string;
  /**
   * 价格类型 0:固定价 1:阶梯价
   * @format int32
   */
  priceType?: number;
  spotCheckConfigDTOList?: SpotCheckConfigDTO[];
  /** @format int32 */
  spotCheckFlag?: number;
}

/** AdditionCalculateConfigRespDTO */
export interface AdditionCalculateConfigRespDTO {
  /** @format int32 */
  additionCalculateConfigId?: number;
  /** @format date-time */
  createTime?: string;
  formula?: string;
  /** @format int32 */
  inputType?: number;
  name?: string;
  remark?: string;
  /** @format date-time */
  updateTime?: string;
}

/**
 * AdditionConfigAddDTO
 * 新增附加项参数
 */
export interface AdditionConfigAddDTO {
  /**
   * 附加项Code
   * @format int32
   */
  additionCode?: number;
  /**
   * 附加项ID
   * @format int32
   */
  additionId?: number;
  /** 扣费依据 */
  calculateConfigReqDTO?: AdditionCalculateConfigReqDTO;
  /** @format date-time */
  endDate?: string;
  /** 关联会员等级 */
  membershipReqDTOList?: ConfigMembershipReqDTO[];
  /** @format int32 */
  orderType?: number;
  /** @format int32 */
  productType?: number;
  /** 参考成本 没有则为0 */
  referenceCost?: number;
  /** @format date-time */
  startDate?: string;
  /** 站点code */
  stationCode?: string;
  /**
   * 系统来源 1-D2C; 2-B2B
   * @format int32
   */
  systemSource?: number;
  /** @format int64 */
  userId?: number;
  userName?: string;
  /** 关联用户信息 */
  userReqDTOList?: ConfigUserReqDTO[];
}

/**
 * AdditionConfigAfterSaleReason
 * 售后原因表
 */
export interface AdditionConfigAfterSaleReason {
  /**
   * 主键
   * @format int64
   */
  additionConfigAfterSaleReasonId?: number;
  /** 售后原因 */
  afterSaleReason?: string;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/** AdditionConfigDTO */
export interface AdditionConfigDTO {
  /** @format int32 */
  additionId?: number;
  additionName?: string;
  cost?: number;
  /** @format int32 */
  costType?: number;
}

/** AdditionConfigEditDTO */
export interface AdditionConfigEditDTO {
  /** @format int32 */
  additionConfigId?: number;
  /** 扣费依据 */
  calculateConfigReqDTO?: AdditionCalculateConfigReqDTO;
  /** @format date-time */
  endDate?: string;
  membershipReqDTOList?: ConfigMembershipReqDTO[];
  /** @format int32 */
  orderType?: number;
  /** @format int32 */
  productType?: number;
  referenceCost?: number;
  /** @format date-time */
  startDate?: string;
  /** @format int64 */
  userId?: number;
  userName?: string;
  userReqDTOList?: ConfigUserReqDTO[];
}

/** AdditionConfigEditStatusDTO */
export interface AdditionConfigEditStatusDTO {
  /** @format int32 */
  additionConfigId?: number;
  /** @format int32 */
  status?: number;
}

/**
 * AdditionConfigPublic
 * 公共配置表
 */
export interface AdditionConfigPublic {
  /**
   * 主键
   * @format int64
   */
  additionConfigPublicId?: number;
  /** 配置类型 */
  configType?: string;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 说明 */
  mark?: string;
  /** 名称 */
  name?: string;
  /** 参数配置 */
  parameterConfiguration?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  /** 费率%或者x值 */
  value?: number;
}

/** AdditionConfigPublicListRespDTO */
export interface AdditionConfigPublicListRespDTO {
  /** @format int64 */
  additionConfigPublicId?: number;
  configType?: string;
  /** @format date-time */
  createTime?: string;
  deleteFlag?: boolean;
  mark?: string;
  name?: string;
  parameterConfiguration?: string;
  /** @format date-time */
  updateTime?: string;
  value?: number;
}

/** AdditionConfigReqDTO */
export interface AdditionConfigReqDTO {
  /** @format int32 */
  actualDeductionNode?: number;
  additionCode?: string;
  additionConfigIdList?: number[];
  /** @format int32 */
  additionId?: number;
  /** @format int32 */
  additionScene?: number;
  /** @format int32 */
  calculateConfigId?: number;
  /** @format int64 */
  customerId?: number;
  /** @format int32 */
  deductionNode?: number;
  /** @format date-time */
  endDate?: string;
  /** @format int64 */
  membershipId?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  priceException?: number;
  sorts?: ISortFieldEnum[];
  /** @format date-time */
  startDate?: string;
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
  /** @format int32 */
  status?: number;
  /** @format int32 */
  systemSource?: number;
  unificationCustomerFullName?: string;
}

/** AdditionConfigRespDTO */
export interface AdditionConfigRespDTO {
  activityPriceReqDTOList?: ActivityPriceReqDTO[];
  /** @format int32 */
  actualDeductionNode?: number;
  actualDeductionNodeName?: string;
  adaptType?: string;
  /** @format int32 */
  additionCode?: number;
  /** @format int32 */
  additionConfigId?: number;
  /** @format int32 */
  additionId?: number;
  additionName?: string;
  additionNameJp?: string;
  /** @format int32 */
  additionScene?: number;
  calculateConfigFormula?: string;
  /** @format int32 */
  calculateConfigId?: number;
  calculateConfigName?: string;
  /** @format int32 */
  cateStatus?: number;
  combinationFeeRespDTO?: CombinationFeeRespDTO;
  cost?: number;
  /** @format int32 */
  costType?: number;
  /** @format date-time */
  createTime?: string;
  data?: string;
  /** @format int32 */
  deductionNode?: number;
  deductionNodeName?: string;
  documentUrl?: string;
  /** @format date-time */
  endDate?: string;
  /** @format int32 */
  extraStatus?: number;
  firstCateCode?: string;
  firstCateName?: string;
  membershipReqDTOList?: ConfigMembershipRespDTO[];
  /** @format int32 */
  orderType?: number;
  priceData?: string;
  /** @format int32 */
  priceException?: number;
  /** @format int32 */
  priceType?: number;
  /** @format int32 */
  productType?: number;
  referenceCost?: number;
  secondCateCode?: string;
  secondCateName?: string;
  spotCheckConfigDTOList?: SpotCheckConfigDTO[];
  spotCheckData?: string;
  /** @format int32 */
  spotCheckFlag?: number;
  /** @format date-time */
  startDate?: string;
  /** @format int32 */
  status?: number;
  /** @format int32 */
  systemSource?: number;
  /** @format int32 */
  type?: number;
  /** @format date-time */
  updateTime?: string;
  /** @format int32 */
  userFill?: number;
  /** @format int64 */
  userId?: number;
  userName?: string;
  userReqDTOList?: ConfigUserRespDTO[];
}

/** AdditionConfigSellingPriceImportDTO */
export interface AdditionConfigSellingPriceImportDTO {
  /** @format int32 */
  bizType?: number;
  fileUrl?: string;
  manageId?: string;
  manageName?: string;
  templateCode?: string;
}

/**
 * AdditionConfigSellingPriceListVO
 * 结算中心-配置项-销售价配置-分页列表实体类
 */
export interface AdditionConfigSellingPriceListVO {
  /**
   * 销售价配置表主键
   * @format int64
   */
  additionConfigSellingPriceId?: number;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 说明 */
  explanation?: string;
  /** 参数配置 */
  parameterConfiguration?: string;
  /** 率值 */
  rate?: number;
  /** 名称类型；1-1：销售价让利比率配置；1-2：国内运费溢价比率配置；2-1：市场购商品价格溢价比率配置  3-1: 精选货盘会员折扣价配置 */
  sellingPriceNameType?: string;
  /**
   * 是否启用 0:否 1:是
   * @format int32
   */
  status?: number;
  /** 适用对象类型；1：透明购，2：市场购 */
  suitableType?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/** AdditionConfigSellingPriceQueryDTO */
export interface AdditionConfigSellingPriceQueryDTO {
  /** @format int64 */
  additionConfigSellingPriceId?: number;
  /** @format int64 */
  additionConfigSellingPriceSettingId?: number;
  /** 是否配置商品 */
  configGoods?: boolean;
  dataSourceName?: string;
  deleteFlag?: boolean;
  goodsId?: string;
  goodsName?: string;
  goodsSku?: string;
  goodsUrl?: string;
  orderByCreateTimeDesc?: boolean;
  priceExceptionTypeList?: number[];
  priceExceptionTypeStr?: string;
  /** @format int32 */
  priceType?: number;
  sellingPriceNameType?: string;
  shopCode?: string;
  shopName?: string;
  shopUrl?: string;
  userId?: string;
  userIds?: string[];
  userName?: string;
  userUnificationName?: string;
}

/**
 * AdditionConfigSellingPriceSettingAddVO
 * 结算中心-配置项-销售价配置设置-新增实体类
 */
export interface AdditionConfigSellingPriceSettingAddVO {
  /**
   * 销售价配置表主键
   * @format int64
   */
  additionConfigSellingPriceId?: number;
  /** 基准值 */
  benchmarkValue?: number;
  /**
   * 有效期结束时间
   * @format date-time
   */
  endTime?: string;
  /** 商品信息集合 */
  goodsInfos?: GoodsInfo[];
  /**
   * 价格类型：0折扣率 1折扣价
   * @format int32
   */
  priceType?: number;
  /**
   * 报价方式：0阶梯价 1非阶梯价
   * @format int32
   */
  quoteWay?: number;
  /** 区间配置集合 */
  rangeInfos?: RangeInfoDTO[];
  /** 率值 */
  rate?: number;
  /** 名称类型；1-1：销售价让利比率配置；1-2：国内运费溢价比率配置；2-1：市场购商品价格溢价比率配置 */
  sellingPriceNameType?: string;
  /**
   * 配置类型：0按店铺 1按商品 2按sku
   * @format int32
   */
  settingType?: number;
  /** 店铺信息集合 */
  shopInfos?: ShopInfo[];
  /** sku信息集合 */
  skuInfos?: SkuInfo[];
  /**
   * 有效期开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 状态：0禁用 1启用
   * @format int32
   */
  status?: number;
  /** 用户信息集合 */
  userInfos?: UserInfo[];
}

/**
 * AdditionConfigSellingPriceSettingDetail
 * 销售价配置设置详情表
 */
export interface AdditionConfigSellingPriceSettingDetail {
  /**
   * 销售价配置表主键
   * @format int64
   */
  additionConfigSellingPriceId?: number;
  /**
   * 销售价配置表设置详情主键
   * @format int64
   */
  additionConfigSellingPriceSettingDetailId?: number;
  /**
   * 销售价配置表设置主键
   * @format int64
   */
  additionConfigSellingPriceSettingId?: number;
  /** 基准值 */
  benchmarkValue?: number;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 数仓商品主 */
  goodsId?: string;
  /** 商品图片 */
  goodsImageUrl?: string;
  /** 数仓商品名称 */
  goodsName?: string;
  /** 商品价格 */
  goodsPrice?: number;
  /** 商品sku */
  goodsSku?: string;
  /** 商品url */
  goodsUrl?: string;
  /**
   * 是否删除：0未删除 1已删除
   * @format int32
   */
  isDeleted?: number;
  /** 价格异常信息 */
  priceExceptionInfo?: string;
  /**
   * 价格类型：0折扣率 1折扣价
   * @format int32
   */
  priceType?: number;
  /**
   * 报价方式：0阶梯价 1非阶梯价
   * @format int32
   */
  quoteWay?: number;
  /** 区间配置 */
  rangeConfig?: string;
  /** 率值 */
  rate?: number;
  /** 名称类型；1-1：销售价让利比率配置；1-2：国内运费溢价比率配置；2-1：市场购商品价格溢价比率配置 */
  sellingPriceNameType?: string;
  /**
   * 配置类型：0按店铺 1按商品 2按sku
   * @format int32
   */
  settingType?: number;
  /** 店铺code集合 */
  shopCode?: string;
  /** 店铺名称集合 */
  shopName?: string;
  /** 店铺url集合 */
  shopUrl?: string;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 状态：0禁用 1启用
   * @format int32
   */
  status?: number;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  /** 用户主键 */
  userId?: string;
  /** 用户名称 */
  userName?: string;
  /** 统一客户全名集合 */
  userUnificationName?: string;
}

/**
 * AdditionConfigSellingPriceSettingFreightConfigUpsertVO
 * 结算中心-配置项-销售价配置设置-新增实体类
 */
export interface AdditionConfigSellingPriceSettingFreightConfigUpsertVO {
  /**
   * 销售价配置表主键
   * @format int64
   */
  additionConfigSellingPriceId?: number;
  /** 率值 */
  rate?: number;
  /** 名称类型；1-1：销售价让利比率配置；1-2：国内运费溢价比率配置；2-1：市场购商品价格溢价比率配置 */
  sellingPriceNameType?: string;
}

/**
 * AdditionConfigSellingPriceSettingListVO
 * 结算中心-配置项-销售价配置设置-分页列表响应实体类
 */
export interface AdditionConfigSellingPriceSettingListVO {
  /**
   * 销售价配置表主键
   * @format int64
   */
  additionConfigSellingPriceId?: number;
  /**
   * 设置主键
   * @format int64
   */
  additionConfigSellingPriceSettingId?: number;
  /** 基准值 */
  benchmarkValue?: number;
  /** 是否配置商品 */
  configGoods?: boolean;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  detailList?: AdditionConfigSellingPriceSettingDetail[];
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 商品主键，使用英文逗号分割 */
  goodsIds?: string;
  /** 商品名称，使用英文逗号分割 */
  goodsNames?: string;
  /** 商品sku集合，使用英文逗号分割 */
  goodsSkus?: string;
  /** 商品url集合，使用英文逗号分割 */
  goodsUrls?: string;
  /**
   * 是否删除：0未删除 1已删除
   * @format int32
   */
  isDeleted?: number;
  priceExceptionInfoList?: PriceExceptionInfoVO[][];
  /** 价格异常信息 */
  priceExceptionInfos?: string;
  /**
   * 价格类型：0折扣率 1折扣价
   * @format int32
   */
  priceType?: number;
  /**
   * 报价方式：0阶梯价 1非阶梯价
   * @format int32
   */
  quoteWay?: number;
  /** 区间配置 */
  rangeConfig?: string;
  rangeInfos?: RangeInfoDTO[];
  /** 率值 */
  rate?: number;
  /** 名称类型；1-1：销售价让利比率配置；1-2：国内运费溢价比率配置；2-1：市场购商品价格溢价比率配置 */
  sellingPriceNameType?: string;
  /**
   * 配置类型：0按店铺 1按商品 2按sku
   * @format int32
   */
  settingType?: number;
  /** 店铺code集合，使用英文逗号分割 */
  shopCodes?: string;
  /** 店铺名称集合，使用英文逗号分割 */
  shopNames?: string;
  /** 店铺url集合，使用英文逗号分割 */
  shopUrls?: string;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 状态：0禁用 1启用
   * @format int32
   */
  status?: number;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  /** 用户主键，使用英文逗号分割 */
  userIds?: string;
  /** 用户名称，使用英文逗号分割 */
  userNames?: string;
  /** 统一客户全名集合，使用英文逗号分割 */
  userUnificationNames?: string;
}

/**
 * AdditionConfigSellingPriceSettingLog
 * 销售价格配置设置日志表
 */
export interface AdditionConfigSellingPriceSettingLog {
  /**
   * 销售价配置表主键
   * @format int64
   */
  additionConfigSellingPriceId?: number;
  /**
   * 销售价配置设置表主键
   * @format int64
   */
  additionConfigSellingPriceSettingId?: number;
  /**
   * 主键
   * @format int64
   */
  additionConfigSellingPriceSettingLogId?: number;
  /** 变更内容 */
  changeContent?: string;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * 操作类型 1：新增；2：编辑；3：复制；4：删除
   * @format int32
   */
  operateType?: number;
  /** 操作人id */
  operateUserId?: string;
  /** 操作人名称 */
  operateUserName?: string;
  /**
   * 操作时间
   * @format date-time
   */
  operateUserTime?: string;
  /** 名称类型；1-1：销售价让利比率配置；1-2：国内运费溢价比率配置；2-1：市场购商品价格溢价比率配置 1-3：销售价配置 */
  sellingPriceNameType?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/** AdditionConfigSellingPriceSettingQueryDTO */
export interface AdditionConfigSellingPriceSettingQueryDTO {
  /** @format int64 */
  additionConfigSellingPriceId?: number;
  /** @format int64 */
  additionConfigSellingPriceSettingId?: number;
  /** 是否配置商品 */
  configGoods?: boolean;
  deleteFlag?: boolean;
  goodsId?: string;
  goodsName?: string;
  goodsSku?: string;
  goodsUrl?: string;
  orderByCreateTimeDesc?: boolean;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  priceExceptionTypeList?: number[];
  /** @format int32 */
  priceType?: number;
  /** @format int32 */
  quoteWay?: number;
  sellingPriceNameType?: string;
  shopCode?: string;
  shopName?: string;
  shopUrl?: string;
  sorts?: ISortFieldEnum[];
  /** @format int32 */
  startIndex?: number;
  /** @format int32 */
  status?: number;
  userId?: string;
  userIds?: string[];
  userName?: string;
  userUnificationName?: string;
}

/**
 * AdditionConfigSellingPriceSettingUpdateVO
 * 结算中心-配置项-销售价配置设置-更新实体类
 */
export interface AdditionConfigSellingPriceSettingUpdateVO {
  /**
   * 销售价配置表主键
   * @format int64
   */
  additionConfigSellingPriceId?: number;
  /**
   * 销售价配置设置主键
   * @format int64
   */
  additionConfigSellingPriceSettingId?: number;
  /** 基准值 */
  benchmarkValue?: number;
  /**
   * 有效期结束时间
   * @format date-time
   */
  endTime?: string;
  /** 商品信息集合 */
  goodsInfos?: GoodsInfo[];
  /**
   * 价格类型：0折扣率 1折扣价
   * @format int32
   */
  priceType?: number;
  /**
   * 报价方式：0阶梯价 1非阶梯价
   * @format int32
   */
  quoteWay?: number;
  /** 区间配置集合 */
  rangeInfos?: RangeInfoDTO[];
  /** 率值 */
  rate?: number;
  /** 名称类型；1-1：销售价让利比率配置；1-2：国内运费溢价比率配置；2-1：市场购商品价格溢价比率配置 */
  sellingPriceNameType?: string;
  /**
   * 配置类型：0按店铺 1按商品 2按sku
   * @format int32
   */
  settingType?: number;
  /** 店铺信息集合 */
  shopInfos?: ShopInfo[];
  /** sku信息集合 */
  skuInfos?: SkuInfo[];
  /**
   * 有效期开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 状态：0禁用 1启用
   * @format int32
   */
  status?: number;
  /** 用户信息集合 */
  userInfos?: UserInfo[];
}

/** AdditionDeliveryConfigDTO */
export interface AdditionDeliveryConfigDTO {
  /** @format int32 */
  additionCalculateConfigId?: number;
  /** @format int32 */
  additionConfigId?: number;
  /** @format int32 */
  additionId?: number;
  cost?: number;
  /** @format int32 */
  costType?: number;
  /** @format int32 */
  num?: number;
}

/** AdditionDeliveryDTO */
export interface AdditionDeliveryDTO {
  configDTOList?: AdditionDeliveryConfigDTO[];
  deliveryTaskCode?: string;
}

/** AdditionEventDTO */
export interface AdditionEventDTO {
  additionDeliveryDTO?: AdditionDeliveryDTO;
  additionNodeEnum?:
    | "PRODUCT_SHELVES"
    | "OEM_APPLY"
    | "PRODUCT_PURCHASE"
    | "PRODUCT_DEFECTIVE_RETURN"
    | "PRODUCT_REMAKE"
    | "PRODUCT_WAREHOUSING"
    | "COMBINATION_COMPLETE"
    | "PRODUCT_CHECK"
    | "PRODUCT_PACKAGE"
    | "PRODUCT_DELIVER";
  additionProductDTO?: AdditionProductDTO;
  bizId?: string;
  bizType?:
    | "PRODUCT_ORDER_PAY"
    | "RECHARGE"
    | "TRANSFER"
    | "WITHDRAW"
    | "PURCHASE"
    | "PURCHASE_FREIGHT"
    | "BILL_OTHER_DEDUCT"
    | "BILL_WEIGHT_DIFF_DEDUCT"
    | "GJFH_FREIGHT_FEE_DEDUCT"
    | "BANK_CARD_RECHARGE"
    | "PAYONEER_RECHARGE"
    | "GJFH_ADDITION_FEE_DEDUCT"
    | "SETTLEMENT_DELIVER_NO"
    | "SETTLEMENT_DEFAULT_NO"
    | "WALLET_WITHDRAW"
    | "MEMBERSHIP_WALLET_CHARGE"
    | "SEARCH_SOURCE_ORDER_PAY"
    | "SEARCH_SOURCE_ORDER_REFUND"
    | "REMAKE_FREEZE"
    | "UNFREEZE"
    | "PRODUCT_ADD_ONS"
    | "ORDER_SETTLEMENT"
    | "COMBINATION_SERVICE_CHARGE"
    | "COMBINATION_PRODUCT_ADDITIONAL_SETTLEMENT"
    | "REMAKE_FREEZE_ADDITIONAL_ITEMS"
    | "PRODUCT_ORDER_SETTLEMENT"
    | "REFUND_CHARGE"
    | "STOCKIN_CHARGE"
    | "REPAYMENT"
    | "CUSTOMER_REFUND"
    | "AFTER_SALE_REFUND"
    | "WITHDRAW_REFUSED"
    | "RECHARGE_REFUSED"
    | "RECHARGE_PAYPAL"
    | "CUSTOMER_BILL_PAY"
    | "PRODUCT_ADD_ONS_TRANSFER"
    | "GJFH_FREIGHT_FEE_DEDUCT_REFUND"
    | "RECHARGE_CANCEL"
    | "RECHARGE_WF"
    | "RECHARGE_WF_AUDIT"
    | "PROMOTION_RECHARGE"
    | "MULTI_FREEZE"
    | "COMBINATION_SERVICE_FREEZE_CHARGE"
    | "INV_AGE_FEE"
    | "PKG_STAND_FEE"
    | "FEE_ACTUAL_DEDUCTION"
    | "FEE_ACTUAL_REFUND";
  checkMaxRemakeNum?: boolean;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  eventEnum?: "DEFAULT_ADDITION" | "DELIVER_ADDITION" | "PRODUCT_ADDITION" | "PRODUCT_ADDITION_QUALITY_TRANSFORM";
  fundFlowType?:
    | "RECHARGE"
    | "WITHDRAW"
    | "PRODUCT_SETTLEMENT"
    | "EXPRESS_AMOUNT"
    | "IL_CHARGE"
    | "SERVICE_CHARGE"
    | "AFTER_SALE_REFUND"
    | "AMOUNT_FREEZE"
    | "AMOUNT_UNFREEZE"
    | "TRANSFER_IN"
    | "TRANSFER_OUT"
    | "MEMBERSHIP_FEE"
    | "IL_CHARGE_WEIGHT_FEE"
    | "IL_CHARGE_SERVICE_FEE"
    | "COMMODITY_SERVICE_FEE"
    | "SHIPPING_SERVICE_FEE"
    | "SEARCH_SOURCE_CHARGE"
    | "SEARCH_SOURCE_CHARGE_REFUND"
    | "REPAYMENT"
    | "CUSTOMER_REFUND"
    | "WITHDRAW_REFUSED"
    | "RECHARGE_REFUSED"
    | "CUSTOMER_BILL_PAY"
    | "REFUND_DOMESTIC_FREIGHT"
    | "AMOUNT_REMAKE_FREEZE"
    | "COMMODITY_SERVICE_FEE_QUALITY_TRANSFORM"
    | "AMOUNT_REMAKE_OVERFLOW_FREEZE"
    | "IL_CHARGE_REFUND"
    | "RECHARGE_CANCEL"
    | "PROMOTION_RECHARGE"
    | "FEE_DEDUCTION"
    | "FEE_ACTUAL_DEDUCTION"
    | "FEE_ACTUAL_REFUND";
  /** @format int64 */
  mainCustomerId?: number;
  messageId?: string;
  /** @format int32 */
  oemOrderType?: number;
  orderNo?: string;
  platformOrderNo?: string;
  productRespDTOList?: AdditionProductRespDTO[];
  /** @format int32 */
  productType?: number;
  /** @format int32 */
  systemSource?: number;
  /** @format int32 */
  type?: number;
}

/** AdditionNodeRespDTO */
export interface AdditionNodeRespDTO {
  /** @format int32 */
  additionNodeId?: number;
  /** @format date-time */
  createTime?: string;
  name?: string;
  /** @format date-time */
  updateTime?: string;
}

/**
 * AdditionPriceResultVO
 * 附加项价格明细
 */
export interface AdditionPriceResultVO {
  /** 附加项中文name */
  additionCnName?: string;
  /**
   * 附加项code
   * @format int32
   */
  additionCode?: number;
  /** 附加项name */
  additionName?: string;
  /** 返回码 */
  code?: string;
  /** 错误原因 */
  errorMsg?: string;
  /**
   * 数量
   * @format int64
   */
  num?: number;
  /** 单价 */
  price?: number;
  /** 总价 */
  totalPrice?: number;
}

/** AdditionProductDTO */
export interface AdditionProductDTO {
  additionConfigDTO?: AdditionConfigDTO;
  productDTOList?: ProductDTO[];
}

/** AdditionProductRespDTO */
export interface AdditionProductRespDTO {
  data?: string;
  /** @format int32 */
  noDeductionFlag?: number;
  /** @format int32 */
  num?: number;
  price?: number;
  productImg?: string;
  /** @format int32 */
  productNum?: number;
  productPropertiesName?: string;
  productSku?: string;
  productTitle?: string;
  systemOrderNo?: string;
}

/** AdditionQueryReqDTO */
export interface AdditionQueryReqDTO {
  /** @format int32 */
  additionCode?: number;
  /** @format int32 */
  additionId?: number;
  additionIdList?: number[];
  additionName?: string;
  stationCode?: string;
}

/** AdditionRespDTO */
export interface AdditionRespDTO {
  /** @format int32 */
  actualDeductionNode?: number;
  actualDeductionNodeName?: string;
  /** @format int32 */
  additionCode?: number;
  additionGroup?: string[];
  /** @format int32 */
  additionId?: number;
  additionName?: string;
  additionNameJp?: string;
  /** @format int32 */
  additionScene?: number;
  basisDataList?: BasisData[];
  /** @format int32 */
  bizType?: number;
  /** @format date-time */
  createTime?: string;
  deductionBasis?: string;
  deductionBasisData?: string;
  /** @format int32 */
  deductionBasisType?: number;
  /** @format int32 */
  deductionNode?: number;
  deductionNodeName?: string;
  deductionType?: string;
  deductionTypeName?: string;
  gifUrl?: string;
  imageUrl?: string;
  /** @format int32 */
  ingredientStatus?: number;
  linkCancelOptionList?: number[];
  linkMutexOptionList?: number[];
  linkSelectionOptionList?: number[];
  remark?: string;
  stationCode?: string;
  /** @format date-time */
  updateTime?: string;
}

/** AdditionSettlementDTO */
export interface AdditionSettlementDTO {
  /** @format int32 */
  additionConfigId?: number;
  /** @format int32 */
  additionId?: number;
  additionName?: string;
  additionNameJp?: string;
  bizId?: string;
  /** @format int32 */
  calculateConfigId?: number;
  changeAmount?: number;
  walletProductDTOList?: WalletProductDTO[];
}

/** AdditionSettlementDeliveryRespDTO */
export interface AdditionSettlementDeliveryRespDTO {
  /** @format int32 */
  additionId?: number;
  additionName?: string;
  additionNameJp?: string;
  /** @format int64 */
  additionSettlementDeliveryId?: number;
  additionSettlementDeliveryNo?: string;
  /** @format int64 */
  additionSettlementId?: number;
  cost?: number;
  /** @format int32 */
  costType?: number;
  /** @format date-time */
  createTime?: string;
  deliveryTaskCode?: string;
  money?: number;
  /** @format int32 */
  num?: number;
}

/** AdditionSettlementGoodsDetailRespDTO */
export interface AdditionSettlementGoodsDetailRespDTO {
  /** @format int32 */
  additionCode?: number;
  /** @format int32 */
  additionId?: number;
  additionNameJp?: string;
  /** @format int32 */
  additionNode?: number;
  /** 费用 */
  cost?: number;
  /**
   * 费用类型 0 金额 1 百分比
   * @format int32
   */
  costType?: number;
  /** @format date-time */
  createTime?: string;
  data?: string;
  /** @format int32 */
  num?: number;
  /** @format int32 */
  oemOrderType?: number;
  platformOrderNo?: string;
  price?: number;
  /** @format int32 */
  productNum?: number;
  /** @format int32 */
  productType?: number;
  settleMoney?: number;
  settlePrice?: number;
  systemOrderNo?: string;
  /** @format int32 */
  type?: number;
}

/** AdditionTemplateItemRespDTO */
export interface AdditionTemplateItemRespDTO {
  /** @format int32 */
  additionConfigId?: number;
  /** @format int32 */
  additionId?: number;
  additionName?: string;
  additionNameJp?: string;
  /** @format int32 */
  additionTemplateId?: number;
  /** @format int64 */
  additionTemplateItemId?: number;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  createTime?: string;
  imageUrl?: string;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  updateTime?: string;
}

/** AdditionTemplateRespDTO */
export interface AdditionTemplateRespDTO {
  /** @format int32 */
  additionTemplateId?: number;
  additionTemplateImg?: string;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  createTime?: string;
  items?: AdditionTemplateItemRespDTO[];
  /** @example "yyyy-MM-dd HH:mm:ss" */
  updateTime?: string;
}

/** AdditionUpdateReqDTO */
export interface AdditionUpdateReqDTO {
  additionGroup?: number[];
  /** @format int32 */
  additionId?: number;
  gifUrl?: string;
  imageUrl?: string;
  /** @format int32 */
  ingredientStatus?: number;
  linkCancelOptionList?: number[];
  linkMutexOptionList?: number[];
  linkSelectionOptionList?: number[];
}

/** Amount */
export interface Amount {
  /** 币种，为符合ISO-4217规范的三字母货币代码 */
  currency?: string;
  /** 数额，为基于当前货币最小单位的数额 */
  value?: string;
}

/**
 * AmountType
 * 金额变动类型表
 */
export interface AmountType {
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** @format int32 */
  id?: number;
  /** 名称 */
  name?: string;
  /** 日文名称 */
  nameJp?: string;
  /** 备注 */
  remark?: string;
  /**
   * 类型
   * @format int32
   */
  type?: number;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/** AreaDTO */
export interface AreaDTO {
  children?: AreaDTO[];
  /** @format int64 */
  intAreaId?: number;
  label?: string;
  /** @format int64 */
  parentId?: number;
  /** @format int32 */
  type?: number;
}

/** AreaPriceDTO */
export interface AreaPriceDTO {
  areaList?: number[];
  price?: number;
}

/** AreaPriceVO */
export interface AreaPriceVO {
  /** 偏远地区name */
  areaNameList?: string[];
  /** 偏远地区运费 */
  price?: number;
}

/** AttributeDeliveryAmountLimitDTO */
export interface AttributeDeliveryAmountLimitDTO {
  /** 属性编码 */
  attributeCode?: string;
  /**
   * 属性限制
   * @format int32
   */
  deliveryLimitAmount?: number;
}

/**
 * AttributeVO
 * 属性
 */
export interface AttributeVO {
  /**
   * 高(cm)
   * @format int64
   */
  height?: number;
  /**
   * 长(cm)
   * @format int64
   */
  length?: number;
  /**
   * 重量(克)
   * @format int64
   */
  weight?: number;
  /**
   * 宽(cm)
   * @format int64
   */
  width?: number;
}

/** AuditLogDTO */
export interface AuditLogDTO {
  /** 审核人id */
  auditId?: string;
  /** 审核人 */
  auditName?: string;
  /**
   * 审核时间
   * @format date-time
   */
  auditTime?: string;
}

/** AuthorizePaymentCaptureDTO */
export interface AuthorizePaymentCaptureDTO {
  authorizationId?: string;
  orderId?: string;
}

/** AuthorizePaymentOrderDTO */
export interface AuthorizePaymentOrderDTO {
  /** @format int64 */
  creditCardId?: number;
  currencyCode?: string;
  /** @format int64 */
  customerId?: number;
  rechargeAmount?: number;
}

/**
 * BalanceRecharge
 * 余额充值
 */
export interface BalanceRecharge {
  /** 本公司接受银行名 */
  acceptBankName?: string;
  /**
   * 订单关联状态 0：未关联 1：部分关联  2：已关联
   * @format int32
   */
  associateStatus?: number;
  /** 已关联金额 */
  associatedAmount?: number;
  /** 审核日志列表 */
  auditLogList?: AuditLogDTO[];
  /**
   * 主键
   * @format int64
   */
  balanceRechargeId?: number;
  /** 审核状态：1-待初审;2-待终审；3-已通过；4-已拒绝; 5-充值失败; 6-系统确认中 */
  balanceRechargeStatus?: string;
  /** 银行卡开户网点编码 */
  bankBranchCode?: string;
  /** 银行卡开户网点名称 */
  bankBranchName?: string;
  /** 银行卡账号 */
  bankCardNo?: string;
  /**
   * 流水业务类型
   * @format int32
   */
  bizType?: number;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * 客户id
   * @format int64
   */
  customerId?: number;
  /** 客户名称 */
  customerName?: string;
  /** 删除标志 */
  deleteFlag?: boolean;
  /** 当前汇率 */
  exchangeRate?: number;
  /** 浮动后汇率 */
  exchangeRateFloat?: number;
  /**
   * 最终的财务到账时间
   * @format date-time
   */
  financeRechargeArrivalTime?: string;
  /** 财务对账金额(RMB) */
  financeRechargeCnyAmount?: number;
  /** 财务对账金额 */
  financeRechargeJpyAmount?: number;
  /** 流水号 */
  fundFlowNo?: string;
  /** 是否是充值 */
  isRecharge?: boolean;
  /** 国家code */
  nationCode?: string;
  /** 操作人id */
  operateUserId?: string;
  /** 操作人姓名 */
  operateUserName?: string;
  /**
   * 操作时间
   * @format date-time
   */
  operateUserTime?: string;
  /** 支付渠道：1-银行汇款；2-paypal；3-payoneer 4-PAYPAL_信用卡 5-WF银行卡充值 */
  payChannel?: string;
  /** 支付状态：1-未支付；2-支付成功 */
  payStatus?: string;
  /** payoneer订单id */
  payoneerOrderId?: string;
  /** paypal订单Id */
  paypalOrderId?: string;
  /**
   * 到账时间
   * @format date-time
   */
  rechargeArrivalTime?: string;
  /** 充值金额（RMB） */
  rechargeCnyAmount?: number;
  /**
   * 充值单据类型  1：进帐充值  2：撤销出账充值
   * @format int32
   */
  rechargeType?: number;
  /** 拒绝原因 */
  refuseReason?: string;
  /** 汇款金额 */
  remittanceAmount?: number;
  /** 汇款货币类型；JPY：日元；CNY：人民币；USD：美元 */
  remittanceCurrencyCode?: string;
  /**
   * 汇款日期
   * @format date-time
   */
  remittanceTime?: string;
  /** 汇款人银行英文名 */
  remitterBankEnName?: string;
  /** 汇款人银行名 */
  remitterBankName?: string;
  /** 汇款人公司名称 */
  remitterCompanyName?: string;
  /** 汇款人邮箱地址 */
  remitterEmail?: string;
  /** 汇款人姓名 */
  remitterName?: string;
  /** 汇款人姓名 */
  remitterNameConvert?: string;
  /** 汇款人国际 */
  remitterNation?: string;
  /** 汇款人姓氏 */
  remitterSurname?: string;
  /** 汇款人店铺主页入口 */
  remitterWebsiteUrl?: string;
  /**
   * 店铺id
   * @format int64
   */
  shopId?: number;
  /** 店铺名称 */
  shopName?: string;
  /** 站点code */
  stationCode?: string;
  /**
   * WF充值记录系统审核到期
   * @format date-time
   */
  systemConfirmEndTime?: string;
  /** 系统来源，1:d2c,2:b2b */
  systemSource?: string;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  /** 是否已经上传过凭证 */
  uploadedVoucher?: boolean;
  /**
   * 是否用于结汇 0： 无需结汇  1：需要结汇
   * @format int32
   */
  usedForExchange?: number;
  /** 凭证列表 */
  voucherList?: BalanceRechargeVoucher[];
  /** WF来账通知id */
  wfFundingId?: string;
  /** WF动账流水id */
  wfPayFlowId?: string;
  /**
   * 万里汇来账通知时间
   * @format date-time
   */
  wfVostroNotifyTime?: string;
  /**
   * 核销次数
   * @format int32
   */
  writeOffTimes?: number;
  /** 中银汇率 */
  zhongyinExchangeRate?: number;
}

/** BalanceRechargeApplyVO */
export interface BalanceRechargeApplyVO {
  acceptBankName?: string;
  balanceRechargeStatus?: string;
  /** 银行卡开户网点编码 */
  bankBranchCode?: string;
  /** 银行卡开户网点名称 */
  bankBranchName?: string;
  /** 银行卡账号 */
  bankCardNo?: string;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  exchangeRate?: number;
  exchangeRateFloat?: number;
  financeRechargeCnyAmount?: number;
  financeRechargeJpyAmount?: number;
  payChannel?: string;
  payStatus?: string;
  payoneerOrderId?: string;
  paypalOrderId?: string;
  /** @format date-time */
  rechargeArrivalTime?: string;
  rechargeCnyAmount?: number;
  remittanceAmount?: number;
  remittanceCurrencyCode?: string;
  /** @format date-time */
  remittanceTime?: string;
  remitterBankEnName?: string;
  remitterBankName?: string;
  remitterCompanyName?: string;
  remitterEmail?: string;
  remitterName?: string;
  remitterNation?: string;
  remitterSurname?: string;
  remitterWebsiteUrl?: string;
  systemSource?: string;
  voucherUrl?: string;
  zhongyinExchangeRate?: number;
}

/**
 * BalanceRechargeAuditVO
 * 余额充值-审核
 */
export interface BalanceRechargeAuditVO {
  /**
   * 主键
   * @format int64
   */
  balanceRechargeId?: number;
  /** 审核状态：1-待初审;2-待终审；3-已通过；4-已拒绝 */
  balanceRechargeStatus?: string;
  /**
   * 财务实际到账时间
   * @format date-time
   */
  financeRechargeArrivalTime?: string;
  /** 财务对账金额(RMB) */
  financeRechargeCnyAmount?: number;
  /** 财务对账金额 */
  financeRechargeJpyAmount?: number;
  /**
   * 到账时间
   * @format date-time
   */
  rechargeArrivalTime?: string;
  /** 拒绝原因 */
  refuseReason?: string;
  /** WF来账通知id */
  wfFundingId?: string;
}

/** BalanceRechargeCustomerIdCountDTO */
export interface BalanceRechargeCustomerIdCountDTO {
  /** @format int64 */
  customerId?: number;
  /** @format int32 */
  num?: number;
}

/**
 * BalanceRechargeLog
 * 余额充值日志
 */
export interface BalanceRechargeLog {
  /**
   * 充值记录id
   * @format int64
   */
  balanceRechargeId?: number;
  /**
   * 主键
   * @format int64
   */
  balanceRechargeLogId?: number;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 操作明细 */
  operateMark?: string;
  /**
   * 操作类型；1：初审；2：终审；3：返金 4:修改充值渠道
   * @format int32
   */
  operateType?: number;
  /** 客户id */
  operateUserId?: string;
  /** 客户名称 */
  operateUserName?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/** BalanceRechargeQueryVO */
export interface BalanceRechargeQueryVO {
  /**
   * 订单关联状态 0：未关联 1：部分关联  2：已关联
   * @format int32
   */
  associateStatus?: number;
  /**
   * 主键
   * @format int64
   */
  balanceRechargeId?: number;
  /** 审核状态：1-待初审;2-待终审；3-已通过；4-已拒绝 */
  balanceRechargeStatus?: string;
  /** 余额充值结束标志 */
  balanceRechargeStatusEndFlag?: boolean;
  /** 审核状态：1-待初审;2-待终审；3-已通过；4-已拒绝 */
  balanceRechargeStatusList?: string[];
  /** 银行卡开户网点编码 */
  bankBranchCode?: string;
  /** 银行卡账号 */
  bankCardNo?: string;
  /** 银行名称 */
  bankName?: string;
  /**
   * 客户id
   * @format int64
   */
  customerId?: number;
  /** 客户id */
  customerIdList?: number[];
  /** 客户名称 */
  customerName?: string;
  /** 删除标志 */
  deleteFlag?: boolean;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 最终财务到账日期
   * @format date-time
   */
  financeRechargeArrivalTimeEnd?: string;
  /**
   * 最终财务到账日期
   * @format date-time
   */
  financeRechargeArrivalTimeStart?: string;
  /**
   * 财务对账金额 0:未填写  1：已填写
   * @format int32
   */
  financeRechargeJpyAmount?: number;
  /** 国家code */
  nationCode?: string;
  /** 创建时间降序 */
  orderByCreateTimeDesc?: boolean;
  /** 到账时间降序 */
  orderByRemittanceTimeDesc?: boolean;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** 支付渠道：1-银行汇款；2-paypal；3-payoneer 4-信用卡 5-万里汇 */
  payChannel?: string;
  /** 支付渠道：1-银行汇款；2-paypal；3-payoneer 4-信用卡 5-万里汇 */
  payChannelList?: string[];
  /** 支付状态：1-未支付；2-支付成功 */
  payStatus?: string;
  /** 充值金额-结束 */
  rechargeCnyAmountEnd?: number;
  /** 充值金额-起始 */
  rechargeCnyAmountStart?: number;
  /**
   * 充值单据类型  1：进帐充值  2：撤销出账充值
   * @format int32
   */
  rechargeType?: number;
  /** 汇款金额 */
  remittanceAmount?: number;
  /** 汇款金额-结束 */
  remittanceAmountEnd?: number;
  /** 汇款金额-起始 */
  remittanceAmountStart?: number;
  /**
   * 汇款到账日期
   * @format date-time
   */
  remittanceArrivalTimeEnd?: string;
  /**
   * 汇款到账日期
   * @format date-time
   */
  remittanceArrivalTimeStart?: string;
  /** 汇款货币类型；JPY：日元；CNY：人民币；USD：美元 */
  remittanceCurrencyCode?: string;
  /**
   * 汇款日期
   * @format date-time
   */
  remittanceTimeEnd?: string;
  /**
   * 汇款日期
   * @format date-time
   */
  remittanceTimeStart?: string;
  /** 汇款人银行英文名 */
  remitterBankEnName?: string;
  /** 汇款人姓名 */
  remitterName?: string;
  /** 汇款人姓名-转换后 */
  remitterNameConvert?: string;
  sorts?: ISortFieldEnum[];
  /** @format int32 */
  startIndex?: number;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /** 站点code */
  stationCode?: string;
  /** 客户id */
  superCustomerIdList?: number[];
  /** 系统来源，1:d2c,2:b2b */
  systemSource?: string;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
  /** WF来账通知id */
  wfFundingId?: string;
  /** WF动账流水id */
  wfPayFlowId?: string;
}

/** BalanceRechargeRequestPdfVO */
export interface BalanceRechargeRequestPdfVO {
  /**
   * 充值记录id
   * @format int64
   */
  balanceRechargeId?: number;
  /** 支付渠道：1-银行汇款；2-paypal；3-payoneer */
  payChannel?: string;
  /** 请求金额 */
  requestAmount?: number;
  /** 请求对象姓名 */
  requestName?: string;
}

/** BalanceRechargeRespVO */
export interface BalanceRechargeRespVO {
  acceptBankName?: string;
  /** @format int64 */
  balanceRechargeId?: number;
  balanceRechargeStatus?: string;
  /**
   * 流水业务类型
   * @format int32
   */
  bizType?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  deleteFlag?: boolean;
  exchangeRate?: number;
  exchangeRateFloat?: number;
  financeRechargeCnyAmount?: number;
  financeRechargeJpyAmount?: number;
  fundFlowNo?: string;
  operateUserId?: string;
  operateUserName?: string;
  /** @format date-time */
  operateUserTime?: string;
  payChannel?: string;
  payStatus?: string;
  payoneerOrderId?: string;
  paypalOrderId?: string;
  /** @format date-time */
  rechargeArrivalTime?: string;
  rechargeCnyAmount?: number;
  /**
   * 充值单据类型  1：进帐充值  2：撤销出账充值
   * @format int32
   */
  rechargeType?: number;
  refuseReason?: string;
  remittanceAmount?: number;
  remittanceCurrencyCode?: string;
  /** @format date-time */
  remittanceTime?: string;
  remitterBankName?: string;
  remitterCompanyName?: string;
  remitterEmail?: string;
  remitterName?: string;
  remitterNation?: string;
  remitterSurname?: string;
  remitterWebsiteUrl?: string;
  systemSource?: string;
  /** @format date-time */
  updateTime?: string;
  uploadedVoucher?: boolean;
  zhongyinExchangeRate?: number;
}

/** BalanceRechargeTotalVO */
export interface BalanceRechargeTotalVO {
  /** 充值金额（JPY/USD/KRW） */
  rechargeAmount?: number;
  /** 充值金额（RMB） */
  rechargeCnyAmount?: number;
  /**
   * 总数量
   * @format int32
   */
  totalCount?: number;
}

/** BalanceRechargeUpdateVO */
export interface BalanceRechargeUpdateVO {
  /** @format int64 */
  balanceRechargeId?: number;
  payChannel?: string;
  /** @format int32 */
  usedForExchangeStatus?: number;
}

/**
 * BalanceRechargeVoucher
 * 余额充值凭证
 */
export interface BalanceRechargeVoucher {
  /**
   * 余额充值主键
   * @format int64
   */
  balanceRechargeId?: number;
  /**
   * 主键
   * @format int64
   */
  balanceRechargeVoucherId?: number;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 删除标志 */
  deleteFlag?: boolean;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  /** 转账凭证 */
  voucherUrl?: string;
}

/** BalanceRechargeVoucherApplyVO */
export interface BalanceRechargeVoucherApplyVO {
  /** @format int64 */
  balanceRechargeId?: number;
  voucherUrl?: string;
}

/** BankAccount */
export interface BankAccount {
  /** 银行账号 */
  accountNo?: string;
  /** 银行的BIC代码 */
  bankBIC?: string;
  /** 银行名称 */
  bankName?: string;
  /** 银行名称 */
  bankRegion?: string;
  /** 账号户主地址 */
  holderAddress?: string;
  /** 账号户主姓名。转账代发到中国大陆时使用中文名，转账代发到US或EU时使用英文名。 */
  holderName?: UserName;
}

/**
 * BaseBank
 * 基础银行信息：用作wf充值收款用
 */
export interface BaseBank {
  /** 银行支行名称 */
  bankBranchName?: string;
  /** 银行SWIFT代码 */
  bankCode?: string;
  /** 银行英文名称 */
  bankEnName?: string;
  /**
   * 公司银行id
   * @format int64
   */
  bankId?: number;
  /** 银行日文名称 */
  bankJpyName?: string;
  /** 银行原始名称 */
  bankOriginName?: string;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 国家code */
  nationCode?: string;
  /** 站点code */
  stationCode?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/** BaseBatchDTO */
export interface BaseBatchDTO {
  errorMsg?: string;
  /** @format int32 */
  failNum?: number;
  /** @format int32 */
  successNum?: number;
}

/** BaseResponse */
export interface BaseResponse {
  code?: string;
  msg?: string;
  success?: boolean;
}

/** BasisData */
export interface BasisData {
  /** @format int32 */
  deductionBasis?: number;
  /** @format int32 */
  systemSource?: number;
}

/** BatchDeductOtherFeeReqDTO */
export interface BatchDeductOtherFeeReqDTO {
  intShipOtherIdList?: number[];
}

/** BatchDeductValuationDiffReqDTO */
export interface BatchDeductValuationDiffReqDTO {
  intShipTieredDiffIdList?: number[];
}

/**
 * BatchSwitchStatusReqDTO
 * 销售价配置-批量启用/禁用请求
 */
export interface BatchSwitchStatusReqDTO {
  /** 销售价配置设置id列表 */
  settingIdList?: number[];
  /**
   * 状态：0禁用 1启用
   * @format int32
   */
  status?: number;
}

/** BillAddOnTemplateDTO */
export interface BillAddOnTemplateDTO {
  customerName?: boolean;
  destination?: boolean;
  destructionFee?: boolean;
  fastenerFee?: boolean;
  netWeight?: boolean;
  originalTotalFee?: boolean;
  oversizeweightFee?: boolean;
  pieceQunatity?: boolean;
  redistributionFee?: boolean;
  refundFee?: boolean;
  remarkNd?: boolean;
  remarkRd?: boolean;
  remarkSt?: boolean;
  remoteAreaFee?: boolean;
  returnFee?: boolean;
  shippingDescription?: boolean;
  specialHandlingFee?: boolean;
  storageFee?: boolean;
  tariffFee?: boolean;
  transferNumber?: boolean;
  transportMode?: boolean;
  valuationWeight?: boolean;
  volumeWeight?: boolean;
  warehousingTime?: boolean;
  waybillNumber?: boolean;
}

/** BillBasicQuotationTemplateDTO */
export interface BillBasicQuotationTemplateDTO {
  bulky?: boolean;
  destination?: boolean;
  netWeight?: boolean;
  pieceQunatity?: boolean;
  remarkNd?: boolean;
  remarkRd?: boolean;
  remarkSt?: boolean;
  totalRecAmount?: boolean;
  transferNumber?: boolean;
  transportMode?: boolean;
  valuationWeight?: boolean;
  volumeSize?: boolean;
  warehousingTime?: boolean;
  waybillNumber?: boolean;
}

/** BillExcelImportDTO */
export interface BillExcelImportDTO {
  actualRechargeAmount?: string;
  customerId?: string;
  targetPaymentAmount?: string;
}

/**
 * BillInfoDTO
 * 账单详情
 */
export interface BillInfoDTO {
  /** 实际已结算金额 */
  actSettleAmt?: number;
  /**
   * 实际扣款时间
   * @format date-time
   */
  actSettleTime?: string;
  /** 剩余可用余额 */
  afterAvailableAmt?: number;
  /** 账单编号 */
  billNo?: string;
  /**
   * 客户id
   * @format int64
   */
  customerId?: number;
  /**
   * 店铺id
   * @format int64
   */
  customerShopId?: number;
  /**
   * 结算周期结束日
   * @format date-time
   */
  endDate?: string;
  /** 费用明细 */
  feeDetailList?: BillInfoDetailDTO[];
  /** 费用名称 */
  feeName?: string;
  /** 费用类型 */
  feeType?: string;
  /**
   * 客户会员等级
   * @format int64
   */
  memberTemplateId?: number;
  nationCode?: string;
  /** 单价规则 */
  priceRules?: Record<string, BillPriceConfigDTO>;
  /**
   * 结算日期
   * @format date-time
   */
  settleDate?: string;
  /**
   * 结算周期开始日
   * @format date-time
   */
  startDate?: string;
  /** 站点 */
  stationCode?: string;
  /**
   * 结算状态
   * @format int32
   */
  status?: number;
  /**
   * 系统来源
   * @format int32
   */
  systemSource?: number;
}

/**
 * BillInfoDetailDTO
 * 账单明细
 */
export interface BillInfoDetailDTO {
  /**
   * 日期
   * @format date-time
   */
  date?: string;
  /** 发货单编号 */
  deliverCode?: string;
  /**
   * 发货完成日期
   * @format date-time
   */
  deliverDate?: string;
  /**
   * 数量
   * @format int64
   */
  nums?: number;
  /**
   * 包裹类型(包裹0/箱子体积1)
   * @format int32
   */
  pkgType?: number;
  /** 总价 */
  settleAmt?: number;
  /** 单价 */
  settlePrice?: number;
  /** sku编码 */
  skuCode?: string;
  /** sku图片 */
  skuImg?: string;
  /**
   * 需计费天数
   * @format int64
   */
  thisActSettleNum?: number;
  /**
   * 免费天数
   * @format int64
   */
  thisFreeNum?: number;
  /**
   * 总计天数
   * @format int64
   */
  thisSettleNum?: number;
  /** 体积类型 */
  volume?: string;
}

/**
 * BillNotifyVO
 * 账单通知
 */
export interface BillNotifyVO {
  /** 账单金额 */
  billAmt?: number;
  /** 提示编号 */
  code?: string;
  /** 文案 */
  content?: string;
  /**
   * 客户id
   * @format int64
   */
  customerId?: number;
  /**
   * 店铺id
   * @format int64
   */
  customerShopId?: number;
  /**
   * 通知结束时间
   * @format date-time
   */
  endDate?: string;
  /**
   * 是否已读
   * @format int32
   */
  isRead?: number;
  /**
   * 通知开始时间
   * @format date-time
   */
  startDate?: string;
  /** 关联费用类型 */
  type?: string;
}

/**
 * BillPriceConfigDTO
 * 账单单价配置
 */
export interface BillPriceConfigDTO {
  combinationNum?: string;
  /**
   * 开始时间
   * @format date-time
   */
  endDate?: string;
  /** @format int32 */
  id?: number;
  /** 阶梯价格 */
  ladderPrices?: LadderPrice[];
  /** 活动价格 */
  price?: number;
  /**
   * 开始时间
   * @format date-time
   */
  startDate?: string;
}

/** BizContractInfo */
export interface BizContractInfo {
  /** 货物贸易，买家英文名称 */
  buyerEnName?: string;
  /** 代表收货国家/地区的二字母ISO-3166 代码为了保障万里汇客户的资金安全，我们暂不支持处理下列买家国家/地区的订单同步：当 tradeType = GOODS 时必填 */
  deliverCountry?: string;
  /** 代表买家所在国家/地区的二字母ISO-3166 代码为了保障万里汇客户的资金安全，我们暂不支持处理下列买家国家/地区的订单同步 当 tradeType = GOODS 时必填 */
  tradeCountry?: string;
}

/** BizResponse */
export interface BizResponse {
  code?: string;
  data?: object;
  msg?: string;
  success?: boolean;
}

/** CalcIntShipFeeDTO */
export interface CalcIntShipFeeDTO {
  /** @format date-time */
  deliveryTime?: string;
  /** @format int64 */
  height?: number;
  intShipConfigIdList?: number[];
  /** @format int64 */
  length?: number;
  stationCode?: string;
  /** @format int32 */
  systemSource?: number;
  /** @format int64 */
  weight?: number;
  /** @format int64 */
  width?: number;
}

/** CalcIntShipFeeRespDTO */
export interface CalcIntShipFeeRespDTO {
  deliveryDays?: string;
  distribution?: string;
  /** @format int64 */
  intShipConfigId?: number;
  logisticsFeature?: string;
  logo?: string;
  officialWebsiteLink?: string;
  price?: number;
}

/**
 * CalcParamVO
 * 成本计算器执行计算入参
 */
export interface CalcParamVO {
  /** 发货附加项参数 */
  deliverAdditionParam?: DeliverAdditionParamVO;
  /** 需要计算的费用类型 0代金/1默认附加项/2商品附加项/3发货附加项/4运费/5库存保管费/6关税 */
  feeList?: number[];
  /** 库存保管费参数 */
  inventoryParam?: InventoryParamVO;
  /**
   * 选择的会员等级
   * @format int64
   */
  membershipTemplateId?: number;
  /** 商品信息 */
  productParam?: ProductParamVO[];
  /** 国际物流参数 */
  shipParam?: ShipParamVO;
  /** 站点code */
  stationCode?: string;
  /**
   * 业务线 1:d2c 2:b2b
   * @format int32
   */
  systemSource?: number;
}

/**
 * CalcProductAttrVO
 * 商品计算总重量体积参数
 */
export interface CalcProductAttrVO {
  /** 商品信息 */
  productAttrVOList?: ProductAttrVO[];
  /**
   * 业务线 1:D2C 2:B2B
   * @format int32
   */
  systemSource?: number;
}

/**
 * CalcResultVO
 * 成本计算器计算结果
 */
export interface CalcResultVO {
  /** 默认附加项计算结果 */
  defaultAdditionResult?: AdditionAmtResultVO;
  /** 发货附加项计算结果 */
  deliverAdditionResult?: AdditionAmtResultVO;
  /** 汇率 */
  exchangeRate?: number;
  /** 国内运费计算结果 */
  innerShipResult?: InnerShipAmtResultVO;
  /** 库存保管费单价规则 */
  inventoryPriceRules?: Record<string, InventoryConfigDTO>;
  /** 商品附加项计算结果 */
  productAdditionResult?: AdditionAmtResultVO;
  /** 商品代金费计算结果 */
  productResult?: ProductResultVO;
  /** 国际运费计算结果 */
  shipResult?: ShipResultVO;
  /** 站点 */
  stationCode?: string;
  /** 关税计算结果 */
  taxResult?: TaxResultVO;
  /** 总金额(外币) */
  totalAmt?: number;
  /** 总金额(人民币) */
  totalAmtCn?: number;
}

/**
 * CalcShipParamVO
 * 选择国际物流计算入参
 */
export interface CalcShipParamVO {
  /** 需要计算的费用类型 0代金/1默认附加项/2商品附加项/3发货附加项/4运费/5库存保管费/6关税 */
  feeList?: number[];
  /** 商品信息 */
  productParam?: ProductParamVO[];
  /** 国际物流参数 */
  shipParam?: ShipParamVO;
  /** 站点code */
  stationCode?: string;
  /**
   * 业务线 1:d2c 2:b2b
   * @format int32
   */
  systemSource?: number;
}

/** CaptureOrderDTO */
export interface CaptureOrderDTO {
  payPalOrderId?: string;
  status?: string;
}

/** CombinationAdditionReqDTO */
export interface CombinationAdditionReqDTO {
  /** @format int32 */
  num?: number;
  /** @format int32 */
  productNum?: number;
  /** @format int64 */
  shopId?: number;
}

/** CombinationFeeRespDTO */
export interface CombinationFeeRespDTO {
  five?: number;
  four?: number;
  json?: string;
  one?: number;
  three?: number;
  two?: number;
}

/** ConfigMembershipReqDTO */
export interface ConfigMembershipReqDTO {
  /** @format int64 */
  membershipId?: number;
  membershipName?: string;
}

/** ConfigMembershipRespDTO */
export interface ConfigMembershipRespDTO {
  /** @format int64 */
  membershipId?: number;
  membershipName?: string;
}

/** ConfigUserReqDTO */
export interface ConfigUserReqDTO {
  /** @format int64 */
  customerId?: number;
  unificationCustomerFullName?: string;
}

/** ConfigUserRespDTO */
export interface ConfigUserRespDTO {
  /** @format int64 */
  customerId?: number;
  /** @format int64 */
  membershipTemplateId?: number;
  membershipTemplateName?: string;
  /** @format int32 */
  templateLevel?: number;
  unificationCustomerFullName?: string;
}

/** CreatePaymentOrderRespDTO */
export interface CreatePaymentOrderRespDTO {
  authorizationId?: string;
  orderId?: string;
}

/** CreateSubscriptionDTO */
export interface CreateSubscriptionDTO {
  payPalSubscriptionId?: string;
}

/** CustomerAdditionMergeRespDTO */
export interface CustomerAdditionMergeRespDTO {
  deliveryAdditionList?: CustomerAdditionRespDTO[];
  productAdditionList?: CustomerAdditionRespDTO[];
}

/** CustomerAdditionRespDTO */
export interface CustomerAdditionRespDTO {
  /** @format int32 */
  actualDeductionNode?: number;
  actualDeductionNodeName?: string;
  /** @format int32 */
  additionCode?: number;
  /** @format int32 */
  additionConfigId?: number;
  /** @format int32 */
  additionId?: number;
  additionName?: string;
  additionNameJp?: string;
  /** @format int32 */
  additionScene?: number;
  /** @format int32 */
  bizType?: number;
  calculateConfigFormula?: string;
  /** @format int32 */
  calculateConfigId?: number;
  calculateConfigName?: string;
  cost?: number;
  /** @format int32 */
  costType?: number;
  /** @format date-time */
  createTime?: string;
  data?: string;
  /** @format int32 */
  deductionNode?: number;
  deductionNodeName?: string;
  documentUrl?: string;
  /** @format int32 */
  extraType?: number;
  gifUrl?: string;
  groupList?: string[];
  imageUrl?: string;
  /** @format int32 */
  ingredientStatus?: number;
  /** @format int32 */
  level?: number;
  linkCancelOptionList?: number[];
  linkMutexOptionList?: number[];
  linkSelectionOptionList?: number[];
  /** @format int32 */
  orderType?: number;
  priceData?: string;
  referenceCost?: number;
  spotCheckConfigDTOList?: SpotCheckConfigDTO[];
  spotCheckData?: string;
  /** @format int32 */
  spotCheckFlag?: number;
  /** @format int32 */
  spotCheckSupport?: number;
  stationCode?: string;
  /** @format int32 */
  systemSource?: number;
  /** @format int32 */
  userFill?: number;
}

/**
 * CustomerAdditionTemplateAddReqDTO
 * 添加/修改商品附加项组
 */
export interface CustomerAdditionTemplateAddReqDTO {
  /**
   * id 修改使用
   * @format int32
   */
  additionTemplateId?: number;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  /** 备注 */
  remark?: string;
  /** 商品附加项组明细 */
  reqDTOList?: CustomerAdditionTemplateItemAddReqDTO[];
  /** 组名称 */
  templateName?: string;
  /**
   * 组类型 1-商品附加项组合 2-发货附加项组合
   * @format int32
   */
  templateType?: number;
}

/**
 * CustomerAdditionTemplateInfoRespDTO
 * 客户附加项组详情InfoRespDTO
 */
export interface CustomerAdditionTemplateInfoRespDTO {
  /**
   * 主键
   * @format int32
   */
  additionTemplateId?: number;
  /** 附加项配置模板图 */
  additionTemplateImg?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /**
   * 是否为系统默认 0-否 1-是
   * @format int32
   */
  isDefault?: number;
  /** 附加项详情ItemInfo */
  itemInfoRespDTOList?: CustomerAdditionTemplateItemInfoRespDTO[];
  /** 备注 */
  remark?: string;
  /**
   * 来源，1:d2c 2: b2b
   * @format int32
   */
  systemSource?: number;
  /** 组名称 */
  templateName?: string;
  /**
   * 组状态 0-无效 1-有效 2-关闭
   * @format int32
   */
  templateStatus?: number;
  /**
   * 组类型 1-商品附加项组合 2-发货附加项组合
   * @format int32
   */
  templateType?: number;
}

/**
 * CustomerAdditionTemplateItemAddReqDTO
 * 添加/修改商品附加项组明细
 */
export interface CustomerAdditionTemplateItemAddReqDTO {
  /** @format int32 */
  additionConfigId?: number;
  /**
   * 附加项id
   * @format int32
   */
  additionId?: number;
  /** 辅料名称 */
  ingredientsName?: string;
  /** 辅料名称-日文 */
  ingredientsNameJp?: string;
  /** 辅料sku */
  ingredientsSku?: string;
  /**
   * 抽检标记 0-全检 1-抽检
   * @format int32
   */
  spotCheckFlag?: number;
  /** 抽检比例 */
  spotCheckRatio?: number;
}

/**
 * CustomerAdditionTemplateItemInfoRespDTO
 * 客户附加项详情ItemInfoRespDTO
 */
export interface CustomerAdditionTemplateItemInfoRespDTO {
  /**
   * 客户附加项配置ID 【算钱专用】
   * @format int32
   */
  additionConfigId?: number;
  /**
   * 附加项id
   * @format int32
   */
  additionId?: number;
  /** 业务更新表格后的服务名 */
  additionName?: string;
  /** 日文名称 */
  additionNameJp?: string;
  /**
   * 附加项模板id
   * @format int32
   */
  additionTemplateId?: number;
  /**
   * 主键
   * @format int64
   */
  additionTemplateItemId?: number;
  /** 附加项图片 */
  imageUrl?: string;
  /** 辅料名称 */
  ingredientsName?: string;
  /** 辅料名称-日文 */
  ingredientsNameJp?: string;
  /** 辅料sku */
  ingredientsSku?: string;
  /**
   * 抽检标记 0-全检 1-抽检
   * @format int32
   */
  spotCheckFlag?: number;
  /** 抽检比例 */
  spotCheckRatio?: number;
}

/**
 * CustomerAdditionTemplatePageRespDTO
 * 附加项分页列表
 */
export interface CustomerAdditionTemplatePageRespDTO {
  /** 附加项名称 */
  additionName?: string;
  /**
   * 附加项数量
   * @format int32
   */
  additionNum?: number;
  /**
   * id
   * @format int32
   */
  additionTemplateId?: number;
  /** 附加项配置模板图 */
  additionTemplateImg?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /**
   * 是否为系统默认 0-否 1-是
   * @format int32
   */
  isDefault?: number;
  /** 备注 */
  remark?: string;
  /** 组名称 */
  templateName?: string;
  /**
   * 组状态 0-无效 1-有效 2-关闭
   * @format int32
   */
  templateStatus?: number;
  /**
   * 组类型 1-商品附加项组合 2-发货附加项组合
   * @format int32
   */
  templateType?: number;
}

/**
 * CustomerAdditionTemplateQueryReqDTO
 * 客户附加项搜索
 */
export interface CustomerAdditionTemplateQueryReqDTO {
  /** @format int64 */
  customerShopId?: number;
  /** @format int32 */
  isDefault?: number;
  /**
   * 第几页
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页条数
   * @format int32
   */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
  templateName?: string;
  /** @format int32 */
  templateStatus?: number;
  /** @format int32 */
  templateType?: number;
}

/**
 * CustomerAdditionTemplateStatusUpdateDTO
 * 修改客户附加项状态
 */
export interface CustomerAdditionTemplateStatusUpdateDTO {
  /**
   * id
   * @format int32
   */
  additionTemplateId?: number;
  /** @format int64 */
  customerShopId?: number;
  /**
   * 组状态 1-有效 2-关闭
   * @format int32
   */
  templateStatus?: number;
}

/**
 * CustomerBankCard
 * 用户银行卡表
 */
export interface CustomerBankCard {
  /** 持卡人真实姓名 */
  bankAccountName?: string;
  /** 银行卡开户网点编码 */
  bankBranchCode?: string;
  /** 银行卡开户网点名称 */
  bankBranchName?: string;
  /** 银行卡账号 */
  bankCardNo?: string;
  /**
   * 状态：1-正常；2-停用
   * @format int32
   */
  bankCardStatus?: number;
  /** 银行名称 */
  bankEnName?: string;
  /** 银行名称 */
  bankName?: string;
  /** 创建人 */
  createPerson?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /**
   * 主键
   * @format int64
   */
  customerBankCardId?: number;
  /**
   * 客户id
   * @format int64
   */
  customerId?: number;
  /** 客户名称 */
  customerName?: string;
  /**
   * 用户店铺表id
   * @format int64
   */
  customerShopId?: number;
  /**
   * 是否是默认的支付卡：0-不是；1-是
   * @format int32
   */
  defaultStatus?: number;
  /**
   * 用户id（主账号）
   * @format int64
   */
  mainCustomerId?: number;
  /** 国家code */
  nationCode?: string;
  /** 站点code */
  stationCode?: string;
  /**
   * 用户id（主账号）
   * @format int64
   */
  superCustomerId?: number;
  /**
   * 来源类型；1：2C；2：2B
   * @format int32
   */
  systemSource?: number;
  /** 更新人 */
  updatePerson?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/** CustomerBilRefusedPayVO */
export interface CustomerBilRefusedPayVO {
  /**
   * 客户账单主键
   * @format int64
   */
  customerBillId?: number;
  /** 客户拒绝原因 */
  customerRefusedReason?: string;
  /** 获取主或者子账单:true:主;false:子 */
  mainOrSubBill?: boolean;
}

/**
 * CustomerBill
 * 客户账单
 */
export interface CustomerBill {
  /** 审核拒绝原因 */
  auditRefusedReason?: string;
  /** 审核状态：1：已通过；2：待审核；3：已拒绝；4：已撤回 */
  auditStatus?: string;
  /**
   * 自动支付时间
   * @format date-time
   */
  autoPayTime?: string;
  /** 账单金额 */
  billAmount?: number;
  /** 扣款说明（日文） */
  billIntroduceJa?: string;
  /** 扣款说明（中文） */
  billIntroduceZh?: string;
  /** 账单名称 */
  billName?: string;
  /** 账单状态：1：已支付 ；2：待支付；3：已取消；4：已拒绝；5：支付中 */
  billPayStatus?: string;
  /**
   * 账单发起时间
   * @format date-time
   */
  billTime?: string;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * 客户账单主键
   * @format int64
   */
  customerBillId?: number;
  /**
   * 目标客户id
   * @format int64
   */
  customerId?: number;
  /** 目标客户名 */
  customerName?: string;
  /** 客户拒绝原因 */
  customerRefusedReason?: string;
  /**
   * 用户店铺表id
   * @format int64
   */
  customerShopId?: number;
  /** 客户店铺名称 */
  customerShopName?: string;
  /** 删除标志 */
  deleteFlag?: boolean;
  /** 日志 */
  logList?: CustomerBillLog[];
  /** 目标客户登录名 */
  loginName?: string;
  /**
   * 目标客户会员等级id
   * @format int64
   */
  membershipTemplateId?: number;
  /** 目标客户会员等级名称 */
  membershipTemplateName?: string;
  /** 操作人id */
  operateUserId?: string;
  /** 操作人姓名 */
  operateUserName?: string;
  /**
   * 操作时间
   * @format date-time
   */
  operateUserTime?: string;
  /** 支付流水号 */
  payFlowNu?: string;
  /**
   * 用户支付时间
   * @format date-time
   */
  payTime?: string;
  /**
   * 催办次数
   * @format int32
   */
  remindersCount?: number;
  /**
   * 剩余支付时间
   * @format date-time
   */
  residualPayTime?: string;
  /** 系统来源，1:d2c,2:b2b */
  systemSource?: string;
  /** 目标统一客户全名 */
  unificationCustomerFullName?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/** CustomerBillAuditVO */
export interface CustomerBillAuditVO {
  /** 审核拒绝原因 */
  auditRefusedReason?: string;
  /** 审核结果；true:通过;false:拒绝 */
  auditResult?: boolean;
  /**
   * 客户账单主键
   * @format int64
   */
  customerBillId?: number;
}

/** CustomerBillCreateVO */
export interface CustomerBillCreateVO {
  /** 账单金额 */
  billAmount?: number;
  /** 扣款说明（日文） */
  billIntroduceJa?: string;
  /** 扣款说明（中文） */
  billIntroduceZh?: string;
  /** 账单名称 */
  billName?: string;
  /**
   * 账单发起时间
   * @format date-time
   */
  billTime?: string;
  /**
   * 目标客户id
   * @format int64
   */
  customerId?: number;
  /** 目标客户名 */
  customerName?: string;
  /** 目标统一客户全名 */
  customerUnificationCustomerFullName?: string;
  /**
   * 目标客户仓库id
   * @format int64
   */
  customerWarehouseId?: number;
  /** 目标客户仓库名称 */
  customerWarehouseName?: string;
  /** 目标客户登录名 */
  loginName?: string;
  /**
   * 目标客户会员等级id
   * @format int64
   */
  membershipTemplateId?: number;
  /** 目标客户会员等级名称 */
  membershipTemplateName?: string;
  /** 系统来源，1:d2c,2:b2b */
  systemSource?: string;
}

/** CustomerBillInfoDTO */
export interface CustomerBillInfoDTO {
  auditRefusedReason?: string;
  auditStatus?: string;
  /** @format date-time */
  autoPayTime?: string;
  billAmount?: number;
  billIntroduceJa?: string;
  billIntroduceZh?: string;
  billName?: string;
  billPayStatus?: string;
  /** @format date-time */
  billTime?: string;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  customerBillId?: number;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  customerRefusedReason?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  deleteFlag?: boolean;
  loginName?: string;
  /** @format int64 */
  membershipTemplateId?: number;
  membershipTemplateName?: string;
  operateUserId?: string;
  operateUserName?: string;
  /** @format date-time */
  operateUserTime?: string;
  payFlowNu?: string;
  /** @format date-time */
  payTime?: string;
  /** @format int32 */
  remindersCount?: number;
  systemSource?: string;
  unificationCustomerFullName?: string;
  /** @format date-time */
  updateTime?: string;
}

/**
 * CustomerBillLog
 * 结算中心-余额充值日志
 */
export interface CustomerBillLog {
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * 客户账单主键
   * @format int64
   */
  customerBillId?: number;
  /**
   * 客户账单日志主键
   * @format int64
   */
  customerBillLogId?: number;
  /** 操作类型；1：创建；2：审核；3：撤回；4：删除； */
  operateType?: string;
  /** 操作人id */
  operateUserId?: string;
  /** 操作人姓名 */
  operateUserName?: string;
  /**
   * 操作时间
   * @format date-time
   */
  operateUserTime?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/** CustomerLoginRespDTO */
export interface CustomerLoginRespDTO {
  customerRespDTO?: CustomerRespDTO;
  customerShopList?: CustomerShopRespDTO[];
  memberShipResp?: CustomerMemberShipRespDTO;
  token?: string;
  uuid?: string;
}

/** CustomerMemberShipRespDTO */
export interface CustomerMemberShipRespDTO {
  /** @format int32 */
  basicFlag?: number;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  createTime?: string;
  /** @format int64 */
  customerMembershipId?: number;
  /** @format int32 */
  customerMembershipStatus?: number;
  customerName?: string;
  discountActualPrice?: number;
  /** @format date-time */
  expiresDate?: string;
  /**
   * 推广规模id
   * @format int32
   */
  membershipConfigId?: number;
  /**
   * 0-默认仅展示普通会员,1-仅展示特殊会员,2-展示全部会员
   * @format int32
   */
  membershipShowStatus?: number;
  /** @format int64 */
  membershipTemplateId?: number;
  membershipTemplateName?: string;
  /** @format int64 */
  membershipTemplatePriceId?: number;
  membershipTemplatePriceName?: string;
  sellingPrice?: number;
  /**
   * 会员类型:0-普通,1-特殊
   * @format int32
   */
  specialType?: number;
  /** @format int64 */
  superCustomerId?: number;
  /**
   * 会员等级，从低到高，0最低
   * @format int32
   */
  templateLevel?: number;
  /**
   * 试用标志:0-不是,1是
   * @format int32
   */
  trialFlag?: number;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  updateTime?: string;
}

/** CustomerOrderAdditionConfigReqDTO */
export interface CustomerOrderAdditionConfigReqDTO {
  additionConfigIdList?: number[];
  /** @format int64 */
  customerId?: number;
  /** @format int32 */
  productType?: number;
  stationCode?: string;
}

/** CustomerOrderAdditionReqDTO */
export interface CustomerOrderAdditionReqDTO {
  additionIdList?: number[];
  /** @format int64 */
  customerId?: number;
  /** @format int32 */
  productType?: number;
  stationCode?: string;
}

/** CustomerPaymentTokenDTO */
export interface CustomerPaymentTokenDTO {
  /** @format int64 */
  customerId?: number;
  paymentTokens?: PaymentTokenDTO[];
}

/** CustomerRespDTO */
export interface CustomerRespDTO {
  /** @format int32 */
  accountType?: number;
  /** @format date-time */
  createTime?: string;
  customerEmail?: string;
  /** @format int64 */
  customerId?: number;
  customerMobile?: string;
  customerName?: string;
  /** @format int32 */
  gender?: number;
  /** @format date-time */
  lastLoginTime?: string;
  loginName?: string;
  /** @format int64 */
  mainCustomerId?: number;
  /**
   * 推广规模id
   * @format int32
   */
  membershipConfigId?: number;
  /**
   * 0-默认仅展示普通会员,1-仅展示特殊会员,2-展示全部会员
   * @format int32
   */
  membershipShowStatus?: number;
  nationCode?: string;
  /** @format int32 */
  platformType?: number;
  /** @format int64 */
  shopId?: number;
  stationCode?: string;
  /** @format int64 */
  superCustomerId?: number;
  /** @format int32 */
  systemSource?: number;
  unificationCustomerFullName?: string;
  /** @format date-time */
  updateTime?: string;
}

/** CustomerShopRespDTO */
export interface CustomerShopRespDTO {
  /** @format int64 */
  abnormalOrderCount?: number;
  /** @format int32 */
  activeSubAccountFlag?: number;
  /** @format int64 */
  apiOrderCount?: number;
  /** @format int32 */
  apiOrderStatusFailCount?: number;
  /** @format int32 */
  authExpireStatus?: number;
  /** @format int64 */
  authStatus?: number;
  availableAmount?: number;
  /** @format int32 */
  badAmount?: number;
  /** @format int64 */
  canDeliveryOrderCount?: number;
  /** @format int32 */
  canceledCount?: number;
  clientId?: string;
  clientSecret?: string;
  /** @format int64 */
  completeOrderCount?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  /** @format int32 */
  customerShopAuthStatus?: number;
  /** @format int32 */
  customerShopAutoOrderFlag?: number;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  customerShopPermission?: string;
  /** @format int32 */
  customerShopPlatform?: number;
  customerShopUrl?: string;
  /** @format int32 */
  customerShopUseOnTheWayStockFlag?: number;
  /** @format int64 */
  dealOrderCount?: number;
  /** @format int32 */
  deletedFlag?: number;
  /** @format int32 */
  flAmount?: number;
  /** @format int32 */
  isExistOem?: number;
  loginName?: string;
  /** @format int64 */
  mainCustomerId?: number;
  managerIds?: string[];
  /** @format int32 */
  noBindAmazonSkuCount?: number;
  /** @format int32 */
  noBindApiSkuCount?: number;
  /** @format int64 */
  noCompleteOrderCount?: number;
  /** @format int32 */
  noConfirmReplenishPlanCount?: number;
  /** @format int64 */
  nonDoneRechargeCount?: number;
  orderAmount?: number;
  /** @format int32 */
  orderCount?: number;
  /** @format int64 */
  partDeliveryOrderCount?: number;
  /** @format int32 */
  pendingInventoryCount?: number;
  /** @format int32 */
  productAmount?: number;
  /** @format int32 */
  quotedOem?: number;
  /** @format int32 */
  rePurchaseOem?: number;
  /** @format int32 */
  searchSuccessOem?: number;
  /** @format int64 */
  shopPlatform?: number;
  stationCode?: string;
  /** @format int32 */
  systemSource?: number;
  /** @format int32 */
  toBeQuotedOem?: number;
  unificationCustomerFullName?: string;
  /** @format int32 */
  virtualFlag?: number;
  /** @format int32 */
  waitConfirm?: number;
  /** @format int64 */
  waitPayOrderCount?: number;
  /** @format int32 */
  waitedOem?: number;
  wareCode?: string;
  wareName?: string;
  wareNameLangList?: WareNameLangDTO[];
  /** @format int32 */
  yesterdayOrderQuantity?: number;
  /** @format int32 */
  yesterdayShipmentsQuantity?: number;
}

/**
 * CustomerUnCheckMoneyVO
 * 客户未入账金额VO
 */
export interface CustomerUnCheckMoneyVO {
  /** 未入账金额(日元/韩元/美元/..) */
  unCheckAmt?: number;
  /** 未入账金额(人民币) */
  unCheckCnyAmt?: number;
}

/** CustomerWalletAddReqDTO */
export interface CustomerWalletAddReqDTO {
  /** @format int32 */
  accountType?: number;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  /** @format int64 */
  mainCustomerId?: number;
  mainCustomerName?: string;
  stationCode?: string;
  /** @format int32 */
  systemSource?: number;
  unificationCustomerFullName?: string;
}

/** CustomerWalletDTO */
export interface CustomerWalletDTO {
  availableAmount?: number;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  /** @format int64 */
  mainCustomerId?: number;
  /** @format int32 */
  systemSource?: number;
}

/**
 * CustomerWalletFundFlow
 * 客户钱包资金流水：充值；扣款；退款
 */
export interface CustomerWalletFundFlow {
  /** 变更后交易金额 */
  afterAvailableAmount?: number;
  /** 变更前交易金额 */
  beforeAvailableAmount?: number;
  /** 业务单据内容 */
  bizContent?: string;
  /** 给客户看内容（日文） */
  bizContentCustomer?: string;
  /** 业务单据Id */
  bizId?: string;
  /**
   * 业务类型
   * @format int32
   */
  bizType?: number;
  /** 变更金额 */
  changeAmount?: number;
  /**
   * 钱包变更类型 1 出账；2 入账
   * @format int32
   */
  changeType?: number;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * 时间
   * @format int64
   */
  createTimeMillis?: number;
  /**
   * 客户id
   * @format int64
   */
  customerShopId?: number;
  /** 客户姓名 */
  customerShopName?: string;
  /** 发货单号 */
  deliverOrderNo?: string;
  /** 基础汇率 */
  exchangeRate?: number;
  /** 浮动汇率 */
  exchangeRateFloat?: number;
  /**
   * 资金流水明细类型  【作为附加项明细扣款】2	OEM寻源
   * 3	既成品采购
   * 4	市场商品采购
   * 5	次品退货
   * 6	次品重买
   * 7	OEM大货采购
   * 8	OEM样品采购
   * 10	商品组合
   * 28	库存保管
   * 31	入库
   * 32	出库
   * @format int32
   */
  fundFlowDetailType?: number;
  /** 资金明细名称（中文） */
  fundFlowName?: string;
  /** 给客户看的资金明细名称（日文） */
  fundFlowNameCustomer?: string;
  /** 流水单号 */
  fundFlowNo?: string;
  /**
   * 资金流水类型
   * @format int32
   */
  fundFlowType?: number;
  /**
   * 主账户id
   * @format int64
   */
  mainCustomerId?: number;
  /** 订单号单号 */
  orderNo?: string;
  /** 原始变动金额(日元/韩元/美元) */
  originChangeAmount?: number;
  /** 原始币种 */
  originCurrencyCode?: string;
  /** 平台订单编号(直行便订单编号)【针对客户单号】 */
  platformOrderNo?: string;
  /** 备注说明 */
  remark?: string;
  /** 站点 */
  stationCode?: string;
  /**
   * 系统来源: 1-D2C; 2-B2B
   * @format int32
   */
  systemSource?: number;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  /** @format int64 */
  walletFundFlowId?: number;
  /** 运单号 */
  waybillNumber?: string;
}

/** CustomerWalletFundFlowDetailsRespDTO */
export interface CustomerWalletFundFlowDetailsRespDTO {
  /** 商品附加项(返品不可不良品) */
  additionSettlementGoodsDetailBadRespDTOS?: AdditionSettlementGoodsDetailRespDTO[];
  /** 商品附加项 */
  additionSettlementGoodsDetailRespDTOS?: AdditionSettlementGoodsDetailRespDTO[];
  /** 商品代金总和 */
  allGoodsPrice?: number;
  /** 店铺信息 */
  customerShopRespDTO?: CustomerShopRespDTO;
  /** 国内运费总和 */
  expressAllAmount?: number;
  /** 国内运费 */
  expressAmount?: number;
  /** 国内运费退款 */
  expressRefundAmount?: number;
  /** 商品附加项总和 */
  goodsAdditionPrice?: number;
  /** 商品附加项(押金) */
  goodsAdditionPriceDeposit?: number;
  /** 商品代金 */
  goodsPrice?: number;
  /** 商品代金(押金) */
  goodsPriceDeposit?: number;
  /** 商品返金 */
  goodsRefundPrice?: number;
  /** 直行便订单编号 */
  platformOrderNo?: string;
  /**
   * 平台订单结算状态: 1-未结算; 2-结算中; 3-结算成功; 4-结算失败
   * @format int32
   */
  platformOrderSettleStatus?: number;
  /** 押金 */
  priceDeposit?: number;
  /** 代购手续费总和 */
  purchasingAllFee?: number;
  /** 代购手续费 */
  purchasingFee?: AdditionSettlementGoodsDetailRespDTO[];
  /** 分期商品代金(押金) */
  selectOrderFreezeDetailRespDTOS?: SelectOrderFreezeDetailRespDTO[];
}

/** CustomerWalletFundFlowExpressInfoRespDTO */
export interface CustomerWalletFundFlowExpressInfoRespDTO {
  additionSettlementDeliveryAmount?: number;
  additionSettlementDeliveryList?: AdditionSettlementDeliveryRespDTO[];
  deductShipOtherAmount?: number;
  deductShipOtherInfoRespList?: DeductShipOtherInfoRespDTO[];
  deductShipTieredDiffAmount?: number;
  deductShipTieredDiffInfoList?: DeductShipTieredDiffInfoRespDTO[];
  deliverOrderNo?: string;
  distribution?: string;
  internationExpressRefundAmount?: number;
  internationExpressRefundFlowList?: SettlementDeliveryRefundDTO[];
  settlementDeliveryRespList?: SettlementDeliveryRespDTO[];
  stationCode?: string;
  totalAmount?: number;
  totalSettlementDeliveryAmount?: number;
  waybillNumberList?: string[];
}

/** CustomerWalletFundFlowGoodsDTO */
export interface CustomerWalletFundFlowGoodsDTO {
  money?: number;
  /** @format int32 */
  num?: number;
  price?: number;
  productImg?: string;
  productPropertiesName?: string;
  productSku?: string;
  productTitle?: string;
  settleMoney?: number;
  settlePrice?: number;
}

/** CustomerWalletFundFlowInfoRespDTO */
export interface CustomerWalletFundFlowInfoRespDTO {
  additionSettlementDeliveryRespDTO?: AdditionSettlementDeliveryRespDTO;
  afterAvailableAmount?: number;
  beforeAvailableAmount?: number;
  /** 账单详情 */
  billInfoDTO?: BillInfoDTO;
  bizContent?: string;
  bizContentCustomer?: string;
  bizData?: object;
  bizId?: string;
  /** @format int32 */
  bizType?: number;
  changeAmount?: number;
  /** @format int32 */
  changeType?: number;
  /** @format date-time */
  createTime?: string;
  customerBill?: CustomerBillInfoDTO;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  customerWalletFundFlowOrderDTO?: CustomerWalletFundFlowOrderDTO;
  deductShipOtherInfoRespDTO?: DeductShipOtherInfoRespDTO;
  deductShipTieredDiffInfoRespDTO?: DeductShipTieredDiffInfoRespDTO;
  deliverOrderNo?: string;
  /** @format int32 */
  fundFlowDetailType?: number;
  fundFlowName?: string;
  fundFlowNameCustomer?: string;
  fundFlowNo?: string;
  /** @format int32 */
  fundFlowType?: number;
  orderDeductionFeeDetail?: OrderDeductionFeeRespDTO;
  orderNo?: string;
  orderPreSelleFeeDetail?: OrderPreSelleFeeRespDTO;
  platformOrderNo?: string;
  platformOrderProductSettleDetail?: PlatformOrderProductSettleDetail;
  remark?: string;
  selectOrderFreezeDetailRespDTOS?: SelectOrderFreezeDetailRespDTO[];
  settlementDeliveryRespDTO?: SettlementDeliveryRespDTO;
  settlementDeliveryRespDTOList?: SettlementDeliveryRespDTO[];
  stationCode?: string;
  /** @format int32 */
  systemSource?: number;
  /** @format date-time */
  updateTime?: string;
  /** @format int64 */
  walletFundFlowId?: number;
}

/** CustomerWalletFundFlowOrderDTO */
export interface CustomerWalletFundFlowOrderDTO {
  afterAvailableAmount?: number;
  /** @format date-time */
  createTime?: string;
  customerWalletFundFlowGoodsDTOList?: CustomerWalletFundFlowGoodsDTO[];
  money?: number;
  /** @format int32 */
  num?: number;
}

/** CustomerWalletFundFlowReqDTO */
export interface CustomerWalletFundFlowReqDTO {
  bizContent?: string;
  bizContentCustomer?: string;
  bizContentCustomerLeftLike?: string;
  bizContentCustomerList?: string[];
  bizContentLeftLike?: string;
  bizIds?: string[];
  /** @format int32 */
  changeType?: number;
  /** @format date-time */
  createTimeEnd?: string;
  /** @format date-time */
  createTimeStart?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopIds?: number[];
  deliverOrderNo?: string;
  /** @format int32 */
  fundFlowDetailType?: number;
  fundFlowName?: string;
  /** @format int32 */
  fundFlowType?: number;
  /** @format int64 */
  mainCustomerId?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  platformOrderNo?: string;
  sorts?: ISortFieldEnum[];
  /** @format int32 */
  startIndex?: number;
  /** @format int32 */
  systemSource?: number;
}

/** CustomerWalletFundFlowRespDTO */
export interface CustomerWalletFundFlowRespDTO {
  afterAvailableAmount?: number;
  beforeAvailableAmount?: number;
  bizContent?: string;
  bizContentCustomer?: string;
  bizId?: string;
  /** @format int32 */
  bizType?: number;
  /** @format int32 */
  canUpload?: number;
  changeAmount?: number;
  /** @format int32 */
  changeType?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  deliverOrderNo?: string;
  deliverTitle?: string;
  exchangeRate?: number;
  exchangeRateFloat?: number;
  /** @format int32 */
  fundFlowDetailType?: number;
  fundFlowName?: string;
  fundFlowNameCustomer?: string;
  fundFlowNo?: string;
  /** @format int32 */
  fundFlowType?: number;
  orderNo?: string;
  orderTitle?: string;
  originChangeAmount?: number;
  originCurrencyCode?: string;
  platformOrderNo?: string;
  remark?: string;
  stationCode?: string;
  /** @format int32 */
  systemSource?: number;
  /** @format date-time */
  updateTime?: string;
  /** @format int64 */
  walletFundFlowId?: number;
}

/** CustomerWalletQueryReqDTO */
export interface CustomerWalletQueryReqDTO {
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  dataSourceName?: string;
  /** @format int64 */
  mainCustomerId?: number;
  mainCustomerName?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  sorts?: ISortFieldEnum[];
  /** @format int32 */
  startIndex?: number;
  /** @format int32 */
  systemSource?: number;
  unificationCustomerFullName?: string;
}

/** CustomerWalletRespDTO */
export interface CustomerWalletRespDTO {
  /** @format int32 */
  accountType?: number;
  aggregateAmount?: number;
  availableAmount?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  /** @format int64 */
  customerWalletId?: number;
  frozenAmount?: number;
  /** @format int64 */
  mainCustomerId?: number;
  mainCustomerName?: string;
  stationCode?: string;
  /** @format int32 */
  systemSource?: number;
  unificationCustomerFullName?: string;
  /** @format date-time */
  updateTime?: string;
}

/** CustomerWalletTransferOutReqDTO */
export interface CustomerWalletTransferOutReqDTO {
  transferAmount?: number;
  /** @format int64 */
  transferToCustomerId?: number;
  transferToMain?: boolean;
}

/** DataCenterDayListVO */
export interface DataCenterDayListVO {
  /** 金额 */
  amountList?: string[];
  /** 日期 */
  days?: string[];
}

/** DataCenterSettlePayTopVO */
export interface DataCenterSettlePayTopVO {
  /** 金额 */
  amount?: number;
  /** 用户名 */
  customerName?: string;
}

/** DataCenterSettleSourceTopVO */
export interface DataCenterSettleSourceTopVO {
  /** 渠道 */
  source?: string;
  /** 金额 */
  totalSettleAmount?: string;
}

/** DataCenterTodayInfoVO */
export interface DataCenterTodayInfoVO {
  /** 今日充值（元） */
  rechargeCnyAmount?: number;
  /** 今日充值（日元） */
  rechargeJpyAmount?: number;
  /** 今日充值（美元） */
  rechargeUsdAmount?: number;
  /** 今日退款（元） */
  refundCnyAmount?: number;
  /** 今日退款（日元） */
  refundJpyAmount?: number;
  /** 今日退款（美元） */
  refundUsdAmount?: number;
  /** 今日销售额（元） */
  totalSettleAmount?: number;
  /** 今日提现（元） */
  withdrawCnyAmount?: number;
  /** 今日提现（日元） */
  withdrawJpyAmount?: number;
}

/** DataStatisticsQueryVO */
export interface DataStatisticsQueryVO {
  /**
   * 用户id
   * @format int64
   */
  customerId?: number;
  /** 用户姓名 */
  customerName?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** 平台订单编号(直行便订单编号) */
  platformOrderNo?: string;
  sorts?: ISortFieldEnum[];
  /** @format int32 */
  startIndex?: number;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /** 来源类型；1：2C；2：2B */
  systemSource?: string;
  /** 总毛利率（%） */
  totalGrossProfitRateEnd?: string;
  /** 总毛利率（%） */
  totalGrossProfitRateStart?: string;
}

/** DeductOtherFeeReqDTO */
export interface DeductOtherFeeReqDTO {
  /** @format int64 */
  intShipOtherId?: number;
}

/** DeductShipOtherInfoRespDTO */
export interface DeductShipOtherInfoRespDTO {
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  destructionFee?: number;
  fastenerFee?: number;
  /** @format int32 */
  history?: number;
  /** @format int64 */
  intShipOtherId?: number;
  /** @format int32 */
  makeUpStatus?: number;
  /** @format date-time */
  makeUpTime?: string;
  orderNumber?: string;
  oversizeweightFee?: number;
  redistributionFee?: number;
  refundFee?: number;
  remoteAreaFeeDiff?: number;
  returnFee?: number;
  specialHandlingFee?: number;
  storageFee?: number;
  /** @format int32 */
  systemSource?: number;
  tariffFee?: number;
  totalFee?: number;
  transferNumber?: string;
  waybillNumber?: string;
}

/** DeductShipTieredDiffInfoRespDTO */
export interface DeductShipTieredDiffInfoRespDTO {
  amount?: number;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  /** @format int64 */
  intShipTieredDiffId?: number;
  /** @format int32 */
  makeUpStatus?: number;
  /** @format date-time */
  makeUpTime?: string;
  orderNumber?: string;
  orderValuationWeight?: number;
  orderValuationWeightAmount?: number;
  stationCode?: string;
  transferNumber?: string;
  valuationAmountDiff?: number;
  valuationDiff?: number;
  valuationWeight?: number;
  valuationWeightAmount?: number;
}

/** DeductValuationDiffReqDTO */
export interface DeductValuationDiffReqDTO {
  /** @format int64 */
  intShipTieredDiffId?: number;
}

/**
 * DeliverAdditionParamVO
 * 发货附加项参数
 */
export interface DeliverAdditionParamVO {
  /** 发货附加项参数 */
  additionIdList?: number[];
}

/** DeliveryDayRangeDTO */
export interface DeliveryDayRangeDTO {
  /** @format int32 */
  deliveryDayEnd?: number;
  /** @format int32 */
  deliveryDayStart?: number;
}

/** DestinationTemplateDTO */
export interface DestinationTemplateDTO {
  area?: boolean;
  continuedWeight?: boolean;
  destination?: boolean;
  discount?: boolean;
  effectiveDate?: boolean;
  firstWeight?: boolean;
  forwarder?: boolean;
  kgPrice?: boolean;
  leastWeight?: boolean;
  limitWeight?: boolean;
  remarkNd?: boolean;
  remarkRd?: boolean;
  remarkSt?: boolean;
  transportMode?: boolean;
  transportPrice?: boolean;
  unitPrice?: boolean;
}

/** DownloadIntShipTemplateReqDTO */
export interface DownloadIntShipTemplateReqDTO {
  /** @format int32 */
  templateType?: number;
}

/** EditTransportationAttributesDTO */
export interface EditTransportationAttributesDTO {
  /** 异常原因编码 */
  abnormalReasonCode?: string;
  /** ID */
  attributeCode?: string;
  /** 运输属性英文名称 */
  attributeEnName?: string;
  /** 运输属性日文名称 */
  attributeJpName?: string;
  /** 运输属性英文名称 */
  attributeKoName?: string;
  /** 运输属性中文名称 */
  attributeName?: string;
  /**
   * 是否可以发货:  0 是  1否
   * @format int32
   */
  enableOutBound?: number;
}

/** EditWarehouseForwardConfigDTO */
export interface EditWarehouseForwardConfigDTO {
  /** 属性编码列表 */
  attributeDeliveryLimitAmounts?: AttributeDeliveryAmountLimitDTO[];
  /**
   * 货代主键ID
   * @format int64
   */
  intForwarderConfigId?: number;
  /** 货代主键ID集合 */
  intForwarderConfigIdList?: number[];
  /** 仓库列表 */
  warehouseList?: WarehouseRespDTO[];
}

/** EstimateIntShipFeeRespDTO */
export interface EstimateIntShipFeeRespDTO {
  estimateIntShipFee?: number;
}

/** ExchangeRateRespDTO */
export interface ExchangeRateRespDTO {
  currencyCodeFrom?: string;
  currencyCodeTo?: string;
  exchangeRate?: number;
  floatExchangeRate?: number;
  originalExchangeRate?: number;
  stationCode?: string;
}

/**
 * FloatExchangeRateConfig
 * 浮动汇率配置表
 */
export interface FloatExchangeRateConfig {
  /**
   * 关闭时间
   * @format date-time
   */
  closeTime?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 币种 */
  currencyCode?: string;
  /**
   * 有效期结束时间
   * @format date-time
   */
  endTime?: string;
  /** 浮动汇率 */
  floatExchangeRate?: number;
  /** @format int64 */
  floatExchangeRateConfigId?: number;
  /** 指定会员或者用户等级配置信息 */
  floatExchangeRateRangeConfig?: string;
  floatRateConfigObjectDTOS?: FloatRateConfigObjectDTO[];
  /** 国家 */
  nationCode?: string;
  /** 国家名称 */
  nationName?: string;
  /** @format int32 */
  operateType?: number;
  /**
   * 有效期开始时间
   * @format date-time
   */
  startTime?: string;
  /** 站点 */
  stationCode?: string;
  /**
   * 是否启用 手动关闭：0  开启：1  -1:自动关闭
   * @format int32
   */
  status?: number;
  /**
   * 系统来源: 1-D2C; 2-B2B
   * @format int32
   */
  systemSource?: number;
  /**
   * 配置类型 0：默认 1：全局 2：指定会员  3：指定用户 4：指定国家
   * @format int32
   */
  type?: number;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/** FloatExchangeRateConfigQueryDTO */
export interface FloatExchangeRateConfigQueryDTO {
  /** 用户UID */
  customerId?: string;
  /** 用户名称 */
  customerName?: string;
  /** @format date-time */
  endTime?: string;
  /** @format int64 */
  floatExchangeRateConfigId?: number;
  maxFloatExchangeRate?: number;
  /**
   * 会员id
   * @format int64
   */
  membershipTemplateId?: number;
  minFloatExchangeRate?: number;
  nationCode?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  sorts?: ISortFieldEnum[];
  /** @format int32 */
  startIndex?: number;
  /** @format date-time */
  startTime?: string;
  stationCode?: string;
  /**
   * 是否启用 手动关闭：0  开启：1  -1:自动关闭
   * @format int32
   */
  status?: number;
  /**
   * 配置类型 0：默认 1：全局 2：指定会员  3：指定用户
   * @format int32
   */
  type?: number;
  /** 用户名称 */
  userFullName?: string;
}

/** FloatRateConfigObjectDTO */
export interface FloatRateConfigObjectDTO {
  /**
   * 配置对象id
   * @format int64
   */
  configObjectId?: number;
  /** 配置对象名称 */
  configObjectName?: string;
  /** 用户登录名称 */
  loginName?: string;
  /** 会员身份名称 */
  membershipTemplateName?: string;
  /** 国家名称 */
  nationName?: string;
  /**
   * 系统来源: 1-D2C; 2-B2B
   * @format int32
   */
  systemSource?: number;
  /**
   * 配置对象类型
   * @format int32
   */
  type?: number;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
}

/** FundFlowInfoReqDTO */
export interface FundFlowInfoReqDTO {
  bizId?: string;
  /** @format int32 */
  bizType?: number;
  deliverOrderNo?: string;
  fundFlowTypeEnum?:
    | "RECHARGE"
    | "WITHDRAW"
    | "PRODUCT_SETTLEMENT"
    | "EXPRESS_AMOUNT"
    | "IL_CHARGE"
    | "SERVICE_CHARGE"
    | "AFTER_SALE_REFUND"
    | "AMOUNT_FREEZE"
    | "AMOUNT_UNFREEZE"
    | "TRANSFER_IN"
    | "TRANSFER_OUT"
    | "MEMBERSHIP_FEE"
    | "IL_CHARGE_WEIGHT_FEE"
    | "IL_CHARGE_SERVICE_FEE"
    | "COMMODITY_SERVICE_FEE"
    | "SHIPPING_SERVICE_FEE"
    | "SEARCH_SOURCE_CHARGE"
    | "SEARCH_SOURCE_CHARGE_REFUND"
    | "REPAYMENT"
    | "CUSTOMER_REFUND"
    | "WITHDRAW_REFUSED"
    | "RECHARGE_REFUSED"
    | "CUSTOMER_BILL_PAY"
    | "REFUND_DOMESTIC_FREIGHT"
    | "AMOUNT_REMAKE_FREEZE"
    | "COMMODITY_SERVICE_FEE_QUALITY_TRANSFORM"
    | "AMOUNT_REMAKE_OVERFLOW_FREEZE"
    | "IL_CHARGE_REFUND"
    | "RECHARGE_CANCEL"
    | "PROMOTION_RECHARGE"
    | "FEE_DEDUCTION"
    | "FEE_ACTUAL_DEDUCTION"
    | "FEE_ACTUAL_REFUND";
  orderNo?: string;
}

/** FundFlowRespDTO */
export interface FundFlowRespDTO {
  name?: string;
  /** @format int32 */
  type?: number;
}

/**
 * FundsManage
 * 资金管理
 */
export interface FundsManage {
  /** 售后退款 */
  afterSaleRefundAmount?: number;
  /** 可用余额 */
  availableAmount?: number;
  /** 余额充值金额 */
  balanceRechargeAmount?: number;
  /** 期初金额 */
  beginPeriodAmount?: number;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * 客户Id
   * @format int64
   */
  customerId?: number;
  /** 客户名称 */
  customerName?: string;
  /** 客户退款金额 */
  customerRefundAmount?: number;
  /** 国内运费 */
  domesticFreightAmount?: number;
  /**
   * 流水结束时间
   * @format date-time
   */
  flowEndTime?: string;
  /**
   * 流水开始时间
   * @format date-time
   */
  flowStartTime?: string;
  /** 冻结金额 */
  freezeAmount?: number;
  /**
   * id
   * @format int64
   */
  fundsManageId?: number;
  /** 国际运费 */
  internationalFreightAmount?: number;
  /** 会员费 */
  membershipAmount?: number;
  /** 转入金额 */
  rollInAmount?: number;
  /** 转出金额 */
  rollOutAmount?: number;
  /** 系统来源: 1-D2C; 2-B2B */
  systemSource?: string;
  /** 费用配置项总费用 */
  totalCostConfigAmount?: number;
  /** 销售总价（RMB） */
  totalSellingAmount?: number;
  /** 解冻金额 */
  unfreezeAmount?: number;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  /** 提现金额 */
  withdrawAmount?: number;
}

/**
 * FundsManageQueryVO
 * 资金管理查询
 */
export interface FundsManageQueryVO {
  /**
   * 结束日期
   * @format date-time
   */
  createTimeEnd?: string;
  /**
   * 开始日期
   * @format date-time
   */
  createTimeStart?: string;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  deleteFlag?: boolean;
  fundFlowType?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  sorts?: ISortFieldEnum[];
  /** @format int32 */
  startIndex?: number;
  /** 系统来源: 1-D2C; 2-B2B */
  systemSource?: string;
}

/** GetEstimateIntShipFeeReqDTO */
export interface GetEstimateIntShipFeeReqDTO {
  /** @format int64 */
  intShipConfigId?: number;
  weight?: number;
}

/** GetIntShipFeeReqDTO */
export interface GetIntShipFeeReqDTO {
  /** @format date-time */
  deliveryTime?: string;
  destination?: string;
  feeInfoDTOList?: IntShipFeeInfoDTO[];
  /** @format int64 */
  intShipConfigId?: number;
}

/** GetShipFeeInfoReqDTO */
export interface GetShipFeeInfoReqDTO {
  /** @format int64 */
  intShipBillId?: number;
}

/**
 * GoodsInfo
 * 商品信息
 */
export interface GoodsInfo {
  /** 商品Id */
  goodsId?: string;
  /** 商品图片 */
  goodsImageUrl?: string;
  /** 商品名称 */
  goodsName?: string;
  /** 商品价格 */
  goodsPrice?: number;
  /** 商品url */
  goodsUrl?: string;
}

/**
 * GrossProfitRateCustomerDetailListVO
 * 客户毛利率明细数据
 */
export interface GrossProfitRateCustomerDetailListVO {
  /** 用户id */
  customer_id?: string;
  /** 国际运费 */
  customer_international_logistics_amt?: number;
  /** 国际运费成本 */
  customer_international_logistics_cost?: number;
  /** 国际运费毛利率（%） */
  customer_international_logistics_profit_rate?: number;
  /** 国内运费 */
  customer_logistics_amt?: number;
  /** 国内运费成本 */
  customer_logistics_cost?: number;
  /** 国内运费毛利率（%） */
  customer_logistics_profit_rate?: number;
  /** 用户姓名 */
  customer_name?: string;
  /** 总毛利率（%） */
  customer_profit_rate?: number;
  /** 采购销售额 */
  customer_purchase_amt?: number;
  /** 采购成本 */
  customer_purchase_cost?: number;
  /** 采购销售额毛利率（%） */
  customer_purchase_profit_rate?: number;
  /** 返金 */
  customer_refund_amt?: number;
  /** 总销售额 */
  customer_total_amt?: number;
  /** 总成本 */
  customer_total_cost?: number;
  /** 手续费 */
  customer_total_service_charge?: number;
  /** 手续费成本 */
  customer_total_service_charge_cost?: number;
  /** 手续费毛利率（%） */
  customer_total_service_charge_rate?: number;
  /**
   * 来源类型；1：2C；2：2B
   * @format int32
   */
  system_source?: number;
}

/**
 * GrossProfitRateCustomerListVO
 * 客户毛利率数据
 */
export interface GrossProfitRateCustomerListVO {
  /** 用户id */
  customer_id?: string;
  /** 国际运费 */
  customer_international_logistics_amt?: number;
  /** 国际运费毛利率（%） */
  customer_international_logistics_profit_rate?: number;
  /** 国内运费 */
  customer_logistics_amt?: number;
  /** 国内运费毛利率（%） */
  customer_logistics_profit_rate?: number;
  /** 用户姓名 */
  customer_name?: string;
  /** 总毛利率（%） */
  customer_profit_rate?: number;
  /** 采购销售额 */
  customer_purchase_amt?: number;
  /** 采购销售额毛利率（%） */
  customer_purchase_profit_rate?: number;
  /** 返金 */
  customer_refund_amt?: number;
  /** 总销售额 */
  customer_total_amt?: number;
  /** 手续费 */
  customer_total_service_charge?: number;
  /** 手续费毛利率（%） */
  customer_total_service_charge_rate?: number;
  /** 日期 */
  dt?: string;
  /**
   * 来源类型；1：2C；2：2B
   * @format int32
   */
  system_source?: number;
}

/**
 * GrossProfitRateDeliveryListVO
 * 发货毛利率数据
 */
export interface GrossProfitRateDeliveryListVO {
  /** 用户id */
  customer_id?: string;
  /** 用户姓名 */
  customer_name?: string;
  /** 发货单号 */
  delivery_task_code?: string;
  /** 发货时间 */
  delivery_time?: string;
  /** 国际运费 */
  international_logistics_amt?: number;
  /** 国际运费毛利率 */
  international_logistics_profit_rate?: number;
  /** 出库手续费 */
  outbound_service_charge?: number;
  /** 出库手续费毛利率 */
  outbound_service_profit_rate?: number;
  /** 扣款金额 */
  supplementary_fee?: number;
  /** 发货附加费 */
  total_additional_fee?: number;
  /** 发货附加费毛利率 */
  total_additional_profit_rate?: number;
}

/**
 * GrossProfitRateOrderListVO
 * 订单毛利率数据
 */
export interface GrossProfitRateOrderListVO {
  /** 用户id */
  customer_id?: string;
  /** 用户姓名 */
  customer_name?: string;
  /** 国际运费 */
  international_logistics_amt?: number;
  /** 国际运费毛利率（%） */
  international_ogistics_profit_rate?: number;
  /** 国内运费 */
  logistics_amt?: number;
  /** 国内运费毛利率（%） */
  logistics_profit_rate?: number;
  /** 总毛利率（%） */
  order_profit_rate?: number;
  /** 结算时间 */
  order_settle_time?: string;
  /** 总订单销售额 */
  order_total_amt?: number;
  /** 采购销售额 */
  purchase_amt?: number;
  /** 采购销售额毛利率（%） */
  purchase_profit_rate?: number;
  /** 返金 */
  refund_amt?: number;
  /** 状态 */
  status?: string;
  /** 订单号 */
  system_order_no?: string;
  /**
   * 来源类型；1：2C；2：2B
   * @format int32
   */
  system_source?: number;
  /** 手续费 */
  total_service_charge?: number;
  /** 手续费毛利率（%） */
  total_service_charge_rate?: number;
}

/** ISortFieldEnum */
export interface ISortFieldEnum {
  asc?: boolean;
  field?: string;
}

/** ImportExcelModel */
export interface ImportExcelModel {
  /** 错误信息 */
  errorMsg?: string;
  /**
   * 行号
   * @format int32
   */
  rowNum?: number;
}

/** ImportExcelResultModel */
export interface ImportExcelResultModel {
  /** 失败列表 */
  failList?: ImportExcelModel[];
  /**
   * 失败数
   * @format int32
   */
  failNum?: number;
  /** 已处理，无需导入的行 */
  processedList?: ImportExcelModel[];
  /**
   * 成功数
   * @format int32
   */
  successNum?: number;
}

/**
 * InnerShipAmtResultVO
 * 国内物流计算结果
 */
export interface InnerShipAmtResultVO {
  /** 汇率 */
  exchangeRate?: number;
  /** 总金额(外币) */
  totalAmt?: number;
  /** 总金额(人民币) */
  totalAmtCn?: number;
}

/** InsertIntForwarderConfigReqDTO */
export interface InsertIntForwarderConfigReqDTO {
  contentReqDTOList?: IntForwarderContentReqDTO[];
  countryCnName?: string;
  countryCode?: string;
  countryEnName?: string;
  countryJpyName?: string;
  /** @format int64 */
  customerId?: number;
  forwarder?: string;
  intForwarderConfigIds?: number[];
  logisticsCompanyCode?: string;
  membershipIdList?: number[];
  shippingType?: string;
}

/** InsertIntShipConfigReqDTO */
export interface InsertIntShipConfigReqDTO {
  /** @format int64 */
  baseLogisticsId?: number;
  contentReqDTOList?: IntShipContentReqDTO[];
  deliveryDayRange?: DeliveryDayRangeDTO;
  distribution?: string;
  forwarderIds?: number[];
  logisticsFeature?: string;
  logo?: string;
  membershipIdList?: number[];
  officialWebsiteLink?: string;
  stationCode?: string;
  /** @format int32 */
  systemSource?: number;
  /** @format int32 */
  transportType?: number;
}

/** IntAreaResp */
export interface IntAreaResp {
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  intAreaId?: number;
  label?: string;
  /** @format int64 */
  parentId?: number;
  /** @format int32 */
  type?: number;
  /** @format date-time */
  updateTime?: string;
}

/** IntForwarderConfigCountryRespDTO */
export interface IntForwarderConfigCountryRespDTO {
  countryCnName?: string;
  countryCode?: string;
  countryEnName?: string;
  countryJpyName?: string;
  forwarder?: string;
}

/** IntForwarderConfigInfoRespDTO */
export interface IntForwarderConfigInfoRespDTO {
  countryCnName?: string;
  countryCode?: string;
  countryEnName?: string;
  countryJpyName?: string;
  /** @format date-time */
  createTime?: string;
  forwarder?: string;
  /** @format int64 */
  intForwarderConfigId?: number;
  intForwarderContentList?: IntForwarderContentRespDTO[];
  logisticsCompanyCode?: string;
  membershipIds?: string[];
  shippingType?: string;
  /** @format date-time */
  updateTime?: string;
  warehouseList?: string[];
}

/** IntForwarderConfigQuery */
export interface IntForwarderConfigQuery {
  countryCode?: string;
  forwarder?: string;
  intForwarderConfigIdList?: number[];
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  shippingType?: string;
  sorts?: ISortFieldEnum[];
  /** @format int32 */
  startIndex?: number;
}

/** IntForwarderConfigRespDTO */
export interface IntForwarderConfigRespDTO {
  /** 国家中文名称 */
  countryCnName?: string;
  /** 国家code */
  countryCode?: string;
  /** 国家英文文名称 */
  countryEnName?: string;
  /** 国家日文名称 */
  countryJpyName?: string;
  /** @format date-time */
  createTime?: string;
  forwarder?: string;
  /** @format int64 */
  intForwarderConfigId?: number;
  logisticsCompanyCode?: string;
  membershipName?: string[];
  shippingType?: string;
  /** @format date-time */
  updateTime?: string;
  warehouseList?: string[];
}

/** IntForwarderContentReqDTO */
export interface IntForwarderContentReqDTO {
  areaPriceList?: AreaPriceDTO[];
  continuedWeight?: number;
  continuedWeightPrice?: number;
  /** @format date-time */
  endTime?: string;
  firstWeight?: number;
  firstWeightPrice?: number;
  fuelPrice?: number;
  /** @format int32 */
  intForwarderContentStatus?: number;
  leastWeight?: number;
  logisticsDescription?: string;
  peakSeasonPrice?: number;
  sendableAddress?: number[];
  /** @format date-time */
  startTime?: string;
  /** @format int32 */
  unitPriceType?: number;
  weightConfList?: WeightConfDTO[];
  weightThrowingDivisor?: number;
  /** @format int32 */
  weightThrowingType?: number;
}

/** IntForwarderContentRespDTO */
export interface IntForwarderContentRespDTO {
  areaPriceList?: AreaPriceDTO[];
  continuedWeight?: number;
  continuedWeightPrice?: number;
  /** @format date-time */
  createTime?: string;
  /** @format date-time */
  endTime?: string;
  firstWeight?: number;
  firstWeightPrice?: number;
  fuelPrice?: number;
  /** @format int64 */
  intForwarderContentId?: number;
  /** @format int32 */
  intForwarderContentStatus?: number;
  leastWeight?: number;
  logisticsDescription?: string;
  peakSeasonPrice?: number;
  sendableAddress?: string[];
  /** @format date-time */
  startTime?: string;
  /** @format int32 */
  unitPriceType?: number;
  /** @format date-time */
  updateTime?: string;
  weightConfList?: WeightConfDTO[];
  weightThrowingDivisor?: number;
  /** @format int32 */
  weightThrowingType?: number;
}

/** IntShipBillQuery */
export interface IntShipBillQuery {
  /**
   * 创建时间结束
   * @format date-time
   */
  createTimeEnd?: string;
  /**
   * 创建时间开始
   * @format date-time
   */
  createTimeStart?: string;
  /**
   * 异常编码;1:基础运费差异异常;2:计价差异异常;3:利润异常;4:未匹配订单;5:未匹配价格配置
   * @format int32
   */
  exceptionCode?: number;
  /**
   * 异常状态;1:异常;0:正常
   * @format int32
   */
  exceptionStatus?: number;
  /** 货代公司 */
  forwarder?: string;
  /**
   * 是否是历史数据，0唯一且最新数据，1历史数据
   * @format int32
   */
  history?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  sorts?: ISortFieldEnum[];
  /** @format int32 */
  startIndex?: number;
  /** 站点国家 */
  stationCode?: string;
  /**
   * 系统来源: 1-D2C; 2-B2B
   * @format int32
   */
  systemSource?: number;
  /** 总应收金额最大 */
  totalRecAmountMax?: number;
  /** 总应收金额最小 */
  totalRecAmountMin?: number;
  /** 转单号 */
  transferNumber?: string;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
  /** 计价重最大 */
  valuationWeightMax?: number;
  /** 计价重最小 */
  valuationWeightMin?: number;
  /**
   * 入库时间结束
   * @format date-time
   */
  warehousingTimeEnd?: string;
  /**
   * 入库时间开始
   * @format date-time
   */
  warehousingTimeStart?: string;
  /** 运单号 */
  waybillNumber?: string;
}

/** IntShipBillRespDTO */
export interface IntShipBillRespDTO {
  /** 体积重 */
  bulky?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /**
   * 客户ID
   * @format int64
   */
  customerId?: number;
  /** 客户名称 */
  customerName?: string;
  /**
   * 客户店铺id
   * @format int64
   */
  customerShopId?: number;
  /** 客户店铺名称 */
  customerShopName?: string;
  /** 目的地 */
  destination?: string;
  /**
   * 异常编码;1:基础运费差异异常;2:计价差异异常;3:利润异常;4:未匹配订单;5:未匹配配置
   * @format int32
   */
  exceptionCode?: number;
  /**
   * 异常状态;1:异常;0:正常
   * @format int32
   */
  exceptionStatus?: number;
  /** 货代公司 */
  forwarder?: string;
  /**
   * 是否是历史数据，0唯一且最新数据，1历史数据
   * @format int32
   */
  history?: number;
  /**
   * id
   * @format int64
   */
  intShipBillId?: number;
  /** 错误信息 */
  messageError?: string;
  /** 实重 */
  netWeight?: number;
  /** 订单号 */
  orderNumber?: string;
  /**
   * 件数
   * @format int32
   */
  pieceQunatity?: number;
  /** 国际运费利率 */
  refundRate?: number;
  /** 预留字段-备注2 */
  remarkNd?: string;
  /** 预留字段-备注3 */
  remarkRd?: string;
  /** 预留字段-备注1 */
  remarkSt?: string;
  /** 复核基础运费 */
  reviewBaseAmount?: number;
  /** 复核基础运费差异： 总应收-复核基础运费 */
  reviewBaseAmountDiff?: number;
  /**
   * 发货状态
   * @format int32
   */
  shipmentStatus?: number;
  /** 国际运费扣款金额 */
  shippingAmount?: number;
  /** 国际运费扣款差异： 国际运费扣款金额-总应收 */
  shippingAmountDiff?: number;
  /** 站点国家 */
  stationCode?: string;
  /**
   * 系统来源: 1-D2C; 2-B2B
   * @format int32
   */
  systemSource?: number;
  /** 总应收金额 */
  totalRecAmount?: number;
  /** 转单号 */
  transferNumber?: string;
  /** 运输方式 */
  transportMode?: string;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 计价重 */
  valuationWeight?: number;
  /** 材积尺寸 */
  volumeSize?: string;
  /**
   * 入库时间
   * @format date-time
   */
  warehousingTime?: string;
  /** 运单号 */
  waybillNumber?: string;
}

/** IntShipConfigInfoRespDTO */
export interface IntShipConfigInfoRespDTO {
  /** @format int64 */
  baseLogisticsId?: number;
  /** @format date-time */
  createTime?: string;
  deliveryDayRange?: DeliveryDayRangeDTO;
  distribution?: string;
  forwarderIds?: number[];
  /** @format int64 */
  intShipConfigId?: number;
  intShipContentList?: IntShipContentRespDTO[];
  logisticsFeature?: string;
  logo?: string;
  membershipIds?: string[];
  officialWebsiteLink?: string;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  transportType?: number;
  transportTypeName?: string;
  /** @format date-time */
  updateTime?: string;
}

/** IntShipConfigListQuery */
export interface IntShipConfigListQuery {
  countryCode?: string;
  countryJpyName?: string;
  /** @format int64 */
  customerId?: number;
  forwarder?: string;
  intShipConfigIds?: number[];
  /** @format int64 */
  membershipTemplateId?: number;
  stationCode?: string;
  /** @format int32 */
  systemSource?: number;
}

/** IntShipConfigQuery */
export interface IntShipConfigQuery {
  distribution?: string;
  forwarder?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  sorts?: ISortFieldEnum[];
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
  /** @format int32 */
  systemSource?: number;
  /** @format int32 */
  transportType?: number;
}

/** IntShipConfigRespDTO */
export interface IntShipConfigRespDTO {
  /** @format date-time */
  createTime?: string;
  deliveryDayRange?: DeliveryDayRangeDTO;
  distribution?: string;
  forwarderName?: string[];
  /** @format int64 */
  intShipConfigId?: number;
  logisticsFeature?: string;
  logo?: string;
  membershipName?: string[];
  officialWebsiteLink?: string;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  status?: number;
  /** @format int32 */
  systemSource?: number;
  /** @format int32 */
  transportType?: number;
  transportTypeName?: string;
  /** @format date-time */
  updateTime?: string;
}

/** IntShipContentReqDTO */
export interface IntShipContentReqDTO {
  areaPriceList?: AreaPriceDTO[];
  continuedWeight?: number;
  continuedWeightPrice?: number;
  /** @format date-time */
  endTime?: string;
  firstWeight?: number;
  firstWeightPrice?: number;
  fuelPrice?: number;
  /** @format int32 */
  intShipContentStatus?: number;
  leastWeight?: number;
  logisticsDescription?: string;
  peakSeasonPrice?: number;
  sendableAddress?: number[];
  /** @format date-time */
  startTime?: string;
  /** @format int32 */
  unitPriceType?: number;
  weightConfList?: WeightConfDTO[];
  weightThrowingDivisor?: number;
  /** @format int32 */
  weightThrowingType?: number;
}

/** IntShipContentRespDTO */
export interface IntShipContentRespDTO {
  /** 偏远地区附加费详情 */
  areaPriceList?: AreaPriceDTO[];
  /** 续重(千克) */
  continuedWeight?: number;
  /** 续重价格 */
  continuedWeightPrice?: number;
  /** @format date-time */
  createTime?: string;
  /** @format date-time */
  endTime?: string;
  /** 首重(千克) */
  firstWeight?: number;
  /** 首重价格 */
  firstWeightPrice?: number;
  /** 燃油附加费率 */
  fuelPrice?: number;
  /** @format int64 */
  intShipContentId?: number;
  /**
   * 是否启用，0否，1是
   * @format int32
   */
  intShipContentStatus?: number;
  isApproximation?: boolean;
  /** 大包起重(千克) */
  leastWeight?: number;
  /** 物流说明 */
  logisticsDescription?: string;
  /** 旺季附加费单价 */
  peakSeasonPrice?: number;
  /** 可发送地址，1：FBA纳品；2：非FBA纳品 */
  sendableAddress?: string[];
  /** 可发送地址，1：FBA纳品；2：非FBA纳品 */
  sendableAddressDesc?: string[];
  /** @format date-time */
  startTime?: string;
  /**
   * 计费单价类型;1-小包;2-大包;3-大包+小包
   * @format int32
   */
  unitPriceType?: number;
  /** @format date-time */
  updateTime?: string;
  weight?: number;
  /** 重量范围配置 */
  weightConfList?: WeightConfDTO[];
  /** 抛重除数 */
  weightThrowingDivisor?: number;
  /**
   * 计费重量类型;1-全抛;2-半抛;3-不抛
   * @format int32
   */
  weightThrowingType?: number;
}

/** IntShipFeeDetailRespDTO */
export interface IntShipFeeDetailRespDTO {
  bulky?: number;
  continuedWeight?: number;
  continuedWeightPrice?: number;
  /** @format date-time */
  createTime?: string;
  firstWeight?: number;
  firstWeightPrice?: number;
  forwarder?: string;
  fuelFormula?: string;
  fuelPrice?: number;
  /** @format int64 */
  intShipBillId?: number;
  /** @format int64 */
  intShipFeeDetailId?: number;
  leastWeight?: number;
  maxWeight?: number;
  minWeight?: number;
  netWeight?: number;
  peakSeasonFormula?: string;
  peakSeasonPrice?: number;
  reviewBaseAmount?: number;
  shipFeeFormula?: string;
  /** 站点国家 */
  stationCode?: string;
  transportMode?: string;
  unitPrice?: number;
  unitPriceFormula?: string;
  /** @format int32 */
  unitPriceType?: number;
  unitWeight?: number;
  /** @format date-time */
  updateTime?: string;
  weightThrowingDivisor?: number;
  /** @format int32 */
  weightThrowingType?: number;
}

/** IntShipFeeInfoDTO */
export interface IntShipFeeInfoDTO {
  insidePackCode?: string;
  /** @format int64 */
  volume?: number;
  /** @format int64 */
  weight?: number;
}

/** IntShipFeeInfoRespDTO */
export interface IntShipFeeInfoRespDTO {
  bulky?: number;
  insidePackCode?: string;
  intShipFee?: number;
  remoteAreaFee?: number;
  volume?: number;
  weight?: number;
  /** @format int32 */
  weightThrowingType?: number;
}

/** IntShipForwardersRespDTO */
export interface IntShipForwardersRespDTO {
  deliveryDays?: string;
  distribution?: string;
  forwarders?: IntForwarderConfigRespDTO[];
  /** @format int64 */
  intShipConfigId?: number;
  logisticsFeature?: string;
  logo?: string;
  officialWebsiteLink?: string;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  transportType?: number;
}

/** IntShipOtherQuery */
export interface IntShipOtherQuery {
  /** 货代公司 */
  forwarder?: string;
  /**
   * 是否是历史数据，0唯一且最新数据，1历史数据
   * @format int32
   */
  history?: number;
  /**
   * 补扣状态。0:未补扣;默认0;1:已补扣;9:不可补扣;
   * @format int32
   */
  makeUpStatus?: number;
  /** 合计费用最大 */
  originalTotalFeeMax?: number;
  /** 合计费用最小 */
  originalTotalFeeMin?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** 费用说明 */
  shippingDescription?: string;
  sorts?: ISortFieldEnum[];
  /** @format int32 */
  startIndex?: number;
  /** 站点 */
  stationCode?: string;
  /**
   * 系统来源: 1-D2C; 2-B2B
   * @format int32
   */
  systemSource?: number;
  /** 转单号 */
  transferNumber?: string;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
  /**
   * 入库时间结束
   * @format date-time
   */
  warehousingTimeEnd?: string;
  /**
   * 入库时间开始
   * @format date-time
   */
  warehousingTimeStart?: string;
}

/** IntShipOtherRespDTO */
export interface IntShipOtherRespDTO {
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /**
   * 客户ID
   * @format int64
   */
  customerId?: number;
  /** 客户名称 */
  customerName?: string;
  /** 客户偏远地区费 */
  customerRemoteAreaFee?: number;
  /**
   * 客户店铺id
   * @format int64
   */
  customerShopId?: number;
  /** 客户店铺名称 */
  customerShopName?: string;
  /** 目的地 */
  destination?: string;
  /** 销毁费 */
  destructionFee?: number;
  /** 扣件费 */
  fastenerFee?: number;
  /** 货代公司 */
  forwarder?: string;
  /**
   * 是否是历史数据，0唯一且最新数据，1历史数据
   * @format int32
   */
  history?: number;
  /**
   * id
   * @format int64
   */
  intShipOtherId?: number;
  /**
   * 补扣状态;0:未补扣;默认0;1:已补扣;9:不可补扣;
   * @format int32
   */
  makeUpStatus?: number;
  /**
   * 补扣时间
   * @format date-time
   */
  makeUpTime?: string;
  /** 实重 */
  netWeight?: number;
  /** 国际发货单号 */
  orderNumber?: string;
  /** 合计费用(原始) */
  originalTotalFee?: number;
  /** 超重超长费 */
  oversizeweightFee?: number;
  /**
   * 件数
   * @format int32
   */
  pieceQunatity?: number;
  /** 改派费 */
  redistributionFee?: number;
  /** 退差价 */
  refundFee?: number;
  /** 预留字段-备注2 */
  remarkNd?: string;
  /** 预留字段-备注3 */
  remarkRd?: string;
  /** 预留字段-备注1 */
  remarkSt?: string;
  /** 偏远地区费 */
  remoteAreaFee?: number;
  /** 偏远地区费差异 */
  remoteAreaFeeDiff?: number;
  /** 退件费 */
  returnFee?: number;
  /** 费用说明 */
  shippingDescription?: string;
  /** 特殊处理费 */
  specialHandlingFee?: number;
  /** 站点 */
  stationCode?: string;
  /** 仓储费 */
  storageFee?: number;
  /**
   * 系统来源: 1-D2C; 2-B2B
   * @format int32
   */
  systemSource?: number;
  /** 关税 */
  tariffFee?: number;
  /** 合计费用 */
  totalFee?: number;
  /** 转单号 */
  transferNumber?: string;
  /** 运输方式名称 */
  transportMode?: string;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 计价重 */
  valuationWeight?: number;
  /** 材积重(天汇) */
  volumeWeight?: number;
  /**
   * 入库时间
   * @format date-time
   */
  warehousingTime?: string;
  /** 运单号 */
  waybillNumber?: string;
}

/** IntShipSortDTO */
export interface IntShipSortDTO {
  /** @format int64 */
  intShipConfigId?: number;
  /** @format int32 */
  sort?: number;
}

/** IntShipTemplateAddReqDTO */
export interface IntShipTemplateAddReqDTO {
  billAddOnTemplateDTO?: BillAddOnTemplateDTO;
  billBasicQuotationTemplateDTO?: BillBasicQuotationTemplateDTO;
  destinationTemplateDTO?: DestinationTemplateDTO;
  forwarder?: string;
  /** @format int32 */
  systemSource?: number;
  /** @format int32 */
  templateType?: number;
}

/** IntShipTemplateEditReqDTO */
export interface IntShipTemplateEditReqDTO {
  billAddOnTemplateDTO?: BillAddOnTemplateDTO;
  billBasicQuotationTemplateDTO?: BillBasicQuotationTemplateDTO;
  destinationTemplateDTO?: DestinationTemplateDTO;
  forwarder?: string;
  /** @format int64 */
  intShipTemplateId?: number;
  /** @format int32 */
  templateType?: number;
}

/** IntShipTemplateInfoRespDTO */
export interface IntShipTemplateInfoRespDTO {
  billAddOnTemplateDTO?: BillAddOnTemplateDTO;
  billBasicQuotationTemplateDTO?: BillBasicQuotationTemplateDTO;
  destinationTemplateDTO?: DestinationTemplateDTO;
  forwarder?: string;
  /** @format int64 */
  intShipTemplateId?: number;
  /** @format int32 */
  systemSource?: number;
  templateName?: string;
  /** @format int32 */
  templateType?: number;
}

/** IntShipTemplateQuery */
export interface IntShipTemplateQuery {
  forwarder?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  sorts?: ISortFieldEnum[];
  /** @format int32 */
  startIndex?: number;
  /** @format int32 */
  systemSource?: number;
  /** @format int32 */
  templateType?: number;
}

/** IntShipTemplateRespDTO */
export interface IntShipTemplateRespDTO {
  /** @format date-time */
  createTime?: string;
  forwarder?: string;
  /** @format int64 */
  intShipTemplateId?: number;
  /** @format int32 */
  systemSource?: number;
  templateName?: string;
  /** @format int32 */
  templateType?: number;
  /** @format date-time */
  updateTime?: string;
}

/** IntShipTieredDiffQuery */
export interface IntShipTieredDiffQuery {
  /**
   * 异常编码;1:实重差异异常;2:计价重差异异常;
   * @format int32
   */
  exceptionCode?: number;
  /**
   * 异常状态;1:异常;0:正常;
   * @format int32
   */
  exceptionStatus?: number;
  /**
   * 是否是历史数据，0唯一且最新数据，1历史数据
   * @format int32
   */
  history?: number;
  /**
   * 补扣状态。0:未补扣;默认0;1:已补扣;9:不可补扣;
   * @format int32
   */
  makeUpStatus?: number;
  /** 实重最大 */
  netWeightMax?: number;
  /** 实重最小 */
  netWeightMin?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  sorts?: ISortFieldEnum[];
  /** @format int32 */
  startIndex?: number;
  /** 站点 */
  stationCode?: string;
  /**
   * 系统来源: 1-D2C; 2-B2B
   * @format int32
   */
  systemSource?: number;
  /** 转单号 */
  transferNumber?: string;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
  /** 计价重最大 */
  valuationWeightMax?: number;
  /** 计价重最小 */
  valuationWeightMin?: number;
  /**
   * 入库时间结束
   * @format date-time
   */
  warehousingTimeEnd?: string;
  /**
   * 入库时间开始
   * @format date-time
   */
  warehousingTimeStart?: string;
}

/** IntShipTieredDiffRespDTO */
export interface IntShipTieredDiffRespDTO {
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /**
   * 客户ID
   * @format int64
   */
  customerId?: number;
  /** 客户名称 */
  customerName?: string;
  /**
   * 客户店铺id
   * @format int64
   */
  customerShopId?: number;
  /** 客户店铺名称 */
  customerShopName?: string;
  /**
   * 异常编码;1:实重差异异常;2:计价重差异异常;
   * @format int32
   */
  exceptionCode?: number;
  /**
   * 异常状态;1:异常;0:正常;
   * @format int32
   */
  exceptionStatus?: number;
  /** 货代公司 */
  forwarder?: string;
  /**
   * 是否是历史数据，0唯一且最新数据，1历史数据
   * @format int32
   */
  history?: number;
  /**
   * 国际运费账单表主键id
   * @format int64
   */
  intShipBillId?: number;
  /**
   * id
   * @format int64
   */
  intShipTieredDiffId?: number;
  /**
   * 补扣状态。0:未补扣;默认0;1:已补扣;9:不可补扣;
   * @format int32
   */
  makeUpStatus?: number;
  /**
   * 补扣时间
   * @format date-time
   */
  makeUpTime?: string;
  /** 实重 */
  netWeight?: number;
  /** 系统订单计价重 */
  orderValuationWeight?: number;
  /** 站点 */
  stationCode?: string;
  /** 系统订单重量 */
  sysOrderWeight?: number;
  /**
   * 系统来源: 1-D2C; 2-B2B
   * @format int32
   */
  systemSource?: number;
  /** 转单号 */
  transferNumber?: string;
  /** 运输方式 */
  transportMode?: string;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 计价金额差异 */
  valuationAmountDiff?: number;
  /** 计价重差异 */
  valuationDiff?: number;
  /** 计价重 */
  valuationWeight?: number;
  /**
   * 入库时间
   * @format date-time
   */
  warehousingTime?: string;
  /** 订单重量和实重差异 */
  weightDiff?: number;
}

/** IntShipUpdateSortReqDTO */
export interface IntShipUpdateSortReqDTO {
  sortList?: IntShipSortDTO[];
}

/** InventoryConfigDTO */
export interface InventoryConfigDTO {
  /** @format date-time */
  endDate?: string;
  /** @format int64 */
  freeNum?: number;
  ladderPrices?: LadderPrice[];
  price?: number;
  /** @format date-time */
  startDate?: string;
  volumeType?: string;
}

/**
 * InventoryParamVO
 * 库存保管费参数
 */
export interface InventoryParamVO {
  /**
   * 保管天数
   * @format int64
   */
  days?: number;
}

/**
 * JxhyProductAmountRangeDTO
 * 1688精选货源优惠金额区间分布表
 */
export interface JxhyProductAmountRangeDTO {
  /**
   * 金额区间：1：(0～1元]，5:(1~5元],10:(5~10元],50:(10~50元],60:(50元以上]
   * @format int32
   */
  amountRangeType?: number;
  /**
   * 商品数
   * @format int64
   */
  productNum?: number;
  /** 商品占比 */
  productNumPer?: number;
  /**
   * 商品SKU数
   * @format int64
   */
  productSkuNum?: number;
  /** 商品SKU占比 */
  productSkuNumPer?: number;
}

/**
 * JxhyProductCateRangeDTO
 * 1688品类折扣率及优惠区间分布表
 */
export interface JxhyProductCateRangeDTO {
  /** 类目名称 */
  categoryName?: string;
  /**
   * 精选货源商品数量
   * @format int64
   */
  jxhyProductNum?: number;
  /**
   * 精选货源商品SKU数量
   * @format int64
   */
  jxhySkuidNum?: number;
  /**
   * 精选—批发大于精选
   * @format int64
   */
  jxhySkuidNumDa?: number;
  /**
   * 精选—批发大于精选0-1
   * @format int64
   */
  jxhySkuidNumDa1?: number;
  /**
   * 精选—批发大于精选5-10
   * @format int64
   */
  jxhySkuidNumDa10?: number;
  /**
   * 精选—批发大于精选1-5
   * @format int64
   */
  jxhySkuidNumDa5?: number;
  /**
   * 精选—批发大于精选10-50
   * @format int64
   */
  jxhySkuidNumDa50?: number;
  /**
   * 精选—批发大于精选>50
   * @format int64
   */
  jxhySkuidNumDa60?: number;
  /**
   * 精选—批发大于精选0-1%
   * @format int64
   */
  jxhySkuidNumDaPer1?: number;
  /**
   * 精选—批发大于精选5%-10%
   * @format int64
   */
  jxhySkuidNumDaPer10?: number;
  /**
   * 精选—批发大于精选10%-20%
   * @format int64
   */
  jxhySkuidNumDaPer20?: number;
  /**
   * 精选—批发大于精选1%-5%
   * @format int64
   */
  jxhySkuidNumDaPer5?: number;
  /**
   * 精选—批发大于精选20%-50%
   * @format int64
   */
  jxhySkuidNumDaPer50?: number;
  /**
   * 精选—批发大于精选>50%
   * @format int64
   */
  jxhySkuidNumDaPer60?: number;
  /**
   * 分销商品数量
   * @format int64
   */
  productNum?: number;
  /**
   * 分销商品SKU数量
   * @format int64
   */
  skuidNum?: number;
}

/**
 * JxhyProductDiscountRangeDTO
 * 1688精选货源折扣率区间分布表
 */
export interface JxhyProductDiscountRangeDTO {
  /**
   * 折扣区间：1：(0～1%]，5:(1~5%],10:(5~10%],20:(10~20%],50:(20~50%],60:(50%以上]
   * @format int32
   */
  discountRangeType?: number;
  /**
   * 商品数
   * @format int64
   */
  productNum?: number;
  /** 商品占比 */
  productNumPer?: number;
  /**
   * 商品SKU数
   * @format int64
   */
  productSkuNum?: number;
  /** 商品SKU占比 */
  productSkuNumPer?: number;
}

/**
 * JxhyProductRangeDTO
 * 1688精选货源折扣率区间分布表
 */
export interface JxhyProductRangeDTO {
  /**
   * 商品数
   * @format int64
   */
  productNum?: number;
  /** 商品占比 */
  productNumPer?: number;
  /**
   * 商品SKU数
   * @format int64
   */
  productSkuNum?: number;
  /** 商品SKU占比 */
  productSkuNumPer?: number;
  /** 列名 */
  title?: string;
}

/** LableValue */
export interface LableValue {
  code?: string;
  value?: string;
}

/**
 * LadderPrice
 * 阶梯价格
 */
export interface LadderPrice {
  /**
   * 结束天数
   * @format int32
   */
  endNum?: number;
  /** 范围内单价 */
  price?: number;
  /**
   * 起始天数
   * @format int32
   */
  startNum?: number;
}

/** LogisticsAndForwarderQuery */
export interface LogisticsAndForwarderQuery {
  /** @format int64 */
  intForwarderConfigId?: number;
  /** @format int64 */
  intShipConfigId?: number;
  /** @format int32 */
  systemSource?: number;
  warehouse?: string;
}

/** LogisticsAndForwarderRespDTO */
export interface LogisticsAndForwarderRespDTO {
  distribution?: string;
  distributionJp?: string;
  forwarder?: string;
  forwarderJp?: string;
  /** @format int64 */
  intForwarderConfigId?: number;
  /** @format int64 */
  intShipConfigId?: number;
  shippingType?: string;
  shippingTypeJp?: string;
}

/** LogisticsCompany */
export interface LogisticsCompany {
  /** 物流公司编码 */
  providerKey?: string;
  /** 物流公司名称 */
  providerValue?: string;
}

/** ManualByManagerRechargeMembershipVO */
export interface ManualByManagerRechargeMembershipVO {
  /**
   * 是否开通自动续费:0-否,1-是
   * @format int64
   */
  autoRecharge?: number;
  /**
   * 客户id
   * @format int64
   */
  customerId?: number;
  /**
   * 赠送天数
   * @format int64
   */
  day?: number;
  /**
   * 结束id
   * @format int64
   */
  endId?: number;
  /**
   * 会员模板表id
   * @format int64
   */
  membershipTemplateId?: number;
  /**
   * 会员模板价格表id
   * @format int64
   */
  membershipTemplatePriceId?: number;
  /** @format int32 */
  orderType?: number;
  /**
   * 开始id
   * @format int64
   */
  startId?: number;
  /**
   * superCustomerId
   * @format int64
   */
  superCustomerId?: number;
}

/**
 * ManualWalletRechargeMembershipVO
 * 开通会员信息
 */
export interface ManualWalletRechargeMembershipVO {
  authorizationId?: string;
  /**
   * 信用卡id
   * @format int64
   */
  creditCardId?: number;
  /** 信用卡订单 */
  creditCardOrderId?: string;
  /**
   * 客户id
   * @format int64
   */
  customerId?: number;
  /** 会员模板 */
  membershipTemplate?: MembershipTemplate;
  /** 会员模板价格 */
  membershipTemplatePrice?: MembershipTemplatePrice;
  /**
   * 试用活动表套餐表id
   * @format int64
   */
  membershipTrialActivityComboId?: number;
  /**
   * 试用活动表id
   * @format int64
   */
  membershipTrialActivityId?: number;
  /** @format int32 */
  orderType?: number;
  /** @format int64 */
  price?: number;
  /**
   * 店铺id
   * @format int64
   */
  shopId?: number;
  /**
   * 系统来源: 1-D2C; 2-B2B
   * @format int64
   */
  systemSource?: number;
}

/**
 * MembershipAutomaticRenewal
 * 会员自动续费表
 */
export interface MembershipAutomaticRenewal {
  /** 实际支付价格 */
  actualPayPrice?: number;
  /**
   * 自动续费开启状态：1-已开启，2-未开启
   * @format int32
   */
  automaticRenewalStatus?: number;
  /**
   * 自动续费开启方式：1-余额，2-PayPal,3-信用卡
   * @format int32
   */
  automaticRenewalStytle?: number;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 客户姓名 */
  customerName?: string;
  /**
   * 店铺id
   * @format int32
   */
  customerShopId?: number;
  /** @format int64 */
  membershipAutomaticRenewalId?: number;
  /**
   * 会员身份模板表id
   * @format int64
   */
  membershipTemplateId?: number;
  /** 会员身份名称 */
  membershipTemplateName?: string;
  /**
   * 会员身份模板价格表id
   * @format int64
   */
  membershipTemplatePriceId?: number;
  /** 会员身份收费名称 */
  membershipTemplatePriceName?: string;
  /**
   * 0会员标志，1或者 0
   * @format int32
   */
  remark?: number;
  /**
   * 客户id
   * @format int64
   */
  superCustomerId?: number;
  /**
   * 来源，d2c 或者 b2b
   * @format int32
   */
  systemSource?: number;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/** MembershipOrderPayPalVO */
export interface MembershipOrderPayPalVO {
  payPalOrderId?: string;
  payPalSubscriptionId?: string;
}

/** MembershipPrechargeOrderReqDTO */
export interface MembershipPrechargeOrderReqDTO {
  /**
   * 是否开通自动续费:0-否,1-是
   * @format int64
   */
  autoRecharge?: number;
  /**
   * 创建订单来源：1-用户发起；2-后台发起
   * @format int32
   */
  createChannel?: number;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  creatorId?: string;
  creditCardOrderId?: string;
  /**
   * uid
   * @format int64
   */
  customerId?: number;
  /**
   * 店铺id
   * @format int32
   */
  customerShopId?: number;
  /**
   * 赠送天数
   * @format int64
   */
  day?: number;
  editorId?: string;
  /**
   * 生效状态:  0-未生效,1-已生效
   * @format int32
   */
  effectiveStatus?: number;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** @format int32 */
  isDelete?: number;
  /**
   * 会员等级1，2，3，4
   * @format int32
   */
  level?: number;
  /** 登录名 */
  loginName?: string;
  /**
   * 会员模板表id
   * @format int64
   */
  membershipTemplateId?: number;
  /**
   * 会员模板价格表id
   * @format int64
   */
  membershipTemplatePriceId?: number;
  /**
   * 订单类型：1-即时；2-延时生效；
   * @format int32
   */
  orderType?: number;
  /** 原始货币编码 */
  originCurrencyCode?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /**
   * 支付渠道：1-paypal；2-人工；3-信用卡；4-余额
   * @format int32
   */
  payChannel?: number;
  /**
   * 支付状态：1-未支付；2-支付中；3-支付成功；4-支付失败
   * @format int32
   */
  payStatus?: number;
  /** 实际汇款的货币编码 */
  realCurrencyCode?: string;
  sorts?: ISortFieldEnum[];
  /** @format int32 */
  startIndex?: number;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /** 站点代码 */
  stationCode?: string;
  /**
   * 统一用户id
   * @format int64
   */
  superCustomerId?: number;
  /** 统一用户ids */
  superCustomerIds?: number[];
  /**
   * 来源，1-d2c 或者 2-b2b
   * @format int32
   */
  systemSource?: number;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/** MembershipPrechargeOrderRespDTO */
export interface MembershipPrechargeOrderRespDTO {
  /** @format int32 */
  approveStatus?: number;
  /** @format int32 */
  createChannel?: number;
  /** @format date-time */
  createTime?: string;
  creatorId?: string;
  /**
   * uid
   * @format int64
   */
  customerId?: number;
  customerName?: string;
  /** @format int32 */
  customerShopId?: number;
  editorId?: string;
  /** @format int32 */
  effectiveStatus?: number;
  /** @format date-time */
  effectiveTime?: string;
  exchangeRate?: number;
  exchangeRateFloat?: number;
  /** @format date-time */
  expiresDate?: string;
  /** @format int32 */
  isDelete?: number;
  /** 登录名 */
  loginName?: string;
  membershipPackageName?: string;
  membershipPeriod?: string;
  /** @format int64 */
  membershipPrechargeOrderId?: number;
  /** @format int64 */
  membershipTemplateId?: number;
  membershipTemplateName?: string;
  /** @format int64 */
  membershipTemplatePriceId?: number;
  membershipTemplatePriceName?: string;
  /** @format date-time */
  oldExpiresDate?: string;
  /** @format int64 */
  oldMembershipTemplateId?: number;
  oldMembershipTemplateName?: string;
  /** @format int32 */
  orderType?: number;
  /** 原始货币编码 */
  originCurrencyCode?: string;
  originPaymentAmount?: number;
  /** @format int32 */
  payChannel?: number;
  /** @format int32 */
  payStatus?: number;
  /** @format date-time */
  payTime?: string;
  paymentSerialNumber?: string;
  /** 实际支付的货币编码 */
  realCurrencyCode?: string;
  /** 客户实际付款金额 */
  realPaymentAmount?: number;
  reconciliationAmountCh?: number;
  reconciliationAmountJa?: number;
  relationOrderId?: string;
  /** 状态 */
  state?: string;
  /** @format int64 */
  superCustomerId?: number;
  /** @format int32 */
  systemSource?: number;
  targetPaymentAmount?: number;
  /** 汇款汇率（原始币种/实际付款币种） */
  transferExchangeRate?: number;
  /**
   * 试用标志:0-不是,1是
   * @format int32
   */
  trialFlag?: number;
  /** 类型 */
  type?: string;
  unificationCustomerFullName?: string;
  /** @format date-time */
  updateTime?: string;
  /** 中银汇率 */
  zhongyinExchangeRate?: number;
}

/**
 * MembershipTagListVO
 * 结算中心/配置项/会员配置/会员标签列表
 */
export interface MembershipTagListVO {
  /**
   * 会员模板标签id
   * @format int64
   */
  membershipTagId?: number;
  /** 会员模板标签名称 */
  tagName?: string;
}

/**
 * MembershipTagUpsertVO
 * 结算中心/配置项/会员配置/会员标签列表
 */
export interface MembershipTagUpsertVO {
  /**
   * 会员模板标签id
   * @format int64
   */
  membershipTagId?: number;
  /** 会员模板标签名称 */
  tagName?: string;
}

/**
 * MembershipTemplate
 * 会员模板表
 */
export interface MembershipTemplate {
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * 会员模板表id
   * @format int64
   */
  membershipTemplateId?: number;
  /**
   * 排序序号
   * @format int64
   */
  sort?: number;
  /**
   * 会员类型:0-普通,1-特殊
   * @format int32
   */
  specialType?: number;
  /** 站点 */
  stationCode?: string;
  /** 状态：1-上架；0-下架(客户只能看到上架状态数据) */
  statusFlag?: boolean;
  /** 会员身份描述说明 */
  templateDesc?: string;
  /**
   * 会员等级，从低到高，0最低
   * @format int32
   */
  templateLevel?: number;
  /** 会员身份名称 */
  templateName?: string;
  /** 会员身份名称中文 */
  templateNameZh?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/** MembershipTemplateConfigAndRightReqVO */
export interface MembershipTemplateConfigAndRightReqVO {
  /** 页面配置 */
  membershipTemplateConfigReqVOList?: MembershipTemplateConfigReqVO[];
  /**
   * 会员模板id
   * @format int64
   */
  membershipTemplateId?: number;
  /** 2B权益 */
  membershipTemplateRightReqVOListToB?: MembershipTemplateRightReqVO[];
  /** 2C权益 */
  membershipTemplateRightReqVOListToC?: MembershipTemplateRightReqVO[];
}

/** MembershipTemplateConfigReqVO */
export interface MembershipTemplateConfigReqVO {
  /** 说明 */
  description?: string;
  /**
   * 会员模板权益表id
   * @format int64
   */
  id?: number;
  /** 头像 */
  imageUrl?: string;
  /**
   * 是否删除
   * @format int32
   */
  isDelete?: number;
  /**
   * 会员模板id
   * @format int64
   */
  membershipTemplateId?: number;
  /** 标题 */
  title?: string;
}

/**
 * MembershipTemplateDetailVO
 * 结算中心/配置项/会员配置/会员设置列表
 */
export interface MembershipTemplateDetailVO {
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * 会员模板表id
   * @format int64
   */
  membershipTemplateId?: number;
  /**
   * 会员类型:0-普通,1-特殊
   * @format int32
   */
  specialType?: number;
  /** 状态：1-上架；0-下架(客户只能看到上架状态数据) */
  statusFlag?: boolean;
  /** 会员标签 */
  tagList?: MembershipTagListVO[];
  /** 会员身份描述说明 */
  templateDesc?: string;
  /**
   * 会员等级，从低到高，1最低
   * @format int32
   */
  templateLevel?: number;
  /** 会员身份名称 */
  templateName?: string;
  /** 会员身份名称中文 */
  templateNameZh?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/**
 * MembershipTemplateInsertVO
 * 结算中心/配置项/会员配置/会员设置列表
 */
export interface MembershipTemplateInsertVO {
  /**
   * 排序序号
   * @format int64
   */
  sort?: number;
  /**
   * 会员类型:0-普通,1-特殊
   * @format int32
   */
  specialType?: number;
  /** 站点 */
  stationCode?: string;
  /** 会员状态 */
  statusFlag?: boolean;
  /** 会员标签 */
  tagList?: MembershipTagUpsertVO[];
  /** 会员身份描述说明 */
  templateDesc?: string;
  /**
   * 会员等级，从低到高，0最低
   * @format int32
   */
  templateLevel?: number;
  /** 会员身份名称 */
  templateName?: string;
  /** 会员身份名称中文 */
  templateNameZh?: string;
}

/** MembershipTemplateListVO */
export interface MembershipTemplateListVO {
  /** @format date-time */
  createTime?: string;
  deleteFlag?: boolean;
  /**
   * 会员模板表id
   * @format int64
   */
  membershipTemplateId?: number;
  /**
   * 会员类型:0-普通,1-特殊
   * @format int32
   */
  specialType?: number;
  statusFlag?: boolean;
  /** 会员身份描述说明 */
  templateDesc?: string;
  /**
   * 会员等级
   * @format int32
   */
  templateLevel?: number;
  /** 会员身份名称 */
  templateName?: string;
  /** 会员身份名称中文 */
  templateNameZh?: string;
  /** @format date-time */
  updateTime?: string;
}

/**
 * MembershipTemplatePrice
 * 会员模板价格表
 */
export interface MembershipTemplatePrice {
  /** 基础套餐标志，一个月30天 */
  basicFlag?: boolean;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 货币编码 */
  currencyCode?: string;
  /** 删除标志：true，删除 */
  deleteFlag?: boolean;
  /** 折扣后实际支付价格 */
  discountActualPrice?: number;
  /** 划线价，日元 */
  discountPrice?: number;
  /**
   * 会员模板表id
   * @format int64
   */
  membershipTemplateId?: number;
  /**
   * 会员模板价格表id
   * @format int64
   */
  membershipTemplatePriceId?: number;
  /** 会员身份收费名称 */
  priceName?: string;
  /** 销售价，日元 */
  sellingPrice?: number;
  /**
   * 会员类型:0-普通,1-特殊
   * @format int32
   */
  specialType?: number;
  /** 站点 */
  stationCode?: string;
  /** 试用折扣:0-9 */
  trialDiscount?: number;
  /**
   * 试用标志:0-不是,1是
   * @format int32
   */
  trialFlag?: number;
  /**
   * 试用期:天
   * @format int32
   */
  trialPeriod?: number;
  /** 试用价格 */
  trialPrice?: number;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  /**
   * 有效期
   * @format int32
   */
  validPeriod?: number;
  /** 有效期的单位：1-日；2-周；3-月；4-年 */
  validPeriodUnit?: string;
}

/**
 * MembershipTemplatePriceInsertVO
 * 结算中心-配置项-会员配置-会员套餐插入
 */
export interface MembershipTemplatePriceInsertVO {
  /** 基础套餐标志 */
  basicFlag?: boolean;
  /** 实际支付价格 */
  discountActualPrice?: number;
  /** 划线价，日元 */
  discountPrice?: number;
  /**
   * 会员模板表id
   * @format int64
   */
  membershipTemplateId?: number;
  /** 会员身份收费名称 */
  priceName?: string;
  /**
   * 会员类型:0-普通,1-特殊
   * @format int32
   */
  specialType?: number;
  /** 试用折扣:0-9 */
  trialDiscount?: number;
  /**
   * 试用标志:0-不是,1是
   * @format int32
   */
  trialFlag?: number;
  /**
   * 试用期:天
   * @format int32
   */
  trialPeriod?: number;
  /** 试用价格 */
  trialPrice?: number;
  /**
   * 有效期(天)
   * @format int32
   */
  validPeriod?: number;
}

/**
 * MembershipTemplatePriceListVO
 * 会员配置-会员套餐查询
 */
export interface MembershipTemplatePriceListVO {
  /** 基础套餐标志，一个月30天 */
  basicFlag?: boolean;
  /** 基础销售单价 */
  basicSellingPrice?: number;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 货币编码 */
  currencyCode?: string;
  /** 删除标志：true，删除 */
  deleteFlag?: boolean;
  /** 折扣后实际支付价格 */
  discountActualPrice?: number;
  /** 划线价，日元 */
  discountPrice?: number;
  /** 优惠金额 */
  discountedPrice?: number;
  /** 是否展示当前会员 */
  isShow?: boolean;
  /**
   * 剩余活动数量
   * @format int32
   */
  lastQuantity?: number;
  /**
   * 活动数量限制
   * @format int32
   */
  limitedQuantity?: number;
  /**
   * 是否限制活动数量:1限制,0不限制
   * @format int32
   */
  limitedQuantityStatus?: number;
  /** 会员权益 */
  membershipTemplateConfigAndRightReqVO?: MembershipTemplateConfigAndRightReqVO;
  /**
   * 会员模板表id
   * @format int64
   */
  membershipTemplateId?: number;
  /**
   * 会员模板价格表id
   * @format int64
   */
  membershipTemplatePriceId?: number;
  /**
   * 试用活动表套餐表id
   * @format int64
   */
  membershipTrialActivityComboId?: number;
  /**
   * 试用活动表id
   * @format int64
   */
  membershipTrialActivityId?: number;
  priceItemList?: MembershipTemplatePrice[];
  /** 会员身份收费名称 */
  priceName?: string;
  /**
   * 已参加活动数量
   * @format int32
   */
  quantity?: number;
  /** 销售价，日元 */
  sellingPrice?: number;
  /**
   * 排序序号
   * @format int64
   */
  sort?: number;
  /**
   * 会员类型:0-普通,1-特殊
   * @format int32
   */
  specialType?: number;
  /** 站点 */
  stationCode?: string;
  tagList?: MembershipTemplateTag[];
  /** 会员身份描述说明 */
  templateDesc?: string;
  /**
   * 会员等级，从低到高，0最低
   * @format int32
   */
  templateLevel?: number;
  /** 试用折扣:0-9 */
  trialDiscount?: number;
  /**
   * 试用标志:0-不是,1是
   * @format int32
   */
  trialFlag?: number;
  /**
   * 试用期:天
   * @format int32
   */
  trialPeriod?: number;
  /** 试用价格 */
  trialPrice?: number;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  /**
   * 有效期
   * @format int32
   */
  validPeriod?: number;
  /** 有效期的单位：1-日；2-周；3-月；4-年 */
  validPeriodUnit?: string;
}

/** MembershipTemplatePriceRespDTO */
export interface MembershipTemplatePriceRespDTO {
  basicFlag?: boolean;
  /** @format date-time */
  createTime?: string;
  discountActualPrice?: number;
  /** @format int64 */
  membershipTemplateId?: number;
  /** @format int64 */
  membershipTemplatePriceId?: number;
  priceName?: string;
  priceStatusFlag?: boolean;
  sellingPrice?: number;
  stationCode?: string;
  /** @format date-time */
  updateTime?: string;
  /** @format int32 */
  validPeriod?: number;
  validPeriodUnit?: string;
}

/**
 * MembershipTemplatePriceUpdateVO
 * 结算中心/配置项/会员配置/会员套餐更新
 */
export interface MembershipTemplatePriceUpdateVO {
  /** 基础套餐标志 */
  basicFlag?: boolean;
  /** 实际支付价格 */
  discountActualPrice?: number;
  /** 划线价，日元 */
  discountPrice?: number;
  /**
   * 会员模板表id
   * @format int64
   */
  membershipTemplateId?: number;
  /**
   * 会员模板价格表id
   * @format int64
   */
  membershipTemplatePriceId?: number;
  /** 会员身份收费名称 */
  priceName?: string;
  /**
   * 会员类型:0-普通,1-特殊
   * @format int32
   */
  specialType?: number;
  /** 试用折扣:0-9 */
  trialDiscount?: number;
  /**
   * 试用标志:0-不是,1是
   * @format int32
   */
  trialFlag?: number;
  /**
   * 试用期:天
   * @format int32
   */
  trialPeriod?: number;
  /** 试用价格 */
  trialPrice?: number;
  /**
   * 有效期(天)
   * @format int32
   */
  validPeriod?: number;
}

/** MembershipTemplateRightReqVO */
export interface MembershipTemplateRightReqVO {
  /** 普通会员备注 */
  generalRemark?: string;
  /** 普通会员仅展示备注 */
  generalRemarkOnly?: boolean;
  /**
   * 普通会员是否可用:0显示不可用,1显示可用,2显示备注
   * @format int32
   */
  generalStatus?: number;
  /**
   * 会员模板权益子表id
   * @format int64
   */
  id?: number;
  /**
   * 是否删除
   * @format int32
   */
  isDelete?: number;
  /**
   * 会员模板表id
   * @format int64
   */
  membershipTemplateId?: number;
  /** 权益名称 */
  rightName?: string;
  /**
   * 排序序号
   * @format int64
   */
  sort?: number;
  /** 特殊会员备注 */
  specialRemark?: string;
  /** 特殊会员仅展示备注 */
  specialRemarkOnly?: boolean;
  /**
   * 特殊会员是否可用0显示不可用,1显示可用,2显示备注
   * @format int32
   */
  specialStatus?: number;
  /** 状态 */
  status?: boolean;
  /**
   * 系统来源:1-2c,2-2b
   * @format int32
   */
  systemSource?: number;
}

/**
 * MembershipTemplateTag
 * 会员模板标签表
 */
export interface MembershipTemplateTag {
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * 会员模板标签id
   * @format int64
   */
  membershipTagId?: number;
  /**
   * 会员模板id
   * @format int64
   */
  membershipTemplateId?: number;
  /**
   * 主键
   * @format int64
   */
  membershipTemplateTagId?: number;
  /** 会员模板标签名称 */
  tagName?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/** MembershipTemplateUpdateSortVO */
export interface MembershipTemplateUpdateSortVO {
  /**
   * 会员模板表id
   * @format int64
   */
  membershipTemplateId?: number;
  /**
   * 排序序号
   * @format int64
   */
  sort?: number;
}

/**
 * MembershipTemplateUpdateVO
 * 结算中心/配置项/会员配置/会员设置列表
 */
export interface MembershipTemplateUpdateVO {
  /**
   * 会员模板表id
   * @format int64
   */
  membershipTemplateId?: number;
  /**
   * 排序序号
   * @format int64
   */
  sort?: number;
  /**
   * 会员类型:0-普通,1-特殊
   * @format int32
   */
  specialType?: number;
  /** 站点 */
  stationCode?: string;
  /** 会员状态 */
  statusFlag?: boolean;
  /** 会员标签 */
  tagList?: MembershipTagUpsertVO[];
  /** 会员身份描述说明 */
  templateDesc?: string;
  /**
   * 会员等级，从低到高，0最低
   * @format int32
   */
  templateLevel?: number;
  /** 会员身份名称 */
  templateName?: string;
  /** 会员身份名称中文 */
  templateNameZh?: string;
}

/** MembershipTrialActivityComboReqDTO */
export interface MembershipTrialActivityComboReqDTO {
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * 冻结数量
   * @format int32
   */
  freezeQuantity?: number;
  /**
   * 试用活动表套餐id
   * @format int64
   */
  id?: number;
  /**
   * 剩余活动数量
   * @format int32
   */
  lastQuantity?: number;
  /**
   * 剩余数量
   * @format int32
   */
  leavedQuantity?: number;
  /**
   * 活动数量限制
   * @format int32
   */
  limitedQuantity?: number;
  /**
   * 是否限制活动数量:1限制,0不限制
   * @format int32
   */
  limitedQuantityStatus?: number;
  /**
   * 会员套餐价格id
   * @format int64
   */
  membershipTemplatePriceId?: number;
  /** 会员套餐名称 */
  membershipTemplatePriceName?: string;
  /**
   * 试用活动表id
   * @format int64
   */
  membershipTrialActivityId?: number;
  /** 价格 */
  price?: number;
  /**
   * 已参加活动数量
   * @format int32
   */
  quantity?: number;
  /**
   * 状态:1 生效,0 失效
   * @format int32
   */
  status?: number;
  /** 会员身份描述说明 */
  templateDesc?: string;
  /** 试用折扣:0-9 */
  trialDiscount?: number;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  /**
   * 已使用数量
   * @format int32
   */
  usedQuantity?: number;
}

/** NewAreaDTO */
export interface NewAreaDTO {
  area?: string;
  areaEn?: string;
  city?: string;
  cityEn?: string;
  county?: string;
  countyEn?: string;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  intAreaAllId?: number;
  postCode?: string;
  /** @format date-time */
  updateTime?: string;
}

/** NewGetIntShipFeeReqDTO */
export interface NewGetIntShipFeeReqDTO {
  /** @format int64 */
  customerId?: number;
  /** @format date-time */
  deliveryTime?: string;
  destination?: string;
  feeInfoDTOList?: IntShipFeeInfoDTO[];
  /** @format int64 */
  intForwardConfigId?: number;
  /** @format int64 */
  intShipConfigId?: number;
}

/** OnlineMembershipOrderCreateVO */
export interface OnlineMembershipOrderCreateVO {
  /** @format int64 */
  membershipTemplateId?: number;
  /** 会员模板价格 */
  membershipTemplatePrice?: MembershipTemplatePrice;
  /** @format int64 */
  membershipTemplatePriceId?: number;
  /**
   * 试用活动表套餐表id
   * @format int64
   */
  membershipTrialActivityComboId?: number;
  /**
   * 试用活动表id
   * @format int64
   */
  membershipTrialActivityId?: number;
  /** @format int32 */
  orderType?: number;
}

/** OnlineOrderCreateDTO */
export interface OnlineOrderCreateDTO {
  /** @format int64 */
  creditCardId?: number;
  customerLoginRespDTO?: CustomerLoginRespDTO;
  originCurrencyCode?: string;
  originRechargeAmount?: number;
}

/** OrderDeductionAdditionFeeRespDTO */
export interface OrderDeductionAdditionFeeRespDTO {
  /** 总价 */
  amount?: number;
  /** 币种 */
  currency?: string;
  /** 汇率 */
  exchangeRate?: number;
  /**
   * 费用类型
   * @format int32
   */
  feeType?: number;
}

/** OrderDeductionFeeRespDTO */
export interface OrderDeductionFeeRespDTO {
  /** 实付补扣金额列表 */
  orderActualFeeList?: OrderDeductionAdditionFeeRespDTO[];
  /** 预付金额列表 */
  orderPreFeeList?: OrderDeductionAdditionFeeRespDTO[];
}

/** OrderItem */
export interface OrderItem {
  asc?: boolean;
  column?: string;
}

/** OrderPreFeeDetailRespDTO */
export interface OrderPreFeeDetailRespDTO {
  /** 总价 */
  amount?: number;
  /** 编号 */
  bizNo?: string;
  /** 币种 */
  currency?: string;
  /** 汇率 */
  exchangeRate?: number;
  /**
   * 费用类型
   * @format int32
   */
  feeType?: number;
  /** 名称 */
  name?: string;
  /**
   * 商品数量
   * @format int32
   */
  nums?: number;
  /** 商品单价 */
  price?: number;
  /**
   * 结算数量
   * @format int32
   */
  settleNums?: number;
  /** 结算单价 */
  settlePrice?: number;
  /** 重量 */
  weight?: number;
}

/** OrderPreFeeRespDTO */
export interface OrderPreFeeRespDTO {
  /** 币种 */
  currency?: string;
  /** 汇率 */
  exchangeRate?: number;
  /**
   * 费用类型:0-商品代金,1-默认附加项 2-商品附加项,3-发货附加项,4-国际运费,5-库存保管费,6-关税,7-国内运费
   * @format int32
   */
  feeType?: number;
  orderPreFeeDetailList?: OrderPreFeeDetailRespDTO[];
  /** 总价格 */
  totalAmount?: number;
}

/** OrderPreSelleFeeRespDTO */
export interface OrderPreSelleFeeRespDTO {
  /** 订单预扣款-发货附加项费用 */
  orderPreDeliveryAdditionFee?: OrderPreFeeRespDTO;
  /** 订单预扣款-国际运费详情 */
  orderPreDeliveryFee?: OrderPreFeeRespDTO;
  /** 订单预扣款-手续费 */
  orderPreFee?: OrderPreFeeRespDTO;
  /** 订单预扣款-商品附加项费用 */
  orderPreProductAdditionFee?: OrderPreFeeRespDTO;
  /** 订单预扣款-商品带金详情 */
  orderPreVoucherFee?: OrderPreVoucherFeeRespDTO;
}

/** OrderPreVoucherFeeRespDTO */
export interface OrderPreVoucherFeeRespDTO {
  /** 费用编码 */
  bizNo?: string;
  /** 币种 */
  currency?: string;
  /** 明细 */
  customerWalletFundFlowGoodsList?: CustomerWalletFundFlowGoodsDTO[];
  /** 汇率 */
  exchangeRate?: number;
  /** 费用名称 */
  feeName?: string;
  /**
   * 费用类型
   * @format int32
   */
  feeType?: number;
  /** 总价格 */
  totalAmount?: number;
}

/**
 * PayAccount
 * 对账管理-支付账户表
 */
export interface PayAccount {
  /** 支付宝账户/支付账号 */
  accountNumber?: string;
  /** 对账状态：是否需要进行对账；0：不需要；1：需要 */
  accountStatusFlag?: boolean;
  /** 支付账户类型；1：支付宝；2：跨境宝；3：中信；4：农行 */
  accountType?: string;
  /** 支付宝公钥 */
  alipayPublicKey?: string;
  /** 应用ID */
  applicationId?: string;
  /** 所属公司 */
  company?: string;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 删除标志 */
  deleteFlag?: boolean;
  /** 开发者私钥 */
  devPrivateKey?: string;
  /** 获取状态：是否要抓取该支付宝账号的数据，0：否，1：是 */
  getStatusFlag?: boolean;
  /**
   * 最新账单日期：该支付宝最后使用（发生交易行为）时间
   * @format date-time
   */
  latestBillingTime?: string;
  /**
   * 最新抓取时间：请求对接支付宝接口，抓取数据的时间
   * @format date-time
   */
  latestCaptureTime?: string;
  /**
   * 支付账户主键
   * @format int64
   */
  payAccountId?: number;
  /** 来源类型；1：2C；2：2B */
  systemSourceType?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/**
 * PayAccountAccountStatusUpdateVO
 * 支付账户
 */
export interface PayAccountAccountStatusUpdateVO {
  /** 对账状态：是否需要进行对账；0：不需要；1：需要 */
  accountStatusFlag?: boolean;
  /**
   * 支付账户主键
   * @format int64
   */
  payAccountId?: number;
}

/**
 * PayAccountGetStatusUpdateVO
 * 支付账户
 */
export interface PayAccountGetStatusUpdateVO {
  /** 获取状态：是否要抓取该支付宝账号的数据，0：否，1：是 */
  getStatusFlag?: boolean;
  /**
   * 支付账户主键
   * @format int64
   */
  payAccountId?: number;
}

/**
 * PayAccountInsertVO
 * 对账管理-支付账户-插入
 */
export interface PayAccountInsertVO {
  /** 支付宝账户/支付账号 */
  accountNumber?: string;
  /** 对账状态：是否需要进行对账；0：不需要；1：需要 */
  accountStatusFlag?: boolean;
  /** 支付账户类型；1：支付宝；2：跨境宝；3：中信；4：农行 */
  accountType?: string;
  /** 支付宝公钥 */
  alipayPublicKey?: string;
  /** 应用ID */
  applicationId?: string;
  /** 所属公司 */
  company?: string;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 删除标志 */
  deleteFlag?: boolean;
  /** 开发者私钥 */
  devPrivateKey?: string;
  /** 获取状态：是否要抓取该支付宝账号的数据，0：否，1：是 */
  getStatusFlag?: boolean;
  /**
   * 最新账单日期：该支付宝最后使用（发生交易行为）时间
   * @format date-time
   */
  latestBillingTime?: string;
  /**
   * 最新抓取时间：请求对接支付宝接口，抓取数据的时间
   * @format date-time
   */
  latestCaptureTime?: string;
  /**
   * 支付账户主键
   * @format int64
   */
  payAccountId?: number;
  /** 来源类型；1：2C；2：2B */
  systemSourceType?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/**
 * PayAccountListVO
 * 支付账户-查询结果
 */
export interface PayAccountListVO {
  /** 支付宝账户/支付账号 */
  accountNumber?: string;
  /** 对账状态：是否需要进行对账；0：不需要；1：需要 */
  accountStatusFlag?: boolean;
  /** 支付账户类型；1：支付宝；2：跨境宝；3：中信；4：农行 */
  accountType?: string;
  /** 支付宝公钥 */
  alipayPublicKey?: string;
  /** 应用ID */
  applicationId?: string;
  /** 所属公司 */
  company?: string;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 删除标志 */
  deleteFlag?: boolean;
  /** 开发者私钥 */
  devPrivateKey?: string;
  /** 获取状态：是否要抓取该支付宝账号的数据，0：否，1：是 */
  getStatusFlag?: boolean;
  /**
   * 最新账单日期：该支付宝最后使用（发生交易行为）时间
   * @format date-time
   */
  latestBillingTime?: string;
  /**
   * 最新抓取时间：请求对接支付宝接口，抓取数据的时间
   * @format date-time
   */
  latestCaptureTime?: string;
  /**
   * 支付账户主键
   * @format int64
   */
  payAccountId?: number;
  /** 来源类型；1：2C；2：2B */
  systemSourceType?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/**
 * PayAccountNumberListVO
 * 通过来源类型和支付账户类型获取支付账户列表
 */
export interface PayAccountNumberListVO {
  /** 支付宝账户/支付账号 */
  accountNumber?: string;
  /** 支付账户类型；1：支付宝；2：跨境宝 */
  accountType?: string;
  /**
   * 支付账户主键
   * @format int64
   */
  payAccountId?: number;
}

/**
 * PayAccountQueryVO
 * 支付账户-查询实体
 */
export interface PayAccountQueryVO {
  /** 支付账户主键集合 */
  accountIdList?: number[];
  /** 支付宝账户/支付账号 */
  accountNumber?: string;
  accountNumberList?: string[];
  accountStatusFlag?: boolean;
  /** 支付账户类型；1：支付宝；2：跨境宝；3：中信；4：农行 */
  accountType?: string;
  /**
   * 开始时间
   * @format date-time
   */
  createTimeBegin?: string;
  /**
   * 结束时间
   * @format date-time
   */
  createTimeEnd?: string;
  deleteFlag?: boolean;
  getStatusFlag?: boolean;
  orderByCreateTimeDesc?: boolean;
  /**
   * 第几页
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页条数
   * @format int32
   */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  /** 来源类型；1：2C；2：2B */
  systemSourceType?: string;
}

/** PayAccountRespDTO */
export interface PayAccountRespDTO {
  accountNumber?: string;
  accountStatusFlag?: boolean;
  accountType?: string;
  alipayPublicKey?: string;
  applicationId?: string;
  company?: string;
  /** @format date-time */
  createTime?: string;
  deleteFlag?: boolean;
  devPrivateKey?: string;
  getStatusFlag?: boolean;
  /** @format date-time */
  latestBillingTime?: string;
  /** @format date-time */
  latestCaptureTime?: string;
  /** @format int64 */
  payAccountId?: number;
  systemSourceType?: string;
  /** @format date-time */
  updateTime?: string;
}

/** PayAccountTreeDTO */
export interface PayAccountTreeDTO {
  /** 支付宝账户/支付账号 */
  accountNumber?: string;
  /** 支付账户类型；1：支付宝；2：跨境宝；3：银行卡 */
  accountType?: string;
  children?: PayAccountTreeDTO[];
  label?: string;
  /**
   * 支付账户主键
   * @format int64
   */
  payAccountId?: number;
  value?: string;
}

/** PayAccountTreeVO */
export interface PayAccountTreeVO {
  /** 支付宝账户/支付账号 */
  accountNumber?: string;
  /** 支付账户类型；1：支付宝；2：跨境宝；3：银行卡 */
  accountType?: string;
  children?: PayAccountTreeDTO[];
  label?: string;
  /**
   * 支付账户主键
   * @format int64
   */
  payAccountId?: number;
  value?: string;
}

/**
 * PayAccountUpdateVO
 * 对账管理-支付账户-更新
 */
export interface PayAccountUpdateVO {
  /** 支付宝账户/支付账号 */
  accountNumber?: string;
  /** 对账状态：是否需要进行对账；0：不需要；1：需要 */
  accountStatusFlag?: boolean;
  /** 支付账户类型；1：支付宝；2：跨境宝；3：中信；4：农行 */
  accountType?: string;
  /** 支付宝公钥 */
  alipayPublicKey?: string;
  /** 应用ID */
  applicationId?: string;
  /** 所属公司 */
  company?: string;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 删除标志 */
  deleteFlag?: boolean;
  /** 开发者私钥 */
  devPrivateKey?: string;
  /** 获取状态：是否要抓取该支付宝账号的数据，0：否，1：是 */
  getStatusFlag?: boolean;
  /**
   * 最新账单日期：该支付宝最后使用（发生交易行为）时间
   * @format date-time
   */
  latestBillingTime?: string;
  /**
   * 最新抓取时间：请求对接支付宝接口，抓取数据的时间
   * @format date-time
   */
  latestCaptureTime?: string;
  /**
   * 支付账户主键
   * @format int64
   */
  payAccountId?: number;
  /** 来源类型；1：2C；2：2B */
  systemSourceType?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/**
 * PayFlow
 * 对账管理-支付流水表
 */
export interface PayFlow {
  /** 支付宝账务流水号（支付交易号） */
  accountLogId?: string;
  /** 支付宝账户/支付账号 */
  accountNumber?: string;
  /** 支付账户类型；1：支付宝；2：跨境宝；3：中信；4：农行 */
  accountType?: string;
  /** 审批单号 */
  approvalOrderNumber?: string;
  /** 采购回填单号 */
  backOrderNo?: string;
  /** 余额 */
  balance?: number;
  /** 所属公司 */
  belongCompany?: string;
  /** 业务类型；1：在线支付；2：交易退款 */
  businessType?: string;
  /**
   * 核销状态；0：未核销，1：已核销
   * @format int32
   */
  cancelStatus?: number;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 汇率 */
  exchangeRate?: string;
  /** 费用金额 */
  feeAmount?: number;
  /** 服务费用币种 */
  feeAmountCurrency?: string;
  /** 收入金额 */
  inAmount?: number;
  /** 商家订单号 */
  merchantOrderNumber?: string;
  /** 订单金额 */
  orderAmount?: number;
  /** 订单币种 */
  orderAmountCurrency?: string;
  /** 订单服务费金额 */
  orderFeeAmount?: number;
  /** 支出金额 */
  outAmount?: number;
  /**
   * 支付账户主键
   * @format int64
   */
  payAccountId?: number;
  /**
   * 支付流水主键
   * @format int64
   */
  payFlowId?: number;
  /** 平台订单号 */
  platformOrderNumber?: string;
  /** 商品标题 */
  productTitle?: string;
  /** 异常采购单号 */
  purchaseAbnormalOrderNo?: string;
  /** 采购单号 */
  purchaseOrderNo?: string;
  /** 采购价格 */
  purchasePrice?: number;
  /** 对方账户 */
  reciprocalAccount?: string;
  /** 对方名称 */
  reciprocalName?: string;
  /** 对账状态；1：正常，2：异常，3；未对账 */
  reconciliationStatus?: string;
  /** 对账失败原因 */
  reconciliationStatusReason?: string;
  /** 退款金额 */
  refundPrice?: number;
  /** 备注 */
  remark?: string;
  /** @format int32 */
  rowNumber?: number;
  /** 来源类型；1：2C；2：2B */
  systemSourceType?: string;
  /** 交易渠道 */
  tradeChannel?: string;
  /**
   * 交易时间
   * @format date-time
   */
  tradeTime?: string;
  /** 交易状态 */
  transactionStatus?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  uploadErrorReason?: string;
}

/**
 * PayFlowListVO
 * 支付流水-查询结果
 */
export interface PayFlowListVO {
  /** 支付宝账务流水号（支付交易号） */
  accountLogId?: string;
  /** 支付宝账户/支付账号 */
  accountNumber?: string;
  /** 支付账户类型；1：支付宝；2：跨境宝 */
  accountType?: string;
  /** 审批单号 */
  approvalOrderNumber?: string;
  /** 采购回填单号 */
  backOrderNo?: string;
  /** 余额 */
  balance?: number;
  /** 所属公司 */
  belongCompany?: string;
  /** 业务类型；1：在线支付；2：交易退款 */
  businessType?: string;
  /**
   * 核销状态；0：未核销，1：已核销
   * @format int32
   */
  cancelStatus?: number;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 汇率 */
  exchangeRate?: string;
  /** 费用金额 */
  feeAmount?: number;
  /** 服务费用币种 */
  feeAmountCurrency?: string;
  /** 收入金额 */
  inAmount?: number;
  /** 商家订单号 */
  merchantOrderNumber?: string;
  /** 订单金额 */
  orderAmount?: number;
  /** 订单币种 */
  orderAmountCurrency?: string;
  /** 订单服务费金额 */
  orderFeeAmount?: number;
  /** 支出金额 */
  outAmount?: number;
  /**
   * 支付账户主键
   * @format int64
   */
  payAccountId?: number;
  /**
   * 支付流水主键
   * @format int64
   */
  payFlowId?: number;
  /** 平台订单号 */
  platformOrderNumber?: string;
  /** 商品标题 */
  productTitle?: string;
  purchaseAbnormalOrderDTOList?: PurchaseAbnormalOrderDTO[];
  /** 异常采购单号 */
  purchaseAbnormalOrderNo?: string;
  /** 采购单号 */
  purchaseOrderNo?: string;
  /** 采购价格 */
  purchasePrice?: number;
  /** 对方账户 */
  reciprocalAccount?: string;
  /** 对方名称 */
  reciprocalName?: string;
  /** 对账状态；1：正常，2：异常，3；未对账 */
  reconciliationStatus?: string;
  /** 对账失败原因 */
  reconciliationStatusReason?: string;
  /** 退款金额 */
  refundPrice?: number;
  /** 备注 */
  remark?: string;
  /** 来源类型；1：2C；2：2B */
  systemSourceType?: string;
  /** 交易渠道；1：支付宝；2：1688.com */
  tradeChannel?: string;
  /**
   * 交易时间
   * @format date-time
   */
  tradeTime?: string;
  /** 交易状态 */
  transactionStatus?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/**
 * PayFlowQueryVO
 * 支付流水-查询实体
 */
export interface PayFlowQueryVO {
  /** @format int64 */
  accountId?: number;
  /** 支付账户主键集合 */
  accountIdList?: number[];
  /** 支付宝账务流水号（支付交易号） */
  accountLogId?: string;
  /** 支付宝账务流水号（支付交易号） */
  accountLogIdList?: string[];
  accountNumber?: string;
  /** 支付账户类型；1：支付宝；2：跨境宝 */
  accountType?: string;
  accountTypeList?: string[];
  approvalOrderNumber?: string;
  backOrderNo?: string;
  /** 业务类型；1：在线支付；2：交易退款 */
  businessType?: string;
  deleteFlag?: boolean;
  flowIdList?: number[];
  /** 收入金额 */
  inAmount?: number;
  merchantOrderNumber?: string;
  merchantOrderNumberLeftLike?: string;
  oderByAscTradeTime?: boolean;
  oderByCreateTimeDesc?: boolean;
  orderByTradeTimeAsc?: boolean;
  /** 支出金额 */
  outAmount?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  payFlowIdList?: number[];
  platformOrderNumber?: string;
  platformOrderNumberLeftLike?: string;
  purchaseAbnormalOrderNo?: string;
  purchaseOrderNo?: string;
  /**
   * 采购单号不为空
   * @format int32
   */
  purchaseOrderNoIsNull?: number;
  /** 对账状态；1：正常，2：异常，3；未对账 */
  reconciliationStatus?: string;
  /** 对账状态集合 */
  reconciliationStatusList?: string[];
  /** 对账失败原因 */
  reconciliationStatusReason?: string;
  sorts?: ISortFieldEnum[];
  /** @format int32 */
  startIndex?: number;
  /** 来源类型；1：2C；2：2B */
  systemSourceType?: string;
  /** @format date-time */
  tradeTime?: string;
  /**
   * 交易开始时间
   * @format date-time
   */
  tradeTimeBegin?: string;
  /**
   * 交易结束时间
   * @format date-time
   */
  tradeTimeEnd?: string;
  /** 交易渠道；1：支付宝；2：1688.com */
  transactionChannel?: string;
}

/**
 * PayFlowStatisticsDetailsQueryVO
 * 流水对账汇总-明细查询
 */
export interface PayFlowStatisticsDetailsQueryVO {
  /** 支付账户主键集合 */
  accountIdList?: string[];
  /** 支付宝账务流水号（支付交易号） */
  accountLogId?: string;
  /** 支付账户类型；1：支付宝；2：跨境宝 */
  accountType?: string;
  /** 审批单号 */
  approvalOrderNumber?: string;
  /** 商家订单号 */
  merchantOrderNumber?: string;
  /**
   * 第几页
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页条数
   * @format int32
   */
  pageSize?: number;
  /**
   * 支付账户主键
   * @format int64
   */
  payAccountId?: number;
  /** 平台订单号 */
  platformOrderNumber?: string;
  /** 异常采购单号 */
  purchaseAbnormalOrderNo?: string;
  /** 采购单号 */
  purchaseOrderNo?: string;
  /** 对账状态；1：正常，2：异常，3：未对账 */
  reconciliationStatus?: string;
  /** 对账失败原因 */
  reconciliationStatusReason?: string;
  /** @format int32 */
  startIndex?: number;
  /** 统计类型；1：日，2：周，3：月 */
  statisticsType?: string;
  /** 来源类型；1：2C；2：2B */
  systemSourceType?: string;
  /**
   * 交易开始时间
   * @format date-time
   */
  tradeTimeBegin?: string;
  /**
   * 交易结束时间
   * @format date-time
   */
  tradeTimeEnd?: string;
}

/**
 * PayFlowStatisticsListVO
 * 结算中心-对账管理-流水对账汇总-分页查询
 */
export interface PayFlowStatisticsListVO {
  /** 支付宝账户/支付账号 */
  accountNumber?: string;
  /** 支付账户类型；1：支付宝；2：跨境宝 */
  accountType?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 收入金额 */
  inAmount?: number;
  /** 支出金额 */
  outAmount?: number;
  /**
   * 支付账户主键
   * @format int64
   */
  payAccountId?: number;
  /** 采购价格 */
  purchasePrice?: number;
  /** 对账状态；1：正常，2：异常，3：未对账 */
  reconciliationStatus?: string;
  /** 退款金额 */
  refundPrice?: number;
  /**
   * 统计时间结束
   * @format date-time
   */
  statisticsEndTime?: string;
  /**
   * 统计时间开始
   * @format date-time
   */
  statisticsStartTime?: string;
}

/**
 * PayFlowStatisticsQueryVO
 * 流水对账汇总-分页查询
 */
export interface PayFlowStatisticsQueryVO {
  /** @format int64 */
  accountId?: number;
  /** 支付账户主键集合 */
  accountIdList?: string[];
  /** 支付账户类型；1：支付宝；2：跨境宝 */
  accountType?: string;
  /**
   * 第几页
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页条数
   * @format int32
   */
  pageSize?: number;
  /** 对账状态；1：正常，2：异常，3：未对账 */
  reconciliationStatus?: string;
  reconciliationStatusEq?: string;
  /** 多个对账状态 1：正常，2：异常，3：未对账 */
  reconciliationStatusList?: string[];
  /** @format int32 */
  startIndex?: number;
  /**
   * 统计时间结束
   * @format date-time
   */
  statisticsTimeEnd?: string;
  /**
   * 统计时间开始
   * @format date-time
   */
  statisticsTimeStart?: string;
  /** 统计类型；1：日，2：周，3：月 */
  statisticsType?: string;
  /** 来源类型；1：2C；2：2B */
  systemSourceType?: string;
}

/**
 * PayFlowTestVO
 * job触发参数
 */
export interface PayFlowTestVO {
  alipayOrderNo?: string;
  /** @format int64 */
  balanceRechargeId?: number;
  bizContent?: string;
  bizContentCustomer?: string;
  endTime?: string;
  errorAccountList?: string;
  errorFlowList?: string;
  merchantOrderNo?: string;
  /** @format int32 */
  offsetMonth?: number;
  startTime?: string;
  statisticsDate?: string;
  statisticsType?: string;
  type?: string;
}

/** PayFlowUpdateVo */
export interface PayFlowUpdateVo {
  /**
   * 支付流水主键
   * @format int64
   */
  payFlowId?: number;
  /** 异常采购单编号 */
  purchasingAbnormalOrderNo?: string;
}

/** PaymentTokenDTO */
export interface PaymentTokenDTO {
  /** @format int64 */
  creditCardId?: number;
  expiry?: string;
  id?: string;
  /** @format int32 */
  isDefault?: number;
  lastDigits?: string;
}

/** PayoneerRechargeOrderCreateDTO */
export interface PayoneerRechargeOrderCreateDTO {
  companyName?: string;
  contactFamilyName?: string;
  contactName?: string;
  country?: string;
  customerLoginRespDTO?: CustomerLoginRespDTO;
  email?: string;
  /** 本次充值金额 */
  originRechargeAmount?: number;
  website?: string;
}

/** PayoneerUploadImgDTO */
export interface PayoneerUploadImgDTO {
  /** 汇款凭证 */
  rechargeVoucherList?: string[];
  /** @format int64 */
  walletRechargeOrderId?: number;
}

/** PlatformOrderAdditionSettleRespDTO */
export interface PlatformOrderAdditionSettleRespDTO {
  /** @format int32 */
  additionConfigId?: number;
  /** @format int32 */
  additionId?: number;
  additionName?: string;
  additionNameJp?: string;
  /** @format int32 */
  additionScene?: number;
  calculateConfigFormula?: string;
  /** @format int32 */
  calculateConfigId?: number;
  cost?: number;
  /** @format int32 */
  costType?: number;
  /** @format int32 */
  deductionNode?: number;
  deductionNodeName?: string;
  itemAdditionSettleList?: PlatformOrderItemAdditionSettleRespDTO[];
  /** @format int64 */
  platformOrderId?: number;
  /** @format int32 */
  platformOrderItemAdditionSettleType?: number;
  platformOrderNo?: string;
}

/** PlatformOrderItemAdditionSettleRespDTO */
export interface PlatformOrderItemAdditionSettleRespDTO {
  actualProductSellPrice?: number;
  actualTotalProductSellPrice?: number;
  /** @format int32 */
  checkedQuantity?: number;
  /** @format int32 */
  checkingShelveQuantity?: number;
  cost?: number;
  /** @format int32 */
  lockQuantity?: number;
  /** @format int32 */
  orderQuantity?: number;
  productCode?: string;
  productImg?: string;
  productPropertiesName?: string;
  productSku?: string;
  productTitle?: string;
  productTitleJp?: string;
  /** @format int32 */
  productType?: number;
  /** @format int32 */
  quantity?: number;
  /** @format int32 */
  sellQuantity?: number;
  totalPrice?: number;
}

/** PlatformOrderItemSettleRespDTO */
export interface PlatformOrderItemSettleRespDTO {
  actualProductSellPrice?: number;
  actualTotalProductSellPrice?: number;
  /** @format int32 */
  checkedQuantity?: number;
  /** @format int32 */
  checkingShelveQuantity?: number;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  /** @format int32 */
  lockQuantity?: number;
  /** @format int32 */
  orderQuantity?: number;
  /** @format int64 */
  platformOrderId?: number;
  /** @format int64 */
  platformOrderItemId?: number;
  /** @format int64 */
  platformOrderItemSettleId?: number;
  /** @format int32 */
  platformOrderItemSettleType?: number;
  platformOrderNo?: string;
  productCode?: string;
  productImg?: string;
  productPriceLadderList?: string;
  productSellPrice?: number;
  productSku?: string;
  productTitle?: string;
  productTitleJp?: string;
  /** @format int32 */
  productType?: number;
  /** @format int32 */
  quantity?: number;
  /** @format int32 */
  sellQuantity?: number;
  /** @format int32 */
  systemSource?: number;
  totalPrice?: number;
  totalProductSellPrice?: number;
}

/** PlatformOrderProductSettleDetail */
export interface PlatformOrderProductSettleDetail {
  additionSettleList?: PlatformOrderAdditionSettleRespDTO[];
  itemSettleList?: PlatformOrderItemSettleRespDTO[];
  /** @format int32 */
  needStagesPayStatus?: number;
}

/**
 * PriceExceptionInfoVO
 * 价格异常信息vo
 */
export interface PriceExceptionInfoVO {
  /** 价格异常名称 */
  exceptionName?: string;
  /**
   * 价格异常类型 0:商品价格异常 1:采购价格异常
   * @format int32
   */
  exceptionType?: number;
}

/**
 * ProductAttrVO
 * 商品计算总重量体积参数
 */
export interface ProductAttrVO {
  /** 商品属性 */
  attribute?: AttributeVO;
  /**
   * 数量
   * @format int64
   */
  num?: number;
}

/** ProductDTO */
export interface ProductDTO {
  additionPrice?: number;
  cost?: number;
  money?: number;
  /** @format int32 */
  num?: number;
  price?: number;
  productImg?: string;
  productPropertiesName?: string;
  productSku?: string;
  productTitle?: string;
}

/**
 * ProductParamVO
 * 计算器商品模型
 */
export interface ProductParamVO {
  /** 商品附加项信息 */
  additionIdList?: number[];
  /**
   * 数量
   * @format int64
   */
  num?: number;
  /** 商品属性 */
  productAttribute?: AttributeVO;
  /** spu编码 */
  productCode?: string;
  /** 组合商品子商品 */
  productItemParam?: ProductParamVO[];
  /** sku编码 */
  productSku?: string;
  /**
   * 商品类型 1:成品 2:OEM商品 3:组合商品
   * @format int32
   */
  productType?: number;
  /** 关税信息 */
  taxInfo?: TaxInfoVO;
}

/**
 * ProductPriceResultVO
 * 商品代金价格明细
 */
export interface ProductPriceResultVO {
  /** 返回码 */
  code?: string;
  /** 错误原因 */
  errorMsg?: string;
  /**
   * 数量
   * @format int64
   */
  num?: number;
  /** 单价 */
  price?: number;
  /** sku编码 */
  productSku?: string;
  /** 总价 */
  totalPrice?: number;
}

/**
 * ProductResultVO
 * 商品代金费
 */
export interface ProductResultVO {
  /** 汇率 */
  exchangeRate?: number;
  /** 商品代金明细 */
  productPriceResult?: ProductPriceResultVO[];
  /** 总金额(外币) */
  totalAmt?: number;
  /** 总金额(人民币) */
  totalAmtCn?: number;
}

/** PurchaseAbnormalOrderDTO */
export interface PurchaseAbnormalOrderDTO {
  /**
   * 供应商对账状态  对账中 3 对账成功 1 对账失败 2 -
   * @format int32
   */
  accountCheckStatus?: number;
  /** 收款账户类型；1：支付宝；2：跨境宝 */
  accountType?: string;
  /** 收款账号 */
  alipayAccount?: string;
  /** 异常采购单编号 */
  purchasingAbnormalOrderNo?: string;
  /** 退款到账金额 */
  receiveMoney?: number;
  /**
   * 退款到账时间
   * @format date-time
   */
  receiveMoneyTime?: string;
  /** 流水号 */
  tradeNo?: string;
}

/** RangeInfoDTO */
export interface RangeInfoDTO {
  /** @format int32 */
  rangeFrom?: number;
  /** @format int32 */
  rangeTo?: number;
  rangeValue?: number;
}

/** RangeVO */
export interface RangeVO {
  /** 最大 */
  max?: number;
  /** 最小 */
  min?: number;
}

/** RechargeOrderCreateDTO */
export interface RechargeOrderCreateDTO {
  /** @format int64 */
  companyBankId?: number;
  customerLoginRespDTO?: CustomerLoginRespDTO;
  originCurrencyCode?: string;
  originRechargeAmount?: number;
  payerBankName?: string;
  payerName?: string;
  /** @format date-time */
  paymentDate?: string;
  rechargeVoucherList?: string[];
}

/** RechargeUpdateAuditAmountVO */
export interface RechargeUpdateAuditAmountVO {
  /**
   * 主键
   * @format int64
   */
  balanceRechargeId?: number;
  /** 审核状态：1-待初审;2-待终审；3-已通过；4-已拒绝; 5-充值失败; 6-系统确认中 */
  balanceRechargeStatus?: string;
  /**
   * 最终的财务到账时间
   * @format date-time
   */
  financeRechargeArrivalTime?: string;
  /** 财务对账金额(RMB) */
  financeRechargeCnyAmount?: number;
  /** 财务对账金额 */
  financeRechargeJpyAmount?: number;
}

/** RecommendedLogisticsRespDTO */
export interface RecommendedLogisticsRespDTO {
  distribution?: string;
  forwarder?: IntForwarderConfigRespDTO;
  /** @format int64 */
  intShipConfigId?: number;
  logo?: string;
  /** @format int32 */
  sort?: number;
}

/** RefundCustomerApplyVO */
export interface RefundCustomerApplyVO {
  applyRefundAmount?: number;
  businessAuditRefundAmount?: number;
  customerId?: string;
  customerName?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  deliveryTaskCode?: string;
  platformOrderNo?: string;
  productSellPrice?: number;
  productSku?: string;
  productType?: string;
  purchasePayAmount?: number;
  purchaseUnableRefundReason?: string;
  /** @format date-time */
  refundApplyTime?: string;
  refundCustomerFlowNu?: string;
  /** @format int64 */
  refundCustomerId?: number;
  /** @format int32 */
  refundNums?: number;
  /** @format int32 */
  refundTransferNums?: number;
  refundType?: string;
  remark?: string;
  sourceId?: string;
  sourceType?: string;
  systemSource?: string;
}

/**
 * RefundCustomerAuditUpdateVO
 * 退款管理-结算中心-退款管理-客户退款-审核
 */
export interface RefundCustomerAuditUpdateVO {
  /** 客户退款流水号 */
  refundCustomerFlowNu?: string;
  /**
   * 退款流水号主键
   * @format int64
   */
  refundCustomerId?: number;
  /** 退款状态；1：待初审；2：待终审 3：已通过；4：已拒绝 */
  refundStatus?: string;
  /** 退款总金额（元） */
  refundTotalPrice?: number;
  /** 拒绝原因 */
  refuseReason?: string;
}

/** RefundCustomerCancelDTO */
export interface RefundCustomerCancelDTO {
  /** @format int64 */
  refundCustomerId?: number;
}

/**
 * RefundCustomerListVO
 * 结算中心-退款管理-客户退款
 */
export interface RefundCustomerListVO {
  /** 客户申请退款金额 */
  applyRefundAmount?: number;
  /** 业务审核退款金额 */
  businessAuditRefundAmount?: number;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 用户id */
  customerId?: string;
  /** 用户姓名 */
  customerName?: string;
  /**
   * 用户店铺表id
   * @format int64
   */
  customerShopId?: number;
  /** 客户店铺名称 */
  customerShopName?: string;
  /** 国际发货单号 */
  deliveryTaskCode?: string;
  /** 审核日志 */
  logList?: AuditLogDTO[];
  /** 操作人id */
  operateUserId?: string;
  /** 操作人姓名 */
  operateUserName?: string;
  /**
   * 操作时间
   * @format date-time
   */
  operateUserTime?: string;
  /** 平台订单编号(直行便订单编号) */
  platformOrderNo?: string;
  /** 销售单价 */
  productSellPrice?: number;
  /** 商品sku */
  productSku?: string;
  /** 商品类型：1：普通商品；2：OEM样品；3：OEM大货；4：组合商品 */
  productType?: string;
  /** 采购支出金额 */
  purchasePayAmount?: number;
  /** 采购无法退款原因 */
  purchaseUnableRefundReason?: string;
  /**
   * 退款申请日期
   * @format date-time
   */
  refundApplyTime?: string;
  /** 客户退款流水号 */
  refundCustomerFlowNu?: string;
  /**
   * 客户退款主键
   * @format int64
   */
  refundCustomerId?: number;
  /**
   * 退款数量
   * @format int32
   */
  refundNums?: number;
  /** 退款状态；1：待初审；2：待终审 3：已通过；4：已拒绝 */
  refundStatus?: string;
  /**
   * 退货（次转正）数量
   * @format int32
   */
  refundTransferNums?: number;
  /** 退款类型；1：次品；2：售后 */
  refundType?: string;
  /** 拒绝原因 */
  refuseReason?: string;
  /** 审核备注 */
  remark?: string;
  /** 返金金额 */
  repaymentAmount?: number;
  /** 来源 */
  sourceId?: string;
  /** 来源类型 */
  sourceType?: string;
  /** 客户经理昵称 */
  supervisionNickname?: string;
  /** 来源类型；1：2C；2：2B */
  systemSource?: string;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/** RefundCustomerQueryVO */
export interface RefundCustomerQueryVO {
  /**
   * 用户id
   * @format int64
   */
  customerId?: number;
  /** 用户姓名 */
  customerName?: string;
  /** 创建时间降序 */
  orderByCreateTimeDesc?: boolean;
  /**
   * 第几页
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页条数
   * @format int32
   */
  pageSize?: number;
  /** 平台订单编号(直行便订单编号) */
  platformOrderNo?: string;
  productType?: string;
  /** 采购订单号 */
  purchaseOrderNoList?: string[];
  /**
   * 退款申请日期
   * @format date-time
   */
  refundApplyTimeEnd?: string;
  /**
   * 退款申请日期
   * @format date-time
   */
  refundApplyTimeStart?: string;
  refundCustomerFlowNu?: string;
  /** @format int64 */
  refundCustomerId?: number;
  /** 退款状态；1：待初审；2：待终审 3：已通过；4：已拒绝 5：已返金 6：已作废 */
  refundStatus?: string;
  /** 退款状态；1：待初审；2：待终审 3：已通过；4：已拒绝 5：已返金 */
  refundStatusEndFlag?: boolean;
  /** 退款类型；1：次品；2：售后； */
  refundType?: string;
  /** @format int32 */
  startIndex?: number;
  /** 来源类型；1：2C；2：2B */
  systemSource?: string;
}

/**
 * RefundCustomerRepaymentVO
 * 客户退款-返金
 */
export interface RefundCustomerRepaymentVO {
  /**
   * 退款流水号主键
   * @format int64
   */
  refundCustomerId?: number;
  /** 返金金额 */
  repaymentAmount?: number;
}

/** RefundCustomerResultVO */
export interface RefundCustomerResultVO {
  /** @format int64 */
  refundCustomerId?: number;
  refuseReason?: string;
  /** @format int32 */
  userRefundStatus?: number;
}

/** RefundSupplierApplyVO */
export interface RefundSupplierApplyVO {
  backOrderNo?: string;
  bizType?: string;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  merchantOrderNo?: string;
  platformOrderNo?: string;
  purchaseAccount?: string;
  purchaseOrderNo?: string;
  receivePaymentAccount?: string;
  receivePaymentAccountType?: string;
  /** @format date-time */
  refundApplyTime?: string;
  refundArriveAmount?: number;
  /** @format date-time */
  refundArriveTime?: string;
  refundSupplierFlowNo?: string;
  /** @format int64 */
  refundSupplierId?: number;
  shopCode?: string;
  shopName?: string;
  systemSource?: string;
}

/**
 * RefundSupplierListVO
 * 结算中心-退款管理-供应商退款
 */
export interface RefundSupplierListVO {
  /** 采购回填单号 */
  backOrderNo?: string;
  /** 商品类型: 1-档口(市场购);2-线上平台（透明购） 3-OEM大货；4：OEM样品 */
  bizType?: string;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * 用户id
   * @format int64
   */
  customerId?: number;
  /** 用户姓名 */
  customerName?: string;
  /** 订单编号(直行便订单编号) */
  platformOrderNo?: string;
  /** 采购账户 */
  purchaseAccount?: string;
  /** 业务类型: 1-档口(市场购);2-线上平台（透明购） 3-OEM大货 */
  purchaseBizType?: string;
  /** 采购单号 */
  purchaseOrderNo?: string;
  /** 收款账户 */
  receivePaymentAccount?: string;
  /** 收款账户类型 */
  receivePaymentAccountType?: string;
  /** 对账状态；1：正常，2：异常，3；未对账 */
  reconciliationStatus?: string;
  /** 对账失败原因 */
  reconciliationStatusReason?: string;
  /**
   * 退款申请时间
   * @format date-time
   */
  refundApplyTime?: string;
  /** 退款到账金额 */
  refundArriveAmount?: number;
  /**
   * 实际退款到账时间
   * @format date-time
   */
  refundArriveTime?: string;
  /** 供应商退款单号 */
  refundSupplierFlowNo?: string;
  /**
   * 供应商退款
   * @format int64
   */
  refundSupplierId?: number;
  /** 店铺code */
  shopCode?: string;
  /** 客户店铺名称 */
  shopName?: string;
  /** 来源类型；1：2C；2：2B */
  systemSource?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/**
 * RefundSupplierQueryVO
 * 退款管理-供应商退款
 */
export interface RefundSupplierQueryVO {
  /** 采购回填单号 */
  backOrderNo?: string;
  /** 采购回填单号 */
  backOrderNoList?: string[];
  /** 商品类型: 1-档口(市场购);2-线上平台（透明购） 3-OEM大货；4：OEM样品 */
  bizType?: string;
  /**
   * 用户id
   * @format int64
   */
  customerId?: number;
  /** 用户姓名 */
  customerName?: string;
  /** 创建时间降序 */
  orderByCreateTimeDesc?: boolean;
  /**
   * 第几页
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页条数
   * @format int32
   */
  pageSize?: number;
  /** 订单编号(直行便订单编号) */
  platformOrderNo?: string;
  /** 采购订单号 */
  purchaseOrderNo?: string;
  /** 收款账户 */
  receivePaymentAccount?: string;
  /** 收款账号 */
  receivePaymentAccountList?: string[];
  /** 收款账户类型 */
  receivePaymentAccountType?: string;
  /** 对账状态；1：正常，2：异常，3；未对账 */
  reconciliationStatusList?: string[];
  /**
   * 退款申请时间结束
   * @format date-time
   */
  refundApplyTimeEnd?: string;
  /**
   * 退款申请时间开始
   * @format date-time
   */
  refundApplyTimeStart?: string;
  /**
   * 退款到账时间
   * @format date-time
   */
  refundArriveTimeEnd?: string;
  /**
   * 退款到账时间
   * @format date-time
   */
  refundArriveTimeStart?: string;
  /** 供应商退款单号 */
  refundSupplierFlowNo?: string;
  /** 供应商退款单号 */
  refundSupplierFlowNoList?: string[];
  /**
   * 供应商退款
   * @format int64
   */
  refundSupplierId?: number;
  /** @format int32 */
  startIndex?: number;
  /** 来源类型；1：2C；2：2B */
  systemSource?: string;
}

/** Result */
export interface Result {
  resultCode?: string;
  resultMessage?: string;
  resultStatus?: string;
}

/** SelectOrderFreezeDetailRespDTO */
export interface SelectOrderFreezeDetailRespDTO {
  additionFreezeAmount?: number;
  productFreezeAmount?: number;
  /** @format int32 */
  stageNo?: number;
}

/**
 * SellingPriceMembershipRateRespDTO
 * 精选货源折扣价
 */
export interface SellingPriceMembershipRateRespDTO {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 会员信息 */
  membershipRespDTOList?: SellingPriceMembershipRespDTO[];
  /** 率值 */
  rate?: number;
}

/**
 * SellingPriceMembershipRateSaveReqDTO
 * 精选货源会员信息会员折扣价保存/修改
 */
export interface SellingPriceMembershipRateSaveReqDTO {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 率值 */
  rate?: number;
  /** 会员信息 */
  sellingPriceMembershipRespDTOList?: SellingPriceMembershipRespDTO[];
  /** 站点 */
  stationCode?: string;
  /** @format int64 */
  userId?: number;
  userName?: string;
}

/**
 * SellingPriceMembershipRespDTO
 * 精选货源会员信息会员折扣价
 */
export interface SellingPriceMembershipRespDTO {
  /**
   * 会员等级id
   * @format int64
   */
  membershipId?: number;
  /** 会员等级名称 */
  membershipName?: string;
}

/**
 * SettlementAppLog
 * 结算中心应用日志
 */
export interface SettlementAppLog {
  /**
   * 请求方法花费时间（单位毫秒）
   * @format int64
   */
  costTime?: number;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 失败信息 */
  failMsg?: string;
  /** 操作功能描述 */
  operateDescription?: string;
  /** 操作类型 */
  operateType?: string;
  /** 操作用户主键 */
  operateUserId?: string;
  /** 操作用户姓名 */
  operateUserName?: string;
  /**
   * 用户操作时间
   * @format date-time
   */
  operateUserTime?: string;
  /** 请求ip地址 */
  requestIp?: string;
  /** ip所在城市 */
  requestIpCity?: string;
  /** 请求类型 */
  requestMappingType?: string;
  /** 请求参数 */
  requestParams?: string;
  /** 0：失败；1：成功 */
  requestStatus?: boolean;
  /** 请求路径 */
  requestUri?: string;
  /**
   * 主键
   * @format int64
   */
  settlementAppLogId?: number;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/** SettlementDeliveryRefundDTO */
export interface SettlementDeliveryRefundDTO {
  /** 业务内容 */
  bizContent?: string;
  /**
   * 业务类型
   * @format int32
   */
  bizType?: number;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * 客户店铺id
   * @format int64
   */
  customerShopId?: number;
  /** 国际发货单号 */
  deliveryTaskCode?: string;
  distribution?: string;
  freightFee?: number;
  /**
   * 钱包流水id
   * @format int64
   */
  fundFlowId?: number;
  /** 国际发货单号 */
  logisticsCode?: string;
  /** 退款金额 */
  refundAmount?: number;
  remoteAreaFee?: number;
  /**
   * 国际运费扣款单据id
   * @format int64
   */
  settlementDeliveryId?: number;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  weight?: number;
}

/** SettlementDeliveryRespDTO */
export interface SettlementDeliveryRespDTO {
  /** @format date-time */
  createTime?: string;
  deliveryTaskCode?: string;
  distribution?: string;
  freightFee?: number;
  logisticsCode?: string;
  remoteAreaFee?: number;
  weight?: number;
}

/** SettlementExpressRespDTO */
export interface SettlementExpressRespDTO {
  /** @format date-time */
  createTime?: string;
  money?: number;
  /** @format int32 */
  num?: number;
  platformOrderNo?: string;
  price?: number;
  systemOrderNo?: string;
}

/** ShipContentVO */
export interface ShipContentVO {
  /** 偏远地区附加费详情 */
  areaPriceList?: AreaPriceVO[];
  /** 大包重量范围限制 */
  bigPackageRange?: RangeVO;
  /** 大包计费配置 */
  bigWeightConfList?: WeightConfDTO[];
  /** 燃油附加费率 */
  fuelPrice?: number;
  /** 物流说明 */
  logisticsDescription?: string;
  /** 旺季附加费单价 */
  peakSeasonPrice?: number;
  /** 小包重量范围限制 */
  smallPackageRange?: RangeVO;
  /** 小包计费配置 */
  smallWeightConfList?: WeightConfDTO[];
  /**
   * 计费单价类型;1-小包;2-大包;3-大包+小包
   * @format int32
   */
  unitPriceType?: number;
  /** 抛重除数 */
  weightThrowingDivisor?: number;
  /**
   * 计费重量类型;1-全抛;2-半抛;3-不抛
   * @format int32
   */
  weightThrowingType?: number;
}

/**
 * ShipParamVO
 * 国际物流参数
 */
export interface ShipParamVO {
  /** 目的地国家code */
  countryCode?: string;
  /** 是否发往FBA仓库 */
  fba?: boolean;
  /**
   * 指定物流
   * @format int64
   */
  intShipConfigId?: number;
  /** 包裹属性 */
  packageAttribute?: AttributeVO;
  /** 发货仓库 */
  wareCode?: string;
}

/**
 * ShipPriceResultVO
 * 国际物流费用明细
 */
export interface ShipPriceResultVO {
  /** 外币价格 */
  amt?: number;
  /** 返回码 */
  code?: string;
  /** 配送天数(范围) */
  deliveryDayRange?: RangeVO;
  /** 物流name */
  distribution?: string;
  /** 错误原因 */
  errorMsg?: string;
  /**
   * 物流id
   * @format int64
   */
  intShipConfigId?: number;
  /** 物流特点 */
  logisticsFeature?: string;
  /** logo */
  logo?: string;
  /** 官网链接 */
  officialWebsiteLink?: string;
  /** 价格 */
  price?: number;
  /** 当前生效的物流明细 */
  shipContent?: ShipContentVO;
  /** 可关联的运输属性 */
  transportationAttributesDTOList?: TransportationAttributesDTO[];
}

/** ShipQueryByForwardAndCustomerParam */
export interface ShipQueryByForwardAndCustomerParam {
  /** @format int64 */
  customerId?: number;
  /** @format int64 */
  intForwardConfigId?: number;
}

/**
 * ShipResultVO
 * 国际物流计算结果
 */
export interface ShipResultVO {
  /** 国家code */
  countryCode?: string;
  /** 国家name */
  countryName?: string;
  /** 汇率 */
  exchangeRate?: number;
  /** 物流费用信息 */
  shipPriceResult?: ShipPriceResultVO[];
  /** 总金额(外币) */
  totalAmt?: number;
  /** 总金额(人民币) */
  totalAmtCn?: number;
}

/**
 * ShipVO
 * 国际料金表
 */
export interface ShipVO {
  /** 可运送国家 */
  countryList?: string[];
  /** 配送天数(范围) */
  deliveryDayRange?: RangeVO;
  /** 物流name */
  distribution?: string;
  /**
   * 物流id
   * @format int64
   */
  intShipConfigId?: number;
  /** 物流特点 */
  logisticsFeature?: string;
  /** logo */
  logo?: string;
  /** 官网链接 */
  officialWebsiteLink?: string;
  /** 当前生效的物流明细 */
  shipContent?: ShipContentVO;
  /** 可关联的运输属性 */
  transportationAttributesDTOList?: TransportationAttributesDTO[];
}

/**
 * ShopInfo
 * 店铺信息
 */
export interface ShopInfo {
  /** 店铺url */
  shopUrl?: string;
  /** 店铺code */
  supplierShopCode?: string;
  /** 店铺名称 */
  supplierShopName?: string;
}

/**
 * SkuInfo
 * sku信息
 */
export interface SkuInfo {
  /** 商品图片 */
  goodsImageUrl?: string;
  /** 商品名称 */
  goodsName?: string;
  /** 商品价格 */
  goodsPrice?: number;
  /** 商品sku */
  goodsSku?: string;
}

/** SpotCheckConfigDTO */
export interface SpotCheckConfigDTO {
  cost?: number;
  /** @format int32 */
  endQuantity?: number;
  /** @format int32 */
  startQuantity?: number;
}

/**
 * TaxInfoVO
 * 关税
 */
export interface TaxInfoVO {
  /** hscode */
  hscode?: string;
  /** 税率 */
  taxRate?: number;
}

/**
 * TaxPriceResultVO
 * 关税明细
 */
export interface TaxPriceResultVO {
  /** 返回码 */
  code?: string;
  /** 错误原因 */
  errorMsg?: string;
  /** hscode */
  hscode?: string;
  /** sku编码 */
  productSku?: string;
  /** sku关税金额 */
  taxAmt?: number;
  /** 税率 */
  taxRate?: number;
  /** sku商品代金 */
  totalPrice?: number;
}

/**
 * TaxResultVO
 * 关税结果
 */
export interface TaxResultVO {
  /** 汇率 */
  exchangeRate?: number;
  /** 关税明细 */
  taxPriceResult?: TaxPriceResultVO[];
  /** 总金额(外币) */
  totalAmt?: number;
  /** 总金额(人民币) */
  totalAmtCn?: number;
}

/** TransportModeRespDTO */
export interface TransportModeRespDTO {
  /** 运输方式名称 */
  transportModeName?: string;
  /**
   * 运输方式
   * @format int32
   */
  transportType?: number;
}

/** TransportationAttributesDTO */
export interface TransportationAttributesDTO {
  /** 运输属性中文名称 */
  attributeCnName?: string;
  /** 运输属性编码 */
  attributeCode?: string;
  /** 运输属性名称(外语) */
  attributeName?: string;
}

/** TransportationAttributesPageDTO */
export interface TransportationAttributesPageDTO {
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  sorts?: ISortFieldEnum[];
  /** @format int32 */
  startIndex?: number;
}

/** TransportationAttributesRespDTO */
export interface TransportationAttributesRespDTO {
  /** 异常原因编码 */
  abnormalReasonCode?: string;
  /** 运输属性编码 */
  attributeCode?: string;
  /** 运输属性英文名称 */
  attributeEnName?: string;
  /** 运输属性日文名称 */
  attributeJpName?: string;
  /** 运输属性韩文名称 */
  attributeKoName?: string;
  /** 运输属性中文名称 */
  attributeName?: string;
  /** @format date-time */
  createTime?: string;
  /** @format int32 */
  deliveryLimitAmount?: number;
  /**
   * 是否可以发货:  0 是  1否
   * @format int32
   */
  enableOutBound?: number;
}

/** TrialMembershipTemplateInsertVO */
export interface TrialMembershipTemplateInsertVO {
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * 删除标志
   * @format int32
   */
  deleteFlag?: number;
  /**
   * 结束日期
   * @format date-time
   */
  endTime?: string;
  /**
   * 试用活动表套餐id
   * @format int64
   */
  id?: number;
  /**
   * 是否限制活动时间:1限制,0不限制
   * @format int32
   */
  limitedTimeStatus?: number;
  /** 会员标签 */
  membershipTrialActivityComboReqDTOS?: MembershipTrialActivityComboReqDTO[];
  /**
   * 开始日期
   * @format date-time
   */
  startTime?: string;
  /** 站点 */
  stationCode?: string;
  /**
   * 状态:0-待生效,1已生效,2已失效,3已中止
   * @format int32
   */
  status?: number;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  /**
   * 活动限制时间
   * @format int32
   */
  validPeriod?: number;
}

/** TrialMembershipTemplateQueryDTO */
export interface TrialMembershipTemplateQueryDTO {
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * 删除标志
   * @format int32
   */
  deleteFlag?: number;
  /**
   * 结束日期
   * @format date-time
   */
  endTime?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 是否限制活动时间:1限制,0不限制
   * @format int32
   */
  limitedTimeStatus?: number;
  /** 会员标签 */
  membershipTrialActivityComboReqDTOS?: MembershipTrialActivityComboReqDTO[];
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  /**
   * 开始日期
   * @format date-time
   */
  startTime?: string;
  /** 站点 */
  stationCode?: string;
  /**
   * 状态:0-待生效,1已生效,2已失效,3已中止
   * @format int32
   */
  status?: number;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  /**
   * 活动限制时间
   * @format int32
   */
  validPeriod?: number;
}

/**
 * TrialMembershipTemplateRespDTO
 * 结算中心/配置项/会员配置/试用活动
 */
export interface TrialMembershipTemplateRespDTO {
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * 删除标志
   * @format int32
   */
  deleteFlag?: number;
  /**
   * 结束日期
   * @format date-time
   */
  endTime?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 是否限制活动时间:1限制,0不限制
   * @format int32
   */
  limitedTimeStatus?: number;
  /** 活动子套餐 */
  membershipTrialActivityComboReqDTOS?: MembershipTrialActivityComboReqDTO[];
  /**
   * 开始日期
   * @format date-time
   */
  startTime?: string;
  /** 站点 */
  stationCode?: string;
  /**
   * 状态:0-待生效,1已生效,2已失效,3已中止
   * @format int32
   */
  status?: number;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  /**
   * 活动限制时间
   * @format int32
   */
  validPeriod?: number;
}

/** UpdateAdditionTemplateReqDTO */
export interface UpdateAdditionTemplateReqDTO {
  additionIdList?: number[];
  /** @format int32 */
  additionTemplateId?: number;
  additionTemplateImg?: string;
}

/** UpdateCustomerWalletReqDTO */
export interface UpdateCustomerWalletReqDTO {
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  unificationCustomerFullName?: string;
}

/** UpdateIntForwarderConfigReqDTO */
export interface UpdateIntForwarderConfigReqDTO {
  contentReqDTOList?: IntForwarderContentReqDTO[];
  countryCnName?: string;
  countryCode?: string;
  countryEnName?: string;
  countryJpyName?: string;
  forwarder?: string;
  /** @format int64 */
  intForwarderConfigId?: number;
  logisticsCompanyCode?: string;
  membershipIdList?: number[];
  shippingType?: string;
}

/** UpdateIntShipConfigReqDTO */
export interface UpdateIntShipConfigReqDTO {
  /** @format int64 */
  baseLogisticsId?: number;
  contentReqDTOList?: IntShipContentReqDTO[];
  deliveryDayRange?: DeliveryDayRangeDTO;
  distribution?: string;
  forwarderIds?: number[];
  /** @format int64 */
  intShipConfigId?: number;
  logisticsFeature?: string;
  logo?: string;
  membershipIdList?: number[];
  nationCode?: string;
  nationName?: string;
  officialWebsiteLink?: string;
  stationCode?: string;
  /** @format int32 */
  transportType?: number;
}

/**
 * UserInfo
 * 用户信息
 */
export interface UserInfo {
  /** 统一客户全名 */
  unificationName?: string;
  /** 用户Id */
  userId?: string;
  /** 用户名称 */
  userName?: string;
}

/** UserName */
export interface UserName {
  /** 名字 */
  firstName?: string;
  /** 全名 */
  fullName?: string;
  /** 姓氏 */
  lastName?: string;
  /** 中间名 */
  middleName?: string;
}

/** WFAssociationNotifyVo */
export interface WFAssociationNotifyVo {
  /** 通知结果 */
  associationResult?: Result;
  /** 集成商指定的交易信息上传请求编号 本字段与 submitTradeOrder 接口定义的requestId 相同 */
  extRequestId?: string;
  /** 万里汇定义的交易信息上传结果通知编号  本字段为幂等字段 */
  notifyRequestId?: string;
}

/** WFNotifyInfoQueryVO */
export interface WFNotifyInfoQueryVO {
  /** 来账通知金额 */
  amount?: number;
  /** 来账通知金额 */
  amountCurrency?: string;
  /** 银行编号 */
  bankName?: string;
  /** 银行编号 */
  bankNo?: string;
  /** 银行编号 */
  cardNo?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 万里汇来账通知记录id
   * @format int64
   */
  notifyId?: number;
  /** 来账通知消息数据json */
  notifyInfoJson?: string;
  /**
   * 消息处理状态：0 ：未处理  1: 处理成功 2：处理失败
   * @format int32
   */
  notifyStatus?: number;
  /**
   * 第几页
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页条数
   * @format int32
   */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 来账类型 ：1：进账  2：撤销
   * @format int32
   */
  type?: number;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 用户名 */
  userName?: string;
  /** 用户名 */
  userNameConvert?: string;
  /** 来账通知请求id */
  wfFundingId?: string;
}

/** WFNotifyRequestVo */
export interface WFNotifyRequestVo {
  /** 账户余额变动金额 */
  balanceChangeAmount?: Amount;
  /**
   * 万里汇收到垫付的时间
   * @format date-time
   */
  balanceChangeTime?: string;
  /** 代表本次垫付是否成功 */
  balanceResult?: Result;
  /** 收款人账户信息 */
  beneficiaryAccount?: BankAccount;
  /** 由万里汇定义、用于唯一标识某次垫付请求。 */
  fundingId?: string;
  /** 付款人账户信息 */
  payerBankAccount?: BankAccount;
  /** 垫付请求附加信息 */
  remitInfo?: string;
}

/** WFNotifyResponse */
export interface WFNotifyResponse {
  result?: Result;
}

/** WalletChangeEventDTO */
export interface WalletChangeEventDTO {
  /** @format int32 */
  additionId?: number;
  additionSceneEnum?: "NORMAL" | "PRODUCT" | "DELIVERY" | "WASHEDLABEL";
  additionSettlementList?: AdditionSettlementDTO[];
  bizContent?: string;
  bizContentCustomer?: string;
  bizId?: string;
  bizType?:
    | "PRODUCT_ORDER_PAY"
    | "RECHARGE"
    | "TRANSFER"
    | "WITHDRAW"
    | "PURCHASE"
    | "PURCHASE_FREIGHT"
    | "BILL_OTHER_DEDUCT"
    | "BILL_WEIGHT_DIFF_DEDUCT"
    | "GJFH_FREIGHT_FEE_DEDUCT"
    | "BANK_CARD_RECHARGE"
    | "PAYONEER_RECHARGE"
    | "GJFH_ADDITION_FEE_DEDUCT"
    | "SETTLEMENT_DELIVER_NO"
    | "SETTLEMENT_DEFAULT_NO"
    | "WALLET_WITHDRAW"
    | "MEMBERSHIP_WALLET_CHARGE"
    | "SEARCH_SOURCE_ORDER_PAY"
    | "SEARCH_SOURCE_ORDER_REFUND"
    | "REMAKE_FREEZE"
    | "UNFREEZE"
    | "PRODUCT_ADD_ONS"
    | "ORDER_SETTLEMENT"
    | "COMBINATION_SERVICE_CHARGE"
    | "COMBINATION_PRODUCT_ADDITIONAL_SETTLEMENT"
    | "REMAKE_FREEZE_ADDITIONAL_ITEMS"
    | "PRODUCT_ORDER_SETTLEMENT"
    | "REFUND_CHARGE"
    | "STOCKIN_CHARGE"
    | "REPAYMENT"
    | "CUSTOMER_REFUND"
    | "AFTER_SALE_REFUND"
    | "WITHDRAW_REFUSED"
    | "RECHARGE_REFUSED"
    | "RECHARGE_PAYPAL"
    | "CUSTOMER_BILL_PAY"
    | "PRODUCT_ADD_ONS_TRANSFER"
    | "GJFH_FREIGHT_FEE_DEDUCT_REFUND"
    | "RECHARGE_CANCEL"
    | "RECHARGE_WF"
    | "RECHARGE_WF_AUDIT"
    | "PROMOTION_RECHARGE"
    | "MULTI_FREEZE"
    | "COMBINATION_SERVICE_FREEZE_CHARGE"
    | "INV_AGE_FEE"
    | "PKG_STAND_FEE"
    | "FEE_ACTUAL_DEDUCTION"
    | "FEE_ACTUAL_REFUND";
  changeAmount?: number;
  changeAmountJpy?: number;
  /** @format int32 */
  comparisonZero?: number;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  customerWalletDTO?: CustomerWalletDTO;
  data?: string;
  deliverOrderNo?: string;
  exchangeRate?: number;
  exchangeRateFloat?: number;
  fundFlowType?:
    | "RECHARGE"
    | "WITHDRAW"
    | "PRODUCT_SETTLEMENT"
    | "EXPRESS_AMOUNT"
    | "IL_CHARGE"
    | "SERVICE_CHARGE"
    | "AFTER_SALE_REFUND"
    | "AMOUNT_FREEZE"
    | "AMOUNT_UNFREEZE"
    | "TRANSFER_IN"
    | "TRANSFER_OUT"
    | "MEMBERSHIP_FEE"
    | "IL_CHARGE_WEIGHT_FEE"
    | "IL_CHARGE_SERVICE_FEE"
    | "COMMODITY_SERVICE_FEE"
    | "SHIPPING_SERVICE_FEE"
    | "SEARCH_SOURCE_CHARGE"
    | "SEARCH_SOURCE_CHARGE_REFUND"
    | "REPAYMENT"
    | "CUSTOMER_REFUND"
    | "WITHDRAW_REFUSED"
    | "RECHARGE_REFUSED"
    | "CUSTOMER_BILL_PAY"
    | "REFUND_DOMESTIC_FREIGHT"
    | "AMOUNT_REMAKE_FREEZE"
    | "COMMODITY_SERVICE_FEE_QUALITY_TRANSFORM"
    | "AMOUNT_REMAKE_OVERFLOW_FREEZE"
    | "IL_CHARGE_REFUND"
    | "RECHARGE_CANCEL"
    | "PROMOTION_RECHARGE"
    | "FEE_DEDUCTION"
    | "FEE_ACTUAL_DEDUCTION"
    | "FEE_ACTUAL_REFUND";
  /** @format int64 */
  mainCustomerId?: number;
  messageId?: string;
  needAsyncCallBack?: boolean;
  originChangeAmount?: number;
  originCurrencyCode?: string;
  originalNo?: string;
  platformOrderNo?: string;
  stationCode?: string;
  waybillNumber?: string;
}

/** WalletChangeResultEventDTO */
export interface WalletChangeResultEventDTO {
  /** @format int32 */
  additionId?: number;
  additionSettlementList?: AdditionSettlementDTO[];
  afterAvailableAmount?: number;
  bizContent?: string;
  bizContentCustomer?: string;
  bizId?: string;
  bizType?:
    | "PRODUCT_ORDER_PAY"
    | "RECHARGE"
    | "TRANSFER"
    | "WITHDRAW"
    | "PURCHASE"
    | "PURCHASE_FREIGHT"
    | "BILL_OTHER_DEDUCT"
    | "BILL_WEIGHT_DIFF_DEDUCT"
    | "GJFH_FREIGHT_FEE_DEDUCT"
    | "BANK_CARD_RECHARGE"
    | "PAYONEER_RECHARGE"
    | "GJFH_ADDITION_FEE_DEDUCT"
    | "SETTLEMENT_DELIVER_NO"
    | "SETTLEMENT_DEFAULT_NO"
    | "WALLET_WITHDRAW"
    | "MEMBERSHIP_WALLET_CHARGE"
    | "SEARCH_SOURCE_ORDER_PAY"
    | "SEARCH_SOURCE_ORDER_REFUND"
    | "REMAKE_FREEZE"
    | "UNFREEZE"
    | "PRODUCT_ADD_ONS"
    | "ORDER_SETTLEMENT"
    | "COMBINATION_SERVICE_CHARGE"
    | "COMBINATION_PRODUCT_ADDITIONAL_SETTLEMENT"
    | "REMAKE_FREEZE_ADDITIONAL_ITEMS"
    | "PRODUCT_ORDER_SETTLEMENT"
    | "REFUND_CHARGE"
    | "STOCKIN_CHARGE"
    | "REPAYMENT"
    | "CUSTOMER_REFUND"
    | "AFTER_SALE_REFUND"
    | "WITHDRAW_REFUSED"
    | "RECHARGE_REFUSED"
    | "RECHARGE_PAYPAL"
    | "CUSTOMER_BILL_PAY"
    | "PRODUCT_ADD_ONS_TRANSFER"
    | "GJFH_FREIGHT_FEE_DEDUCT_REFUND"
    | "RECHARGE_CANCEL"
    | "RECHARGE_WF"
    | "RECHARGE_WF_AUDIT"
    | "PROMOTION_RECHARGE"
    | "MULTI_FREEZE"
    | "COMBINATION_SERVICE_FREEZE_CHARGE"
    | "INV_AGE_FEE"
    | "PKG_STAND_FEE"
    | "FEE_ACTUAL_DEDUCTION"
    | "FEE_ACTUAL_REFUND";
  changeAmount?: number;
  changeAmountJpy?: number;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  data?: string;
  fundFlowNo?: string;
  fundFlowType?:
    | "RECHARGE"
    | "WITHDRAW"
    | "PRODUCT_SETTLEMENT"
    | "EXPRESS_AMOUNT"
    | "IL_CHARGE"
    | "SERVICE_CHARGE"
    | "AFTER_SALE_REFUND"
    | "AMOUNT_FREEZE"
    | "AMOUNT_UNFREEZE"
    | "TRANSFER_IN"
    | "TRANSFER_OUT"
    | "MEMBERSHIP_FEE"
    | "IL_CHARGE_WEIGHT_FEE"
    | "IL_CHARGE_SERVICE_FEE"
    | "COMMODITY_SERVICE_FEE"
    | "SHIPPING_SERVICE_FEE"
    | "SEARCH_SOURCE_CHARGE"
    | "SEARCH_SOURCE_CHARGE_REFUND"
    | "REPAYMENT"
    | "CUSTOMER_REFUND"
    | "WITHDRAW_REFUSED"
    | "RECHARGE_REFUSED"
    | "CUSTOMER_BILL_PAY"
    | "REFUND_DOMESTIC_FREIGHT"
    | "AMOUNT_REMAKE_FREEZE"
    | "COMMODITY_SERVICE_FEE_QUALITY_TRANSFORM"
    | "AMOUNT_REMAKE_OVERFLOW_FREEZE"
    | "IL_CHARGE_REFUND"
    | "RECHARGE_CANCEL"
    | "PROMOTION_RECHARGE"
    | "FEE_DEDUCTION"
    | "FEE_ACTUAL_DEDUCTION"
    | "FEE_ACTUAL_REFUND";
  /** @format int64 */
  mainCustomerId?: number;
  newCallback?: boolean;
  originalNo?: string;
  platformOrderNo?: string;
  reason?: string;
  /** @format int32 */
  result?: number;
  /** @format int64 */
  walletFundFlowId?: number;
}

/** WalletFlowDetail */
export interface WalletFlowDetail {
  /** 业务单据id */
  bizId?: string;
  /**
   * 业务单据类型
   * @format int32
   */
  bizType?: number;
  /**
   * 资金流水类型
   * @format int32
   */
  fundFlowType?: number;
}

/** WalletFundFlowGroupOrderNoDTO */
export interface WalletFundFlowGroupOrderNoDTO {
  inAmount?: number;
  orderNo?: string;
  outAmount?: number;
}

/** WalletProductDTO */
export interface WalletProductDTO {
  cost?: number;
  money?: number;
  /** @format int32 */
  num?: number;
  price?: number;
  productImg?: string;
  productPropertiesName?: string;
  productSku?: string;
  productTitle?: string;
  systemOrderNo?: string;
}

/** WareNameLangDTO */
export interface WareNameLangDTO {
  lang?: string;
  wareName?: string;
}

/** WarehouseForwardAttributeReqPageDTO */
export interface WarehouseForwardAttributeReqPageDTO {
  /** 运输属性编码 */
  attributeCode?: string;
  /** 国家code */
  countryCode?: string;
  /** 货代公司名称 */
  forwarder?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** 运输方式 */
  shippingType?: string;
  sorts?: ISortFieldEnum[];
  /** @format int32 */
  startIndex?: number;
  /** 仓库id */
  warehouse?: string;
}

/** WarehouseForwardAttributesRespDTO */
export interface WarehouseForwardAttributesRespDTO {
  /** 国家中文名称 */
  countryCnName?: string;
  /** 货代公司名称 */
  forwarder?: string;
  /**
   * 货代公司ID
   * @format int64
   */
  intForwarderConfigId?: number;
  /** 运输方式 */
  shippingType?: string;
  /** 运输属性列表 */
  transportationAttributesList?: TransportationAttributesRespDTO[];
  /** 仓库列表 */
  warehouseRespList?: WarehouseRespDTO[];
}

/** WarehouseRespDTO */
export interface WarehouseRespDTO {
  warehouse?: string;
  warehouseName?: string;
}

/** WeightConfDTO */
export interface WeightConfDTO {
  /** 续重 */
  continuedWeight?: number;
  /** 续重价格 */
  continuedWeightPrice?: number;
  /** 首重 */
  firstWeight?: number;
  /** 首重价格 */
  firstWeightPrice?: number;
  /** 重量最大值 */
  max?: number;
  /** 重量最小值 */
  min?: number;
  /** 价格 */
  price?: number;
  /**
   * 计费单价类型;1-小包;2-大包;3-大包+小包
   * @format int32
   */
  unitPriceType?: number;
}

/** WfAssociateOrderDTO */
export interface WfAssociateOrderDTO {
  /** 计算单据的附加项费用 */
  additionDetails?: WalletFlowDetail[];
  /** 货物贸易，买家英文名称 */
  buyerEnName?: string;
  /**
   * 客户id
   * @format int64
   */
  customerId?: number;
  /** 客户姓名 */
  customerName?: string;
  /**
   * 用户店铺表id
   * @format int64
   */
  customerShopId?: number;
  /**
   * 代表收货国家/地区的二字母ISO-3166 代码
   * 为了保障万里汇客户的资金安全，我们暂不支持处理下列买家国家/地区的订单同步：
   * BY：白俄罗斯
   * RU：俄罗斯
   * 更多信息：
   * 字段最大长度：2
   * 当 tradeType = GOODS 时必填
   */
  deliverCountry?: string;
  /** 发货单号 */
  deliveryTaskCode?: string;
  /** 当前汇率 */
  exchangeRate?: number;
  /** 是否是囤货订单，可取值： Y: 是,N: 否 */
  isBackorder?: string;
  /** 是否有报关单，可取值： Y：有报关单,N：无报关单 */
  isDeclared?: string;
  /** 新买家/老买家，可取值： Y: 新买家,N: 老买家 */
  isNewBuyer?: string;
  /** 货运状态，可取值： Y：已发货,N：未发货 */
  isShipped?: string;
  /**
   * 主账号id
   * @format int64
   */
  mainCustomerId?: number;
  /**
   * 订单状态
   * @format int32
   */
  orderStatus?: number;
  /**
   * 交易时间
   * @format date-time
   */
  orderTime?: string;
  /**
   * 2C订单类型: 1-纯直采订单; 2-直采+库存订单
   * @format int32
   */
  orderType?: number;
  /** 平台订单编号 */
  platformOrderNo?: string;
  /** 业务单id */
  referenceOrderId?: string;
  /** 业务单编号 */
  referenceOrderNo?: string;
  /**
   * 系统来源: 1-D2C; 2-B2B
   * @format int32
   */
  systemSource?: number;
  /** 订单金额，同一订单不可修改 */
  tradeAmount?: number;
  /** 符合ISO-4217规范的三字母货币代码 */
  tradeAmountCurrency?: string;
  /** 订单业务类型，可取值：B2B,B2C,C2C */
  tradeBizType?: string;
  /**
   * 代表买家所在国家/地区的二字母ISO-3166 代码
   * 为了保障万里汇客户的资金安全，我们暂不支持处理下列买家国家/地区的订单同步：
   * BY：白俄罗斯
   * RU：俄罗斯
   * 更多信息：
   * 字段最大长度：2
   * 当 tradeType = GOODS 时必填
   */
  tradeCountry?: string;
  /** 贸易类型，可取值：GOODS ：(货物贸易),  SERVICE */
  tradeType?: string;
  /** 交易金额，特指本次订单关联金额 */
  transAmount?: number;
  /** 符合ISO-4217规范的三字母货币代码 */
  transAmountCurrency?: string;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
  /** 计算单据的计费项 */
  walletFlowDetails?: WalletFlowDetail[];
  /** 关联订单报关单信息 */
  wfAssociateOrderDeclarationInfoDTOS?: WfAssociateOrderDeclarationInfoDTO[];
  /** 关联订单商品 */
  wfAssociateOrderGoodsDTOS?: WfAssociateOrderGoodsDTO[];
  /** 关联订单发货单信息 */
  wfAssociateOrderWayBillInfoDTOS?: WfAssociateOrderWayBillInfoDTO[];
}

/** WfAssociateOrderDeclarationInfoDTO */
export interface WfAssociateOrderDeclarationInfoDTO {
  /** 海关编号/报关单 */
  declarationOrderReferenceNo?: string;
  /** 发货单号 */
  deliveryTaskCode?: string;
  /** 平台订单编号 */
  platformOrderNo?: string;
  /** 订单编号 */
  referenceOrderNo?: string;
  /** 监管方式，可取值：9810 : 跨境电商B2B出口海外仓,9710 : 跨境电商B2B直接出口,0110 : 一般贸易 */
  supervisionMethod?: string;
}

/** WfAssociateOrderGoodsDTO */
export interface WfAssociateOrderGoodsDTO {
  /** 发货单号 */
  deliveryTaskCode?: string;
  /**
   * 库存数量
   * @format int32
   */
  frezeeQuantity?: number;
  /** 商品中文名称 */
  goodsCnName?: string;
  /** 商品名称 */
  goodsName?: string;
  /** 商品价格 */
  goodsPrice?: number;
  /** 商品数量 */
  goodsQuantity?: string;
  /** 商品单位 可取值：KG：千克,MT：公吨,YARDS：码,ROLLS：卷,PCS：产量,SETS：套/份,G：克,TON：吨,PALRS：一对/一副 */
  goodsUnit?: string;
  /** 平台订单编号 */
  platformOrderNo?: string;
  /** 订单编号 */
  referenceOrderNo?: string;
  /**
   * 采购数量
   * @format int32
   */
  sellerQuantity?: number;
  /** 结算价格 */
  settlePrice?: number;
  /** 商品/店铺网址 */
  storeUrl?: string;
}

/** WfAssociateOrderRequestDTO */
export interface WfAssociateOrderRequestDTO {
  /** 电商端指定的批次请求号，本字段为幂等字段，集成商可使用本字段做幂等校验 */
  requestId?: string;
  /** 业务场景代码 */
  sceneCode?: string;
  /** 交易列表 */
  tradeOrders?: WfTradeOrderDTO[];
  /** 代发交易单号或来账单号 */
  transferId?: string;
}

/** WfAssociateOrderWayBillInfoDTO */
export interface WfAssociateOrderWayBillInfoDTO {
  /** 货物贸易，买家英文名称 */
  buyerEnName?: string;
  /**
   * 代表收货国家/地区的二字母ISO-3166 代码
   * 为了保障万里汇客户的资金安全，我们暂不支持处理下列买家国家/地区的订单同步：
   * BY：白俄罗斯
   * RU：俄罗斯
   * 更多信息：
   * 字段最大长度：2
   * 当 tradeType = GOODS 时必填
   */
  deliverCountry?: string;
  /** 发货单号 */
  deliveryTaskCode?: string;
  /** 平台订单编号 */
  platformOrderNo?: string;
  /** 物流公司编码 */
  providerKey?: string;
  /** 物流公司名称 */
  providerValue?: string;
  /** 订单编号 */
  referenceOrderNo?: string;
  /**
   * 发货时间
   * @format date-time
   */
  shippingDate?: string;
  /** 物流方式，可取值：RAILWAY ：铁路,LAND_TRANSPORTATION ：陆运,BY_SEA ：海运,AIR_CARGO ：空运,EXPRESS ：快递,SPECIAL_LINE_TRANSPORTATION ：专线运输,OTHER ：其他 */
  shippingMethod?: string;
  /** 出境物流单号 */
  shippingOrderReferenceNo?: string;
  /**
   * 代表买家所在国家/地区的二字母ISO-3166 代码
   * 为了保障万里汇客户的资金安全，我们暂不支持处理下列买家国家/地区的订单同步：
   * BY：白俄罗斯
   * RU：俄罗斯
   * 更多信息：
   * 字段最大长度：2
   * 当 tradeType = GOODS 时必填
   */
  tradeCountry?: string;
}

/**
 * WfBalanceRechargeAssociateRecord
 * 万里汇充值单据关联记录表
 */
export interface WfBalanceRechargeAssociateRecord {
  /** 本次记录关联金额 */
  associateAmount?: number;
  /**
   * 万里汇来账通知记录id
   * @format int64
   */
  associateRecordId?: number;
  /** 本次已关联金额 */
  associatedAmount?: number;
  /**
   * 充值记录id
   * @format int64
   */
  balanceRechargeId?: number;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * 客户id
   * @format int64
   */
  customerId?: number;
  /** 客户名称 */
  customerName?: string;
  /** 来账通知id */
  fundingId?: string;
  /** 本次未关联金额 */
  notAssociateAmount?: number;
  /**
   * 重试次数
   * @format int32
   */
  retryTimes?: number;
  /** 系统来源，1:d2c,2:b2b */
  systemSource?: string;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/** WfBalanceRechargeAssociateRecordQueryDTO */
export interface WfBalanceRechargeAssociateRecordQueryDTO {
  /** 本次记录关联金额 */
  associateAmount?: number;
  /**
   * 万里汇来账通知记录id
   * @format int64
   */
  associateRecordId?: number;
  /**
   * 订单关联结果 0：失败 1：成功  2：未知
   * @format int32
   */
  associateResult?: number;
  /**
   * 订单关联状态 0：未关联  2：已关联
   * @format int32
   */
  associateStatus?: number;
  /**
   * 充值记录id
   * @format int64
   */
  balanceRechargeId?: number;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * 客户id
   * @format int64
   */
  customerId?: number;
  /** 客户名称 */
  customerName?: string;
  /** 来账通知id */
  fundingId?: string;
  /**
   * 第几页
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页条数
   * @format int32
   */
  pageSize?: number;
  /**
   * 重试次数闭区间
   * @format int32
   */
  retryTimesEnd?: number;
  /**
   * 重试次数开区间
   * @format int32
   */
  retryTimesStart?: number;
  /** @format int32 */
  startIndex?: number;
  /** 系统来源，1:d2c,2:b2b */
  systemSource?: string;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
}

/**
 * WfBalanceRechargeUploadRecord
 * 万里汇充值单据关联记录表
 */
export interface WfBalanceRechargeUploadRecord {
  /** 本次记录关联金额 */
  associateAmount?: number;
  /** 符合ISO-4217规范的三字母货币代码 */
  associateAmountCurrency?: string;
  /**
   * 万里汇来账通知记录id
   * @format int64
   */
  associateRecordId?: number;
  /**
   * 订单关联结果 0：失败 1：成功  2：未知
   * @format int32
   */
  associateResult?: number;
  /**
   * 订单关联状态 0：未关联  2：已关联
   * @format int32
   */
  associateStatus?: number;
  /** 已关联金额 */
  associatedAmount?: number;
  /**
   * 充值记录id
   * @format int64
   */
  balanceRechargeId?: number;
  /** 货物贸易，买家英文名称 */
  buyerEnName?: string;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * 客户id
   * @format int64
   */
  customerId?: number;
  /** 客户姓名 */
  customerName?: string;
  /**
   * 用户店铺表id
   * @format int64
   */
  customerShopId?: number;
  /** 订单报关信息 */
  declarationInfos?: WfTradeOrderDeclarationInfo[];
  /** 代表收货国家/地区的二字母ISO-3166 代码为了保障万里汇客户的资金安全，我们暂不支持处理下列买家国家/地区的订单同步：当 tradeType = GOODS 时必填 */
  deliverCountry?: string;
  /** 当前汇率 */
  exchangeRate?: number;
  /** wf来账通知id */
  fundingId?: string;
  /** 是否用于结汇，可取值：Y ：用于结汇,N ：不用于结汇 */
  isUsedForExchange?: string;
  /**
   * 主账号id
   * @format int64
   */
  mainCustomerId?: number;
  /** 未关联金额 */
  notAssociatedAmount?: number;
  /** 订单审核失败原因 */
  orderAuditFailReason?: string;
  /**
   * 订单完成时间
   * @format date-time
   */
  orderFinishTime?: string;
  /**
   * 订单状态
   * @format int32
   */
  orderStatus?: number;
  /**
   * 交易时间
   * @format date-time
   */
  orderTime?: string;
  /**
   * 订单id
   * @format int64
   */
  referenceOrderId?: number;
  /** 业务单据编号 */
  referenceOrderNo?: string;
  /** 上传WF订单批次id */
  requestId?: string;
  /**
   * 订单关联重试次数
   * @format int32
   */
  retryTimes?: number;
  /**
   * 系统来源: 1-D2C; 2-B2B
   * @format int32
   */
  systemSource?: number;
  /** 订单金额，同一订单不可修改 */
  tradeAmount?: number;
  /** 符合ISO-4217规范的三字母货币代码 */
  tradeAmountCurrency?: string;
  /** 订单业务类型，可取值：B2B,B2C,C2C */
  tradeBizType?: string;
  /** 代表买家所在国家/地区的二字母ISO-3166 代码为了保障万里汇客户的资金安全，我们暂不支持处理下列买家国家/地区的订单同步 当 tradeType = GOODS 时必填 */
  tradeCountry?: string;
  /** 订单日元金额，同一订单不可修改 */
  tradeJpyAmount?: number;
  /** 贸易类型，可取值：GOODS ：(货物贸易),  SERVICE */
  tradeType?: string;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  /**
   * 万里汇订单上传记录id
   * @format int64
   */
  uploadRecordId?: number;
  /** 订单物流信息 */
  wayBillInfos?: WfTradeOrderWayBillInfo[];
  /** 订单商品信息 */
  wfTradeOrderGoods?: WfTradeOrderGoods[];
}

/**
 * WfNotifyInfo
 * 万里汇来账通知记录表
 */
export interface WfNotifyInfo {
  /** 来账通知金额 */
  amount?: number;
  /** 来账通知金额 */
  amountCurrency?: string;
  /** 银行编号 */
  bankName?: string;
  /** 银行编号 */
  bankNo?: string;
  /** 银行编号 */
  cardNo?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /**
   * 万里汇来账通知记录id
   * @format int64
   */
  notifyId?: number;
  /** 来账通知消息数据json */
  notifyInfoJson?: string;
  /**
   * 消息处理状态：0 ：未处理  1: 处理成功 2：处理失败
   * @format int32
   */
  notifyStatus?: number;
  /**
   * 来账类型 ：1：进账  2：撤销
   * @format int32
   */
  type?: number;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 用户名 */
  userName?: string;
  /** 转换后的用户名 */
  userNameConvert?: string;
  /** 来账通知请求id */
  wfFundingId?: string;
}

/**
 * WfTradeOrder
 * 万里汇关联订单
 */
export interface WfTradeOrder {
  /**
   * 订单关联结果 0：失败 1：成功  2：未知
   * @format int32
   */
  associateResult?: number;
  /**
   * 订单关联状态 0：未关联 1：部分关联  2：已关联
   * @format int32
   */
  associateStatus?: number;
  /** 已关联金额 */
  associatedAmount?: number;
  /** 已关联金额 */
  associatedJpyAmount?: number;
  /**
   * 充值记录id
   * @format int64
   */
  balanceRechargeId?: number;
  /** 货物贸易，买家英文名称 */
  buyerEnName?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 本次关联金额 */
  currentAssociateAmount?: number;
  /**
   * 客户id
   * @format int64
   */
  customerId?: number;
  /** 客户姓名 */
  customerName?: string;
  /**
   * 用户店铺表id
   * @format int64
   */
  customerShopId?: number;
  /** 获取订单报关单信息 */
  declarationInfos?: WfTradeOrderDeclarationInfo[];
  /**
   * 代表收货国家/地区的二字母ISO-3166 代码
   * 为了保障万里汇客户的资金安全，我们暂不支持处理下列买家国家/地区的订单同步：
   * BY：白俄罗斯
   * RU：俄罗斯
   * 更多信息：
   * 字段最大长度：2
   * 当 tradeType = GOODS 时必填
   */
  deliverCountry?: string;
  /** 发货单号 */
  deliveryTaskCode?: string;
  /** 当前汇率 */
  exchangeRate?: number;
  /** wf来账通知id */
  fundingId?: string;
  /** 订单商品信息 */
  goods?: WfTradeOrderGoods[];
  /** 新买家/老买家，可取值： Y: 新买家,N: 老买家 */
  isNewBuyer?: string;
  /** 是否用于结汇，可取值：Y ：用于结汇,N ：不用于结汇 */
  isUsedForExchange?: string;
  /**
   * 主账号id
   * @format int64
   */
  mainCustomerId?: number;
  /** 未关联金额 */
  notAssociatedAmount?: number;
  /** 未关联金额 */
  notAssociatedJpyAmount?: number;
  /** 订单审核失败原因 */
  orderAuditFailReason?: string;
  /**
   * 订单完成时间
   * @format date-time
   */
  orderFinishTime?: string;
  /**
   * 订单状态
   * @format int32
   */
  orderStatus?: number;
  /**
   * 交易时间
   * @format date-time
   */
  orderTime?: string;
  /** 成交方式 */
  payType?: string;
  /** 平台订单编号 */
  platformOrderNo?: string;
  /** @format int32 */
  rank?: number;
  /**
   * 订单id
   * @format int64
   */
  referenceOrderId?: number;
  /** 业务单据编号 */
  referenceOrderNo?: string;
  /**
   * 订单关联重试次数
   * @format int32
   */
  retryTimes?: number;
  /**
   * 系统来源: 1-D2C; 2-B2B
   * @format int32
   */
  systemSource?: number;
  /** 订单金额，同一订单不可修改 */
  tradeAmount?: number;
  /** 符合ISO-4217规范的三字母货币代码 */
  tradeAmountCurrency?: string;
  /** 订单业务类型，可取值：B2B,B2C,C2C */
  tradeBizType?: string;
  /**
   * 代表买家所在国家/地区的二字母ISO-3166 代码
   * 为了保障万里汇客户的资金安全，我们暂不支持处理下列买家国家/地区的订单同步：
   * BY：白俄罗斯
   * RU：俄罗斯
   * 更多信息：
   * 字段最大长度：2
   * 当 tradeType = GOODS 时必填
   */
  tradeCountry?: string;
  /** 订单金额，同一订单不可修改 */
  tradeJpyAmount?: number;
  /** 贸易类型，可取值：GOODS ：(货物贸易),  SERVICE */
  tradeType?: string;
  /** 交易金额，特指本次订单关联金额 */
  transAmount?: number;
  /** 符合ISO-4217规范的三字母货币代码 */
  transAmountCurrency?: string;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 获取订单物流信息 */
  wayBillInfos?: WfTradeOrderWayBillInfo[];
}

/** WfTradeOrderDTO */
export interface WfTradeOrderDTO {
  /** 合同信息 */
  bizContractInfo?: BizContractInfo;
  /** 关联订单商品 */
  goods?: WfTradeOrderGoodsDTO[];
  /** 是否用于结汇，可取值：Y ：用于结汇,N ：不用于结汇 */
  isUsedForExchange?: string;
  /**
   * 订单状态
   * @format int32
   */
  orderStatus?: number;
  /**
   * 交易时间
   * @format date-time
   */
  orderTime?: string;
  /** 订单编号 */
  referenceOrderNo?: string;
  /** 发货单信息 */
  shipping?: WfTradeOrderShippingDTO;
  /** 订单金额，同一订单不可修改。 */
  tradeAmount?: Amount;
  /** 订单业务类型，可取值：B2B,B2C,C2C */
  tradeBizType?: string;
  /** 贸易类型，可取值：GOODS ：(货物贸易),  SERVICE */
  tradeType?: string;
  /** 交易金额，特指本次订单关联金额。 */
  transAmount?: Amount;
}

/**
 * WfTradeOrderDeclarationInfo
 * 订单报关单信息表
 */
export interface WfTradeOrderDeclarationInfo {
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 海关编号/报关单 */
  declarationOrderReferenceNo?: string;
  /** 发货单号 */
  deliveryTaskCode?: string;
  /** @format int64 */
  orderDeclarationInfoId?: number;
  /** 平台订单编号 */
  platformOrderNo?: string;
  /** 订单编号 */
  referenceOrderNo?: string;
  /** 监管方式，可取值：9810 : 跨境电商B2B出口海外仓,9710 : 跨境电商B2B直接出口,0110 : 一般贸易 */
  supervisionMethod?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/** WfTradeOrderDeclarationInfoDTO */
export interface WfTradeOrderDeclarationInfoDTO {
  /** 海关编号/报关单 */
  declarationOrderReferenceNo?: string;
  /** 订单编号 */
  referenceOrderNo?: string;
  /** 监管方式，可取值：9810 : 跨境电商B2B出口海外仓,9710 : 跨境电商B2B直接出口,0110 : 一般贸易 */
  supervisionMethod?: string;
}

/**
 * WfTradeOrderGoods
 * 万里汇关联订单商品表
 */
export interface WfTradeOrderGoods {
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 发货单号 */
  deliveryTaskCode?: string;
  /** 商品中文名称 */
  goodsCnName?: string;
  /** 商品名称 */
  goodsName?: string;
  /** 商品数量 */
  goodsQuantity?: string;
  /** 商品单位 可取值：KG：千克,MT：公吨,YARDS：码,ROLLS：卷,PCS：产量,SETS：套/份,G：克,TON：吨,PALRS：一对/一副 */
  goodsUnit?: string;
  /**
   * 订单商品明细id
   * @format int64
   */
  orderGoodsDetailId?: number;
  /** 平台订单编号 */
  platformOrderNo?: string;
  /** 订单编号 */
  referenceOrderNo?: string;
  /** 商品/店铺网址 */
  storeUrl?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/** WfTradeOrderGoodsDTO */
export interface WfTradeOrderGoodsDTO {
  /** 商品中文名称 */
  goodsCnName?: string;
  /** 商品名称 */
  goodsName?: string;
  /** 商品数量 */
  goodsQuantity?: string;
  /** 商品单位 可取值：KG：千克,MT：公吨,YARDS：码,ROLLS：卷,PCS：产量,SETS：套/份,G：克,TON：吨,PALRS：一对/一副 */
  goodsUnit?: string;
  /** 订单编号 */
  referenceOrderNo?: string;
  /** 商品/店铺网址 */
  storeUrl?: string;
}

/** WfTradeOrderQueryVO */
export interface WfTradeOrderQueryVO {
  /**
   * 充值记录关联订单记录id
   * @format int64
   */
  associateRecordId?: number;
  /**
   * 订单关联结果 0：失败 1：成功  2：未知
   * @format int32
   */
  associateResult?: number;
  /**
   * 订单关联状态 0：未关联 1：部分关联  2：已关联
   * @format int32
   */
  associateStatus?: number;
  /** 订单关联状态数组 0：未关联 1：部分关联  2：已关联 */
  associateStatusList?: number[];
  /** 已关联金额 */
  associatedAmount?: number;
  /** 已关联金额 */
  associatedAmountEnd?: number;
  /** 已关联金额 */
  associatedAmountStart?: number;
  /**
   * 充值记录id
   * @format int64
   */
  balanceRechargeId?: number;
  /**
   * 客户id
   * @format int64
   */
  currentLoginCustomerId?: number;
  /**
   * 客户id
   * @format int64
   */
  customerId?: number;
  /** 客户姓名 */
  customerName?: string;
  /**
   * 用户店铺表id
   * @format int64
   */
  customerShopId?: number;
  /** 发货单号 */
  deliveryTaskCode?: string;
  /** wf来账通知id */
  fundingId?: string;
  /** 是否用于结汇，可取值：Y ：用于结汇,N ：不用于结汇 */
  isUsedForExchange?: string;
  /**
   * 主账号id
   * @format int64
   */
  mainCustomerId?: number;
  /** 未关联金额 */
  notAssociatedAmount?: number;
  /** 未关联金额 */
  notAssociatedAmountEnd?: number;
  /** 未关联金额 */
  notAssociatedAmountStart?: number;
  /**
   * 交易时间
   * @format date-time
   */
  orderFinishTimeEnd?: string;
  /**
   * 交易时间
   * @format date-time
   */
  orderFinishTimeStart?: string;
  /**
   * 订单状态
   * @format int32
   */
  orderStatus?: number;
  /**
   * 交易时间
   * @format date-time
   */
  orderTime?: string;
  /**
   * 第几页
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页条数
   * @format int32
   */
  pageSize?: number;
  /** 平台订单编号 */
  platformOrderNo?: string;
  /**
   * 订单id
   * @format int64
   */
  referenceOrderId?: number;
  /** 业务单据编号 */
  referenceOrderNo?: string;
  /**
   * 订单关联重试次数结束
   * @format int32
   */
  retryTimesEnd?: number;
  /**
   * 订单关联重试次数开始
   * @format int32
   */
  retryTimesStart?: number;
  /** @format int32 */
  startIndex?: number;
  /**
   * 系统来源: 1-D2C; 2-B2B
   * @format int32
   */
  systemSource?: number;
  /** 订单金额，同一订单不可修改 */
  tradeAmount?: number;
  /** 符合ISO-4217规范的三字母货币代码 */
  tradeAmountCurrency?: string;
  /** 订单金额，闭区间 */
  tradeAmountEnd?: number;
  /** 订单金额，开区间 */
  tradeAmountStart?: number;
  /** 订单业务类型，可取值：B2B,B2C,C2C */
  tradeBizType?: string;
  /** 贸易类型，可取值：GOODS ：(货物贸易),  SERVICE */
  tradeType?: string;
  /** 交易金额，特指本次订单关联金额 */
  transAmount?: number;
  /** 符合ISO-4217规范的三字母货币代码 */
  transAmountCurrency?: string;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
  /**
   * 上传wf的请求批次id：每个批次最多10个订单
   * @format int64
   */
  wfRequestId?: number;
}

/** WfTradeOrderShippingDTO */
export interface WfTradeOrderShippingDTO {
  /** 已发货，发货单信息 */
  declarationInfos?: WfTradeOrderDeclarationInfoDTO;
  /** 预计发货时间 */
  expectedShippingDate?: string;
  /** 是否有报关单，可取值：Y：有报关单 N：无报关单 */
  isDeclared?: string;
  /** 新买家/老买家，可取值，可取值：Y: 新买家 N: 老买家 */
  isNewBuyer?: string;
  /** 货运状态，可取值：Y：已发货 N：未发货 */
  isShipped?: string;
  /** 成交方式 */
  tradeTerms?: string;
  /** 已发货，发货单信息 */
  wayBillInfos?: WfTradeOrderWayBillInfoDTO[];
}

/** WfTradeOrderSubmitVO */
export interface WfTradeOrderSubmitVO {
  /** 关联记录id */
  associateRecordIdList?: number[];
  /**
   * 充值记录id
   * @format int64
   */
  balanceRechargeId?: number;
  /** 来账通知id */
  fundingId?: string;
  /** 关联订单的编号数组 */
  referenceOrderNos?: string[];
}

/** WfTradeOrderUpdateVO */
export interface WfTradeOrderUpdateVO {
  /**
   * 订单关联结果 0：失败 1：成功  2：未知
   * @format int32
   */
  associateResult?: number;
  /**
   * 订单关联状态 0：未关联 1：部分关联  2：已关联
   * @format int32
   */
  associateStatus?: number;
  /** 是否用于结汇，可取值：Y ：用于结汇,N ：不用于结汇 */
  isUsedForExchange?: string;
  /**
   * 订单id
   * @format int64
   */
  referenceOrderId?: number;
  /**
   * 上传记录id
   * @format int64
   */
  uploadRecordId?: number;
}

/**
 * WfTradeOrderWayBillInfo
 * 订单发货单信息表
 */
export interface WfTradeOrderWayBillInfo {
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 发货单号 */
  deliveryTaskCode?: string;
  /** @format int64 */
  orderShippingWayBillInfoId?: number;
  /** 平台订单编号 */
  platformOrderNo?: string;
  /** 物流公司编码 */
  providerKey?: string;
  /** 物流公司名称 */
  providerValue?: string;
  /** 订单编号 */
  referenceOrderNo?: string;
  /**
   * 发货时间
   * @format date-time
   */
  shippingDate?: string;
  /** 物流方式，可取值：RAILWAY ：铁路,LAND_TRANSPORTATION ：陆运,BY_SEA ：海运,AIR_CARGO ：空运,EXPRESS ：快递,SPECIAL_LINE_TRANSPORTATION ：专线运输,OTHER ：其他 */
  shippingMethod?: string;
  /** 出境物流单号 */
  shippingOrderReferenceNo?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/** WfTradeOrderWayBillInfoDTO */
export interface WfTradeOrderWayBillInfoDTO {
  logisticsCompany?: LogisticsCompany;
  /** 订单编号 */
  referenceOrderNo?: string;
  /** 物流方式，可取值：RAILWAY ：铁路,LAND_TRANSPORTATION ：陆运,BY_SEA ：海运,AIR_CARGO ：空运,EXPRESS ：快递,SPECIAL_LINE_TRANSPORTATION ：专线运输,OTHER ：其他 */
  shippingMethod?: string;
  /** 出境物流单号 */
  shippingOrderReferenceNo?: string;
}

/**
 * WithdrawApplyAmountCalculateVO
 * 提现金额计算
 */
export interface WithdrawApplyAmountCalculateVO {
  /** 提现金额（日元）=（提现金额-提现金额*费率）*汇率 */
  withdrawAmountJp?: number;
  /** 提现手续费=提现金额*费率 */
  withdrawFee?: number;
}

/**
 * WithdrawApplyInfoVO
 * 提现信息
 */
export interface WithdrawApplyInfoVO {
  /** 可用金额 */
  availableAmount?: number;
  /** 中行折算汇率 */
  exchangeRate?: number;
  /** 费率 */
  feeRate?: number;
}

/** WithdrawManageApplyVO */
export interface WithdrawManageApplyVO {
  auditMark?: string;
  bankAddress?: string;
  bankName?: string;
  bankNo?: string;
  beneficiaryAddress?: string;
  beneficiaryName?: string;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  email?: string;
  emailCode?: string;
  exchangeRate?: number;
  feeRate?: number;
  kzType?: string;
  requestBookUrl?: string;
  systemSource?: string;
  withdrawAmountJp?: number;
  withdrawAmountRmb?: number;
  /** @format date-time */
  withdrawApplyTime?: string;
  withdrawChannelType?: string;
  withdrawFee?: number;
  withdrawReason?: string;
  withdrawStatus?: string;
}

/**
 * WithdrawManageAuditVO
 * 结算中心-提现管理-审核
 */
export interface WithdrawManageAuditVO {
  /** 审核备注（拒绝原因） */
  auditMark?: string;
  /** 提现金额(人民币) */
  withdrawAmountRmb?: number;
  /**
   * id
   * @format int64
   */
  withdrawManageId?: number;
  /** 提现状态，0：待审核，1：带打款；2：已打款；3：已拒绝 */
  withdrawStatus?: string;
}

/**
 * WithdrawManageListVO
 * 结算中心-提现管理-分页
 */
export interface WithdrawManageListVO {
  /** 审核日志 */
  auditLogList?: AuditLogDTO[];
  /** 审核备注 */
  auditMark?: string;
  /** 银行地址 */
  bankAddress?: string;
  /** 银行名称 */
  bankName?: string;
  /** 银行卡号 */
  bankNo?: string;
  /** 收款人地址 */
  beneficiaryAddress?: string;
  /** 收款人名称 */
  beneficiaryName?: string;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * 客户Id
   * @format int64
   */
  customerId?: number;
  /** 客户名称 */
  customerName?: string;
  /** 删除标志 */
  deleteFlag?: boolean;
  /** 邮箱地址 */
  email?: string;
  /** 汇率，中国银行接口中的（中行折算价）字段 */
  exchangeRate?: number;
  /** 费率 */
  feeRate?: number;
  /** 口座类别；1：普通、2：综合； */
  kzType?: string;
  /** 操作人id */
  operateUserId?: string;
  /** 操作人姓名 */
  operateUserName?: string;
  /**
   * 操作时间
   * @format date-time
   */
  operateUserTime?: string;
  /** 请求书 */
  requestBookUrl?: string;
  /** 系统来源: 1-D2C; 2-B2B */
  systemSource?: string;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  /** 转账凭证 */
  voucherList?: WithdrawManageTransferVoucher[];
  /** 提现金额（日元）=（提现金额-提现金额*费率）*汇率 */
  withdrawAmountJp?: number;
  /** 提现金额(人民币) */
  withdrawAmountRmb?: number;
  /**
   * 提现申请日期
   * @format date-time
   */
  withdrawApplyTime?: string;
  /** 提现渠道；1、银行卡 */
  withdrawChannelType?: string;
  /** 提现手续费=提现金额*费率 */
  withdrawFee?: number;
  /**
   * id
   * @format int64
   */
  withdrawManageId?: number;
  /** 提现原因 */
  withdrawReason?: string;
  /** 提现状态，0：待审核，1：带打款；2：已打款；3：已拒绝 */
  withdrawStatus?: string;
}

/**
 * WithdrawManageMakePaymentVO
 * 结算中心-提现管理-打款
 */
export interface WithdrawManageMakePaymentVO {
  /** 转账凭证 */
  transferVoucherUrl?: string;
  /**
   * id
   * @format int64
   */
  withdrawManageId?: number;
}

/**
 * WithdrawManageQueryVO
 * 结算中心-提现管理-查询
 */
export interface WithdrawManageQueryVO {
  /** 客户Id */
  customerId?: string;
  /** 客户名称 */
  customerName?: string;
  /**
   * 第几页
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页条数
   * @format int32
   */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  /** 系统来源: 1-D2C; 2-B2B */
  systemSource?: string;
  /**
   * 提现申请日期
   * @format date-time
   */
  withdrawApplyTimeEnd?: string;
  /**
   * 提现申请日期
   * @format date-time
   */
  withdrawApplyTimeStart?: string;
  /** 主键 */
  withdrawManageId?: string;
  /** 提现状态，0：待审核，1：带打款；2：已打款；3：已拒绝 */
  withdrawStatus?: string;
}

/**
 * WithdrawManageTransferVoucher
 * 提现管理转账凭证
 */
export interface WithdrawManageTransferVoucher {
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 删除标志 */
  deleteFlag?: boolean;
  /** 转账凭证 */
  transferVoucherUrl?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  /**
   * 提现管理主键
   * @format int64
   */
  withdrawManageId?: number;
  /**
   * 主键
   * @format int64
   */
  withdrawManageTransferVoucherId?: number;
}

/**
 * WorkbenchHall
 * 工作台-办事大厅
 */
export interface WorkbenchHall {
  /** 账号 */
  accountNumber?: string;
  /** 账号类型 */
  accountType?: string;
  /** 金额 */
  amount?: number;
  /** 金额货币 */
  amountCurrencyCode?: string;
  /**
   * 申请时间
   * @format date-time
   */
  applyTime?: string;
  /** 具体待处理事项 */
  contentDetail?: string;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 删除标志 */
  deleteFlag?: boolean;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 事件结束标志 */
  eventEndFlag?: boolean;
  /** 事项名称 */
  eventName?: string;
  /** 事项名称类型；1：余额充值；2：提现管理；3：客户退款 4：对账失败 */
  eventNameType?: string;
  /** 事项状态 */
  eventStatus?: string;
  /**
   * 处理时间
   * @format date-time
   */
  operateTime?: string;
  /**
   * 账号id
   * @format int64
   */
  payAccountId?: number;
  /**
   * 消息读取状态：0:未读  1:已读
   * @format int32
   */
  readStatus?: number;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  /** 用户真实片假名 */
  userRealName?: string;
  /**
   * 工作台-办事大厅主键
   * @format int64
   */
  workbenchHallId?: number;
}

/** WorkbenchHallQueryVO */
export interface WorkbenchHallQueryVO {
  /** 账号 */
  accountNumber?: string;
  /** 账号类型 */
  accountType?: string;
  /** 删除标志 */
  deleteFlag?: boolean;
  /**
   * 创建时间结束时间
   * @format date-time
   */
  endTime?: string;
  /** 事件结束标志 */
  eventEndFlag?: boolean;
  /** 事项名称 */
  eventName?: string;
  /** 事项名称类型；1：余额充值；2：提现管理；3：客户退款 4：对账失败 */
  eventNameType?: string;
  /** 创建时间倒序 */
  orderByCreateTimeDesc?: boolean;
  /**
   * 第几页
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页条数
   * @format int32
   */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  /**
   * 创建时间开始时间
   * @format date-time
   */
  startTime?: string;
}

/** WorkbenchHallTypeVO */
export interface WorkbenchHallTypeVO {
  /** 来源类型 */
  systemSource?: string;
  /**
   * 工作台-办事大厅主键
   * @format int64
   */
  workbenchHallId?: number;
}

/** WorkbenchHallUpdateVO */
export interface WorkbenchHallUpdateVO {
  /**
   * 来源类型
   * @format int32
   */
  readStatus?: number;
  /**
   * 工作台-办事大厅主键
   * @format int64
   */
  workbenchHallId?: number;
}

/** failedPayPalDTO */
export interface FailedPayPalDTO {
  description?: string;
  issue?: string;
}

/** BizResponse«AdditionConfigPublicListRespDTO» */
export interface BizResponseAdditionConfigPublicListRespDTO {
  code?: string;
  data?: AdditionConfigPublicListRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«AdditionConfigRespDTO» */
export interface BizResponseAdditionConfigRespDTO {
  code?: string;
  data?: AdditionConfigRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«AdditionConfigSellingPriceSettingUpdateVO» */
export interface BizResponseAdditionConfigSellingPriceSettingUpdateVO {
  code?: string;
  /** 结算中心-配置项-销售价配置设置-更新实体类 */
  data?: AdditionConfigSellingPriceSettingUpdateVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«AdditionTemplateRespDTO» */
export interface BizResponseAdditionTemplateRespDTO {
  code?: string;
  data?: AdditionTemplateRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«AreaDTO» */
export interface BizResponseAreaDTO {
  code?: string;
  data?: AreaDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«AttributeVO» */
export interface BizResponseAttributeVO {
  code?: string;
  /** 属性 */
  data?: AttributeVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«BalanceRechargeTotalVO» */
export interface BizResponseBalanceRechargeTotalVO {
  code?: string;
  data?: BalanceRechargeTotalVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«BalanceRecharge» */
export interface BizResponseBalanceRecharge {
  code?: string;
  /** 余额充值 */
  data?: BalanceRecharge;
  msg?: string;
  success?: boolean;
}

/** BizResponse«BaseBatchDTO» */
export interface BizResponseBaseBatchDTO {
  code?: string;
  data?: BaseBatchDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«BillInfoDTO» */
export interface BizResponseBillInfoDTO {
  code?: string;
  /** 账单详情 */
  data?: BillInfoDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«BillNotifyVO» */
export interface BizResponseBillNotifyVO {
  code?: string;
  /** 账单通知 */
  data?: BillNotifyVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CalcResultVO» */
export interface BizResponseCalcResultVO {
  code?: string;
  /** 成本计算器计算结果 */
  data?: CalcResultVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CaptureOrderDTO» */
export interface BizResponseCaptureOrderDTO {
  code?: string;
  data?: CaptureOrderDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CreatePaymentOrderRespDTO» */
export interface BizResponseCreatePaymentOrderRespDTO {
  code?: string;
  data?: CreatePaymentOrderRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CreateSubscriptionDTO» */
export interface BizResponseCreateSubscriptionDTO {
  code?: string;
  data?: CreateSubscriptionDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerAdditionMergeRespDTO» */
export interface BizResponseCustomerAdditionMergeRespDTO {
  code?: string;
  data?: CustomerAdditionMergeRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerAdditionRespDTO» */
export interface BizResponseCustomerAdditionRespDTO {
  code?: string;
  data?: CustomerAdditionRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerAdditionTemplateInfoRespDTO» */
export interface BizResponseCustomerAdditionTemplateInfoRespDTO {
  code?: string;
  /** 客户附加项组详情InfoRespDTO */
  data?: CustomerAdditionTemplateInfoRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerPaymentTokenDTO» */
export interface BizResponseCustomerPaymentTokenDTO {
  code?: string;
  data?: CustomerPaymentTokenDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerUnCheckMoneyVO» */
export interface BizResponseCustomerUnCheckMoneyVO {
  code?: string;
  /** 客户未入账金额VO */
  data?: CustomerUnCheckMoneyVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerWalletFundFlowDetailsRespDTO» */
export interface BizResponseCustomerWalletFundFlowDetailsRespDTO {
  code?: string;
  data?: CustomerWalletFundFlowDetailsRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerWalletFundFlowExpressInfoRespDTO» */
export interface BizResponseCustomerWalletFundFlowExpressInfoRespDTO {
  code?: string;
  data?: CustomerWalletFundFlowExpressInfoRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerWalletFundFlowInfoRespDTO» */
export interface BizResponseCustomerWalletFundFlowInfoRespDTO {
  code?: string;
  data?: CustomerWalletFundFlowInfoRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerWalletRespDTO» */
export interface BizResponseCustomerWalletRespDTO {
  code?: string;
  data?: CustomerWalletRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«DataCenterDayListVO» */
export interface BizResponseDataCenterDayListVO {
  code?: string;
  data?: DataCenterDayListVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«DataCenterTodayInfoVO» */
export interface BizResponseDataCenterTodayInfoVO {
  code?: string;
  data?: DataCenterTodayInfoVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«EstimateIntShipFeeRespDTO» */
export interface BizResponseEstimateIntShipFeeRespDTO {
  code?: string;
  data?: EstimateIntShipFeeRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ExchangeRateRespDTO» */
export interface BizResponseExchangeRateRespDTO {
  code?: string;
  data?: ExchangeRateRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«IPage«PayAccountListVO»» */
export interface BizResponseIPagePayAccountListVO {
  code?: string;
  data?: IPagePayAccountListVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«IPage«PayFlowListVO»» */
export interface BizResponseIPagePayFlowListVO {
  code?: string;
  data?: IPagePayFlowListVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ImportExcelResultModel» */
export interface BizResponseImportExcelResultModel {
  code?: string;
  data?: ImportExcelResultModel;
  msg?: string;
  success?: boolean;
}

/** BizResponse«IntAreaResp» */
export interface BizResponseIntAreaResp {
  code?: string;
  data?: IntAreaResp;
  msg?: string;
  success?: boolean;
}

/** BizResponse«IntForwarderConfigInfoRespDTO» */
export interface BizResponseIntForwarderConfigInfoRespDTO {
  code?: string;
  data?: IntForwarderConfigInfoRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«IntShipConfigInfoRespDTO» */
export interface BizResponseIntShipConfigInfoRespDTO {
  code?: string;
  data?: IntShipConfigInfoRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«IntShipContentRespDTO» */
export interface BizResponseIntShipContentRespDTO {
  code?: string;
  data?: IntShipContentRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«IntShipFeeDetailRespDTO» */
export interface BizResponseIntShipFeeDetailRespDTO {
  code?: string;
  data?: IntShipFeeDetailRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«IntShipForwardersRespDTO» */
export interface BizResponseIntShipForwardersRespDTO {
  code?: string;
  data?: IntShipForwardersRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«IntShipTemplateInfoRespDTO» */
export interface BizResponseIntShipTemplateInfoRespDTO {
  code?: string;
  data?: IntShipTemplateInfoRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«AdditionCalculateConfigRespDTO»» */
export interface BizResponseListAdditionCalculateConfigRespDTO {
  code?: string;
  data?: AdditionCalculateConfigRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«AdditionConfigAfterSaleReason»» */
export interface BizResponseListAdditionConfigAfterSaleReason {
  code?: string;
  data?: AdditionConfigAfterSaleReason[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«AdditionConfigPublic»» */
export interface BizResponseListAdditionConfigPublic {
  code?: string;
  data?: AdditionConfigPublic[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«AdditionConfigRespDTO»» */
export interface BizResponseListAdditionConfigRespDTO {
  code?: string;
  data?: AdditionConfigRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«AdditionConfigSellingPriceSettingLog»» */
export interface BizResponseListAdditionConfigSellingPriceSettingLog {
  code?: string;
  data?: AdditionConfigSellingPriceSettingLog[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«AdditionNodeRespDTO»» */
export interface BizResponseListAdditionNodeRespDTO {
  code?: string;
  data?: AdditionNodeRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«AdditionRespDTO»» */
export interface BizResponseListAdditionRespDTO {
  code?: string;
  data?: AdditionRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«AdditionSettlementGoodsDetailRespDTO»» */
export interface BizResponseListAdditionSettlementGoodsDetailRespDTO {
  code?: string;
  data?: AdditionSettlementGoodsDetailRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«AdditionTemplateRespDTO»» */
export interface BizResponseListAdditionTemplateRespDTO {
  code?: string;
  data?: AdditionTemplateRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«AmountType»» */
export interface BizResponseListAmountType {
  code?: string;
  data?: AmountType[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«AreaDTO»» */
export interface BizResponseListAreaDTO {
  code?: string;
  data?: AreaDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«BalanceRechargeCustomerIdCountDTO»» */
export interface BizResponseListBalanceRechargeCustomerIdCountDTO {
  code?: string;
  data?: BalanceRechargeCustomerIdCountDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«BaseBank»» */
export interface BizResponseListBaseBank {
  code?: string;
  data?: BaseBank[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CalcIntShipFeeRespDTO»» */
export interface BizResponseListCalcIntShipFeeRespDTO {
  code?: string;
  data?: CalcIntShipFeeRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerAdditionRespDTO»» */
export interface BizResponseListCustomerAdditionRespDTO {
  code?: string;
  data?: CustomerAdditionRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerAdditionTemplatePageRespDTO»» */
export interface BizResponseListCustomerAdditionTemplatePageRespDTO {
  code?: string;
  data?: CustomerAdditionTemplatePageRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerBankCard»» */
export interface BizResponseListCustomerBankCard {
  code?: string;
  data?: CustomerBankCard[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerWalletFundFlowInfoRespDTO»» */
export interface BizResponseListCustomerWalletFundFlowInfoRespDTO {
  code?: string;
  data?: CustomerWalletFundFlowInfoRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerWalletRespDTO»» */
export interface BizResponseListCustomerWalletRespDTO {
  code?: string;
  data?: CustomerWalletRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«DataCenterSettlePayTopVO»» */
export interface BizResponseListDataCenterSettlePayTopVO {
  code?: string;
  data?: DataCenterSettlePayTopVO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«DataCenterSettleSourceTopVO»» */
export interface BizResponseListDataCenterSettleSourceTopVO {
  code?: string;
  data?: DataCenterSettleSourceTopVO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«FundFlowRespDTO»» */
export interface BizResponseListFundFlowRespDTO {
  code?: string;
  data?: FundFlowRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«IntForwarderConfigCountryRespDTO»» */
export interface BizResponseListIntForwarderConfigCountryRespDTO {
  code?: string;
  data?: IntForwarderConfigCountryRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«IntForwarderConfigInfoRespDTO»» */
export interface BizResponseListIntForwarderConfigInfoRespDTO {
  code?: string;
  data?: IntForwarderConfigInfoRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«IntForwarderConfigRespDTO»» */
export interface BizResponseListIntForwarderConfigRespDTO {
  code?: string;
  data?: IntForwarderConfigRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«IntShipConfigInfoRespDTO»» */
export interface BizResponseListIntShipConfigInfoRespDTO {
  code?: string;
  data?: IntShipConfigInfoRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«IntShipFeeInfoRespDTO»» */
export interface BizResponseListIntShipFeeInfoRespDTO {
  code?: string;
  data?: IntShipFeeInfoRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«IntShipForwardersRespDTO»» */
export interface BizResponseListIntShipForwardersRespDTO {
  code?: string;
  data?: IntShipForwardersRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«JxhyProductAmountRangeDTO»» */
export interface BizResponseListJxhyProductAmountRangeDTO {
  code?: string;
  data?: JxhyProductAmountRangeDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«JxhyProductCateRangeDTO»» */
export interface BizResponseListJxhyProductCateRangeDTO {
  code?: string;
  data?: JxhyProductCateRangeDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«JxhyProductDiscountRangeDTO»» */
export interface BizResponseListJxhyProductDiscountRangeDTO {
  code?: string;
  data?: JxhyProductDiscountRangeDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«JxhyProductRangeDTO»» */
export interface BizResponseListJxhyProductRangeDTO {
  code?: string;
  data?: JxhyProductRangeDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«LableValue»» */
export interface BizResponseListLableValue {
  code?: string;
  data?: LableValue[];
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

/** BizResponse«List«MembershipPrechargeOrderRespDTO»» */
export interface BizResponseListMembershipPrechargeOrderRespDTO {
  code?: string;
  data?: MembershipPrechargeOrderRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«MembershipTagListVO»» */
export interface BizResponseListMembershipTagListVO {
  code?: string;
  data?: MembershipTagListVO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«MembershipTemplateListVO»» */
export interface BizResponseListMembershipTemplateListVO {
  code?: string;
  data?: MembershipTemplateListVO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«MembershipTemplatePriceListVO»» */
export interface BizResponseListMembershipTemplatePriceListVO {
  code?: string;
  data?: MembershipTemplatePriceListVO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«PayAccountNumberListVO»» */
export interface BizResponseListPayAccountNumberListVO {
  code?: string;
  data?: PayAccountNumberListVO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«PayAccountRespDTO»» */
export interface BizResponseListPayAccountRespDTO {
  code?: string;
  data?: PayAccountRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«PayAccountTreeVO»» */
export interface BizResponseListPayAccountTreeVO {
  code?: string;
  data?: PayAccountTreeVO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«PayAccount»» */
export interface BizResponseListPayAccount {
  code?: string;
  data?: PayAccount[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«PayFlow»» */
export interface BizResponseListPayFlow {
  code?: string;
  data?: PayFlow[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«RecommendedLogisticsRespDTO»» */
export interface BizResponseListRecommendedLogisticsRespDTO {
  code?: string;
  data?: RecommendedLogisticsRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«SellingPriceMembershipRateRespDTO»» */
export interface BizResponseListSellingPriceMembershipRateRespDTO {
  code?: string;
  data?: SellingPriceMembershipRateRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«SettlementExpressRespDTO»» */
export interface BizResponseListSettlementExpressRespDTO {
  code?: string;
  data?: SettlementExpressRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ShipVO»» */
export interface BizResponseListShipVO {
  code?: string;
  data?: ShipVO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«TransportModeRespDTO»» */
export interface BizResponseListTransportModeRespDTO {
  code?: string;
  data?: TransportModeRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«TransportationAttributesRespDTO»» */
export interface BizResponseListTransportationAttributesRespDTO {
  code?: string;
  data?: TransportationAttributesRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«WalletFundFlowGroupOrderNoDTO»» */
export interface BizResponseListWalletFundFlowGroupOrderNoDTO {
  code?: string;
  data?: WalletFundFlowGroupOrderNoDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«WfBalanceRechargeAssociateRecord»» */
export interface BizResponseListWfBalanceRechargeAssociateRecord {
  code?: string;
  data?: WfBalanceRechargeAssociateRecord[];
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

/** BizResponse«LogisticsAndForwarderRespDTO» */
export interface BizResponseLogisticsAndForwarderRespDTO {
  code?: string;
  data?: LogisticsAndForwarderRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Map«string,List«AdditionRespDTO»»» */
export interface BizResponseMapStringListAdditionRespDTO {
  code?: string;
  data?: Record<string, AdditionRespDTO[]>;
  msg?: string;
  success?: boolean;
}

/** BizResponse«MembershipAutomaticRenewal» */
export interface BizResponseMembershipAutomaticRenewal {
  code?: string;
  /** 会员自动续费表 */
  data?: MembershipAutomaticRenewal;
  msg?: string;
  success?: boolean;
}

/** BizResponse«MembershipTemplateConfigAndRightReqVO» */
export interface BizResponseMembershipTemplateConfigAndRightReqVO {
  code?: string;
  data?: MembershipTemplateConfigAndRightReqVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«MembershipTemplateDetailVO» */
export interface BizResponseMembershipTemplateDetailVO {
  code?: string;
  /** 结算中心/配置项/会员配置/会员设置列表 */
  data?: MembershipTemplateDetailVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«MembershipTemplatePriceListVO» */
export interface BizResponseMembershipTemplatePriceListVO {
  code?: string;
  /** 会员配置-会员套餐查询 */
  data?: MembershipTemplatePriceListVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«MembershipTemplatePriceRespDTO» */
export interface BizResponseMembershipTemplatePriceRespDTO {
  code?: string;
  data?: MembershipTemplatePriceRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«NewAreaDTO» */
export interface BizResponseNewAreaDTO {
  code?: string;
  data?: NewAreaDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«OrderDeductionFeeRespDTO» */
export interface BizResponseOrderDeductionFeeRespDTO {
  code?: string;
  data?: OrderDeductionFeeRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PageResult«AdditionConfigRespDTO»» */
export interface BizResponsePageResultAdditionConfigRespDTO {
  code?: string;
  data?: PageResultAdditionConfigRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PageResult«BalanceRechargeRespVO»» */
export interface BizResponsePageResultBalanceRechargeRespVO {
  code?: string;
  data?: PageResultBalanceRechargeRespVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PageResult«CustomerWalletRespDTO»» */
export interface BizResponsePageResultCustomerWalletRespDTO {
  code?: string;
  data?: PageResultCustomerWalletRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PageResult«IntForwarderConfigRespDTO»» */
export interface BizResponsePageResultIntForwarderConfigRespDTO {
  code?: string;
  data?: PageResultIntForwarderConfigRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PageResult«IntShipBillRespDTO»» */
export interface BizResponsePageResultIntShipBillRespDTO {
  code?: string;
  data?: PageResultIntShipBillRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PageResult«IntShipConfigRespDTO»» */
export interface BizResponsePageResultIntShipConfigRespDTO {
  code?: string;
  data?: PageResultIntShipConfigRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PageResult«IntShipOtherRespDTO»» */
export interface BizResponsePageResultIntShipOtherRespDTO {
  code?: string;
  data?: PageResultIntShipOtherRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PageResult«IntShipTemplateRespDTO»» */
export interface BizResponsePageResultIntShipTemplateRespDTO {
  code?: string;
  data?: PageResultIntShipTemplateRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PageResult«IntShipTieredDiffRespDTO»» */
export interface BizResponsePageResultIntShipTieredDiffRespDTO {
  code?: string;
  data?: PageResultIntShipTieredDiffRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PageResult«MembershipTemplateListVO»» */
export interface BizResponsePageResultMembershipTemplateListVO {
  code?: string;
  data?: PageResultMembershipTemplateListVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PageResult«WarehouseForwardAttributesRespDTO»» */
export interface BizResponsePageResultWarehouseForwardAttributesRespDTO {
  code?: string;
  data?: PageResultWarehouseForwardAttributesRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«AdditionConfigSellingPriceListVO»» */
export interface BizResponsePageAdditionConfigSellingPriceListVO {
  code?: string;
  data?: PageAdditionConfigSellingPriceListVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«AdditionConfigSellingPriceSettingListVO»» */
export interface BizResponsePageAdditionConfigSellingPriceSettingListVO {
  code?: string;
  data?: PageAdditionConfigSellingPriceSettingListVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«BalanceRechargeLog»» */
export interface BizResponsePageBalanceRechargeLog {
  code?: string;
  data?: PageBalanceRechargeLog;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«BalanceRecharge»» */
export interface BizResponsePageBalanceRecharge {
  code?: string;
  data?: PageBalanceRecharge;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerAdditionTemplatePageRespDTO»» */
export interface BizResponsePageCustomerAdditionTemplatePageRespDTO {
  code?: string;
  data?: PageCustomerAdditionTemplatePageRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerBill»» */
export interface BizResponsePageCustomerBill {
  code?: string;
  data?: PageCustomerBill;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerWalletFundFlowRespDTO»» */
export interface BizResponsePageCustomerWalletFundFlowRespDTO {
  code?: string;
  data?: PageCustomerWalletFundFlowRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerWalletFundFlow»» */
export interface BizResponsePageCustomerWalletFundFlow {
  code?: string;
  data?: PageCustomerWalletFundFlow;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«FundsManage»» */
export interface BizResponsePageFundsManage {
  code?: string;
  data?: PageFundsManage;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«GrossProfitRateCustomerDetailListVO»» */
export interface BizResponsePageGrossProfitRateCustomerDetailListVO {
  code?: string;
  data?: PageGrossProfitRateCustomerDetailListVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«GrossProfitRateCustomerListVO»» */
export interface BizResponsePageGrossProfitRateCustomerListVO {
  code?: string;
  data?: PageGrossProfitRateCustomerListVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«GrossProfitRateDeliveryListVO»» */
export interface BizResponsePageGrossProfitRateDeliveryListVO {
  code?: string;
  data?: PageGrossProfitRateDeliveryListVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«GrossProfitRateOrderListVO»» */
export interface BizResponsePageGrossProfitRateOrderListVO {
  code?: string;
  data?: PageGrossProfitRateOrderListVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«MembershipPrechargeOrderRespDTO»» */
export interface BizResponsePageMembershipPrechargeOrderRespDTO {
  code?: string;
  data?: PageMembershipPrechargeOrderRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«MembershipTemplatePriceListVO»» */
export interface BizResponsePageMembershipTemplatePriceListVO {
  code?: string;
  data?: PageMembershipTemplatePriceListVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«PayFlowListVO»» */
export interface BizResponsePagePayFlowListVO {
  code?: string;
  data?: PagePayFlowListVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«PayFlowStatisticsListVO»» */
export interface BizResponsePagePayFlowStatisticsListVO {
  code?: string;
  data?: PagePayFlowStatisticsListVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«RefundCustomerListVO»» */
export interface BizResponsePageRefundCustomerListVO {
  code?: string;
  data?: PageRefundCustomerListVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«RefundSupplierListVO»» */
export interface BizResponsePageRefundSupplierListVO {
  code?: string;
  data?: PageRefundSupplierListVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«SettlementAppLog»» */
export interface BizResponsePageSettlementAppLog {
  code?: string;
  data?: PageSettlementAppLog;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«TransportationAttributesRespDTO»» */
export interface BizResponsePageTransportationAttributesRespDTO {
  code?: string;
  data?: PageTransportationAttributesRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«TrialMembershipTemplateRespDTO»» */
export interface BizResponsePageTrialMembershipTemplateRespDTO {
  code?: string;
  data?: PageTrialMembershipTemplateRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«WfBalanceRechargeAssociateRecord»» */
export interface BizResponsePageWfBalanceRechargeAssociateRecord {
  code?: string;
  data?: PageWfBalanceRechargeAssociateRecord;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«WfBalanceRechargeUploadRecord»» */
export interface BizResponsePageWfBalanceRechargeUploadRecord {
  code?: string;
  data?: PageWfBalanceRechargeUploadRecord;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«WfNotifyInfo»» */
export interface BizResponsePageWfNotifyInfo {
  code?: string;
  data?: PageWfNotifyInfo;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«WfTradeOrder»» */
export interface BizResponsePageWfTradeOrder {
  code?: string;
  data?: PageWfTradeOrder;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«WithdrawManageListVO»» */
export interface BizResponsePageWithdrawManageListVO {
  code?: string;
  data?: PageWithdrawManageListVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«WorkbenchHall»» */
export interface BizResponsePageWorkbenchHall {
  code?: string;
  data?: PageWorkbenchHall;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PayAccountListVO» */
export interface BizResponsePayAccountListVO {
  code?: string;
  /** 支付账户-查询结果 */
  data?: PayAccountListVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«RefundCustomerResultVO» */
export interface BizResponseRefundCustomerResultVO {
  code?: string;
  data?: RefundCustomerResultVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«SellingPriceMembershipRateRespDTO» */
export interface BizResponseSellingPriceMembershipRateRespDTO {
  code?: string;
  /** 精选货源折扣价 */
  data?: SellingPriceMembershipRateRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ShipResultVO» */
export interface BizResponseShipResultVO {
  code?: string;
  /** 国际物流计算结果 */
  data?: ShipResultVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«TrialMembershipTemplateRespDTO» */
export interface BizResponseTrialMembershipTemplateRespDTO {
  code?: string;
  /** 结算中心/配置项/会员配置/试用活动 */
  data?: TrialMembershipTemplateRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«WfNotifyInfo» */
export interface BizResponseWfNotifyInfo {
  code?: string;
  /** 万里汇来账通知记录表 */
  data?: WfNotifyInfo;
  msg?: string;
  success?: boolean;
}

/** BizResponse«WfTradeOrder» */
export interface BizResponseWfTradeOrder {
  code?: string;
  /** 万里汇关联订单 */
  data?: WfTradeOrder;
  msg?: string;
  success?: boolean;
}

/** BizResponse«WithdrawApplyAmountCalculateVO» */
export interface BizResponseWithdrawApplyAmountCalculateVO {
  code?: string;
  /** 提现金额计算 */
  data?: WithdrawApplyAmountCalculateVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«WithdrawApplyInfoVO» */
export interface BizResponseWithdrawApplyInfoVO {
  code?: string;
  /** 提现信息 */
  data?: WithdrawApplyInfoVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«WorkbenchHallTypeVO» */
export interface BizResponseWorkbenchHallTypeVO {
  code?: string;
  data?: WorkbenchHallTypeVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«bigdecimal» */
export interface BizResponseBigdecimal {
  code?: string;
  data?: number;
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

/** IPage«PayAccountListVO» */
export interface IPagePayAccountListVO {
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  pages?: number;
  records?: PayAccountListVO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** IPage«PayFlowListVO» */
export interface IPagePayFlowListVO {
  /** @format int64 */
  current?: number;
  hitCount?: boolean;
  /** @format int64 */
  pages?: number;
  records?: PayFlowListVO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Map«string,List«AdditionRespDTO»» */
export type MapStringListAdditionRespDTO = Record<string, any>;

/** Map«string,object» */
export type MapStringObject = Record<string, object>;

/** PageResult«AdditionConfigRespDTO» */
export interface PageResultAdditionConfigRespDTO {
  /** @format int64 */
  current?: number;
  records?: AdditionConfigRespDTO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
  /** @format int64 */
  totalPage?: number;
}

/** PageResult«BalanceRechargeRespVO» */
export interface PageResultBalanceRechargeRespVO {
  /** @format int64 */
  current?: number;
  records?: BalanceRechargeRespVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
  /** @format int64 */
  totalPage?: number;
}

/** PageResult«CustomerWalletRespDTO» */
export interface PageResultCustomerWalletRespDTO {
  /** @format int64 */
  current?: number;
  records?: CustomerWalletRespDTO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
  /** @format int64 */
  totalPage?: number;
}

/** PageResult«IntForwarderConfigRespDTO» */
export interface PageResultIntForwarderConfigRespDTO {
  /** @format int64 */
  current?: number;
  records?: IntForwarderConfigRespDTO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
  /** @format int64 */
  totalPage?: number;
}

/** PageResult«IntShipBillRespDTO» */
export interface PageResultIntShipBillRespDTO {
  /** @format int64 */
  current?: number;
  records?: IntShipBillRespDTO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
  /** @format int64 */
  totalPage?: number;
}

/** PageResult«IntShipConfigRespDTO» */
export interface PageResultIntShipConfigRespDTO {
  /** @format int64 */
  current?: number;
  records?: IntShipConfigRespDTO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
  /** @format int64 */
  totalPage?: number;
}

/** PageResult«IntShipOtherRespDTO» */
export interface PageResultIntShipOtherRespDTO {
  /** @format int64 */
  current?: number;
  records?: IntShipOtherRespDTO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
  /** @format int64 */
  totalPage?: number;
}

/** PageResult«IntShipTemplateRespDTO» */
export interface PageResultIntShipTemplateRespDTO {
  /** @format int64 */
  current?: number;
  records?: IntShipTemplateRespDTO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
  /** @format int64 */
  totalPage?: number;
}

/** PageResult«IntShipTieredDiffRespDTO» */
export interface PageResultIntShipTieredDiffRespDTO {
  /** @format int64 */
  current?: number;
  records?: IntShipTieredDiffRespDTO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
  /** @format int64 */
  totalPage?: number;
}

/** PageResult«MembershipTemplateListVO» */
export interface PageResultMembershipTemplateListVO {
  /** @format int64 */
  current?: number;
  records?: MembershipTemplateListVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
  /** @format int64 */
  totalPage?: number;
}

/** PageResult«WarehouseForwardAttributesRespDTO» */
export interface PageResultWarehouseForwardAttributesRespDTO {
  /** @format int64 */
  current?: number;
  records?: WarehouseForwardAttributesRespDTO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
  /** @format int64 */
  totalPage?: number;
}

/** Page«AdditionConfigSellingPriceListVO» */
export interface PageAdditionConfigSellingPriceListVO {
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
  records?: AdditionConfigSellingPriceListVO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«AdditionConfigSellingPriceSettingListVO» */
export interface PageAdditionConfigSellingPriceSettingListVO {
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
  records?: AdditionConfigSellingPriceSettingListVO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«BalanceRechargeLog» */
export interface PageBalanceRechargeLog {
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
  records?: BalanceRechargeLog[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«BalanceRecharge» */
export interface PageBalanceRecharge {
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
  records?: BalanceRecharge[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerAdditionTemplatePageRespDTO» */
export interface PageCustomerAdditionTemplatePageRespDTO {
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
  records?: CustomerAdditionTemplatePageRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerBill» */
export interface PageCustomerBill {
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
  records?: CustomerBill[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerWalletFundFlowRespDTO» */
export interface PageCustomerWalletFundFlowRespDTO {
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
  records?: CustomerWalletFundFlowRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerWalletFundFlow» */
export interface PageCustomerWalletFundFlow {
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
  records?: CustomerWalletFundFlow[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«FundsManage» */
export interface PageFundsManage {
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
  records?: FundsManage[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«GrossProfitRateCustomerDetailListVO» */
export interface PageGrossProfitRateCustomerDetailListVO {
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
  records?: GrossProfitRateCustomerDetailListVO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«GrossProfitRateCustomerListVO» */
export interface PageGrossProfitRateCustomerListVO {
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
  records?: GrossProfitRateCustomerListVO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«GrossProfitRateDeliveryListVO» */
export interface PageGrossProfitRateDeliveryListVO {
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
  records?: GrossProfitRateDeliveryListVO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«GrossProfitRateOrderListVO» */
export interface PageGrossProfitRateOrderListVO {
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
  records?: GrossProfitRateOrderListVO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«MembershipPrechargeOrderRespDTO» */
export interface PageMembershipPrechargeOrderRespDTO {
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
  records?: MembershipPrechargeOrderRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«MembershipTemplatePriceListVO» */
export interface PageMembershipTemplatePriceListVO {
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
  records?: MembershipTemplatePriceListVO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«PayFlowListVO» */
export interface PagePayFlowListVO {
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
  records?: PayFlowListVO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«PayFlowStatisticsListVO» */
export interface PagePayFlowStatisticsListVO {
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
  records?: PayFlowStatisticsListVO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«RefundCustomerListVO» */
export interface PageRefundCustomerListVO {
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
  records?: RefundCustomerListVO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«RefundSupplierListVO» */
export interface PageRefundSupplierListVO {
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
  records?: RefundSupplierListVO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«SettlementAppLog» */
export interface PageSettlementAppLog {
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
  records?: SettlementAppLog[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«TransportationAttributesRespDTO» */
export interface PageTransportationAttributesRespDTO {
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
  records?: TransportationAttributesRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«TrialMembershipTemplateRespDTO» */
export interface PageTrialMembershipTemplateRespDTO {
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
  records?: TrialMembershipTemplateRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«WfBalanceRechargeAssociateRecord» */
export interface PageWfBalanceRechargeAssociateRecord {
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
  records?: WfBalanceRechargeAssociateRecord[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«WfBalanceRechargeUploadRecord» */
export interface PageWfBalanceRechargeUploadRecord {
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
  records?: WfBalanceRechargeUploadRecord[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«WfNotifyInfo» */
export interface PageWfNotifyInfo {
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
  records?: WfNotifyInfo[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«WfTradeOrder» */
export interface PageWfTradeOrder {
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
  records?: WfTradeOrder[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«WithdrawManageListVO» */
export interface PageWithdrawManageListVO {
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
  records?: WithdrawManageListVO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«WorkbenchHall» */
export interface PageWorkbenchHall {
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
  records?: WorkbenchHall[];
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
      baseURL: axiosConfig.baseURL || "//master-gateway.theckb.com:443/settlement",
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
 * @baseUrl //master-gateway.theckb.com:443/settlement
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
     * @tags monitor-controller
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
     * @tags monitor-controller
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
     * @tags monitor-controller
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
     * @tags monitor-controller
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
     * @tags monitor-controller
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
     * @tags monitor-controller
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
     * @tags monitor-controller
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
  addition = {
    /**
     * No description
     *
     * @tags addition-controller
     * @name AddAdditionConfig
     * @summary addAdditionConfig
     * @request POST:/addition/addAdditionConfig
     */
    addAdditionConfig: (dto: AdditionConfigAddDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/addition/addAdditionConfig`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags addition-config-selling-price-import-controller
     * @name ConfigSellingPriceDownload
     * @summary 下载
     * @request POST:/addition/config/selling/price/download
     */
    configSellingPriceDownload: (reqDTO: AdditionConfigSellingPriceQueryDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/addition/config/selling/price/download`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags addition-config-selling-price-import-controller
     * @name ConfigSellingPriceExport
     * @summary 导出
     * @request POST:/addition/config/selling/price/export
     */
    configSellingPriceExport: (reqDTO: AdditionConfigSellingPriceQueryDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/addition/config/selling/price/export`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags addition-config-selling-price-import-controller
     * @name ConfigSellingPriceImport
     * @summary 导入配置数据
     * @request POST:/addition/config/selling/price/import
     */
    configSellingPriceImport: (reqDTO: AdditionConfigSellingPriceImportDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/addition/config/selling/price/import`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户附加项组配置
     * @name CustomerTemplateAddCustomerAdditionTemplate
     * @summary 添加客户附加项
     * @request POST:/addition/customer/template/addCustomerAdditionTemplate
     */
    customerTemplateAddCustomerAdditionTemplate: (
      reqDTO: CustomerAdditionTemplateAddReqDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/addition/customer/template/addCustomerAdditionTemplate`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户附加项组配置
     * @name CustomerTemplateInfo
     * @summary 客户附加项详情
     * @request GET:/addition/customer/template/info
     */
    customerTemplateInfo: (
      query: {
        /**
         * additionTemplateId
         * @format int64
         */
        additionTemplateId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerAdditionTemplateInfoRespDTO, any>({
        path: `/addition/customer/template/info`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户附加项组配置
     * @name CustomerTemplateListCustomerAdditionTemplate
     * @summary 获取客户附加项列表(全部有效的)
     * @request GET:/addition/customer/template/listCustomerAdditionTemplate
     */
    customerTemplateListCustomerAdditionTemplate: (
      query?: {
        /**
         * 组类型 1-商品附加项组合 2-发货附加项组合
         * @format int32
         */
        templateType?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCustomerAdditionTemplatePageRespDTO, any>({
        path: `/addition/customer/template/listCustomerAdditionTemplate`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户附加项组配置
     * @name CustomerTemplatePageCustomerAdditionTemplate
     * @summary 获取客户附加项 分页
     * @request POST:/addition/customer/template/pageCustomerAdditionTemplate
     */
    customerTemplatePageCustomerAdditionTemplate: (
      queryReqDTO: CustomerAdditionTemplateQueryReqDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageCustomerAdditionTemplatePageRespDTO, any>({
        path: `/addition/customer/template/pageCustomerAdditionTemplate`,
        method: "POST",
        body: queryReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户附加项组配置
     * @name CustomerTemplateUpdateCustomerAdditionTemplate
     * @summary 修改客户附加项
     * @request POST:/addition/customer/template/updateCustomerAdditionTemplate
     */
    customerTemplateUpdateCustomerAdditionTemplate: (
      reqDTO: CustomerAdditionTemplateAddReqDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/addition/customer/template/updateCustomerAdditionTemplate`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户附加项组配置
     * @name CustomerTemplateUpdateCustomerAdditionTemplateStatus
     * @summary 修改客户附加项状态
     * @request POST:/addition/customer/template/updateCustomerAdditionTemplateStatus
     */
    customerTemplateUpdateCustomerAdditionTemplateStatus: (
      reqDTO: CustomerAdditionTemplateStatusUpdateDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/addition/customer/template/updateCustomerAdditionTemplateStatus`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags addition-controller
     * @name EditAdditionConfig
     * @summary editAdditionConfig
     * @request POST:/addition/editAdditionConfig
     */
    editAdditionConfig: (dto: AdditionConfigEditDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/addition/editAdditionConfig`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags addition-controller
     * @name EditStatus
     * @summary editStatus
     * @request POST:/addition/editStatus
     */
    editStatus: (dto: AdditionConfigEditStatusDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/addition/editStatus`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags addition-controller
     * @name GetAdditionCalculateConfigList
     * @summary getAdditionCalculateConfigList
     * @request GET:/addition/getAdditionCalculateConfigList
     */
    getAdditionCalculateConfigList: (params: RequestParams = {}) =>
      this.request<BizResponseListAdditionCalculateConfigRespDTO, any>({
        path: `/addition/getAdditionCalculateConfigList`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags addition-controller
     * @name GetAdditionConfig
     * @summary getAdditionConfig
     * @request GET:/addition/getAdditionConfig
     */
    getAdditionConfig: (
      query: {
        /**
         * additionConfigId
         * @format int32
         */
        additionConfigId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseAdditionConfigRespDTO, any>({
        path: `/addition/getAdditionConfig`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags addition-controller
     * @name GetAdditionConfigList
     * @summary getAdditionConfigList
     * @request GET:/addition/getAdditionConfigList
     */
    getAdditionConfigList: (
      query: {
        /** additionConfigIdList */
        additionConfigIdList: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListAdditionConfigRespDTO, any>({
        path: `/addition/getAdditionConfigList`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags addition-controller
     * @name GetAdditionList
     * @summary getAdditionList
     * @request GET:/addition/getAdditionList
     */
    getAdditionList: (params: RequestParams = {}) =>
      this.request<BizResponseListAdditionRespDTO, any>({
        path: `/addition/getAdditionList`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags addition-controller
     * @name GetAdditionListQuery
     * @summary getAdditionListQuery
     * @request POST:/addition/getAdditionList/query
     */
    getAdditionListQuery: (queryReqDTO: AdditionQueryReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListAdditionRespDTO, any>({
        path: `/addition/getAdditionList/query`,
        method: "POST",
        body: queryReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags addition-controller
     * @name GetAdditionListStationCode
     * @summary getAdditionListByStationCode
     * @request GET:/addition/getAdditionList/stationCode
     */
    getAdditionListStationCode: (
      query: {
        /** stationCode */
        stationCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListAdditionRespDTO, any>({
        path: `/addition/getAdditionList/stationCode`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags addition-controller
     * @name GetAdditionNodeList
     * @summary getAdditionNodeList
     * @request GET:/addition/getAdditionNodeList
     */
    getAdditionNodeList: (params: RequestParams = {}) =>
      this.request<BizResponseListAdditionNodeRespDTO, any>({
        path: `/addition/getAdditionNodeList`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags addition-controller
     * @name GetWashPrice
     * @summary 获取水洗标参考成本
     * @request GET:/addition/getWashPrice
     */
    getWashPrice: (
      query?: {
        /**
         * 附加项ID
         * @format int32
         */
        additionId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBigdecimal, any>({
        path: `/addition/getWashPrice`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags addition-controller
     * @name GroupQuery
     * @summary 附加项组合查询
     * @request GET:/addition/group/query
     */
    groupQuery: (
      query: {
        /**
         * additionScene
         * @format int32
         */
        additionScene: number;
        /** 附加项ID */
        stationCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseMapStringListAdditionRespDTO, any>({
        path: `/addition/group/query`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags addition-controller
     * @name QueryAdditionConfig
     * @summary queryAdditionConfig
     * @request POST:/addition/queryAdditionConfig
     */
    queryAdditionConfig: (reqDTO: AdditionConfigReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageResultAdditionConfigRespDTO, any>({
        path: `/addition/queryAdditionConfig`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags addition-settlement-controller
     * @name SettlementListAdditionSettlementGoodsDetail
     * @summary listAdditionSettlementGoodsDetail
     * @request GET:/addition/settlement/listAdditionSettlementGoodsDetail
     */
    settlementListAdditionSettlementGoodsDetail: (
      query: {
        /** platformOrderNo */
        platformOrderNo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListAdditionSettlementGoodsDetailRespDTO, any>({
        path: `/addition/settlement/listAdditionSettlementGoodsDetail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags addition-settlement-controller
     * @name SettlementListSettlementExpress
     * @summary listSettlementExpress
     * @request GET:/addition/settlement/listSettlementExpress
     */
    settlementListSettlementExpress: (
      query: {
        /** platformOrderNo */
        platformOrderNo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListSettlementExpressRespDTO, any>({
        path: `/addition/settlement/listSettlementExpress`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 后台-附加项配置
     * @name TemplateAdd
     * @summary 添加附加项模板
     * @request POST:/addition/template/add
     */
    templateAdd: (reqDTO: AddAdditionTemplateReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/addition/template/add`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 后台-附加项配置
     * @name TemplateDelete
     * @summary 删除附加项模板
     * @request DELETE:/addition/template/delete
     */
    templateDelete: (
      query: {
        /**
         * additionTemplateId
         * @format int32
         */
        additionTemplateId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/addition/template/delete`,
        method: "DELETE",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 后台-附加项配置
     * @name TemplateGet
     * @summary 获取一个附加项模板
     * @request GET:/addition/template/get
     */
    templateGet: (
      query: {
        /**
         * additionTemplateId
         * @format int32
         */
        additionTemplateId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseAdditionTemplateRespDTO, any>({
        path: `/addition/template/get`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 后台-附加项配置
     * @name TemplateGetList
     * @summary 获取附加项模板
     * @request GET:/addition/template/getList
     */
    templateGetList: (
      query: {
        /**
         * systemSource
         * @format int32
         */
        systemSource: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListAdditionTemplateRespDTO, any>({
        path: `/addition/template/getList`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 后台-附加项配置
     * @name TemplateUpdate
     * @summary 更新附加项模板
     * @request POST:/addition/template/update
     */
    templateUpdate: (reqDTO: UpdateAdditionTemplateReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/addition/template/update`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags addition-controller
     * @name UpdateAddition
     * @summary updateAddition
     * @request POST:/addition/updateAddition
     */
    updateAddition: (additionUpdateReqDTO: AdditionUpdateReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/addition/updateAddition`,
        method: "POST",
        body: additionUpdateReqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  admin = {
    /**
     * No description
     *
     * @tags admin-wallet-controller
     * @name WalletExport
     * @summary 导出用户钱包
     * @request POST:/admin/wallet/export
     */
    walletExport: (reqDTO: CustomerWalletQueryReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/admin/wallet/export`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin-wallet-controller
     * @name WalletGetCustomerWallet
     * @summary getCustomerWallet
     * @request GET:/admin/wallet/getCustomerWallet
     */
    walletGetCustomerWallet: (
      query: {
        /**
         * customerShopId
         * @format int64
         */
        customerShopId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerWalletRespDTO, any>({
        path: `/admin/wallet/getCustomerWallet`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin-wallet-controller
     * @name WalletGetFlowOneById
     * @summary 店铺消费记录详情
     * @request GET:/admin/wallet/getFlowOneById
     */
    walletGetFlowOneById: (
      query?: {
        /**
         * 详情ID
         * @format int64
         */
        id?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerWalletFundFlowInfoRespDTO, any>({
        path: `/admin/wallet/getFlowOneById`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin-wallet-controller
     * @name WalletGetMomey
     * @summary getMoney
     * @request GET:/admin/wallet/getMomey
     */
    walletGetMomey: (
      query?: {
        /** deliverOrderNo */
        deliverOrderNo?: string;
        /**
         * fundFlowType
         * @format int32
         */
        fundFlowType?: number;
        /** orderNo */
        orderNo?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBigdecimal, any>({
        path: `/admin/wallet/getMomey`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin-wallet-controller
     * @name WalletGetOrderDeductionDetail
     * @summary 店铺消费记录详情
     * @request GET:/admin/wallet/getOrderDeductionDetail
     */
    walletGetOrderDeductionDetail: (
      query?: {
        /** 订单编号 */
        platformOrderNo?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseOrderDeductionFeeRespDTO, any>({
        path: `/admin/wallet/getOrderDeductionDetail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin-wallet-controller
     * @name WalletQueryCustomerWallet
     * @summary queryCustomerWallet
     * @request POST:/admin/wallet/queryCustomerWallet
     */
    walletQueryCustomerWallet: (reqDTO: CustomerWalletQueryReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageResultCustomerWalletRespDTO, any>({
        path: `/admin/wallet/queryCustomerWallet`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin-wallet-controller
     * @name WalletQueryFundFlow
     * @summary 查看店铺消费记录
     * @request POST:/admin/wallet/queryFundFlow
     */
    walletQueryFundFlow: (reqDTO: CustomerWalletFundFlowReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerWalletFundFlowRespDTO, any>({
        path: `/admin/wallet/queryFundFlow`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin-wallet-controller
     * @name WalletUpdateCustomerWallet
     * @summary updateCustomerWallet
     * @request POST:/admin/wallet/updateCustomerWallet
     */
    walletUpdateCustomerWallet: (reqDTO: UpdateCustomerWalletReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/admin/wallet/updateCustomerWallet`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  app = {
    /**
     * No description
     *
     * @tags 结算中心-应用日志
     * @name LogQuery
     * @summary 结算中心-应用日志-分页查询
     * @request GET:/app/log/query
     */
    logQuery: (
      query?: {
        /** 操作类型 */
        operateType?: string;
        /**
         * 第几页
         * @format int32
         */
        pageNum?: number;
        /**
         * 每页条数
         * @format int32
         */
        pageSize?: number;
        /** @format int32 */
        startIndex?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageSettlementAppLog, any>({
        path: `/app/log/query`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  area = {
    /**
     * No description
     *
     * @tags 结算中心-地区设置
     * @name GetById
     * @summary getById
     * @request GET:/area/getById
     */
    getById: (
      query: {
        /**
         * intAreaId
         * @format int64
         */
        intAreaId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseAreaDTO, any>({
        path: `/area/getById`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-地区设置
     * @name GetByPostCode
     * @summary getByPostCode
     * @request GET:/area/getByPostCode
     */
    getByPostCode: (
      query: {
        /** postCode */
        postCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseNewAreaDTO, any>({
        path: `/area/getByPostCode`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-地区设置
     * @name GetByType
     * @summary getAll
     * @request GET:/area/getByType
     */
    getByType: (
      query?: {
        /**
         * 查询级别：0全部 1省 2市 3区
         * @format int32
         */
        type?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListAreaDTO, any>({
        path: `/area/getByType`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  associate = {
    /**
     * No description
     *
     * @tags 结算中心-WF订单同步
     * @name OrderSync
     * @summary syncOrder
     * @request POST:/associate/order/sync
     */
    orderSync: (wfAssociateOrderDTOS: WfAssociateOrderDTO[], params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/associate/order/sync`,
        method: "POST",
        body: wfAssociateOrderDTOS,
        type: ContentType.Json,
        ...params,
      }),
  };
  base = {
    /**
     * No description
     *
     * @tags base-bank-controller
     * @name BankAdd
     * @summary 保存基础银行信息
     * @request POST:/base/bank/add
     */
    bankAdd: (request: BaseBank, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/base/bank/add`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags base-bank-controller
     * @name BankQuery
     * @summary 查询基础银行信息
     * @request POST:/base/bank/query
     */
    bankQuery: (request: BaseBank, params: RequestParams = {}) =>
      this.request<BizResponseListBaseBank, any>({
        path: `/base/bank/query`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),
  };
  bill = {
    /**
     * No description
     *
     * @tags bill-controller
     * @name Info
     * @summary 获取账单信息
     * @request GET:/bill/info
     */
    info: (
      query: {
        /** billNo */
        billNo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBillInfoDTO, any>({
        path: `/bill/info`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags bill-controller
     * @name InfoExport
     * @summary 下载账单
     * @request GET:/bill/info/export
     */
    infoExport: (
      query: {
        /** billNo */
        billNo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseObject, any>({
        path: `/bill/info/export`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 账单通知
     * @name NotifyQueryUnread
     * @summary 获取未读账单通知
     * @request GET:/bill/notify/query/unread
     */
    notifyQueryUnread: (params: RequestParams = {}) =>
      this.request<BizResponseBillNotifyVO, any>({
        path: `/bill/notify/query/unread`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 账单通知
     * @name NotifyRead
     * @summary 账单通知已读
     * @request GET:/bill/notify/read
     */
    notifyRead: (params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/bill/notify/read`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bill-controller
     * @name Settle
     * @summary settle
     * @request POST:/bill/settle
     */
    settle: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseObject, any>({
        path: `/bill/settle`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),
  };
  box = {
    /**
     * No description
     *
     * @tags 装箱
     * @name Install
     * @summary 统计总重量和体积
     * @request POST:/box/install
     */
    install: (param: CalcProductAttrVO, params: RequestParams = {}) =>
      this.request<BizResponseAttributeVO, any>({
        path: `/box/install`,
        method: "POST",
        body: param,
        type: ContentType.Json,
        ...params,
      }),
  };
  calc = {
    /**
     * No description
     *
     * @tags 成本计算器
     * @name Execute
     * @summary 执行计算
     * @request POST:/calc/execute
     */
    execute: (param: CalcParamVO, params: RequestParams = {}) =>
      this.request<BizResponseCalcResultVO, any>({
        path: `/calc/execute`,
        method: "POST",
        body: param,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 成本计算器
     * @name Ship
     * @summary 国际物流运费计算
     * @request POST:/calc/ship
     */
    ship: (param: CalcShipParamVO, params: RequestParams = {}) =>
      this.request<BizResponseShipResultVO, any>({
        path: `/calc/ship`,
        method: "POST",
        body: param,
        type: ContentType.Json,
        ...params,
      }),
  };
  customer = {
    /**
     * No description
     *
     * @tags customer-addition-controller
     * @name AdditionGetAdditionList
     * @summary 购物车下单页--获取附加项
     * @request GET:/customer/addition/getAdditionList
     */
    additionGetAdditionList: (
      query?: {
        /**
         * 商品类型: 1-普通商品; 2-组合商品
         * @format int32
         */
        productType?: number;
        /**
         * 来源 0:购物车 1:成本计算器
         * @format int32
         */
        source?: number;
        /** 站点 */
        stationCode?: string;
        /**
         * 业务线
         * @format int32
         */
        systemSource?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerAdditionMergeRespDTO, any>({
        path: `/customer/addition/getAdditionList`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-addition-controller
     * @name AdditionGetCombinationAddition
     * @summary getCombinationAddition
     * @request POST:/customer/addition/getCombinationAddition
     */
    additionGetCombinationAddition: (reqDTO: CombinationAdditionReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBigdecimal, any>({
        path: `/customer/addition/getCombinationAddition`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-addition-controller
     * @name AdditionGetCombinationServiceFreezeCharge
     * @summary 组合返工(使用库存收费)
     * @request GET:/customer/addition/getCombinationServiceFreezeCharge
     */
    additionGetCombinationServiceFreezeCharge: (params: RequestParams = {}) =>
      this.request<BizResponseBigdecimal, any>({
        path: `/customer/addition/getCombinationServiceFreezeCharge`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-addition-controller
     * @name AdditionGetCustomerOrderAdditionListByAddition
     * @summary getCustomerOrderAdditionListByAddition
     * @request POST:/customer/addition/getCustomerOrderAdditionListByAddition
     */
    additionGetCustomerOrderAdditionListByAddition: (reqDTO: CustomerOrderAdditionReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListCustomerAdditionRespDTO, any>({
        path: `/customer/addition/getCustomerOrderAdditionListByAddition`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-addition-controller
     * @name AdditionGetCustomerOrderAdditionListByConfig
     * @summary getCustomerOrderAdditionListByConfig
     * @request POST:/customer/addition/getCustomerOrderAdditionListByConfig
     */
    additionGetCustomerOrderAdditionListByConfig: (
      reqDTO: CustomerOrderAdditionConfigReqDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCustomerAdditionRespDTO, any>({
        path: `/customer/addition/getCustomerOrderAdditionListByConfig`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-addition-controller
     * @name AdditionGetFreeRemakeAddition
     * @summary getFreeRemakeAddition
     * @request GET:/customer/addition/getFreeRemakeAddition
     */
    additionGetFreeRemakeAddition: (
      query: {
        /**
         * productType
         * @format int32
         */
        productType: number;
        /**
         * shopId
         * @format int64
         */
        shopId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerAdditionRespDTO, any>({
        path: `/customer/addition/getFreeRemakeAddition`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-addition-controller
     * @name AdditionGetFreeRemakeNum
     * @summary getFreeRemakeNum
     * @request GET:/customer/addition/getFreeRemakeNum
     */
    additionGetFreeRemakeNum: (
      query: {
        /**
         * productType
         * @format int32
         */
        productType: number;
        /**
         * shopId
         * @format int64
         */
        shopId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseInt, any>({
        path: `/customer/addition/getFreeRemakeNum`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-addition-controller
     * @name AdditionGetServiceCharge
     * @summary 商品详情页--获取手续费
     * @request GET:/customer/addition/getServiceCharge
     */
    additionGetServiceCharge: (
      query?: {
        /**
         * 业务类型: 1-档口(市场购);2-线上平台（透明购）
         * @format int32
         */
        bizType?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCustomerAdditionRespDTO, any>({
        path: `/customer/addition/getServiceCharge`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-addition-controller
     * @name AdditionGetUserAdditionList
     * @summary getUserAdditionList
     * @request GET:/customer/addition/getUserAdditionList
     */
    additionGetUserAdditionList: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
        /**
         * productType
         * @format int32
         */
        productType: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerAdditionMergeRespDTO, any>({
        path: `/customer/addition/getUserAdditionList`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-bank-card-controller
     * @name BankCardDelete
     * @summary 删除用户银行卡
     * @request POST:/customer/bank/card/delete/{customerBankCardId}
     */
    bankCardDelete: (customerBankCardId: number, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/customer/bank/card/delete/${customerBankCardId}`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-bank-card-controller
     * @name BankCardQuery
     * @summary 查询用户银行卡信息
     * @request POST:/customer/bank/card/query
     */
    bankCardQuery: (request: CustomerBankCard, params: RequestParams = {}) =>
      this.request<BizResponseListCustomerBankCard, any>({
        path: `/customer/bank/card/query`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-bank-card-controller
     * @name BankCardSave
     * @summary 保存用户银行卡信息
     * @request POST:/customer/bank/card/save
     */
    bankCardSave: (request: CustomerBankCard, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/customer/bank/card/save`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户账单
     * @name BillAudit
     * @summary 审核用户账单
     * @request POST:/customer/bill/audit
     */
    billAudit: (request: CustomerBillAuditVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/customer/bill/audit`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户账单
     * @name BillCancel
     * @summary 撤销用户账单
     * @request POST:/customer/bill/cancel/{customerBillId}
     */
    billCancel: (customerBillId: number, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/customer/bill/cancel/${customerBillId}`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户账单
     * @name BillCreate
     * @summary 创建用户账单
     * @request POST:/customer/bill/create
     */
    billCreate: (request: CustomerBillCreateVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/customer/bill/create`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户账单
     * @name BillCreateBills
     * @summary 历史数据创建账单
     * @request POST:/customer/bill/createBills
     */
    billCreateBills: (list: BillExcelImportDTO[], params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/customer/bill/createBills`,
        method: "POST",
        body: list,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户账单
     * @name BillDelete
     * @summary 删除用户账单
     * @request POST:/customer/bill/delete/{customerBillId}
     */
    billDelete: (customerBillId: number, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/customer/bill/delete/${customerBillId}`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户账单
     * @name BillGetAllNeedPayCount
     * @summary 获取需要支付账单数量
     * @request POST:/customer/bill/get/all/need/pay/count
     */
    billGetAllNeedPayCount: (params: RequestParams = {}) =>
      this.request<BizResponseInt, any>({
        path: `/customer/bill/get/all/need/pay/count`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户账单
     * @name BillGetCustomerNeedPayAmount
     * @summary 获取用户待支付总额
     * @request GET:/customer/bill/get/customer/need/pay/amount
     */
    billGetCustomerNeedPayAmount: (
      query: {
        /** mainOrSubBill */
        mainOrSubBill: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBigdecimal, any>({
        path: `/customer/bill/get/customer/need/pay/amount`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户账单
     * @name BillPayRefused
     * @summary 拒绝支付客户账单
     * @request POST:/customer/bill/pay/refused
     */
    billPayRefused: (request: CustomerBilRefusedPayVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/customer/bill/pay/refused`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户账单
     * @name BillPay
     * @summary 支付客户账单
     * @request POST:/customer/bill/pay/{customerBillId}
     */
    billPay: (
      customerBillId: number,
      query: {
        /** mainOrSubBill */
        mainOrSubBill: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/customer/bill/pay/${customerBillId}`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户账单
     * @name BillQueryForCustomer
     * @summary 用户账单分页查询（客户端）
     * @request GET:/customer/bill/query/for/customer
     */
    billQueryForCustomer: (
      query?: {
        /** 审核状态：1：已通过；2：待审核；3：已撤销；4：已拒绝 */
        auditStatus?: string;
        /** 审核状态：1：已通过；2：待审核；3：已撤销；4：已拒绝 */
        auditStatusList?: string[];
        /** 账单名称 */
        billName?: string;
        /** 账单状态：1：已支付 ；2：待支付；3：已取消；4：已拒绝；5：支付中 */
        billPayStatus?: string;
        /** 账单状态：1：已支付 ；2：待支付；3：已取消；4：已拒绝；5：支付中 */
        billPayStatusList?: string[];
        /** 账单状态不为空 */
        billPayStatusNotNull?: boolean;
        /**
         * 账单发起时间
         * @format date-time
         */
        billTimeEnd?: string;
        /**
         * 账单发起时间
         * @format date-time
         */
        billTimeStart?: string;
        /**
         * 客户账单主键
         * @format int64
         */
        customerBillId?: number;
        /**
         * 目标客户id
         * @format int64
         */
        customerId?: number;
        /** customerIds */
        customerIdList?: number[];
        /** 目标客户名 */
        customerName?: string;
        /**
         * 目标客户店铺id
         * @format int64
         */
        customerShopId?: number;
        /**
         * 目标客户仓库id
         * @format int64
         */
        customerWarehouseId?: number;
        /** 目标客户登录名 */
        loginName?: string;
        /** 获取主或者子账单:true:主;false:子 */
        mainOrSubBill?: boolean;
        /**
         * 目标客户会员等级id
         * @format int64
         */
        membershipTemplateId?: number;
        /** 创建时间倒序 */
        orderByCreateTimeDesc?: boolean;
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        "sorts[0].asc"?: boolean;
        "sorts[0].field"?: string;
        /** @format int32 */
        startIndex?: number;
        /** 系统来源，1:d2c,2:b2b */
        systemSource?: string;
        /** 目标统一客户全名 */
        unificationCustomerFullName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageCustomerBill, any>({
        path: `/customer/bill/query/for/customer`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户账单
     * @name BillQueryForManage
     * @summary 用户账单分页查询（管理端）
     * @request GET:/customer/bill/query/for/manage
     */
    billQueryForManage: (
      query?: {
        /** 审核状态：1：已通过；2：待审核；3：已撤销；4：已拒绝 */
        auditStatus?: string;
        /** 审核状态：1：已通过；2：待审核；3：已撤销；4：已拒绝 */
        auditStatusList?: string[];
        /** 账单名称 */
        billName?: string;
        /** 账单状态：1：已支付 ；2：待支付；3：已取消；4：已拒绝；5：支付中 */
        billPayStatus?: string;
        /** 账单状态：1：已支付 ；2：待支付；3：已取消；4：已拒绝；5：支付中 */
        billPayStatusList?: string[];
        /** 账单状态不为空 */
        billPayStatusNotNull?: boolean;
        /**
         * 账单发起时间
         * @format date-time
         */
        billTimeEnd?: string;
        /**
         * 账单发起时间
         * @format date-time
         */
        billTimeStart?: string;
        /**
         * 客户账单主键
         * @format int64
         */
        customerBillId?: number;
        /**
         * 目标客户id
         * @format int64
         */
        customerId?: number;
        /** customerIds */
        customerIdList?: number[];
        /** 目标客户名 */
        customerName?: string;
        /**
         * 目标客户店铺id
         * @format int64
         */
        customerShopId?: number;
        /**
         * 目标客户仓库id
         * @format int64
         */
        customerWarehouseId?: number;
        /** 目标客户登录名 */
        loginName?: string;
        /** 获取主或者子账单:true:主;false:子 */
        mainOrSubBill?: boolean;
        /**
         * 目标客户会员等级id
         * @format int64
         */
        membershipTemplateId?: number;
        /** 创建时间倒序 */
        orderByCreateTimeDesc?: boolean;
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        "sorts[0].asc"?: boolean;
        "sorts[0].field"?: string;
        /** @format int32 */
        startIndex?: number;
        /** 系统来源，1:d2c,2:b2b */
        systemSource?: string;
        /** 目标统一客户全名 */
        unificationCustomerFullName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageCustomerBill, any>({
        path: `/customer/bill/query/for/manage`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  data = {
    /**
     * No description
     *
     * @tags 结算中心-数据统计
     * @name StatisticsCustomerDetailQuery
     * @summary 客户毛利率明细
     * @request GET:/data/statistics/customer/detail/query
     */
    statisticsCustomerDetailQuery: (
      query?: {
        /**
         * 用户id
         * @format int64
         */
        customerId?: number;
        /** 用户姓名 */
        customerName?: string;
        /**
         * 结束时间
         * @format date-time
         */
        endTime?: string;
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        /** 平台订单编号(直行便订单编号) */
        platformOrderNo?: string;
        "sorts[0].asc"?: boolean;
        "sorts[0].field"?: string;
        /** @format int32 */
        startIndex?: number;
        /**
         * 开始时间
         * @format date-time
         */
        startTime?: string;
        /** 来源类型；1：2C；2：2B */
        systemSource?: string;
        /** 总毛利率（%） */
        totalGrossProfitRateEnd?: string;
        /** 总毛利率（%） */
        totalGrossProfitRateStart?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageGrossProfitRateCustomerDetailListVO, any>({
        path: `/data/statistics/customer/detail/query`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-数据统计
     * @name StatisticsCustomerQuery
     * @summary 客户毛利率汇总
     * @request POST:/data/statistics/customer/query
     */
    statisticsCustomerQuery: (queryVo: DataStatisticsQueryVO, params: RequestParams = {}) =>
      this.request<BizResponsePageGrossProfitRateCustomerListVO, any>({
        path: `/data/statistics/customer/query`,
        method: "POST",
        body: queryVo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-数据统计
     * @name StatisticsDeliveryQuery
     * @summary 发货毛利率汇总
     * @request GET:/data/statistics/delivery/query
     */
    statisticsDeliveryQuery: (
      query?: {
        /**
         * 用户id
         * @format int64
         */
        customerId?: number;
        /** 用户姓名 */
        customerName?: string;
        /**
         * 结束时间
         * @format date-time
         */
        endTime?: string;
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        /** 平台订单编号(直行便订单编号) */
        platformOrderNo?: string;
        "sorts[0].asc"?: boolean;
        "sorts[0].field"?: string;
        /** @format int32 */
        startIndex?: number;
        /**
         * 开始时间
         * @format date-time
         */
        startTime?: string;
        /** 来源类型；1：2C；2：2B */
        systemSource?: string;
        /** 总毛利率（%） */
        totalGrossProfitRateEnd?: string;
        /** 总毛利率（%） */
        totalGrossProfitRateStart?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageGrossProfitRateDeliveryListVO, any>({
        path: `/data/statistics/delivery/query`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-数据统计
     * @name StatisticsOrderDetalQuery
     * @summary 订单毛利率明细
     * @request GET:/data/statistics/order/detal/query
     */
    statisticsOrderDetalQuery: (
      query?: {
        /**
         * 用户id
         * @format int64
         */
        customerId?: number;
        /** 用户姓名 */
        customerName?: string;
        /**
         * 结束时间
         * @format date-time
         */
        endTime?: string;
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        /** 平台订单编号(直行便订单编号) */
        platformOrderNo?: string;
        "sorts[0].asc"?: boolean;
        "sorts[0].field"?: string;
        /** @format int32 */
        startIndex?: number;
        /**
         * 开始时间
         * @format date-time
         */
        startTime?: string;
        /** 来源类型；1：2C；2：2B */
        systemSource?: string;
        /** 总毛利率（%） */
        totalGrossProfitRateEnd?: string;
        /** 总毛利率（%） */
        totalGrossProfitRateStart?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageGrossProfitRateOrderListVO, any>({
        path: `/data/statistics/order/detal/query`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-数据统计
     * @name StatisticsOrderQuery
     * @summary 订单毛利率汇总
     * @request POST:/data/statistics/order/query
     */
    statisticsOrderQuery: (queryVo: DataStatisticsQueryVO, params: RequestParams = {}) =>
      this.request<BizResponsePageGrossProfitRateOrderListVO, any>({
        path: `/data/statistics/order/query`,
        method: "POST",
        body: queryVo,
        type: ContentType.Json,
        ...params,
      }),
  };
  exchangeRate = {
    /**
     * No description
     *
     * @tags 汇率管理
     * @name CnyToJpyExchangeRateAfterConfigFloat
     * @summary cnyToJpyExchangeRateAfterConfigFloat
     * @request GET:/exchangeRate/cnyToJpyExchangeRateAfterConfigFloat
     */
    cnyToJpyExchangeRateAfterConfigFloat: (
      query: {
        /**
         * mainCustomerId
         * @format int64
         */
        mainCustomerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseExchangeRateRespDTO, any>({
        path: `/exchangeRate/cnyToJpyExchangeRateAfterConfigFloat`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 汇率管理
     * @name CnyToUsdExchangeRate
     * @summary cnyToUsdExchangeRate
     * @request GET:/exchangeRate/cnyToUsdExchangeRate
     */
    cnyToUsdExchangeRate: (params: RequestParams = {}) =>
      this.request<BizResponseExchangeRateRespDTO, any>({
        path: `/exchangeRate/cnyToUsdExchangeRate`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 汇率管理
     * @name GetExchangeRate
     * @summary 爬取当天汇率
     * @request GET:/exchangeRate/getExchangeRate
     */
    getExchangeRate: (params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/exchangeRate/getExchangeRate`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 汇率管理
     * @name GetLatestExchangeRate
     * @summary 获取最新汇率
     * @request GET:/exchangeRate/getLatestExchangeRate
     */
    getLatestExchangeRate: (
      query?: {
        /** currencyCodeFrom */
        currencyCodeFrom?: string;
        /** currencyCodeTo */
        currencyCodeTo?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/exchangeRate/getLatestExchangeRate`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 汇率管理
     * @name GetOriginExchangeRate
     * @summary getOriginExchangeRate
     * @request GET:/exchangeRate/getOriginExchangeRate
     */
    getOriginExchangeRate: (
      query: {
        /** stationCode */
        stationCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseExchangeRateRespDTO, any>({
        path: `/exchangeRate/getOriginExchangeRate`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 汇率管理
     * @name GetStationExchangeRate
     * @summary getStationExchangeRate
     * @request GET:/exchangeRate/getStationExchangeRate
     */
    getStationExchangeRate: (
      query: {
        /**
         * bizScene
         * @format int32
         */
        bizScene?: number;
        /** stationCode */
        stationCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseExchangeRateRespDTO, any>({
        path: `/exchangeRate/getStationExchangeRate`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  float = {
    /**
     * No description
     *
     * @tags float-rate-config-controller
     * @name RateAdd
     * @summary 新增浮动汇率配置
     * @request POST:/float/rate/add
     */
    rateAdd: (floatExchangeRateConfigDTOList: FloatExchangeRateConfig[], params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/float/rate/add`,
        method: "POST",
        body: floatExchangeRateConfigDTOList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags float-rate-config-controller
     * @name RateDelete
     * @summary 删除浮动汇率配置
     * @request GET:/float/rate/delete
     */
    rateDelete: (
      query: {
        /**
         * floatExchangeRateConfigId
         * @format int64
         */
        floatExchangeRateConfigId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/float/rate/delete`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags float-rate-config-controller
     * @name RateQuery
     * @summary 查询浮动汇率配置
     * @request POST:/float/rate/query
     */
    rateQuery: (queryDTO: FloatExchangeRateConfigQueryDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/float/rate/query`,
        method: "POST",
        body: queryDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags float-rate-config-controller
     * @name RateQueryOperateLog
     * @summary 查询浮动汇率配置
     * @request POST:/float/rate/query/operate/log
     */
    rateQueryOperateLog: (queryDTO: FloatExchangeRateConfigQueryDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/float/rate/query/operate/log`,
        method: "POST",
        body: queryDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags float-rate-config-controller
     * @name RateUpdate
     * @summary 修改浮动汇率配置
     * @request POST:/float/rate/update
     */
    rateUpdate: (floatExchangeRateConfigDTOList: FloatExchangeRateConfig[], params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/float/rate/update`,
        method: "POST",
        body: floatExchangeRateConfigDTOList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags float-rate-config-controller
     * @name RateUpdateStatus
     * @summary 修改浮动汇率配置的状态
     * @request POST:/float/rate/update/status
     */
    rateUpdateStatus: (updateDTO: FloatExchangeRateConfig, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/float/rate/update/status`,
        method: "POST",
        body: updateDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  funds = {
    /**
     * No description
     *
     * @tags 资金管理
     * @name ManageDetailSelectList
     * @summary 资金管理-明细查询
     * @request GET:/funds/manage/detail/select/list
     */
    manageDetailSelectList: (
      query?: {
        /**
         * 结束日期
         * @format date-time
         */
        createTimeEnd?: string;
        /**
         * 开始日期
         * @format date-time
         */
        createTimeStart?: string;
        /**
         * 客户Id
         * @format int64
         */
        customerId?: number;
        customerName?: string;
        deleteFlag?: boolean;
        /** 资金明细类型 */
        fundFlowType?: string;
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        "sorts[0].asc"?: boolean;
        "sorts[0].field"?: string;
        /** @format int32 */
        startIndex?: number;
        /** 系统来源: 1-D2C; 2-B2B */
        systemSource?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageCustomerWalletFundFlow, any>({
        path: `/funds/manage/detail/select/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 资金管理
     * @name ManageExport
     * @summary 资金管理-导出
     * @request POST:/funds/manage/export
     */
    manageExport: (queryVO: FundsManageQueryVO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/funds/manage/export`,
        method: "POST",
        body: queryVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 资金管理
     * @name ManageQuery
     * @summary 资金管理-分页查询
     * @request POST:/funds/manage/query
     */
    manageQuery: (queryVO: FundsManageQueryVO, params: RequestParams = {}) =>
      this.request<BizResponsePageFundsManage, any>({
        path: `/funds/manage/query`,
        method: "POST",
        body: queryVO,
        type: ContentType.Json,
        ...params,
      }),
  };
  intForwarderConfig = {
    /**
     * No description
     *
     * @tags int-forwarder-config-controller
     * @name GetForwarderList
     * @summary getForwarderList
     * @request GET:/intForwarderConfig/getForwarderList
     */
    getForwarderList: (params: RequestParams = {}) =>
      this.request<BizResponseListIntForwarderConfigRespDTO, any>({
        path: `/intForwarderConfig/getForwarderList`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-forwarder-config-controller
     * @name GetInfo
     * @summary getIntForwarderConfigInfo
     * @request GET:/intForwarderConfig/getInfo
     */
    getInfo: (
      query: {
        /**
         * intForwarderConfigId
         * @format int64
         */
        intForwarderConfigId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseIntForwarderConfigInfoRespDTO, any>({
        path: `/intForwarderConfig/getInfo`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-forwarder-config-controller
     * @name GetWithIntShipConfig
     * @summary getWithIntShipConfig
     * @request GET:/intForwarderConfig/getWithIntShipConfig
     */
    getWithIntShipConfig: (params: RequestParams = {}) =>
      this.request<BizResponseListIntForwarderConfigRespDTO, any>({
        path: `/intForwarderConfig/getWithIntShipConfig`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-forwarder-config-controller
     * @name Insert
     * @summary insertIntForwarderConfig
     * @request POST:/intForwarderConfig/insert
     */
    insert: (reqDTO: InsertIntForwarderConfigReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/intForwarderConfig/insert`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-forwarder-config-controller
     * @name Page
     * @summary listIntForwarderConfig
     * @request POST:/intForwarderConfig/page
     */
    page: (query: IntForwarderConfigQuery, params: RequestParams = {}) =>
      this.request<BizResponsePageResultIntForwarderConfigRespDTO, any>({
        path: `/intForwarderConfig/page`,
        method: "POST",
        body: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-forwarder-config-controller
     * @name Query
     * @summary queryIntForwarderConfigInfo
     * @request POST:/intForwarderConfig/query
     */
    query: (reqDTO: InsertIntForwarderConfigReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListIntForwarderConfigInfoRespDTO, any>({
        path: `/intForwarderConfig/query`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-forwarder-config-controller
     * @name QueryByCountry
     * @summary queryIntForwarderConfigByCountry
     * @request POST:/intForwarderConfig/query/by/country
     */
    queryByCountry: (reqDTO: InsertIntForwarderConfigReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListIntForwarderConfigInfoRespDTO, any>({
        path: `/intForwarderConfig/query/by/country`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-forwarder-config-controller
     * @name QueryCountry
     * @summary queryIntForwarderCountryInfo
     * @request POST:/intForwarderConfig/query/country
     */
    queryCountry: (reqDTO: InsertIntForwarderConfigReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListIntForwarderConfigCountryRespDTO, any>({
        path: `/intForwarderConfig/query/country`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-forwarder-config-controller
     * @name Update
     * @summary updateIntForwarderConfig
     * @request POST:/intForwarderConfig/update
     */
    update: (reqDTO: UpdateIntForwarderConfigReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/intForwarderConfig/update`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  intShipBill = {
    /**
     * No description
     *
     * @tags 国际运费配置-账单对比报价差
     * @name GetFeeInfo
     * @summary getFeeInfo
     * @request POST:/intShipBill/getFeeInfo
     */
    getFeeInfo: (reqDTO: GetShipFeeInfoReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseIntShipFeeDetailRespDTO, any>({
        path: `/intShipBill/getFeeInfo`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 国际运费配置-账单对比报价差
     * @name ImportShipBill
     * @summary 导入账单
     * @request POST:/intShipBill/importShipBill
     */
    importShipBill: (
      data: {
        /** file */
        file: File;
      },
      query?: {
        /** 系统来源 */
        systemSource?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseImportExcelResultModel, any>({
        path: `/intShipBill/importShipBill`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 国际运费配置-账单对比报价差
     * @name Page
     * @summary pageQueryShipBill
     * @request POST:/intShipBill/page
     */
    page: (query: IntShipBillQuery, params: RequestParams = {}) =>
      this.request<BizResponsePageResultIntShipBillRespDTO, any>({
        path: `/intShipBill/page`,
        method: "POST",
        body: query,
        type: ContentType.Json,
        ...params,
      }),
  };
  intShipConfig = {
    /**
     * No description
     *
     * @tags int-ship-config-controller
     * @name CalcShipFee
     * @summary batchCalcShipFee
     * @request POST:/intShipConfig/calc/ship/fee
     */
    calcShipFee: (param: CalcIntShipFeeDTO, params: RequestParams = {}) =>
      this.request<BizResponseListCalcIntShipFeeRespDTO, any>({
        path: `/intShipConfig/calc/ship/fee`,
        method: "POST",
        body: param,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-config-controller
     * @name GetForwarderCountry
     * @summary getForwarderCountrys
     * @request GET:/intShipConfig/get/forwarder/country
     */
    getForwarderCountry: (
      query?: {
        /**
         * intShipConfigId
         * @format int64
         */
        intShipConfigId?: number;
        /** stationCode */
        stationCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListIntForwarderConfigCountryRespDTO, any>({
        path: `/intShipConfig/get/forwarder/country`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-config-controller
     * @name GetAreaById
     * @summary getAreaById
     * @request POST:/intShipConfig/getAreaById
     */
    getAreaById: (query: IntAreaResp, params: RequestParams = {}) =>
      this.request<BizResponseIntAreaResp, any>({
        path: `/intShipConfig/getAreaById`,
        method: "POST",
        body: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-config-controller
     * @name GetByForwarderId
     * @summary getByForwarderId
     * @request GET:/intShipConfig/getByForwarderId
     */
    getByForwarderId: (
      query: {
        /**
         * intForwarderConfigId
         * @format int64
         */
        intForwarderConfigId: number;
        /**
         * systemSource
         * @format int32
         */
        systemSource: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseIntShipForwardersRespDTO, any>({
        path: `/intShipConfig/getByForwarderId`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-config-controller
     * @name GetCustomerRecommendedLogistics
     * @summary getCustomerRecommendedLogistics
     * @request POST:/intShipConfig/getCustomerRecommendedLogistics
     */
    getCustomerRecommendedLogistics: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListRecommendedLogisticsRespDTO, any>({
        path: `/intShipConfig/getCustomerRecommendedLogistics`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-config-controller
     * @name GetEstimateIntShip
     * @summary 获取预估国际运费
     * @request POST:/intShipConfig/getEstimateIntShip
     */
    getEstimateIntShip: (reqDTO: GetEstimateIntShipFeeReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseEstimateIntShipFeeRespDTO, any>({
        path: `/intShipConfig/getEstimateIntShip`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-config-controller
     * @name GetForwarders
     * @summary getForwarders
     * @request GET:/intShipConfig/getForwarders
     */
    getForwarders: (
      query: {
        /**
         * intShipConfigId
         * @format int64
         */
        intShipConfigId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseIntShipForwardersRespDTO, any>({
        path: `/intShipConfig/getForwarders`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-config-controller
     * @name GetInfo
     * @summary getIntShipConfigInfo
     * @request GET:/intShipConfig/getInfo
     */
    getInfo: (
      query: {
        /**
         * intShipConfigId
         * @format int64
         */
        intShipConfigId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseIntShipConfigInfoRespDTO, any>({
        path: `/intShipConfig/getInfo`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-config-controller
     * @name GetIntShip
     * @summary getIntShip
     * @request POST:/intShipConfig/getIntShip
     */
    getIntShip: (reqDTO: GetIntShipFeeReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListIntShipFeeInfoRespDTO, any>({
        path: `/intShipConfig/getIntShip`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-config-controller
     * @name GetIntShipV2
     * @summary getIntShipV2
     * @request POST:/intShipConfig/getIntShip/v2
     */
    getIntShipV2: (reqDTO: NewGetIntShipFeeReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListIntShipFeeInfoRespDTO, any>({
        path: `/intShipConfig/getIntShip/v2`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-config-controller
     * @name GetIntShipConfigByTime
     * @summary getIntShipConfigByTime
     * @request GET:/intShipConfig/getIntShipConfigByTime
     */
    getIntShipConfigByTime: (
      query: {
        /**
         * deliveryTime
         * @format date-time
         */
        deliveryTime: string;
        /**
         * intShipConfigId
         * @format int64
         */
        intShipConfigId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseIntShipContentRespDTO, any>({
        path: `/intShipConfig/getIntShipConfigByTime`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-config-controller
     * @name GetLogisticsAndForwarder
     * @summary getLogisticsAndForwarder
     * @request POST:/intShipConfig/getLogisticsAndForwarder
     */
    getLogisticsAndForwarder: (query: LogisticsAndForwarderQuery, params: RequestParams = {}) =>
      this.request<BizResponseLogisticsAndForwarderRespDTO, any>({
        path: `/intShipConfig/getLogisticsAndForwarder`,
        method: "POST",
        body: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-config-controller
     * @name GetRecommendedLogistics
     * @summary 获取推荐物流公司
     * @request POST:/intShipConfig/getRecommendedLogistics
     */
    getRecommendedLogistics: (query: IntShipConfigListQuery, params: RequestParams = {}) =>
      this.request<BizResponseListRecommendedLogisticsRespDTO, any>({
        path: `/intShipConfig/getRecommendedLogistics`,
        method: "POST",
        body: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-config-controller
     * @name GetShipIdByForwardAndCustomer
     * @summary queryShipByForwardAndCustomer
     * @request POST:/intShipConfig/getShipIdByForwardAndCustomer
     */
    getShipIdByForwardAndCustomer: (param: ShipQueryByForwardAndCustomerParam, params: RequestParams = {}) =>
      this.request<BizResponseListIntShipForwardersRespDTO, any>({
        path: `/intShipConfig/getShipIdByForwardAndCustomer`,
        method: "POST",
        body: param,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-config-controller
     * @name Insert
     * @summary insertIntShipConfig
     * @request POST:/intShipConfig/insert
     */
    insert: (reqDTO: InsertIntShipConfigReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/intShipConfig/insert`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-config-controller
     * @name International
     * @summary 国际料金表
     * @request POST:/intShipConfig/international
     */
    international: (params: RequestParams = {}) =>
      this.request<BizResponseListShipVO, any>({
        path: `/intShipConfig/international`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-config-controller
     * @name List
     * @summary listIntShipConfig
     * @request POST:/intShipConfig/list
     */
    list: (query: IntShipConfigListQuery, params: RequestParams = {}) =>
      this.request<BizResponseListIntShipForwardersRespDTO, any>({
        path: `/intShipConfig/list`,
        method: "POST",
        body: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-config-controller
     * @name ListFeign
     * @summary listIntShipConfigByMember
     * @request POST:/intShipConfig/list/feign
     */
    listFeign: (query: IntShipConfigListQuery, params: RequestParams = {}) =>
      this.request<BizResponseListIntShipForwardersRespDTO, any>({
        path: `/intShipConfig/list/feign`,
        method: "POST",
        body: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-config-controller
     * @name ListInfo
     * @summary listIntShipConfigInfo
     * @request POST:/intShipConfig/listInfo
     */
    listInfo: (intShipConfigIds: number[], params: RequestParams = {}) =>
      this.request<BizResponseListIntShipConfigInfoRespDTO, any>({
        path: `/intShipConfig/listInfo`,
        method: "POST",
        body: intShipConfigIds,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-config-controller
     * @name ListModeOfTransport
     * @summary 运输
     * @request GET:/intShipConfig/listModeOfTransport
     */
    listModeOfTransport: (params: RequestParams = {}) =>
      this.request<BizResponseListTransportModeRespDTO, any>({
        path: `/intShipConfig/listModeOfTransport`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-config-controller
     * @name Page
     * @summary pageIntShipConfig
     * @request POST:/intShipConfig/page
     */
    page: (query: IntShipConfigQuery, params: RequestParams = {}) =>
      this.request<BizResponsePageResultIntShipConfigRespDTO, any>({
        path: `/intShipConfig/page`,
        method: "POST",
        body: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-config-controller
     * @name Update
     * @summary updateIntShipConfig
     * @request POST:/intShipConfig/update
     */
    update: (reqDTO: UpdateIntShipConfigReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/intShipConfig/update`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-config-controller
     * @name UpdateSort
     * @summary 修改排序
     * @request POST:/intShipConfig/updateSort
     */
    updateSort: (reqDTO: IntShipUpdateSortReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/intShipConfig/updateSort`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  intShipOther = {
    /**
     * No description
     *
     * @tags 国际运费配置-账单附加项追加收取
     * @name BatchDeductOtherFee
     * @summary batchDeductOtherFee
     * @request POST:/intShipOther/batchDeductOtherFee
     */
    batchDeductOtherFee: (reqDTO: BatchDeductOtherFeeReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBaseBatchDTO, any>({
        path: `/intShipOther/batchDeductOtherFee`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 国际运费配置-账单附加项追加收取
     * @name DeductOtherFee
     * @summary deductOtherFee
     * @request POST:/intShipOther/deductOtherFee
     */
    deductOtherFee: (reqDTO: DeductOtherFeeReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/intShipOther/deductOtherFee`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 国际运费配置-账单附加项追加收取
     * @name ExportIntShipOther
     * @summary 导出附加项账单
     * @request POST:/intShipOther/exportIntShipOther
     */
    exportIntShipOther: (query: IntShipOtherQuery, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/intShipOther/exportIntShipOther`,
        method: "POST",
        body: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 国际运费配置-账单附加项追加收取
     * @name ImportShipOther
     * @summary 导入附加项账单
     * @request POST:/intShipOther/importShipOther
     */
    importShipOther: (
      data: {
        /** file */
        file: File;
      },
      query?: {
        /** 系统来源 */
        systemSource?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseImportExcelResultModel, any>({
        path: `/intShipOther/importShipOther`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 国际运费配置-账单附加项追加收取
     * @name Page
     * @summary pageQueryShipOther
     * @request POST:/intShipOther/page
     */
    page: (query: IntShipOtherQuery, params: RequestParams = {}) =>
      this.request<BizResponsePageResultIntShipOtherRespDTO, any>({
        path: `/intShipOther/page`,
        method: "POST",
        body: query,
        type: ContentType.Json,
        ...params,
      }),
  };
  intShipTemplate = {
    /**
     * No description
     *
     * @tags int-ship-template-controller
     * @name PostIntShipTemplate
     * @summary addTemplate
     * @request POST:/intShipTemplate/add
     */
    postIntShipTemplate: (reqDTO: IntShipTemplateAddReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/intShipTemplate/add`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-template-controller
     * @name Download
     * @summary 下载国际运费模板
     * @request POST:/intShipTemplate/download
     */
    download: (reqDTO: DownloadIntShipTemplateReqDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/intShipTemplate/download`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-template-controller
     * @name Edit
     * @summary editTemplate
     * @request POST:/intShipTemplate/edit
     */
    edit: (reqDTO: IntShipTemplateEditReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/intShipTemplate/edit`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-template-controller
     * @name GetInfo
     * @summary getTemplateInfo
     * @request GET:/intShipTemplate/getInfo
     */
    getInfo: (
      query: {
        /**
         * intShipTemplateId
         * @format int64
         */
        intShipTemplateId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseIntShipTemplateInfoRespDTO, any>({
        path: `/intShipTemplate/getInfo`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags int-ship-template-controller
     * @name Page
     * @summary pageQueryTemplate
     * @request POST:/intShipTemplate/page
     */
    page: (query: IntShipTemplateQuery, params: RequestParams = {}) =>
      this.request<BizResponsePageResultIntShipTemplateRespDTO, any>({
        path: `/intShipTemplate/page`,
        method: "POST",
        body: query,
        type: ContentType.Json,
        ...params,
      }),
  };
  intShipTieredDiff = {
    /**
     * No description
     *
     * @tags 国际运费配置-账单对比我司仓库重量差
     * @name BatchDeductValuationDiff
     * @summary batchDeductValuationDiff
     * @request POST:/intShipTieredDiff/batchDeductValuationDiff
     */
    batchDeductValuationDiff: (reqDTO: BatchDeductValuationDiffReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBaseBatchDTO, any>({
        path: `/intShipTieredDiff/batchDeductValuationDiff`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 国际运费配置-账单对比我司仓库重量差
     * @name DeductValuationDiff
     * @summary deductValuationDiff
     * @request POST:/intShipTieredDiff/deductValuationDiff
     */
    deductValuationDiff: (reqDTO: DeductValuationDiffReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/intShipTieredDiff/deductValuationDiff`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 国际运费配置-账单对比我司仓库重量差
     * @name ExportIntShipTieredDiff
     * @summary 导出账单对比我司仓库重量差
     * @request POST:/intShipTieredDiff/exportIntShipTieredDiff
     */
    exportIntShipTieredDiff: (query: IntShipTieredDiffQuery, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/intShipTieredDiff/exportIntShipTieredDiff`,
        method: "POST",
        body: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 国际运费配置-账单对比我司仓库重量差
     * @name Page
     * @summary pageQueryTieredDiff
     * @request POST:/intShipTieredDiff/page
     */
    page: (query: IntShipTieredDiffQuery, params: RequestParams = {}) =>
      this.request<BizResponsePageResultIntShipTieredDiffRespDTO, any>({
        path: `/intShipTieredDiff/page`,
        method: "POST",
        body: query,
        type: ContentType.Json,
        ...params,
      }),
  };
  jxhy = {
    /**
     * No description
     *
     * @tags 精选货源数据
     * @name ProductJxhyProductAmountRange
     * @summary 1688精选货源优惠金额区间分布表
     * @request GET:/jxhy/product/jxhyProductAmountRange
     */
    productJxhyProductAmountRange: (params: RequestParams = {}) =>
      this.request<BizResponseListJxhyProductAmountRangeDTO, any>({
        path: `/jxhy/product/jxhyProductAmountRange`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 精选货源数据
     * @name ProductJxhyProductCateRange
     * @summary 1688品类折扣率及优惠区间分布表
     * @request GET:/jxhy/product/jxhyProductCateRange
     */
    productJxhyProductCateRange: (params: RequestParams = {}) =>
      this.request<BizResponseListJxhyProductCateRangeDTO, any>({
        path: `/jxhy/product/jxhyProductCateRange`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 精选货源数据
     * @name ProductJxhyProductDiscountRange
     * @summary 1688精选货源折扣率区间分布表
     * @request GET:/jxhy/product/jxhyProductDiscountRange
     */
    productJxhyProductDiscountRange: (params: RequestParams = {}) =>
      this.request<BizResponseListJxhyProductDiscountRangeDTO, any>({
        path: `/jxhy/product/jxhyProductDiscountRange`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 精选货源数据
     * @name ProductJxhyProductRange
     * @summary 1688精选货源概览表
     * @request GET:/jxhy/product/jxhyProductRange
     */
    productJxhyProductRange: (params: RequestParams = {}) =>
      this.request<BizResponseListJxhyProductRangeDTO, any>({
        path: `/jxhy/product/jxhyProductRange`,
        method: "GET",
        ...params,
      }),
  };
  membership = {
    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureAutoGift
     * @summary autoGift
     * @request POST:/membership/configure/autoGift
     */
    configureAutoGift: (reqDTO: MembershipPrechargeOrderReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/membership/configure/autoGift`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureAvailableTemplate
     * @summary 根据站点查询可用的会员等级模板
     * @request GET:/membership/configure/available/template
     */
    configureAvailableTemplate: (
      query: {
        /** stationCode */
        stationCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListMembershipTemplateListVO, any>({
        path: `/membership/configure/available/template`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureGenerateAutomaticToggle
     * @summary generateAutomaticToggle
     * @request GET:/membership/configure/generateAutomaticToggle
     */
    configureGenerateAutomaticToggle: (
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
        path: `/membership/configure/generateAutomaticToggle`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureGetAutomaticToggle
     * @summary getAutomaticToggle
     * @request GET:/membership/configure/getAutomaticToggle
     */
    configureGetAutomaticToggle: (
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
        path: `/membership/configure/getAutomaticToggle`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureGetPayPrecharegeOrder
     * @summary getPayPrecharegeOrder
     * @request GET:/membership/configure/getPayPrecharegeOrder
     */
    configureGetPayPrecharegeOrder: (
      query: {
        /**
         * superCustomerId
         * @format int64
         */
        superCustomerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListMembershipPrechargeOrderRespDTO, any>({
        path: `/membership/configure/getPayPrecharegeOrder`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureGetPrecharegeOrder
     * @summary getPrecharegeOrder
     * @request GET:/membership/configure/getPrecharegeOrder
     */
    configureGetPrecharegeOrder: (
      query: {
        /** superCustomerIds */
        superCustomerIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListMembershipPrechargeOrderRespDTO, any>({
        path: `/membership/configure/getPrecharegeOrder`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureIntshipTemplateQuery
     * @summary 会员列表(国际物流配置专用) 会查出未入会的会员等级
     * @request GET:/membership/configure/intship/template/query
     */
    configureIntshipTemplateQuery: (
      query?: {
        /** @format int64 */
        membershipTemplateId?: number;
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        "sorts[0].asc"?: boolean;
        "sorts[0].field"?: string;
        /**
         * 会员类型:0-普通,1-特殊
         * @format int32
         */
        specialType?: number;
        /** @format int32 */
        startIndex?: number;
        stationCode?: string;
        statusFlag?: boolean;
        templateName?: string;
        /** 会员身份名称中文 */
        templateNameZh?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageResultMembershipTemplateListVO, any>({
        path: `/membership/configure/intship/template/query`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTagSelectList
     * @summary 会员配置-会员标签列表
     * @request GET:/membership/configure/tag/selectList
     */
    configureTagSelectList: (params: RequestParams = {}) =>
      this.request<BizResponseListMembershipTagListVO, any>({
        path: `/membership/configure/tag/selectList`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplateDeleteSoftById
     * @summary 会员配置-会员设置删除（not used）
     * @request POST:/membership/configure/template/deleteSoftById/{id}
     */
    configureTemplateDeleteSoftById: (id: string, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/membership/configure/template/deleteSoftById/${id}`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplateGetById
     * @summary 会员配置-会员设置详情
     * @request GET:/membership/configure/template/getById/{id}
     */
    configureTemplateGetById: (id: string, params: RequestParams = {}) =>
      this.request<BizResponseMembershipTemplateDetailVO, any>({
        path: `/membership/configure/template/getById/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplateInsert
     * @summary 会员配置-会员模板插入
     * @request POST:/membership/configure/template/insert
     */
    configureTemplateInsert: (insertVO: MembershipTemplateInsertVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/membership/configure/template/insert`,
        method: "POST",
        body: insertVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplateInsertRight
     * @summary 会员配置-页面权益配置插入
     * @request POST:/membership/configure/template/insert/right
     */
    configureTemplateInsertRight: (insertVO: MembershipTemplateConfigAndRightReqVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/membership/configure/template/insert/right`,
        method: "POST",
        body: insertVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplateInsertRightQuery
     * @summary 会员配置-页面权益配置查询
     * @request GET:/membership/configure/template/insert/right/query
     */
    configureTemplateInsertRightQuery: (
      query: {
        /**
         * membershipTemplateId
         * @format int64
         */
        membershipTemplateId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseMembershipTemplateConfigAndRightReqVO, any>({
        path: `/membership/configure/template/insert/right/query`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplateInsertTrial
     * @summary 会员配置-试用会员活动插入
     * @request POST:/membership/configure/template/insert/trial
     */
    configureTemplateInsertTrial: (insertVO: TrialMembershipTemplateInsertVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/membership/configure/template/insert/trial`,
        method: "POST",
        body: insertVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplateList
     * @summary selectListMembershipTemplate
     * @request GET:/membership/configure/template/list
     */
    configureTemplateList: (
      query?: {
        /** stationCode */
        stationCode?: string;
        /** templateName */
        templateName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListMembershipTemplateListVO, any>({
        path: `/membership/configure/template/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplateListById
     * @summary selectListMembershipTemplateById
     * @request GET:/membership/configure/template/list/byId
     */
    configureTemplateListById: (
      query?: {
        /**
         * templateId
         * @format int64
         */
        templateId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListMembershipTemplateListVO, any>({
        path: `/membership/configure/template/list/byId`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplatePriceDefaultGetStationCode
     * @summary 会员配置-会员套餐-通过站点获取默认的会员套餐
     * @request GET:/membership/configure/template/price/default/get/stationCode
     */
    configureTemplatePriceDefaultGetStationCode: (
      query: {
        /** stationCode */
        stationCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseMembershipTemplatePriceRespDTO, any>({
        path: `/membership/configure/template/price/default/get/stationCode`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplatePriceDeleteSoftById
     * @summary 会员配置-会员套餐-删除
     * @request POST:/membership/configure/template/price/deleteSoftById/{id}
     */
    configureTemplatePriceDeleteSoftById: (id: number, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/membership/configure/template/price/deleteSoftById/${id}`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplatePriceGetById
     * @summary 会员配置-会员套餐查询详情
     * @request GET:/membership/configure/template/price/getById/{id}
     */
    configureTemplatePriceGetById: (id: string, params: RequestParams = {}) =>
      this.request<BizResponseMembershipTemplatePriceListVO, any>({
        path: `/membership/configure/template/price/getById/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplatePriceInsert
     * @summary 会员配置-会员套餐-插入
     * @request POST:/membership/configure/template/price/insert
     */
    configureTemplatePriceInsert: (insertVO: MembershipTemplatePriceInsertVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/membership/configure/template/price/insert`,
        method: "POST",
        body: insertVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplatePriceQuery
     * @summary 会员配置-会员套餐查询
     * @request GET:/membership/configure/template/price/query
     */
    configureTemplatePriceQuery: (
      query?: {
        /**
         * 会员模板表id
         * @format int64
         */
        membershipTemplateId?: number;
        /**
         * 第几页
         * @format int32
         */
        pageNum?: number;
        /**
         * 每页条数
         * @format int32
         */
        pageSize?: number;
        /** 会员身份收费名称 */
        priceName?: string;
        /** @format int32 */
        startIndex?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageMembershipTemplatePriceListVO, any>({
        path: `/membership/configure/template/price/query`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplatePriceSelectList
     * @summary 会员配置-会员套餐列表
     * @request GET:/membership/configure/template/price/select/list
     */
    configureTemplatePriceSelectList: (params: RequestParams = {}) =>
      this.request<BizResponseListMembershipTemplatePriceListVO, any>({
        path: `/membership/configure/template/price/select/list`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplatePriceSelectListTrial
     * @summary 会员配置-试用会员套餐列表
     * @request GET:/membership/configure/template/price/select/list/trial
     */
    configureTemplatePriceSelectListTrial: (
      query: {
        /** stationCode */
        stationCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListMembershipTemplatePriceListVO, any>({
        path: `/membership/configure/template/price/select/list/trial`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplatePriceSelectSpecialList
     * @summary 会员配置-特殊会员套餐列表
     * @request GET:/membership/configure/template/price/select/special/list
     */
    configureTemplatePriceSelectSpecialList: (params: RequestParams = {}) =>
      this.request<BizResponseMembershipTemplatePriceListVO, any>({
        path: `/membership/configure/template/price/select/special/list`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplatePriceUpdateById
     * @summary 会员配置-会员套餐-更新
     * @request POST:/membership/configure/template/price/updateById
     */
    configureTemplatePriceUpdateById: (updateVO: MembershipTemplatePriceUpdateVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/membership/configure/template/price/updateById`,
        method: "POST",
        body: updateVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplateQuery
     * @summary 会员配置-会员设置列表
     * @request GET:/membership/configure/template/query
     */
    configureTemplateQuery: (
      query?: {
        /** @format int64 */
        membershipTemplateId?: number;
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        "sorts[0].asc"?: boolean;
        "sorts[0].field"?: string;
        /**
         * 会员类型:0-普通,1-特殊
         * @format int32
         */
        specialType?: number;
        /** @format int32 */
        startIndex?: number;
        stationCode?: string;
        statusFlag?: boolean;
        templateName?: string;
        /** 会员身份名称中文 */
        templateNameZh?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageResultMembershipTemplateListVO, any>({
        path: `/membership/configure/template/query`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplateSelectRightUpdate
     * @summary 会员配置-页面权益配置修改
     * @request POST:/membership/configure/template/select/right/update
     */
    configureTemplateSelectRightUpdate: (insertVO: MembershipTemplateConfigAndRightReqVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/membership/configure/template/select/right/update`,
        method: "POST",
        body: insertVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplateSelectTrial
     * @summary 会员配置-试用会员活动分页查询
     * @request POST:/membership/configure/template/select/trial
     */
    configureTemplateSelectTrial: (queryDTO: TrialMembershipTemplateQueryDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageTrialMembershipTemplateRespDTO, any>({
        path: `/membership/configure/template/select/trial`,
        method: "POST",
        body: queryDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplateSelectTrialAll
     * @summary 会员配置-试用会员活动是否有生效中和待生效的
     * @request POST:/membership/configure/template/select/trial/all
     */
    configureTemplateSelectTrialAll: (
      query: {
        /** stationCode */
        stationCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/membership/configure/template/select/trial/all`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplateSelectTrialEffective
     * @summary 首页展示活动中的会员试用活动/判断当前用户是否有参加活动的权利
     * @request GET:/membership/configure/template/select/trial/effective
     */
    configureTemplateSelectTrialEffective: (params: RequestParams = {}) =>
      this.request<BizResponseTrialMembershipTemplateRespDTO, any>({
        path: `/membership/configure/template/select/trial/effective`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplateSelectTrialEffectiveSpecial
     * @summary 展示特殊会员试用活动
     * @request GET:/membership/configure/template/select/trial/effective/special
     */
    configureTemplateSelectTrialEffectiveSpecial: (params: RequestParams = {}) =>
      this.request<BizResponseTrialMembershipTemplateRespDTO, any>({
        path: `/membership/configure/template/select/trial/effective/special`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplateSelectTrialStop
     * @summary 终止生效中的活动
     * @request GET:/membership/configure/template/select/trial/stop
     */
    configureTemplateSelectTrialStop: (
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
        path: `/membership/configure/template/select/trial/stop`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplateSelectTrialUpdate
     * @summary 修改未生效的活动
     * @request POST:/membership/configure/template/select/trial/update
     */
    configureTemplateSelectTrialUpdate: (insertVO: TrialMembershipTemplateInsertVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/membership/configure/template/select/trial/update`,
        method: "POST",
        body: insertVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplateSort
     * @summary 会员配置-会员模板排序
     * @request POST:/membership/configure/template/sort
     */
    configureTemplateSort: (list: MembershipTemplateUpdateSortVO[], params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/membership/configure/template/sort`,
        method: "POST",
        body: list,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplateUpdateById
     * @summary 会员配置-会员模板更新
     * @request POST:/membership/configure/template/updateById
     */
    configureTemplateUpdateById: (updateVO: MembershipTemplateUpdateVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/membership/configure/template/updateById`,
        method: "POST",
        body: updateVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-会员配置
     * @name ConfigureTemplateUpdateStatusFlagById
     * @summary 会员配置-会员模板状态更新
     * @request POST:/membership/configure/template/updateStatusFlagById/{id}
     */
    configureTemplateUpdateStatusFlagById: (
      id: string,
      query: {
        /** 状态 */
        statusFlag: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/membership/configure/template/updateStatusFlagById/${id}`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 会员等级订单
     * @name OrderCreatePaypal
     * @summary paypal创建订阅订单。（前台）
     * @request POST:/membership/order/create/paypal
     */
    orderCreatePaypal: (orderCreateVO: OnlineMembershipOrderCreateVO, params: RequestParams = {}) =>
      this.request<BizResponseCreateSubscriptionDTO, any>({
        path: `/membership/order/create/paypal`,
        method: "POST",
        body: orderCreateVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 会员等级订单
     * @name OrderCreatePaypalApprove
     * @summary paypal创建订单回调。（前台）
     * @request POST:/membership/order/create/paypal/approve
     */
    orderCreatePaypalApprove: (membershipOrderPayPalVO: MembershipOrderPayPalVO, params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/membership/order/create/paypal/approve`,
        method: "POST",
        body: membershipOrderPayPalVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 会员等级订单
     * @name OrderCreatePaypalCredit
     * @summary paypal创建会员支付订单。（前台）
     * @request POST:/membership/order/create/paypal/credit
     */
    orderCreatePaypalCredit: (rechargeMembershipVO: ManualWalletRechargeMembershipVO, params: RequestParams = {}) =>
      this.request<BizResponseCreatePaymentOrderRespDTO, any>({
        path: `/membership/order/create/paypal/credit`,
        method: "POST",
        body: rechargeMembershipVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 会员等级订单
     * @name OrderCreatePaypalCreditCapture
     * @summary paypal捕获会员支付订单。（前台）
     * @request POST:/membership/order/create/paypal/credit/capture
     */
    orderCreatePaypalCreditCapture: (
      rechargeMembershipVO: ManualWalletRechargeMembershipVO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCaptureOrderDTO, any>({
        path: `/membership/order/create/paypal/credit/capture`,
        method: "POST",
        body: rechargeMembershipVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 会员等级订单
     * @name OrderGetClientId
     * @summary 获取id
     * @request POST:/membership/order/getClientId
     */
    orderGetClientId: (params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/membership/order/getClientId`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 会员等级订单
     * @name OrderGetMembershipRechargeExchangeRateKrw2Usd
     * @summary 获取韩国站会员信用卡充值汇率
     * @request GET:/membership/order/getMembershipRechargeExchangeRateKrw2Usd
     */
    orderGetMembershipRechargeExchangeRateKrw2Usd: (params: RequestParams = {}) =>
      this.request<BizResponseBigdecimal, any>({
        path: `/membership/order/getMembershipRechargeExchangeRateKrw2Usd`,
        method: "GET",
        ...params,
      }),
  };
  pay = {
    /**
     * No description
     *
     * @tags 结算中心-对账账号
     * @name AccountQuery
     * @summary 办事大厅-分页列表
     * @request GET:/pay/account/query
     */
    accountQuery: (
      query?: {
        accountIdList?: number[];
        /** 支付宝账户/支付账号 */
        accountNumber?: string;
        accountNumberList?: string[];
        accountStatusFlag?: boolean;
        accountType?: string;
        /** @format date-time */
        createTimeBegin?: string;
        /** @format date-time */
        createTimeEnd?: string;
        deleteFlag?: boolean;
        getStatusFlag?: boolean;
        orderByCreateTimeDesc?: boolean;
        /**
         * 第几页
         * @format int32
         */
        pageNum?: number;
        /**
         * 每页条数
         * @format int32
         */
        pageSize?: number;
        /** @format int32 */
        startIndex?: number;
        systemSourceType?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListPayAccount, any>({
        path: `/pay/account/query`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  paypal = {
    /**
     * No description
     *
     * @tags notify-controller
     * @name AutomaticRenewalStatus
     * @summary 获取用户是否选择自动续费
     * @request GET:/paypal/automaticRenewalStatus
     */
    automaticRenewalStatus: (params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/paypal/automaticRenewalStatus`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags notify-controller
     * @name Notify
     * @summary handleNotify
     * @request GET:/paypal/notify
     */
    notify: (params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/paypal/notify`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags notify-controller
     * @name HeadPaypal
     * @summary handleNotify
     * @request HEAD:/paypal/notify
     */
    headPaypal: (params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/paypal/notify`,
        method: "HEAD",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notify-controller
     * @name Notify2
     * @summary handleNotify
     * @request POST:/paypal/notify
     * @originalName notify
     * @duplicate
     */
    notify2: (params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/paypal/notify`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notify-controller
     * @name Notify3
     * @summary handleNotify
     * @request PUT:/paypal/notify
     * @originalName notify
     * @duplicate
     */
    notify3: (params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/paypal/notify`,
        method: "PUT",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notify-controller
     * @name Notify4
     * @summary handleNotify
     * @request DELETE:/paypal/notify
     * @originalName notify
     * @duplicate
     */
    notify4: (params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/paypal/notify`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags notify-controller
     * @name OptionsPaypal
     * @summary handleNotify
     * @request OPTIONS:/paypal/notify
     */
    optionsPaypal: (params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/paypal/notify`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notify-controller
     * @name Notify5
     * @summary handleNotify
     * @request PATCH:/paypal/notify
     * @originalName notify
     * @duplicate
     */
    notify5: (params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/paypal/notify`,
        method: "PATCH",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notify-controller
     * @name Test
     * @summary handleNotifyTest
     * @request POST:/paypal/test
     */
    test: (jsonParam: Record<string, object>, params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/paypal/test`,
        method: "POST",
        body: jsonParam,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notify-us-controller
     * @name UsAutomaticRenewalStatus
     * @summary 获取用户是否选择自动续费
     * @request GET:/paypal/us/automaticRenewalStatus
     */
    usAutomaticRenewalStatus: (params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/paypal/us/automaticRenewalStatus`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags notify-us-controller
     * @name UsNotify
     * @summary handleNotify
     * @request GET:/paypal/us/notify
     */
    usNotify: (params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/paypal/us/notify`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags notify-us-controller
     * @name HeadPaypal2
     * @summary handleNotify
     * @request HEAD:/paypal/us/notify
     * @originalName headPaypal
     * @duplicate
     */
    headPaypal2: (params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/paypal/us/notify`,
        method: "HEAD",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notify-us-controller
     * @name UsNotify2
     * @summary handleNotify
     * @request POST:/paypal/us/notify
     * @originalName usNotify
     * @duplicate
     */
    usNotify2: (params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/paypal/us/notify`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notify-us-controller
     * @name UsNotify3
     * @summary handleNotify
     * @request PUT:/paypal/us/notify
     * @originalName usNotify
     * @duplicate
     */
    usNotify3: (params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/paypal/us/notify`,
        method: "PUT",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notify-us-controller
     * @name UsNotify4
     * @summary handleNotify
     * @request DELETE:/paypal/us/notify
     * @originalName usNotify
     * @duplicate
     */
    usNotify4: (params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/paypal/us/notify`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags notify-us-controller
     * @name OptionsPaypal2
     * @summary handleNotify
     * @request OPTIONS:/paypal/us/notify
     * @originalName optionsPaypal
     * @duplicate
     */
    optionsPaypal2: (params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/paypal/us/notify`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notify-us-controller
     * @name UsNotify5
     * @summary handleNotify
     * @request PATCH:/paypal/us/notify
     * @originalName usNotify
     * @duplicate
     */
    usNotify5: (params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/paypal/us/notify`,
        method: "PATCH",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notify-us-controller
     * @name UsTest
     * @summary handleNotifyTest
     * @request POST:/paypal/us/test
     */
    usTest: (jsonParam: Record<string, object>, params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/paypal/us/test`,
        method: "POST",
        body: jsonParam,
        type: ContentType.Json,
        ...params,
      }),
  };
  public = {
    /**
     * No description
     *
     * @tags 配置项-公共配置
     * @name ConfigAfterSaleReasonInsert
     * @summary 售后原因配置-插入
     * @request POST:/public/config/after/sale/reason/insert
     */
    configAfterSaleReasonInsert: (insertVO: AdditionConfigAfterSaleReason, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/public/config/after/sale/reason/insert`,
        method: "POST",
        body: insertVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 配置项-公共配置
     * @name ConfigAfterSaleReasonModifyById
     * @summary 售后原因配置-编辑
     * @request POST:/public/config/after/sale/reason/modifyById
     */
    configAfterSaleReasonModifyById: (updateVO: AdditionConfigAfterSaleReason, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/public/config/after/sale/reason/modifyById`,
        method: "POST",
        body: updateVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 配置项-公共配置
     * @name ConfigAfterSaleReasonSelectList
     * @summary 售后原因配置-列表
     * @request GET:/public/config/after/sale/reason/select/list
     */
    configAfterSaleReasonSelectList: (params: RequestParams = {}) =>
      this.request<BizResponseListAdditionConfigAfterSaleReason, any>({
        path: `/public/config/after/sale/reason/select/list`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 配置项-公共配置
     * @name ConfigGetByType
     * @summary 公共配置-获取
     * @request GET:/public/config/getByType
     */
    configGetByType: (
      query: {
        /** 配置类型 */
        configType: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseAdditionConfigPublicListRespDTO, any>({
        path: `/public/config/getByType`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 配置项-公共配置
     * @name ConfigModifyById
     * @summary 公共配置-编辑
     * @request POST:/public/config/modifyById
     */
    configModifyById: (updateVO: AdditionConfigPublic, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/public/config/modifyById`,
        method: "POST",
        body: updateVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 配置项-公共配置
     * @name ConfigSelectList
     * @summary 公共配置-列表
     * @request GET:/public/config/select/list
     */
    configSelectList: (params: RequestParams = {}) =>
      this.request<BizResponseListAdditionConfigPublic, any>({
        path: `/public/config/select/list`,
        method: "GET",
        ...params,
      }),
  };
  recharge = {
    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerBalanceApply
     * @summary 余额充值-申请
     * @request POST:/recharge/manager/balance/apply
     */
    managerBalanceApply: (applyVO: BalanceRechargeApplyVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/recharge/manager/balance/apply`,
        method: "POST",
        body: applyVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerBalanceAuditAmountCalculate
     * @summary 余额充值-审核-金额计算
     * @request GET:/recharge/manager/balance/audit/amount/calculate/{balanceRechargeId}
     */
    managerBalanceAuditAmountCalculate: (
      balanceRechargeId: number,
      query: {
        /** remittanceAmount */
        remittanceAmount: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBigdecimal, any>({
        path: `/recharge/manager/balance/audit/amount/calculate/${balanceRechargeId}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerBalanceAuditFinal
     * @summary 余额充值-终审
     * @request POST:/recharge/manager/balance/audit/final
     */
    managerBalanceAuditFinal: (auditVO: BalanceRechargeAuditVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/recharge/manager/balance/audit/final`,
        method: "POST",
        body: auditVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerBalanceAuditFirst
     * @summary 余额充值-初审
     * @request POST:/recharge/manager/balance/audit/first
     */
    managerBalanceAuditFirst: (auditVO: BalanceRechargeAuditVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/recharge/manager/balance/audit/first`,
        method: "POST",
        body: auditVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerBalanceExchangeUpdate
     * @summary 充值记录是否需要结汇更新
     * @request POST:/recharge/manager/balance/exchange/update
     */
    managerBalanceExchangeUpdate: (request: BalanceRechargeUpdateVO[], params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/recharge/manager/balance/exchange/update`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerBalanceExport
     * @summary 余额充值-导出
     * @request POST:/recharge/manager/balance/export
     */
    managerBalanceExport: (queryVo: BalanceRechargeQueryVO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/recharge/manager/balance/export`,
        method: "POST",
        body: queryVo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerBalanceInfoGet
     * @summary 充值记录详情
     * @request POST:/recharge/manager/balance/info/get
     */
    managerBalanceInfoGet: (
      query?: {
        /**
         * balanceRechargeId
         * @format int64
         */
        balanceRechargeId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBalanceRecharge, any>({
        path: `/recharge/manager/balance/info/get`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerBalanceLatestInfoGet
     * @summary 获取用户最近充值信息（用于回显）
     * @request GET:/recharge/manager/balance/latest/info/get
     */
    managerBalanceLatestInfoGet: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
        /** payChannel */
        payChannel: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBalanceRecharge, any>({
        path: `/recharge/manager/balance/latest/info/get`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerBalancePayoneerQuery
     * @summary 余额充值-派安盈分页列表
     * @request GET:/recharge/manager/balance/payoneer/query
     */
    managerBalancePayoneerQuery: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
        /** systemSource */
        systemSource: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageBalanceRecharge, any>({
        path: `/recharge/manager/balance/payoneer/query`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerBalanceQuery
     * @summary 余额充值-分页列表
     * @request POST:/recharge/manager/balance/query
     */
    managerBalanceQuery: (queryVo: BalanceRechargeQueryVO, params: RequestParams = {}) =>
      this.request<BizResponsePageBalanceRecharge, any>({
        path: `/recharge/manager/balance/query`,
        method: "POST",
        body: queryVo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerBalanceQueryTotal
     * @summary 余额充值-充值记录数据汇总
     * @request POST:/recharge/manager/balance/query/total
     */
    managerBalanceQueryTotal: (queryVo: BalanceRechargeQueryVO, params: RequestParams = {}) =>
      this.request<BizResponseBalanceRechargeTotalVO, any>({
        path: `/recharge/manager/balance/query/total`,
        method: "POST",
        body: queryVo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerBalanceRechargeDownload
     * @summary 余额充值-下载充值凭证
     * @request GET:/recharge/manager/balance/recharge/download/{balanceRechargeId}
     */
    managerBalanceRechargeDownload: (balanceRechargeId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/recharge/manager/balance/recharge/download/${balanceRechargeId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerBalanceRequestPdf
     * @summary 余额充值申请凭证
     * @request POST:/recharge/manager/balance/request/pdf
     */
    managerBalanceRequestPdf: (request: BalanceRechargeRequestPdfVO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/recharge/manager/balance/request/pdf`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerBalanceSelectList
     * @summary 余额充值-列表
     * @request GET:/recharge/manager/balance/select/list
     */
    managerBalanceSelectList: (
      query?: {
        balanceRechargeStatus?: string;
        /** @format int64 */
        customerId?: number;
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        "sorts[0].asc"?: boolean;
        "sorts[0].field"?: string;
        /** @format int32 */
        startIndex?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageResultBalanceRechargeRespVO, any>({
        path: `/recharge/manager/balance/select/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerBalanceUpdateAuditAmount
     * @summary 余额充值-更新审核金额
     * @request POST:/recharge/manager/balance/update/audit/amount
     */
    managerBalanceUpdateAuditAmount: (request: RechargeUpdateAuditAmountVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/recharge/manager/balance/update/audit/amount`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerBalanceUpdateStatus
     * @summary 余额充值-更新充值单的状态
     * @request POST:/recharge/manager/balance/update/status
     */
    managerBalanceUpdateStatus: (request: RechargeUpdateAuditAmountVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/recharge/manager/balance/update/status`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerBalanceUpdateTime
     * @summary 余额充值-更新财务最终到账时间
     * @request POST:/recharge/manager/balance/update/time
     */
    managerBalanceUpdateTime: (request: RechargeUpdateAuditAmountVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/recharge/manager/balance/update/time`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerBalanceVoucherUpload
     * @summary 余额充值-上传凭证
     * @request POST:/recharge/manager/balance/voucher/upload
     */
    managerBalanceVoucherUpload: (applyVO: BalanceRechargeVoucherApplyVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/recharge/manager/balance/voucher/upload`,
        method: "POST",
        body: applyVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerGetNotifyInfo
     * @summary 获取充值用户的来账通知信息
     * @request POST:/recharge/manager/get/notify/info
     */
    managerGetNotifyInfo: (wfNotifyInfoQueryVO: WFNotifyInfoQueryVO, params: RequestParams = {}) =>
      this.request<BizResponsePageWfNotifyInfo, any>({
        path: `/recharge/manager/get/notify/info`,
        method: "POST",
        body: wfNotifyInfoQueryVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerGetNotifyInfoByFundingId
     * @summary 获取充值用户的来账通知信息
     * @request POST:/recharge/manager/get/notify/info/by/fundingId
     */
    managerGetNotifyInfoByFundingId: (wfNotifyInfoQueryVO: WFNotifyInfoQueryVO, params: RequestParams = {}) =>
      this.request<BizResponseWfNotifyInfo, any>({
        path: `/recharge/manager/get/notify/info/by/fundingId`,
        method: "POST",
        body: wfNotifyInfoQueryVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerHasCanDownloadBalanceRecharge
     * @summary 余额充值-判断是否有票据可以下载
     * @request GET:/recharge/manager/has/can/download/balance/recharge
     */
    managerHasCanDownloadBalanceRecharge: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
        /** systemSource */
        systemSource: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/recharge/manager/has/can/download/balance/recharge`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerNonDoneRechargeCountGet
     * @summary 通过主账号用户id获取未完成的充值订单
     * @request GET:/recharge/manager/non/done/recharge/count/get
     */
    managerNonDoneRechargeCountGet: (
      query: {
        /** customerIds */
        customerIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListBalanceRechargeCustomerIdCountDTO, any>({
        path: `/recharge/manager/non/done/recharge/count/get`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerPaychannelUpdate
     * @summary 充值记录充值渠道更新
     * @request POST:/recharge/manager/paychannel/update
     */
    managerPaychannelUpdate: (request: BalanceRechargeUpdateVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/recharge/manager/paychannel/update`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerQueryOperateLog
     * @summary 获取充值记录的操作日志
     * @request POST:/recharge/manager/query/operate/log
     */
    managerQueryOperateLog: (queryVo: BalanceRechargeQueryVO, params: RequestParams = {}) =>
      this.request<BizResponsePageBalanceRechargeLog, any>({
        path: `/recharge/manager/query/operate/log`,
        method: "POST",
        body: queryVo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name ManagerWfBalanceSubmit
     * @summary 余额充值-WF充值记录提交
     * @request POST:/recharge/manager/wf/balance/submit
     */
    managerWfBalanceSubmit: (applyVO: BalanceRechargeApplyVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/recharge/manager/wf/balance/submit`,
        method: "POST",
        body: applyVO,
        type: ContentType.Json,
        ...params,
      }),
  };
  reconciliation = {
    /**
     * No description
     *
     * @tags 结算中心-对账管理
     * @name ManagementGetByAccountNumber
     * @summary getByAccountNumber
     * @request GET:/reconciliation/management/getByAccountNumber
     */
    managementGetByAccountNumber: (
      query: {
        /** accountNumber */
        accountNumber: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListPayAccountRespDTO, any>({
        path: `/reconciliation/management/getByAccountNumber`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-对账管理
     * @name ManagementPayAccountAccountStatusUpdate
     * @summary 支付账户-对账状态更新
     * @request POST:/reconciliation/management/pay/account/account/status/update
     */
    managementPayAccountAccountStatusUpdate: (vo: PayAccountAccountStatusUpdateVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/reconciliation/management/pay/account/account/status/update`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-对账管理
     * @name ManagementPayAccountAccountNumberListGet
     * @summary 支付账户-通过来源类型和支付账户类型获取支付账户列表
     * @request GET:/reconciliation/management/pay/account/accountNumberList/get
     */
    managementPayAccountAccountNumberListGet: (
      query?: {
        /** 支付账户类型；1：支付宝；2：跨境宝；3：中信；4：农行 */
        accountType?: string;
        /** 来源类型；1：2C；2：2B */
        systemSourceType?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListPayAccountNumberListVO, any>({
        path: `/reconciliation/management/pay/account/accountNumberList/get`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-对账管理
     * @name ManagementPayAccountGetStatusUpdate
     * @summary 支付账户-获取状态更新
     * @request POST:/reconciliation/management/pay/account/get/status/update
     */
    managementPayAccountGetStatusUpdate: (vo: PayAccountGetStatusUpdateVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/reconciliation/management/pay/account/get/status/update`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-对账管理
     * @name ManagementPayAccountGetById
     * @summary 支付账户-通过主键获取详情
     * @request GET:/reconciliation/management/pay/account/getById/{id}
     */
    managementPayAccountGetById: (id: string, params: RequestParams = {}) =>
      this.request<BizResponsePayAccountListVO, any>({
        path: `/reconciliation/management/pay/account/getById/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-对账管理
     * @name ManagementPayAccountInsert
     * @summary 支付账户-插入
     * @request POST:/reconciliation/management/pay/account/insert
     */
    managementPayAccountInsert: (vo: PayAccountInsertVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/reconciliation/management/pay/account/insert`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-对账管理
     * @name ManagementPayAccountQuery
     * @summary 支付账户-分页查询
     * @request POST:/reconciliation/management/pay/account/query
     */
    managementPayAccountQuery: (queryVo: PayAccountQueryVO, params: RequestParams = {}) =>
      this.request<BizResponseIPagePayAccountListVO, any>({
        path: `/reconciliation/management/pay/account/query`,
        method: "POST",
        body: queryVo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-对账管理
     * @name ManagementPayAccountTreeGet
     * @summary 支付账户-获取支付账户树形
     * @request GET:/reconciliation/management/pay/account/tree/get
     */
    managementPayAccountTreeGet: (params: RequestParams = {}) =>
      this.request<BizResponseListPayAccountTreeVO, any>({
        path: `/reconciliation/management/pay/account/tree/get`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-对账管理
     * @name ManagementPayAccountTypeListSelect
     * @summary 支付账户类型
     * @request GET:/reconciliation/management/pay/account/type/list/select
     */
    managementPayAccountTypeListSelect: (params: RequestParams = {}) =>
      this.request<BizResponseListMapStringObject, any>({
        path: `/reconciliation/management/pay/account/type/list/select`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-对账管理
     * @name ManagementPayAccountUpdateById
     * @summary 支付账户-更新
     * @request POST:/reconciliation/management/pay/account/updateById
     */
    managementPayAccountUpdateById: (vo: PayAccountUpdateVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/reconciliation/management/pay/account/updateById`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-对账管理
     * @name ManagementPayFlowExcelImport
     * @summary 支付流水-导入新
     * @request POST:/reconciliation/management/pay/flow/excel/import
     */
    managementPayFlowExcelImport: (
      query: {
        /** accountType */
        accountType: string;
        /** systemSource */
        systemSource: string;
      },
      data: {
        /** file */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseString, any>({
        path: `/reconciliation/management/pay/flow/excel/import`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-对账管理
     * @name ManagementPayFlowExcelImportNew
     * @summary 支付流水-导入最新版本
     * @request POST:/reconciliation/management/pay/flow/excel/import/new
     */
    managementPayFlowExcelImportNew: (
      query: {
        /** accountType */
        accountType: string;
        /** systemSource */
        systemSource: string;
      },
      data: {
        /** file */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListPayFlow, any>({
        path: `/reconciliation/management/pay/flow/excel/import/new`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-对账管理
     * @name ManagementPayFlowExcelImportOld
     * @summary 支付流水-导入旧
     * @request POST:/reconciliation/management/pay/flow/excel/import/old
     */
    managementPayFlowExcelImportOld: (
      query: {
        /** accountType */
        accountType: string;
        /** systemSource */
        systemSource: string;
      },
      data: {
        /** file */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseString, any>({
        path: `/reconciliation/management/pay/flow/excel/import/old`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-对账管理
     * @name ManagementPayFlowExportExcel
     * @summary 支付流水-导出
     * @request GET:/reconciliation/management/pay/flow/export/excel
     */
    managementPayFlowExportExcel: (
      query?: {
        accountNumberList?: string[];
        /** @format date-time */
        tradeTimeBegin?: string;
        /** @format date-time */
        tradeTimeEnd?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/reconciliation/management/pay/flow/export/excel`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-对账管理
     * @name ManagementPayFlowQuery
     * @summary 支付流水-分页查询
     * @request POST:/reconciliation/management/pay/flow/query
     */
    managementPayFlowQuery: (queryVo: PayFlowQueryVO, params: RequestParams = {}) =>
      this.request<BizResponseIPagePayFlowListVO, any>({
        path: `/reconciliation/management/pay/flow/query`,
        method: "POST",
        body: queryVo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-对账管理
     * @name ManagementPayFlowStatisticsDetailsQuery
     * @summary 流水对账汇总-明细
     * @request POST:/reconciliation/management/pay/flow/statistics/details/query
     */
    managementPayFlowStatisticsDetailsQuery: (queryVO: PayFlowStatisticsDetailsQueryVO, params: RequestParams = {}) =>
      this.request<BizResponsePagePayFlowListVO, any>({
        path: `/reconciliation/management/pay/flow/statistics/details/query`,
        method: "POST",
        body: queryVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-对账管理
     * @name ManagementPayFlowStatisticsDetailsStatusUpdate
     * @summary 支付流水-手动对账
     * @request POST:/reconciliation/management/pay/flow/statistics/details/status/update
     */
    managementPayFlowStatisticsDetailsStatusUpdate: (flowIdListVo: number[], params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/reconciliation/management/pay/flow/statistics/details/status/update`,
        method: "POST",
        body: flowIdListVo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-对账管理
     * @name ManagementPayFlowStatisticsDetailsStatusUpdateNew
     * @summary 支付流水-手动对账
     * @request POST:/reconciliation/management/pay/flow/statistics/details/status/update/new
     */
    managementPayFlowStatisticsDetailsStatusUpdateNew: (
      payFlowUpdateVoList: PayFlowUpdateVo[],
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/reconciliation/management/pay/flow/statistics/details/status/update/new`,
        method: "POST",
        body: payFlowUpdateVoList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-对账管理
     * @name ManagementPayFlowStatisticsQuery
     * @summary 流水对账汇总-分页查询
     * @request POST:/reconciliation/management/pay/flow/statistics/query
     */
    managementPayFlowStatisticsQuery: (queryVo: PayFlowStatisticsQueryVO, params: RequestParams = {}) =>
      this.request<BizResponsePagePayFlowStatisticsListVO, any>({
        path: `/reconciliation/management/pay/flow/statistics/query`,
        method: "POST",
        body: queryVo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-对账管理
     * @name ManagementPayFlowUpdateHistoryData
     * @summary 支付流水-更新历史数据的采购单号或异常采购单号
     * @request POST:/reconciliation/management/pay/flow/update/history/data
     */
    managementPayFlowUpdateHistoryData: (queryVo: PayFlowQueryVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/reconciliation/management/pay/flow/update/history/data`,
        method: "POST",
        body: queryVo,
        type: ContentType.Json,
        ...params,
      }),
  };
  refund = {
    /**
     * No description
     *
     * @tags 结算中心-退款管理
     * @name ManagerRefundCustomerApply
     * @summary 用户退款申请
     * @request POST:/refund/manager/refund/customer/apply
     */
    managerRefundCustomerApply: (applyVO: RefundCustomerApplyVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/refund/manager/refund/customer/apply`,
        method: "POST",
        body: applyVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-退款管理
     * @name ManagerRefundCustomerAuditFinal
     * @summary 用户退款-终审
     * @request POST:/refund/manager/refund/customer/audit/final
     */
    managerRefundCustomerAuditFinal: (updateVO: RefundCustomerAuditUpdateVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/refund/manager/refund/customer/audit/final`,
        method: "POST",
        body: updateVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-退款管理
     * @name ManagerRefundCustomerAuditFirst
     * @summary 用户退款-初审
     * @request POST:/refund/manager/refund/customer/audit/first
     */
    managerRefundCustomerAuditFirst: (updateVO: RefundCustomerAuditUpdateVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/refund/manager/refund/customer/audit/first`,
        method: "POST",
        body: updateVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-退款管理
     * @name ManagerRefundCustomerCancel
     * @summary cancelRefundCustomer
     * @request POST:/refund/manager/refund/customer/cancel
     */
    managerRefundCustomerCancel: (cancelDTO: RefundCustomerCancelDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/refund/manager/refund/customer/cancel`,
        method: "POST",
        body: cancelDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-退款管理
     * @name ManagerRefundCustomerQuery
     * @summary 用户退款-分页查询
     * @request POST:/refund/manager/refund/customer/query
     */
    managerRefundCustomerQuery: (queryVo: RefundCustomerQueryVO, params: RequestParams = {}) =>
      this.request<BizResponsePageRefundCustomerListVO, any>({
        path: `/refund/manager/refund/customer/query`,
        method: "POST",
        body: queryVo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-退款管理
     * @name ManagerRefundCustomerRepayment
     * @summary 用户退款-返金
     * @request POST:/refund/manager/refund/customer/repayment
     */
    managerRefundCustomerRepayment: (repaymentVO: RefundCustomerRepaymentVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/refund/manager/refund/customer/repayment`,
        method: "POST",
        body: repaymentVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-退款管理
     * @name ManagerRefundCustomerResultQuery
     * @summary queryRefundCustomer
     * @request POST:/refund/manager/refund/customer/result/query
     */
    managerRefundCustomerResultQuery: (queryVO: RefundCustomerQueryVO, params: RequestParams = {}) =>
      this.request<BizResponseRefundCustomerResultVO, any>({
        path: `/refund/manager/refund/customer/result/query`,
        method: "POST",
        body: queryVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-退款管理
     * @name ManagerRefundSupplierApply
     * @summary 供应商退款-申请
     * @request POST:/refund/manager/refund/supplier/apply
     */
    managerRefundSupplierApply: (applyVO: RefundSupplierApplyVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/refund/manager/refund/supplier/apply`,
        method: "POST",
        body: applyVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-退款管理
     * @name ManagerRefundSupplierQuery
     * @summary 供应商退款-分页查询
     * @request POST:/refund/manager/refund/supplier/query
     */
    managerRefundSupplierQuery: (queryVo: RefundSupplierQueryVO, params: RequestParams = {}) =>
      this.request<BizResponsePageRefundSupplierListVO, any>({
        path: `/refund/manager/refund/supplier/query`,
        method: "POST",
        body: queryVo,
        type: ContentType.Json,
        ...params,
      }),
  };
  selling = {
    /**
     * No description
     *
     * @tags 结算中心-配置项-销售价配置
     * @name PriceAddMembershipRate
     * @summary 保存精选货源折扣价信息
     * @request POST:/selling/price/addMembershipRate
     */
    priceAddMembershipRate: (reqDTO: SellingPriceMembershipRateSaveReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/selling/price/addMembershipRate`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-销售价配置
     * @name PriceInfo
     * @summary 详情
     * @request GET:/selling/price/info
     */
    priceInfo: (
      query: {
        /**
         * id
         * @format int64
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseSellingPriceMembershipRateRespDTO, any>({
        path: `/selling/price/info`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-销售价配置
     * @name PriceListByMembershipRateRespDto
     * @summary 精选货源折扣价信息
     * @request GET:/selling/price/listByMembershipRateRespDTO
     */
    priceListByMembershipRateRespDto: (
      query: {
        /** stationCode */
        stationCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListSellingPriceMembershipRateRespDTO, any>({
        path: `/selling/price/listByMembershipRateRespDTO`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-销售价配置
     * @name PriceQuery
     * @summary 销售价配置-分页列表
     * @request GET:/selling/price/query
     */
    priceQuery: (params: RequestParams = {}) =>
      this.request<BizResponsePageAdditionConfigSellingPriceListVO, any>({
        path: `/selling/price/query`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-销售价配置
     * @name PriceSettingAddOne
     * @summary 销售价配置设置(非运费配置)-添加
     * @request POST:/selling/price/setting/addOne
     */
    priceSettingAddOne: (add: AdditionConfigSellingPriceSettingAddVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/selling/price/setting/addOne`,
        method: "POST",
        body: add,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-销售价配置
     * @name PriceSettingBatchSwitchStatus
     * @summary 销售价设置-批量启用/禁用
     * @request POST:/selling/price/setting/batchSwitchStatus
     */
    priceSettingBatchSwitchStatus: (reqDTO: BatchSwitchStatusReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/selling/price/setting/batchSwitchStatus`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-销售价配置
     * @name PriceSettingDeleteById
     * @summary 销售价设置-通过主键删除
     * @request POST:/selling/price/setting/deleteById/{settingId}
     */
    priceSettingDeleteById: (settingId: number, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/selling/price/setting/deleteById/${settingId}`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-销售价配置
     * @name PriceSettingGetById
     * @summary 销售价设置-通过主键获取详情
     * @request GET:/selling/price/setting/getById/{settingId}
     */
    priceSettingGetById: (settingId: string, params: RequestParams = {}) =>
      this.request<BizResponseAdditionConfigSellingPriceSettingUpdateVO, any>({
        path: `/selling/price/setting/getById/${settingId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-销售价配置
     * @name PriceSettingInsertOrUpdateFreightConfig
     * @summary 销售价配置设置-添加或者更新运费配置
     * @request POST:/selling/price/setting/insertOrUpdateFreightConfig
     */
    priceSettingInsertOrUpdateFreightConfig: (
      add: AdditionConfigSellingPriceSettingFreightConfigUpsertVO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/selling/price/setting/insertOrUpdateFreightConfig`,
        method: "POST",
        body: add,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-销售价配置
     * @name PriceSettingLogList
     * @summary 销售价设置-查询日志
     * @request GET:/selling/price/setting/logList/{settingId}
     */
    priceSettingLogList: (settingId: string, params: RequestParams = {}) =>
      this.request<BizResponseListAdditionConfigSellingPriceSettingLog, any>({
        path: `/selling/price/setting/logList/${settingId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-销售价配置
     * @name PriceSettingQueryBySellingPriceId
     * @summary 销售价设置-通过销售价配置主键获取设置分页列表
     * @request POST:/selling/price/setting/queryBySellingPriceId
     */
    priceSettingQueryBySellingPriceId: (
      queryDTO: AdditionConfigSellingPriceSettingQueryDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageAdditionConfigSellingPriceSettingListVO, any>({
        path: `/selling/price/setting/queryBySellingPriceId`,
        method: "POST",
        body: queryDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-销售价配置
     * @name PriceSettingUpdateById
     * @summary 销售价设置(非运费配置)-更新
     * @request POST:/selling/price/setting/updateById
     */
    priceSettingUpdateById: (update: AdditionConfigSellingPriceSettingUpdateVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/selling/price/setting/updateById`,
        method: "POST",
        body: update,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-配置项-销售价配置
     * @name PriceUpdateMembershipRate
     * @summary 修改精选货源折扣价信息
     * @request POST:/selling/price/updateMembershipRate
     */
    priceUpdateMembershipRate: (reqDTO: SellingPriceMembershipRateSaveReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/selling/price/updateMembershipRate`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  test = {
    /**
     * No description
     *
     * @tags test-controller
     * @name AdditionBalanceChange
     * @summary 测试附加项接口
     * @request POST:/test/addition/balance/change
     */
    additionBalanceChange: (additionEventDTO: AdditionEventDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/test/addition/balance/change`,
        method: "POST",
        body: additionEventDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name AlipayPayflowJob
     * @summary 支付宝拉取流水测试
     * @request POST:/test/alipay/payflow/job
     */
    alipayPayflowJob: (payFlowTestVO: PayFlowTestVO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/test/alipay/payflow/job`,
        method: "POST",
        body: payFlowTestVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name AlipayPayflowJobHistory
     * @summary 支付宝拉取流水测试
     * @request POST:/test/alipay/payflow/job/history
     */
    alipayPayflowJobHistory: (payFlowTestVO: PayFlowTestVO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/test/alipay/payflow/job/history`,
        method: "POST",
        body: payFlowTestVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name PostTest
     * @summary 日采购退款对账的job测试
     * @request POST:/test/api
     */
    postTest: (walletChangeEventDTO: WalletChangeEventDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/test/api`,
        method: "POST",
        body: walletChangeEventDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name BalanceCallback
     * @summary 日采购退款对账的job测试
     * @request POST:/test/balance/callback
     */
    balanceCallback: (event: WalletChangeEventDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/test/balance/callback`,
        method: "POST",
        body: event,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name Callback
     * @summary callback
     * @request POST:/test/callback
     */
    callback: (resultEventDTO: WalletChangeResultEventDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/test/callback`,
        method: "POST",
        body: resultEventDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name CancelBalanceRecharge
     * @summary 撤销充值记录
     * @request POST:/test/cancel/balance/recharge
     */
    cancelBalanceRecharge: (payFlowTestVO: PayFlowTestVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/test/cancel/balance/recharge`,
        method: "POST",
        body: payFlowTestVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name CheckDto
     * @summary 运费重量测试
     * @request POST:/test/check/dto
     */
    checkDto: (dto: WalletChangeResultEventDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/test/check/dto`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name DeleteRedisKey
     * @summary 运费重量测试
     * @request GET:/test/delete/redis/key
     */
    deleteRedisKey: (
      query?: {
        /** key */
        key?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/test/delete/redis/key`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name GetNacosData
     * @summary 测试接口数据
     * @request GET:/test/get/nacos/data
     */
    getNacosData: (params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/test/get/nacos/data`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name GetPaypalNacosData
     * @summary 测试接口数据
     * @request GET:/test/get/paypal/nacos/data
     */
    getPaypalNacosData: (params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/test/get/paypal/nacos/data`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name GetWeightAmount
     * @summary 运费重量测试
     * @request POST:/test/get/weight/amount
     */
    getWeightAmount: (contentRespDTO: IntShipContentRespDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/test/get/weight/amount`,
        method: "POST",
        body: contentRespDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name GetWeightAmountById
     * @summary 运费重量测试
     * @request GET:/test/get/weight/amount/by/id
     */
    getWeightAmountById: (
      query: {
        /**
         * intShipConfigId
         * @format int64
         */
        intShipConfigId: number;
        /** isApproximation */
        isApproximation: boolean;
        /** weight */
        weight: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/test/get/weight/amount/by/id`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name HandleNotify
     * @summary 处理来账请求
     * @request POST:/test/handle/notify
     */
    handleNotify: (wfNotifyRequestVo: WFNotifyRequestVo, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/test/handle/notify`,
        method: "POST",
        body: wfNotifyRequestVo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name HandleNotifyBatch
     * @summary 处理来账请求
     * @request POST:/test/handle/notify/batch
     */
    handleNotifyBatch: (wfNotifyRequestVo: WFNotifyRequestVo, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/test/handle/notify/batch`,
        method: "POST",
        body: wfNotifyRequestVo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name InitAlipayPayflowJobHistory
     * @summary 修补支付宝历史数据测试
     * @request POST:/test/init/alipay/payflow/job/history
     */
    initAlipayPayflowJobHistory: (payFlowTestVO: PayFlowTestVO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/test/init/alipay/payflow/job/history`,
        method: "POST",
        body: payFlowTestVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name OrderResultNotify
     * @summary 订单审核通知消息
     * @request POST:/test/order/result/notify
     */
    orderResultNotify: (wfNotifyRequestVo: WFAssociationNotifyVo, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/test/order/result/notify`,
        method: "POST",
        body: wfNotifyRequestVo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name Retry
     * @summary retry
     * @request POST:/test/retry
     */
    retry: (payFlowTestVO: PayFlowTestVO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/test/retry`,
        method: "POST",
        body: payFlowTestVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name SmcTest
     * @summary 测试附加项接口
     * @request GET:/test/smc/test
     */
    smcTest: (
      query: {
        /** bizId */
        bizId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/test/smc/test`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name StatisticsFailPayflowJob
     * @summary 日统计对账失败流水job测试
     * @request POST:/test/statistics/fail/payflow/job
     */
    statisticsFailPayflowJob: (payFlowTestVO: PayFlowTestVO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/test/statistics/fail/payflow/job`,
        method: "POST",
        body: payFlowTestVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name StatisticsPayflowCheck
     * @summary 日统计流水job测试
     * @request POST:/test/statistics/payflow/check
     */
    statisticsPayflowCheck: (payFlowTestVO: PayFlowTestVO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/test/statistics/payflow/check`,
        method: "POST",
        body: payFlowTestVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name StatisticsPayflowCheckJob
     * @summary 日统计流水job测试
     * @request POST:/test/statistics/payflow/check/job
     */
    statisticsPayflowCheckJob: (
      query?: {
        /** date */
        date?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/test/statistics/payflow/check/job`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name StatisticsPayflowJob
     * @summary 日统计流水job测试
     * @request POST:/test/statistics/payflow/job
     */
    statisticsPayflowJob: (payFlowTestVO: PayFlowTestVO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/test/statistics/payflow/job`,
        method: "POST",
        body: payFlowTestVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name SyncRate
     * @summary 测试同步汇率
     * @request GET:/test/sync/rate
     */
    syncRate: (
      query?: {
        /** date */
        date?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/test/sync/rate`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name Test
     * @summary test
     * @request GET:/test/test
     */
    test: (
      query?: {
        /** date */
        date?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/test/test`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name TestCc
     * @summary 测试组合完成
     * @request POST:/test/testCC
     */
    testCc: (params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/test/testCC`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name TestLock
     * @summary 测试加锁
     * @request GET:/test/testLock
     */
    testLock: (
      query?: {
        /**
         * id参数
         * @format int64
         */
        id?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/test/testLock`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name TestRecharge
     * @summary 充值回调接口手动
     * @request GET:/test/testRecharge
     */
    testRecharge: (
      query: {
        /** creditPaymentOption */
        creditPaymentOption: boolean;
        /**
         * walletRechargeOrderId
         * @format int64
         */
        walletRechargeOrderId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/test/testRecharge`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name UsShipInit
     * @summary 初始化美国站物流
     * @request GET:/test/us/ship/init
     */
    usShipInit: (params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/test/us/ship/init`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name WfFailPayflowJob
     * @summary 日采购退款对账的job测试
     * @request POST:/test/wf/fail/payflow/job
     */
    wfFailPayflowJob: (payFlowTestVO: PayFlowTestVO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/test/wf/fail/payflow/job`,
        method: "POST",
        body: payFlowTestVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name WfPullWriteOffPayflow
     * @summary 日采购退款对账的job测试
     * @request POST:/test/wf/pull/write/off/payflow
     */
    wfPullWriteOffPayflow: (payFlowTestVO: PayFlowTestVO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/test/wf/pull/write/off/payflow`,
        method: "POST",
        body: payFlowTestVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name WfSubmitOrder
     * @summary 关联订单接口测试
     * @request POST:/test/wf/submit/order
     */
    wfSubmitOrder: (requestDTO: WfAssociateOrderRequestDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/test/wf/submit/order`,
        method: "POST",
        body: requestDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags test-controller
     * @name ZfbDoReconciliate
     * @summary 运费重量测试
     * @request GET:/test/zfb/do/reconciliate
     */
    zfbDoReconciliate: (params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/test/zfb/do/reconciliate`,
        method: "GET",
        ...params,
      }),
  };
  transportationAttributes = {
    /**
     * No description
     *
     * @tags 运输属性
     * @name PostTransportationAttributes
     * @summary 运输属性新增接口
     * @request POST:/transportationAttributes/add
     */
    postTransportationAttributes: (dto: AddTransportationAttributesDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/transportationAttributes/add`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运输属性
     * @name Edit
     * @summary 运输属性编辑接口
     * @request POST:/transportationAttributes/edit
     */
    edit: (dto: EditTransportationAttributesDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/transportationAttributes/edit`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运输属性
     * @name GetByAbnormalCode
     * @summary 通过异常原因查询属性
     * @request GET:/transportationAttributes/getByAbnormalCode
     */
    getByAbnormalCode: (
      query: {
        /** abnormalReasonCodeList */
        abnormalReasonCodeList: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListTransportationAttributesRespDTO, any>({
        path: `/transportationAttributes/getByAbnormalCode`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运输属性
     * @name List
     * @summary 运输属性列表
     * @request POST:/transportationAttributes/list
     */
    list: (params: RequestParams = {}) =>
      this.request<BizResponseListTransportationAttributesRespDTO, any>({
        path: `/transportationAttributes/list`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 运输属性
     * @name Page
     * @summary 运输属性分页列表
     * @request POST:/transportationAttributes/page
     */
    page: (dto: TransportationAttributesPageDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageTransportationAttributesRespDTO, any>({
        path: `/transportationAttributes/page`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),
  };
  wallet = {
    /**
     * No description
     *
     * @tags 用户钱包
     * @name AddCustomerWallet
     * @summary addCustomerWallet
     * @request POST:/wallet/addCustomerWallet
     */
    addCustomerWallet: (reqDTO: CustomerWalletAddReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/wallet/addCustomerWallet`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 金额变动类型
     * @name AmountTypeGetAmountTypeList
     * @summary 获取金额变动类型
     * @request GET:/wallet/amountType/getAmountTypeList
     */
    amountTypeGetAmountTypeList: (params: RequestParams = {}) =>
      this.request<BizResponseListAmountType, any>({
        path: `/wallet/amountType/getAmountTypeList`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户钱包
     * @name BalanceChange
     * @summary changeAmount
     * @request POST:/wallet/balance/change
     */
    balanceChange: (walletChangeEventDTO: WalletChangeEventDTO, params: RequestParams = {}) =>
      this.request<BizResponseLong, any>({
        path: `/wallet/balance/change`,
        method: "POST",
        body: walletChangeEventDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户钱包
     * @name CustomerGetArrearageDeliveryTaskAmount
     * @summary 查询仓库结算异常国际发货单数量
     * @request GET:/wallet/customer/getArrearageDeliveryTaskAmount
     */
    customerGetArrearageDeliveryTaskAmount: (
      query: {
        /**
         * customerShopId
         * @format int64
         */
        customerShopId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseInt, any>({
        path: `/wallet/customer/getArrearageDeliveryTaskAmount`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户钱包
     * @name DownloadFundDetailByPlatformOrderNo
     * @summary 订单资金明细下载
     * @request POST:/wallet/download/FundDetailByPlatformOrderNo
     */
    downloadFundDetailByPlatformOrderNo: (req: CustomerWalletFundFlowDetailsRespDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/wallet/download/FundDetailByPlatformOrderNo`,
        method: "POST",
        body: req,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户钱包
     * @name ExportMainCustomerFundFlow
     * @summary 导出主账号消费记录
     * @request POST:/wallet/exportMainCustomerFundFlow
     */
    exportMainCustomerFundFlow: (reqDTO: CustomerWalletFundFlowReqDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/wallet/exportMainCustomerFundFlow`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户钱包
     * @name ExportShopFundFlow
     * @summary 导出店铺消费记录
     * @request POST:/wallet/exportShopFundFlow
     */
    exportShopFundFlow: (reqDTO: CustomerWalletFundFlowReqDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/wallet/exportShopFundFlow`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-wallet-fund-flow-controller
     * @name FundFlowExportQingQiuShu
     * @summary 下载请求书
     * @request GET:/wallet/fund/flow/exportQingQiuShu
     */
    fundFlowExportQingQiuShu: (
      query?: {
        /** 平台订单编号 */
        platformOrderNo?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/wallet/fund/flow/exportQingQiuShu`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-wallet-fund-flow-controller
     * @name FundFlowFeeTypeList
     * @summary 获取国际发货单资金明细详情
     * @request GET:/wallet/fund/flow/feeType/list
     */
    fundFlowFeeTypeList: (params: RequestParams = {}) =>
      this.request<BizResponseListLableValue, any>({
        path: `/wallet/fund/flow/feeType/list`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-wallet-fund-flow-controller
     * @name FundFlowInternationalExpressGet
     * @summary 获取国际发货单资金明细详情
     * @request GET:/wallet/fund/flow/international/express/get
     */
    fundFlowInternationalExpressGet: (
      query: {
        /** deliverOrderNo */
        deliverOrderNo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerWalletFundFlowExpressInfoRespDTO, any>({
        path: `/wallet/fund/flow/international/express/get`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户钱包
     * @name GetCustomerUnCheckMoney
     * @summary 获取账户未入账金额
     * @request GET:/wallet/getCustomerUnCheckMoney
     */
    getCustomerUnCheckMoney: (params: RequestParams = {}) =>
      this.request<BizResponseCustomerUnCheckMoneyVO, any>({
        path: `/wallet/getCustomerUnCheckMoney`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户钱包
     * @name GetCustomerWallet
     * @summary getCustomerWallet
     * @request GET:/wallet/getCustomerWallet
     */
    getCustomerWallet: (
      query?: {
        /**
         * 店铺钱包
         * @format int64
         */
        customerShopId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerWalletRespDTO, any>({
        path: `/wallet/getCustomerWallet`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户钱包
     * @name GetCustomerWalletList
     * @summary 获取子店铺钱包列表
     * @request GET:/wallet/getCustomerWalletList
     */
    getCustomerWalletList: (params: RequestParams = {}) =>
      this.request<BizResponseListCustomerWalletRespDTO, any>({
        path: `/wallet/getCustomerWalletList`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户钱包
     * @name GetFlowOneById
     * @summary 店铺消费记录详情
     * @request GET:/wallet/getFlowOneById
     */
    getFlowOneById: (
      query?: {
        /**
         * 详情ID
         * @format int64
         */
        id?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerWalletFundFlowInfoRespDTO, any>({
        path: `/wallet/getFlowOneById`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户钱包
     * @name GetFundDetailByPlatformOrderNo
     * @summary 订单资金明细详情
     * @request GET:/wallet/getFundDetailByPlatformOrderNo
     */
    getFundDetailByPlatformOrderNo: (
      query?: {
        /** 平台订单编号 */
        platformOrderNo?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerWalletFundFlowDetailsRespDTO, any>({
        path: `/wallet/getFundDetailByPlatformOrderNo`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户钱包
     * @name GetFundFlowInfo
     * @summary getFundFlowInfo
     * @request POST:/wallet/getFundFlowInfo
     */
    getFundFlowInfo: (reqDTO: FundFlowInfoReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListCustomerWalletFundFlowInfoRespDTO, any>({
        path: `/wallet/getFundFlowInfo`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户钱包
     * @name GetFundFlowRespDto
     * @summary 获取费用类型
     * @request GET:/wallet/getFundFlowRespDTO
     */
    getFundFlowRespDto: (params: RequestParams = {}) =>
      this.request<BizResponseListFundFlowRespDTO, any>({
        path: `/wallet/getFundFlowRespDTO`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户钱包
     * @name GetMainCustomerWallet
     * @summary 获取主账户钱包
     * @request GET:/wallet/getMainCustomerWallet
     */
    getMainCustomerWallet: (params: RequestParams = {}) =>
      this.request<BizResponseCustomerWalletRespDTO, any>({
        path: `/wallet/getMainCustomerWallet`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户钱包
     * @name GroupByFlowOrderNo
     * @summary groupByFlowOrderNo
     * @request POST:/wallet/groupByFlowOrderNo
     */
    groupByFlowOrderNo: (orderNoList: string[], params: RequestParams = {}) =>
      this.request<BizResponseListWalletFundFlowGroupOrderNoDTO, any>({
        path: `/wallet/groupByFlowOrderNo`,
        method: "POST",
        body: orderNoList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户钱包
     * @name ListCustomerWallet
     * @summary getCustomerWalletList
     * @request POST:/wallet/listCustomerWallet
     */
    listCustomerWallet: (customerShopIdList: number[], params: RequestParams = {}) =>
      this.request<BizResponseListCustomerWalletRespDTO, any>({
        path: `/wallet/listCustomerWallet`,
        method: "POST",
        body: customerShopIdList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钱包充值订单
     * @name OrderCapturePaypal
     * @summary paypal capture order。（前台）
     * @request GET:/wallet/order/capture/paypal
     */
    orderCapturePaypal: (
      query: {
        /** needValid */
        needValid: boolean;
        /** payPalOrderId */
        payPalOrderId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BaseResponse, any>({
        path: `/wallet/order/capture/paypal`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钱包充值订单
     * @name OrderCapturePaypalCredit
     * @summary paypal capture order credit。（前台）
     * @request GET:/wallet/order/capture/paypal/credit
     */
    orderCapturePaypalCredit: (
      query: {
        /** authorizationId */
        authorizationId: string;
        /** creditPaymentOption */
        creditPaymentOption: boolean;
        /** needValid */
        needValid: boolean;
        /** payPalOrderId */
        payPalOrderId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BaseResponse, any>({
        path: `/wallet/order/capture/paypal/credit`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钱包充值订单
     * @name OrderCreate
     * @summary 创建订单。（前台）
     * @request POST:/wallet/order/create
     */
    orderCreate: (orderCreateDTO: RechargeOrderCreateDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/wallet/order/create`,
        method: "POST",
        body: orderCreateDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钱包充值订单
     * @name OrderCreatePaypal
     * @summary paypal创建订单。（前台）
     * @request POST:/wallet/order/create/paypal
     */
    orderCreatePaypal: (onlineOrderCreateDTO: OnlineOrderCreateDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/wallet/order/create/paypal`,
        method: "POST",
        body: onlineOrderCreateDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钱包充值订单
     * @name OrderFailedPaypal
     * @summary paypal充值失败调用
     * @request POST:/wallet/order/failed/paypal
     */
    orderFailedPaypal: (failedPayPalDTOS: FailedPayPalDTO[], params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/wallet/order/failed/paypal`,
        method: "POST",
        body: failedPayPalDTOS,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钱包充值订单
     * @name OrderPayoneerCreate
     * @summary payoneer创建订单（前台）
     * @request POST:/wallet/order/payoneer/create
     */
    orderPayoneerCreate: (dto: PayoneerRechargeOrderCreateDTO, params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/wallet/order/payoneer/create`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钱包充值订单
     * @name OrderPayoneerDelete
     * @summary payoneer删除（前台）
     * @request POST:/wallet/order/payoneer/delete
     */
    orderPayoneerDelete: (
      query?: {
        /**
         * walletRechargeOrderId
         * @format int64
         */
        walletRechargeOrderId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/wallet/order/payoneer/delete`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钱包充值订单
     * @name OrderPayoneerPayoneerUploadImg
     * @summary payoneer上传付款截图（前台）
     * @request POST:/wallet/order/payoneer/payoneerUploadImg
     */
    orderPayoneerPayoneerUploadImg: (dto: PayoneerUploadImgDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/wallet/order/payoneer/payoneerUploadImg`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钱包充值订单
     * @name OrderPayoneerStartReceiveMoney
     * @summary payoneer发起收款（后台）
     * @request POST:/wallet/order/payoneer/startReceiveMoney
     */
    orderPayoneerStartReceiveMoney: (
      query?: {
        /**
         * walletRechargeOrderId
         * @format int64
         */
        walletRechargeOrderId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/wallet/order/payoneer/startReceiveMoney`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钱包充值订单
     * @name OrderPaypalGenerateToken
     * @summary 获取paypal客户端token
     * @request POST:/wallet/order/paypal/generate/token
     */
    orderPaypalGenerateToken: (params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/wallet/order/paypal/generate/token`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钱包充值订单
     * @name OrderPaypalPaymentAuthorize
     * @summary 存卡paypal授权支付
     * @request POST:/wallet/order/paypal/payment/authorize
     */
    orderPaypalPaymentAuthorize: (authorizePaymentCaptureDTO: AuthorizePaymentCaptureDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/wallet/order/paypal/payment/authorize`,
        method: "POST",
        body: authorizePaymentCaptureDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钱包充值订单
     * @name OrderPaypalPaymentAuthorizeWeb
     * @summary 存卡paypal授权支付（前台）
     * @request POST:/wallet/order/paypal/payment/authorize/web
     */
    orderPaypalPaymentAuthorizeWeb: (
      authorizePaymentCaptureDTO: AuthorizePaymentCaptureDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/wallet/order/paypal/payment/authorize/web`,
        method: "POST",
        body: authorizePaymentCaptureDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钱包充值订单
     * @name OrderPaypalPaymentCreate
     * @summary 存卡paypal订单创建
     * @request POST:/wallet/order/paypal/payment/create
     */
    orderPaypalPaymentCreate: (authorizePaymentOrderDTO: AuthorizePaymentOrderDTO, params: RequestParams = {}) =>
      this.request<BizResponseCreatePaymentOrderRespDTO, any>({
        path: `/wallet/order/paypal/payment/create`,
        method: "POST",
        body: authorizePaymentOrderDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钱包充值订单
     * @name OrderPaypalPaymentCreateWeb
     * @summary 存卡paypal订单创建（前台）
     * @request POST:/wallet/order/paypal/payment/create/web
     */
    orderPaypalPaymentCreateWeb: (authorizePaymentOrderDTO: AuthorizePaymentOrderDTO, params: RequestParams = {}) =>
      this.request<BizResponseCreatePaymentOrderRespDTO, any>({
        path: `/wallet/order/paypal/payment/create/web`,
        method: "POST",
        body: authorizePaymentOrderDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钱包充值订单
     * @name OrderPaypalPaymentTokenAcquire
     * @summary 获取paypal卡支付token
     * @request POST:/wallet/order/paypal/payment/token/acquire
     */
    orderPaypalPaymentTokenAcquire: (params: RequestParams = {}) =>
      this.request<BizResponseCustomerPaymentTokenDTO, any>({
        path: `/wallet/order/paypal/payment/token/acquire`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钱包充值订单
     * @name OrderPaypalPaymentTokenDefault
     * @summary 默认开关paypal卡支付token
     * @request POST:/wallet/order/paypal/payment/token/default
     */
    orderPaypalPaymentTokenDefault: (
      query?: {
        /**
         * creditCardId
         * @format int64
         */
        creditCardId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/wallet/order/paypal/payment/token/default`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钱包充值订单
     * @name OrderPaypalPaymentTokenDelete
     * @summary 删除paypal卡支付token
     * @request POST:/wallet/order/paypal/payment/token/delete
     */
    orderPaypalPaymentTokenDelete: (
      query?: {
        /**
         * creditCardId
         * @format int64
         */
        creditCardId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/wallet/order/paypal/payment/token/delete`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钱包充值订单
     * @name OrderPaypalPaymentTokenSave
     * @summary 保存paypal卡支付token
     * @request POST:/wallet/order/paypal/payment/token/save
     */
    orderPaypalPaymentTokenSave: (params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/wallet/order/paypal/payment/token/save`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户钱包
     * @name QueryFundFlow
     * @summary 查看店铺消费记录
     * @request POST:/wallet/queryFundFlow
     */
    queryFundFlow: (reqDTO: CustomerWalletFundFlowReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerWalletFundFlowRespDTO, any>({
        path: `/wallet/queryFundFlow`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 余额充值会员
     * @name RechargeMembershipAutoComplete
     * @summary 自动补全客户续费信息
     * @request GET:/wallet/recharge/membership/autoComplete
     */
    rechargeMembershipAutoComplete: (params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/wallet/recharge/membership/autoComplete`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 余额充值会员
     * @name RechargeMembershipAutoPrecharge
     * @summary 自动生效
     * @request GET:/wallet/recharge/membership/autoPrecharge
     */
    rechargeMembershipAutoPrecharge: (
      query?: {
        /**
         * membershipWalletPrechargeOrderId
         * @format int64
         */
        membershipWalletPrechargeOrderId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/wallet/recharge/membership/autoPrecharge`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 余额充值会员
     * @name RechargeMembershipAutoRechargeRemind
     * @summary 自动续费提醒【task任务】
     * @request POST:/wallet/recharge/membership/autoRechargeRemind
     */
    rechargeMembershipAutoRechargeRemind: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/wallet/recharge/membership/autoRechargeRemind`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 余额充值会员
     * @name RechargeMembershipAutoRemindNewMembership
     * @summary 自动提醒新会员规则】
     * @request POST:/wallet/recharge/membership/autoRemindNewMembership
     */
    rechargeMembershipAutoRemindNewMembership: (params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/wallet/recharge/membership/autoRemindNewMembership`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 余额充值会员
     * @name RechargeMembershipAutoReset
     * @summary 自动重置会员
     * @request POST:/wallet/recharge/membership/autoReset
     */
    rechargeMembershipAutoReset: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/wallet/recharge/membership/autoReset`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 余额充值会员
     * @name RechargeMembershipAutomaticGift
     * @summary 自动赠送会员
     * @request POST:/wallet/recharge/membership/automaticGift
     */
    rechargeMembershipAutomaticGift: (vo: ManualByManagerRechargeMembershipVO, params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/wallet/recharge/membership/automaticGift`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 余额充值会员
     * @name RechargeMembershipAutomaticToggle
     * @summary 会员开启/关闭自动续费（前台）
     * @request POST:/wallet/recharge/membership/automaticToggle
     */
    rechargeMembershipAutomaticToggle: (
      membershipAutomaticRenewalReq: MembershipAutomaticRenewal,
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/wallet/recharge/membership/automaticToggle`,
        method: "POST",
        body: membershipAutomaticRenewalReq,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 余额充值会员
     * @name RechargeMembershipDownload
     * @summary 余额充值-下载充值凭证
     * @request GET:/wallet/recharge/membership/download/{membershipOrderId}
     */
    rechargeMembershipDownload: (membershipOrderId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/wallet/recharge/membership/download/${membershipOrderId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 余额充值会员
     * @name RechargeMembershipEditCustomerMembershipOrderByManager
     * @summary 后台编辑用户会员充值订单
     * @request POST:/wallet/recharge/membership/editCustomerMembershipOrderByManager
     */
    rechargeMembershipEditCustomerMembershipOrderByManager: (
      reqDTO: MembershipPrechargeOrderRespDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponseObject, any>({
        path: `/wallet/recharge/membership/editCustomerMembershipOrderByManager`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 余额充值会员
     * @name RechargeMembershipExportCustomerMembershipOrder
     * @summary 导出用户会员充值订单
     * @request POST:/wallet/recharge/membership/exportCustomerMembershipOrder
     */
    rechargeMembershipExportCustomerMembershipOrder: (
      reqDTO: MembershipPrechargeOrderReqDTO,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/wallet/recharge/membership/exportCustomerMembershipOrder`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 余额充值会员
     * @name RechargeMembershipExportCustomerMembershipOrderByManager
     * @summary 后台导出用户会员充值订单
     * @request POST:/wallet/recharge/membership/exportCustomerMembershipOrderByManager
     */
    rechargeMembershipExportCustomerMembershipOrderByManager: (
      reqDTO: MembershipPrechargeOrderReqDTO,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/wallet/recharge/membership/exportCustomerMembershipOrderByManager`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 余额充值会员
     * @name RechargeMembershipGetAutomaticToggleStaus
     * @summary 获取用户是否自动续费状态
     * @request POST:/wallet/recharge/membership/getAutomaticToggleStaus
     */
    rechargeMembershipGetAutomaticToggleStaus: (params: RequestParams = {}) =>
      this.request<BizResponseMembershipAutomaticRenewal, any>({
        path: `/wallet/recharge/membership/getAutomaticToggleStaus`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 余额充值会员
     * @name RechargeMembershipGetCustomerMembershipOrder
     * @summary 获取用户会员充值订单
     * @request POST:/wallet/recharge/membership/getCustomerMembershipOrder
     */
    rechargeMembershipGetCustomerMembershipOrder: (
      reqDTO: MembershipPrechargeOrderReqDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageMembershipPrechargeOrderRespDTO, any>({
        path: `/wallet/recharge/membership/getCustomerMembershipOrder`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 余额充值会员
     * @name RechargeMembershipGetCustomerMembershipOrderByManager
     * @summary 后台获取用户会员充值订单
     * @request POST:/wallet/recharge/membership/getCustomerMembershipOrderByManager
     */
    rechargeMembershipGetCustomerMembershipOrderByManager: (
      reqDTO: MembershipPrechargeOrderReqDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageMembershipPrechargeOrderRespDTO, any>({
        path: `/wallet/recharge/membership/getCustomerMembershipOrderByManager`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 余额充值会员
     * @name RechargeMembershipManual
     * @summary 手动余额充值会员（前台）
     * @request POST:/wallet/recharge/membership/manual
     */
    rechargeMembershipManual: (vo: ManualWalletRechargeMembershipVO, params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/wallet/recharge/membership/manual`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 余额充值会员
     * @name RechargeMembershipManualByManager
     * @summary 后台赠送会员（后台）
     * @request POST:/wallet/recharge/membership/manualByManager
     */
    rechargeMembershipManualByManager: (vo: ManualByManagerRechargeMembershipVO, params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/wallet/recharge/membership/manualByManager`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 余额充值会员
     * @name RechargeMembershipManualRemindNewMembership
     * @summary 手动提醒新会员规则
     * @request GET:/wallet/recharge/membership/manualRemindNewMembership
     */
    rechargeMembershipManualRemindNewMembership: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseString, any>({
        path: `/wallet/recharge/membership/manualRemindNewMembership`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 余额充值会员
     * @name RechargeMembershipRemind
     * @summary 原0元用户弹窗提示（前台）
     * @request POST:/wallet/recharge/membership/remind
     */
    rechargeMembershipRemind: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/wallet/recharge/membership/remind`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 余额充值会员
     * @name RechargeMembershipRemindReaded
     * @summary 原0元用户弹窗提示（前台）
     * @request POST:/wallet/recharge/membership/remind/readed
     */
    rechargeMembershipRemindReaded: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/wallet/recharge/membership/remind/readed`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 余额充值会员
     * @name RechargeMembershipResetOne
     * @summary 重置指定用户会员
     * @request POST:/wallet/recharge/membership/resetOne
     */
    rechargeMembershipResetOne: (
      query: {
        /**
         * superCustomerId
         * @format int64
         */
        superCustomerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/wallet/recharge/membership/resetOne`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 余额充值会员
     * @name RechargeMembershipShutdownByManager
     * @summary 后台关闭赠送的会员（后台）
     * @request GET:/wallet/recharge/membership/shutdownByManager
     */
    rechargeMembershipShutdownByManager: (
      query: {
        /**
         * superCustomerId
         * @format int64
         */
        superCustomerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BaseResponse, any>({
        path: `/wallet/recharge/membership/shutdownByManager`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户钱包
     * @name WalletTransferOut
     * @summary 转账
     * @request POST:/wallet/walletTransferOut
     */
    walletTransferOut: (respDTO: CustomerWalletTransferOutReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/wallet/walletTransferOut`,
        method: "POST",
        body: respDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  warehouseForwardConfig = {
    /**
     * No description
     *
     * @tags 仓库货代配置
     * @name BatchEdit
     * @summary 仓库货代配置-批量编辑
     * @request POST:/warehouseForwardConfig/batchEdit
     */
    batchEdit: (dto: EditWarehouseForwardConfigDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/warehouseForwardConfig/batchEdit`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 仓库货代配置
     * @name Edit
     * @summary 仓库货代配置-编辑
     * @request POST:/warehouseForwardConfig/edit
     */
    edit: (dto: EditWarehouseForwardConfigDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/warehouseForwardConfig/edit`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 仓库货代配置
     * @name Page
     * @summary 仓库货代配置-分页
     * @request POST:/warehouseForwardConfig/page
     */
    page: (reqPage: WarehouseForwardAttributeReqPageDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageResultWarehouseForwardAttributesRespDTO, any>({
        path: `/warehouseForwardConfig/page`,
        method: "POST",
        body: reqPage,
        type: ContentType.Json,
        ...params,
      }),
  };
  wf = {
    /**
     * No description
     *
     * @tags 结算中心-WF关联订单的管理
     * @name AssociateOrderBathUpdate
     * @summary WF关联订单的管理-订单是都需要结汇批量更新
     * @request POST:/wf/associate/order/bath/update
     */
    associateOrderBathUpdate: (updateOrderList: WfTradeOrderUpdateVO[], params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/wf/associate/order/bath/update`,
        method: "POST",
        body: updateOrderList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-WF关联订单的管理
     * @name AssociateOrderDelete
     * @summary WF关联订单的管理-订单删除
     * @request DELETE:/wf/associate/order/delete
     */
    associateOrderDelete: (
      query?: {
        /**
         * referenceOrderId
         * @format int64
         */
        referenceOrderId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/wf/associate/order/delete`,
        method: "DELETE",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-WF关联订单的管理
     * @name AssociateOrderGetInfo
     * @summary WF关联订单的管理-获取充值订单的关联记录
     * @request GET:/wf/associate/order/get/info
     */
    associateOrderGetInfo: (
      query?: {
        /**
         * balanceRechargeId
         * @format int64
         */
        balanceRechargeId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListWfBalanceRechargeAssociateRecord, any>({
        path: `/wf/associate/order/get/info`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-WF关联订单的管理
     * @name AssociateOrderGetInfoDetail
     * @summary WF关联订单的管理-查看订单详情
     * @request GET:/wf/associate/order/get/info/detail
     */
    associateOrderGetInfoDetail: (
      query?: {
        /**
         * referenceOrderId
         * @format int64
         */
        referenceOrderId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseWfTradeOrder, any>({
        path: `/wf/associate/order/get/info/detail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-WF关联订单的管理
     * @name AssociateOrderQuery
     * @summary WF关联订单的管理-订单分页查询
     * @request POST:/wf/associate/order/query
     */
    associateOrderQuery: (queryVo: WfTradeOrderQueryVO, params: RequestParams = {}) =>
      this.request<BizResponsePageWfTradeOrder, any>({
        path: `/wf/associate/order/query`,
        method: "POST",
        body: queryVo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-WF关联订单的管理
     * @name AssociateOrderQueryAssociate
     * @summary WF关联订单的管理-获取充值订单的关联记录
     * @request POST:/wf/associate/order/query/associate
     */
    associateOrderQueryAssociate: (queryVo: WfBalanceRechargeAssociateRecordQueryDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageWfBalanceRechargeAssociateRecord, any>({
        path: `/wf/associate/order/query/associate`,
        method: "POST",
        body: queryVo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-WF关联订单的管理
     * @name AssociateOrderQueryUploadTrade
     * @summary WF关联订单的管理-获取充值订单的关联记录
     * @request POST:/wf/associate/order/query/upload/trade
     */
    associateOrderQueryUploadTrade: (queryVo: WfBalanceRechargeAssociateRecordQueryDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageWfBalanceRechargeUploadRecord, any>({
        path: `/wf/associate/order/query/upload/trade`,
        method: "POST",
        body: queryVo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-WF关联订单的管理
     * @name AssociateOrderRetryUpload
     * @summary WF关联订单的管理-关联记录重试
     * @request POST:/wf/associate/order/retry/upload
     */
    associateOrderRetryUpload: (submitVo: WfTradeOrderSubmitVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/wf/associate/order/retry/upload`,
        method: "POST",
        body: submitVo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-WF关联订单的管理
     * @name AssociateOrderSubmit
     * @summary WF关联订单的管理-关联订单接口
     * @request POST:/wf/associate/order/submit
     */
    associateOrderSubmit: (submitVo: WfTradeOrderSubmitVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/wf/associate/order/submit`,
        method: "POST",
        body: submitVo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-WF关联订单的管理
     * @name AssociateOrderUnionQuery
     * @summary WF关联订单的管理-关联动作的订单分页查询
     * @request POST:/wf/associate/order/union/query
     */
    associateOrderUnionQuery: (queryVo: WfTradeOrderQueryVO, params: RequestParams = {}) =>
      this.request<BizResponsePageWfTradeOrder, any>({
        path: `/wf/associate/order/union/query`,
        method: "POST",
        body: queryVo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-WF关联订单的管理
     * @name AssociateOrderUploadRecordBathUpdate
     * @summary WF关联订单的管理-订单是都需要结汇批量更新
     * @request POST:/wf/associate/order/upload/record/bath/update
     */
    associateOrderUploadRecordBathUpdate: (updateOrderList: WfTradeOrderUpdateVO[], params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/wf/associate/order/upload/record/bath/update`,
        method: "POST",
        body: updateOrderList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name VostroAssociationResultNotify
     * @summary 上传订单审核结果通知
     * @request POST:/wf/vostro/association/result/notify
     */
    vostroAssociationResultNotify: (notifyVo: string, params: RequestParams = {}) =>
      this.request<WFNotifyResponse, any>({
        path: `/wf/vostro/association/result/notify`,
        method: "POST",
        body: notifyVo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-充值管理
     * @name VostroNotify
     * @summary 万里汇来账通知
     * @request POST:/wf/vostro/notify
     */
    vostroNotify: (notifyVo: string, params: RequestParams = {}) =>
      this.request<WFNotifyResponse, any>({
        path: `/wf/vostro/notify`,
        method: "POST",
        body: notifyVo,
        type: ContentType.Json,
        ...params,
      }),
  };
  withdraw = {
    /**
     * No description
     *
     * @tags 结算中心-提现管理
     * @name ManagerApply
     * @summary 提现管理-申请
     * @request POST:/withdraw/manager/apply
     */
    managerApply: (applyVO: WithdrawManageApplyVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/withdraw/manager/apply`,
        method: "POST",
        body: applyVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-提现管理
     * @name ManagerApplyAmountCalculate
     * @summary 申请金额计算
     * @request GET:/withdraw/manager/apply/amount/calculate
     */
    managerApplyAmountCalculate: (
      query: {
        /** withdrawAmountRmb */
        withdrawAmountRmb: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseWithdrawApplyAmountCalculateVO, any>({
        path: `/withdraw/manager/apply/amount/calculate`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-提现管理
     * @name ManagerApplyInfoGet
     * @summary 提现申请-信息
     * @request GET:/withdraw/manager/apply/info/get
     */
    managerApplyInfoGet: (params: RequestParams = {}) =>
      this.request<BizResponseWithdrawApplyInfoVO, any>({
        path: `/withdraw/manager/apply/info/get`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-提现管理
     * @name ManagerAudit
     * @summary 提现管理-审核
     * @request POST:/withdraw/manager/audit
     */
    managerAudit: (auditVO: WithdrawManageAuditVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/withdraw/manager/audit`,
        method: "POST",
        body: auditVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-提现管理
     * @name ManagerCountUnfinishedWithdrawByCustomerIds
     * @summary countUnfinishedWithdrawByCustomerIds
     * @request POST:/withdraw/manager/countUnfinishedWithdrawByCustomerIds
     */
    managerCountUnfinishedWithdrawByCustomerIds: (customerIds: number[], params: RequestParams = {}) =>
      this.request<BizResponseInt, any>({
        path: `/withdraw/manager/countUnfinishedWithdrawByCustomerIds`,
        method: "POST",
        body: customerIds,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-提现管理
     * @name ManagerMakePayment
     * @summary 提现管理-打款
     * @request POST:/withdraw/manager/make/payment
     */
    managerMakePayment: (makePaymentVO: WithdrawManageMakePaymentVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/withdraw/manager/make/payment`,
        method: "POST",
        body: makePaymentVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-提现管理
     * @name ManagerQuery
     * @summary 提现管理-分页查询
     * @request POST:/withdraw/manager/query
     */
    managerQuery: (queryVo: WithdrawManageQueryVO, params: RequestParams = {}) =>
      this.request<BizResponsePageWithdrawManageListVO, any>({
        path: `/withdraw/manager/query`,
        method: "POST",
        body: queryVo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-提现管理
     * @name ManagerSendWithdrawEmail
     * @summary 提现管理-邮件发送
     * @request GET:/withdraw/manager/send/withdraw/email
     */
    managerSendWithdrawEmail: (
      query: {
        /** bankNo */
        bankNo: string;
        /** email */
        email: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/withdraw/manager/send/withdraw/email`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  workbench = {
    /**
     * No description
     *
     * @tags 结算中心-工作台
     * @name DayInfo
     * @summary 数据中心-今日相关数据
     * @request GET:/workbench/day/info
     */
    dayInfo: (
      query?: {
        /**
         * systemSource
         * @format int32
         */
        systemSource?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseDataCenterTodayInfoVO, any>({
        path: `/workbench/day/info`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-工作台
     * @name DayListChart
     * @summary 数据中心-趋势图
     * @request GET:/workbench/day/list/chart
     */
    dayListChart: (
      query: {
        /**
         * endTime
         * @format date-time
         */
        endTime?: string;
        /**
         * startTime
         * @format date-time
         */
        startTime?: string;
        /**
         * systemSource
         * @format int32
         */
        systemSource?: number;
        /** type */
        type: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseDataCenterDayListVO, any>({
        path: `/workbench/day/list/chart`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-工作台
     * @name GetCount
     * @summary 获取消息已读和未读数量
     * @request GET:/workbench/get/count
     */
    getCount: (params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/workbench/get/count`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-工作台
     * @name HillGetAccountList
     * @summary 办事大厅-获取对账失败的账号列表
     * @request POST:/workbench/hill/get/account/list
     */
    hillGetAccountList: (params: RequestParams = {}) =>
      this.request<BizResponseListString, any>({
        path: `/workbench/hill/get/account/list`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-工作台
     * @name HillGetSystemSource
     * @summary 办事大厅-系统类型
     * @request GET:/workbench/hill/getSystemSource
     */
    hillGetSystemSource: (
      query: {
        /** eventNameType */
        eventNameType: string;
        /**
         * workbenchHallId
         * @format int64
         */
        workbenchHallId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseWorkbenchHallTypeVO, any>({
        path: `/workbench/hill/getSystemSource`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-工作台
     * @name HillQueryPage
     * @summary 办事大厅-分页列表
     * @request POST:/workbench/hill/query/page
     */
    hillQueryPage: (queryVO: WorkbenchHallQueryVO, params: RequestParams = {}) =>
      this.request<BizResponsePageWorkbenchHall, any>({
        path: `/workbench/hill/query/page`,
        method: "POST",
        body: queryVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-工作台
     * @name SettlePayList
     * @summary 数据中心-用户支付TOP10
     * @request GET:/workbench/settle/pay/list
     */
    settlePayList: (
      query?: {
        /**
         * endTime
         * @format date-time
         */
        endTime?: string;
        /**
         * startTime
         * @format date-time
         */
        startTime?: string;
        /**
         * systemSource
         * @format int32
         */
        systemSource?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListDataCenterSettlePayTopVO, any>({
        path: `/workbench/settle/pay/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-工作台
     * @name SettleSourceList
     * @summary 数据中心-渠道销售榜
     * @request GET:/workbench/settle/source/list
     */
    settleSourceList: (
      query?: {
        /**
         * endTime
         * @format date-time
         */
        endTime?: string;
        /**
         * startTime
         * @format date-time
         */
        startTime?: string;
        /**
         * systemSource
         * @format int32
         */
        systemSource?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListDataCenterSettleSourceTopVO, any>({
        path: `/workbench/settle/source/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 结算中心-工作台
     * @name UpdateReadStatus
     * @summary 更新消息的已读状态
     * @request POST:/workbench/update/read/status
     */
    updateReadStatus: (updateVO: WorkbenchHallUpdateVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/workbench/update/read/status`,
        method: "POST",
        body: updateVO,
        type: ContentType.Json,
        ...params,
      }),
  };
  zhongyin = {
    /**
     * No description
     *
     * @tags 中银汇率管理
     * @name ExchangeRateGetLatestExchangeRate
     * @summary 获取最新中银汇率
     * @request GET:/zhongyin/exchangeRate/getLatestExchangeRate
     */
    exchangeRateGetLatestExchangeRate: (
      query?: {
        /** currencyCodeFrom */
        currencyCodeFrom?: string;
        /** currencyCodeTo */
        currencyCodeTo?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/zhongyin/exchangeRate/getLatestExchangeRate`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 中银汇率管理
     * @name ExchangeRateSyncExchangeRate
     * @summary 同步中银汇率
     * @request GET:/zhongyin/exchangeRate/syncExchangeRate
     */
    exchangeRateSyncExchangeRate: (params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/zhongyin/exchangeRate/syncExchangeRate`,
        method: "GET",
        ...params,
      }),
  };
}
