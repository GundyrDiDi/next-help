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

/** AbnormalOrder */
export interface AbnormalOrder {
  /** @format int64 */
  abnormalOrderId?: number;
  /** @format int32 */
  abnormalOrderType?: number;
  actualProductSellPrice?: number;
  afterSalesImg?: string;
  /** @format int32 */
  afterSalesProgress?: number;
  /** @format int32 */
  afterSalesReason?: number;
  afterSalesRefundTotalAmount?: number;
  /** @format int32 */
  applyAfterSalesQuantity?: number;
  /** @format date-time */
  applyAfterSalesTime?: string;
  /** @format int32 */
  badClientQuantity?: number;
  /** @format int32 */
  badConvertStockQuantity?: number;
  /** @format int32 */
  badPlatformQuantity?: number;
  bizId?: string;
  businessRefundAmount?: number;
  /** @format date-time */
  cancelApplyTime?: string;
  /** @format int32 */
  cancelProgress?: number;
  /** @format int32 */
  cancelQuantity?: number;
  cancelRefundAmount?: number;
  /** @format int32 */
  cancelType?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  customerOrderNo?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  deliveryTaskCode?: string;
  detailedExplain?: string;
  dutyDeptName?: string;
  /** @format int32 */
  keepStockQuantity?: number;
  /** @format int32 */
  orderQuantity?: number;
  /** @format int64 */
  platformOrderId?: number;
  /** @format int64 */
  platformOrderItemId?: number;
  platformOrderNo?: string;
  /** @format date-time */
  problemGenerationTime?: string;
  /** @format int32 */
  processManner?: number;
  processMannerIllustrate?: string;
  /** @format int32 */
  processedNum?: number;
  productCode?: string;
  productDetailUrl?: string;
  productMainImg?: string;
  productPropertiesName?: string;
  productQuestionReason?: string;
  /** @format int32 */
  productQuestionType?: number;
  productSellPrice?: number;
  productSku?: string;
  productSkuImg?: string;
  productTitle?: string;
  productTitleJp?: string;
  /** @format int32 */
  productType?: number;
  purchasingAbnormalOrderNo?: string;
  /** @format int32 */
  questionProcess?: number;
  /** @format int32 */
  questionProductQuantity?: number;
  realRefundAmount?: number;
  receiveName?: string;
  refundIllustrate?: string;
  refuseReason?: string;
  remark?: string;
  shopProductSku?: string;
  /** @format int32 */
  sourceType?: number;
  stationCode?: string;
  systemOrderNo?: string;
  /** @format int32 */
  systemSource?: number;
  thisRemakeCost?: number;
  unificationCustomerFullName?: string;
  /** @format int32 */
  untreatedNum?: number;
  /** @format date-time */
  updateTime?: string;
}

/** AbnormalOrderAuditReqDTO */
export interface AbnormalOrderAuditReqDTO {
  auditResult?: boolean;
  bizId?: string;
  businessRefundAmount?: number;
  dutyDeptName?: string;
  realRefundAmount?: number;
  refuseReason?: string;
  remark?: string;
}

/** AbnormalOrderRespDTO */
export interface AbnormalOrderRespDTO {
  /**
   * 异常订单表id
   * @format int64
   */
  abnormalOrderId?: number;
  /**
   * 异常订单类型: 1-问题处理; 2-售后; 3-申请取消
   * @format int32
   */
  abnormalOrderType?: number;
  /** 实际商品价格(根据销售数量匹配阶梯价) */
  actualProductSellPrice?: number;
  /** 售后图片 */
  afterSalesImg?: string;
  /**
   * 售后进度:1-业务处理中; 2-财务处理中; 3-已退款; 4-已拒绝; 5-重新发起（处理中）; 6-已撤销
   * @format int32
   */
  afterSalesProgress?: number;
  /**
   * 售后原因：1-次品; 2-相异品; 3-数量不足; 4-其他
   * @format int32
   */
  afterSalesReason?: number;
  /** 售后退款总金额 */
  afterSalesRefundTotalAmount?: number;
  /**
   * 申请售后数量
   * @format int32
   */
  applyAfterSalesQuantity?: number;
  /**
   * 申请售后时间
   * @format date-time
   */
  applyAfterSalesTime?: string;
  /**
   * 次品归客户数量
   * @format int32
   */
  badClientQuantity?: number;
  /**
   * 次品转正品数量
   * @format int32
   */
  badConvertStockQuantity?: number;
  /**
   * 次品归平台数量
   * @format int32
   */
  badPlatformQuantity?: number;
  /** 业务单据Id */
  bizId?: string;
  /** 业务审核退款金额 */
  businessRefundAmount?: number;
  /**
   * 取消申请时间
   * @format date-time
   */
  cancelApplyTime?: string;
  /**
   * 取消进度：0-处理中; 1-取消成功; 2-保留库存; 3-次品为公司所有; 4-次品转用户库存
   * @format int32
   */
  cancelProgress?: number;
  /**
   * 取消数量
   * @format int32
   */
  cancelQuantity?: number;
  /** 取消退款金额 */
  cancelRefundAmount?: number;
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
  /** 客户店铺名称 */
  customerShopName?: string;
  /** 客户标签 1 oem项目重点客户 2 oem非项目重点客户 */
  customerTags?: number[];
  /** 国际发货单号 */
  deliveryTaskCode?: string;
  /** 详细说明(前台用户提交) */
  detailedExplain?: string;
  /** 责任部门名称 */
  dutyDeptName?: string;
  /**
   * 保留库存数量
   * @format int32
   */
  keepStockQuantity?: number;
  /**
   * 下单数量=冻结数量+销售数量
   * @format int32
   */
  orderQuantity?: number;
  /**
   * 平台订单表id
   * @format int64
   */
  platformOrderId?: number;
  /** 平台订单编号(直行便订单编号) */
  platformOrderNo?: string;
  /**
   * 问题生成时间
   * @format date-time
   */
  problemGenerationTime?: string;
  /**
   * 处理方式：1-更换颜色; 2-更换尺码; 3-更换款式; 4-采购取消商品; 5-换个链接; 6-同款链接; 7-等待原链接; 8-下单原链接; 9-推荐链接; 10-良品入库; 11-不良品; 12-付费重拍; 13-仓库取消商品; 14-类似款链接;
   * @format int32
   */
  processManner?: number;
  /** 处理方式说明 */
  processMannerIllustrate?: string;
  /** 平台商品SPU */
  productCode?: string;
  /** 详情URL */
  productDetailUrl?: string;
  /** 主图 */
  productMainImg?: string;
  /** 属性名称 */
  productPropertiesName?: string;
  /** 商品问题原因 */
  productQuestionReason?: string;
  /**
   * 商品问题类型：1-商品问题-确认颜色; 2-商品问题-确认尺码; 3-商品问题-确认款式; 4-全网断货; 5-原商品缺货-推荐同款-价格不符合客户预期; 6-预售商品-推荐同款商品;
   *  7-不满足最小起订量-推荐同款商品; 8-更换同款链接-价格不再客户预期; 9-原商品缺货-推荐类似款; 10-预售商品-无同款商品推荐; 11-不满足最小起订量-无同款商品推荐; 12-颜色差异; 13-logo差异; 14-材质/面料差异; 15-配件差异（口袋，腰带，纽扣，拉链，拉绳等;
   *  16-商品上有中文; 17-尺码差异; 18-设计差异（压线，领口，袖口，花纹，衣服设计等; 19-其他不良; 20-污渍/斑点/水印; 21-破损; 22-线头; 23-接缝不良; 24-抽丝; 25-针眼; 26-霉菌; 27-生锈; 28-商品有中文; 29-纽扣破损; 30-拉链破损; 31-附属品缺陷; 32-有气味;
   * @format int32
   */
  productQuestionType?: number;
  /** 商品价格 */
  productSellPrice?: number;
  /** 平台商品SKU */
  productSku?: string;
  /** 商品sku图 */
  productSkuImg?: string;
  /** 商品名称 */
  productTitle?: string;
  /** 商品名称日文 */
  productTitleJp?: string;
  /**
   * 商品类型: 1-普通商品; 2-OEM商品; 3-组合商品
   * @format int32
   */
  productType?: number;
  /**
   * 问题处理：1-未处理; 2-处理中; 3-已处理
   * @format int32
   */
  questionProcess?: number;
  /**
   * 问题商品数量
   * @format int32
   */
  questionProductQuantity?: number;
  /** 实际退款金额 */
  realRefundAmount?: number;
  /** 退款说明 */
  refundIllustrate?: string;
  /** 拒绝原因 */
  refuseReason?: string;
  /** 审核备注 */
  remark?: string;
  /** 店铺商品SKU(店铺商品库) */
  shopProductSku?: string;
  /** 日本:JapanStation,韩国:KoreaStation,英国:UkStation */
  stationCode?: string;
  /**
   * 系统来源: 1-D2C; 2-B2B
   * @format int32
   */
  systemSource?: number;
  /** 本次重拍费用 */
  thisRemakeCost?: number;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/** AddCommonProductReqDTO */
export interface AddCommonProductReqDTO {
  /** @format int32 */
  addCartSource?: number;
  apiFlag?: boolean;
  cartGroupName?: string;
  cateCode?: string;
  commonProductItemList?: AddCommontProductItemDTO[];
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  /** @format int64 */
  mainCustomerId?: number;
  /** @format int32 */
  oemOrderType?: number;
  platformCode?: string;
  productCode?: string;
  /** @format int32 */
  productType?: number;
  searchSourceOrderCode?: string;
  /** @format int64 */
  searchSourceOrderId?: number;
  /** @format int64 */
  searchSourceOrderPurchaserUserId?: number;
  searchSourceOrderPurchaserUserName?: string;
  /** @format int64 */
  searchSourceOrderRepurchaseApplyId?: number;
  /** @format int64 */
  searchSourceSupplierPriceId?: number;
  /** @format int32 */
  systemSource?: number;
  unificationCustomerFullName?: string;
  url?: string;
  validBrand?: boolean;
}

/** AddCommontProductItemDTO */
export interface AddCommontProductItemDTO {
  apiProductDTO?: ApiProductDTO;
  cartAdditionList?: CartAdditionReqDTO[];
  combinationSkuSnapShot?: CombinationSkuSnapShotDTO;
  customerProductMsku?: string;
  /** @format int32 */
  livePriceFlag?: number;
  /** @format int32 */
  noAdditionalFlag?: number;
  /** @format int32 */
  orderQuantity?: number;
  productCode?: string;
  productMainImg?: string;
  productPropertiesName?: string;
  /** api一对多关联商品(取第一个加入购物车) */
  productRelationDTOList?: ApiProductRelationDTO[];
  productSellPrice?: number;
  productSku?: string;
  productSkuImg?: string;
  /** @format int32 */
  productSkuSource?: number;
  productTitle?: string;
  /** @format int64 */
  searchSourceSupplierPriceId?: number;
  /** @format int32 */
  splitFlag?: number;
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
    | "PKG_STAND_FEE";
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
    | "PROMOTION_RECHARGE";
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

/** AdditionalItemsInfoRespDTO */
export interface AdditionalItemsInfoRespDTO {
  actualProductSellPrice?: number;
  /** @format int32 */
  additionConfigId?: number;
  additionExtraName?: string;
  /** @format int32 */
  additionId?: number;
  additionName?: string;
  additionNameJp?: string;
  calculateConfigFormula?: string;
  /** @format int32 */
  calculateConfigId?: number;
  cost?: number;
  /** @format int32 */
  costType?: number;
  /** @format int32 */
  deductionNode?: number;
  deductionNodeName?: string;
  ingredientsImg?: string;
  ingredientsName?: string;
  ingredientsNameJp?: string;
  ingredientsSku?: string;
  platformOrderNo?: string;
  shopProductSku?: string;
  specialCheckRequirement?: string;
  specialCheckRequirementImg?: string;
  /** @format int32 */
  spotCheckFlag?: number;
  spotCheckRatio?: number;
  systemOrderNo?: string;
}

/** AfterSalesHandlingReqDTO */
export interface AfterSalesHandlingReqDTO {
  /**
   * 异常订单表id
   * @format int64
   */
  abnormalOrderId?: number;
  /** 售后图片 */
  afterSalesImg?: string;
  /**
   * 售后进度：0-待处理; 1-业务处理中; 2-财务处理中; 3-已退款; 4-已拒绝; 5-重新发起（处理中）; 6-已撤销
   * @format int32
   */
  afterSalesProgress?: number;
  /**
   * 售后原因：1-次品; 2-相异品; 3-数量不足; 4-其他
   * @format int32
   */
  afterSalesReason?: number;
  /** 售后退款总金额 */
  afterSalesRefundTotalAmount?: number;
  /**
   * 申请售后数量
   * @format int32
   */
  applyAfterSalesQuantity?: number;
  /**
   * 次品转正品数量
   * @format int32
   */
  badConvertStockQuantity?: number;
  /** 详细说明 */
  detailedExplain?: string;
  /** 平台订单编号(直行便订单编号) */
  platformOrderNo?: string;
  /** 退款说明 */
  refundIllustrate?: string;
  /** 店铺商品sku */
  shopProductSkus?: string[];
  /** 系统订单编号 */
  systemOrderNo?: string[];
}

/** ApiProductDTO */
export interface ApiProductDTO {
  apiShopProductMainImg?: string;
  apiShopProductPropertiesName?: string;
  apiShopProductSku?: string;
  apiShopProductTitle?: string;
  /** @format int32 */
  productType?: number;
  searchSourceOrderCode?: string;
  /** @format int64 */
  searchSourceOrderId?: number;
}

/** ApiProductRelationDTO */
export interface ApiProductRelationDTO {
  /** 组合商品子商品信息 */
  combinationProductItemAddCartList?: CombinationProductItemAddCartDTO[];
  /**
   * OEM订单类型: 1-OEM寻源单样品单; 2-OEM寻源单大货单; 3-OEM复购申请样品单; 4-OEM复购申请大货单
   * @format int32
   */
  oemOrderType?: number;
  /** 商品spu */
  productCode?: string;
  /** 商品sku */
  productSku?: string;
  /**
   * 1-普通商品; 2-OEM商品; 3-组合商品
   * @format int32
   */
  productType?: number;
  /** 寻源单编号 */
  searchSourceOrderCode?: string;
  /**
   * 寻源单表id
   * @format int64
   */
  searchSourceOrderId?: number;
}

/** ApiProductReqDTO */
export interface ApiProductReqDTO {
  /** 购物车附加项列表 */
  cartAdditionList?: CartAdditionReqDTO[];
  /**
   * 下单数量
   * @format int32
   */
  orderQuantity?: number;
  /** api一对多关联商品(取第一个加入购物车) */
  productRelationDTOList?: ApiProductRelationDTO[];
}

/** ApprovePurchasePriceVO */
export interface ApprovePurchasePriceVO {
  /** 审核采购价备注 */
  approvePurchasePriceRemark?: string;
  /**
   * 寻源报价id
   * @format int64
   */
  searchSourceOrderSupplierPriceId?: number;
}

/** AutoQuoteReqDTO */
export interface AutoQuoteReqDTO {
  /**
   * 寻源单id
   * @format int64
   */
  searchSourceOrderId?: number;
}

/** B2bPlatformOrderDetailRespDTO */
export interface B2BPlatformOrderDetailRespDTO {
  /** 订单详情 */
  orderDetails?: OrderDetailsRespDTO;
  /** 订单结算费用详情 */
  orderSettlementFeeDetails?: OrderSettlementFeeDetailsRespDTO;
  /** 平台订单详情列表 */
  platformOrderItemList?: CustomerPlatformOrderItemRespDTO[];
  stageInfos?: StageInfoDTO[];
}

/** BadAdditionReqDTO */
export interface BadAdditionReqDTO {
  /**
   * 附加项配置表id
   * @format int32
   */
  additionConfigId?: number;
  /** 附加项拓展名称 */
  additionExtraName?: string;
  /** 辅料sku */
  ingredientsSku?: string;
}

/** BadAdditionalItemsReqDTO */
export interface BadAdditionalItemsReqDTO {
  /** @format int64 */
  mainCustomerId?: number;
  /** 订单商品附加项编码 */
  orderAdditionCode?: string;
  /** 平台订单编号(直行便订单编号) */
  platformOrderNo?: string;
  /**
   * 商品类型: 1-普通商品; 2-OEM商品; 3-组合商品
   * @format int32
   */
  productType?: number;
  /** 店铺商品SKU(店铺商品库) */
  shopProductSku?: string;
}

/** BadAdditionalItemsRespDTO */
export interface BadAdditionalItemsRespDTO {
  /** 商品附加项 */
  additionMerge?: CustomerAdditionMergeRespDTO;
  /** 历史商品附加项 */
  historyAdditionMergeList?: HistoryAdditionMergeRespDTO[];
  /** 重选商品附加项 */
  reselectAdditionMergeList?: HistoryAdditionMergeRespDTO[];
}

/** BadPendingReqDTO */
export interface BadPendingReqDTO {
  /** @format int32 */
  orderProcessResult?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  platformOrderNo?: string;
  shopProductSku?: string;
  sorts?: ISortFieldEnum[];
  /** @format int32 */
  startIndex?: number;
}

/** BadPendingRespDTO */
export interface BadPendingRespDTO {
  /** @format int32 */
  defectiveTotal?: number;
  productImg?: string;
  productName?: string;
  productSku?: string;
  regularizationPage?: PageRegularizationRespDTO;
}

/** BaseResponse */
export interface BaseResponse {
  code?: string;
  msg?: string;
  success?: boolean;
}

/** BatchAddProductDTO */
export interface BatchAddProductDTO {
  /** 普通商品购物车附加项信息 */
  cartAdditionList?: CartAdditionReqDTO[];
  /** 组合商品子商品添加购物信息 */
  combinationProductItemAddCartList?: CombinationProductItemAddCartDTO[];
  /**
   * 是否需要附加项(0:需要:1:不需要)
   * @format int32
   */
  noAdditionalFlag?: number;
  /**
   * OEM订单类型:2-OEM寻源单大货单; 4-OEM复购申请大货单
   * @format int32
   */
  oemOrderType?: number;
  /**
   * 下单数量
   * @format int32
   */
  orderQuantity?: number;
  /** 平台商品SKU */
  productSku?: string;
  /**
   * 商品类型: 1-普通商品; 2-OEM商品; 3-组合商品
   * @format int32
   */
  productType?: number;
  /** 寻源单编号 */
  searchSourceOrderCode?: string;
  /**
   * 寻源单表id
   * @format int64
   */
  searchSourceOrderId?: number;
  /**
   * 寻源单复购申请表id
   * @format int64
   */
  searchSourceOrderRepurchaseApplyId?: number;
  /**
   * 寻源单报价id
   * @format int64
   */
  searchSourceSupplierPriceId?: number;
}

/** BatchPayReqDTO */
export interface BatchPayReqDTO {
  /** @format int64 */
  customerShopId?: number;
  platformOrderIds?: number[];
}

/** BatchPriorityReqDTO */
export interface BatchPriorityReqDTO {
  platformOrderNos?: string[];
}

/** BatchQueryStockReqDTO */
export interface BatchQueryStockReqDTO {
  shopProductSkus?: string[];
}

/** BatchQueryStockRespDTO */
export interface BatchQueryStockRespDTO {
  shopProductSkuStockMap?: Record<string, number>;
}

/** BatchUpdateCartAdditionReqDTO */
export interface BatchUpdateCartAdditionReqDTO {
  /** @format int64 */
  customerShopId?: number;
  /** @format int64 */
  mainCustomerId?: number;
  updateCartAdditionReqDTOS?: UpdateCartAdditionReqDTO[];
}

/** BecomeRegularReqDTO */
export interface BecomeRegularReqDTO {
  inboundOrderAdditionList?: InboundOrderAdditionReqDTO[];
  pkgCodes?: string[];
  regularOperationName?: string;
  settleAdditionAmount?: number;
}

/** BillingFeeDetailsRespDTO */
export interface BillingFeeDetailsRespDTO {
  feeName?: string;
  /** @format int32 */
  quantity?: number;
  totalSettlementPrice?: number;
}

/** BindAmazonSkuReqDTO */
export interface BindAmazonSkuReqDTO {
  amazonMsku?: string;
  /** @format int64 */
  customerShopId?: number;
  /** @format int64 */
  shopProductSkuId?: number;
}

/** BizResponse */
export interface BizResponse {
  code?: string;
  data?: object;
  msg?: string;
  success?: boolean;
}

/** CancelAbnormalOrderReqDTO */
export interface CancelAbnormalOrderReqDTO {
  /** @format int32 */
  abnormalOrderCancelQuantity?: number;
  /** @format int32 */
  addNormalNumFlag?: number;
  /** @format int32 */
  badClientQuantity?: number;
  /** @format int32 */
  badPlatformQuantity?: number;
  bizId?: string;
  /** @format int32 */
  cancelProgress?: number;
  /** @format int32 */
  cancelQuantity?: number;
  cancelRefundAmount?: number;
  /** @format int32 */
  cancelSendTaskStatus?: number;
  /** @format int32 */
  cancelType?: number;
  /** @format int32 */
  keepStockQuantity?: number;
  message?: string;
  messageId?: string;
  /** @format int32 */
  orderItemStatus?: number;
  origionalPurchasingAbnormalOrderNo?: string;
  /** @format int64 */
  platformOrderItemId?: number;
  platformOrderNo?: string;
  purchaseCancelReasonEnum?:
    | "CUSTOMER_CONFIRM_CANCEL"
    | "CUT_OUT_STOCK_CANCEL"
    | "GOODS_OUT_OF_STOCK_CANCEL"
    | "BOOKING_COMMODITY_CANCEL"
    | "MINI_NUM_ORDER_QUANTITY_CANCEL"
    | "REPLACE_PURCHASE_LINK_CANCEL"
    | "DEFECTIVE_PART_USER_CONFIG_NULL"
    | "DEFECTIVE_PART_REACH_MAX_TIME"
    | "DEFECTIVE_PART_USER_CONFIG_REFUND"
    | "DEFECTIVE_PART_CANCEL"
    | "DEFECTIVE_PART_USER_CONFIG_NULL_SYSTEM_CANCEL"
    | "OUT_OF_STOCK_PRICE_USER_EXPECTED"
    | "OUT_OF_STOCK_REACH_MAX_TIME"
    | "OUT_OF_STOCK_NO_REMAKE"
    | "OUT_OF_STOCK_REMAKE_SUCCESS"
    | "WRONG_PRODUCTS_PRICE_USER_EXPECTED"
    | "WRONG_PRODUCTS_USER_CONFIG_NULL"
    | "WRONG_PRODUCTS_REACH_MAX_TIME"
    | "WRONG_PRODUCTS_USER_CONFIG_REFUND"
    | "WRONG_PRODUCTS_NO_REMAKE"
    | "WRONG_PRODUCTS_REMAKE_REFUND_SUCCESS"
    | "USER_CANCEL_SEND";
  purchasingAbnormalOrderNo?: string;
  reduceExpressNum?: boolean;
  /** @format int32 */
  remakeStatus?: number;
  shopProductSku?: string;
  /** @format int32 */
  source?: number;
  systemOrderNo?: string;
}

/** CancelDeliveryReqDTO */
export interface CancelDeliveryReqDTO {
  platformOrderItemIds?: number[];
  platformOrderNo?: string;
  systemOrderNo?: string;
}

/** CancelProgressReqDTO */
export interface CancelProgressReqDTO {
  /** @format int32 */
  badClientQuantity?: number;
  /** @format int32 */
  badPlatformQuantity?: number;
  bizId?: string;
  /** @format int32 */
  cancelNum?: number;
  /** @format int32 */
  cancelProgress?: number;
  cancelRefundAmount?: number;
  /** @format int32 */
  cancelSendTaskStatus?: number;
  /** @format int32 */
  cancelType?: number;
  /** @format int32 */
  keepStockQuantity?: number;
  message?: string;
  messageId?: string;
  platformOrderNo?: string;
  /** @format int32 */
  processManner?: number;
  purchaseCancelReasonEnum?:
    | "CUSTOMER_CONFIRM_CANCEL"
    | "CUT_OUT_STOCK_CANCEL"
    | "GOODS_OUT_OF_STOCK_CANCEL"
    | "BOOKING_COMMODITY_CANCEL"
    | "MINI_NUM_ORDER_QUANTITY_CANCEL"
    | "REPLACE_PURCHASE_LINK_CANCEL"
    | "DEFECTIVE_PART_USER_CONFIG_NULL"
    | "DEFECTIVE_PART_REACH_MAX_TIME"
    | "DEFECTIVE_PART_USER_CONFIG_REFUND"
    | "DEFECTIVE_PART_CANCEL"
    | "DEFECTIVE_PART_USER_CONFIG_NULL_SYSTEM_CANCEL"
    | "OUT_OF_STOCK_PRICE_USER_EXPECTED"
    | "OUT_OF_STOCK_REACH_MAX_TIME"
    | "OUT_OF_STOCK_NO_REMAKE"
    | "OUT_OF_STOCK_REMAKE_SUCCESS"
    | "WRONG_PRODUCTS_PRICE_USER_EXPECTED"
    | "WRONG_PRODUCTS_USER_CONFIG_NULL"
    | "WRONG_PRODUCTS_REACH_MAX_TIME"
    | "WRONG_PRODUCTS_USER_CONFIG_REFUND"
    | "WRONG_PRODUCTS_NO_REMAKE"
    | "WRONG_PRODUCTS_REMAKE_REFUND_SUCCESS"
    | "USER_CANCEL_SEND";
  purchasingAbnormalOrderNo?: string;
  /** @format int32 */
  remakeStatus?: number;
  /** @format int32 */
  source?: number;
  systemOrderNo?: string;
}

/** CartAdditionDTO */
export interface CartAdditionDTO {
  /** @format int32 */
  additionConfigId?: number;
  additionExtraName?: string;
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
  ingredientsName?: string;
  ingredientsNameJp?: string;
  ingredientsSku?: string;
  /** @format int32 */
  spotCheckFlag?: number;
  spotCheckRatio?: number;
}

/** CartAdditionItemDTO */
export interface CartAdditionItemDTO {
  /** @format int32 */
  additionConfigId?: number;
  additionExtraName?: string;
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
  ingredientsName?: string;
  ingredientsNameJp?: string;
  ingredientsSku?: string;
  spotCheckData?: string;
  /** @format int32 */
  spotCheckFlag?: number;
  spotCheckPriceDTOList?: SpotCheckPriceDTO[];
  spotCheckRatio?: number;
}

/** CartAdditionReqDTO */
export interface CartAdditionReqDTO {
  /** @format int32 */
  additionConfigId?: number;
  additionExtraName?: string;
  /** @format int32 */
  additionId?: number;
  ingredientsSku?: string;
  /** @format int32 */
  spotCheckFlag?: number;
  spotCheckRatio?: number;
}

/** CartAdditionRespDTO */
export interface CartAdditionRespDTO {
  /** @format int32 */
  additionConfigId?: number;
  additionExtraName?: string;
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
  ingredientsName?: string;
  ingredientsNameJp?: string;
  ingredientsSku?: string;
  spotCheckData?: string;
  /** @format int32 */
  spotCheckFlag?: number;
  spotCheckPriceDTOList?: SpotCheckPriceDTO[];
  spotCheckRatio?: number;
}

/** CartGroupItemDTO */
export interface CartGroupItemDTO {
  /** @format int32 */
  brandAuthStatus?: number;
  /** @format int32 */
  brandHasReleased?: number;
  /** @format int64 */
  brandId?: number;
  /** @format int32 */
  brandStatus?: number;
  cartGroupName?: string;
  cartGroupNo?: string;
  cartList?: CartItemDTO[];
  /** @format int32 */
  isAuthorizing?: number;
  /** @format date-time */
  maxGroupCartCreateTime?: string;
}

/** CartItemDTO */
export interface CartItemDTO {
  additionNameJpSummary?: string;
  /** @format int32 */
  batchNumber?: number;
  /** @format int32 */
  blackReasonCode?: number;
  /** @format int32 */
  blackTag?: number;
  cartAdditionList?: CartAdditionItemDTO[];
  /** @format int64 */
  cartId?: number;
  /** @format int32 */
  channel?: number;
  combinationProductAdditionList?: CombinationProductAdditionRespDTO[];
  combinationProductItemList?: CombinationProductItemRespDTO[];
  consignPrice?: number;
  /** @format int32 */
  countryProductTag?: number;
  customerProductMsku?: string;
  isOnePsale?: boolean;
  /** @format int32 */
  livePriceFlag?: number;
  /** @format int32 */
  minOrderQuantity?: number;
  /** @format int32 */
  noAdditionalFlag?: number;
  /** @format int32 */
  notInStorage?: number;
  /** @format int32 */
  oemOrderType?: number;
  /** @format int32 */
  oemProductClassificationId?: number;
  /** @format int32 */
  orderQuantity?: number;
  paymentDetail?: string;
  paymentDetails?: SearchSourceSupplierPaymentItemRespDTO[];
  /** @format int32 */
  paymentType?: number;
  /** @format int64 */
  productCategoryFrontendNdId?: number;
  productCode?: string;
  productMainImg?: string;
  productPriceLadderList?: ProductPriceLadderRespDTO[];
  productProperties?: string;
  productPropertiesName?: string;
  productSellPrice?: number;
  productSku?: string;
  productSkuImg?: string;
  /** @format int32 */
  productSkuSource?: number;
  /** @format int32 */
  productStatus?: number;
  /** @format int32 */
  productTag?: number;
  productTitleJp?: string;
  /** @format int32 */
  productType?: number;
  questionClassificationName?: string;
  /** @format int64 */
  searchSourcePriceId?: number;
  secondaryProductCateCode?: string;
  /** @format int32 */
  shopIsBlack?: number;
  shopProductSku?: string;
  /** @format int32 */
  showDefectiveStatus?: number;
  /** @format int32 */
  showDeliveryTimeStatus?: number;
  /** @format int32 */
  stockQuantity?: number;
}

/** CartReqDTO */
export interface CartReqDTO {
  /** @format int64 */
  customerId?: number;
  /** @format int64 */
  customerShopId?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  productSkuOrName?: string;
  productType?: string;
  shopProductSku?: string;
  /** @format int32 */
  startIndex?: number;
  /** @format int32 */
  systemSource?: number;
}

/** CartSummaryDTO */
export interface CartSummaryDTO {
  /** @format int64 */
  sumCartOrderQuantity?: number;
  /** @format int64 */
  sumCartProductQuantity?: number;
}

/** CheckCartSkuDTO */
export interface CheckCartSkuDTO {
  /**
   * oemType 大货 样品
   * @format int32
   */
  oemOrderType?: number;
  /** skuList列表 */
  skuList?: string[];
}

/** CombinationOrderQueryReqDTO */
export interface CombinationOrderQueryReqDTO {
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
}

/** CombinationOrderRespDTO */
export interface CombinationOrderRespDTO {
  /** @format int32 */
  num?: number;
  systemOrderNo?: string;
}

/** CombinationProductAddCartReqDTO */
export interface CombinationProductAddCartReqDTO {
  cartIds?: number[];
  combinationProductSkuList?: CombinationProductInfoAddCartReqDTO[];
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  /** @format int64 */
  mainCustomerId?: number;
  /** @format int32 */
  systemSource?: number;
  unificationCustomerFullName?: string;
  validBrand?: boolean;
}

/** CombinationProductAdditionRespDTO */
export interface CombinationProductAdditionRespDTO {
  /**
   * 附加项配置ID
   * @format int32
   */
  additionConfigId?: number;
  /**
   * 附加项ID
   * @format int32
   */
  additionId?: number;
  /** 附加项名称 */
  additionName?: string;
  /** 附加项日文名称 */
  additionNameJp?: string;
  /**
   * 组合商品附加项表id
   * @format int64
   */
  combinationProductAdditionId?: number;
  /** 组合商品SKU */
  combinationProductSku?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /**
   * 用户店铺表id
   * @format int64
   */
  customerShopId?: number;
  /** 客户店铺名称 */
  customerShopName?: string;
  /** 辅料名称 */
  ingredientsName?: string;
  /** 辅料名称-日文 */
  ingredientsNameJp?: string;
  /** 辅料sku */
  ingredientsSku?: string;
  /**
   * 系统来源: 1-D2C; 2-B2B
   * @format int32
   */
  systemSource?: number;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/** CombinationProductFeignRespDTO */
export interface CombinationProductFeignRespDTO {
  /** @format int64 */
  combinationProductId?: number;
  combinationProductItems?: CombinationProductItemRespDTO[];
  combinationProductMainImg?: string;
  combinationProductName?: string;
  combinationProductProp?: string;
  combinationProductSku?: string;
  /** @format date-time */
  createTime?: string;
  customerProductMsku?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  /** @format int32 */
  existWaitCombinationFlag?: number;
  /** @format int32 */
  orderFlag?: number;
  /** @format int32 */
  systemSource?: number;
  unitPrice?: number;
  /** @format date-time */
  updateTime?: string;
}

/** CombinationProductInfoAddCartReqDTO */
export interface CombinationProductInfoAddCartReqDTO {
  apiFlag?: boolean;
  /** api下单三方商品信息 */
  apiProductDTO?: ApiProductDTO;
  cartAdditionList?: CartAdditionReqDTO[];
  combinationProductItemAddCartList?: CombinationProductItemAddCartDTO[];
  combinationProductSku?: string;
  customerProductMsku?: string;
  /** @format int32 */
  noAdditionalFlag?: number;
  /** @format int32 */
  num?: number;
  /** api一对多关联商品(取第一个加入购物车) */
  productRelationDTOList?: ApiProductRelationDTO[];
}

/** CombinationProductItemAddCartDTO */
export interface CombinationProductItemAddCartDTO {
  combinationProductItemAdditionList?: CartAdditionReqDTO[];
  /** @format int32 */
  noAdditionalFlag?: number;
  shopProductSku?: string;
}

/** CombinationProductItemRespDTO */
export interface CombinationProductItemRespDTO {
  additionList?: CartAdditionDTO[];
  /** @format int32 */
  channel?: number;
  /** @format int64 */
  combinationProductItemId?: number;
  combinationProductSku?: string;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  /** @format int32 */
  minOrderQuantity?: number;
  /** @format int32 */
  noAdditionalFlag?: number;
  /** @format int32 */
  oemProductClassificationId?: number;
  /** @format int64 */
  productCategoryFrontendNdId?: number;
  productCode?: string;
  productDetailUrl?: string;
  productPriceLadderList?: ProductPriceLadderRespDTO[];
  productPropertiesName?: string;
  productSellPrice?: number;
  productSku?: string;
  productSkuImg?: string;
  productTitle?: string;
  productTitleJp?: string;
  /** @format int32 */
  productType?: number;
  remainCombinationProductItemRespList?: RemainCombinationProductItemRespDTO[];
  shopProductSku?: string;
  /** @format int32 */
  unitNums?: number;
  /** @format date-time */
  updateTime?: string;
}

/** CombinationProductItemStock */
export interface CombinationProductItemStock {
  /** @format int64 */
  cartId?: number;
  combinationProductSku?: string;
  /** @format int32 */
  remainCombinationQuantity?: number;
  shopProductSku?: string;
  /** @format int32 */
  stockNum?: number;
  userStock?: boolean;
}

/** CombinationProductQueryDTO */
export interface CombinationProductQueryDTO {
  combinationProductSkus?: string[];
  withSubProduct?: boolean;
}

/** CombinationProductReqDTO */
export interface CombinationProductReqDTO {
  customerProductMskuList?: string[];
  /** @format int64 */
  customerShopId?: number;
  endUnitPrice?: number;
  /** @format int32 */
  existWaitCombinationFlag?: number;
  keywordName?: string;
  keywordSku?: string;
  keywordSkuList?: string[];
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  shopProductSkuList?: string[];
  /** @format int32 */
  startIndex?: number;
  startUnitPrice?: number;
}

/** CombinationProductRespDTO */
export interface CombinationProductRespDTO {
  /** 组合商品-附加项 */
  combinationProductAdditionList?: CombinationProductAdditionRespDTO[];
  /**
   * 组合商品id
   * @format int64
   */
  combinationProductId?: number;
  /** 组合商品-子商品详情 */
  combinationProductItemList?: CombinationProductItemRespDTO[];
  /** 组合商品主图 */
  combinationProductMainImg?: string;
  /** 组合商品名称 */
  combinationProductName?: string;
  /** 组合商品规格 */
  combinationProductProp?: string;
  /** 组合商品SKU(ZHP开头) */
  combinationProductSku?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 客户商品sku */
  customerProductMsku?: string;
  /**
   * 用户店铺表id
   * @format int64
   */
  customerShopId?: number;
  /** 客户店铺名称 */
  customerShopName?: string;
  /**
   * 是否存在待组合(0:不存在 1:存在)
   * @format int32
   */
  existWaitCombinationFlag?: number;
  /**
   * 是否下单标记(0:未下单 1:已下单)
   * @format int32
   */
  orderFlag?: number;
  /** pc销售单价 */
  productSellPrice?: number;
  /** 商品单价(rmb) */
  unitPrice?: number;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/** CombinationSkuSnapShotDTO */
export interface CombinationSkuSnapShotDTO {
  children?: CombinationSubSkuSnapShotDTO[];
  productImg?: string;
  productPropertiesName?: string;
  productSku?: string;
  productTitle?: string;
  shopProductSku?: string;
  /** @format int32 */
  splitNum?: number;
}

/** CombinationStockDTO */
export interface CombinationStockDTO {
  /** @format int32 */
  checkedUsedQuantity?: number;
  /** @format int32 */
  checkingUsedQuantity?: number;
  orderCode?: string;
}

/** CombinationSubSkuSnapShotDTO */
export interface CombinationSubSkuSnapShotDTO {
  orderCode?: string;
  productSku?: string;
  /** @format int32 */
  productType?: number;
  shopProductSku?: string;
  /** @format int32 */
  unitNum?: number;
}

/** ConfigDeliveryInterceptReqDTO */
export interface ConfigDeliveryInterceptReqDTO {
  interceptCancelTime?: string;
  /** @format int32 */
  interceptCancelType?: number;
  /** @format int32 */
  interceptFlag?: number;
  platformOrderNo?: string;
}

/** ConfirmPayReselectBadAdditionReqDTO */
export interface ConfirmPayReselectBadAdditionReqDTO {
  /** 订单编号 */
  orderNo?: string;
  /** 包编码 */
  pkgCode?: string;
  /** 平台订单编号(直行便订单编号) */
  platformOrderNo?: string;
  /** 转正操作人 */
  regularOperationName?: string;
  /** 客户商品SKU(客户商品库) */
  shopProductSku?: string;
}

/** ConfirmSku */
export interface ConfirmSku {
  /** @format int32 */
  confirmType?: number;
  /** @format int64 */
  deliveryReviewDetailId?: number;
  productSku?: string;
}

/** ContinueStockWareReqDTO */
export interface ContinueStockWareReqDTO {
  /** @format int32 */
  applyNum?: number;
  platformOrderNo?: string;
  productSku?: string;
  systemOrderNo?: string;
}

/** ConversionRecordReqDTO */
export interface ConversionRecordReqDTO {
  deliveryTaskCodes?: string;
  platformOrderNos?: string;
  shopProductSkus?: string;
  /** @format int32 */
  systemSource?: number;
}

/** ConversionRecordRespDTO */
export interface ConversionRecordRespDTO {
  /** @format date-time */
  becomeRegularTime?: string;
  /** @format int32 */
  defectiveAmount?: number;
  deliveryTaskCode?: string;
  moveProductName?: string;
  /** @format date-time */
  moveProductTime?: string;
  pkgCode?: string;
  platformOrderNo?: string;
  productSku?: string;
  regularOperationName?: string;
  /** @format date-time */
  regularOperationTime?: string;
}

/** CreateCombinationProductAdditionDTO */
export interface CreateCombinationProductAdditionDTO {
  /**
   * 附加项配置ID
   * @format int32
   */
  additionConfigId?: number;
  /**
   * 附加项ID
   * @format int32
   */
  additionId?: number;
  /** 辅料sku */
  customerIngredientsSku?: string;
}

/** CreateCombinationProductDTO */
export interface CreateCombinationProductDTO {
  /** 组合商品附加项 */
  combinationProductAdditionList?: CreateCombinationProductAdditionDTO[];
  /** 组合商品-子商品集合 */
  combinationProductItemList?: CreateCombinationProductItemDTO[];
  /** 组合商品主图 */
  combinationProductMainImg?: string;
  /** 组合商品名称 */
  combinationProductName?: string;
  /** 组合商品规格 */
  combinationProductProp?: string;
  /** 组合商品SKU(ZHP开头) */
  combinationProductSku?: string;
  /** 客户商品sku */
  customerProductMsku?: string;
  /**
   * 系统来源: 1-D2C; 2-B2B
   * @format int32
   */
  systemSource?: number;
}

/** CreateCombinationProductItemDTO */
export interface CreateCombinationProductItemDTO {
  /** 子商品附加项列表 */
  combinationProductItemAdditionList?: CartAdditionReqDTO[];
  /**
   * 是否需要附加项(0:需要:1:不需要)
   * @format int32
   */
  noAdditionalFlag?: number;
  /** 平台商品sku */
  productSku?: string;
  /** 店铺商品SKU(店铺商品库) */
  shopProductSku?: string;
  /**
   * 单个组合数量
   * @format int32
   */
  unitNums?: number;
}

/** CreateOrderAddressDTO */
export interface CreateOrderAddressDTO {
  address?: string;
  city?: string;
  cityJp?: string;
  clearanceCode?: string;
  country?: string;
  countryCode?: string;
  countryJp?: string;
  district?: string;
  districtJp?: string;
  email?: string;
  /** @format int64 */
  intForwarderConfigId?: number;
  /** @format int64 */
  intShipConfigId?: number;
  postalCode?: string;
  province?: string;
  provinceJp?: string;
  receiveName?: string;
  receiveTel?: string;
}

/** CreateOrderPreCheckDTO */
export interface CreateOrderPreCheckDTO {
  cartIds?: number[];
  /** @format int32 */
  orderType?: number;
}

/** CreateOrderPreCheckRespDTO */
export interface CreateOrderPreCheckRespDTO {
  banProductSkuList?: string[];
  blackSkuList?: string[];
  invalidProductSkuList?: string[];
  oemTypeRepeatSkuList?: string[];
  stockNotEnoughList?: string[];
}

/** CreateOrderReqDTO */
export interface CreateOrderReqDTO {
  /** @format int32 */
  addCartSource?: number;
  /** @format int32 */
  apiFlag?: number;
  cartIdList?: number[];
  combinationProductItemStockList?: CombinationProductItemStock[];
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  customerOrderNo?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  deliverAddress?: CreateOrderAddressDTO;
  deliveryAdditionalList?: CartAdditionReqDTO[];
  estimatedTotalOrderPrice?: number;
  /** @format int32 */
  isOemCarts?: number;
  /** @format int32 */
  isSynLogisticsNo?: number;
  /** @format int64 */
  mainCustomerId?: number;
  /** @format int32 */
  needStagesPayStatus?: number;
  orderName?: string;
  /** @format int32 */
  orderSource?: number;
  /** @format int32 */
  orderType?: number;
  platformOrderNo?: string;
  priceFloatPercent?: number;
  /** @format int64 */
  shopOrderId?: number;
  /** @format int32 */
  singleProductFlag?: number;
  /** @format int64 */
  superCustomerId?: number;
  supportOneSale?: boolean;
  /** @format int32 */
  systemSource?: number;
  unificationCustomerFullName?: string;
  useOneTheWayInventory?: boolean;
  validBrand?: boolean;
  wareCode?: string;
  wareName?: string;
}

/** CreateOrderRespDTO */
export interface CreateOrderRespDTO {
  code?: string;
  customerOrderNo?: string;
  estimatedTotalOrderPrice?: number;
  message?: string;
  /** @format int64 */
  platformOrderId?: number;
  platformOrderNo?: string;
  success?: boolean;
  /** @format int64 */
  taskId?: number;
  totalFreezeAmount?: number;
}

/** CreateReplenishPlanAddressReqDTO */
export interface CreateReplenishPlanAddressReqDTO {
  /** 详细地址 */
  address?: string;
  /** 区/县 */
  area?: string;
  /** 城市 */
  city?: string;
  /** 会社编码 */
  clubCode?: string;
  /** 公司名 */
  companyName?: string;
  /** 联系邮箱 */
  email?: string;
  /** 联系方式 */
  mobile?: string;
  /** 姓名 */
  name?: string;
  /** 国家 */
  nation?: string;
  /** 邮编 */
  postalCode?: string;
  /** 省/州 */
  province?: string;
}

/** CreateReplenishPlanItemReqDTO */
export interface CreateReplenishPlanItemReqDTO {
  /**
   * 发货数
   * @format int32
   */
  deliveryNums?: number;
  /** 店铺商品sku */
  shopProductSku?: string;
}

/** CreateReplenishPlanReqDTO */
export interface CreateReplenishPlanReqDTO {
  /** 发货附加项(必传打标和贴箱唛) */
  additionalList?: SubmitAdditionReqDTO[];
  /** 发货任务-清关地址信息 */
  declarationAddress?: CreateReplenishPlanAddressReqDTO;
  /** 日本配送公司名称 */
  distribution?: string;
  /** 中国货代公司名称 */
  forwarder?: string;
  /**
   * 中国货代公司id
   * @format int64
   */
  intForwarderConfigId?: number;
  /**
   * 日本配送公司id
   * @format int64
   */
  intShipConfigId?: number;
  /**
   * 标签模板id
   * @format int64
   */
  labelTemplateId?: number;
  /** 补货计划详情 */
  replenishPlanItemList?: CreateReplenishPlanItemReqDTO[];
  /** 运输方式 */
  shippingType?: string;
  /** 补货标题 */
  title?: string;
}

/** CreateSearchSourceRightsStatusVO */
export interface CreateSearchSourceRightsStatusVO {
  /** 服饰状态:true 有权益 false 无权益 */
  clothingStatus?: boolean;
  /** 杂货状态:true 有权益 false 无权益 */
  groceryStatus?: boolean;
  /** 杂货状态:true 有权益 false 无权益 */
  ingredientsStatus?: boolean;
}

/** CurrentCartItemDTO */
export interface CurrentCartItemDTO {
  /** @format int64 */
  cartId?: number;
  /** @format int32 */
  notInStorage?: number;
  /** @format int32 */
  orderQuantity?: number;
  productCode?: string;
  productMainImg?: string;
  productPropertiesName?: string;
  productSkuImg?: string;
  productTitleJp?: string;
  secondaryProductCateCode?: string;
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

/** CustomerIngredientsAddDTO */
export interface CustomerIngredientsAddDTO {
  /** @format int32 */
  autoWarnCount?: number;
  /** @format int32 */
  availableQuantity?: number;
  color?: string;
  colorJp?: string;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  /** @format int32 */
  inStockQuantity?: number;
  ingredientsImg?: string;
  ingredientsName?: string;
  ingredientsNameJp?: string;
  ingredientsSku?: string;
  /** @format int32 */
  lastMonthOutQuantity?: number;
  /** @format int32 */
  lockQuantity?: number;
  /** @format int32 */
  noStockQuantity?: number;
  productPropertiesName?: string;
  size?: string;
  sizeJp?: string;
  /** @format int32 */
  systemSource?: number;
  /** @format int32 */
  warningQuantity?: number;
  /** @format int32 */
  warningTag?: number;
}

/** CustomerIngredientsQueryDTO */
export interface CustomerIngredientsQueryDTO {
  /** 辅料sku集合 */
  ingredientsSkuList?: string[];
}

/** CustomerIngredientsRelatedDTO */
export interface CustomerIngredientsRelatedDTO {
  /** @format int64 */
  customerShopId?: number;
  ingredientsSkuList?: string[];
}

/** CustomerInvoiceDetailsRespDTO */
export interface CustomerInvoiceDetailsRespDTO {
  additionalFee?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int32 */
  deliveryNums?: number;
  /** @format int32 */
  deliveryStatus?: number;
  deliveryTaskCode?: string;
  /** @format date-time */
  deliveryTime?: string;
  freightFee?: number;
  logisticsCode?: string;
  /** @format int32 */
  preferFlag?: number;
  productDetailsList?: CustomerProductDetailsRespDTO[];
  /** @format int32 */
  realDeliveryNums?: number;
  remoteAreaFee?: number;
  shopProductSku?: string;
  /** @format int32 */
  splitFlag?: number;
  systemOrderNo?: string;
  /** @format int64 */
  weight?: number;
}

/** CustomerPlatformOrderItemRespDTO */
export interface CustomerPlatformOrderItemRespDTO {
  /** 商品单价 */
  actualProductSellPrice?: number;
  /** 总价 */
  actualTotalProductSellPrice?: number;
  /** 附加项费用 */
  additionalFee?: number;
  /**
   * 经过检品中数量
   * @format int32
   */
  afterCheckingQuantity?: number;
  /**
   * 售后状态(0: 未售后 1:已售后)
   * @format int32
   */
  afterSalesStatus?: number;
  /** API店铺商品SKU */
  apiShopProductSku?: string;
  /**
   * 次品归客户数量(>0时显示)
   * @format int32
   */
  badClientQuantity?: number;
  /** @format int32 */
  badConvertStockQuantity?: number;
  /**
   * 次品(>0时显示)
   * @format int32
   */
  badQuantity?: number;
  /** @format int32 */
  brandAuthStatus?: number;
  /** @format int32 */
  brandHasReleased?: number;
  /** @format int64 */
  brandId?: number;
  /** @format int32 */
  brandStatus?: number;
  /**
   * 取消结果：0-未处理; 1-处理中; 2-保留库存; 3-取消成功
   * @format int32
   */
  cancelProgress?: number;
  /**
   * 取消状态(1-未取消; 2-取消中; 3-取消成功; 4-保留库存)
   * @format int32
   */
  cancelStatus?: number;
  /**
   * 取消并退款(>0时显示)
   * @format int32
   */
  cancleAndRefundQuantity?: number;
  /**
   * 业务类型;1-市场购;2-透明购;3-OEM;5-线下采购
   * @format int32
   */
  channel?: number;
  /**
   * 已上架(>0时显示)
   * @format int32
   */
  checkedQuantity?: number;
  /**
   * 检品中(>0时显示)
   * @format int32
   */
  checkingQuantity?: number;
  /**
   * 质检上架数(针对组合商品的子商品)
   * @format int32
   */
  checkingShelveQuantity?: number;
  /** @format int32 */
  combinationCompleteQuantity?: number;
  /** 组合商品-子商品订单详情 */
  combinationOrderItemList?: CustomerPlatformOrderItemRespDTO[];
  /**
   * 是否是组合商品的子商品(0:不是 1:是)
   * @format int32
   */
  combinationProductItemFlag?: number;
  /**
   * 子商品仓库已上架数量
   * @format int32
   */
  combinationProductShelfQuantity?: number;
  /**
   * 组合状态：1-未组合; 2-组合中；3-组合完成；4-取消组合
   * @format int32
   */
  combinationStatus?: number;
  /**
   * 异常(>0时显示)
   * @format int32
   */
  confirmQuantity?: number;
  /** 客户商品sku */
  customerProductMsku?: string;
  /** 客户商品番号(客户自定义商品番号) */
  customerProductNo?: string;
  /** 出库手续费 */
  deliverStorageFee?: number;
  /**
   * 待发货数量(>0时显示)
   * @format int32
   */
  deliveredQuantity?: number;
  /**
   * 发货状态(0-待处理; 1-部分发货; 2-可发货; 3-已发货; 4-待发货)
   * @format int32
   */
  deliveryStatus?: number;
  /** 国内运费 */
  domesticShipping?: number;
  estimateStockTime?: string;
  /**
   * 国内运输中(>0时显示)
   * @format int32
   */
  expressQuantity?: number;
  /**
   * 冻结数量
   * @format int32
   */
  freezeQuantity?: number;
  /**
   * 已发货(>0时显示)
   * @format int32
   */
  hasDeliverQuantity?: number;
  /**
   * 已采购(>0时显示)
   * @format int32
   */
  hasPurchaeQuantity?: number;
  /** 国际运费 */
  internationalShippingFee?: number;
  /** @format int32 */
  isAuthorizing?: number;
  /**
   * 保留库存数量(>0时显示)
   * @format int32
   */
  keepStockQuantity?: number;
  /**
   * OEM订单类型: 1-OEM寻源单样品单; 2-OEM寻源单大货单; 3-OEM复购申请样品单; 4-OEM复购申请大货单
   * @format int32
   */
  oemOrderType?: number;
  /**
   * OEM商品分类表id：1-服装; 2-杂货; 3-辅料
   * @format int32
   */
  oemProductClassificationId?: number;
  /** @format int32 */
  onTheWayFreezeQuantity?: number;
  /** @format int32 */
  onTheWayFreezeQuantityChecked?: number;
  /** 商品状态: 1-待采购; 2-采购中; 3-已采购; 4-国内运输中; 5-已入库; 6-检品中; 7-已上架(已清算); 8-待发货; 9-已发货; 10-异常; 11-次品; 12-取消成功; 13-保留库存 */
  orderItemStatus?: string;
  /** 商品状态 */
  orderItemStatusList?: OrderItemStatusListDTO[];
  /**
   * 下单数量=冻结数量+销售数量
   * @format int32
   */
  orderQuantity?: number;
  /**
   * 订单类型: 1-直发订单; 2-囤货订单
   * @format int32
   */
  orderType?: number;
  /**
   * 平台订单表id
   * @format int64
   */
  platformOrderId?: number;
  /** 订单商品附加项 */
  platformOrderItemAdditionDTOList?: PlatformOrderItemAdditionDTO[];
  /**
   * 平台订单详情表id
   * @format int64
   */
  platformOrderItemId?: number;
  /**
   * 优先发货状态(0-否; 1-是)
   * @format int32
   */
  priorityShippingStatus?: number;
  /**
   * 已处理数量
   * @format int32
   */
  processedNum?: number;
  /** 平台商品SPU */
  productCode?: string;
  /** 详情URL */
  productDetailUrl?: string;
  /** 商品图片 */
  productMainImg?: string;
  /** 商品规格 */
  productPropertiesName?: string;
  /** 平台商品SKU */
  productSku?: string;
  /** 商品sku图 */
  productSkuImg?: string;
  /** 商品名称 */
  productTitle?: string;
  /** 商品名称日文 */
  productTitleJp?: string;
  /**
   * 商品类型: 1-普通商品; 2-OEM商品; 3-组合商品
   * @format int32
   */
  productType?: number;
  /**
   * 采购异常数量
   * @format int32
   */
  purchaseBadNum?: number;
  /** 代买手续费 */
  purchasingFee?: number;
  /**
   * 采购中(>0时显示)
   * @format int32
   */
  purchasingQuantity?: number;
  /** 质检手续费 */
  qualityInspectionFee?: number;
  /** 换购新商品sku */
  redemptionNewProductSku?: string;
  /**
   * 寻源单表id
   * @format int64
   */
  searchSourceOrderId?: number;
  /** 寻源单编号 */
  searchSourceOrderNo?: string;
  /**
   * 寻源单报价采购员-后台用户id
   * @format int64
   */
  searchSourceOrderPurchaserUserId?: number;
  /** 寻源单报价采购员-用户姓名 */
  searchSourceOrderPurchaserUserName?: string;
  /**
   * 寻源单复购申请表id
   * @format int64
   */
  searchSourceOrderRepurchaseApplyId?: number;
  /**
   * 寻源单表id
   * @format int64
   */
  searchSourcePriceId?: number;
  /** @format int32 */
  selectDefectiveGoods?: number;
  /**
   * 销售数量
   * @format int32
   */
  sellQuantity?: number;
  /** 结算价格 */
  settlePriceList?: SettlePrice[];
  /** 发货手续费 */
  shippingFee?: number;
  shopCode?: string;
  shopName?: string;
  /** 店铺商品SKU(店铺商品库) */
  shopProductSku?: string;
  /** @format int32 */
  spotCheckQuantity?: number;
  /** 档口手续费 */
  stallHandlingFee?: number;
  /**
   * 已入库(>0时显示)
   * @format int32
   */
  stockInQuantity?: number;
  /** 入库手续费 */
  storageFee?: number;
  /** 系统订单编号 */
  systemOrderNo?: string;
  /** @format int32 */
  turnQuantity?: number;
  /**
   * 未处理数量
   * @format int32
   */
  untreatedNum?: number;
  /**
   * 待采购(>0时显示)
   * @format int32
   */
  waitPurchaeQuantity?: number;
  /**
   * 仓库取消数量
   * @format int32
   */
  wmsCancelQuantity?: number;
}

/** CustomerPlatformOrderRespDTO */
export interface CustomerPlatformOrderRespDTO {
  /** @format int32 */
  afterSalesFlag?: number;
  /** @format date-time */
  createTime?: string;
  customerOrderNo?: string;
  /** @format int32 */
  deliverStatus?: number;
  /** @format int32 */
  deliveryReviewFlag?: number;
  /** @format int64 */
  intShipConfigId?: number;
  interceptCancelTime?: string;
  /** @format int32 */
  interceptCancelType?: number;
  /** @format int32 */
  interceptFlag?: number;
  orderCompositeStatus?: string;
  orderName?: string;
  /** @format int32 */
  orderSource?: number;
  /** @format int32 */
  orderType?: number;
  platformOrderDeliveryAdditionalList?: PlatformOrderDeliveryAdditionalDTO[];
  /** @format int64 */
  platformOrderId?: number;
  platformOrderNo?: string;
  /** @format int32 */
  platformOrderSettleStatus?: number;
  /** @format int32 */
  platformOrderStatus?: number;
  /** @format int32 */
  platformOrderType?: number;
  /** @format int32 */
  preferDeliverFlag?: number;
  /** @format int32 */
  processedNum?: number;
  productAdditionFreezeAmount?: number;
  receiveName?: string;
  /** @format int32 */
  separateFlag?: number;
  stageInfos?: StageInfoDTO[];
  totalFreezeAmount?: number;
  trackingNumber?: string;
  /** @format int32 */
  untreatedNum?: number;
  /** @format int32 */
  useOneTheWayInventoryFlag?: number;
}

/** CustomerProductDetailsRespDTO */
export interface CustomerProductDetailsRespDTO {
  actualProductSellPrice?: number;
  actualTotalProductSellPrice?: number;
  customerProductNo?: string;
  /** @format int32 */
  deliveryNums?: number;
  /** @format int32 */
  orderItemStatus?: number;
  /** @format int32 */
  orderQuantity?: number;
  productCode?: string;
  productDetailUrl?: string;
  productMainImg?: string;
  productPropertiesName?: string;
  productSku?: string;
  productTitleJp?: string;
  /** @format int32 */
  realDeliveryNums?: number;
  /** @format int32 */
  sellQuantity?: number;
  shopProductSku?: string;
}

/** CustomerProductInfoRespDTO */
export interface CustomerProductInfoRespDTO {
  apiShopProductMainImg?: string;
  apiShopProductPropertiesName?: string;
  apiShopProductSku?: string;
  apiShopProductTitle?: string;
  platformOrderNo?: string;
  platformType?: string;
  /** 商品sku图 */
  productSkuImg?: string;
}

/** CustomerReplenishPlanReqDTO */
export interface CustomerReplenishPlanReqDTO {
  /** 亚马逊msku */
  amazonMsku?: string;
  /** 亚马逊msku列表 */
  amazonMskuList?: string[];
  /** 发货单号 */
  deliveryTaskCode?: string;
  /** 发货单号列表 */
  deliveryTaskCodeList?: string[];
  /** 商品名称 */
  keywordName?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /**
   * 计划状态(1:处理中 2:已确认 3:已作废)
   * @format int32
   */
  planStatus?: number;
  /** 商品SKU */
  productSku?: string;
  /** 商品SKU列表 */
  productSkuList?: string[];
  /** 补货批次号 */
  shipmentId?: string;
  /** 补货批次号列表 */
  shipmentIdList?: string[];
  /** @format int32 */
  startIndex?: number;
}

/** CustomerSearchPlatformOrderItemReqDTO */
export interface CustomerSearchPlatformOrderItemReqDTO {
  /** @format int32 */
  channel?: number;
  /** @format int32 */
  combinationProductItemFlag?: number;
  customerOrderNo?: string;
  customerProductMskuList?: string[];
  /** @format int64 */
  customerShopId?: number;
  /** @format int32 */
  orderItemStatus?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  platformOrderNo?: string;
  productSku?: string;
  productSkuList?: string[];
  productTitleJp?: string;
  /** @format int32 */
  startIndex?: number;
}

/** CustomerSearchPlatformOrderItemRespDTO */
export interface CustomerSearchPlatformOrderItemRespDTO {
  actualProductSellPrice?: number;
  actualTotalProductSellPrice?: number;
  /** @format int32 */
  badClientQuantity?: number;
  /** @format int32 */
  badQuantity?: number;
  /** @format int32 */
  cancleAndRefundQuantity?: number;
  /** @format int32 */
  channel?: number;
  /** @format int32 */
  checkedQuantity?: number;
  /** @format int32 */
  checkingQuantity?: number;
  combinationOrderItemList?: CustomerSearchPlatformOrderItemRespDTO[];
  /** @format int32 */
  combinationProductShelfQuantity?: number;
  /** @format int32 */
  combinationStatus?: number;
  /** @format int32 */
  confirmQuantity?: number;
  customerOrderNo?: string;
  customerProductMsku?: string;
  /** @format int32 */
  deliveredQuantity?: number;
  /** @format int32 */
  expressQuantity?: number;
  /** @format int32 */
  freezeQuantity?: number;
  /** @format int32 */
  hasDeliverQuantity?: number;
  /** @format int32 */
  hasPurchaeQuantity?: number;
  /** @format int32 */
  onTheWayFreezeQuantity?: number;
  /** @format int32 */
  onTheWayFreezeQuantityChecked?: number;
  orderItemStatus?: string;
  orderItemStatusList?: OrderItemStatusListDTO[];
  /** @format int32 */
  orderQuantity?: number;
  /** @format int64 */
  platformOrderId?: number;
  /** @format int64 */
  platformOrderItemId?: number;
  platformOrderNo?: string;
  productCode?: string;
  productDetailUrl?: string;
  productMainImg?: string;
  productPropertiesName?: string;
  productSku?: string;
  productTitle?: string;
  productTitleJp?: string;
  /** @format int32 */
  productType?: number;
  /** @format int32 */
  purchaseBadNum?: number;
  /** @format int32 */
  purchasingQuantity?: number;
  /** @format int32 */
  realCheckedQuantity?: number;
  /** @format int32 */
  realStockInQuantity?: number;
  /** @format int32 */
  sellQuantity?: number;
  shopProductSku?: string;
  /** @format int32 */
  stockInQuantity?: number;
  systemOrderNo?: string;
  /** @format int32 */
  waitPurchaeQuantity?: number;
  /** @format int32 */
  wmsCancelQuantity?: number;
}

/** CustomerShopIngredientsQueryDTO */
export interface CustomerShopIngredientsQueryDTO {
  ascs?: string[];
  /**
   * 客户店铺id
   * @format int64
   */
  customerShopId?: number;
  descs?: string[];
  /**
   * 可用数(结束值)
   * @format int32
   */
  endAvailableQuantity?: number;
  /**
   * 锁定数(结束值)
   * @format int32
   */
  endLockQuantity?: number;
  /**
   * 待入库数结束值
   * @format int64
   */
  endNoStockQuantity?: number;
  /** 辅料名称-日文(oem寻源单-产品名称) */
  ingredientsNameJp?: string;
  /** 辅料sku(oem寻源单sku-商品sku) */
  ingredientsSku?: string;
  /** 辅料sku列表(oem寻源单sku-商品sku) */
  ingredientsSkuList?: string[];
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /**
   * 是否关联附加项(0:未关联 1:已关联)
   * @format int32
   */
  relatedFlag?: number;
  sort?: boolean;
  /**
   * 可用数(开始值)
   * @format int32
   */
  startAvailableQuantity?: number;
  /** @format int32 */
  startIndex?: number;
  /**
   * 锁定数(开始值)
   * @format int32
   */
  startLockQuantity?: number;
  /**
   * 待入库数开始值
   * @format int64
   */
  startNoStockQuantity?: number;
}

/** CustomerShopIngredientsReqDTO */
export interface CustomerShopIngredientsReqDTO {
  /** @format int64 */
  customerShopId?: number;
  ingredientsSku?: string;
  /** @format int32 */
  relatedFlag?: number;
  /** @format int32 */
  warningQuantity?: number;
}

/** CustomerShopIngredientsRespDTO */
export interface CustomerShopIngredientsRespDTO {
  /** @format int32 */
  autoWarnCount?: number;
  /** @format int32 */
  availableQuantity?: number;
  /** @format int32 */
  checked?: number;
  color?: string;
  colorJp?: string;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  customerShopId?: number;
  /** @format int64 */
  customerShopIngredientsId?: number;
  customerShopName?: string;
  /** @format int32 */
  freezed?: number;
  /** @format int32 */
  inStockQuantity?: number;
  ingredientsImg?: string;
  ingredientsName?: string;
  ingredientsNameJp?: string;
  ingredientsSku?: string;
  /** @format int32 */
  lastMonthOutQuantity?: number;
  /** @format int32 */
  lockQuantity?: number;
  /** @format int32 */
  noStockQuantity?: number;
  /** @format date-time */
  priceExpireTime?: string;
  queryStockSuccess?: boolean;
  /** @format int32 */
  relatedFlag?: number;
  /** @format int64 */
  searchSourceOrderId?: number;
  searchSourceOrderNo?: string;
  /** @format int64 */
  searchSourceOrderRepurchaseApplyId?: number;
  size?: string;
  sizeJp?: string;
  /** @format date-time */
  updateTime?: string;
  /** @format int32 */
  uploadFlag?: number;
  /** @format int32 */
  useable?: number;
  /** @format int32 */
  warningQuantity?: number;
  /** @format int32 */
  warningTag?: number;
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

/** DdTranslateRejectRemarkVo */
export interface DdTranslateRejectRemarkVo {
  /** 拒绝备注(日文) */
  rejectRemarkJp?: string;
  /**
   * 寻源单id
   * @format int64
   */
  searchSourceOrderId?: number;
}

/** DeductionDetailsRespDTO */
export interface DeductionDetailsRespDTO {
  additionalFee?: number;
  domesticShipping?: number;
  /** @format int64 */
  platformOrderId?: number;
  /** @format int32 */
  purchaseQuantity?: number;
  purchasingFee?: number;
  qualityInspectionFee?: number;
  shippingFee?: number;
  stallHandlingFee?: number;
  storageFee?: number;
}

/** DeleteCartReqDTO */
export interface DeleteCartReqDTO {
  /** @format int32 */
  addCartSource?: number;
  cartIdList?: number[];
  /** @format int64 */
  customerShopId?: number;
}

/** DeliverTaskReqDTO */
export interface DeliverTaskReqDTO {
  /** @format int32 */
  canDelivery?: number;
  /** @format date-time */
  createEndTime?: string;
  /** @format date-time */
  createStartTime?: string;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopIdList?: number[];
  customerShopName?: string;
  /** @format int32 */
  customerTag?: number;
  /** @format date-time */
  deliveryEndTime?: string;
  /** @format date-time */
  deliveryStartTime?: string;
  /** @format int32 */
  deliveryStatus?: number;
  deliveryStatusList?: number[];
  deliveryTaskCode?: string;
  deliveryTaskCodeList?: string[];
  deliveryTitle?: string;
  /** @format int32 */
  deliveryType?: number;
  deliveryTypeList?: number[];
  deliveryTypes?: string;
  /** @format date-time */
  endConfirmTimeEnd?: string;
  /** @format date-time */
  endConfirmTimeStart?: string;
  exceptionLocation?: string;
  forwarder?: string;
  historyLogisticsCode?: string;
  historyLogisticsCodeList?: string[];
  historyLogisticsCodeStr?: string;
  /** @format int64 */
  intForwarderConfigId?: number;
  logisticsCodeList?: string[];
  logisticsCodeStr?: string;
  /** @format int32 */
  managerConfirmStatus?: number;
  /** @format int64 */
  managerId?: number;
  managerName?: string;
  /** @format date-time */
  packEndTime?: string;
  /** @format date-time */
  packStartTime?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  payStatus?: number;
  pkgCode?: string;
  platformOrderNoList?: string[];
  platformOrderNoStr?: string;
  /** @format int32 */
  processingStatus?: number;
  productSkuList?: string[];
  productSkuStr?: string;
  receivingNationCode?: string;
  shopProductSkuList?: string[];
  shopProductSkuStr?: string;
  /** @format int32 */
  singleProduct?: number;
  sorts?: ISortFieldEnum[];
  /** @format int32 */
  startIndex?: number;
  /** @format int32 */
  systemSource?: number;
  /** @format int32 */
  thirdWarehouseType?: number;
  unificationCustomerFullName?: string;
  warehouse?: string;
}

/** DeliverTaskRespDTO */
export interface DeliverTaskRespDTO {
  additionalFee?: number;
  auditRemark?: string;
  boxMarkLink?: string;
  channelNo?: string;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  creater?: number;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  declarationError?: boolean;
  /** @format int32 */
  deliveryNums?: number;
  /** @format int32 */
  deliveryStatus?: number;
  deliveryTaskAdditionalDetailList?: DeliveryTaskAdditionalDetailRespDTO[];
  deliveryTaskAddressList?: DeliveryTaskAddressRespDTO[];
  deliveryTaskCode?: string;
  /** @format int64 */
  deliveryTaskId?: number;
  /** @format date-time */
  deliveryTime?: string;
  deliveryTitle?: string;
  /** @format int32 */
  deliveryType?: number;
  distribution?: string;
  /** @format int32 */
  downloadPackingListFlag?: number;
  /** @format date-time */
  endConfirmTime?: string;
  exceptionLocation?: string;
  extendDTO?: DeliveryTaskExtendDTO;
  /** @format int32 */
  fbaDownloadBoxMark?: number;
  /** @format int32 */
  fbaUploadCarton?: number;
  forwarder?: string;
  /** @format int64 */
  intForwarderConfigId?: number;
  /** @format int64 */
  intShipConfigId?: number;
  interceptEventId?: string;
  /** @format int32 */
  interceptStatus?: number;
  /** @format date-time */
  interceptTime?: string;
  /** @format int32 */
  invoiceStatus?: number;
  /** @format int64 */
  labelTemplateId?: number;
  /** @format int32 */
  labelType?: number;
  /** @format date-time */
  lmt?: string;
  logisticsChannelDTOList?: LogisticsChannelDTO[];
  logisticsCompanyCode?: string;
  logisticsCustomerAccount?: string;
  logisticsCustomerName?: string;
  logisticsDetailList?: DeliveryTaskLogisticsDetailRespDTO[];
  /** @format int32 */
  managerConfirmStatus?: number;
  /** @format int64 */
  managerId?: number;
  managerName?: string;
  /** @format int32 */
  membershipLevel?: number;
  /** @format int64 */
  membershipTemplateId?: number;
  message?: string;
  /** @format int64 */
  modifier?: number;
  /** @format int32 */
  needBoxMark?: number;
  /** @format int32 */
  needLabel?: number;
  /** @format date-time */
  packTime?: string;
  packingListUrl?: string;
  /** @format int32 */
  payStatus?: number;
  pkgPackList?: DeliveryPkgDTO[];
  platformOrderNo?: string;
  queryAdditionalFee?: boolean;
  /** @format int32 */
  realDeliveryNums?: number;
  receiverNation?: string;
  receivingNationCode?: string;
  receivingNationName?: string;
  remark?: string;
  shippingType?: string;
  /** @format int32 */
  sign?: number;
  /** @format int32 */
  singleProduct?: number;
  splitPackageFlag?: boolean;
  stationCode?: string;
  /** @format date-time */
  strandedTime?: string;
  taskDetailList?: DeliveryTaskDetailRespDTO[];
  /** @format int32 */
  thirdWarehouseType?: number;
  totalAmount?: number;
  /** @format int32 */
  totalBox?: number;
  /** @format int32 */
  totalWeight?: number;
  unificationCustomerFullName?: string;
  warehouse?: string;
  wmsDistribution?: string;
  wmsForwarder?: string;
  /** @format int64 */
  wmsIntForwarderConfigId?: number;
  /** @format int64 */
  wmsIntShipConfigId?: number;
  wmsShippingType?: string;
}

/** DeliveryAbnormalOrderCount */
export interface DeliveryAbnormalOrderCount {
  /**
   * 异常订单数量
   * @format int64
   */
  abnormalOrderCount?: number;
  /**
   * 待确认运输
   * @format int32
   */
  deliveryAbnormalOrderCount?: number;
  /**
   * sku处理待确认运输方式订单数
   * @format int32
   */
  skuProcessOrderCount?: number;
  /**
   * 总数
   * @format int64
   */
  totalOrderCount?: number;
  /**
   * 整单处理待确认运输方式订单数
   * @format int32
   */
  wholeProcessOrderCount?: number;
}

/** DeliveryAbnormalOrderDTO */
export interface DeliveryAbnormalOrderDTO {
  /**
   * 异常订单id
   * @format int64
   */
  abnormalOrderId?: number;
  /**
   * 是否取消发货
   * @format int32
   */
  cancelDelivery?: number;
  /** 变更理由 */
  changeReason?: string;
  /** 变更理由Code 建议由前端翻译，暂时先放在这 */
  changeReasonCode?: string;
  /** 审单编码 */
  deliveryReviewCode?: string;
  /**
   * 审单详情id
   * @format int64
   */
  deliveryReviewDetailId?: number;
  /**
   * 下单时间
   * @format date-time
   */
  orderCreateTime?: string;
  /**
   * 下单数量=冻结数量+销售数量
   * @format int32
   */
  orderQuantity?: number;
  /** 原运输方式 */
  originalDistribution?: string;
  /**
   * 原运输方式ID
   * @format int64
   */
  originalDistributionId?: number;
  /**
   * 平台订单详情表id
   * @format int64
   */
  platformOrderItemId?: number;
  /** 平台订单编号(直行便订单编号) */
  platformOrderNo?: string;
  /** 属性名称 */
  productPropertiesName?: string;
  /** 平台商品SKU */
  productSku?: string;
  /** 商品sku图 */
  productSkuImg?: string;
  /** 商品名称 */
  productTitle?: string;
  /** 商品名称日文 */
  productTitleJp?: string;
  /** 建议运输方式 */
  recommendDistribution?: string;
  /**
   * 建议运输方式ID
   * @format int64
   */
  recommendShipConfigId?: number;
  /** 店铺商品SKU(店铺商品库) */
  shopProductSku?: string;
  /** 系统订单编号 */
  systemOrderNo?: string;
}

/** DeliveryAbnormalOrderPageDTO */
export interface DeliveryAbnormalOrderPageDTO {
  /**
   * 是否取消发货
   * @format int32
   */
  cancelDelivery?: number;
  /** 变更理由 */
  changeReasonCode?: string;
  /** 用户订单号 */
  customerOrderNo?: string;
  deliveryReviewCode?: string;
  /** 订单明细列表 */
  details?: DeliveryAbnormalOrderDTO[];
  /**
   * 下单时间
   * @format date-time
   */
  orderCreateTime?: string;
  /**
   * 下单数量=冻结数量+销售数量
   * @format int32
   */
  orderQuantity?: number;
  /** 原运输方式 */
  originalDistribution?: string;
  /**
   * 原运输方式ID
   * @format int64
   */
  originalDistributionId?: number;
  /**
   * 平台订单详情表id
   * @format int64
   */
  platformOrderItemId?: number;
  /** 平台订单编号(直行便订单编号) */
  platformOrderNo?: string;
  /** 建议运输方式 */
  recommendDistribution?: string;
  /**
   * 建议运输方式ID
   * @format int64
   */
  recommendShipConfigId?: number;
  /** 系统订单编号 */
  systemOrderNo?: string;
  /**
   * 下单总数量
   * @format int32
   */
  totalOrderQuantity?: number;
}

/** DeliveryAbnormalOrderProcessDetailReqDTO */
export interface DeliveryAbnormalOrderProcessDetailReqDTO {
  /**
   * 1:接受 2:取消订单 3:按照原来的方式进行发货
   * @format int32
   */
  confirmType?: number;
  /**
   * 审单明细id
   * @format int64
   */
  deliveryReviewDetailId?: number;
  /** 系统订单号 */
  systemOrderNo?: string;
}

/** DeliveryAbnormalOrderProcessReqDTO */
export interface DeliveryAbnormalOrderProcessReqDTO {
  /** 详情列表 */
  confirmSkuList?: DeliveryAbnormalOrderProcessDetailReqDTO[];
  /**
   * 1:接受 2:取消订单 3:按照原来的方式进行发货
   * @format int32
   */
  confirmType?: number;
  /**
   * 店铺id
   * @format int64
   */
  customerShopId?: number;
  /** 审单编码 */
  deliveryReviewCode?: string;
  /** 平台订单号 */
  platformOrderNo?: string;
}

/** DeliveryAdditionalRespDTO */
export interface DeliveryAdditionalRespDTO {
  /**
   * 附加项配置id
   * @format int32
   */
  additionConfigId?: number;
  /**
   * 附加项id
   * @format int32
   */
  additionId?: number;
  /** 附加项名称 */
  additionName?: string;
  /** 附加项日文名称 */
  additionNameJp?: string;
  /**
   * 扣费依据id
   * @format int32
   */
  calculateConfigId?: number;
  /** 费用 */
  cost?: number;
  /**
   * 费用类型 0 金额 1 百分比
   * @format int32
   */
  costType?: number;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 辅料名称 */
  ingredientsName?: string;
  /** 辅料名称-日文 */
  ingredientsNameJp?: string;
  /** 辅料sku */
  ingredientsSku?: string;
  /**
   * 平台订单表id
   * @format int64
   */
  platformOrderId?: number;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/** DeliveryAddressCreateDTO */
export interface DeliveryAddressCreateDTO {
  /** 详细地址 */
  address?: string;
  /** 区/县 */
  area?: string;
  /** 城市 */
  city?: string;
  /** 企业或个人通关码 */
  clearanceCode?: string;
  /**
   * 通关名义 0-个人 1-企业
   * @format int32
   */
  clearanceType?: number;
  /** 会社编码 */
  clubCode?: string;
  /** 国家Code */
  code?: string;
  /** 公司名 */
  companyName?: string;
  /** 联系邮箱 */
  email?: string;
  /** 联系方式 */
  mobile?: string;
  /** 姓名 */
  name?: string;
  /** 国家 */
  nation?: string;
  platformOrderNo?: string;
  /** 邮编 */
  postalCode?: string;
  /** 省/州 */
  province?: string;
}

/** DeliveryAfterSalesReqDTO */
export interface DeliveryAfterSalesReqDTO {
  /** @format int32 */
  abnormalOrderType?: number;
  afterSalesImg?: string;
  /** @format int32 */
  afterSalesReason?: number;
  afterSalesRefundPrice?: number;
  afterSalesRefundTotalAmount?: number;
  /** @format int32 */
  applyAfterSalesQuantity?: number;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  /** @format int32 */
  defectiveAmount?: number;
  deliveryTaskCode?: string;
  detailedExplain?: string;
  platformOrderNo?: string;
  productMainImg?: string;
  productPropertiesName?: string;
  productSku?: string;
  productSkuImg?: string;
  productTitle?: string;
  /** @format int32 */
  productType?: number;
  shopProductSku?: string;
  /** @format int32 */
  systemSource?: number;
  unificationCustomerFullName?: string;
}

/** DeliveryBoxDetailRespDTO */
export interface DeliveryBoxDetailRespDTO {
  amazonAsin?: string;
  amazonFnsku?: string;
  amazonMsku?: string;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  creater?: number;
  deliveryBoxCode?: string;
  /** @format int64 */
  deliveryBoxDetailId?: number;
  /** @format int32 */
  deliveryNums?: number;
  deliveryTaskCode?: string;
  /** @format int32 */
  inNums?: number;
  /** @format date-time */
  lmt?: string;
  /** @format int64 */
  modifier?: number;
  /** @format int32 */
  nums?: number;
  productImg?: string;
  productName?: string;
  productSku?: string;
  shopProductSku?: string;
}

/** DeliveryBoxPkgDetailDTO */
export interface DeliveryBoxPkgDetailDTO {
  amazonAsin?: string;
  amazonFnsku?: string;
  amazonMsku?: string;
  deliveryBoxCode?: string;
  deliveryTaskCode?: string;
  insidePackCode?: string;
  /** @format int32 */
  nums?: number;
  /** @format int32 */
  orderType?: number;
  /** @format int32 */
  pkgAmount?: number;
  pkgCode?: string;
  productImg?: string;
  productName?: string;
  shopProductSku?: string;
}

/** DeliveryBoxRespDTO */
export interface DeliveryBoxRespDTO {
  boxMarkLink?: string;
  boxPkgDetailList?: DeliveryBoxPkgDetailDTO[];
  /** @format int64 */
  boxTemplateId?: number;
  bulky?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  creater?: number;
  deliveryBoxCode?: string;
  deliveryBoxDetailList?: DeliveryBoxDetailRespDTO[];
  /** @format int64 */
  deliveryBoxId?: number;
  deliveryTaskCode?: string;
  /** @format int32 */
  height?: number;
  insidePackCode?: string;
  /** @format int32 */
  length?: number;
  /** @format date-time */
  lmt?: string;
  logisticsCode?: string;
  logisticsCompanyCode?: string;
  /** @format int64 */
  modifier?: number;
  /** @format int32 */
  nums?: number;
  priceLimit?: number;
  totalProductUsPrice?: number;
  /** @format int64 */
  weight?: number;
  weightLimit?: number;
  /** @format int32 */
  width?: number;
}

/** DeliveryCreateReqDTO */
export interface DeliveryCreateReqDTO {
  /** 箱唛文件地址 */
  boxMarkLink?: string;
  /** 分行代码 */
  branchCode?: string;
  /** 发货任务-清关地址信息 */
  declarationAddress?: DeliveryAddressCreateDTO;
  /** 申报折扣 */
  declarationDiscount?: number;
  /** 发货任务详情(d2c,b2b发货 必传) */
  deliverTaskDetails?: DeliveryDetailCreateDTO[];
  /** 发货附加项(d2c,b2b发货 非必传) */
  deliveryAdditionalList?: SubmitAdditionReqDTO[];
  /**
   * 发货总数
   * @format int32
   */
  deliveryNums?: number;
  /** 发货标题 */
  deliveryTitle?: string;
  /**
   * 发货类型(0:大件fba 1:大件普通
   * @format int32
   */
  deliveryType?: number;
  /** @format int32 */
  directSaleFlag?: number;
  /** 日本配送公司名称 */
  distribution?: string;
  /** 金融机构代码 */
  financialInstitutionCode?: string;
  /** 中国货代公司名称 */
  forwarder?: string;
  /** 进口商标准代码 */
  importerCode?: string;
  /**
   * 中国货代公司id
   * @format int64
   */
  intForwarderConfigId?: number;
  /**
   * 日本配送公司id
   * @format int64
   */
  intShipConfigId?: number;
  isHistory?: boolean;
  /** 是否直发海外仓(是:true 否:false d2c默认:false) */
  isOversea?: boolean;
  /**
   * 标签模板id
   * @format int64
   */
  labelTemplateId?: number;
  /**
   * 打标类型(B2B) 0-模板打印，1-sku单独打印，2-sku同一文件打印
   * @format int32
   */
  labelType?: number;
  /** @format int32 */
  orderSource?: number;
  /** 装箱清单url */
  packingListUrl?: string;
  /** 直行便订单编号 */
  platformOrderNo?: string;
  preDeliveryCreate?: boolean;
  /** @format int32 */
  preferFlag?: number;
  /**
   * 价格申报方式 0-原价 1-折扣
   * @format int32
   */
  priceDeclarationType?: number;
  /** 发货任务-收件人地址信息 */
  receiverAddress?: DeliveryAddressCreateDTO;
  /** 发货任务-收件人英文地址信息 */
  receiverEnglishAddress?: DeliveryAddressCreateDTO;
  /** 发货任务-发件人地址信息 */
  senderAddress?: DeliveryAddressCreateDTO;
  /** 运输方式 */
  shippingType?: string;
  /** 运输方式(日文) */
  shippingTypeJp?: string;
  /**
   * 系统来源 1-D2C,2-B2B
   * @format int32
   */
  systemSource?: number;
  /**
   * 关税收取方式 0-请求书 1-账号扣税
   * @format int32
   */
  tariffType?: number;
  /** 扣税账号 */
  taxDeductionAccount?: string;
  /**
   * 第三方仓库类型(B2B) 0-其他 1-fba 2-乐天 3-shoplist 4-zozotown
   * @format int32
   */
  thirdWarehouseType?: number;
  /** 仓库编号 */
  warehouse?: string;
}

/** DeliveryDetailCreateDTO */
export interface DeliveryDetailCreateDTO {
  /** sku条形码文件名 */
  barCodeName?: string;
  /** sku条形码文件url */
  barCodeUrl?: string;
  /** 編號 */
  coding?: string;
  /** 组合商品信息快照 */
  combinationSkuSnapShot?: string;
  /** 名称 */
  commodityName?: string;
  /** 直行便SKU */
  commoditySku?: string;
  /**
   * 发货数
   * @format int32
   */
  deliveryNums?: number;
  /**
   * 库房发货数
   * @format int32
   */
  depotDeliveryNums?: number;
  /**
   * 在途发货数
   * @format int32
   */
  onTheWayFreezeQuantity?: number;
  /**
   * 订单-采购发货数
   * @format int32
   */
  orderDeliveryNums?: number;
  /** 系统订单号(d2c必传) */
  orderNo?: string;
  /** 平台商品SKU */
  productSku?: string;
  /** 店铺商品sku */
  shopProductSku?: string;
  /**
   * 组合商品拆分标志(0:不是 1:是)
   * @format int32
   */
  splitFlag?: number;
  /** 系统(d2c必传) */
  systemOrderItemId?: string;
  transportAttr?: string;
  transportAttrCode?: string;
}

/** DeliveryPkgDTO */
export interface DeliveryPkgDTO {
  /** @format int32 */
  inNums?: number;
  /** @format int32 */
  pkgAmount?: number;
  pkgCode?: string;
  productImg?: string;
  productName?: string;
  productPropertiesName?: string;
  productSku?: string;
  shopProductSku?: string;
  /** @format int32 */
  totalNums?: number;
}

/** DeliveryReviewNoticeCount */
export interface DeliveryReviewNoticeCount {
  /** @format int32 */
  byOrderCount?: number;
  /** @format int32 */
  bySkuCount?: number;
  /** @format int32 */
  totalCount?: number;
}

/** DeliveryReviewOrderConfirmReqDTO */
export interface DeliveryReviewOrderConfirmReqDTO {
  /** @format int32 */
  confirmType?: number;
  deliveryReviewCode?: string;
}

/** DeliveryReviewOrderPage */
export interface DeliveryReviewOrderPage {
  changeReason?: string;
  changeReasonCode?: string;
  /** @format date-time */
  createTime?: string;
  deliveryReviewCode?: string;
  deliveryTaskCode?: string;
  deliveryTitle?: string;
  /** @format int32 */
  deliveryType?: number;
  originalDistribution?: string;
  recommendDistribution?: string;
  /** @format int64 */
  recommendShipConfigId?: number;
  skuList?: DeliveryReviewOrderSku[];
  /** @format int32 */
  thirdWarehouseType?: number;
}

/** DeliveryReviewOrderQuery */
export interface DeliveryReviewOrderQuery {
  deliveryTaskCodeList?: string[];
  deliveryTitle?: string;
  /** @format int32 */
  deliveryType?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  sorts?: ISortFieldEnum[];
  /** @format int32 */
  startIndex?: number;
}

/** DeliveryReviewOrderSku */
export interface DeliveryReviewOrderSku {
  /** @format int64 */
  auditIntShipConfigId?: number;
  changeReason?: string;
  changeReasonCode?: string;
  /** @format int32 */
  confirmType?: number;
  /** @format int32 */
  deliveryNums?: number;
  deliveryReviewCode?: string;
  /** @format int64 */
  deliveryReviewDetailId?: number;
  /** @format int32 */
  deliveryType?: number;
  /** @format int64 */
  intShipConfigId?: number;
  productImage?: string;
  productName?: string;
  productPropertiesName?: string;
  productSku?: string;
  recommendDistribution?: string;
  recommendForwarder?: string;
}

/** DeliveryReviewOrderSkuConfirmReqDTO */
export interface DeliveryReviewOrderSkuConfirmReqDTO {
  deliveryReviewCode?: string;
  skuList?: ConfirmSku[];
}

/** DeliveryTaskAdditionalDetailRespDTO */
export interface DeliveryTaskAdditionalDetailRespDTO {
  /** @format int32 */
  additionConfigId?: number;
  /** @format int32 */
  additionId?: number;
  additionName?: string;
  additionNameJp?: string;
  /** @format int32 */
  calculateConfigId?: number;
  cost?: number;
  /** @format int32 */
  costType?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  creater?: number;
  /** @format int64 */
  deliveryTaskAdditionalDetailId?: number;
  deliveryTaskCode?: string;
  image?: string;
  ingredientsName?: string;
  ingredientsNameJp?: string;
  ingredientsSku?: string;
  /** @format date-time */
  lmt?: string;
  /** @format int64 */
  modifier?: number;
  /** @format int32 */
  useNums?: number;
}

/** DeliveryTaskAddressRespDTO */
export interface DeliveryTaskAddressRespDTO {
  address?: string;
  /** @format int32 */
  addressType?: number;
  area?: string;
  city?: string;
  /** @format int32 */
  clearanceType?: number;
  clubCode?: string;
  companyName?: string;
  email?: string;
  mobile?: string;
  name?: string;
  nation?: string;
  postalCode?: string;
  province?: string;
}

/** DeliveryTaskDetailRespDTO */
export interface DeliveryTaskDetailRespDTO {
  /** @format int32 */
  afterSalesStatus?: number;
  amazonAsin?: string;
  amazonFnsku?: string;
  amazonMsku?: string;
  amazonProductTitle?: string;
  barCodeName?: string;
  barCodeUrl?: string;
  /** @format int32 */
  checked?: number;
  coding?: string;
  commodityName?: string;
  commoditySku?: string;
  compilationMethod?: string;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  creater?: number;
  customerProductMsku?: string;
  customsPrice?: number;
  customsPriceJp?: number;
  /** @format int32 */
  deductionNums?: number;
  /** @format int32 */
  defectiveAmount?: number;
  /** @format int32 */
  deliveryNums?: number;
  deliveryTaskCode?: string;
  /** @format int64 */
  deliveryTaskDetailId?: number;
  /** @format int32 */
  depotDeliveryNums?: number;
  /** @format int32 */
  inNums?: number;
  /** @format date-time */
  lmt?: string;
  /** @format int64 */
  modifier?: number;
  /** @format int32 */
  orderDeliveryNums?: number;
  orderNo?: string;
  pkgCodeList?: string[];
  productCategoryEnglishName?: string;
  productCategoryName?: string;
  productDeclarationCode?: string;
  productEnglishName?: string;
  productImg?: string;
  productLink?: string;
  productName?: string;
  productPrice?: number;
  productPriceJp?: number;
  productPropertiesName?: string;
  productSku?: string;
  productUsPrice?: number;
  /** @format int32 */
  realDeliveryNums?: number;
  receiveHouse?: string;
  remark?: string;
  shipmentId?: string;
  shipmentName?: string;
  shopProductSku?: string;
  thirdProductSku?: string;
  warehouse?: string;
}

/** DeliveryTaskExtendDTO */
export interface DeliveryTaskExtendDTO {
  branchCode?: string;
  declarationDiscount?: number;
  deliveryTaskCode?: string;
  /** @format int64 */
  deliveryTaskExtendId?: number;
  financialInstitutionCode?: string;
  importerCode?: string;
  invoicRemark?: string;
  managerConfirmOperator?: string;
  /** @format date-time */
  managerConfirmTime?: string;
  managerRemark?: string;
  managerRemarkImgs?: string;
  managerRemarkOperator?: string;
  /** @format int32 */
  priceDeclarationType?: number;
  /** @format int32 */
  tariffType?: number;
  taxDeductionAccount?: string;
}

/** DeliveryTaskLogisticsDetailRespDTO */
export interface DeliveryTaskLogisticsDetailRespDTO {
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  deliveryBoxList?: DeliveryBoxRespDTO[];
  deliveryTaskCode?: string;
  /** @format int64 */
  deliveryTaskLogisticsDetailId?: number;
  /** @format date-time */
  deliveryTime?: string;
  finalLogisticsCode?: string;
  freightFee?: number;
  insidePackCode?: string;
  logisticsCode?: string;
  logisticsCompanyCode?: string;
  logisticsTagUrl?: string;
  /** @format int64 */
  mainCustomerId?: number;
  /** @format int32 */
  packageNums?: number;
  platformOrderNo?: string;
  priceLimit?: number;
  receivingNationCode?: string;
  receivingNationName?: string;
  remoteAreaFee?: number;
  /** @format int32 */
  systemSource?: number;
  unificationCustomerFullName?: string;
  valuationWeight?: number;
  weightLimit?: number;
  /** @format int64 */
  wmsIntShipConfigId?: number;
}

/** EasyOrderDeliveryCreateSource */
export interface EasyOrderDeliveryCreateSource {
  deliveryAddressCreateDTO?: DeliveryAddressCreateDTO;
  platformOrderNo?: string;
}

/** EditDeliveryAdditionsReqDTO */
export interface EditDeliveryAdditionsReqDTO {
  /** @format int64 */
  customerShopId?: number;
  deliveryAdditionalList?: CartAdditionReqDTO[];
  /** @format int64 */
  mainCustomerId?: number;
  /** @format int64 */
  platformOrderId?: number;
}

/** EditIntShipReqDTO */
export interface EditIntShipReqDTO {
  /** @format int64 */
  intForwarderConfigId?: number;
  /** @format int64 */
  intShipConfigId?: number;
  /** @format int64 */
  platformOrderId?: number;
  /** @format int64 */
  shopId?: number;
}

/** EditItemAdditionsReqDTO */
export interface EditItemAdditionsReqDTO {
  cartAdditionList?: CartAdditionReqDTO[];
  /** @format int64 */
  customerShopId?: number;
  /** @format int64 */
  mainCustomerId?: number;
  /** @format int64 */
  platformOrderId?: number;
  /** @format int64 */
  platformOrderItemId?: number;
}

/** EditShopProductSkuFileReqDTO */
export interface EditShopProductSkuFileReqDTO {
  coding?: string;
  commodityName?: string;
  commoditySku?: string;
  /** @format int64 */
  customerShopId?: number;
  name?: string;
  shopProductSku?: string;
  /** @format int32 */
  type?: number;
  url?: string;
}

/** ExcelImportFailMessageDTO */
export interface ExcelImportFailMessageDTO {
  /** @format int32 */
  line?: number;
  message?: string;
}

/** ExcelImportQueryTaskReqDTO */
export interface ExcelImportQueryTaskReqDTO {
  /** @format int64 */
  customerShopId?: number;
  /** @format int64 */
  taskId?: number;
  /** @format int32 */
  taskType?: number;
}

/** ExcelImportQueryTaskRespDTO */
export interface ExcelImportQueryTaskRespDTO {
  /** @format int32 */
  failQuantity?: number;
  /** @format int32 */
  knowFlag?: number;
  message?: string;
  messageList?: ExcelImportFailMessageDTO[];
  ossUrl?: string;
  /** @format int32 */
  successQuantity?: number;
  taskId?: string;
  /** @format int32 */
  taskStatus?: number;
  /** @format int32 */
  taskType?: number;
  /** @format int32 */
  totalQuantity?: number;
  /** @format int32 */
  validFlag?: number;
}

/** ExcelImportSubmitTaskReqDTO */
export interface ExcelImportSubmitTaskReqDTO {
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  ossUrl?: string;
  stationCode?: string;
  /** @format int32 */
  taskType?: number;
  /** 是否使用在途库存 */
  useOnTheWayStock?: boolean;
}

/** ExportAbnormalOrderReqDTO */
export interface ExportAbnormalOrderReqDTO {
  /**
   * 异常订单类型: 1-问题处理; 2-售后; 3-申请取消
   * @format int32
   */
  abnormalOrderType?: number;
  /**
   * 售后进度：0-待处理; 1-业务处理中; 2-财务处理中; 3-已退款; 4-已拒绝; 5-重新发起（处理中）; 6-已撤销
   * @format int32
   */
  afterSalesProgress?: number;
  /**
   * 售后原因：1-次品; 2-相异品; 3-数量不足; 4-其他
   * @format int32
   */
  afterSalesReason?: number;
  /**
   * 申请售后时间
   * @format date-time
   */
  applyAfterSalesTime?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** 平台订单编号(直行便订单编号) */
  platformOrderNo?: string;
  /** 平台商品SKU */
  productSku?: string;
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
}

/** ExportAmazonSkuReqDTO */
export interface ExportAmazonSkuReqDTO {
  /** @format int64 */
  customerId?: number;
  /** @format int64 */
  customerShopId?: number;
  /** @format int32 */
  endAmazonSellQuantity?: number;
  /** @format int32 */
  endPendingStorage?: number;
  inventory?: string;
  processing?: string;
  productSkuOrName?: string;
  productType?: string;
  sale?: string;
  shopProductSku?: string;
  shopProductSkuIdList?: number[];
  /** @format int32 */
  startAmazonSellQuantity?: number;
  /** @format int32 */
  startPendingStorage?: number;
}

/** ExportRespDTO */
export interface ExportRespDTO {
  url?: string;
}

/** FillSellPriceItemDTO */
export interface FillSellPriceItemDTO {
  /** @format int64 */
  searchSourceOrderSupplierPriceItemId?: number;
  /** 销售价 */
  sellPrice?: number;
}

/** FillSellPriceVO */
export interface FillSellPriceVO {
  /**
   * 是否含税标志: 0-否; 1-是
   * @format int32
   */
  containTaxFlag?: number;
  /** 客户报价打样费 */
  customerSamplePrice?: number;
  /** 阶梯销售价列表 */
  fillSellPriceItemList?: FillSellPriceItemDTO[];
  /** sku销售价列表 */
  fillSkuSellPriceItemList?: FillSkuSellPriceItemDTO[];
  /** 备注 */
  remark?: string;
  /**
   * 寻源单报价id
   * @format int64
   */
  searchSourceId?: number;
  /**
   * 寻源单报价id
   * @format int64
   */
  searchSourceOrderSupplierPriceId?: number;
}

/** FillSkuSellPriceItemDTO */
export interface FillSkuSellPriceItemDTO {
  /** @format int64 */
  searchSourceOrderSupplierPriceSkuItemId?: number;
  /** 销售价 */
  sellPrice?: number;
}

/** GetCurrentCartListRespDTO */
export interface GetCurrentCartListRespDTO {
  cartSummary?: CartSummaryDTO;
  currentCartList?: CurrentCartItemDTO[];
}

/** GetCustomerPlatformOrderPageReqDTO */
export interface GetCustomerPlatformOrderPageReqDTO {
  /** @format date-time */
  createEndTime?: string;
  /** @format date-time */
  createStartTime?: string;
  customerOrderNo?: string;
  customerOrderNoList?: string[];
  /** @format int64 */
  customerShopId?: number;
  /**
   * 是否发货
   * @format int32
   */
  deliverFlag?: number;
  /** @format date-time */
  deliverTimeEnd?: string;
  /** @format date-time */
  deliverTimeStart?: string;
  /** @format int32 */
  interceptCancelType?: number;
  /** @format int32 */
  interceptFlag?: number;
  orderName?: string;
  orderNameList?: string[];
  /** @format int32 */
  orderSource?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  platformOrderIds?: number[];
  platformOrderNo?: string;
  platformOrderNoList?: string[];
  platformOrderSettleStatus?: string;
  /** @format int32 */
  platformOrderStatus?: number;
  /** @format int32 */
  platformOrderType?: number;
  /** @format int32 */
  preferDeliverFlag?: number;
  receiveName?: string;
  /** @format int32 */
  startIndex?: number;
}

/** GetManagePlatformOrderPageReqDTO */
export interface GetManagePlatformOrderPageReqDTO {
  cancelStatusSet?: number[];
  /** @format int32 */
  containOemGoods?: number;
  /** @format date-time */
  createEndTime?: string;
  /** @format date-time */
  createStartTime?: string;
  /** @format int64 */
  customerId?: number;
  customerIds?: number[];
  customerOrderNo?: string;
  customerOrderNoList?: string[];
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  /** 客户标签 1 oem项目重点客户 2 oem非项目重点客户 */
  customerTags?: number[];
  export?: boolean;
  /** @format int32 */
  orderSource?: number;
  /** @format int32 */
  orderType?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  platformOrderNo?: string;
  platformOrderNoList?: string[];
  /** @format int32 */
  platformOrderStatus?: number;
  /** @format int32 */
  separateFlag?: number;
  /** @format int32 */
  startIndex?: number;
  /** @format int32 */
  systemSource?: number;
  unificationCustomerFullName?: string;
}

/** GetMaxApplyAmountRespDTO */
export interface GetMaxApplyAmountRespDTO {
  freezeFlag?: boolean;
  stageHasFreezeRates?: StageHasFreezeRateDTO[];
}

/** GetPlatformOrderDetailRespDTO */
export interface GetPlatformOrderDetailRespDTO {
  invoiceDetailsList?: CustomerInvoiceDetailsRespDTO[];
  /** @format int32 */
  orderType?: number;
  platformOrder?: PlatformOrderDTO;
  platformOrderDeliverAddressDTO?: PlatformOrderDeliverAddressDTO;
  platformOrderDeliveryAdditionalList?: PlatformOrderDeliveryAdditionalDTO[];
  platformOrderItemList?: CustomerPlatformOrderItemRespDTO[];
  stageInfos?: StageInfoDTO[];
}

/** HistoryAdditionMergeRespDTO */
export interface HistoryAdditionMergeRespDTO {
  /**
   * 附加项配置ID
   * @format int32
   */
  additionConfigId?: number;
  /** 附加项拓展名称 */
  additionExtraName?: string;
  /**
   * 附加项ID
   * @format int32
   */
  additionId?: number;
  /** 附加项中文名称 */
  additionName?: string;
  /** 附加项日文名称 */
  additionNameJp?: string;
  /**
   * 附加项数量
   * @format int32
   */
  additionQuantity?: number;
  calculateConfigFormula?: string;
  /** @format int32 */
  calculateConfigId?: number;
  /** 费用 */
  cost?: number;
  /** @format int32 */
  costType?: number;
  /** @format int32 */
  deductionNode?: number;
  deductionNodeName?: string;
  /** 辅料图片 */
  ingredientsImg?: string;
  /** 辅料名称 */
  ingredientsName?: string;
  /** 辅料名称-日文 */
  ingredientsNameJp?: string;
  /** 辅料sku */
  ingredientsSku?: string;
}

/** ISortFieldEnum */
export interface ISortFieldEnum {
  asc?: boolean;
  field?: string;
}

/** ImportStockReqDTO */
export interface ImportStockReqDTO {
  /** @format int32 */
  checked?: number;
  color?: string;
  colorJp?: string;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  customerShopId?: string;
  customerShopName?: string;
  /** @format int32 */
  freezed?: number;
  gridCode?: string;
  itemCategory?: string;
  /** @format int32 */
  oemProductClassificationId?: number;
  originalSku?: string;
  pkgCode?: string;
  productLink?: string;
  productName?: string;
  productProp?: string;
  productSku?: string;
  /** @format int32 */
  productType?: number;
  remark?: string;
  /** @format int32 */
  shelved?: number;
  shopProductSku?: string;
  size?: string;
  sizeJp?: string;
  /** @format int32 */
  systemSource?: number;
  warehouse?: string;
}

/** InboundOrderAdditionReqDTO */
export interface InboundOrderAdditionReqDTO {
  /** @format int32 */
  additionConfigId?: number;
  additionExtraName?: string;
  /** @format int32 */
  additionId?: number;
  additionName?: string;
  additionNameJp?: string;
  /** @format int32 */
  additionQuantity?: number;
  calculateConfigFormula?: string;
  /** @format int32 */
  calculateConfigId?: number;
  cost?: number;
  /** @format int32 */
  costType?: number;
  /** @format int32 */
  deductionNode?: number;
  deductionNodeName?: string;
  ingredientsImg?: string;
  ingredientsName?: string;
  ingredientsNameJp?: string;
  ingredientsSku?: string;
  orderAdditionCode?: string;
  orderNo?: string;
  platformOrderNo?: string;
  /** @format int32 */
  regularizationFlag?: number;
  shopProductSku?: string;
  /** @format int32 */
  spotCheckFlag?: number;
  spotCheckRatio?: number;
  warehouse?: string;
}

/** InboundOrderAdditionRespDTO */
export interface InboundOrderAdditionRespDTO {
  /** @format int32 */
  additionCode?: number;
  /** @format int32 */
  additionConfigId?: number;
  additionExtraName?: string;
  /** @format int32 */
  additionId?: number;
  additionName?: string;
  additionNameJp?: string;
  /** @format int32 */
  additionQuantity?: number;
  calculateConfigFormula?: string;
  /** @format int32 */
  calculateConfigId?: number;
  cost?: number;
  /** @format int32 */
  costType?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  creatorId?: number;
  creatorName?: string;
  /** @format int32 */
  deductionNode?: number;
  deductionNodeName?: string;
  /** @format int64 */
  editorId?: number;
  editorName?: string;
  /** @format int64 */
  id?: number;
  ingredientsImg?: string;
  ingredientsName?: string;
  ingredientsNameJp?: string;
  ingredientsSku?: string;
  /** @format int32 */
  isDelete?: number;
  newPkgCode?: string;
  orderAdditionCode?: string;
  orderNo?: string;
  pkgCode?: string;
  platformOrderNo?: string;
  /** @format int32 */
  regularizationFlag?: number;
  shopProductSku?: string;
  subtotal?: number;
  /** @format date-time */
  updateTime?: string;
  warehouse?: string;
}

/** Ingredients */
export interface Ingredients {
  /** 自动报价字段详情 */
  autoQuoteFieldDetail?: string;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 辅料名字(日文) */
  icon?: string;
  /** 辅料名字 */
  ingredients?: string;
  /** 辅料名字(英文) */
  ingredientsEn?: string;
  /**
   * 辅料id
   * @format int64
   */
  ingredientsId?: number;
  /** 辅料名字(日文) */
  ingredientsJp?: string;
  /** 辅料名字(韩文) */
  ingredientsKo?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/** IngredientsAutoQuoteDTO */
export interface IngredientsAutoQuoteDTO {
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 辅料id
   * @format int64
   */
  ingredientsId?: number;
  /**
   * 材质id
   * @format int64
   */
  ingredientsMaterialsId?: number;
  /** 材质名称 */
  ingredientsMaterialsName?: string;
  /** 辅料名称 */
  ingredientsName?: string;
  /**
   * 尺寸id
   * @format int64
   */
  ingredientsSizeId?: number;
  /** 尺寸名称 */
  ingredientsSizeName?: string;
  /**
   * 款式id
   * @format int64
   */
  ingredientsStyleId?: number;
  /** 款式名称 */
  ingredientsStyleName?: string;
  /**
   * 1 单色 2 双色
   * @format int32
   */
  logoColorType?: number;
  /** 报价详情 */
  priceDetailList?: PriceDetailDTO[];
  /**
   * 价格类型  1 阶梯价  2  sku价
   * @format int32
   */
  priceType?: number;
  /** 报价描述 */
  quoteDesc?: string;
  /**
   * 特殊材质(1覆膜 2不覆膜)
   * @format int32
   */
  specialMaterials?: number;
  /**
   * 状态 0 待启用 1 启用 2 禁用
   * @format int32
   */
  status?: number;
  /** 供应商id */
  supplierId?: string;
  /** 供应商全名 */
  supplierName?: string;
}

/** IngredientsAutoQuoteLogDTO */
export interface IngredientsAutoQuoteLogDTO {
  /**
   * 创建时间
   * @format date-time
   */
  createdTime?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * ingredientsAutoQuoteId
   * @format int64
   */
  ingredientsAutoQuoteId?: number;
  /** 操作描述 */
  operateDesc?: string;
  /** 操作 */
  operateName?: string;
  /**
   * 操作人id
   * @format int64
   */
  operatorId?: number;
  /** 操作人名称 */
  operatorName?: string;
  /** 备注 */
  remark?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedTime?: string;
}

/** IngredientsAutoQuotePageReqDTO */
export interface IngredientsAutoQuotePageReqDTO {
  /**
   * 辅料id
   * @format int64
   */
  ingredientsId?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  /**
   * 状态 0 待启用 1 启用 2 禁用
   * @format int32
   */
  status?: number;
  /** 供应商id */
  supplierId?: string;
  /** 供应商全名 */
  supplierName?: string;
}

/** IngredientsAutoQuoteUpdateStatusDTO */
export interface IngredientsAutoQuoteUpdateStatusDTO {
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 状态 0 待启用 1 启用 2 禁用
   * @format int32
   */
  status?: number;
}

/** IngredientsLogoPrintMode */
export interface IngredientsLogoPrintMode {
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  ingredientsId?: number;
  /** @format int64 */
  ingredientsLogoPrintModeId?: number;
  logoPrintMode?: string;
  logoPrintModeEn?: string;
  logoPrintModeImg?: string;
  logoPrintModeJp?: string;
  logoPrintModeKo?: string;
  logoPrintModeRecommendPlan?: string;
  remark?: string;
  remarkEn?: string;
  remarkJp?: string;
  remarkKo?: string;
  /** @format date-time */
  updateTime?: string;
}

/** IngredientsMaterials */
export interface IngredientsMaterials {
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  ingredientsId?: number;
  /** @format int64 */
  ingredientsMaterialsId?: number;
  materials?: string;
  materialsEn?: string;
  materialsImg?: string;
  materialsJp?: string;
  materialsKo?: string;
  materialsRecommendPlan?: string;
  remark?: string;
  remarkEn?: string;
  remarkJp?: string;
  remarkKo?: string;
  /** @format date-time */
  updateTime?: string;
}

/** IngredientsPrice */
export interface IngredientsPrice {
  copyFee?: number;
  /** @format date-time */
  createTime?: string;
  ingredients?: string;
  ingredientsEn?: string;
  /** @format int64 */
  ingredientsId?: number;
  ingredientsJp?: string;
  ingredientsKo?: string;
  /** @format int64 */
  ingredientsLogoPrintModeId?: number;
  /** @format int64 */
  ingredientsMaterialsId?: number;
  /** @format int64 */
  ingredientsPriceId?: number;
  /** @format int64 */
  ingredientsSizeId?: number;
  /** @format int64 */
  ingredientsStyleId?: number;
  logoPrintModeRecommendPlan?: string;
  materialsRecommendPlan?: string;
  /** @format int32 */
  quantity?: number;
  remark?: string;
  sizeRecommendPlan?: string;
  styleRecommendPlan?: string;
  totalPrice?: number;
  unitPrice?: number;
  /** @format date-time */
  updateTime?: string;
}

/** IngredientsPriceAddVO */
export interface IngredientsPriceAddVO {
  copyFee?: number;
  /** @format int64 */
  ingredientsId?: number;
  /** @format int64 */
  ingredientsLogoPrintModeId?: number;
  /** @format int64 */
  ingredientsMaterialsId?: number;
  /** @format int64 */
  ingredientsSizeId?: number;
  /** @format int64 */
  ingredientsStyleId?: number;
  /** @format int32 */
  quantity?: number;
  remark?: string;
  totalPrice?: number;
}

/** IngredientsProductAddCartDTO */
export interface IngredientsProductAddCartDTO {
  /**
   * OEM订单类型:2-OEM寻源单大货单; 4-OEM复购申请大货单
   * @format int32
   */
  oemOrderType?: number;
  /**
   * 下单数量
   * @format int32
   */
  orderQuantity?: number;
  /** 平台商品SKU */
  productSku?: string;
  /** 寻源单编号 */
  searchSourceOrderCode?: string;
  /**
   * 寻源单表id
   * @format int64
   */
  searchSourceOrderId?: number;
  /**
   * 寻源单复购申请表id
   * @format int64
   */
  searchSourceOrderRepurchaseApplyId?: number;
  /**
   * 寻源单报价id
   * @format int64
   */
  searchSourceSupplierPriceId?: number;
}

/** IngredientsSize */
export interface IngredientsSize {
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  ingredientsId?: number;
  /** @format int64 */
  ingredientsSizeId?: number;
  remark?: string;
  remarkEn?: string;
  remarkJp?: string;
  remarkKo?: string;
  size?: string;
  sizeEn?: string;
  sizeImg?: string;
  sizeJp?: string;
  sizeKo?: string;
  sizeRecommendPlan?: string;
  /** @format date-time */
  updateTime?: string;
}

/** IngredientsStyle */
export interface IngredientsStyle {
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  ingredientsId?: number;
  /** @format int64 */
  ingredientsStyleId?: number;
  remark?: string;
  remarkEn?: string;
  remarkJp?: string;
  remarkKo?: string;
  style?: string;
  styleEn?: string;
  styleImg?: string;
  styleJp?: string;
  styleKo?: string;
  styleRecommendPlan?: string;
  /** @format date-time */
  updateTime?: string;
}

/** InternationalityLogisticsInfoDetailRespDTO */
export interface InternationalityLogisticsInfoDetailRespDTO {
  /** @format int32 */
  combineOrdersFlag?: number;
  /** @format int32 */
  deliveryNums?: number;
  /** @format int32 */
  deliveryStatus?: number;
  deliveryTaskCode?: string;
  /** @format date-time */
  deliveryTime?: string;
  distribution?: string;
  freightFee?: number;
  logisticsCode?: string;
  logisticsCompany?: string;
  platformOrderItemList?: PlatformOrderItemDTO[];
  /** @format int32 */
  realDeliveryNums?: number;
  remoteAreaFee?: number;
  /** @format int32 */
  shipQuantity?: number;
  systemOrderNo?: string;
  totalAdditionalFee?: number;
  /** @format int64 */
  weight?: number;
}

/** ItemDiscountReqDTO */
export interface ItemDiscountReqDTO {
  /** @format int64 */
  platformOrderItemId?: number;
  productSku?: string;
  systemOrderNo?: string;
}

/** KuaiDiTrackItemRespDTO */
export interface KuaiDiTrackItemRespDTO {
  context?: string;
  ftime?: string;
  status?: string;
  time?: string;
}

/** LogisticsChannelDTO */
export interface LogisticsChannelDTO {
  channelName?: string;
  channelNameEn?: string;
  channelNo?: string;
  /** @format int64 */
  logisticsChannelId?: number;
  logisticsCode?: string;
  note?: string;
}

/** LogisticsInfoDetailRespDTO */
export interface LogisticsInfoDetailRespDTO {
  /** @format int32 */
  deliveryStatus?: number;
  deliveryTaskCode?: string;
  /** @format date-time */
  deliveryTime?: string;
  distribution?: string;
  freightFee?: number;
  logisticsCode?: string;
  productDetailList?: ProductDetail[];
  /** @format int32 */
  realDeliveryNums?: number;
  totalAdditionalFee?: number;
  /** @format int64 */
  weight?: number;
}

/** ManageAbnormalOrderQueryReqDTO */
export interface ManageAbnormalOrderQueryReqDTO {
  /**
   * 异常订单类型: 1-问题处理; 2-售后; 3-申请取消
   * @format int32
   */
  abnormalOrderType?: number;
  /**
   * 售后进度：1-业务处理中; 2-已处理(财务处理中); 4-已拒绝(担当拒绝); 5-重新发起(处理中); 6-已撤销;
   * @format int32
   */
  afterSalesProgress?: number;
  /**
   * 售后原因：1-次品; 2-相异品; 3-数量不足; 4-其他
   * @format int32
   */
  afterSalesReason?: number;
  /**
   * 申请售后时间(结束时间)
   * @format date-time
   */
  applyAfterSalesEndTime?: string;
  /**
   * 申请售后时间(开始时间)
   * @format date-time
   */
  applyAfterSalesStartTime?: string;
  customerIds?: number[];
  /** 客户标签 1 oem项目重点客户 2 oem非项目重点客户 */
  customerTags?: number[];
  /** 国际发货单号 */
  deliveryTaskCode?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** 平台订单编号(直行便订单编号) */
  platformOrderNo?: string;
  /**
   * 问题生成时间
   * @format date-time
   */
  problemGenerationTime?: string;
  /** 平台商品SKU */
  productSku?: string;
  /**
   * 退款进度：1-待处理(业务处理中); 2-财务处理中; 3-已退款;
   * @format int32
   */
  refundProgress?: number;
  /** @format int32 */
  startIndex?: number;
  /** 站点代码(日本:JapanStation,韩国:KoreaStation,英国:UkStation) */
  stationCode?: string;
  /**
   * 系统来源: 1-D2C; 2-B2B
   * @format int32
   */
  systemSource?: number;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
}

/** ManagePlatformOrderItemRespDTO */
export interface ManagePlatformOrderItemRespDTO {
  actualProductSellPrice?: number;
  actualTotalProductSellPrice?: number;
  additionList?: PlatformOrderItemAdditionRespDTO[];
  /** @format int32 */
  badClientQuantity?: number;
  /** @format int32 */
  badQuantity?: number;
  /** @format int32 */
  cancelStatus?: number;
  /** @format int32 */
  cancleAndRefundQuantity?: number;
  /** @format int32 */
  channel?: number;
  /** @format int32 */
  checkFlag?: number;
  /** @format int32 */
  checkedQuantity?: number;
  /** @format int32 */
  checkingQuantity?: number;
  /** @format int32 */
  checkingShelveQuantity?: number;
  /** @format int32 */
  combinationCompleteQuantity?: number;
  combinationOrderItemList?: ManagePlatformOrderItemRespDTO[];
  /** @format int32 */
  combinationProductItemFlag?: number;
  /** @format int32 */
  combinationProductShelfQuantity?: number;
  /** @format int32 */
  combinationStatus?: number;
  /** @format int32 */
  confirmQuantity?: number;
  customerOrderNo?: string;
  customerProductNo?: string;
  /** @format int32 */
  deliveredQuantity?: number;
  /** @format int32 */
  deliveryStatus?: number;
  estimateStockTime?: string;
  /** @format int32 */
  expressQuantity?: number;
  finalPlatformOrderItemSettlementAmount?: number;
  /** @format int32 */
  freezeQuantity?: number;
  /** @format int32 */
  hasDeliverQuantity?: number;
  /** @format int32 */
  hasPurchaeQuantity?: number;
  internationalLogisticsOrderNumber?: string;
  /** @format int32 */
  keepStockQuantity?: number;
  /** @format int32 */
  onTheWayFreezeQuantity?: number;
  /** @format int32 */
  onTheWayFreezeQuantityChecked?: number;
  orderItemStatus?: string;
  /** @format int32 */
  orderQuantity?: number;
  /** @format int32 */
  orderType?: number;
  /** @format int64 */
  platformOrderId?: number;
  /** @format int64 */
  platformOrderItemId?: number;
  platformOrderNo?: string;
  productDetailUrl?: string;
  productMainImg?: string;
  productPropertiesName?: string;
  productSku?: string;
  /** 商品sku图 */
  productSkuImg?: string;
  productTitle?: string;
  /** @format int32 */
  productType?: number;
  /** @format int32 */
  purchaseBadNum?: number;
  /** @format int32 */
  purchasingQuantity?: number;
  /** @format int32 */
  realCheckedQuantity?: number;
  /** @format int32 */
  realStockInQuantity?: number;
  /** @format int32 */
  sellQuantity?: number;
  shopCode?: string;
  shopName?: string;
  shopProductSku?: string;
  specialCheckRequirement?: string;
  specialCheckRequirementImg?: string;
  /** @format int32 */
  stockInQuantity?: number;
  systemOrderNo?: string;
  /** @format int32 */
  totalPurchaeQuantity?: number;
  /** @format int32 */
  turnQuantity?: number;
  /** @format int32 */
  waitPurchaeQuantity?: number;
  /** @format int32 */
  wmsCancelQuantity?: number;
}

/** ManagePlatformOrderRespDTO */
export interface ManagePlatformOrderRespDTO {
  /** @format int64 */
  abnormalCount?: number;
  /** @format int32 */
  containOemGoods?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  customerId?: number;
  customerOrderNo?: string;
  customerShopName?: string;
  /** 客户标签 1 oem项目重点客户 2 oem非项目重点客户 */
  customerTags?: number[];
  /** @format int32 */
  deliveryStatus?: number;
  finalPlatformOrderSettlementTotalAmount?: number;
  /** @format int32 */
  orderSource?: number;
  /** @format int32 */
  orderType?: number;
  /** @format int64 */
  platformOrderId?: number;
  platformOrderNo?: string;
  platformOrderPaymentAmount?: number;
  /** @format int32 */
  platformOrderStatus?: number;
  /** @format int32 */
  systemSource?: number;
  totalFreezeAmount?: number;
  /** @format int32 */
  totalQuantity?: number;
  unificationCustomerFullName?: string;
  wareName?: string;
}

/** ManageSearchPlatformOrderItemReqDTO */
export interface ManageSearchPlatformOrderItemReqDTO {
  /** @format int32 */
  channel?: number;
  customerOrderNo?: string;
  customerProductNo?: string;
  internationalLogisticsOrderNumber?: string;
  internationalLogisticsOrderNumberList?: string[];
  /** @format int32 */
  orderByCreate?: number;
  /** @format int32 */
  orderItemStatus?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  platformOrderNo?: string;
  platformOrderNoList?: string[];
  productSku?: string;
  productSkuList?: string[];
  productTitle?: string;
  /** @format int32 */
  startIndex?: number;
  /** @format date-time */
  startTime?: string;
  /** @format int32 */
  systemSource?: number;
}

/** ManagerUserDTO */
export interface ManagerUserDTO {
  /**
   * 用户id
   * @format int64
   */
  userId?: number;
  /** 用户姓名 */
  userName?: string;
}

/** MarkClearanceReminderDTO */
export interface MarkClearanceReminderDTO {
  /**
   * 有效期 0-永久有效
   * @format int32
   */
  expireDate?: number;
  /**
   * 类型 1-购物车 2-国际发货
   * @format int32
   */
  type?: number;
}

/** MonthlyStatisticsAgeRespDTO */
export interface MonthlyStatisticsAgeRespDTO {
  /** @format int32 */
  firstMonthNum?: number;
  /** @format int32 */
  fiveTo6thMonthNum?: number;
  /** @format int32 */
  moreThanOneYearNum?: number;
  /** @format int32 */
  nineTo12thMonthNum?: number;
  /** @format int32 */
  secondMonthNum?: number;
  /** @format int32 */
  sevenTo8thMonthNum?: number;
  shopProductSku?: string;
  /** @format int32 */
  thirdTo4thMonthNum?: number;
  /** @format int32 */
  total?: number;
}

/** MyInventoryQueryPageReqDTO */
export interface MyInventoryQueryPageReqDTO {
  ascs?: string[];
  /** @format int64 */
  customerId?: number;
  customerProductMskuList?: string[];
  /** @format int64 */
  customerShopId?: number;
  descs?: string[];
  /** @format int32 */
  endAgeQuantity?: number;
  /** @format int32 */
  endAmazonSellQuantity?: number;
  /** @format int32 */
  endAvailableQuantity?: number;
  /** @format int32 */
  endLockQuantity?: number;
  /** @format int32 */
  endPendingStorage?: number;
  /** @format int32 */
  endUnableProcessDefectiveProducts?: number;
  inventory?: string;
  orderTable?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  processing?: string;
  productSkuList?: string[];
  productSkuOrName?: string;
  productType?: string;
  productTypeList?: number[];
  regularizationTable?: string;
  sale?: string;
  shopProductSku?: string;
  shopProductSkuIdList?: number[];
  shopProductSkuList?: string[];
  sort?: boolean;
  /** @format int32 */
  startAgeQuantity?: number;
  /** @format int32 */
  startAmazonSellQuantity?: number;
  /** @format int32 */
  startAvailableQuantity?: number;
  /** @format int32 */
  startIndex?: number;
  /** @format int32 */
  startLockQuantity?: number;
  /** @format int32 */
  startPendingStorage?: number;
  /** @format int32 */
  startUnableProcessDefectiveProducts?: number;
  stockTable?: string;
  /** 体积：（XS、S、M、L、XL） */
  volume?: string;
}

/** MyInventoryRespDTO */
export interface MyInventoryRespDTO {
  /** @format int32 */
  abnormalQuantity?: number;
  amazonAsin?: string;
  /** @format int32 */
  amazonBindStatus?: number;
  /** @format date-time */
  amazonBindTime?: string;
  /** @format int32 */
  amazonBindType?: number;
  amazonFnsku?: string;
  amazonMsku?: string;
  /** @format int32 */
  amazonNotSellQuantity?: number;
  /** @format int32 */
  amazonPredictTotalQuantity?: number;
  amazonProductTitle?: string;
  /** @format int32 */
  amazonReservedQuantity?: number;
  /** @format int32 */
  amazonSellQuantity?: number;
  /** @format int32 */
  amazonStockInQuantity?: number;
  /** @format int32 */
  amazonSurveyQuantity?: number;
  /** @format int32 */
  availableQuantity?: number;
  /** @format int32 */
  checkingNum?: number;
  combinationProductItemList?: CombinationProductItemRespDTO[];
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  customerProductMsku?: string;
  /** @format int32 */
  customerProductSkuOrderFlag?: number;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  /** @format int32 */
  exceptionNum?: number;
  /** @format int32 */
  expressNum?: number;
  /** @format int32 */
  freezeQuantity?: number;
  /** @format int32 */
  inStockQuantity?: number;
  /** @format int32 */
  inventory?: number;
  /** @format int32 */
  lockQuantity?: number;
  monthlyStatisticsAgeRespDTO?: MonthlyStatisticsAgeRespDTO;
  /** @format int32 */
  onTheWayAvailableNum?: number;
  /** @format int32 */
  onTheWayOccupyNum?: number;
  /** @format int32 */
  onTheWayTotalNum?: number;
  orderProcess?: OrderProcessRespDTO;
  overseaProducSku?: string;
  paymentDetail?: string;
  /** @format int32 */
  paymentType?: number;
  /** @format int32 */
  pendingStorage?: number;
  platformType?: string;
  /** @format int64 */
  productCategoryFrontendNdId?: number;
  productCode?: string;
  productDetailUrl?: string;
  productMainImg?: string;
  productPriceLadder?: string;
  productPriceLadderList?: ProductPriceLadderRespDTO[];
  productPropertiesName?: string;
  productSku?: string;
  productSkuImg?: string;
  productTitle?: string;
  /** @format int32 */
  productType?: number;
  /** @format int32 */
  purchasedNum?: number;
  /** @format int32 */
  purchasingNum?: number;
  /** @format int32 */
  putInStorageNum?: number;
  searchSourceOrderId?: string;
  searchSourceOrderNo?: string;
  /** @format int64 */
  searchSourcePriceId?: number;
  shopCode?: string;
  /** @format int64 */
  shopItemId?: number;
  /** @format int64 */
  shopItemSkuId?: number;
  shopName?: string;
  shopProductSku?: string;
  /** @format int64 */
  shopProductSkuId?: number;
  /** @format int32 */
  systemSource?: number;
  /**
   * 三方-可用数(in_stock_quantity-lock_quantity)
   * @format int32
   */
  thirdAvailableQuantity?: number;
  /**
   * 三方-已锁定（冻结数）
   * @format int32
   */
  thirdFreezeQuantity?: number;
  /** 三方商品编码 */
  thirdItemCode?: string;
  /** 三方规格图片 */
  thirdItemImage?: string;
  /** 三方商品名称 */
  thirdItemName?: string;
  /**
   * 三方-待入库
   * @format int32
   */
  thirdPendingStorage?: number;
  /**
   * 三方平台类型
   * @format int32
   */
  thirdPlatformType?: number;
  /** 三方商品属性 */
  thirdSkuAttribute?: string;
  /** 三方规格编码 */
  thirdSkuCode?: string;
  /**
   * 三方-（待处理次品）无法处理次品数
   * @format int32
   */
  thirdUnableProcessDefectiveProducts?: number;
  /** @format int64 */
  ts?: number;
  /** @format int32 */
  unableProcessDefectiveProducts?: number;
  unitPrice?: number;
  /** @format date-time */
  updateTime?: string;
  /** @format int32 */
  uploadFlag?: number;
  /** 体积：（XS、S、M、L、XL） */
  volume?: string;
  /** @format int32 */
  waitPurchaseNum?: number;
}

/** NotifyItemChangeNumDTO */
export interface NotifyItemChangeNumDTO {
  /** 业务单据ID */
  bizId?: string;
  /** 商品采购价格 */
  commodityPurchasePrice?: number;
  /**
   * 各自状态 数量
   * @format int32
   */
  expressQuantity?: number;
  message?: string;
  messageId?: string;
  /** 系统订单编号 */
  systemOrderNo?: string;
}

/** NotifyReduceOrderItemExpressNumDTO */
export interface NotifyReduceOrderItemExpressNumDTO {
  /** 业务唯一标识 */
  bizId?: string;
  /**
   * 各自状态 数量
   * @format int32
   */
  expressQuantity?: number;
  message?: string;
  messageId?: string;
  /**
   * 来源 0 成品 1 OEM
   * @format int32
   */
  source?: number;
  /** 系统订单编号 */
  systemOrderNo?: string;
}

/** NotifySystemOrderPurchasingDTO */
export interface NotifySystemOrderPurchasingDTO {
  bizId?: string;
  message?: string;
  messageId?: string;
  systemOrderNo?: string[];
}

/** OemOrderProductListDTO */
export interface OemOrderProductListDTO {
  /** @format int32 */
  maxEndPurchaseQuantity?: number;
  /** @format int32 */
  minStartPurchaseQuantity?: number;
  originTotalSellPrice?: number;
  productList?: OemProductDetailDTO[];
  /** @format int64 */
  searchSourceOrderId?: number;
  /** @format int64 */
  searchSourceOrderRepurchaseApplyId?: number;
  /** @format int32 */
  sizeFlag?: number;
  targetTotalSellPrice?: number;
  /** @format int32 */
  totalSellQuantity?: number;
}

/** OemPlatformListCountDTO */
export interface OemPlatformListCountDTO {
  /**
   * 已经取消的数量
   * @format int64
   */
  cancledCount?: number;
  /**
   * 已经过期数量
   * @format int64
   */
  expiredCount?: number;
  /**
   * 已拒绝申请数量
   * @format int64
   */
  rejectedCount?: number;
  /**
   * 已报价数量
   * @format int64
   */
  reportPrice?: number;
  /**
   * 复购已报价
   * @format int64
   */
  repurchaseApplyReportPrice?: number;
  /**
   * 复购待审报价内容数量
   * @format int64
   */
  repurchaseApplyWaitApproveSellPriceContentCount?: number;
  /**
   * 复购待报销售价
   * @format int64
   */
  repurchaseApplyWaitDdReportSellPriceCount?: number;
  /**
   * 复购销售价复审数量
   * @format int64
   */
  repurchaseApplyWaitRecheckCount?: number;
  /**
   * 复购申请数量
   * @format int64
   */
  repurchaseApplyWaitReportPurchasePriceCount?: number;
  /**
   * 订单列表数量
   * @format int64
   */
  totalCount?: number;
  /**
   * 待接单数量
   * @format int64
   */
  waitAcceptOrderCount?: number;
  /**
   * 待审采购价数量
   * @format int64
   */
  waitApprovePurchasePriceCount?: number;
  /**
   * 待审核拒绝申请数量
   * @format int64
   */
  waitApproveRejectApplyCount?: number;
  /**
   * 待审报价内容数量
   * @format int64
   */
  waitApproveSellPriceContentCount?: number;
  /**
   * 待担当确认拒绝数量
   * @format int64
   */
  waitDdConfirmRejectApplyPassCount?: number;
  /**
   * 待报销售价数量
   * @format int64
   */
  waitDdReportSellPrice?: number;
  /**
   * 待分配数量
   * @format int64
   */
  waitDistributeCount?: number;
  /**
   * 待发布数量
   * @format int64
   */
  waitPublishOrderCount?: number;
  /**
   * 销售价复审数量
   * @format int64
   */
  waitRecheckCount?: number;
  /**
   * 待报采购价数量
   * @format int64
   */
  waitReportPurchasePriceCount?: number;
  /**
   * 待用户确认报价数量
   * @format int64
   */
  waitUserConfirmCount?: number;
}

/** OemPlatformListCountV2DTO */
export interface OemPlatformListCountV2DTO {
  /**
   * 报价已过期
   * @format int32
   */
  allPriceExpire?: number;
  /**
   * 取消
   * @format int32
   */
  cancel?: number;
  /**
   * 已报价
   * @format int32
   */
  hasOffer?: number;
  /**
   * 拒绝
   * @format int32
   */
  reject?: number;
  /**
   * 待接单
   * @format int32
   */
  waitAccept?: number;
  /**
   * 报价待确认
   * @format int32
   */
  waitConfirmOffer?: number;
  /**
   * 待报价
   * @format int32
   */
  waitOffer?: number;
  /**
   * 待发布
   * @format int32
   */
  waitPublish?: number;
}

/** OemProductClassification */
export interface OemProductClassification {
  classificationCode?: string;
  classificationName?: string;
  classificationNameEn?: string;
  classificationNameJp?: string;
  classificationNameKo?: string;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  oemProductClassificationId?: number;
  premiumRate?: number;
  /** @format date-time */
  updateTime?: string;
}

/** OemProductDetailDTO */
export interface OemProductDetailDTO {
  /** 分类名字 */
  classificationNameJp?: string;
  /** 产品图片 */
  productImg?: string;
  /** 产品名称 */
  productName?: string;
  productProp?: string;
  /** 商品SKU */
  productSku?: string;
  remark?: string;
  /** @format int64 */
  searchSourceOrderSkuId?: number;
  /** @format int32 */
  sellQuantity?: number;
  sellUnitPrice?: number;
  totalSellPrice?: number;
}

/** OemSkuProductCustomsResp */
export interface OemSkuProductCustomsResp {
  compilationMethod?: string;
  productCategoryEnglishName?: string;
  /** @format int64 */
  productCustomsId?: number;
  productDeclarationCode?: string;
  productItemCategoryZh?: string;
  productSku?: string;
}

/** OemSkuUpdateVO */
export interface OemSkuUpdateVO {
  /** 英文品名 */
  itemCategoryEn?: string;
  /** 中文品名 */
  itemCategoryZh?: string;
  /** 材质 */
  materials?: string;
  /** 材质(中文) */
  materialsZh?: string;
  /** 图片地址 */
  productImg?: string;
  /** 商品名称 */
  productName?: string;
  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

/** OemSupplierDTO */
export interface OemSupplierDTO {
  /** 供应商id */
  supplierId?: string;
  /** 供应商名称 */
  supplierName?: string;
}

/** OnTheWayStockQueryReqDTO */
export interface OnTheWayStockQueryReqDTO {
  /** @format int64 */
  customerShopId?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  productSkus?: string[];
  shopProductSkus?: string[];
}

/** OnTheWayStockQueryResoDTO */
export interface OnTheWayStockQueryResoDTO {
  /**
   * 在途可用数
   * @format int64
   */
  onTheWayAvailableNum?: number;
  /**
   * 在途被占用数
   * @format int64
   */
  onTheWayOccupyNum?: number;
  /**
   * 在途库存总数
   * @format int64
   */
  onTheWayTotalNum?: number;
  /** 详情URL */
  productDetailUrl?: string;
  /** 主图 */
  productMainImg?: string;
  /** 属性名称 */
  productPropertiesName?: string;
  /** 平台商品SKU */
  productSku?: string;
  /** 商品名称 */
  productTitle?: string;
  /** 平台商品SKU */
  shopProductSku?: string;
}

/** OperateLogVO */
export interface OperateLogVO {
  /** @format int64 */
  id?: number;
  /** 变更后的内容 */
  newValue?: string;
  /** 操作内容 */
  operateContent?: string;
  /**
   * 操作时间
   * @format date-time
   */
  operateTime?: string;
  /** 操作人 */
  operator?: string;
  userName?: string;
}

/** OrderAndSkuDetailRespDTO */
export interface OrderAndSkuDetailRespDTO {
  color?: string;
  colorZh?: string;
  /** 中文品名 */
  productItemCategoryZh?: string;
  productName?: string;
  productNameZh?: string;
  size?: string;
  sizeZh?: string;
}

/** OrderAsycDTO */
export interface OrderAsycDTO {
  /** @format int32 */
  allTotal?: number;
  /** @format int32 */
  bad?: number;
  /** @format int32 */
  checked?: number;
  /** @format int32 */
  checking?: number;
  /** @format int32 */
  checkingConfirmed?: number;
  /** @format int32 */
  checkingShelve?: number;
  combinationStockQuantity?: CombinationStockDTO[];
  /** @format int32 */
  confirm?: number;
  orderCode?: string;
  platformOrderNo?: string;
  /** @format date-time */
  produceTime?: string;
  shopProductSku?: string;
  /** @format int32 */
  source?: number;
  spotCheckDTOList?: OrderSpotCheckDTO[];
  /** @format int32 */
  total?: number;
}

/** OrderCombinationProductItemRespDTO */
export interface OrderCombinationProductItemRespDTO {
  /** 商品附加项 */
  additionList?: PlatformOrderItemAdditionRespDTO[];
  /**
   * 质检上架数(针对组合商品的子商品)
   * @format int32
   */
  checkingShelveQuantity?: number;
  /**
   * 平台订单详情表id
   * @format int64
   */
  platformOrderItemId?: number;
  /** 主图 */
  productMainImg?: string;
  /** 属性名称 */
  productPropertiesName?: string;
  /** 商品sku图 */
  productSkuImg?: string;
  /** 商品名称 */
  productTitle?: string;
  /** 商品名称日文 */
  productTitleJp?: string;
  /**
   * 剩余转结数截止时间(组合完成时间推迟30天)
   * @format date-time
   */
  remainCombinationCloseTime?: string;
  /**
   * 剩余组合数
   * @format int32
   */
  remainCombinationQuantity?: number;
  /**
   * 剩余组合处理状态(0:无需处理 1:待处理 2:已转结 3:已完结)
   * @format int32
   */
  remainCombinationStatus?: number;
  /** 店铺商品SKU(店铺商品库) */
  shopProductSku?: string;
  systemOrderNo?: string;
  /**
   * 转结数
   * @format int32
   */
  turnQuantity?: number;
  /**
   * 单个组合数量
   * @format int32
   */
  unitNums?: number;
}

/** OrderCombinationProductRespDTO */
export interface OrderCombinationProductRespDTO {
  /** 组合商品附加项 */
  additionList?: PlatformOrderItemAdditionRespDTO[];
  /**
   * 组合完成数
   * @format int32
   */
  combinationCompleteQuantity?: number;
  /** 组合商品-子商品详情集合 */
  combinationProductItemList?: OrderCombinationProductItemRespDTO[];
  /**
   * 组合状态：1-未组合; 2-组合中；3-组合完成；4-取消组合
   * @format int32
   */
  combinationStatus?: number;
  /**
   * 下单数量=冻结数量+销售数量
   * @format int32
   */
  orderQuantity?: number;
  /** 主图 */
  productMainImg?: string;
  /** 属性名称 */
  productPropertiesName?: string;
  /** 商品sku图 */
  productSkuImg?: string;
  /** 商品名称 */
  productTitle?: string;
  /** 商品名称日文 */
  productTitleJp?: string;
  /** 店铺商品SKU(店铺商品库) */
  shopProductSku?: string;
  /**
   * 单个组合数量
   * @format int32
   */
  unitNums?: number;
}

/** OrderDetailsRespDTO */
export interface OrderDetailsRespDTO {
  platformOrders?: PlatformOrderRespDTO[];
}

/** OrderItem */
export interface OrderItem {
  asc?: boolean;
  column?: string;
}

/** OrderItemSpecialCheckEditReqDTO */
export interface OrderItemSpecialCheckEditReqDTO {
  customerOrderNo?: string;
  /** @format int64 */
  customerShopId?: number;
  /** @format int32 */
  followOperation?: number;
  /** @format int64 */
  operatorId?: number;
  operatorName?: string;
  predictFinish?: string;
  productSku?: string;
  /** 特殊质检要求 */
  specialCheckRequirement?: string;
  /** 特殊质检要求图片 */
  specialCheckRequirementImg?: string;
  /** 系统订单编号 */
  systemOrderNo?: string;
}

/** OrderItemStatusDTO */
export interface OrderItemStatusDTO {
  /** @format int32 */
  badConvertStockQuantity?: number;
  bizId?: string;
  commodityPurchasePrice?: number;
  /** @format int32 */
  expressQuantity?: number;
  internationalLogisticsOrderNumber?: string;
  /** @format int32 */
  orderItemStatus?: number;
  shipmentNumber?: string;
  /** @format int32 */
  source?: number;
  systemOrderNo?: string;
}

/** OrderItemStatusInfoDTO */
export interface OrderItemStatusInfoDTO {
  orderItemStatusList?: OrderItemStatusListDTO[];
  /** @format int32 */
  orderQuantity?: number;
  systemOrderNo?: string;
}

/** OrderItemStatusListDTO */
export interface OrderItemStatusListDTO {
  /** @format int32 */
  commodityQuantity?: number;
  /** @format int32 */
  orderItemStatus?: number;
}

/** OrderPayRespDTO */
export interface OrderPayRespDTO {
  blackSkuList?: string[];
  downSkus?: string[];
  stockSkus?: string[];
  validSkus?: string[];
}

/** OrderProcessRespDTO */
export interface OrderProcessRespDTO {
  /** @format int32 */
  haveBecomeObsolete?: number;
  /** @format int32 */
  process?: number;
  /** @format int32 */
  transferredProduct?: number;
  /** @format int32 */
  unprocessed?: number;
}

/** OrderProcessResultRespDTO */
export interface OrderProcessResultRespDTO {
  /** @format int32 */
  haveBecomeObsolete?: number;
  /** @format int32 */
  process?: number;
  /** @format int32 */
  transferredProduct?: number;
  /** @format int32 */
  unprocessed?: number;
}

/** OrderSettlementFeeDetailsRespDTO */
export interface OrderSettlementFeeDetailsRespDTO {
  /** 手续费 */
  handlingFee?: number;
  /** 商品附加项 */
  productAdditionalItems?: number;
  /** 商品代金 */
  productCash?: number;
}

/** OrderSpotCheckDTO */
export interface OrderSpotCheckDTO {
  /** @format int32 */
  additionId?: number;
  /** @format int32 */
  quantity?: number;
}

/** PackageLogisticsDTO */
export interface PackageLogisticsDTO {
  estimateStockTime?: string;
  kuaiDiTrackItemList?: KuaiDiTrackItemRespDTO[];
  logisticsNumber?: string;
  logisticsTag?: string;
  /** @format int32 */
  signStatus?: number;
}

/** PageAbnormalOrderReqDTO */
export interface PageAbnormalOrderReqDTO {
  /**
   * 异常订单类型: 1-问题处理; 2-售后; 3-申请取消
   * @format int32
   */
  abnormalOrderType?: number;
  /**
   * 售后进度：0-待处理; 1-业务处理中; 2-财务处理中; 3-已退款; 4-已拒绝; 5-重新发起（处理中）; 6-已撤销
   * @format int32
   */
  afterSalesProgress?: number;
  /**
   * 售后原因：1-次品; 2-相异品; 3-数量不足; 4-其他
   * @format int32
   */
  afterSalesReason?: number;
  /**
   * 申请售后时间(结束时间)
   * @format date-time
   */
  applyAfterSalesEndTime?: string;
  /**
   * 申请售后时间(开始时间)
   * @format date-time
   */
  applyAfterSalesStartTime?: string;
  /**
   * 申请售后时间
   * @format date-time
   */
  applyAfterSalesTime?: string;
  /**
   * 取消申请时间(结束时间)
   * @format date-time
   */
  cancelApplyEndTime?: string;
  /**
   * 取消申请时间(开始时间)
   * @format date-time
   */
  cancelApplyStartTime?: string;
  /**
   * 取消申请时间
   * @format date-time
   */
  cancelApplyTime?: string;
  /**
   * 取消进度：0-处理中; 1-取消成功; 2-保留库存
   * @format int32
   */
  cancelProgress?: number;
  /** 客户订单编号(店铺订单: 店铺订单编号; 购物车: 客户自定义) */
  customerOrderNo?: string;
  /**
   * 整单确认0 按sku 确认 1
   * @format int32
   */
  deliveryProcessType?: number;
  /** 国际发货单号 */
  deliveryTaskCode?: string;
  /** 国际发货单号列表 */
  deliveryTaskCodeList?: string[];
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** 平台订单编号(直行便订单编号) */
  platformOrderNo?: string;
  /** 平台订单编号列表(直行便订单编号) */
  platformOrderNoList?: string[];
  /**
   * 问题生成时间
   * @format date-time
   */
  problemGenerationTime?: string;
  /**
   * 处理方式：0 取消采购商品 1 取消发货任务
   * @format int32
   */
  processManner?: number;
  /** 平台商品SKU */
  productSku?: string;
  /** 平台商品SKU列表 */
  productSkuList?: string[];
  /** 商品名称 */
  productTitle?: string;
  /**
   * 问题处理：1-未处理; 2-处理中; 3-已处理
   * @format int32
   */
  questionProcess?: number;
  /** 收件人 */
  receiveName?: string;
  /** @format int32 */
  startIndex?: number;
}

/** PageAbnormalWaitProcessOrderReqDTO */
export interface PageAbnormalWaitProcessOrderReqDTO {
  /** 客户订单编号(店铺订单: 店铺订单编号; 购物车: 客户自定义) */
  customerOrderNo?: string;
  /** 客户订单编号(店铺订单: 店铺订单编号; 购物车: 客户自定义) */
  customerOrderNoList?: string[];
  /**
   * 店铺id
   * @format int64
   */
  customerShopId?: number;
  /**
   * 整单确认0 按sku 确认 1
   * @format int32
   */
  deliveryProcessType?: number;
  /**
   * 下单结束时间
   * @format date-time
   */
  endTime?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** 平台订单号 */
  platformOrderNo?: string;
  /** 平台订单号 */
  platformOrderNoList?: string[];
  /** @format int32 */
  startIndex?: number;
  /**
   * 下单开始时间
   * @format date-time
   */
  startTime?: string;
}

/** PageCustomerIdByProductCodeReqDTO */
export interface PageCustomerIdByProductCodeReqDTO {
  /** @format int64 */
  customerId?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  sorts?: ISortFieldEnum[];
  /** @format int32 */
  startIndex?: number;
}

/** PageCustomerIdByProductCodeRespDTO */
export interface PageCustomerIdByProductCodeRespDTO {
  /** @format int64 */
  customerId?: number;
  productCode?: string;
}

/** PartPayReqDTO */
export interface PartPayReqDTO {
  /** @format int64 */
  customerShopId?: number;
  platformOrderNo?: string;
  /** @format int32 */
  stageNo?: number;
}

/** PayStageReqDTO */
export interface PayStageReqDTO {
  platformOrderNo?: string;
  /** @format int32 */
  stageNo?: number;
}

/** PaymentPeriodDetailDTO */
export interface PaymentPeriodDetailDTO {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 支付比例 */
  paymentPeriod?: number;
  /** 账期描述 */
  periodName?: string;
  /** 寻源单单号 */
  searchSourceOrderNo?: string;
  /**
   * 报价id
   * @format int64
   */
  searchSourceOrderSupplierPriceId?: number;
  /**
   * 账期顺序
   * @format int32
   */
  sortId?: number;
  /** 报价id */
  supplierPriceId?: string;
}

/** PendingBadQuantityRespDTO */
export interface PendingBadQuantityRespDTO {
  orderProcessResult?: OrderProcessResultRespDTO;
  shopProductSku?: string;
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

/** PlatformOrderApiSkuRespDTO */
export interface PlatformOrderApiSkuRespDTO {
  apiShopProductSku?: string;
  /** @format int64 */
  shopOrderId?: number;
}

/** PlatformOrderDTO */
export interface PlatformOrderDTO {
  /** @format date-time */
  createTime?: string;
  customerOrderNo?: string;
  interceptCancelTime?: string;
  /** @format int32 */
  interceptCancelType?: number;
  /** @format int32 */
  interceptFlag?: number;
  /** @format int32 */
  isSynLogisticsNo?: number;
  /** @format int32 */
  orderType?: number;
  /** @format int64 */
  platformOrderId?: number;
  platformOrderNo?: string;
  platformOrderStatus?: string[];
}

/** PlatformOrderDeliverAddressDTO */
export interface PlatformOrderDeliverAddressDTO {
  address?: string;
  city?: string;
  cityJp?: string;
  clearanceCode?: string;
  country?: string;
  countryJp?: string;
  district?: string;
  districtJp?: string;
  email?: string;
  intShipConfigId?: string;
  /** @format int64 */
  platformOrderDeliverAddressId?: number;
  postalCode?: string;
  province?: string;
  provinceJp?: string;
  receiveName?: string;
  receiveTel?: string;
}

/** PlatformOrderDeliveryAdditionalDTO */
export interface PlatformOrderDeliveryAdditionalDTO {
  /** @format int32 */
  additionConfigId?: number;
  /** @format int32 */
  additionId?: number;
  additionName?: string;
  additionNameJp?: string;
  cost?: number;
  /** @format int32 */
  costType?: number;
  ingredientsSku?: string;
}

/** PlatformOrderDeliveryAddressRespDTO */
export interface PlatformOrderDeliveryAddressRespDTO {
  address?: string;
  city?: string;
  cityJp?: string;
  country?: string;
  countryCode?: string;
  countryJp?: string;
  /** @format date-time */
  createTime?: string;
  district?: string;
  districtJp?: string;
  email?: string;
  /** @format int64 */
  platformOrderDeliverAddressId?: number;
  /** @format int64 */
  platformOrderId?: number;
  postalCode?: string;
  province?: string;
  provinceJp?: string;
  receiveName?: string;
  receiveTel?: string;
  /** @format date-time */
  updateTime?: string;
}

/** PlatformOrderItemAdditionDTO */
export interface PlatformOrderItemAdditionDTO {
  /** @format int32 */
  additionConfigId?: number;
  additionExtraName?: string;
  additionName?: string;
  additionNameJp?: string;
  cost?: number;
  /** @format int32 */
  costType?: number;
  ingredientsSku?: string;
  /** @format int32 */
  spotCheckFlag?: number;
  /** @format int32 */
  spotCheckQuantity?: number;
  spotCheckRatio?: number;
}

/** PlatformOrderItemAdditionReqDTO */
export interface PlatformOrderItemAdditionReqDTO {
  /** 辅料sku */
  ingredientsSku?: string;
  /**
   * 平台订单详情附加项表id
   * @format int64
   */
  platformOrderItemAdditionId?: number;
}

/** PlatformOrderItemAdditionRespDTO */
export interface PlatformOrderItemAdditionRespDTO {
  actualProductSellPrice?: number;
  actualTotalProductSellPrice?: number;
  /** @format int32 */
  additionConfigId?: number;
  additionExtraName?: string;
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
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  /** @format int32 */
  deductionNode?: number;
  deductionNodeName?: string;
  /** @format int32 */
  freezeQuantity?: number;
  ingredientsName?: string;
  ingredientsNameJp?: string;
  ingredientsSku?: string;
  /** @format int32 */
  orderQuantity?: number;
  /** @format int64 */
  platformOrderId?: number;
  /** @format int64 */
  platformOrderItemAdditionId?: number;
  /** @format int64 */
  platformOrderItemId?: number;
  platformOrderNo?: string;
  productCode?: string;
  productSku?: string;
  productTitle?: string;
  productTitleJp?: string;
  /** @format int32 */
  productType?: number;
  /** @format int32 */
  sellQuantity?: number;
  /** @format int32 */
  spotCheckFlag?: number;
  /** @format int32 */
  spotCheckQuantity?: number;
  spotCheckRatio?: number;
  /** @format int32 */
  systemSource?: number;
  /** @format date-time */
  updateTime?: string;
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

/** PlatformOrderItemDTO */
export interface PlatformOrderItemDTO {
  actualProductSellPrice?: number;
  actualTotalProductSellPrice?: number;
  /** @format int32 */
  afterCheckingQuantity?: number;
  apiShopProductMainImg?: string;
  apiShopProductPropertiesName?: string;
  apiShopProductSku?: string;
  apiShopProductTitle?: string;
  /** @format int32 */
  badClientQuantity?: number;
  /** @format int32 */
  badPlatformQuantity?: number;
  /** @format int32 */
  badQuantity?: number;
  /** @format int32 */
  cancelStatus?: number;
  /** @format int32 */
  cancleAndRefundQuantity?: number;
  /** @format int32 */
  channel?: number;
  /** @format int32 */
  checkFlag?: number;
  /** @format int32 */
  checkedQuantity?: number;
  /** @format int32 */
  checkingQuantity?: number;
  /** @format int32 */
  checkingShelveQuantity?: number;
  /** @format int32 */
  combinationCompleteQuantity?: number;
  /** @format date-time */
  combinationCompleteTime?: string;
  /** @format int32 */
  combinationProductItemFlag?: number;
  combinationProductSku?: string;
  combinationProductSystemOrderNo?: string;
  /** @format int32 */
  combinationStatus?: number;
  commodityPurchasePrice?: number;
  /** @format int32 */
  confirmQuantity?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  customerOrderNo?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  /** @format int32 */
  deliveredQuantity?: number;
  /** @format int32 */
  deliveryNums?: number;
  /** @format int32 */
  deliveryStatus?: number;
  /** @format int32 */
  expressQuantity?: number;
  finalProductSellPrice?: number;
  /** @format int32 */
  freezeQuantity?: number;
  /** @format int32 */
  hasDeliverQuantity?: number;
  /** @format int32 */
  hasPurchaeQuantity?: number;
  /** @format int32 */
  keepStockQuantity?: number;
  /** @format int32 */
  oemOrderType?: number;
  /** @format int32 */
  oemProductClassificationId?: number;
  orderItemStatus?: string;
  /** @format int32 */
  orderQuantity?: number;
  /** @format int32 */
  planCombinationQuantity?: number;
  /** @format int64 */
  platformOrderId?: number;
  /** @format int64 */
  platformOrderItemId?: number;
  platformOrderNo?: string;
  platformType?: string;
  priceFloatPercent?: number;
  /** @format int32 */
  priorityShippingStatus?: number;
  productCode?: string;
  productDetailUrl?: string;
  productMainImg?: string;
  productPriceLadderList?: string;
  productPropertiesName?: string;
  productSellPrice?: number;
  productSku?: string;
  productSkuImg?: string;
  productTitle?: string;
  productTitleJp?: string;
  /** @format int32 */
  productType?: number;
  /** @format int32 */
  purchasingQuantity?: number;
  /** @format int32 */
  pushCombinationTaskStatus?: number;
  /** @format int32 */
  realDeliveryNums?: number;
  /** @format date-time */
  remainCombinationCloseTime?: string;
  /** @format date-time */
  remainCombinationDealTime?: string;
  /** @format int32 */
  remainCombinationQuantity?: number;
  /** @format int32 */
  remainCombinationStatus?: number;
  /** @format int64 */
  searchSourceOrderId?: number;
  /** @format int64 */
  searchSourceOrderPurchaserUserId?: number;
  searchSourceOrderPurchaserUserName?: string;
  /** @format int64 */
  searchSourceOrderRepurchaseApplyId?: number;
  /** @format int32 */
  sellQuantity?: number;
  shopCode?: string;
  shopName?: string;
  shopProductSku?: string;
  specialCheckRequirement?: string;
  specialCheckRequirementImg?: string;
  /** @format int32 */
  stockInQuantity?: number;
  /** @format int64 */
  systemOrderId?: number;
  /** @format int64 */
  systemOrderItemId?: number;
  systemOrderNo?: string;
  /** @format int32 */
  systemSource?: number;
  totalProductSellPrice?: number;
  /** @format int32 */
  totalPurchaeQuantity?: number;
  /** @format int32 */
  turnQuantity?: number;
  turnSystemOrderNo?: string;
  unificationCustomerFullName?: string;
  /** @format int32 */
  unitNums?: number;
  /** @format date-time */
  updateTime?: string;
  /** @format int32 */
  waitPurchaeQuantity?: number;
  wareCode?: string;
  wareName?: string;
}

/** PlatformOrderItemDiscountDTO */
export interface PlatformOrderItemDiscountDTO {
  discountPrice?: number;
  /** @format int32 */
  discountType?: number;
  /** @format int64 */
  platformOrderItemId?: number;
  productSku?: string;
  systemOrderNo?: string;
}

/** PlatformOrderItemLogInfoDTO */
export interface PlatformOrderItemLogInfoDTO {
  /** @format date-time */
  createTime?: string;
  operateDesc?: string;
  operateName?: string;
  operateNameJp?: string;
  /** @format int64 */
  operatorId?: number;
  operatorName?: string;
  /** @format int32 */
  operatorType?: number;
  /** @format int32 */
  orderItemLogType?: number;
  /** @format int64 */
  platformOrderId?: number;
  /** @format int64 */
  platformOrderLogItemId?: number;
  platformOrderNo?: string;
  remark?: string;
}

/** PlatformOrderItemRespDTO */
export interface PlatformOrderItemRespDTO {
  actualPrice?: number;
  actualTotalPrice?: number;
  /** @format int32 */
  channel?: number;
  combinationOrderItemList?: PlatformOrderItemRespDTO[];
  /** @format int32 */
  freezeQuantity?: number;
  /** @format int32 */
  orderQuantity?: number;
  platformOrderItemAdditionList?: PlatformOrderItemAdditionDTO[];
  productAdditionFreezeAmount?: number;
  productPropertiesName?: string;
  productSku?: string;
  productSkuImg?: string;
  productTitle?: string;
  productTitleJp?: string;
  /** @format int32 */
  productType?: number;
  /** @format int32 */
  sellQuantity?: number;
  totalFreezeAmount?: number;
}

/** PlatformOrderItemSettleDTO */
export interface PlatformOrderItemSettleDTO {
  productImg?: string;
  productPropertiesName?: string;
  productSellPrice?: number;
  productSku?: string;
  productTitle?: string;
  productTitleJp?: string;
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

/** PlatformOrderItemSpecialCheckInfo */
export interface PlatformOrderItemSpecialCheckInfo {
  /** 特殊质检要求 */
  specialCheckRequirement?: string;
  /** 特殊质检要求图片 */
  specialCheckRequirementImg?: string;
}

/** PlatformOrderPayReqDTO */
export interface PlatformOrderPayReqDTO {
  /** @format int64 */
  customerId?: number;
  /** @format int64 */
  customerShopId?: number;
  /** @format int64 */
  platformOrderId?: number;
}

/** PlatformOrderProductSettleDetail */
export interface PlatformOrderProductSettleDetail {
  additionSettleList?: PlatformOrderAdditionSettleRespDTO[];
  itemSettleList?: PlatformOrderItemSettleRespDTO[];
  /** @format int32 */
  needStagesPayStatus?: number;
}

/** PlatformOrderRespDTO */
export interface PlatformOrderRespDTO {
  customerOrderNo?: string;
  /** @format int64 */
  platformOrderId?: number;
  platformOrderItems?: PlatformOrderItemRespDTO[];
  platformOrderNo?: string;
  productAdditionFreezeAmount?: number;
  productPaymentFreezeAmount?: number;
  totalFreezeAmount?: number;
}

/** PlatformOrderSettleDayScopeDTO */
export interface PlatformOrderSettleDayScopeDTO {
  day?: string;
  totalSettleAmount?: string;
}

/** PlatformOrderSettlePayDTO */
export interface PlatformOrderSettlePayDTO {
  /** @format int64 */
  customerShopId?: number;
  totalSettleAmount?: string;
}

/** PlatformOrderSettleSourceDTO */
export interface PlatformOrderSettleSourceDTO {
  source?: string;
  totalSettleAmount?: string;
}

/** PriceDetailDTO */
export interface PriceDetailDTO {
  /** 颜色 */
  color?: string;
  /**
   * 结束采购数量
   * @format int32
   */
  endPurchaseQuantity?: number;
  /**
   * 起订量
   * @format int32
   */
  minOrderQuantity?: number;
  /** 采购价 */
  purchasePrice?: number;
  /** 尺码 */
  size?: string;
  /**
   * 开始采购数量
   * @format int32
   */
  startPurchaseQuantity?: number;
}

/** PriceOperateVO */
export interface PriceOperateVO {
  /**
   * 报价操作对象 0 拒绝  1 接受
   * @format int32
   */
  operateStatus?: number;
  /**
   * 寻源单id
   * @format int64
   */
  searchSourceOrderId?: number;
  /** 寻源单no */
  searchSourceOrderNo?: string;
  /**
   * 报价单id
   * @format int64
   */
  searchSourceOrderSupplierPriceId?: number;
}

/** PriceQueryVO */
export interface PriceQueryVO {
  /** 寻源单号 */
  searchSourceOrderNo?: string;
  /** 状态集合 */
  statusList?: number[];
}

/** PriceTranslateVO */
export interface PriceTranslateVO {
  /** 次品处理方式(日文) */
  defectiveDealModeJp?: string;
  /** 面料信息(日文) */
  fabricJp?: string;
  files?: string[];
  /** 销售报价日文 */
  fillSellPriceRemarkJp?: string;
  images?: string[];
  /** 报采购价备注 */
  reportePurchasePriceRemarkJp?: string;
  /** 风险(日文) */
  riskJp?: string;
  /** @format int64 */
  searchSourceOrderSupplierPriceId?: number;
  /** 尺寸误差 */
  sizeErrorJp?: string;
}

/** PriorityShippingReqDTO */
export interface PriorityShippingReqDTO {
  /** @format int64 */
  platformOrderId?: number;
  /** @format int64 */
  platformOrderItemId?: number;
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

/** ProductDetail */
export interface ProductDetail {
  /** @format int32 */
  deliveryNums?: number;
  productPropertiesName?: string;
  productSku?: string;
  productTitle?: string;
}

/** ProductDetailsReqDTO */
export interface ProductDetailsReqDTO {
  /**
   * 查询日志状态         TO_BE_PURCHASED(1, "待采购","買付待ち"),
   *         PURCHASING(2, "采购中","買付対応中"),
   *         PURCHASED(3, "已采购","買付完了"),
   *         IN_DOMESTIC_TRANSPORTATION(4, "国内运输中","国内運送中"),
   *         IN_STOCK(5, "已入库","入庫済み"),
   *         IN_INSPECTION(6, "检品中","検品中"),
   *         IT_HAS_BEEN_ADDED_TO(7, "已上架(已清算)","検品済"),
   *         TO_BE_DELIVERED(8, "待发货","発送待ち"),
   *         SHIPPED(9, "已发货","発送済"),
   *         ABNORMAL(10, "异常","異常"),
   *         DEFECTIVE(11, "次品","不良品"),
   *         CANCEL_SUCCESS(12, "取消成功","キャンセル済"),
   *         KEEP_STOCK(13, "保留库存","在庫保管"),
   * @format int32
   */
  orderItemLogType?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** 平台订单详情表id */
  platformOrderItemId?: string;
  /** 平台商品SKU */
  productSku?: string;
  /** 店铺商品SKU */
  shopProductSku?: string;
  /** @format int32 */
  startIndex?: number;
}

/** ProductDetailsRespDTO */
export interface ProductDetailsRespDTO {
  customerProductInfo?: CustomerProductInfoRespDTO;
  productStatusChangeLog?: PagePlatformOrderItemLogInfoDTO;
  purchaseProductInfo?: PurchaseProductInfoRespDTO;
}

/** ProductMaterialRespDTO */
export interface ProductMaterialRespDTO {
  materialJa?: string;
  materialZh?: string;
  systemOrderNo?: string;
}

/** ProductMeasureDto */
export interface ProductMeasureDto {
  /** @format int32 */
  code?: number;
  name?: string;
  value?: string;
}

/** ProductMeasureQueryReqDTO */
export interface ProductMeasureQueryReqDTO {
  /** @format int64 */
  customerShopId?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** 直行便订单编号 */
  platformOrderNo?: string;
  /** 平台商品SKU */
  productSku?: string;
  /** @format int32 */
  startIndex?: number;
}

/** ProductMeasureRespDTO */
export interface ProductMeasureRespDTO {
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 客户订单编号 */
  customerOrderNo?: string;
  /** 客户商品 sku */
  customerProductMsku?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 测量时间
   * @format date-time
   */
  measureTime?: string;
  /** 系统订单编号 */
  orderCode?: string;
  /** @format int32 */
  orderSource?: number;
  /** @format int32 */
  orderType?: number;
  /**
   * 直行便订单id
   * @format int64
   */
  platformOrderId?: number;
  /** 直行便订单编号 */
  platformOrderNo?: string;
  /** 商品编码 */
  productCode?: string;
  /** 商品主图 */
  productMainImg?: string;
  /** 测量结果 */
  productMeasureDtoList?: ProductMeasureDto[];
  /** 商品名称 */
  productName?: string;
  /** 商品规格 */
  productProp?: string;
  /** 平台商品SKU */
  productSku?: string;
  /** 客户商品SKU */
  shopProductSku?: string;
  /** 测量图片 */
  urls?: string[];
}

/** ProductPriceLadderRespDTO */
export interface ProductPriceLadderRespDTO {
  appPrice?: number;
  /** @format int32 */
  count?: number;
  discount?: number;
  originPrice?: number;
  price?: number;
  /** @format int64 */
  priceId?: number;
  sku?: string;
}

/** ProductSpecialCheckRespDTO */
export interface ProductSpecialCheckRespDTO {
  productSku?: string;
  specialCheckRequirement?: string;
  specialCheckRequirementImg?: string;
}

/** ProductUpdateMeasureReqDTO */
export interface ProductUpdateMeasureReqDTO {
  content?: string;
  images?: string;
  /** @format int64 */
  measureId?: number;
  measureName?: string;
  /** @format date-time */
  measureTime?: string;
  orderCode?: string;
}

/** PurchaseAbnormalCancelReqDTO */
export interface PurchaseAbnormalCancelReqDTO {
  bizId?: string;
  /** @format int32 */
  confirmQuantity?: number;
  platformOrderNo?: string;
  /** @format int32 */
  reduceExpressNum?: number;
  /** @format int32 */
  reducePurchaseNum?: number;
  shopProductSku?: string;
  /** @format int32 */
  source?: number;
  systemOrderNo?: string;
  /** @format int32 */
  type?: number;
}

/** PurchaseManagerRejectVo */
export interface PurchaseManagerRejectVo {
  /** 拒绝备注 */
  rejectRemark?: string;
  /**
   * 寻源订单id
   * @format int64
   */
  searchSourceOrderId?: number;
}

/** PurchaseProductInfoRespDTO */
export interface PurchaseProductInfoRespDTO {
  /** @format int32 */
  channel?: number;
  /** @format int64 */
  platformOrderItemId?: number;
  platformOrderNo?: string;
  platformType?: string;
  productCode?: string;
  productDetailUrl?: string;
  productMainImg?: string;
  productPropertiesName?: string;
  productSku?: string;
  productSkuImg?: string;
  productTitleJp?: string;
  /** @format int64 */
  searchSourcePriceId?: number;
  shopProductSku?: string;
}

/** QueryItemExpressesRespDTO */
export interface QueryItemExpressesRespDTO {
  packageLogistics?: PackageLogisticsDTO[];
  productImg?: string;
  productSku?: string;
}

/** QueryOrderCountRespDTO */
export interface QueryOrderCountRespDTO {
  /** @format int32 */
  allCount?: number;
  /** @format int32 */
  canDeliverCount?: number;
  /** @format int32 */
  completeCount?: number;
  /** @format int32 */
  dealingCount?: number;
  /** @format int32 */
  partDeliverCount?: number;
  /** @format int32 */
  waitPayCount?: number;
}

/** QueryPayStageRespDTO */
export interface QueryPayStageRespDTO {
  freezeAmount?: number;
  stageFreezeAmount?: number;
  totalAmount?: number;
}

/** QueryStageInfoReqDTO */
export interface QueryStageInfoReqDTO {
  orderNos?: string[];
  platformOrderNo?: string;
}

/** QueryStageInfoRespDTO */
export interface QueryStageInfoRespDTO {
  stageInfos?: StageInfoDTO[];
  /** @format int32 */
  stageType?: number;
  totalFreezeAmount?: number;
}

/** QuerySubscriptionShopifyRespDTO */
export interface QuerySubscriptionShopifyRespDTO {
  isSubscription?: boolean;
}

/** RecheckSubmitVO */
export interface RecheckSubmitVO {
  /** 复审备注 */
  recheckRemark?: string;
  /**
   * 寻源单id
   * @format int64
   */
  searchSourceOrderId?: number;
  /** 寻源报价id */
  searchSourceOrderSupplierPriceIdList?: number[];
}

/** RecheckVO */
export interface RecheckVO {
  /** 复审备注 */
  recheckRemark?: string;
  /**
   * 寻源单id
   * @format int64
   */
  searchSourceOrderId?: number;
  /**
   * 寻源报价id
   * @format int64
   */
  searchSourceOrderSupplierPriceId?: number;
}

/** ReferenceSku */
export interface ReferenceSku {
  productMainImg?: string;
  productSku?: string;
  productSkuImg?: string;
  productTitle?: string;
  productTitleJp?: string;
  shopProductSku?: string;
}

/** RegularizationRespDTO */
export interface RegularizationRespDTO {
  additionName?: string;
  additionNameJp?: string;
  additionTotal?: number;
  /** @format date-time */
  becomeRegularTime?: string;
  /** @format int32 */
  combinationProductItemFlag?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  creatorId?: number;
  creatorName?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  /** @format int32 */
  defectiveAmount?: number;
  defectiveCode?: string;
  defectiveImg?: string;
  defectiveImgList?: string[];
  defectiveReason?: string;
  /** @format int64 */
  editorId?: number;
  editorName?: string;
  gridCode?: string;
  /** @format int64 */
  id?: number;
  inboundOrderAdditionList?: InboundOrderAdditionRespDTO[];
  /** @format int32 */
  isDelete?: number;
  moveProductName?: string;
  /** @format date-time */
  moveProductTime?: string;
  newPkgCode?: string;
  /** @format int32 */
  noAdditionalFlag?: number;
  /** @format int32 */
  oemProductClassificationId?: number;
  /** @format int32 */
  operateState?: number;
  orderAdditionCode?: string;
  orderCode?: string;
  /** @format int32 */
  orderProcessResult?: number;
  /** @format date-time */
  orderProcessTime?: string;
  /** @format int32 */
  orderType?: number;
  pkgCode?: string;
  platformOrderNo?: string;
  /** @format int32 */
  printBatchFlag?: number;
  productImg?: string;
  productName?: string;
  productProp?: string;
  productSku?: string;
  /** @format int32 */
  productType?: number;
  regionCode?: string;
  regionName?: string;
  regularOperationName?: string;
  /** @format date-time */
  regularOperationTime?: string;
  regularizationCode?: string;
  settleAdditionAmount?: number;
  shopProductSku?: string;
  /** @format int32 */
  state?: number;
  /** @format int32 */
  systemSource?: number;
  /** @format date-time */
  updateTime?: string;
  warehouse?: string;
}

/** RejectApplyApproveNotPassVO */
export interface RejectApplyApproveNotPassVO {
  /** 拒绝remark */
  rejectRemark?: string;
  /**
   * 寻源订单id
   * @format int64
   */
  searchSourceOrderId?: number;
}

/** RejectVO */
export interface RejectVO {
  /** 备注 */
  remark?: string;
  /**
   * 寻源单id
   * @format int64
   */
  searchSourceOrderId?: number;
}

/** RemainCombinationProductItemRespDTO */
export interface RemainCombinationProductItemRespDTO {
  canOver?: boolean;
  /** @format date-time */
  remainCombinationCloseTime?: string;
  /** @format int32 */
  remainCombinationQuantity?: number;
  shopProductSku?: string;
  systemOrderNo?: string;
}

/** RemakeFreezeDTO */
export interface RemakeFreezeDTO {
  /** @format int32 */
  addQuantity?: number;
  /** @format int32 */
  freezeQuantity?: number;
  orderNo?: string;
  originPurchaseAbnormalOrderNo?: string;
  /** @format int32 */
  originalQuantity?: number;
  originalRedemptionNewProductSku?: string;
  platformOrderNo?: string;
  productSku?: string;
  /** @format int32 */
  purchasingAbnormalNumber?: number;
  purchasingAbnormalOrderNo?: string;
  redemptionNewProductSku?: string;
}

/** ReplaceCartReqDTO */
export interface ReplaceCartReqDTO {
  /** @format int64 */
  cartId?: number;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  /** @format int32 */
  noAdditionalFlag?: number;
  productSku?: string;
  /** @format int32 */
  systemSource?: number;
}

/** ReplenishPlanAddressRespDTO */
export interface ReplenishPlanAddressRespDTO {
  /** 详细地址 */
  address?: string;
  /**
   * 类型(0:收件人地址 1:英文清关地址)
   * @format int32
   */
  addressType?: number;
  /** 区/县 */
  area?: string;
  /** 城市 */
  city?: string;
  /** 会社编码 */
  clubCode?: string;
  /** 公司名 */
  companyName?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 联系邮箱 */
  email?: string;
  /** 联系方式 */
  mobile?: string;
  /** 姓名 */
  name?: string;
  /** 国家 */
  nation?: string;
  /** 邮编 */
  postalCode?: string;
  /** 省/州 */
  province?: string;
  /**
   * 业务主键
   * @format int64
   */
  replenishPlanAddressId?: number;
  /**
   * 补货计划id
   * @format int64
   */
  replenishPlanId?: number;
  /** 补货批次号 */
  replenishPlanNo?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/** ReplenishPlanItemRespDTO */
export interface ReplenishPlanItemRespDTO {
  /** 亚马逊asin */
  amazonAsin?: string;
  /** 亚马逊fnsku */
  amazonFnsku?: string;
  /** 亚马逊msku */
  amazonMsku?: string;
  /** 亚马逊商品名称 */
  amazonProductTitle?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /**
   * 发货数
   * @format int32
   */
  deliveryNums?: number;
  /** 海外仓sku */
  overseaProductSku?: string;
  /** 商品图片 */
  productImg?: string;
  /** 平台商品sku */
  productSku?: string;
  /** 商品名称 */
  productTitle?: string;
  /**
   * 补货计划id
   * @format int64
   */
  replenishPlanId?: number;
  /**
   * 业务主键
   * @format int64
   */
  replenishPlanItemId?: number;
  /** 补货批次号 */
  replenishPlanNo?: string;
  /** 店铺商品sku */
  shopProductSku?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/** ReplenishPlanRespDTO */
export interface ReplenishPlanRespDTO {
  /** 补货计划-地址信息 */
  addressList?: ReplenishPlanAddressRespDTO[];
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
  /** 客户姓名 */
  customerName?: string;
  /**
   * 客户店铺表id
   * @format int64
   */
  customerShopId?: number;
  /** 客户店铺名称 */
  customerShopName?: string;
  /** 发货任务编号 */
  deliveryTaskCode?: string;
  /** 中国货代公司名称 */
  forwarder?: string;
  /** 中国货代公司名称id */
  intForwarderConfigId?: string;
  /**
   * 日本配送公司id
   * @format int64
   */
  intShipConfigId?: number;
  /**
   * 计划状态(1:处理中 2:已确认 3:已作废)
   * @format int32
   */
  planStatus?: number;
  /** 收货仓 */
  receiverWarehouse?: string;
  /**
   * 业务主键
   * @format int64
   */
  replenishPlanId?: number;
  /** 补货计划-商品详情 */
  replenishPlanItemList?: ReplenishPlanItemRespDTO[];
  /** 补货计划编号 */
  replenishPlanNo?: string;
  /** 补货批次号 */
  shipmentId?: string;
  /** 运输方式 */
  shippingType?: string;
  /** 运输方式(日文) */
  shippingTypeJp?: string;
  /** 标题 */
  title?: string;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/** ReportPurchasePriceItemDTO */
export interface ReportPurchasePriceItemDTO {
  /**
   * 结束采购数量
   * @format int32
   */
  endPurchaseQuantity?: number;
  /**
   * id 用于更新用
   * @format int64
   */
  id?: number;
  /** 采购价 */
  purchasePrice?: number;
  /** @format int64 */
  searchSourceOrderSupplierPriceId?: number;
  sellPrice?: number;
  /** 阶梯价按照sku报价 */
  sku?: string;
  /**
   * 开始采购数量
   * @format int32
   */
  startPurchaseQuantity?: number;
}

/** ReportPurchasePriceVO */
export interface ReportPurchasePriceVO {
  /**
   * 是否加logo: 0-不需要; 1-需要
   * @format int32
   */
  addLogoFlag?: number;
  /**
   * 审核状态: 1-未审核; 2-待定; 3-初审通过; 4-初审拒绝; 5-待复审; 6-复审拒绝; 7-审核通过; 8-废弃 9-待修改
   * @format int32
   */
  approveStatus?: number;
  /** 大货交期(天) */
  bulkPeriod?: number;
  /**
   * 是否含税
   * @format int32
   */
  containTaxFlag?: number;
  /** 样品报价 */
  customerSamplePrice?: number;
  /** 次品处理方式 */
  defectiveDealMode?: string;
  /**
   * 交期(天)
   * @format int32
   */
  deliveryPeroid?: number;
  /** 面料信息 */
  fabric?: string;
  /** 附件 */
  files?: string[];
  fillSellPriceRemark?: string;
  /** 历史报价 */
  historyPriceVO?: ReportPurchasePriceVO;
  /**
   * 报价id  用于更新（修改报价用）
   * @format int64
   */
  id?: number;
  /** 图片 */
  images?: string[];
  maxOverflowPeriod?: number;
  /**
   * 最低起订量
   * @format int32
   */
  minOrderQuantity?: number;
  /** OEM供应商表id */
  oemSupplierId?: string;
  /** 支付详情 */
  paymentPeriodDetails?: PaymentPeriodDetailDTO[];
  /**
   * 支付类型  1 一次性支付  2 账期支付
   * @format int32
   */
  paymentType?: number;
  /**
   * 报价过期时间(报价有效期)
   * @format date-time
   */
  priceExpireTime?: string;
  /**
   * 报价类型  1 阶梯价格  2 sku报价
   * @format int32
   */
  priceType?: number;
  /** 阶梯价 */
  reportePurchasePriceItemList?: ReportPurchasePriceItemDTO[];
  /** 报采购价备注 */
  reportePurchasePriceRemark?: string;
  /** 风险 */
  risk?: string;
  /** 打样交期(天) */
  sampleDeliverPeriod?: number;
  /** 打样时间(天) */
  samplePeriod?: number;
  /** 打样费 */
  samplePrice?: number;
  /**
   * 寻源单表id
   * @format int64
   */
  searchSourceOrderId?: number;
  /** 尺寸误差 */
  sizeError?: string;
  /**
   * 1-单尺码; 2-多尺码
   * @format int32
   */
  sizeFlag?: number;
  /** sku报价列表 */
  skuItemList?: SearchSourceOrderSupplierPriceSkuItemDTO[];
  /**
   * 是否特殊原材料标志: 0-否; 1-是
   * @format int32
   */
  specialMaterialFlag?: number;
}

/** RepurchaseApplyPriceTranslateVO */
export interface RepurchaseApplyPriceTranslateVO {
  /** 次品处理方式(日文) */
  defectiveDealModeJp?: string;
  /** 面料信息(日文) */
  fabricJp?: string;
  /** 报采购价备注 */
  reportePurchasePriceRemarkJp?: string;
  /** 风险(日文) */
  riskJp?: string;
  /** @format int64 */
  searchSourceOrderRepurchaseApplySupplierPriceId?: number;
}

/** RepurchaseApplyReportePurchasePriceVO */
export interface RepurchaseApplyReportePurchasePriceVO {
  /** @format int32 */
  addLogoFlag?: number;
  defectiveDealMode?: string;
  /** @format int32 */
  deliveryPeroid?: number;
  fabric?: string;
  /** @format int32 */
  minOrderQuantity?: number;
  oemSupplierId?: string;
  /** @format date-time */
  priceExpireTime?: string;
  reportePurchasePriceItemList?: ReportPurchasePriceItemDTO[];
  reportePurchasePriceRemark?: string;
  risk?: string;
  samplePeriod?: number;
  samplePrice?: number;
  /** @format int64 */
  searchSourceOrderRepurchaseApplyId?: number;
  /** @format int32 */
  sizeFlag?: number;
  /** @format int32 */
  specialMaterialFlag?: number;
}

/** RepurchaseFillSellPriceItemDTO */
export interface RepurchaseFillSellPriceItemDTO {
  /** @format int64 */
  searchSourceOrderRepurchaseApplySupplierPriceItemId?: number;
  sellPrice?: number;
}

/** RepurchaseFillSellPriceVO */
export interface RepurchaseFillSellPriceVO {
  /** @format int32 */
  containTaxFlag?: number;
  fillSellPriceItemList?: RepurchaseFillSellPriceItemDTO[];
  remark?: string;
  /** @format int64 */
  searchSourceOrderRepurchaseApplySupplierPriceId?: number;
}

/** RepurchaseRecheckVO */
export interface RepurchaseRecheckVO {
  recheckRemark?: string;
  /** @format int64 */
  searchSourceOrderRepurchaseApplySupplierPriceId?: number;
}

/** RepurchaseReqDTO */
export interface RepurchaseReqDTO {
  addCommonProduct?: AddCommonProductReqDTO;
  platformOrderNo?: string;
  /** @format int32 */
  repurchaseType?: number;
  /** @format int64 */
  searchSourceSupplierPriceId?: number;
  shopProductSkus?: string[];
}

/** RepurchaseSellQuantityProductListVO */
export interface RepurchaseSellQuantityProductListVO {
  /** @format int64 */
  searchSourceOrderRepurchaseApplyId?: number;
  skuList?: SellQuantitySkuDTO[];
}

/** SaveBadAdditionalItemsReqDTO */
export interface SaveBadAdditionalItemsReqDTO {
  /**
   * 附加项数量
   * @format int32
   */
  additionQuantity?: number;
  /** 次转正附加项 */
  badAdditionList?: BadAdditionReqDTO[];
  /** @format int64 */
  mainCustomerId?: number;
  /**
   * 是否需要附加项(0:不需要 1:需要)
   * @format int32
   */
  noAdditionalFlag?: number;
  /** 订单编号 */
  orderNo?: string;
  /** 包编码 */
  pkgCode?: string;
  /** 平台订单编号(直行便订单编号) */
  platformOrderNo?: string;
  /**
   * 商品类型: 1-普通商品; 2-OEM商品; 3-组合商品
   * @format int32
   */
  productType?: number;
  /** 客户商品SKU(客户商品库) */
  shopProductSku?: string;
}

/** SearchSourceOrder */
export interface SearchSourceOrder {
  /** @format int32 */
  allPriceExpireStatus?: number;
  /** @format int32 */
  autoQuoteFlag?: number;
  bizType?: string;
  /** 分类名字: 服装/杂货/辅料 */
  classificationName?: string;
  /** 分类名字: 服装/杂货/辅料(日文) */
  classificationNameJp?: string;
  /** 服装问题-是否可以邮寄样衣【问题1-1：请问您是否可以提供样衣邮寄】 */
  clothingQuestionCanSendSample?: string;
  /** 服装问题-是否有式样书【问题3：请问你是否有式样书？】 */
  clothingQuestionHaveStylebook?: string;
  /** 服装问题-初步需求【问题1：请问你对本次服装oem的初步需求是怎样的？】 */
  clothingQuestionInitialRequirement?: string;
  /** 服装问题-是否知道面料具体信息【问题4：请问你是否知道面料具体信息？（文字提示，需要提供具体的色卡信息）】 */
  clothingQuestionKnowFabricDetail?: string;
  /** 服装问题-能提供具体尺寸吗【问题6：请问你能够提供尺码的具体尺寸吗？】 */
  clothingQuestionProvideSize?: string;
  /** 色卡，逗号分割 */
  colorCard?: string;
  /** 色卡文件链接 */
  colorCardUrl?: string;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * 客户希望交期
   * @format date-time
   */
  customerExpectDeliveryTime?: string;
  /**
   * 客户希望最高起订量
   * @format int32
   */
  customerExpectMaxOrderQuantity?: number;
  /**
   * 客户希望最低起订量
   * @format int32
   */
  customerExpectMinOrderQuantity?: number;
  /** 客户希望价格 */
  customerExpectPrice?: number;
  /** 客户侧重点: 价格、质量、交期，多选 */
  customerFocus?: string;
  /** 客户侧重点: 价格、质量、交期，多选(中文) */
  customerFocusZh?: string;
  /**
   * 客户id
   * @format int64
   */
  customerId?: number;
  /** 客户姓名 */
  customerName?: string;
  /**
   * 店铺id
   * @format int64
   */
  customerShopId?: number;
  /**
   * 担当后台用户id
   * @format int64
   */
  ddUserId?: number;
  /** 担当用户姓名 */
  ddUserName?: string;
  /** 次品处理方式 */
  defectiveDealMode?: string;
  /** 次品处理方式(中文) */
  defectiveDealModeZh?: string;
  /** @format date-time */
  distributeQuoteTime?: string;
  /** @format date-time */
  expectedQuoteTime?: string;
  /** 面料描述 */
  fabricDesc?: string;
  /** 面料描述(中文) */
  fabricDescZh?: string;
  /** 面料信息 */
  fabricInfo?: string;
  /** 面料信息(中文) */
  fabricInfoZh?: string;
  /** 面料链接 */
  fabricUrl?: string;
  /** 费用等级：1,2,3 */
  feeLevel?: string;
  /** 杂货问题-是否要加logo【问题3：请问您需要加logo吗？】 */
  groceriesQuestionAddLogo?: string;
  /** 杂货问题-是否可以邮寄样品【问题2-1：请问您是否有样品可邮寄？】 */
  groceriesQuestionCanSendSample?: string;
  /** 杂货问题-是否有式样书【问题2-3：请问您是否有式样书】 */
  groceriesQuestionHaveStylebook?: string;
  /** 杂货问题-初步需求【问题1：请问你对本次杂货oem的初步需求是怎样的？】A-杂货1类; B-杂货2类; C-杂货3类 */
  groceriesQuestionInitialRequirement?: string;
  /** 毛利率 */
  grossProfitRate?: number;
  /**
   * 客户组别id
   * @format int64
   */
  groupId?: number;
  /** 客户组别名称 */
  groupName?: string;
  /** 辅料颜色描述 */
  ingredientsColorDesc?: string;
  /** 辅料颜色描述(中文) */
  ingredientsColorDescZh?: string;
  /** 辅料颜色参考图片 */
  ingredientsColorRefImg?: string;
  /**
   * 辅料表id
   * @format int64
   */
  ingredientsId?: number;
  /**
   * 辅料logo印刷方式表id
   * @format int64
   */
  ingredientsLogoPrintModeId?: number;
  /** 辅料材质描述 */
  ingredientsMaterialsDesc?: string;
  /** 辅料材质描述(中文) */
  ingredientsMaterialsDescZh?: string;
  /**
   * 辅料材质表id
   * @format int64
   */
  ingredientsMaterialsId?: number;
  /** 辅料材质参考图片 */
  ingredientsMaterialsRefImg?: string;
  /** 辅料名字 */
  ingredientsName?: string;
  /** 辅料名字(中文) */
  ingredientsNameZh?: string;
  /** 辅料问题-是否要加logo【问题8：请问你需要附加logo吗】 */
  ingredientsQuestionAddLogo?: string;
  /** 辅料问题-有自己的方案吗【问题2：请问你有自己的方案吗？】AB-辅料1; C-辅料2 */
  ingredientsQuestionHaveOwnPlan?: string;
  /** 辅料问题-推荐颜色【问题6：请查看我们的颜色推荐方案】 */
  ingredientsQuestionRecommendColor?: string;
  /** 辅料问题-推荐材质【问题4：请查看我们的材质推荐方案】 */
  ingredientsQuestionRecommendMaterials?: string;
  /** 辅料问题-推荐尺寸【问题5：请查看我们的尺寸推荐方案】 */
  ingredientsQuestionRecommendSize?: string;
  /** 辅料问题-推荐款式【问题3：请查看我们的款式推荐方案】 */
  ingredientsQuestionRecommendStyle?: string;
  /** 辅料问题-做什么辅料【问题1：请问你要做什么辅料？】A-吊牌; B-布标; C-快递袋; D-包装袋; E-感谢卡; F-箱子; G-客户填写 */
  ingredientsQuestionWhatMake?: string;
  /** 辅料参考图片 */
  ingredientsReferenceImg?: string;
  /** 辅料尺寸描述 */
  ingredientsSizeDesc?: string;
  /** 辅料尺寸描述(中文) */
  ingredientsSizeDescZh?: string;
  /**
   * 辅料尺寸表id
   * @format int64
   */
  ingredientsSizeId?: number;
  /** 辅料尺寸参考图片 */
  ingredientsSizeRefImg?: string;
  /** 辅料款式描述 */
  ingredientsStyleDesc?: string;
  /** 辅料款式描述(中文) */
  ingredientsStyleDescZh?: string;
  /**
   * 辅料款式表id
   * @format int64
   */
  ingredientsStyleId?: number;
  /** 辅料款式参考图片 */
  ingredientsStyleRefImg?: string;
  /** 辅料链接 */
  ingredientsUrl?: string;
  /** 运输单号：快递单号 */
  logisticsNo?: string;
  /**
   * logo颜色(1 单色 2 双色)
   * @format int32
   */
  logoColorType?: number;
  /** logo详细说明: 详细说明（颜色、尺寸、工艺、位置等） */
  logoDetailDesc?: string;
  /** logo详细说明: 详细说明（颜色、尺寸、工艺、位置等）(中文) */
  logoDetailDescZh?: string;
  /**
   * logo需求情况: 0-不需要; 1-需要
   * @format int32
   */
  logoNeedFlag?: number;
  /** logo印刷方式名字 */
  logoPrintMode?: string;
  /** logo印刷方式图片 */
  logoPrintModeImg?: string;
  /** logo印刷方式名字(日文) */
  logoPrintModeJp?: string;
  /** logo印刷方式名字推荐方案 */
  logoPrintModeRecommendPlan?: string;
  /** logo链接: 附件（文件） */
  logoUrl?: string;
  /** 材质名字 */
  materials?: string;
  /** 材质图片 */
  materialsImg?: string;
  /** 材质名字(日文) */
  materialsJp?: string;
  /** 材质推荐方案 */
  materialsRecommendPlan?: string;
  /**
   * 会员身份模板
   * @format int64
   */
  membershipTemplateId?: number;
  /** 会员身份名称 */
  membershipTemplateName?: string;
  /** 需要改动的地方 */
  needChangeThings?: string;
  /** 需要改动的地方链接 */
  needChangeThingsUrl?: string;
  /** 需要改动的地方(中文) */
  needChangeThingsZh?: string;
  /**
   * OEM商品分类表id
   * @format int64
   */
  oemProductClassificationId?: number;
  /** 旧寻源单id,用于复购场景 */
  oldSearchSourceId?: string;
  /** 下单需求补充: 其他补充（文字输入框） */
  orderDemandSupplement?: string;
  /** 下单需求补充附件url */
  orderDemandSupplementUrl?: string;
  /** 下单需求补充: 其他补充（文字输入框）(中文) */
  orderDemandSupplementZh?: string;
  /**
   * 寻源单状态: 0-已取消;1-待发布;2-待接单;3-待商榷报价;4-待分配;5-待报采购价;6-待审核拒绝申请;7-待担当确认拒绝申请审核通过;8-已拒绝;9-待审采购价;10-待审报价内容;11-待担当报销售价;12-待复审;13-已报价;14-寻源失败;15-已报价
   * @format int32
   */
  orderStatus?: number;
  /**
   * 父寻源单表id(复购时用)
   * @format int64
   */
  parentSearchSourceOrderId?: number;
  /** 支付消息 */
  payMessage?: string;
  /**
   * 支付状态：1-未支付；2-支付中；3-支付成功；4-支付失败
   * @format int32
   */
  payStatus?: number;
  /**
   * 支付时间
   * @format date-time
   */
  payTime?: string;
  /**
   * 报价过期时间(报价有效期)
   * @format date-time
   */
  priceExpireTime?: string;
  /** 材质图片 */
  printLogo?: boolean;
  productFileUrl?: string;
  /** 产品图片 */
  productImg?: string;
  /** 产品信息补充: 其他补充（文字输入） */
  productInfoSupplement?: string;
  /** 产品信息补充: 其他补充（文字输入）(中文) */
  productInfoSupplementZh?: string;
  /** 产品名称 */
  productName?: string;
  /** 产品名称(中文) */
  productNameZh?: string;
  /** 产品链接 */
  productUrl?: string;
  /**
   * 发布时间
   * @format date-time
   */
  publishTime?: string;
  /**
   * 采购主管后台用户id
   * @format int64
   */
  purchaserManagerUserId?: number;
  /** 采购主管用户姓名 */
  purchaserManagerUserName?: string;
  /**
   * 采购员后台用户id
   * @format int64
   */
  purchaserUserId?: number;
  /** 采购员用户姓名 */
  purchaserUserName?: string;
  /** 资质要求: 工厂、资质要求 */
  qualificationRequirement?: string;
  /** 资质要求: 工厂、资质要求(中文) */
  qualificationRequirementZh?: string;
  /** 问题-商品类型【问题一：商品类型】 */
  questionClassificationName?: string;
  /** 问答卷记录 */
  questionRecord?: string;
  quoteFailReason?: string;
  /** @format date-time */
  quoteTime?: string;
  /** @format int32 */
  reeditPriceFlag?: number;
  /** 参考图片 */
  referenceImg?: string;
  /** 仓库现有商品参考 */
  referenceSku?: string;
  /** 参考链接 */
  referenceUrl?: string;
  /** 退款消息 */
  refundMessage?: string;
  /**
   * 退款状态: 1-未退款; 2-退款中; 3-退款成功; 4-退款失败
   * @format int32
   */
  refundStatus?: number;
  /** 拒绝备注 */
  rejectRemark?: string;
  /** 寻源备注: 其他（特殊需求） */
  remark?: string;
  /** 寻源备注: 其他（特殊需求）(中文) */
  remarkZh?: string;
  /** 样品邮寄方式： SAMPLE 通过物流寄回样品；REFERENCE_SKU 从仓库选择现有商品作为参考 */
  samplePostType?: string;
  /**
   * 样衣发出时间
   * @format date-time
   */
  sampleSendTime?: string;
  /** @format int64 */
  searchSourceOrderId?: number;
  /** 寻源单编号 */
  searchSourceOrderNo?: string;
  /**
   * 寻源单报价表id
   * @format int64
   */
  searchSourceOrderSupplierPriceId?: number;
  /** 寻源费: 发布时支付 */
  searchSourcePrice?: number;
  /** 寻源种类描述 */
  searchSourceTypeDesc?: string;
  /** 寻源种类描述(日文) */
  searchSourceTypeDescJp?: string;
  /**
   * 寻源种类表id
   * @format int64
   */
  searchSourceTypeId?: number;
  /** 寻源种类名字 */
  searchSourceTypeName?: string;
  /** 贩卖价格 */
  sellPrice?: number;
  /** 尺寸名字 */
  size?: string;
  /** 尺寸图片 */
  sizeImg?: string;
  /** 尺寸名字(日文) */
  sizeJp?: string;
  /** 尺寸推荐方案 */
  sizeRecommendPlan?: string;
  /** 尺寸备注: 无具体数值请备注参考信息 */
  sizeRemark?: string;
  /** 尺寸备注: 无具体数值请备注参考信息(中文) */
  sizeRemarkZh?: string;
  /** 尺寸对应数值 */
  sizeValue?: string;
  /** 尺寸对应数值(中文) */
  sizeValueZh?: string;
  /**
   * 来源 1-用户创建 2-后台新增
   * @format int32
   */
  source?: number;
  /** 站点代码(日本:JapanStation,韩国:KoreaStation,英国:UkStation) */
  stationCode?: string;
  /** 款式名字 */
  style?: string;
  /** 款式图片 */
  styleImg?: string;
  /** 款式名字(日文) */
  styleJp?: string;
  /** 款式推荐方案 */
  styleRecommendPlan?: string;
  /** 式样书链接 */
  stylebookUrl?: string;
  /** 式样书链接(中文) */
  stylebookUrlZh?: string;
  /**
   * 父类客户id
   * @format int64
   */
  superCustomerId?: number;
  /**
   * 翻译状态： 0:未翻译 1:已经翻译
   * @format int32
   */
  translateStatus?: number;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  /** 待接单状态-调整申请后的申请采购价 */
  waitAcceptOrderAdjustApplyPrice?: number;
  /**
   * 待接单状态-调整申请后的最高起订量
   * @format int32
   */
  waitAcceptOrderAdjustMaxOrderQuantity?: number;
  /**
   * 待接单状态-调整申请后的最低起订量
   * @format int32
   */
  waitAcceptOrderAdjustMinOrderQuantity?: number;
}

/** SearchSourceOrderByShopIdResp */
export interface SearchSourceOrderByShopIdResp {
  /** @format int32 */
  quotedOem?: number;
  /** @format int32 */
  rePurchaseOem?: number;
  /** @format int32 */
  searchSuccessOem?: number;
  /** @format int32 */
  toBeQuotedOem?: number;
  /** @format int32 */
  waitConfirm?: number;
  /** @format int32 */
  waitedOem?: number;
}

/** SearchSourceOrderCancelDistributeVO */
export interface SearchSourceOrderCancelDistributeVO {
  /**
   * 寻源单id
   * @format int64
   */
  searchSourceOrderId?: number;
  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

/** SearchSourceOrderCreateAndReportPriceVO */
export interface SearchSourceOrderCreateAndReportPriceVO {
  /** 报价单 */
  reportPurchasePriceList?: ReportPurchasePriceVO[];
  /** 寻源单 */
  searchSourceOrder?: SearchSourceOrderCreateVO;
}

/** SearchSourceOrderCreateVO */
export interface SearchSourceOrderCreateVO {
  /** @format int32 */
  allPriceExpireStatus?: number;
  /** @format int32 */
  autoQuoteFlag?: number;
  bizType?: string;
  /** 分类名字: 服装/杂货/辅料 */
  classificationName?: string;
  /** 分类名字: 服装/杂货/辅料(日文) */
  classificationNameJp?: string;
  /** 服装问题-是否可以邮寄样衣【问题1-1：请问您是否可以提供样衣邮寄】 */
  clothingQuestionCanSendSample?: string;
  /** 服装问题-是否有式样书【问题3：请问你是否有式样书？】 */
  clothingQuestionHaveStylebook?: string;
  /** 服装问题-初步需求【问题1：请问你对本次服装oem的初步需求是怎样的？】 */
  clothingQuestionInitialRequirement?: string;
  /** 服装问题-是否知道面料具体信息【问题4：请问你是否知道面料具体信息？（文字提示，需要提供具体的色卡信息）】 */
  clothingQuestionKnowFabricDetail?: string;
  /** 服装问题-能提供具体尺寸吗【问题6：请问你能够提供尺码的具体尺寸吗？】 */
  clothingQuestionProvideSize?: string;
  /** 色卡，逗号分割 */
  colorCard?: string;
  /** 色卡文件链接 */
  colorCardUrl?: string;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * 客户希望交期
   * @format date-time
   */
  customerExpectDeliveryTime?: string;
  /**
   * 客户希望最高起订量
   * @format int32
   */
  customerExpectMaxOrderQuantity?: number;
  /**
   * 客户希望最低起订量
   * @format int32
   */
  customerExpectMinOrderQuantity?: number;
  /** 客户希望价格 */
  customerExpectPrice?: number;
  /** 客户侧重点: 价格、质量、交期，多选 */
  customerFocus?: string;
  /** 客户侧重点: 价格、质量、交期，多选(中文) */
  customerFocusZh?: string;
  /**
   * 客户id
   * @format int64
   */
  customerId?: number;
  /** 客户姓名 */
  customerName?: string;
  /**
   * 店铺id
   * @format int64
   */
  customerShopId?: number;
  /**
   * 担当后台用户id
   * @format int64
   */
  ddUserId?: number;
  /** 担当用户姓名 */
  ddUserName?: string;
  /** 次品处理方式 */
  defectiveDealMode?: string;
  /** 次品处理方式(中文) */
  defectiveDealModeZh?: string;
  /** @format date-time */
  distributeQuoteTime?: string;
  /** @format date-time */
  expectedQuoteTime?: string;
  /** 面料描述 */
  fabricDesc?: string;
  /** 面料描述(中文) */
  fabricDescZh?: string;
  /** 面料信息 */
  fabricInfo?: string;
  /** 面料信息(中文) */
  fabricInfoZh?: string;
  /** 面料链接 */
  fabricUrl?: string;
  /** 费用等级：1,2,3 */
  feeLevel?: string;
  /** 杂货问题-是否要加logo【问题3：请问您需要加logo吗？】 */
  groceriesQuestionAddLogo?: string;
  /** 杂货问题-是否可以邮寄样品【问题2-1：请问您是否有样品可邮寄？】 */
  groceriesQuestionCanSendSample?: string;
  /** 杂货问题-是否有式样书【问题2-3：请问您是否有式样书】 */
  groceriesQuestionHaveStylebook?: string;
  /** 杂货问题-初步需求【问题1：请问你对本次杂货oem的初步需求是怎样的？】A-杂货1类; B-杂货2类; C-杂货3类 */
  groceriesQuestionInitialRequirement?: string;
  /** 毛利率 */
  grossProfitRate?: number;
  /**
   * 客户组别id
   * @format int64
   */
  groupId?: number;
  /** 客户组别名称 */
  groupName?: string;
  /** 辅料颜色描述 */
  ingredientsColorDesc?: string;
  /** 辅料颜色描述(中文) */
  ingredientsColorDescZh?: string;
  /** 辅料颜色参考图片 */
  ingredientsColorRefImg?: string;
  /**
   * 辅料表id
   * @format int64
   */
  ingredientsId?: number;
  /**
   * 辅料logo印刷方式表id
   * @format int64
   */
  ingredientsLogoPrintModeId?: number;
  /** 辅料材质描述 */
  ingredientsMaterialsDesc?: string;
  /** 辅料材质描述(中文) */
  ingredientsMaterialsDescZh?: string;
  /**
   * 辅料材质表id
   * @format int64
   */
  ingredientsMaterialsId?: number;
  /** 辅料材质参考图片 */
  ingredientsMaterialsRefImg?: string;
  /** 辅料名字 */
  ingredientsName?: string;
  /** 辅料名字(中文) */
  ingredientsNameZh?: string;
  /** 辅料问题-是否要加logo【问题8：请问你需要附加logo吗】 */
  ingredientsQuestionAddLogo?: string;
  /** 辅料问题-有自己的方案吗【问题2：请问你有自己的方案吗？】AB-辅料1; C-辅料2 */
  ingredientsQuestionHaveOwnPlan?: string;
  /** 辅料问题-推荐颜色【问题6：请查看我们的颜色推荐方案】 */
  ingredientsQuestionRecommendColor?: string;
  /** 辅料问题-推荐材质【问题4：请查看我们的材质推荐方案】 */
  ingredientsQuestionRecommendMaterials?: string;
  /** 辅料问题-推荐尺寸【问题5：请查看我们的尺寸推荐方案】 */
  ingredientsQuestionRecommendSize?: string;
  /** 辅料问题-推荐款式【问题3：请查看我们的款式推荐方案】 */
  ingredientsQuestionRecommendStyle?: string;
  /** 辅料问题-做什么辅料【问题1：请问你要做什么辅料？】A-吊牌; B-布标; C-快递袋; D-包装袋; E-感谢卡; F-箱子; G-客户填写 */
  ingredientsQuestionWhatMake?: string;
  /** 辅料参考图片 */
  ingredientsReferenceImg?: string;
  /** 辅料尺寸描述 */
  ingredientsSizeDesc?: string;
  /** 辅料尺寸描述(中文) */
  ingredientsSizeDescZh?: string;
  /**
   * 辅料尺寸表id
   * @format int64
   */
  ingredientsSizeId?: number;
  /** 辅料尺寸参考图片 */
  ingredientsSizeRefImg?: string;
  /** 辅料款式描述 */
  ingredientsStyleDesc?: string;
  /** 辅料款式描述(中文) */
  ingredientsStyleDescZh?: string;
  /**
   * 辅料款式表id
   * @format int64
   */
  ingredientsStyleId?: number;
  /** 辅料款式参考图片 */
  ingredientsStyleRefImg?: string;
  /** 辅料链接 */
  ingredientsUrl?: string;
  /** 运输单号：快递单号 */
  logisticsNo?: string;
  /**
   * logo颜色(1 单色 2 双色)
   * @format int32
   */
  logoColorType?: number;
  /** logo详细说明: 详细说明（颜色、尺寸、工艺、位置等） */
  logoDetailDesc?: string;
  /** logo详细说明: 详细说明（颜色、尺寸、工艺、位置等）(中文) */
  logoDetailDescZh?: string;
  /**
   * logo需求情况: 0-不需要; 1-需要
   * @format int32
   */
  logoNeedFlag?: number;
  /** logo印刷方式名字 */
  logoPrintMode?: string;
  /** logo印刷方式图片 */
  logoPrintModeImg?: string;
  /** logo印刷方式名字(日文) */
  logoPrintModeJp?: string;
  /** logo印刷方式名字推荐方案 */
  logoPrintModeRecommendPlan?: string;
  /** logo链接: 附件（文件） */
  logoUrl?: string;
  /** 材质名字 */
  materials?: string;
  /** 材质图片 */
  materialsImg?: string;
  /** 材质名字(日文) */
  materialsJp?: string;
  /** 材质推荐方案 */
  materialsRecommendPlan?: string;
  /**
   * 会员身份模板
   * @format int64
   */
  membershipTemplateId?: number;
  /** 会员身份名称 */
  membershipTemplateName?: string;
  /** 需要改动的地方 */
  needChangeThings?: string;
  /** 需要改动的地方链接 */
  needChangeThingsUrl?: string;
  /** 需要改动的地方(中文) */
  needChangeThingsZh?: string;
  /**
   * OEM商品分类表id
   * @format int64
   */
  oemProductClassificationId?: number;
  /** 旧寻源单id,用于复购场景 */
  oldSearchSourceId?: string;
  /** 下单需求补充: 其他补充（文字输入框） */
  orderDemandSupplement?: string;
  /** 下单需求补充附件url */
  orderDemandSupplementUrl?: string;
  /** 下单需求补充: 其他补充（文字输入框）(中文) */
  orderDemandSupplementZh?: string;
  /**
   * 寻源单状态: 0-已取消;1-待发布;2-待接单;3-待商榷报价;4-待分配;5-待报采购价;6-待审核拒绝申请;7-待担当确认拒绝申请审核通过;8-已拒绝;9-待审采购价;10-待审报价内容;11-待担当报销售价;12-待复审;13-已报价;14-寻源失败;15-已报价
   * @format int32
   */
  orderStatus?: number;
  /**
   * 父寻源单表id(复购时用)
   * @format int64
   */
  parentSearchSourceOrderId?: number;
  /** 支付消息 */
  payMessage?: string;
  /**
   * 支付状态：1-未支付；2-支付中；3-支付成功；4-支付失败
   * @format int32
   */
  payStatus?: number;
  /**
   * 支付时间
   * @format date-time
   */
  payTime?: string;
  /**
   * 报价过期时间(报价有效期)
   * @format date-time
   */
  priceExpireTime?: string;
  /** 材质图片 */
  printLogo?: boolean;
  productFileUrl?: string;
  /** 产品图片 */
  productImg?: string;
  /** 产品信息补充: 其他补充（文字输入） */
  productInfoSupplement?: string;
  /** 产品信息补充: 其他补充（文字输入）(中文) */
  productInfoSupplementZh?: string;
  /** 产品名称 */
  productName?: string;
  /** 产品名称(中文) */
  productNameZh?: string;
  /** 产品链接 */
  productUrl?: string;
  /**
   * 发布时间
   * @format date-time
   */
  publishTime?: string;
  /**
   * 采购主管后台用户id
   * @format int64
   */
  purchaserManagerUserId?: number;
  /** 采购主管用户姓名 */
  purchaserManagerUserName?: string;
  /**
   * 采购员后台用户id
   * @format int64
   */
  purchaserUserId?: number;
  /** 采购员用户姓名 */
  purchaserUserName?: string;
  /** 资质要求: 工厂、资质要求 */
  qualificationRequirement?: string;
  /** 资质要求: 工厂、资质要求(中文) */
  qualificationRequirementZh?: string;
  /** 问题-商品类型【问题一：商品类型】 */
  questionClassificationName?: string;
  /** 问答卷记录 */
  questionRecord?: string;
  quoteFailReason?: string;
  /** @format date-time */
  quoteTime?: string;
  /** @format int32 */
  reeditPriceFlag?: number;
  /** 参考图片 */
  referenceImg?: string;
  /** 仓库现有商品参考 */
  referenceSku?: string;
  /** 参考链接 */
  referenceUrl?: string;
  /** 退款消息 */
  refundMessage?: string;
  /**
   * 退款状态: 1-未退款; 2-退款中; 3-退款成功; 4-退款失败
   * @format int32
   */
  refundStatus?: number;
  /** 拒绝备注 */
  rejectRemark?: string;
  /** 寻源备注: 其他（特殊需求） */
  remark?: string;
  /** 寻源备注: 其他（特殊需求）(中文) */
  remarkZh?: string;
  /** 样品邮寄方式： SAMPLE 通过物流寄回样品；REFERENCE_SKU 从仓库选择现有商品作为参考 */
  samplePostType?: string;
  /**
   * 样衣发出时间
   * @format date-time
   */
  sampleSendTime?: string;
  /** @format int64 */
  searchSourceOrderId?: number;
  /** 寻源单编号 */
  searchSourceOrderNo?: string;
  /** 寻源单SKU列表 */
  searchSourceOrderSkuList?: SearchSourceOrderSku[];
  /**
   * 寻源单报价表id
   * @format int64
   */
  searchSourceOrderSupplierPriceId?: number;
  /** 寻源费: 发布时支付 */
  searchSourcePrice?: number;
  /** 寻源种类描述 */
  searchSourceTypeDesc?: string;
  /** 寻源种类描述(日文) */
  searchSourceTypeDescJp?: string;
  /**
   * 寻源种类表id
   * @format int64
   */
  searchSourceTypeId?: number;
  /** 寻源种类名字 */
  searchSourceTypeName?: string;
  /** 贩卖价格 */
  sellPrice?: number;
  /** 尺寸名字 */
  size?: string;
  /** 尺寸图片 */
  sizeImg?: string;
  /** 尺寸名字(日文) */
  sizeJp?: string;
  /** 尺寸推荐方案 */
  sizeRecommendPlan?: string;
  /** 尺寸备注: 无具体数值请备注参考信息 */
  sizeRemark?: string;
  /** 尺寸备注: 无具体数值请备注参考信息(中文) */
  sizeRemarkZh?: string;
  /** 尺寸对应数值 */
  sizeValue?: string;
  /** 尺寸对应数值(中文) */
  sizeValueZh?: string;
  /**
   * 来源 1-用户创建 2-后台新增
   * @format int32
   */
  source?: number;
  /** 站点代码(日本:JapanStation,韩国:KoreaStation,英国:UkStation) */
  stationCode?: string;
  /** 款式名字 */
  style?: string;
  /** 款式图片 */
  styleImg?: string;
  /** 款式名字(日文) */
  styleJp?: string;
  /** 款式推荐方案 */
  styleRecommendPlan?: string;
  /** 式样书链接 */
  stylebookUrl?: string;
  /** 式样书链接(中文) */
  stylebookUrlZh?: string;
  /**
   * 父类客户id
   * @format int64
   */
  superCustomerId?: number;
  /**
   * 翻译状态： 0:未翻译 1:已经翻译
   * @format int32
   */
  translateStatus?: number;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  /** 待接单状态-调整申请后的申请采购价 */
  waitAcceptOrderAdjustApplyPrice?: number;
  /**
   * 待接单状态-调整申请后的最高起订量
   * @format int32
   */
  waitAcceptOrderAdjustMaxOrderQuantity?: number;
  /**
   * 待接单状态-调整申请后的最低起订量
   * @format int32
   */
  waitAcceptOrderAdjustMinOrderQuantity?: number;
}

/** SearchSourceOrderDTO */
export interface SearchSourceOrderDTO {
  classificationName?: string;
  classificationNameJp?: string;
  clothingQuestionCanSendSample?: string;
  clothingQuestionHaveStylebook?: string;
  clothingQuestionInitialRequirement?: string;
  clothingQuestionKnowFabricDetail?: string;
  clothingQuestionProvideSize?: string;
  colorCard?: string;
  colorCardUrl?: string;
  /** @format date-time */
  createTime?: string;
  /** @format date-time */
  customerExpectDeliveryTime?: string;
  /** @format int32 */
  customerExpectMaxOrderQuantity?: number;
  /** @format int32 */
  customerExpectMinOrderQuantity?: number;
  customerExpectPrice?: number;
  customerFocus?: string;
  customerFocusZh?: string;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  /** @format int64 */
  ddUserId?: number;
  ddUserName?: string;
  defectiveDealMode?: string;
  defectiveDealModeZh?: string;
  fabricDesc?: string;
  fabricDescZh?: string;
  fabricInfo?: string;
  fabricInfoZh?: string;
  fabricUrl?: string;
  groceriesQuestionAddLogo?: string;
  groceriesQuestionCanSendSample?: string;
  groceriesQuestionHaveStylebook?: string;
  groceriesQuestionInitialRequirement?: string;
  /** @format int64 */
  groupId?: number;
  groupName?: string;
  ingredientsColorDesc?: string;
  ingredientsColorDescZh?: string;
  ingredientsColorRefImg?: string;
  /** @format int64 */
  ingredientsId?: number;
  /** @format int64 */
  ingredientsLogoPrintModeId?: number;
  ingredientsMaterialsDesc?: string;
  ingredientsMaterialsDescZh?: string;
  /** @format int64 */
  ingredientsMaterialsId?: number;
  ingredientsMaterialsRefImg?: string;
  ingredientsName?: string;
  ingredientsNameZh?: string;
  ingredientsQuestionAddLogo?: string;
  ingredientsQuestionHaveOwnPlan?: string;
  ingredientsQuestionRecommendColor?: string;
  ingredientsQuestionRecommendMaterials?: string;
  ingredientsQuestionRecommendSize?: string;
  ingredientsQuestionRecommendStyle?: string;
  ingredientsQuestionWhatMake?: string;
  ingredientsReferenceImg?: string;
  ingredientsSizeDesc?: string;
  ingredientsSizeDescZh?: string;
  /** @format int64 */
  ingredientsSizeId?: number;
  ingredientsSizeRefImg?: string;
  ingredientsStyleDesc?: string;
  ingredientsStyleDescZh?: string;
  /** @format int64 */
  ingredientsStyleId?: number;
  ingredientsStyleRefImg?: string;
  ingredientsUrl?: string;
  logisticsNo?: string;
  logoDetailDesc?: string;
  logoDetailDescZh?: string;
  /** @format int32 */
  logoNeedFlag?: number;
  logoPrintMode?: string;
  logoPrintModeImg?: string;
  logoPrintModeJp?: string;
  logoPrintModeRecommendPlan?: string;
  logoUrl?: string;
  materials?: string;
  materialsImg?: string;
  materialsJp?: string;
  materialsRecommendPlan?: string;
  /** @format int64 */
  membershipTemplateId?: number;
  membershipTemplateName?: string;
  needChangeThings?: string;
  needChangeThingsUrl?: string;
  needChangeThingsZh?: string;
  /** @format int64 */
  oemProductClassificationId?: number;
  orderDemandSupplement?: string;
  orderDemandSupplementUrl?: string;
  orderDemandSupplementZh?: string;
  /** @format int32 */
  orderStatus?: number;
  /** @format int64 */
  parentSearchSourceOrderId?: number;
  payMessage?: string;
  /** @format int32 */
  payStatus?: number;
  /** @format date-time */
  payTime?: string;
  /** @format date-time */
  priceExpireTime?: string;
  productImg?: string;
  productInfoSupplement?: string;
  productInfoSupplementZh?: string;
  productName?: string;
  productNameZh?: string;
  productUrl?: string;
  /** @format int64 */
  purchaserManagerUserId?: number;
  purchaserManagerUserName?: string;
  /** @format int64 */
  purchaserUserId?: number;
  purchaserUserName?: string;
  qualificationRequirement?: string;
  qualificationRequirementZh?: string;
  questionClassificationName?: string;
  questionRecord?: string;
  referenceImg?: string;
  referenceUrl?: string;
  refundMessage?: string;
  /** @format int32 */
  refundStatus?: number;
  rejectRemark?: string;
  remark?: string;
  remarkZh?: string;
  /** @format date-time */
  sampleSendTime?: string;
  /** @format int64 */
  searchSourceOrderId?: number;
  searchSourceOrderNo?: string;
  /** @format int64 */
  searchSourceOrderSupplierPriceId?: number;
  searchSourcePrice?: number;
  searchSourceTypeDesc?: string;
  searchSourceTypeDescJp?: string;
  /** @format int64 */
  searchSourceTypeId?: number;
  searchSourceTypeName?: string;
  size?: string;
  sizeImg?: string;
  sizeJp?: string;
  sizeRecommendPlan?: string;
  sizeRemark?: string;
  sizeRemarkZh?: string;
  sizeValue?: string;
  sizeValueZh?: string;
  style?: string;
  styleImg?: string;
  styleJp?: string;
  styleRecommendPlan?: string;
  stylebookUrl?: string;
  stylebookUrlZh?: string;
  /** @format date-time */
  updateTime?: string;
  waitAcceptOrderAdjustApplyPrice?: number;
  /** @format int32 */
  waitAcceptOrderAdjustMaxOrderQuantity?: number;
  /** @format int32 */
  waitAcceptOrderAdjustMinOrderQuantity?: number;
}

/** SearchSourceOrderDetailDTO */
export interface SearchSourceOrderDetailDTO {
  referenceSku?: ReferenceSku;
  searchSourceOrder?: SearchSourceOrder;
  searchSourceOrderSkuList?: SearchSourceOrderSku[];
}

/** SearchSourceOrderDetailRespDTO */
export interface SearchSourceOrderDetailRespDTO {
  paymentItemRespList?: SearchSourceSupplierPaymentItemRespDTO[];
  searchSourceOrderResp?: SearchSourceOrderResp;
  searchSourceOrderSkuRespList?: SearchSourceOrderSkuResp[];
}

/** SearchSourceOrderDistributeVO */
export interface SearchSourceOrderDistributeVO {
  /**
   * 寻源单号id
   * @format int64
   */
  searchSourceOrderId?: number;
  /** 用户列表 */
  userList?: ManagerUserDTO[];
}

/** SearchSourceOrderEvaluation */
export interface SearchSourceOrderEvaluation {
  /** @format int32 */
  businessServiceScore?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  opinion?: string;
  /** @format int32 */
  orderIntentionScore?: number;
  /** @format int32 */
  overallScore?: number;
  /** @format int32 */
  sampleSatisfactionScore?: number;
  /** @format int64 */
  searchSourceOrderEvaluationId?: number;
  /** @format int64 */
  searchSourceOrderId?: number;
  /** @format date-time */
  updateTime?: string;
}

/** SearchSourceOrderListItemDTO */
export interface SearchSourceOrderListItemDTO {
  /** 价格梯度最高价 */
  biggestprice?: number;
  /** 是否可以复购(是否已成功下过单) */
  canRepurchase?: boolean;
  /** 是否可以下样品单(样品单每个报价最多下1次) */
  canSampleOrder?: boolean;
  /** 分类名字: 服装/杂货/辅料(日文) */
  classificationNameJp?: string;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 是否修改报价(修改报价表) */
  isReEdit?: boolean;
  /** 是否复购(用来展示复购表) */
  isRepurchase?: boolean;
  /** 最新的复购申请 */
  latestSearchSourceOrderRepurchaseApply?: SearchSourceOrderRepurchaseApplyDTO;
  /**
   * 寻源单状态: 0-已取消;1-待发布;2-待接单;3-待接单发起调整申请;4-待分配;5-待报采购价;6-待审核拒绝申请;7-待担当确认拒绝申请审核通过;8-已拒绝;9-待审采购价;10-待审报价内容;11-待担当报销售价;12-待复审状态;13-待商榷报价;14-寻源失败;15-已报价;16-待确认报价
   * @format int32
   */
  orderStatus?: number;
  /** 报价是否过期 */
  priceExpire?: boolean;
  /**
   * 报价过期时间(报价有效期)
   * @format date-time
   */
  priceExpireTime?: string;
  /** 产品图片 */
  productImg?: string;
  /** 产品名称 */
  productName?: string;
  /** 拒绝备注 */
  rejectRemark?: string;
  /** 拒绝备注(日文) */
  rejectRemarkJp?: string;
  /**
   * 寻源订单id
   * @format int64
   */
  searchSourceOrderId?: number;
  /** 订单编号 */
  searchSourceOrderNo?: string;
  /** sku列表 */
  searchSourceOrderSkuResp?: SearchSourceOrderSku[];
  /**
   * 最新的寻源单报价id
   * @format int64
   */
  searchSourceOrderSupplierPriceId?: number;
  /** 寻源费: 发布时支付 */
  searchSourcePrice?: number;
  /**
   * 最小起订量
   * @format int32
   */
  smallAccount?: number;
}

/** SearchSourceOrderListRelatedVO */
export interface SearchSourceOrderListRelatedVO {
  /**
   * 用户id
   * @format int64
   */
  customerId?: number;
  /**
   * 店铺id
   * @format int64
   */
  customerShopId?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** 结束价格 */
  priceEnd?: number;
  /** 起始价格 */
  priceStart?: number;
  /** 产品名称【前台 */
  productName?: string;
  sorts?: ISortFieldEnum[];
  /** @format int32 */
  startIndex?: number;
}

/** SearchSourceOrderListVO */
export interface SearchSourceOrderListVO {
  /**
   * 自动报价标识(0未自动报价 1 自动报价成功 2 自动报价失败)
   * @format int32
   */
  autoQuoteFlag?: number;
  /**
   * 用户id
   * @format int64
   */
  customerId?: number;
  /**
   * 店铺id
   * @format int64
   */
  customerShopId?: number;
  /** 客户标签 1 oem项目重点客户 2 oem非项目重点客户 */
  customerTags?: number[];
  /**
   * 担当新增 0-否 1-是
   * @format int32
   */
  ddCreate?: number;
  /**
   * 是否oem重点客户 1 是 0否
   * @format int32
   */
  isOemKeyCustomer?: number;
  /** 是否修改报价(修改报价表) */
  isReEdit?: boolean;
  /** 是否复购(用来展示复购表) */
  isRepurchase?: boolean;
  /**
   * OEM商品分类表id:1-服装;2-杂货;3-辅料
   * @format int64
   */
  oemProductClassificationId?: number;
  /**
   * 寻源单状态列表: 0-已取消;1-待发布;2-待接单;3-待接单发起调整申请;4-待分配;5-待报采购价;6-待审核拒绝申请;7-待担当确认拒绝申请审核通过;8-已拒绝;9-待审采购价;10-待审报价内容;11-待担当报销售价;12-待复审;13-待商榷报价;14-寻源失败;15-已报价
   * @format int32
   */
  orderStatus?: number;
  /** 寻源单状态列表: 0-已取消;1-待发布;2-待接单;3-待接单发起调整申请;4-待分配;5-待报采购价;6-待审核拒绝申请;7-待担当确认拒绝申请审核通过;8-已拒绝;9-待审采购价;10-待审报价内容;11-待担当报销售价;12-待复审;13-待商榷报价;14-寻源失败;15-已报价 */
  orderStatusList?: number[];
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** 报价是否过期 */
  priceExpire?: boolean;
  /** 产品名称【前台】 */
  productName?: string;
  /**  产品名称(中文)【后台】 */
  productNameZh?: string;
  /** 采购员id */
  purchaserUserId?: string;
  /** 采购员用户姓名 */
  purchaserUserName?: string;
  /** 寻源单编号 */
  searchSourceOrderNo?: string;
  /** 寻源单编号列表 */
  searchSourceOrderNoList?: string[];
  sorts?: ISortFieldEnum[];
  /** @format int32 */
  startIndex?: number;
  /** 站点代码(日本:JapanStation,韩国:KoreaStation,英国:UkStation) */
  stationCode?: string;
  /**
   * 结束时间
   * @format date-time
   */
  timeEnd?: string;
  /**
   * 起始时间
   * @format date-time
   */
  timeStart?: string;
  /**
   * 超时未报价标识(1 超时未报价)
   * @format int32
   */
  timeoutQuoteFlag?: number;
}

/** SearchSourceOrderLog */
export interface SearchSourceOrderLog {
  /** @format date-time */
  createTime?: string;
  operateDesc?: string;
  operateName?: string;
  operateNameJp?: string;
  /** @format int64 */
  operatorId?: number;
  operatorName?: string;
  /** @format int32 */
  operatorType?: number;
  remark?: string;
  /** @format int64 */
  searchSourceOrderId?: number;
  /** @format int64 */
  searchSourceOrderLogId?: number;
  /** @format date-time */
  updateTime?: string;
}

/** SearchSourceOrderPlatformBackendListItemDTO */
export interface SearchSourceOrderPlatformBackendListItemDTO {
  /**
   * 自动报价标识(0未自动报价 1 自动报价成功 2 自动报价失败)
   * @format int32
   */
  autoQuoteFlag?: number;
  /** 业务类型  d2c b2b */
  bizType?: string;
  /** 分类名字: 服装/杂货/辅料 */
  classificationName?: string;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * customerId
   * @format int64
   */
  customerId?: number;
  /** 客户姓名 */
  customerName?: string;
  /** 客户标签 1 oem项目重点客户 2 oem非项目重点客户 */
  customerTags?: number[];
  /**
   * 担当创建 0-否 1-是
   * @format int32
   */
  ddCreate?: number;
  /** 已分配采购员名字列表 */
  distributePurchaserNameList?: string[];
  /**
   * 报价分配时间
   * @format date-time
   */
  distributeQuoteTime?: string;
  /**
   * 预计报价时间
   * @format date-time
   */
  expectedQuoteTime?: string;
  /**
   * 辅料表id
   * @format int64
   */
  ingredientsId?: number;
  /** 是否复购(用来展示复购表) */
  isRepurchase?: boolean;
  /**
   * 客户经理姓名
   * @format int64
   */
  managerId?: number;
  /** 客户经理姓名 */
  managerName?: string;
  /** 客户等级 */
  membershipTemplateName?: string;
  /**
   * 寻源单状态: 0-已取消;1-待发布;2-待接单;3-待接单发起调整申请;4-待分配;5-待报采购价;6-待审核拒绝申请;7-待担当确认拒绝申请审核通过;8-已拒绝;9-待审采购价;10-待审报价内容;11-待担当报销售价;12-待复审状态;13-待商榷报价;14-待商榷报价发起调整申请;15-寻源失败;16-已报价
   * @format int32
   */
  orderStatus?: number;
  /** 报价是否过期 */
  priceExpire?: boolean;
  /**
   * 报价过期时间(报价有效期)
   * @format date-time
   */
  priceExpireTime?: string;
  /** 产品图片 */
  productImg?: string;
  /** 产品名称(中文) */
  productNameZh?: string;
  /**
   * 发布时间
   * @format date-time
   */
  publishTime?: string;
  /**
   * 采购Id
   * @format int64
   */
  purchaserId?: number;
  /** 采购姓名  */
  purchaserName?: string;
  /** 报价失败原因 */
  quoteFailReason?: string;
  /**
   * 实际报价时间
   * @format date-time
   */
  quoteTime?: string;
  /** @format int32 */
  reeditPriceFlag?: number;
  /** 备注 */
  remark?: string;
  /** 备注中文 */
  remarkZh?: string;
  /** @format int64 */
  searchSourceOrderId?: number;
  /** 订单编号 */
  searchSourceOrderNo?: string;
  /** @format int64 */
  sellerId?: number;
  /** 销售报价员 */
  sellerName?: string;
  /** sku报价列表 */
  skuItemList?: SearchSourceOrderSupplierPriceSkuItemDTO[];
  /** 站点代码(日本:JapanStation,韩国:KoreaStation,英国:UkStation) */
  stationCode?: string;
  /**
   * 翻译状态： 0:未翻译 1:已经翻译
   * @format int32
   */
  translateStatus?: number;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
}

/** SearchSourceOrderRepurchaseApplyDTO */
export interface SearchSourceOrderRepurchaseApplyDTO {
  /**
   * 报价过期时间(报价有效期)
   * @format date-time
   */
  priceExpireTime?: string;
  /**
   * 复购申请状态: 1-待报采购价; 2-待审报价内容; 3-待复审; 4-待担当报销售价; 5-已报价; 6-已拒绝; 7-已同意;
   * @format int32
   */
  repurchaseApplyStatus?: number;
}

/** SearchSourceOrderRepurchaseApplyListItemDTO */
export interface SearchSourceOrderRepurchaseApplyListItemDTO {
  canSampleOrder?: boolean;
  classificationNameJp?: string;
  /** @format date-time */
  createTime?: string;
  priceExpire?: boolean;
  /** @format date-time */
  priceExpireTime?: string;
  productImg?: string;
  productName?: string;
  /** @format int32 */
  repurchaseApplyStatus?: number;
  /** @format int64 */
  searchSourceOrderId?: number;
  searchSourceOrderNo?: string;
  /** @format int64 */
  searchSourceOrderRepurchaseApplyId?: number;
  searchSourceOrderRepurchaseApplyNo?: string;
  /** @format int64 */
  searchSourceOrderRepurchaseApplySupplierPriceId?: number;
  searchSourceOrderSkuResp?: SearchSourceOrderSku[];
  /** @format int32 */
  smallAccount?: number;
}

/** SearchSourceOrderRepurchaseApplyLog */
export interface SearchSourceOrderRepurchaseApplyLog {
  /** @format date-time */
  createTime?: string;
  operateDesc?: string;
  operateName?: string;
  operateNameJp?: string;
  /** @format int64 */
  operatorId?: number;
  operatorName?: string;
  /** @format int32 */
  operatorType?: number;
  remark?: string;
  /** @format int64 */
  searchSourceOrderRepurchaseApplyId?: number;
  /** @format int64 */
  searchSourceOrderRepurchaseApplyLogId?: number;
  /** @format date-time */
  updateTime?: string;
}

/** SearchSourceOrderRepurchaseApplyPlatformListItemDTO */
export interface SearchSourceOrderRepurchaseApplyPlatformListItemDTO {
  classificationName?: string;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  /** @format int64 */
  effectiveSearchSourceOrderRepurchaseApplySupplierPriceId?: number;
  membershipTemplateName?: string;
  priceExpire?: boolean;
  /** @format date-time */
  priceExpireTime?: string;
  productImg?: string;
  productNameZh?: string;
  /** @format int32 */
  repurchaseApplyStatus?: number;
  /** @format int64 */
  searchSourceOrderId?: number;
  searchSourceOrderNo?: string;
  /** @format int64 */
  searchSourceOrderRepurchaseApplyId?: number;
  searchSourceOrderRepurchaseApplyNo?: string;
}

/** SearchSourceOrderRepurchaseApplySupplierPriceDTO */
export interface SearchSourceOrderRepurchaseApplySupplierPriceDTO {
  /** @format int32 */
  addLogoFlag?: number;
  /** @format int32 */
  containTaxFlag?: number;
  defectiveDealMode?: string;
  defectiveDealModeJp?: string;
  /** @format int32 */
  deliveryPeroid?: number;
  fabric?: string;
  fabricJp?: string;
  fillSellPriceRemark?: string;
  /** @format int32 */
  minOrderQuantity?: number;
  oemSupplierId?: string;
  /** @format date-time */
  priceExpireTime?: string;
  purchaserUserName?: string;
  reportePurchasePriceRemark?: string;
  reportePurchasePriceRemarkJp?: string;
  risk?: string;
  riskJp?: string;
  samplePeriod?: number;
  samplePrice?: number;
  /** @format int64 */
  searchSourceOrderRepurchaseApplySupplierPriceId?: number;
  searchSourceOrderRepurchaseApplySupplierPriceItemList?: SearchSourceOrderRepurchaseApplySupplierPriceItemDTO[];
  /** @format int32 */
  sizeFlag?: number;
  /** @format int32 */
  specialMaterialFlag?: number;
  supplierName?: string;
}

/** SearchSourceOrderRepurchaseApplySupplierPriceItemDTO */
export interface SearchSourceOrderRepurchaseApplySupplierPriceItemDTO {
  /** @format int32 */
  endPurchaseQuantity?: number;
  purchasePrice?: number;
  /** @format int64 */
  searchSourceOrderRepurchaseApplySupplierPriceItemId?: number;
  sellPrice?: number;
  /** @format int32 */
  startPurchaseQuantity?: number;
}

/** SearchSourceOrderRepurchaseApplySupplierPricePlatformListItemDTO */
export interface SearchSourceOrderRepurchaseApplySupplierPricePlatformListItemDTO {
  classificationName?: string;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  membershipTemplateName?: string;
  productImg?: string;
  productNameZh?: string;
  /** @format int32 */
  repurchaseApplyStatus?: number;
  /** @format int32 */
  repurchaseApproveStatus?: number;
  /** @format int64 */
  searchSourceOrderId?: number;
  searchSourceOrderNo?: string;
  /** @format int64 */
  searchSourceOrderRepurchaseApplyId?: number;
  searchSourceOrderRepurchaseApplyNo?: string;
  /** @format int64 */
  searchSourceOrderRepurchaseApplySupplierPriceId?: number;
}

/** SearchSourceOrderResp */
export interface SearchSourceOrderResp {
  classificationName?: string;
  classificationNameJp?: string;
  clothingQuestionCanSendSample?: string;
  clothingQuestionHaveStylebook?: string;
  clothingQuestionInitialRequirement?: string;
  clothingQuestionKnowFabricDetail?: string;
  clothingQuestionProvideSize?: string;
  colorCard?: string;
  colorCardUrl?: string;
  /** @format date-time */
  createTime?: string;
  /** @format date-time */
  customerExpectDeliveryTime?: string;
  /** @format int32 */
  customerExpectMaxOrderQuantity?: number;
  /** @format int32 */
  customerExpectMinOrderQuantity?: number;
  customerExpectPrice?: number;
  customerFocus?: string;
  customerFocusZh?: string;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  /** @format int64 */
  ddUserId?: number;
  ddUserName?: string;
  defectiveDealMode?: string;
  defectiveDealModeZh?: string;
  fabricDesc?: string;
  fabricDescZh?: string;
  fabricInfo?: string;
  fabricInfoZh?: string;
  fabricUrl?: string;
  groceriesQuestionAddLogo?: string;
  groceriesQuestionCanSendSample?: string;
  groceriesQuestionHaveStylebook?: string;
  groceriesQuestionInitialRequirement?: string;
  /** @format int64 */
  groupId?: number;
  groupName?: string;
  ingredientsColorDesc?: string;
  ingredientsColorDescZh?: string;
  ingredientsColorRefImg?: string;
  /** @format int64 */
  ingredientsId?: number;
  /** @format int64 */
  ingredientsLogoPrintModeId?: number;
  ingredientsMaterialsDesc?: string;
  ingredientsMaterialsDescZh?: string;
  /** @format int64 */
  ingredientsMaterialsId?: number;
  ingredientsMaterialsRefImg?: string;
  ingredientsName?: string;
  ingredientsNameZh?: string;
  ingredientsQuestionAddLogo?: string;
  ingredientsQuestionHaveOwnPlan?: string;
  ingredientsQuestionRecommendColor?: string;
  ingredientsQuestionRecommendMaterials?: string;
  ingredientsQuestionRecommendSize?: string;
  ingredientsQuestionRecommendStyle?: string;
  ingredientsQuestionWhatMake?: string;
  ingredientsReferenceImg?: string;
  ingredientsSizeDesc?: string;
  ingredientsSizeDescZh?: string;
  /** @format int64 */
  ingredientsSizeId?: number;
  ingredientsSizeRefImg?: string;
  ingredientsStyleDesc?: string;
  ingredientsStyleDescZh?: string;
  /** @format int64 */
  ingredientsStyleId?: number;
  ingredientsStyleRefImg?: string;
  ingredientsUrl?: string;
  logisticsNo?: string;
  logoDetailDesc?: string;
  logoDetailDescZh?: string;
  /** @format int32 */
  logoNeedFlag?: number;
  logoPrintMode?: string;
  logoPrintModeImg?: string;
  logoPrintModeJp?: string;
  logoPrintModeRecommendPlan?: string;
  logoUrl?: string;
  materials?: string;
  materialsImg?: string;
  materialsJp?: string;
  materialsRecommendPlan?: string;
  /** @format int64 */
  membershipTemplateId?: number;
  membershipTemplateName?: string;
  needChangeThings?: string;
  needChangeThingsUrl?: string;
  needChangeThingsZh?: string;
  /** @format int64 */
  oemProductClassificationId?: number;
  orderDemandSupplement?: string;
  orderDemandSupplementUrl?: string;
  orderDemandSupplementZh?: string;
  /** @format int32 */
  orderStatus?: number;
  /** @format int64 */
  parentSearchSourceOrderId?: number;
  payMessage?: string;
  /** @format int32 */
  payStatus?: number;
  /** @format date-time */
  payTime?: string;
  /** @format date-time */
  priceExpireTime?: string;
  productImg?: string;
  productInfoSupplement?: string;
  productInfoSupplementZh?: string;
  productName?: string;
  productNameZh?: string;
  productUrl?: string;
  /** @format int64 */
  purchaserManagerUserId?: number;
  purchaserManagerUserName?: string;
  /** @format int64 */
  purchaserUserId?: number;
  purchaserUserName?: string;
  qualificationRequirement?: string;
  qualificationRequirementZh?: string;
  questionClassificationName?: string;
  questionRecord?: string;
  referenceImg?: string;
  referenceUrl?: string;
  refundMessage?: string;
  /** @format int32 */
  refundStatus?: number;
  rejectRemark?: string;
  remark?: string;
  remarkZh?: string;
  /** @format date-time */
  sampleSendTime?: string;
  /** @format int64 */
  searchSourceOrderId?: number;
  searchSourceOrderNo?: string;
  /** @format int64 */
  searchSourceOrderSupplierPriceId?: number;
  searchSourcePrice?: number;
  searchSourceTypeDesc?: string;
  searchSourceTypeDescJp?: string;
  /** @format int64 */
  searchSourceTypeId?: number;
  searchSourceTypeName?: string;
  size?: string;
  sizeImg?: string;
  sizeJp?: string;
  sizeRecommendPlan?: string;
  sizeRemark?: string;
  sizeRemarkZh?: string;
  sizeValue?: string;
  sizeValueZh?: string;
  style?: string;
  styleImg?: string;
  styleJp?: string;
  styleRecommendPlan?: string;
  stylebookUrl?: string;
  stylebookUrlZh?: string;
  /** @format date-time */
  updateTime?: string;
  waitAcceptOrderAdjustApplyPrice?: number;
  /** @format int32 */
  waitAcceptOrderAdjustMaxOrderQuantity?: number;
  /** @format int32 */
  waitAcceptOrderAdjustMinOrderQuantity?: number;
}

/** SearchSourceOrderSendRejectApplyVO */
export interface SearchSourceOrderSendRejectApplyVO {
  /** 拒绝申请备注 */
  rejectRemark?: string;
  /**
   * 寻源单号id
   * @format int64
   */
  searchSourceOrderId?: number;
}

/** SearchSourceOrderSku */
export interface SearchSourceOrderSku {
  /** 颜色 */
  color?: string;
  /** 颜色url */
  colorUrl?: string;
  /** 颜色(中文) */
  colorZh?: string;
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
  /** @format int64 */
  customerShopId?: number;
  /** 材质 */
  materials?: string;
  /** 材质url */
  materialsUrl?: string;
  /** 材质(中文) */
  materialsZh?: string;
  /**
   * OEM商品分类表id
   * @format int64
   */
  oemProductClassificationId?: number;
  /** 商品图片 */
  productImg?: string;
  /** 中文品名 */
  productItemCategoryZh?: string;
  /** 商品名称 */
  productName?: string;
  /** 商品SKU */
  productSku?: string;
  /**
   * 数量
   * @format int32
   */
  quantity?: number;
  /** 备注 */
  remark?: string;
  /**
   * 寻源单表id
   * @format int64
   */
  searchSourceOrderId?: number;
  /** @format int64 */
  searchSourceOrderSkuId?: number;
  /** 尺码 */
  size?: string;
  /** 尺码url */
  sizeUrl?: string;
  /** 尺码(中文) */
  sizeZh?: string;
  /** 款式 */
  style?: string;
  /** 款式url */
  styleUrl?: string;
  /** 款式(中文) */
  styleZh?: string;
  /** @format int64 */
  superCustomerId?: number;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/** SearchSourceOrderSkuDetailResp */
export interface SearchSourceOrderSkuDetailResp {
  color?: string;
  colorUrl?: string;
  colorZh?: string;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  gradientPrices?: SearchSourceOrderSupplierPriceItemRespDTO[];
  materials?: string;
  materialsUrl?: string;
  materialsZh?: string;
  /** @format int32 */
  minOrderQuantity?: number;
  /** @format int64 */
  oemProductClassificationId?: number;
  productSku?: string;
  /** @format int32 */
  quantity?: number;
  remark?: string;
  searchSourceOrderDTO?: SearchSourceOrderDTO;
  /** @format int64 */
  searchSourceOrderId?: number;
  /** @format int64 */
  searchSourceOrderSkuId?: number;
  size?: string;
  sizeUrl?: string;
  sizeZh?: string;
  style?: string;
  styleUrl?: string;
  styleZh?: string;
  /** @format date-time */
  updateTime?: string;
}

/** SearchSourceOrderSkuQuery */
export interface SearchSourceOrderSkuQuery {
  productSkus?: string[];
  withSearchSourceOrder?: boolean;
}

/** SearchSourceOrderSkuQueryDTO */
export interface SearchSourceOrderSkuQueryDTO {
  customerShopId?: string;
  /** @format date-time */
  endTime?: string;
  needSupplierPrice?: boolean;
  /** @format int32 */
  oemProductClassificationId?: number;
  oemSupplierId?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  productName?: string;
  searchSourceOrderIdList?: number[];
  searchSourceOrderNo?: string;
  sku?: string;
  sorts?: ISortFieldEnum[];
  /** @format int32 */
  startIndex?: number;
  /** @format date-time */
  startTime?: string;
  /** @format int64 */
  userId?: number;
}

/** SearchSourceOrderSkuResp */
export interface SearchSourceOrderSkuResp {
  color?: string;
  colorUrl?: string;
  colorZh?: string;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  materials?: string;
  materialsUrl?: string;
  materialsZh?: string;
  /** @format int64 */
  oemProductClassificationId?: number;
  productSku?: string;
  /** @format int32 */
  quantity?: number;
  remark?: string;
  /** @format int64 */
  searchSourceOrderId?: number;
  /** @format int64 */
  searchSourceOrderSkuId?: number;
  size?: string;
  sizeUrl?: string;
  sizeZh?: string;
  style?: string;
  styleUrl?: string;
  styleZh?: string;
  /** @format date-time */
  updateTime?: string;
}

/** SearchSourceOrderSkuUpdateVO */
export interface SearchSourceOrderSkuUpdateVO {
  /** 中文品名 */
  itemCategoryZh?: string;
  /** 材质 */
  materials?: string;
  /** 材质(中文) */
  materialsZh?: string;
  /** 商品图片地址 */
  productImg?: string;
  /** 商品名称 */
  productName?: string;
  /** 商品SKU */
  productSku?: string;
  /**
   * 寻源订单skuId
   * @format int64
   */
  searchSourceOrderSkuId?: number;
}

/** SearchSourceOrderSkuVO */
export interface SearchSourceOrderSkuVO {
  /**  中文品名 */
  categoryNameZh?: string;
  /** 颜色 */
  color?: string;
  /** 颜色url */
  colorUrl?: string;
  /** 颜色(中文) */
  colorZh?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 材质 */
  materials?: string;
  /** 材质url */
  materialsUrl?: string;
  /** 材质(中文) */
  materialsZh?: string;
  /**
   *  OEM商品分类表id
   * @format int64
   */
  oemProductClassificationId?: number;
  /**  OEM商品分类名称 */
  oemProductClassificationName?: string;
  /**  OEM商品分类名称-日文 */
  oemProductClassificationNameJp?: string;
  /**  商品图片地址 */
  productImg?: string;
  /**  商品名称 */
  productName?: string;
  /**  商品SKU */
  productSku?: string;
  /**
   * 数量
   * @format int32
   */
  quantity?: number;
  /** 备注 */
  remark?: string;
  /**
   * 寻源单状态
   * @format int32
   */
  searchOrderStatus?: number;
  /**
   *  寻源单表id
   * @format int64
   */
  searchSourceOrderId?: number;
  /**  寻源单号 */
  searchSourceOrderNo?: string;
  /**
   *  寻源订单skuId
   * @format int64
   */
  searchSourceOrderSkuId?: number;
  /** 尺码 */
  size?: string;
  /** 尺码url */
  sizeUrl?: string;
  /** 尺码(中文) */
  sizeZh?: string;
  /**  款式 */
  style?: string;
  /** 款式url */
  styleUrl?: string;
  /** 款式(中文) */
  styleZh?: string;
  /** 供应商信息 */
  supplierList?: OemSupplierDTO[];
  /** 报价，最多是三个报价 （阶梯价展示第一个起始价） */
  supplierPrice?: number[];
  /** 报价，最多是三个报价 （阶梯价展示第一个起始价） */
  supplierPriceDetails?: SearchSourceOrderSupplierPriceDetailDTO[];
  /** 用户信息（后台展示） */
  user?: ManagerUserDTO;
}

/** SearchSourceOrderSkusResp */
export interface SearchSourceOrderSkusResp {
  /** @format date-time */
  priceExpireTime?: string;
  productSku?: string;
  /** @format int64 */
  searchSourceOrderId?: number;
  searchSourceOrderNo?: string;
  /** @format int64 */
  searchSourceOrderRepurchaseApplyId?: number;
}

/** SearchSourceOrderSupplierPriceDetailDTO */
export interface SearchSourceOrderSupplierPriceDetailDTO {
  /**
   * 是否加logo: 0-不需要; 1-需要
   * @format int32
   */
  addLogoFlag?: number;
  /**
   * 报价状态
   * @format int32
   */
  approveStatus?: number;
  /** 大货交期(天) */
  bulkPeriod?: number;
  /**
   * 是否含税标志: 0-否; 1-是
   * @format int32
   */
  containTaxFlag?: number;
  /** @format date-time */
  createTime?: string;
  /** 样品报价 */
  customerSamplePrice?: number;
  /** 次品处理方式 */
  defectiveDealMode?: string;
  /** 次品处理方式(日文) */
  defectiveDealModeJp?: string;
  /**
   * 交期(天)
   * @format int32
   */
  deliveryPeroid?: number;
  /** 面料信息 */
  fabric?: string;
  /** 面料信息(日文) */
  fabricJp?: string;
  files?: string[];
  /** 填写销售价备注 */
  fillSellPriceRemark?: string;
  fillSellPriceRemarkJp?: string;
  hasSampleOrder?: boolean;
  images?: string[];
  /** 是否报价都已经过期 */
  isPriceExpire?: boolean;
  maxOverflowPeriod?: number;
  /**
   * 最低起订量
   * @format int32
   */
  minOrderQuantity?: number;
  /** OEM供应商表id */
  oemSupplierId?: string;
  oldPriceDetail?: SearchSourceOrderSupplierPriceDetailDTO;
  paymentPeriodDetails?: PaymentPeriodDetailDTO[];
  /** @format int32 */
  paymentType?: number;
  /**
   * 报价过期时间(报价有效期)
   * @format date-time
   */
  priceExpireTime?: string;
  /**
   * 报价类型  1 阶梯价格  2 sku报价
   * @format int32
   */
  priceType?: number;
  /** 采购员用户姓名 */
  purchaserUserName?: string;
  /** 阶梯报价列表 */
  reportePurchasePriceItemList?: SearchSourceOrderSupplierPriceItemDTO[];
  /** 报采购价备注 */
  reportePurchasePriceRemark?: string;
  /** 报采购价备注(日文) */
  reportePurchasePriceRemarkJp?: string;
  /** 风险 */
  risk?: string;
  /** 风险(日文) */
  riskJp?: string;
  /** 打样交期(天) */
  sampleDeliverPeriod?: number;
  /** 打样时间(天) */
  samplePeriod?: number;
  /** 打样费 */
  samplePrice?: number;
  /** @format int64 */
  searchSourceOrderId?: number;
  searchSourceOrderNo?: string;
  /** @format int64 */
  searchSourceOrderSupplierPriceId?: number;
  /** @format int64 */
  sellerUserId?: number;
  sellerUserName?: string;
  /** 尺寸误差 */
  sizeError?: string;
  /** 尺寸误差(日文文案) */
  sizeErrorJp?: string;
  /**
   *  1-单尺码; 2-多尺码
   * @format int32
   */
  sizeFlag?: number;
  /** sku报价列表 */
  skuItemList?: SearchSourceOrderSupplierPriceSkuItemDTO[];
  /**
   * 是否特殊原材料标志: 0-否; 1-是
   * @format int32
   */
  specialMaterialFlag?: number;
  /** 供应商全名 */
  supplierName?: string;
  /**
   * 翻译状态: 0:未翻译 1:已经翻译
   * @format int32
   */
  translateStatus?: number;
}

/** SearchSourceOrderSupplierPriceDetailRespDTO */
export interface SearchSourceOrderSupplierPriceDetailRespDTO {
  /** @format int32 */
  addLogoFlag?: number;
  /** @format int32 */
  containTaxFlag?: number;
  /** @format int32 */
  customerExpectMinOrderQuantity?: number;
  customerSamplePrice?: number;
  defectiveDealMode?: string;
  defectiveDealModeJp?: string;
  /** @format int32 */
  deliveryPeroid?: number;
  fabric?: string;
  fabricJp?: string;
  fillSellPriceRemark?: string;
  maxOverflowPeriod?: number;
  /** @format int32 */
  minOrderQuantity?: number;
  oemSupplierId?: string;
  /** @format int32 */
  paymentType?: number;
  /** @format date-time */
  priceExpireTime?: string;
  purchaserUserName?: string;
  reportePurchasePriceRemark?: string;
  reportePurchasePriceRemarkJp?: string;
  risk?: string;
  riskJp?: string;
  samplePeriod?: number;
  samplePrice?: number;
  /** @format int64 */
  searchSourceOrderSupplierPriceId?: number;
  searchSourceOrderSupplierPriceItemList?: SearchSourceOrderSupplierPriceItemRespDTO[];
  searchSourceOrderSupplierPriceSkuItemList?: SearchSourceOrderSupplierPriceSkuItemRespDTO[];
  searchSourceSupplierPaymentItemRespDTOS?: SearchSourceSupplierPaymentItemRespDTO[];
  /** @format int32 */
  sizeFlag?: number;
  /** @format int32 */
  specialMaterialFlag?: number;
  supplierName?: string;
}

/** SearchSourceOrderSupplierPriceItemDTO */
export interface SearchSourceOrderSupplierPriceItemDTO {
  /**
   * 结束采购数量
   * @format int32
   */
  endPurchaseQuantity?: number;
  /** 采购价 */
  purchasePrice?: number;
  /**
   * 报价id
   * @format int64
   */
  searchSourceOrderSupplierPriceId?: number;
  /** @format int64 */
  searchSourceOrderSupplierPriceItemId?: number;
  /** 销售价 */
  sellPrice?: number;
  sku?: string;
  /**
   * 开始采购数量
   * @format int32
   */
  startPurchaseQuantity?: number;
}

/** SearchSourceOrderSupplierPriceItemResp */
export interface SearchSourceOrderSupplierPriceItemResp {
  /** @format date-time */
  createTime?: string;
  /** @format int32 */
  endPurchaseQuantity?: number;
  oemSupplierId?: string;
  premiumRate?: number;
  purchasePrice?: number;
  /** @format int64 */
  purchaserUserId?: number;
  purchaserUserName?: string;
  /** @format int64 */
  searchSourceOrderId?: number;
  /** @format int64 */
  searchSourceOrderPurchaseId?: number;
  /** @format int64 */
  searchSourceOrderSupplierPriceId?: number;
  /** @format int64 */
  searchSourceOrderSupplierPriceItemId?: number;
  sellPrice?: number;
  /** @format int32 */
  startPurchaseQuantity?: number;
  supplierName?: string;
  /** @format date-time */
  updateTime?: string;
}

/** SearchSourceOrderSupplierPriceItemRespDTO */
export interface SearchSourceOrderSupplierPriceItemRespDTO {
  /** @format int32 */
  endPurchaseQuantity?: number;
  purchasePrice?: number;
  /** @format int64 */
  searchSourceOrderSupplierPriceItemId?: number;
  sellPrice?: number;
  sku?: string;
  /** @format int32 */
  startPurchaseQuantity?: number;
}

/** SearchSourceOrderSupplierPriceListDTO */
export interface SearchSourceOrderSupplierPriceListDTO {
  /** 最新报价列表 */
  currentPriceList?: SearchSourceOrderSupplierPriceDetailDTO[];
  /** 历史报价列表 */
  historyPriceList?: SearchSourceOrderSupplierPriceDetailDTO[];
}

/** SearchSourceOrderSupplierPricePlatformListItemDTO */
export interface SearchSourceOrderSupplierPricePlatformListItemDTO {
  /**
   * 审核状态: 1-未审核; 2-待定; 3-初审通过; 4-初审拒绝; 5-待复审; 6-复审拒绝; 7-审核通过
   * @format int32
   */
  approveStatus?: number;
  /** 商品类型 */
  classificationName?: string;
  /** @format date-time */
  createTime?: string;
  /**
   * 客户id
   * @format int64
   */
  customerId?: number;
  /** 客户姓名 */
  customerName?: string;
  /** 客户等级 */
  membershipTemplateName?: string;
  /** 图片 */
  productImg?: string;
  /** 商品名称 */
  productNameZh?: string;
  /**
   * 发布时间
   * @format date-time
   */
  pubishTime?: string;
  /** @format int64 */
  searchSourceOrderId?: number;
  /** 订单编号 */
  searchSourceOrderNo?: string;
  /** @format int64 */
  searchSourceOrderSupplierPriceId?: number;
}

/** SearchSourceOrderSupplierPriceSkuItemDTO */
export interface SearchSourceOrderSupplierPriceSkuItemDTO {
  /** 颜色 */
  color?: string;
  /** 颜色中文 */
  colorZh?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 起订量
   * @format int32
   */
  minOrderQuantity?: number;
  /** 采购价 */
  purchasePrice?: number;
  /**
   * 报价id
   * @format int64
   */
  searchSourceOrderSupplierPriceId?: number;
  /** 销售价 */
  sellPrice?: number;
  /** 尺码 */
  size?: string;
  /** 尺码中文 */
  sizeZh?: string;
  /** sku */
  sku?: string;
}

/** SearchSourceOrderSupplierPriceSkuItemRespDTO */
export interface SearchSourceOrderSupplierPriceSkuItemRespDTO {
  color?: string;
  /** @format int64 */
  id?: number;
  /** @format int32 */
  minOrderQuantity?: number;
  purchasePrice?: number;
  /** @format int64 */
  searchSourceOrderSupplierPriceId?: number;
  sellPrice?: number;
  size?: string;
  sku?: string;
}

/** SearchSourceOrdereValuationAddVO */
export interface SearchSourceOrdereValuationAddVO {
  /** @format int32 */
  businessServiceScore?: number;
  opinion?: string;
  /** @format int32 */
  orderIntentionScore?: number;
  /** @format int32 */
  overallScore?: number;
  /** @format int32 */
  sampleSatisfactionScore?: number;
  /** @format int64 */
  searchSourceOrderId?: number;
}

/** SearchSourceSampleInfoDTO */
export interface SearchSourceSampleInfoDTO {
  /** @format int64 */
  bizId?: number;
  sampleFlag?: boolean;
}

/** SearchSourceSupplierPaymentItemRespDTO */
export interface SearchSourceSupplierPaymentItemRespDTO {
  /** @format int64 */
  id?: number;
  paymentPeriod?: number;
  periodName?: string;
  /** @format int32 */
  sortId?: number;
}

/** SearchSourceType */
export interface SearchSourceType {
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 面料信息要求 */
  fabricInformationRequirements?: string;
  /** 费用等级：1，2，3 */
  feeLevel?: string;
  firstQuestion?: string;
  /** 商品类型 */
  productClassification?: string;
  /** 寻源费 */
  searchSourceCharge?: number;
  /** 寻源种类code */
  searchSourceTypeCode?: string;
  /** 寻源种类描述 */
  searchSourceTypeDesc?: string;
  /** 寻源种类描述(日文) */
  searchSourceTypeDescJp?: string;
  /**
   * id
   * @format int64
   */
  searchSourceTypeId?: number;
  /** 寻源种类名字 */
  searchSourceTypeName?: string;
  secondQuestion?: string;
  /** 站点代码(日本:JapanStation,韩国:KoreaStation,英国:UkStation) */
  stationCode?: string;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/** SelectOrderFreezeDetailRespDTO */
export interface SelectOrderFreezeDetailRespDTO {
  additionFreezeAmount?: number;
  productFreezeAmount?: number;
  /** @format int32 */
  stageNo?: number;
}

/** SelectShopProductSkuListFeignReqDTO */
export interface SelectShopProductSkuListFeignReqDTO {
  amazonFnskuList?: string[];
  amazonMsku?: string;
  amazonMskuList?: string[];
  /** @format int64 */
  customerShopId?: number;
}

/** SellQuantityProductListVO */
export interface SellQuantityProductListVO {
  /** @format int64 */
  searchSourceOrderId?: number;
  skuList?: SellQuantitySkuDTO[];
}

/** SellQuantitySkuDTO */
export interface SellQuantitySkuDTO {
  /** @format int32 */
  quantity?: number;
  /** @format int64 */
  searchSourceOrderSkuId?: number;
}

/** SendAdjustApplyAoWaitAcceptOrderVO */
export interface SendAdjustApplyAoWaitAcceptOrderVO {
  /** @format int64 */
  searchSourceOrderId?: number;
  /** 待接单状态-调整申请后的申请采购价 */
  waitAcceptOrderAdjustApplyPrice?: number;
  /** 待接单状态-调整申请备注 */
  waitAcceptOrderAdjustApplyRemark?: string;
  /**
   * 待接单状态-调整申请后的最高起订量
   * @format int32
   */
  waitAcceptOrderAdjustMaxOrderQuantity?: number;
  /**
   * 待接单状态-调整申请后的最低起订量
   * @format int32
   */
  waitAcceptOrderAdjustMinOrderQuantity?: number;
}

/** SettlePrice */
export interface SettlePrice {
  /** @format int32 */
  num?: number;
  price?: number;
}

/** ShippingAddressReqDTO */
export interface ShippingAddressReqDTO {
  /** 地址 */
  address?: string;
  /** 市 */
  city?: string;
  /** 市(日文) */
  cityJp?: string;
  /** 企业或个人报关码 */
  clearanceCode?: string;
  /** 国家 */
  country?: string;
  /** 国家Code */
  countryCode?: string;
  /** 国家(日文) */
  countryJp?: string;
  /** 区 */
  district?: string;
  /** 区(日文) */
  districtJp?: string;
  /** 邮箱 */
  email?: string;
  /**
   * 平台订单收货地址表id
   * @format int64
   */
  platformOrderDeliverAddressId?: number;
  /** 邮政编码 */
  postalCode?: string;
  /** 省 */
  province?: string;
  /** 省(日文) */
  provinceJp?: string;
  /** 收货人姓名 */
  receiveName?: string;
  /** 收货人电话或者手机 */
  receiveTel?: string;
}

/** ShopOrderCreateOrderDTO */
export interface ShopOrderCreateOrderDTO {
  addCommonProductReqDTOList?: AddCommonProductReqDTO[];
  apiProductReqDTOList?: ApiProductReqDTO[];
  combinationProductAddCartReqDTO?: CombinationProductAddCartReqDTO;
  createOrderReqDTO?: CreateOrderReqDTO;
  /** @format int64 */
  isSynLogisticsNo?: number;
  message?: string;
  /** @format int64 */
  platformOrderId?: number;
  platformOrderNo?: string;
  /** @format int64 */
  shopOrderId?: number;
  success?: boolean;
}

/** ShopPlatformOrderInfoDTO */
export interface ShopPlatformOrderInfoDTO {
  /** @format int64 */
  apiOrderCount?: number;
  /** @format int32 */
  apiOrderStatusFailCount?: number;
  /** @format int64 */
  canDeliveryOrderCount?: number;
  /** @format int32 */
  canceledCount?: number;
  /** @format int64 */
  completeOrderCount?: number;
  /** @format int64 */
  customerShopId?: number;
  /** @format int64 */
  dealOrderCount?: number;
  /** @format int32 */
  noBindAmazonSkuCount?: number;
  /** @format int32 */
  noBindApiSkuCount?: number;
  /** @format int64 */
  noCompleteOrderCount?: number;
  /** @format int32 */
  noConfirmReplenishPlanCount?: number;
  orderAmount?: number;
  /** @format int32 */
  orderCount?: number;
  /** @format int64 */
  partDeliveryOrderCount?: number;
  /** @format int64 */
  waitPayOrderCount?: number;
  /** @format int32 */
  yesterdayOrderQuantity?: number;
}

/** ShopProductSkuDTO */
export interface ShopProductSkuDTO {
  amazonAsin?: string;
  /** @format int32 */
  amazonBindStatus?: number;
  /** @format date-time */
  amazonBindTime?: string;
  /** @format int32 */
  amazonBindType?: number;
  amazonFnsku?: string;
  amazonMsku?: string;
  /** @format int32 */
  amazonNotSellQuantity?: number;
  /** @format int32 */
  amazonPredictTotalQuantity?: number;
  amazonProductTitle?: string;
  /** @format int32 */
  amazonReservedQuantity?: number;
  /** @format int32 */
  amazonSellQuantity?: number;
  /** @format int32 */
  amazonStockInQuantity?: number;
  /** @format int32 */
  amazonSurveyQuantity?: number;
  /** @format int32 */
  channel?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  customerProductMsku?: string;
  /** @format int32 */
  customerProductSkuOrderFlag?: number;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  /** @format int32 */
  inventory?: number;
  /** @format int32 */
  minOrderQuantity?: number;
  /** @format int32 */
  oemProductClassificationId?: number;
  overseaProductSku?: string;
  /** @format int32 */
  pendingStorage?: number;
  platformType?: string;
  /** @format int64 */
  productCategoryFrontendNdId?: number;
  productCode?: string;
  productDetailUrl?: string;
  productMainImg?: string;
  productPriceLadderList?: string;
  productPropertiesName?: string;
  productSku?: string;
  productSkuImg?: string;
  productTitle?: string;
  productTitleJp?: string;
  /** @format int32 */
  productType?: number;
  shopCode?: string;
  shopName?: string;
  shopProductSku?: string;
  /** @format int64 */
  shopProductSkuId?: number;
  /** @format int32 */
  systemSource?: number;
  /** @format int32 */
  unableProcessDefectiveProducts?: number;
  unitPrice?: number;
  /** @format date-time */
  updateTime?: string;
}

/** ShopProductSkuFeignRespDTO */
export interface ShopProductSkuFeignRespDTO {
  amazonAsin?: string;
  /** @format int32 */
  amazonBindStatus?: number;
  /** @format date-time */
  amazonBindTime?: string;
  /** @format int32 */
  amazonBindType?: number;
  amazonFnsku?: string;
  amazonMsku?: string;
  /** @format int32 */
  amazonNotSellQuantity?: number;
  /** @format int32 */
  amazonPredictTotalQuantity?: number;
  amazonProductTitle?: string;
  /** @format int32 */
  amazonReservedQuantity?: number;
  /** @format int32 */
  amazonSellQuantity?: number;
  /** @format int32 */
  amazonStockInQuantity?: number;
  /** @format int32 */
  amazonSurveyQuantity?: number;
  /** @format int32 */
  channel?: number;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  customerProductMsku?: string;
  /** @format int32 */
  customerProductSkuOrderFlag?: number;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  /** @format int32 */
  inventory?: number;
  overseaProductSku?: string;
  /** @format int32 */
  pendingStorage?: number;
  platformType?: string;
  productCode?: string;
  productDetailUrl?: string;
  productMainImg?: string;
  productPropertiesName?: string;
  productSku?: string;
  productSkuImg?: string;
  productTitle?: string;
  productTitleJp?: string;
  /** @format int32 */
  productType?: number;
  shopCode?: string;
  shopName?: string;
  shopProductSku?: string;
  /** @format int64 */
  shopProductSkuId?: number;
  /** @format int32 */
  systemSource?: number;
  /** @format int32 */
  unableProcessDefectiveProducts?: number;
  unitPrice?: number;
}

/** ShopProductSkuFileDTO */
export interface ShopProductSkuFileDTO {
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 文件名 */
  name?: string;
  /** 店铺商品SKU(店铺商品库) */
  shopProductSku?: string;
  /**
   * 店铺商品SKU条形码文件表id
   * @format int64
   */
  shopProductSkuFileId?: number;
  /**
   * 文件类型 0-其他条形码 1-fba 2-乐天 3-shoplist 4-zozotown
   * @format int32
   */
  type?: number;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  /** 店铺商品SKU(店铺商品库) */
  url?: string;
}

/** ShopProductSkuQueryDTO */
export interface ShopProductSkuQueryDTO {
  amazonKeywordSku?: string;
  /** @format int64 */
  customerShopId?: number;
  keywordSku?: string;
  shopProductSku?: string;
  shopProductSkuList?: string[];
}

/** ShopProductSkuReqDTO */
export interface ShopProductSkuReqDTO {
  /** 海外仓sku */
  overseaProducSku?: string;
  /** 店铺商品SKU(店铺商品库) */
  shopProductSku?: string;
}

/** ShopProductSkuRespDTO */
export interface ShopProductSkuRespDTO {
  /** 亚马逊asin */
  amazonAsin?: string;
  /**
   * 亚马逊绑定状态: 1-待绑定; 2-已绑定 绑定条件: customer_product_msku=amazon_msku
   * @format int32
   */
  amazonBindStatus?: number;
  /**
   * 亚马逊绑定日期
   * @format date-time
   */
  amazonBindTime?: string;
  /**
   * 亚马逊绑定类型: 1-系统自动绑定; 2-客户手动换绑
   * @format int32
   */
  amazonBindType?: number;
  /** 亚马逊fnsku */
  amazonFnsku?: string;
  /** 亚马逊msku */
  amazonMsku?: string;
  /**
   * 亚马逊不可售数量
   * @format int32
   */
  amazonNotSellQuantity?: number;
  /**
   * 亚马逊预计总库存=亚马逊可售数量+处理中数量+在库
   * @format int32
   */
  amazonPredictTotalQuantity?: number;
  /** 亚马逊商品名称 */
  amazonProductTitle?: string;
  /**
   * 亚马逊预留数量
   * @format int32
   */
  amazonReservedQuantity?: number;
  /**
   * 亚马逊可售数量
   * @format int32
   */
  amazonSellQuantity?: number;
  /**
   * 亚马逊入库数量
   * @format int32
   */
  amazonStockInQuantity?: number;
  /**
   * 亚马逊调查中数量
   * @format int32
   */
  amazonSurveyQuantity?: number;
  /** @format int32 */
  checked?: number;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /**
   * 客户ID
   * @format int64
   */
  customerId?: number;
  /** 客户姓名 */
  customerName?: string;
  /** 客户主动填写的亚马逊mksu(购物车下单时填写) */
  customerProductMsku?: string;
  /**
   * 下单标志: 0-未下单; 1-已下单
   * @format int32
   */
  customerProductSkuOrderFlag?: number;
  /**
   * 用户店铺表id
   * @format int64
   */
  customerShopId?: number;
  /** 客户店铺名称 */
  customerShopName?: string;
  /** @format int32 */
  freezed?: number;
  /** 海外仓sku */
  overseaProductSku?: string;
  /** 平台类型;TB:淘宝;AM:1688;TM:天猫;VC:搜款网;WS:网商园;YW:义乌小商品城; */
  platformType?: string;
  /** 商品编码 */
  productCode?: string;
  /** 详情URL */
  productDetailUrl?: string;
  /** 主图 */
  productMainImg?: string;
  /** 属性名称 */
  productPropertiesName?: string;
  /** 平台商品SKU */
  productSku?: string;
  /** 商品sku图 */
  productSkuImg?: string;
  /** 商品名称 */
  productTitle?: string;
  /**
   * 商品类型: 1-普通商品; 2-OEM商品; 3-组合商品
   * @format int32
   */
  productType?: number;
  queryStockSuccess?: boolean;
  /** 店铺code（platform_type-shop_id 例：TB-shop001） */
  shopCode?: string;
  /** 店铺名称 */
  shopName?: string;
  /** 店铺商品SKU(店铺商品库) */
  shopProductSku?: string;
  /**
   * 店铺商品SKU表id
   * @format int64
   */
  shopProductSkuId?: number;
  /** sku附件表 */
  skuFileDTOList?: ShopProductSkuFileDTO[];
  /**
   * 系统来源: 1-D2C; 2-B2B
   * @format int32
   */
  systemSource?: number;
  /** 单价 */
  unitPrice?: number;
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
  /** @format int32 */
  useable?: number;
}

/** SpecialCheckInfoDTO */
export interface SpecialCheckInfoDTO {
  /** @format int32 */
  orderQuantity?: number;
  platformOrderNo?: string;
  productSku?: string;
  shopProductSku?: string;
  specialCheckRequirement?: string;
  specialCheckRequirementImg?: string;
  systemOrderNo?: string;
}

/** SpotCheckConfigDTO */
export interface SpotCheckConfigDTO {
  cost?: number;
  /** @format int32 */
  endQuantity?: number;
  /** @format int32 */
  startQuantity?: number;
}

/** SpotCheckPriceDTO */
export interface SpotCheckPriceDTO {
  cost?: number;
  /** @format int32 */
  endQuantity?: number;
  /** @format int32 */
  startQuantity?: number;
}

/** StageHasFreezeRateDTO */
export interface StageHasFreezeRateDTO {
  freezeRate?: number;
  orderNo?: string;
}

/** StageInfoDTO */
export interface StageInfoDTO {
  freezeAmount?: number;
  freezeRate?: string;
  /** @format int32 */
  freezeStatus?: number;
  purchaseApplyFlag?: boolean;
  /** @format int32 */
  stageNo?: number;
  totalFreezeAmount?: number;
}

/** StockRespDTO */
export interface StockRespDTO {
  /** @format int32 */
  checked?: number;
  /** @format int32 */
  freezed?: number;
  /** @format int32 */
  lastMonthUse?: number;
  shopProductSku?: string;
  /** @format int32 */
  useable?: number;
}

/** SubmitAdditionReqDTO */
export interface SubmitAdditionReqDTO {
  /**
   * 附加项code
   * @format int32
   */
  additionCode?: number;
  /**
   * 附加项配置表id
   * @format int32
   */
  additionConfigId?: number;
  /**
   * 附加项id
   * @format int32
   */
  additionId?: number;
  /** 辅料sku */
  ingredientsSku?: string;
}

/** SupplierPriceOperateVO */
export interface SupplierPriceOperateVO {
  /**
   * 寻源操作状态  0 拒绝 1 接受
   * @format int32
   */
  operateStatus?: number;
  /** 寻源订单编号 */
  searchSourceOrderNo?: string;
  /** 寻源报价单id */
  supplierPriceIdList?: number[];
}

/** SystemOrderItemAdditionRespDTO */
export interface SystemOrderItemAdditionRespDTO {
  /** @format int32 */
  additionConfigId?: number;
  /** @format int32 */
  additionId?: number;
  additionName?: string;
  additionNameJp?: string;
  /** @format int32 */
  additionScene?: number;
  /** @format int32 */
  calculateConfigId?: number;
  cost?: number;
  /** @format int32 */
  costType?: number;
  ingredientsName?: string;
  ingredientsNameJp?: string;
  ingredientsSku?: string;
  shopProductSku?: string;
  /** @format int64 */
  systemOrderItemId?: number;
  systemOrderNo?: string;
  /** @format int32 */
  useQuantity?: number;
}

/** SystemOrderItemReqDTO */
export interface SystemOrderItemReqDTO {
  /** @format int64 */
  customerShopId?: number;
  shopProductSkuList?: string[];
  systemOrderNo?: string;
}

/** UnBindAmazonSkuReqDTO */
export interface UnBindAmazonSkuReqDTO {
  /** @format int64 */
  shopProductSkuId?: number;
}

/** UpdateCartAdditionReqDTO */
export interface UpdateCartAdditionReqDTO {
  cartAdditionList?: CartAdditionReqDTO[];
  /** @format int64 */
  cartId?: number;
  /** @format int64 */
  customerShopId?: number;
  /** @format int64 */
  mainCustomerId?: number;
  /** @format int32 */
  noAdditionalFlag?: number;
}

/** UpdateCartOrderQuantityReqDTO */
export interface UpdateCartOrderQuantityReqDTO {
  /** @format int64 */
  cartId?: number;
  /** @format int64 */
  customerId?: number;
  /** @format int64 */
  customerShopId?: number;
  /** @format int32 */
  orderQuantity?: number;
}

/** UpdateCombinationCartAdditionReqDTO */
export interface UpdateCombinationCartAdditionReqDTO {
  cartAdditionList?: CartAdditionReqDTO[];
  /** @format int64 */
  cartId?: number;
  /** @format int64 */
  customerShopId?: number;
  /** @format int64 */
  mainCustomerId?: number;
  /** @format int32 */
  noAdditionalFlag?: number;
  productSku?: string;
  shopProductSku?: string;
}

/** UpdateCustomerExpectVO */
export interface UpdateCustomerExpectVO {
  /**
   * 客户希望最低起订量
   * @format int32
   */
  customerExpectMinOrderQuantity?: number;
  /** 客户希望价格 */
  customerExpectPrice?: number;
  /**
   * 寻源单号
   * @format int64
   */
  searchSourceOrderId?: number;
  /** 需要修改数量的sku列表 */
  skuList?: UpdateSearchSourceOrderSkuQuantityDTO[];
}

/** UpdateCustomerOrderNoReqDTO */
export interface UpdateCustomerOrderNoReqDTO {
  customerOrderNo?: string;
  platformOrderNo?: string;
}

/** UpdateCustomerProductMskuDTO */
export interface UpdateCustomerProductMskuDTO {
  /** 组合商品sku */
  combinationProductSku?: string;
  /** 客户商品sku */
  customerProductMsku?: string;
}

/** UpdateCustomerProductMskuReqDTO */
export interface UpdateCustomerProductMskuReqDTO {
  /** @format int64 */
  cartId?: number;
  customerProductMsku?: string;
}

/** UpdatePremiumRateVO */
export interface UpdatePremiumRateVO {
  /** @format int64 */
  oemProductClassificationId?: number;
  premiumRate?: number;
}

/** UpdateSearchSourceOrderSkuQuantityDTO */
export interface UpdateSearchSourceOrderSkuQuantityDTO {
  /**
   * 数量
   * @format int32
   */
  quantity?: number;
  /**
   * 寻源单号
   * @format int64
   */
  searchSourceOrderSkuId?: number;
}

/** UpdateSearchSourceOrderVO */
export interface UpdateSearchSourceOrderVO {
  /** 寻源单id */
  searchSourceOrder?: SearchSourceOrder;
  /** 寻源单SKU列表 */
  searchSourceOrderSkuList?: SearchSourceOrderSku[];
}

/** UpdateShopProductSkuConditionDTO */
export interface UpdateShopProductSkuConditionDTO {
  customerProductMsku?: string;
  /** @format int64 */
  customerShopId?: number;
  /** @format int64 */
  shopProductSkuId?: number;
}

/** UpdateShopProductSkuFeignReqDTO */
export interface UpdateShopProductSkuFeignReqDTO {
  shopProductSku?: ShopProductSkuDTO;
  updateConditon?: UpdateShopProductSkuConditionDTO;
}

/** UpdateShopProductSkuImgReqDTO */
export interface UpdateShopProductSkuImgReqDTO {
  productSkuImg?: string;
  shopProductSku?: string;
}

/** UpdateShopProductSkuReqDTO */
export interface UpdateShopProductSkuReqDTO {
  /** 店铺商品SKU(店铺商品库) */
  customerProductMsku?: string;
  /**
   * 店铺商品SKU表id
   * @format int64
   */
  shopProductSkuId?: number;
}

/** UpdateSynLogisticsNoReqDTO */
export interface UpdateSynLogisticsNoReqDTO {
  /** @format int32 */
  newStatus?: number;
  /** @format int64 */
  platformOrderId?: number;
}

/** UpdateVolumeReqDTO */
export interface UpdateVolumeReqDTO {
  /** 平台商品sku */
  productSku?: string;
  /** 店铺sku列表 */
  shopProductSkus?: string[];
  /** 体积：（XS、S、M、L、XL） */
  volume?: string;
}

/** UserApplyCancelReqDTO */
export interface UserApplyCancelReqDTO {
  cancelDeliveryFlag?: boolean;
  platformOrderItemIds?: number[];
  platformOrderNo?: string;
  shopProductSkus?: string[];
}

/** UserKnowReqDTO */
export interface UserKnowReqDTO {
  /** @format int64 */
  customerShopId?: number;
  /** @format int64 */
  taskId?: number;
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
    | "PKG_STAND_FEE";
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
    | "PROMOTION_RECHARGE";
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
    | "CUSTOMER_BILL_PAY";
  changeAmount?: number;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
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
    | "REFUND_DOMESTIC_FREIGHT";
  originalNo?: string;
  platformOrderNo?: string;
  reason?: string;
  /** @format int32 */
  result?: number;
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

/** BizResponse«B2bPlatformOrderDetailRespDTO» */
export interface BizResponseB2BPlatformOrderDetailRespDTO {
  code?: string;
  data?: B2BPlatformOrderDetailRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«BadAdditionalItemsRespDTO» */
export interface BizResponseBadAdditionalItemsRespDTO {
  code?: string;
  data?: BadAdditionalItemsRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«BadPendingRespDTO» */
export interface BizResponseBadPendingRespDTO {
  code?: string;
  data?: BadPendingRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«BatchQueryStockRespDTO» */
export interface BizResponseBatchQueryStockRespDTO {
  code?: string;
  data?: BatchQueryStockRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CartItemDTO» */
export interface BizResponseCartItemDTO {
  code?: string;
  data?: CartItemDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CombinationProductFeignRespDTO» */
export interface BizResponseCombinationProductFeignRespDTO {
  code?: string;
  data?: CombinationProductFeignRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CombinationProductRespDTO» */
export interface BizResponseCombinationProductRespDTO {
  code?: string;
  data?: CombinationProductRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CreateOrderPreCheckRespDTO» */
export interface BizResponseCreateOrderPreCheckRespDTO {
  code?: string;
  data?: CreateOrderPreCheckRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CreateOrderRespDTO» */
export interface BizResponseCreateOrderRespDTO {
  code?: string;
  data?: CreateOrderRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CreateSearchSourceRightsStatusVO» */
export interface BizResponseCreateSearchSourceRightsStatusVO {
  code?: string;
  data?: CreateSearchSourceRightsStatusVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerPlatformOrderItemRespDTO» */
export interface BizResponseCustomerPlatformOrderItemRespDTO {
  code?: string;
  data?: CustomerPlatformOrderItemRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerShopIngredientsRespDTO» */
export interface BizResponseCustomerShopIngredientsRespDTO {
  code?: string;
  data?: CustomerShopIngredientsRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«DeliveryAbnormalOrderCount» */
export interface BizResponseDeliveryAbnormalOrderCount {
  code?: string;
  data?: DeliveryAbnormalOrderCount;
  msg?: string;
  success?: boolean;
}

/** BizResponse«DeliveryAddressCreateDTO» */
export interface BizResponseDeliveryAddressCreateDTO {
  code?: string;
  data?: DeliveryAddressCreateDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«DeliveryReviewNoticeCount» */
export interface BizResponseDeliveryReviewNoticeCount {
  code?: string;
  data?: DeliveryReviewNoticeCount;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ExcelImportQueryTaskRespDTO» */
export interface BizResponseExcelImportQueryTaskRespDTO {
  code?: string;
  data?: ExcelImportQueryTaskRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ExportRespDTO» */
export interface BizResponseExportRespDTO {
  code?: string;
  data?: ExportRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«GetCurrentCartListRespDTO» */
export interface BizResponseGetCurrentCartListRespDTO {
  code?: string;
  data?: GetCurrentCartListRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«GetMaxApplyAmountRespDTO» */
export interface BizResponseGetMaxApplyAmountRespDTO {
  code?: string;
  data?: GetMaxApplyAmountRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«GetPlatformOrderDetailRespDTO» */
export interface BizResponseGetPlatformOrderDetailRespDTO {
  code?: string;
  data?: GetPlatformOrderDetailRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«IngredientsAutoQuoteDTO» */
export interface BizResponseIngredientsAutoQuoteDTO {
  code?: string;
  data?: IngredientsAutoQuoteDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«AdditionalItemsInfoRespDTO»» */
export interface BizResponseListAdditionalItemsInfoRespDTO {
  code?: string;
  data?: AdditionalItemsInfoRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«BillingFeeDetailsRespDTO»» */
export interface BizResponseListBillingFeeDetailsRespDTO {
  code?: string;
  data?: BillingFeeDetailsRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CartAdditionRespDTO»» */
export interface BizResponseListCartAdditionRespDTO {
  code?: string;
  data?: CartAdditionRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CartGroupItemDTO»» */
export interface BizResponseListCartGroupItemDTO {
  code?: string;
  data?: CartGroupItemDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CombinationProductFeignRespDTO»» */
export interface BizResponseListCombinationProductFeignRespDTO {
  code?: string;
  data?: CombinationProductFeignRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ConversionRecordRespDTO»» */
export interface BizResponseListConversionRecordRespDTO {
  code?: string;
  data?: ConversionRecordRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CreateOrderRespDTO»» */
export interface BizResponseListCreateOrderRespDTO {
  code?: string;
  data?: CreateOrderRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerPlatformOrderItemRespDTO»» */
export interface BizResponseListCustomerPlatformOrderItemRespDTO {
  code?: string;
  data?: CustomerPlatformOrderItemRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerPlatformOrderRespDTO»» */
export interface BizResponseListCustomerPlatformOrderRespDTO {
  code?: string;
  data?: CustomerPlatformOrderRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerShopIngredientsRespDTO»» */
export interface BizResponseListCustomerShopIngredientsRespDTO {
  code?: string;
  data?: CustomerShopIngredientsRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«DeductionDetailsRespDTO»» */
export interface BizResponseListDeductionDetailsRespDTO {
  code?: string;
  data?: DeductionDetailsRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«DeliveryAdditionalRespDTO»» */
export interface BizResponseListDeliveryAdditionalRespDTO {
  code?: string;
  data?: DeliveryAdditionalRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«InboundOrderAdditionRespDTO»» */
export interface BizResponseListInboundOrderAdditionRespDTO {
  code?: string;
  data?: InboundOrderAdditionRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«IngredientsAutoQuoteLogDTO»» */
export interface BizResponseListIngredientsAutoQuoteLogDTO {
  code?: string;
  data?: IngredientsAutoQuoteLogDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«IngredientsLogoPrintMode»» */
export interface BizResponseListIngredientsLogoPrintMode {
  code?: string;
  data?: IngredientsLogoPrintMode[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«IngredientsMaterials»» */
export interface BizResponseListIngredientsMaterials {
  code?: string;
  data?: IngredientsMaterials[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«IngredientsPrice»» */
export interface BizResponseListIngredientsPrice {
  code?: string;
  data?: IngredientsPrice[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«IngredientsSize»» */
export interface BizResponseListIngredientsSize {
  code?: string;
  data?: IngredientsSize[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«IngredientsStyle»» */
export interface BizResponseListIngredientsStyle {
  code?: string;
  data?: IngredientsStyle[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«Ingredients»» */
export interface BizResponseListIngredients {
  code?: string;
  data?: Ingredients[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«InternationalityLogisticsInfoDetailRespDTO»» */
export interface BizResponseListInternationalityLogisticsInfoDetailRespDTO {
  code?: string;
  data?: InternationalityLogisticsInfoDetailRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ManagePlatformOrderItemRespDTO»» */
export interface BizResponseListManagePlatformOrderItemRespDTO {
  code?: string;
  data?: ManagePlatformOrderItemRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«MyInventoryRespDTO»» */
export interface BizResponseListMyInventoryRespDTO {
  code?: string;
  data?: MyInventoryRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«OemProductClassification»» */
export interface BizResponseListOemProductClassification {
  code?: string;
  data?: OemProductClassification[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«OemSkuProductCustomsResp»» */
export interface BizResponseListOemSkuProductCustomsResp {
  code?: string;
  data?: OemSkuProductCustomsResp[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«OperateLogVO»» */
export interface BizResponseListOperateLogVO {
  code?: string;
  data?: OperateLogVO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«OrderItemStatusInfoDTO»» */
export interface BizResponseListOrderItemStatusInfoDTO {
  code?: string;
  data?: OrderItemStatusInfoDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«PendingBadQuantityRespDTO»» */
export interface BizResponseListPendingBadQuantityRespDTO {
  code?: string;
  data?: PendingBadQuantityRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«PlatformOrderDeliveryAddressRespDTO»» */
export interface BizResponseListPlatformOrderDeliveryAddressRespDTO {
  code?: string;
  data?: PlatformOrderDeliveryAddressRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«PlatformOrderItemDiscountDTO»» */
export interface BizResponseListPlatformOrderItemDiscountDTO {
  code?: string;
  data?: PlatformOrderItemDiscountDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«PlatformOrderItemRespDTO»» */
export interface BizResponseListPlatformOrderItemRespDTO {
  code?: string;
  data?: PlatformOrderItemRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«PlatformOrderItemSettleDTO»» */
export interface BizResponseListPlatformOrderItemSettleDTO {
  code?: string;
  data?: PlatformOrderItemSettleDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«PlatformOrderSettleDayScopeDTO»» */
export interface BizResponseListPlatformOrderSettleDayScopeDTO {
  code?: string;
  data?: PlatformOrderSettleDayScopeDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«PlatformOrderSettlePayDTO»» */
export interface BizResponseListPlatformOrderSettlePayDTO {
  code?: string;
  data?: PlatformOrderSettlePayDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«PlatformOrderSettleSourceDTO»» */
export interface BizResponseListPlatformOrderSettleSourceDTO {
  code?: string;
  data?: PlatformOrderSettleSourceDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ProductMaterialRespDTO»» */
export interface BizResponseListProductMaterialRespDTO {
  code?: string;
  data?: ProductMaterialRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«RemainCombinationProductItemRespDTO»» */
export interface BizResponseListRemainCombinationProductItemRespDTO {
  code?: string;
  data?: RemainCombinationProductItemRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«SearchSourceOrderRepurchaseApplyLog»» */
export interface BizResponseListSearchSourceOrderRepurchaseApplyLog {
  code?: string;
  data?: SearchSourceOrderRepurchaseApplyLog[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«SearchSourceOrderSkuDetailResp»» */
export interface BizResponseListSearchSourceOrderSkuDetailResp {
  code?: string;
  data?: SearchSourceOrderSkuDetailResp[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«SearchSourceOrderSkusResp»» */
export interface BizResponseListSearchSourceOrderSkusResp {
  code?: string;
  data?: SearchSourceOrderSkusResp[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«SearchSourceOrderSupplierPriceItemResp»» */
export interface BizResponseListSearchSourceOrderSupplierPriceItemResp {
  code?: string;
  data?: SearchSourceOrderSupplierPriceItemResp[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«SearchSourceSampleInfoDTO»» */
export interface BizResponseListSearchSourceSampleInfoDTO {
  code?: string;
  data?: SearchSourceSampleInfoDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«SearchSourceType»» */
export interface BizResponseListSearchSourceType {
  code?: string;
  data?: SearchSourceType[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«SelectOrderFreezeDetailRespDTO»» */
export interface BizResponseListSelectOrderFreezeDetailRespDTO {
  code?: string;
  data?: SelectOrderFreezeDetailRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ShopPlatformOrderInfoDTO»» */
export interface BizResponseListShopPlatformOrderInfoDTO {
  code?: string;
  data?: ShopPlatformOrderInfoDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ShopProductSkuDTO»» */
export interface BizResponseListShopProductSkuDTO {
  code?: string;
  data?: ShopProductSkuDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ShopProductSkuFeignRespDTO»» */
export interface BizResponseListShopProductSkuFeignRespDTO {
  code?: string;
  data?: ShopProductSkuFeignRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ShopProductSkuRespDTO»» */
export interface BizResponseListShopProductSkuRespDTO {
  code?: string;
  data?: ShopProductSkuRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«SpecialCheckInfoDTO»» */
export interface BizResponseListSpecialCheckInfoDTO {
  code?: string;
  data?: SpecialCheckInfoDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«SystemOrderItemAdditionRespDTO»» */
export interface BizResponseListSystemOrderItemAdditionRespDTO {
  code?: string;
  data?: SystemOrderItemAdditionRespDTO[];
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

/** BizResponse«List«组合商品子商品库存»» */
export interface BizResponseList {
  code?: string;
  data?: _[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«LogisticsInfoDetailRespDTO» */
export interface BizResponseLogisticsInfoDetailRespDTO {
  code?: string;
  data?: LogisticsInfoDetailRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«OemOrderProductListDTO» */
export interface BizResponseOemOrderProductListDTO {
  code?: string;
  data?: OemOrderProductListDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«OemPlatformListCountDTO» */
export interface BizResponseOemPlatformListCountDTO {
  code?: string;
  data?: OemPlatformListCountDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«OemPlatformListCountV2DTO» */
export interface BizResponseOemPlatformListCountV2DTO {
  code?: string;
  data?: OemPlatformListCountV2DTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«OrderAndSkuDetailRespDTO» */
export interface BizResponseOrderAndSkuDetailRespDTO {
  code?: string;
  data?: OrderAndSkuDetailRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«OrderCombinationProductRespDTO» */
export interface BizResponseOrderCombinationProductRespDTO {
  code?: string;
  data?: OrderCombinationProductRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«OrderDetailsRespDTO» */
export interface BizResponseOrderDetailsRespDTO {
  code?: string;
  data?: OrderDetailsRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«OrderPayRespDTO» */
export interface BizResponseOrderPayRespDTO {
  code?: string;
  data?: OrderPayRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PageInfo«SearchSourceOrderLog»» */
export interface BizResponsePageInfoSearchSourceOrderLog {
  code?: string;
  data?: PageInfoSearchSourceOrderLog;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PageResult«CombinationOrderRespDTO»» */
export interface BizResponsePageResultCombinationOrderRespDTO {
  code?: string;
  data?: PageResultCombinationOrderRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PageResult«DeliverTaskRespDTO»» */
export interface BizResponsePageResultDeliverTaskRespDTO {
  code?: string;
  data?: PageResultDeliverTaskRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PageResult«DeliveryReviewOrderPage»» */
export interface BizResponsePageResultDeliveryReviewOrderPage {
  code?: string;
  data?: PageResultDeliveryReviewOrderPage;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PageResult«OnTheWayStockQueryResoDTO»» */
export interface BizResponsePageResultOnTheWayStockQueryResoDTO {
  code?: string;
  data?: PageResultOnTheWayStockQueryResoDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PageResult«PageCustomerIdByProductCodeRespDTO»» */
export interface BizResponsePageResultPageCustomerIdByProductCodeRespDTO {
  code?: string;
  data?: PageResultPageCustomerIdByProductCodeRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PageResult«SearchSourceOrderListItemDTO»» */
export interface BizResponsePageResultSearchSourceOrderListItemDTO {
  code?: string;
  data?: PageResultSearchSourceOrderListItemDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PageResult«SearchSourceOrderPlatformBackendListItemDTO»» */
export interface BizResponsePageResultSearchSourceOrderPlatformBackendListItemDTO {
  code?: string;
  data?: PageResultSearchSourceOrderPlatformBackendListItemDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PageResult«SearchSourceOrderRepurchaseApplySupplierPricePlatformListItemDTO»» */
export interface BizResponsePageResultSearchSourceOrderRepurchaseApplySupplierPricePlatformListItemDTO {
  code?: string;
  data?: PageResultSearchSourceOrderRepurchaseApplySupplierPricePlatformListItemDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PageResult«SearchSourceOrderSkuVO»» */
export interface BizResponsePageResultSearchSourceOrderSkuVO {
  code?: string;
  data?: PageResultSearchSourceOrderSkuVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PageResult«SearchSourceOrderSupplierPricePlatformListItemDTO»» */
export interface BizResponsePageResultSearchSourceOrderSupplierPricePlatformListItemDTO {
  code?: string;
  data?: PageResultSearchSourceOrderSupplierPricePlatformListItemDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«AbnormalOrderRespDTO»» */
export interface BizResponsePageAbnormalOrderRespDTO {
  code?: string;
  data?: PageAbnormalOrderRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«AbnormalOrder»» */
export interface BizResponsePageAbnormalOrder {
  code?: string;
  data?: PageAbnormalOrder;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CartItemDTO»» */
export interface BizResponsePageCartItemDTO {
  code?: string;
  data?: PageCartItemDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CombinationProductRespDTO»» */
export interface BizResponsePageCombinationProductRespDTO {
  code?: string;
  data?: PageCombinationProductRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerPlatformOrderRespDTO»» */
export interface BizResponsePageCustomerPlatformOrderRespDTO {
  code?: string;
  data?: PageCustomerPlatformOrderRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerSearchPlatformOrderItemRespDTO»» */
export interface BizResponsePageCustomerSearchPlatformOrderItemRespDTO {
  code?: string;
  data?: PageCustomerSearchPlatformOrderItemRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerShopIngredientsRespDTO»» */
export interface BizResponsePageCustomerShopIngredientsRespDTO {
  code?: string;
  data?: PageCustomerShopIngredientsRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«DeliveryAbnormalOrderPageDTO»» */
export interface BizResponsePageDeliveryAbnormalOrderPageDTO {
  code?: string;
  data?: PageDeliveryAbnormalOrderPageDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«IngredientsAutoQuoteDTO»» */
export interface BizResponsePageIngredientsAutoQuoteDTO {
  code?: string;
  data?: PageIngredientsAutoQuoteDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«ManagePlatformOrderItemRespDTO»» */
export interface BizResponsePageManagePlatformOrderItemRespDTO {
  code?: string;
  data?: PageManagePlatformOrderItemRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«ManagePlatformOrderRespDTO»» */
export interface BizResponsePageManagePlatformOrderRespDTO {
  code?: string;
  data?: PageManagePlatformOrderRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«MyInventoryRespDTO»» */
export interface BizResponsePageMyInventoryRespDTO {
  code?: string;
  data?: PageMyInventoryRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«ProductMeasureRespDTO»» */
export interface BizResponsePageProductMeasureRespDTO {
  code?: string;
  data?: PageProductMeasureRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«ReplenishPlanRespDTO»» */
export interface BizResponsePageReplenishPlanRespDTO {
  code?: string;
  data?: PageReplenishPlanRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«SearchSourceOrderRepurchaseApplyListItemDTO»» */
export interface BizResponsePageSearchSourceOrderRepurchaseApplyListItemDTO {
  code?: string;
  data?: PageSearchSourceOrderRepurchaseApplyListItemDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«SearchSourceOrderRepurchaseApplyPlatformListItemDTO»» */
export interface BizResponsePageSearchSourceOrderRepurchaseApplyPlatformListItemDTO {
  code?: string;
  data?: PageSearchSourceOrderRepurchaseApplyPlatformListItemDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«ShopProductSkuRespDTO»» */
export interface BizResponsePageShopProductSkuRespDTO {
  code?: string;
  data?: PageShopProductSkuRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PlatformOrderAdditionSettleRespDTO» */
export interface BizResponsePlatformOrderAdditionSettleRespDTO {
  code?: string;
  data?: PlatformOrderAdditionSettleRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PlatformOrderApiSkuRespDTO» */
export interface BizResponsePlatformOrderApiSkuRespDTO {
  code?: string;
  data?: PlatformOrderApiSkuRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PlatformOrderItemRespDTO» */
export interface BizResponsePlatformOrderItemRespDTO {
  code?: string;
  data?: PlatformOrderItemRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PlatformOrderItemSpecialCheckInfo» */
export interface BizResponsePlatformOrderItemSpecialCheckInfo {
  code?: string;
  data?: PlatformOrderItemSpecialCheckInfo;
  msg?: string;
  success?: boolean;
}

/** BizResponse«PlatformOrderProductSettleDetail» */
export interface BizResponsePlatformOrderProductSettleDetail {
  code?: string;
  data?: PlatformOrderProductSettleDetail;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ProductDetailsRespDTO» */
export interface BizResponseProductDetailsRespDTO {
  code?: string;
  data?: ProductDetailsRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ProductSpecialCheckRespDTO» */
export interface BizResponseProductSpecialCheckRespDTO {
  code?: string;
  data?: ProductSpecialCheckRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«QueryItemExpressesRespDTO» */
export interface BizResponseQueryItemExpressesRespDTO {
  code?: string;
  data?: QueryItemExpressesRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«QueryOrderCountRespDTO» */
export interface BizResponseQueryOrderCountRespDTO {
  code?: string;
  data?: QueryOrderCountRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«QueryPayStageRespDTO» */
export interface BizResponseQueryPayStageRespDTO {
  code?: string;
  data?: QueryPayStageRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«QueryStageInfoRespDTO» */
export interface BizResponseQueryStageInfoRespDTO {
  code?: string;
  data?: QueryStageInfoRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«QuerySubscriptionShopifyRespDTO» */
export interface BizResponseQuerySubscriptionShopifyRespDTO {
  code?: string;
  data?: QuerySubscriptionShopifyRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«SearchSourceOrderByShopIdResp» */
export interface BizResponseSearchSourceOrderByShopIdResp {
  code?: string;
  data?: SearchSourceOrderByShopIdResp;
  msg?: string;
  success?: boolean;
}

/** BizResponse«SearchSourceOrderDetailDTO» */
export interface BizResponseSearchSourceOrderDetailDTO {
  code?: string;
  data?: SearchSourceOrderDetailDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«SearchSourceOrderDetailRespDTO» */
export interface BizResponseSearchSourceOrderDetailRespDTO {
  code?: string;
  data?: SearchSourceOrderDetailRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«SearchSourceOrderEvaluation» */
export interface BizResponseSearchSourceOrderEvaluation {
  code?: string;
  data?: SearchSourceOrderEvaluation;
  msg?: string;
  success?: boolean;
}

/** BizResponse«SearchSourceOrderListItemDTO» */
export interface BizResponseSearchSourceOrderListItemDTO {
  code?: string;
  data?: SearchSourceOrderListItemDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«SearchSourceOrderRepurchaseApplySupplierPriceDTO» */
export interface BizResponseSearchSourceOrderRepurchaseApplySupplierPriceDTO {
  code?: string;
  data?: SearchSourceOrderRepurchaseApplySupplierPriceDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«SearchSourceOrderSupplierPriceDetailDTO» */
export interface BizResponseSearchSourceOrderSupplierPriceDetailDTO {
  code?: string;
  data?: SearchSourceOrderSupplierPriceDetailDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«SearchSourceOrderSupplierPriceDetailRespDTO» */
export interface BizResponseSearchSourceOrderSupplierPriceDetailRespDTO {
  code?: string;
  data?: SearchSourceOrderSupplierPriceDetailRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«SearchSourceOrderSupplierPriceListDTO» */
export interface BizResponseSearchSourceOrderSupplierPriceListDTO {
  code?: string;
  data?: SearchSourceOrderSupplierPriceListDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Void» */
export interface BizResponseVoid {
  code?: string;
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

/** PageInfo«SearchSourceOrderLog» */
export interface PageInfoSearchSourceOrderLog {
  /** @format int64 */
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: SearchSourceOrderLog[];
  /** @format int32 */
  navigateFirstPage?: number;
  /** @format int32 */
  navigateLastPage?: number;
  /** @format int32 */
  navigatePages?: number;
  navigatepageNums?: number[];
  /** @format int32 */
  nextPage?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  pages?: number;
  /** @format int32 */
  prePage?: number;
  /** @format int32 */
  size?: number;
  /** @format int64 */
  startRow?: number;
  /** @format int64 */
  total?: number;
}

/** PageResult«CombinationOrderRespDTO» */
export interface PageResultCombinationOrderRespDTO {
  /** @format int64 */
  current?: number;
  records?: CombinationOrderRespDTO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
  /** @format int64 */
  totalPage?: number;
}

/** PageResult«DeliverTaskRespDTO» */
export interface PageResultDeliverTaskRespDTO {
  /** @format int64 */
  current?: number;
  records?: DeliverTaskRespDTO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
  /** @format int64 */
  totalPage?: number;
}

/** PageResult«DeliveryReviewOrderPage» */
export interface PageResultDeliveryReviewOrderPage {
  /** @format int64 */
  current?: number;
  records?: DeliveryReviewOrderPage[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
  /** @format int64 */
  totalPage?: number;
}

/** PageResult«OnTheWayStockQueryResoDTO» */
export interface PageResultOnTheWayStockQueryResoDTO {
  /** @format int64 */
  current?: number;
  records?: OnTheWayStockQueryResoDTO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
  /** @format int64 */
  totalPage?: number;
}

/** PageResult«PageCustomerIdByProductCodeRespDTO» */
export interface PageResultPageCustomerIdByProductCodeRespDTO {
  /** @format int64 */
  current?: number;
  records?: PageCustomerIdByProductCodeRespDTO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
  /** @format int64 */
  totalPage?: number;
}

/** PageResult«SearchSourceOrderListItemDTO» */
export interface PageResultSearchSourceOrderListItemDTO {
  /** @format int64 */
  current?: number;
  records?: SearchSourceOrderListItemDTO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
  /** @format int64 */
  totalPage?: number;
}

/** PageResult«SearchSourceOrderPlatformBackendListItemDTO» */
export interface PageResultSearchSourceOrderPlatformBackendListItemDTO {
  /** @format int64 */
  current?: number;
  records?: SearchSourceOrderPlatformBackendListItemDTO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
  /** @format int64 */
  totalPage?: number;
}

/** PageResult«SearchSourceOrderRepurchaseApplySupplierPricePlatformListItemDTO» */
export interface PageResultSearchSourceOrderRepurchaseApplySupplierPricePlatformListItemDTO {
  /** @format int64 */
  current?: number;
  records?: SearchSourceOrderRepurchaseApplySupplierPricePlatformListItemDTO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
  /** @format int64 */
  totalPage?: number;
}

/** PageResult«SearchSourceOrderSkuVO» */
export interface PageResultSearchSourceOrderSkuVO {
  /** @format int64 */
  current?: number;
  records?: SearchSourceOrderSkuVO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
  /** @format int64 */
  totalPage?: number;
}

/** PageResult«SearchSourceOrderSupplierPricePlatformListItemDTO» */
export interface PageResultSearchSourceOrderSupplierPricePlatformListItemDTO {
  /** @format int64 */
  current?: number;
  records?: SearchSourceOrderSupplierPricePlatformListItemDTO[];
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
  /** @format int64 */
  totalPage?: number;
}

/** Page«AbnormalOrderRespDTO» */
export interface PageAbnormalOrderRespDTO {
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
  records?: AbnormalOrderRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«AbnormalOrder» */
export interface PageAbnormalOrder {
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
  records?: AbnormalOrder[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CartItemDTO» */
export interface PageCartItemDTO {
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
  records?: CartItemDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CombinationProductRespDTO» */
export interface PageCombinationProductRespDTO {
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
  records?: CombinationProductRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerPlatformOrderRespDTO» */
export interface PageCustomerPlatformOrderRespDTO {
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
  records?: CustomerPlatformOrderRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerSearchPlatformOrderItemRespDTO» */
export interface PageCustomerSearchPlatformOrderItemRespDTO {
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
  records?: CustomerSearchPlatformOrderItemRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerShopIngredientsRespDTO» */
export interface PageCustomerShopIngredientsRespDTO {
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
  records?: CustomerShopIngredientsRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«DeliveryAbnormalOrderPageDTO» */
export interface PageDeliveryAbnormalOrderPageDTO {
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
  records?: DeliveryAbnormalOrderPageDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«IngredientsAutoQuoteDTO» */
export interface PageIngredientsAutoQuoteDTO {
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
  records?: IngredientsAutoQuoteDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«ManagePlatformOrderItemRespDTO» */
export interface PageManagePlatformOrderItemRespDTO {
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
  records?: ManagePlatformOrderItemRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«ManagePlatformOrderRespDTO» */
export interface PageManagePlatformOrderRespDTO {
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
  records?: ManagePlatformOrderRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«MyInventoryRespDTO» */
export interface PageMyInventoryRespDTO {
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
  records?: MyInventoryRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«PlatformOrderItemLogInfoDTO» */
export interface PagePlatformOrderItemLogInfoDTO {
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
  records?: PlatformOrderItemLogInfoDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«ProductMeasureRespDTO» */
export interface PageProductMeasureRespDTO {
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
  records?: ProductMeasureRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«RegularizationRespDTO» */
export interface PageRegularizationRespDTO {
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
  records?: RegularizationRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«ReplenishPlanRespDTO» */
export interface PageReplenishPlanRespDTO {
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
  records?: ReplenishPlanRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«SearchSourceOrderRepurchaseApplyListItemDTO» */
export interface PageSearchSourceOrderRepurchaseApplyListItemDTO {
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
  records?: SearchSourceOrderRepurchaseApplyListItemDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«SearchSourceOrderRepurchaseApplyPlatformListItemDTO» */
export interface PageSearchSourceOrderRepurchaseApplyPlatformListItemDTO {
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
  records?: SearchSourceOrderRepurchaseApplyPlatformListItemDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«ShopProductSkuRespDTO» */
export interface PageShopProductSkuRespDTO {
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
  records?: ShopProductSkuRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** 组合商品子商品库存 */
export interface _ {
  /**
   * 质检库存可用数
   * @format int32
   */
  remainCombinationQuantity?: number;
  /** 店铺SKU */
  shopProductSku?: string;
  /**
   * 成品库存可用数
   * @format int32
   */
  stockNum?: number;
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
      baseURL: axiosConfig.baseURL || "//master-gateway.theckb.com:443/order",
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
 * @baseUrl //master-gateway.theckb.com:443/order
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
  abnormalOrder = {
    /**
     * No description
     *
     * @tags 异常订单（前台）
     * @name AfterSalesHandling
     * @summary 售后处理
     * @request POST:/abnormalOrder/afterSalesHandling
     */
    afterSalesHandling: (reqDTO: AfterSalesHandlingReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/abnormalOrder/afterSalesHandling`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 异常订单（前台）
     * @name BatchSaveAbnormalOrder
     * @summary 保存异常订单
     * @request POST:/abnormalOrder/batchSaveAbnormalOrder
     */
    batchSaveAbnormalOrder: (reqDTO: CancelAbnormalOrderReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/abnormalOrder/batchSaveAbnormalOrder`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 异常订单（前台）
     * @name CountAbnormalOrderCount
     * @summary 异常订单数据统计（异常订单+待运输确认订单）
     * @request GET:/abnormalOrder/countAbnormalOrderCount
     */
    countAbnormalOrderCount: (params: RequestParams = {}) =>
      this.request<BizResponseDeliveryAbnormalOrderCount, any>({
        path: `/abnormalOrder/countAbnormalOrderCount`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 异常订单（前台）
     * @name CountDeliveryAbnormalOrderCount
     * @summary 待运输数量统计
     * @request GET:/abnormalOrder/countDeliveryAbnormalOrderCount
     */
    countDeliveryAbnormalOrderCount: (params: RequestParams = {}) =>
      this.request<BizResponseDeliveryAbnormalOrderCount, any>({
        path: `/abnormalOrder/countDeliveryAbnormalOrderCount`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 异常订单（前台）
     * @name DeliveryAfterSales
     * @summary deliveryAfterSales
     * @request POST:/abnormalOrder/deliveryAfterSales
     */
    deliveryAfterSales: (reqDTO: DeliveryAfterSalesReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/abnormalOrder/deliveryAfterSales`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 异常订单（前台）
     * @name ExportAfterSalesOrder
     * @summary 导出售后订单
     * @request POST:/abnormalOrder/exportAfterSalesOrder
     */
    exportAfterSalesOrder: (reqDTO: ExportAbnormalOrderReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/abnormalOrder/exportAfterSalesOrder`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 异常订单（前台）
     * @name FinanceAudit
     * @summary financeAudit
     * @request POST:/abnormalOrder/financeAudit
     */
    financeAudit: (reqDTO: AbnormalOrderAuditReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/abnormalOrder/financeAudit`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 异常订单（前台）
     * @name GetAbnormalOrderByBizId
     * @summary getAbnormalOrderByBizId
     * @request GET:/abnormalOrder/getAbnormalOrderByBizId
     */
    getAbnormalOrderByBizId: (
      query: {
        /** bizId */
        bizId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseObject, any>({
        path: `/abnormalOrder/getAbnormalOrderByBizId`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 异常订单（前台）
     * @name PageAbnormalOrder
     * @summary 分页列表异常订单
     * @request POST:/abnormalOrder/pageAbnormalOrder
     */
    pageAbnormalOrder: (pageDTO: PageAbnormalOrderReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageAbnormalOrder, any>({
        path: `/abnormalOrder/pageAbnormalOrder`,
        method: "POST",
        body: pageDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 异常订单（前台）
     * @name PageAbnormalOrderApp
     * @summary 分页列表异常订单
     * @request POST:/abnormalOrder/pageAbnormalOrder/app
     */
    pageAbnormalOrderApp: (pageDTO: PageAbnormalOrderReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageAbnormalOrder, any>({
        path: `/abnormalOrder/pageAbnormalOrder/app`,
        method: "POST",
        body: pageDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 异常订单（前台）
     * @name PageDeliveryAbnormalOrder
     * @summary 分页获取待确认运输方式
     * @request POST:/abnormalOrder/pageDeliveryAbnormalOrder
     */
    pageDeliveryAbnormalOrder: (pageDTO: PageAbnormalWaitProcessOrderReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageDeliveryAbnormalOrderPageDTO, any>({
        path: `/abnormalOrder/pageDeliveryAbnormalOrder`,
        method: "POST",
        body: pageDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 异常订单（前台）
     * @name ProcessAbnormalDeliveryOrder
     * @summary 处理待确认发货异常订单
     * @request POST:/abnormalOrder/processAbnormalDeliveryOrder
     */
    processAbnormalDeliveryOrder: (
      deliveryAbnormalOrderProcessReqDTO: DeliveryAbnormalOrderProcessReqDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListString, any>({
        path: `/abnormalOrder/processAbnormalDeliveryOrder`,
        method: "POST",
        body: deliveryAbnormalOrderProcessReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 异常订单（前台）
     * @name UpdateCancelProgress
     * @summary 修改取消进度
     * @request POST:/abnormalOrder/updateCancelProgress
     */
    updateCancelProgress: (reqDTO: CancelProgressReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/abnormalOrder/updateCancelProgress`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
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
  backDoor = {
    /**
     * No description
     *
     * @tags order-back-door-controller
     * @name CreateSytemOrder
     * @summary createSytemOrder
     * @request GET:/backDoor/createSytemOrder
     */
    createSytemOrder: (
      query?: {
        /** orderNo */
        orderNo?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/backDoor/createSytemOrder`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-back-door-controller
     * @name FixOemProductData
     * @summary fixOEMProductData
     * @request GET:/backDoor/fixOEMProductData
     */
    fixOemProductData: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/backDoor/fixOEMProductData`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-back-door-controller
     * @name FixRedisData
     * @summary fixRedisData
     * @request GET:/backDoor/fixRedisData
     */
    fixRedisData: (
      query?: {
        /** environment */
        environment?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/backDoor/fixRedisData`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  cart = {
    /**
     * No description
     *
     * @tags 购物车
     * @name AddCommontProduct
     * @summary 普通商品加入购物车
     * @request POST:/cart/add/commontProduct
     */
    addCommontProduct: (dto: AddCommonProductReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/cart/add/commontProduct`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name AddPluginProduct
     * @summary 插件商品加入购物车
     * @request POST:/cart/add/pluginProduct
     */
    addPluginProduct: (dto: AddCommonProductReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/cart/add/pluginProduct`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name AddIngredientsProduct
     * @summary 批量添加辅料至购物车
     * @request POST:/cart/addIngredientsProduct
     */
    addIngredientsProduct: (
      ingredientsProductAddCartList: IngredientsProductAddCartDTO[],
      params: RequestParams = {},
    ) =>
      this.request<BizResponseObject, any>({
        path: `/cart/addIngredientsProduct`,
        method: "POST",
        body: ingredientsProductAddCartList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name AdditionList
     * @summary 取得购物车附加项列表
     * @request GET:/cart/addition/list
     */
    additionList: (
      query: {
        /**
         * cartId
         * @format int64
         */
        cartId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCartAdditionRespDTO, any>({
        path: `/cart/addition/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name BatchAddProduct
     * @summary 批量添加我的商品至购物车
     * @request POST:/cart/batchAddProduct
     */
    batchAddProduct: (dtoList: BatchAddProductDTO[], params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/cart/batchAddProduct`,
        method: "POST",
        body: dtoList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name BatchQueryStock
     * @summary 批量查询可用库存
     * @request POST:/cart/batchQueryStock
     */
    batchQueryStock: (dto: BatchQueryStockReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBatchQueryStockRespDTO, any>({
        path: `/cart/batchQueryStock`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name BatchUpdateAddition
     * @summary 批量修改购物车附加项(普通商品)
     * @request POST:/cart/batchUpdate/addition
     */
    batchUpdateAddition: (dto: BatchUpdateCartAdditionReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/cart/batchUpdate/addition`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name CanUseOnTheWayStock
     * @summary 是否支持在途库存
     * @request GET:/cart/canUseOnTheWayStock
     */
    canUseOnTheWayStock: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/cart/canUseOnTheWayStock`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name CartCommodityStatistics
     * @summary 购物车商品统计
     * @request GET:/cart/cartCommodityStatistics
     */
    cartCommodityStatistics: (params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/cart/cartCommodityStatistics`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name CheckFirstAddCat
     * @summary 校验是否首次加入购物车
     * @request GET:/cart/checkFirstAddCat
     */
    checkFirstAddCat: (params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/cart/checkFirstAddCat`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name CheckGoodsFirstAddCat
     * @summary 购物车商品存在性检查
     * @request POST:/cart/checkGoodsFirstAddCat
     */
    checkGoodsFirstAddCat: (checkCartSku: CheckCartSkuDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/cart/checkGoodsFirstAddCat`,
        method: "POST",
        body: checkCartSku,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name CreateOrder
     * @summary 购物车下单
     * @request POST:/cart/create/order
     */
    createOrder: (dto: CreateOrderReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListCreateOrderRespDTO, any>({
        path: `/cart/create/order`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name CreateOrderPreCheck
     * @summary 下单前置校验接口
     * @request POST:/cart/createOrderPreCheck
     */
    createOrderPreCheck: (createOrderPreCheckDTO: CreateOrderPreCheckDTO, params: RequestParams = {}) =>
      this.request<BizResponseCreateOrderPreCheckRespDTO, any>({
        path: `/cart/createOrderPreCheck`,
        method: "POST",
        body: createOrderPreCheckDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name Delete
     * @summary 删除购物车商品
     * @request POST:/cart/delete
     */
    delete: (dto: DeleteCartReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/cart/delete`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name GetClearanceReminder
     * @summary 是否需要通关提醒
     * @request GET:/cart/getClearanceReminder
     */
    getClearanceReminder: (
      query?: {
        /**
         * 类型 1-购物车 2-国际发货
         * @format int32
         */
        type?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/cart/getClearanceReminder`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name GetCurrentCartList
     * @summary 最近加入购物车列表
     * @request GET:/cart/getCurrentCartList
     */
    getCurrentCartList: (params: RequestParams = {}) =>
      this.request<BizResponseGetCurrentCartListRespDTO, any>({
        path: `/cart/getCurrentCartList`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name GetD2CDirectOrderAmountLimit
     * @summary 获取当前用户d2c直发单下单金额限制
     * @request GET:/cart/getD2CDirectOrderAmountLimit
     */
    getD2CDirectOrderAmountLimit: (params: RequestParams = {}) =>
      this.request<BizResponseInt, any>({
        path: `/cart/getD2CDirectOrderAmountLimit`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name List
     * @summary 购物车列表
     * @request GET:/cart/list
     */
    list: (
      query?: {
        /**
         * orderType
         * @format int32
         */
        orderType?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCartGroupItemDTO, any>({
        path: `/cart/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name MarkClearanceReminder
     * @summary 标记韩国通关提醒过期时间
     * @request POST:/cart/markClearanceReminder
     */
    markClearanceReminder: (dto: MarkClearanceReminderDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/cart/markClearanceReminder`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name Page
     * @summary 购物车分页
     * @request POST:/cart/page
     */
    page: (reqDTO: CartReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCartItemDTO, any>({
        path: `/cart/page`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name QueryCombinationSubItemStock
     * @summary 组合商品子商品库存查询
     * @request POST:/cart/queryCombinationSubItemStock
     */
    queryCombinationSubItemStock: (cartList: number[], params: RequestParams = {}) =>
      this.request<BizResponseList, any>({
        path: `/cart/queryCombinationSubItemStock`,
        method: "POST",
        body: cartList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name Replace
     * @summary 购物车替换成不同sku
     * @request POST:/cart/replace
     */
    replace: (dto: ReplaceCartReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/cart/replace`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name Test
     * @summary 购物车列表
     * @request GET:/cart/test
     */
    test: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCartGroupItemDTO, any>({
        path: `/cart/test`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name UpdateAddition
     * @summary 修改购物车附加项(普通商品)
     * @request POST:/cart/update/addition
     */
    updateAddition: (dto: UpdateCartAdditionReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/cart/update/addition`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name UpdateCombinationProductItemAddition
     * @summary 修改购物车附加项(组合商品-子商品)
     * @request POST:/cart/update/combinationProductItemAddition
     */
    updateCombinationProductItemAddition: (reqDTO: UpdateCombinationCartAdditionReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/cart/update/combinationProductItemAddition`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name UpdateSellQuantity
     * @summary 修改购物车中下单数量
     * @request POST:/cart/update/sell/quantity
     */
    updateSellQuantity: (dto: UpdateCartOrderQuantityReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseCartItemDTO, any>({
        path: `/cart/update/sell/quantity`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 购物车
     * @name UpdateCustomerProductMsku
     * @summary 更新购物车客户商品sku
     * @request POST:/cart/updateCustomerProductMsku
     */
    updateCustomerProductMsku: (dto: UpdateCustomerProductMskuReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/cart/updateCustomerProductMsku`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),
  };
  combination = {
    /**
     * No description
     *
     * @tags combination-order-controller
     * @name OrderQueryCombinationOrder
     * @summary queryCombinationOrder
     * @request POST:/combination/order/queryCombinationOrder
     */
    orderQueryCombinationOrder: (reqDTO: CombinationOrderQueryReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageResultCombinationOrderRespDTO, any>({
        path: `/combination/order/queryCombinationOrder`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 组合商品
     * @name ProductAddCart
     * @summary 组合商品添加到购物车
     * @request POST:/combination/product/addCart
     */
    productAddCart: (reqDTO: CombinationProductAddCartReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/combination/product/addCart`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 组合商品
     * @name ProductAdditionEdit
     * @summary 编辑组合商品附加项
     * @request POST:/combination/product/additionEdit
     */
    productAdditionEdit: (dto: CreateCombinationProductDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/combination/product/additionEdit`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 组合商品
     * @name ProductCreateAndAddCart
     * @summary 创建组合商品并添加到购物车
     * @request POST:/combination/product/createAndAddCart
     */
    productCreateAndAddCart: (dto: CreateCombinationProductDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/combination/product/createAndAddCart`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 组合商品
     * @name ProductCreateOrEdit
     * @summary 创建/编辑组合商品
     * @request POST:/combination/product/createOrEdit
     */
    productCreateOrEdit: (dto: CreateCombinationProductDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/combination/product/createOrEdit`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 组合商品
     * @name ProductListByCombinationProductSku
     * @summary 查询组合商品信息
     * @request POST:/combination/product/listByCombinationProductSku
     */
    productListByCombinationProductSku: (queryDTO: CombinationProductQueryDTO, params: RequestParams = {}) =>
      this.request<BizResponseListCombinationProductFeignRespDTO, any>({
        path: `/combination/product/listByCombinationProductSku`,
        method: "POST",
        body: queryDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 组合商品
     * @name ProductPage
     * @summary 组合商品分页
     * @request POST:/combination/product/page
     */
    productPage: (reqDTO: CombinationProductReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCombinationProductRespDTO, any>({
        path: `/combination/product/page`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 组合商品
     * @name ProductSelectByCombinationProductSku
     * @summary 根据组合商品sku获取信息
     * @request GET:/combination/product/selectByCombinationProductSku
     */
    productSelectByCombinationProductSku: (
      query: {
        /** combinationProductSku */
        combinationProductSku: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCombinationProductFeignRespDTO, any>({
        path: `/combination/product/selectByCombinationProductSku`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 组合商品
     * @name ProductSelectByCombinationProductSkuDetail
     * @summary 组合商品明细信息
     * @request POST:/combination/product/selectByCombinationProductSkuDetail
     */
    productSelectByCombinationProductSkuDetail: (
      query?: {
        /** 组合商品SKU */
        combinationProductSku?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCombinationProductRespDTO, any>({
        path: `/combination/product/selectByCombinationProductSkuDetail`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 组合商品
     * @name ProductUpdateCustomerProductMsku
     * @summary 修改客户商品sku
     * @request POST:/combination/product/updateCustomerProductMsku
     */
    productUpdateCustomerProductMsku: (dto: UpdateCustomerProductMskuDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/combination/product/updateCustomerProductMsku`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),
  };
  customer = {
    /**
     * No description
     *
     * @tags 附加项组合
     * @name AdditionGroupCreateAdditionGroup
     * @summary 创建附加项组合
     * @request GET:/customer/additionGroup/createAdditionGroup
     */
    additionGroupCreateAdditionGroup: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/customer/additionGroup/createAdditionGroup`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单地址表接口
     * @name PlatformOrderAddressListPlatformOrderDeliveryAddress
     * @summary listPlatformOrderDeliveryAddress
     * @request GET:/customer/platformOrder/address/listPlatformOrderDeliveryAddress
     */
    platformOrderAddressListPlatformOrderDeliveryAddress: (
      query: {
        /** platformOrderNos */
        platformOrderNos: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListPlatformOrderDeliveryAddressRespDTO, any>({
        path: `/customer/platformOrder/address/listPlatformOrderDeliveryAddress`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderB2BPlatformOrderDetail
     * @summary B2B平台订单详情
     * @request GET:/customer/platformOrder/b2bPlatformOrderDetail
     */
    platformOrderB2BPlatformOrderDetail: (
      query?: {
        /**
         * 平台订单表id
         * @format int64
         */
        platformOrderId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseB2BPlatformOrderDetailRespDTO, any>({
        path: `/customer/platformOrder/b2bPlatformOrderDetail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderBatchPriorityShipping
     * @summary 批量优先发货
     * @request POST:/customer/platformOrder/batchPriorityShipping
     */
    platformOrderBatchPriorityShipping: (reqDTO: BatchPriorityReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/customer/platformOrder/batchPriorityShipping`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderBillingFeeDetails
     * @summary 结算费用详情
     * @request GET:/customer/platformOrder/billingFeeDetails
     */
    platformOrderBillingFeeDetails: (
      query?: {
        /**
         * 平台订单表id
         * @format int64
         */
        platformOrderId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListBillingFeeDetailsRespDTO, any>({
        path: `/customer/platformOrder/billingFeeDetails`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderCancelDelivery
     * @summary cancelDelivery
     * @request POST:/customer/platformOrder/cancelDelivery
     */
    platformOrderCancelDelivery: (reqDTO: CancelDeliveryReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/customer/platformOrder/cancelDelivery`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderConfigDeliveryIntercept
     * @summary 开启/关闭发货拦截
     * @request POST:/customer/platformOrder/configDeliveryIntercept
     */
    platformOrderConfigDeliveryIntercept: (reqDTO: ConfigDeliveryInterceptReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/customer/platformOrder/configDeliveryIntercept`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderCreateOrder
     * @summary createOrder
     * @request POST:/customer/platformOrder/createOrder
     */
    platformOrderCreateOrder: (shopOrderCreateOrderDTO: ShopOrderCreateOrderDTO, params: RequestParams = {}) =>
      this.request<BizResponseCreateOrderRespDTO, any>({
        path: `/customer/platformOrder/createOrder`,
        method: "POST",
        body: shopOrderCreateOrderDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderDetail
     * @summary D2C平台订单详情
     * @request GET:/customer/platformOrder/detail
     */
    platformOrderDetail: (
      query?: {
        /**
         * 平台订单表id
         * @format int64
         */
        platformOrderId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseGetPlatformOrderDetailRespDTO, any>({
        path: `/customer/platformOrder/detail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderExistPriorityShippingJob
     * @summary 获取是否存在优先发货任务
     * @request GET:/customer/platformOrder/existPriorityShippingJob
     */
    platformOrderExistPriorityShippingJob: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/customer/platformOrder/existPriorityShippingJob`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderExportQingQiuShu
     * @summary 下载请求书
     * @request GET:/customer/platformOrder/exportQingQiuShu
     */
    platformOrderExportQingQiuShu: (
      query?: {
        /** 平台订单编号 */
        platformOrderNo?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/customer/platformOrder/exportQingQiuShu`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderGetCustomerPlatformOrderList
     * @summary getCustomerPlatformOrderList
     * @request POST:/customer/platformOrder/getCustomerPlatformOrderList
     */
    platformOrderGetCustomerPlatformOrderList: (platformOrderNo: string[], params: RequestParams = {}) =>
      this.request<BizResponseListCustomerPlatformOrderRespDTO, any>({
        path: `/customer/platformOrder/getCustomerPlatformOrderList`,
        method: "POST",
        body: platformOrderNo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderGetMaxApplyAmount
     * @summary getMaxApplyAmount
     * @request POST:/customer/platformOrder/getMaxApplyAmount
     */
    platformOrderGetMaxApplyAmount: (reqDTO: QueryStageInfoReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseGetMaxApplyAmountRespDTO, any>({
        path: `/customer/platformOrder/getMaxApplyAmount`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderListInternationalityLogisticsInfoDetail
     * @summary 国际物流信息详情
     * @request GET:/customer/platformOrder/listInternationalityLogisticsInfoDetail
     */
    platformOrderListInternationalityLogisticsInfoDetail: (
      query?: {
        /**
         * 平台订单表id
         * @format int64
         */
        platformOrderId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListInternationalityLogisticsInfoDetailRespDTO, any>({
        path: `/customer/platformOrder/listInternationalityLogisticsInfoDetail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderOrderSettlement
     * @summary 订单接口接口通知
     * @request POST:/customer/platformOrder/orderSettlement
     */
    platformOrderOrderSettlement: (
      walletChangeResultEventDTO: WalletChangeResultEventDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponseObject, any>({
        path: `/customer/platformOrder/orderSettlement`,
        method: "POST",
        body: walletChangeResultEventDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderPage
     * @summary 查询平台订单分页
     * @request POST:/customer/platformOrder/page
     */
    platformOrderPage: (dto: GetCustomerPlatformOrderPageReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerPlatformOrderRespDTO, any>({
        path: `/customer/platformOrder/page`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderPartPay
     * @summary 分期支付
     * @request POST:/customer/platformOrder/partPay
     */
    platformOrderPartPay: (dto: PartPayReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/customer/platformOrder/partPay`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderPay
     * @summary 去支付
     * @request POST:/customer/platformOrder/pay
     */
    platformOrderPay: (dto: PlatformOrderPayReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseOrderPayRespDTO, any>({
        path: `/customer/platformOrder/pay`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderPayStage
     * @summary payStage
     * @request POST:/customer/platformOrder/payStage
     */
    platformOrderPayStage: (reqDTO: PayStageReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/customer/platformOrder/payStage`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderPriorityShipping
     * @summary 优先发货
     * @request POST:/customer/platformOrder/priorityShipping
     */
    platformOrderPriorityShipping: (reqDTOList: PriorityShippingReqDTO[], params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/customer/platformOrder/priorityShipping`,
        method: "POST",
        body: reqDTOList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderPurchaseAbnormalCancel
     * @summary 采购异常取消
     * @request POST:/customer/platformOrder/purchaseAbnormalCancel
     */
    platformOrderPurchaseAbnormalCancel: (reqDTO: PurchaseAbnormalCancelReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/customer/platformOrder/purchaseAbnormalCancel`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderQueryPayStage
     * @summary queryPayStage
     * @request POST:/customer/platformOrder/queryPayStage
     */
    platformOrderQueryPayStage: (reqDTO: PayStageReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseQueryPayStageRespDTO, any>({
        path: `/customer/platformOrder/queryPayStage`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderQueryStageInfo
     * @summary queryStageInfo
     * @request POST:/customer/platformOrder/queryStageInfo
     */
    platformOrderQueryStageInfo: (reqDTO: QueryStageInfoReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseQueryStageInfoRespDTO, any>({
        path: `/customer/platformOrder/queryStageInfo`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderQuerySubscriptionShopify
     * @summary 查询商户是否存在shopify订单
     * @request POST:/customer/platformOrder/querySubscriptionShopify
     */
    platformOrderQuerySubscriptionShopify: (params: RequestParams = {}) =>
      this.request<BizResponseQuerySubscriptionShopifyRespDTO, any>({
        path: `/customer/platformOrder/querySubscriptionShopify`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderRepurchase
     * @summary 复购/加购
     * @request POST:/customer/platformOrder/repurchase
     */
    platformOrderRepurchase: (reqDTO: RepurchaseReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/customer/platformOrder/repurchase`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderSelectOrderCount
     * @summary selectOrderCount
     * @request GET:/customer/platformOrder/selectOrderCount
     */
    platformOrderSelectOrderCount: (
      query: {
        /** customerShopIdSet */
        customerShopIdSet: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListShopPlatformOrderInfoDTO, any>({
        path: `/customer/platformOrder/selectOrderCount`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderSettlementExport
     * @summary 导出请求书
     * @request GET:/customer/platformOrder/settlement/export
     */
    platformOrderSettlementExport: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/customer/platformOrder/settlement/export`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderShopOrderCount
     * @summary 获取用户店铺订单数
     * @request GET:/customer/platformOrder/shopOrderCount
     */
    platformOrderShopOrderCount: (params: RequestParams = {}) =>
      this.request<BizResponseLong, any>({
        path: `/customer/platformOrder/shopOrderCount`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderShopPlatformOrderInfo
     * @summary shopPlatformOrderInfo
     * @request GET:/customer/platformOrder/shopPlatformOrderInfo
     */
    platformOrderShopPlatformOrderInfo: (
      query: {
        /** customerShopIdSet */
        customerShopIdSet: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListShopPlatformOrderInfoDTO, any>({
        path: `/customer/platformOrder/shopPlatformOrderInfo`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderTest
     * @summary test
     * @request GET:/customer/platformOrder/test
     */
    platformOrderTest: (
      query: {
        /**
         * id
         * @format int64
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/customer/platformOrder/test`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderUpdateCustomerOrderNo
     * @summary 编辑订单标题
     * @request POST:/customer/platformOrder/updateCustomerOrderNo
     */
    platformOrderUpdateCustomerOrderNo: (dto: UpdateCustomerOrderNoReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseVoid, any>({
        path: `/customer/platformOrder/updateCustomerOrderNo`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderUpdateSynLogisticsNo
     * @summary 修改同步物流开关状态
     * @request POST:/customer/platformOrder/updateSynLogisticsNo
     */
    platformOrderUpdateSynLogisticsNo: (dto: UpdateSynLogisticsNoReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/customer/platformOrder/updateSynLogisticsNo`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（前台）
     * @name PlatformOrderUserApplyCancel
     * @summary 用户申请取消
     * @request POST:/customer/platformOrder/userApplyCancel
     */
    platformOrderUserApplyCancel: (reqDTO: UserApplyCancelReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/customer/platformOrder/userApplyCancel`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemCombinationInfo
     * @summary 查询订单组合商品-组合详情
     * @request GET:/customer/platformOrderItem/combinationInfo
     */
    platformOrderItemCombinationInfo: (
      query?: {
        /**
         * 平台订单详情表id
         * @format int64
         */
        platformOrderItemId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseOrderCombinationProductRespDTO, any>({
        path: `/customer/platformOrderItem/combinationInfo`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemContinueStockWare
     * @summary continueStockWare
     * @request POST:/customer/platformOrderItem/continueStockWare
     */
    platformOrderItemContinueStockWare: (reqDTO: ContinueStockWareReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/customer/platformOrderItem/continueStockWare`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemExportOrderCommodityInfo
     * @summary 导出订单商品信息
     * @request GET:/customer/platformOrderItem/exportOrderCommodityInfo
     */
    platformOrderItemExportOrderCommodityInfo: (
      query?: {
        /** @format date-time */
        createEndTime?: string;
        /** @format date-time */
        createStartTime?: string;
        customerOrderNo?: string;
        customerOrderNoList?: string[];
        /** @format int64 */
        customerShopId?: number;
        /**
         * 是否发货
         * @format int32
         */
        deliverFlag?: number;
        /** @format date-time */
        deliverTimeEnd?: string;
        /** @format date-time */
        deliverTimeStart?: string;
        /** @format int32 */
        interceptCancelType?: number;
        /** @format int32 */
        interceptFlag?: number;
        orderName?: string;
        orderNameList?: string[];
        /** @format int32 */
        orderSource?: number;
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        platformOrderIds?: number[];
        platformOrderNo?: string;
        platformOrderNoList?: string[];
        platformOrderSettleStatus?: string;
        /** @format int32 */
        platformOrderStatus?: number;
        /** @format int32 */
        platformOrderType?: number;
        /** @format int32 */
        preferDeliverFlag?: number;
        receiveName?: string;
        /** @format int32 */
        startIndex?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/customer/platformOrderItem/exportOrderCommodityInfo`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemFinishToRemainCombinationQuantity
     * @summary 完结-子商品剩余组合数
     * @request POST:/customer/platformOrderItem/finishToRemainCombinationQuantity
     */
    platformOrderItemFinishToRemainCombinationQuantity: (reqDTO: SystemOrderItemReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/customer/platformOrderItem/finishToRemainCombinationQuantity`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemGetAdditionalItemsInfo
     * @summary 获取附加项信息
     * @request GET:/customer/platformOrderItem/getAdditionalItemsInfo
     */
    platformOrderItemGetAdditionalItemsInfo: (
      query?: {
        /** 系统订单编号 */
        systemOrderNo?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListAdditionalItemsInfoRespDTO, any>({
        path: `/customer/platformOrderItem/getAdditionalItemsInfo`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemGetApiSku
     * @summary getApiSku
     * @request GET:/customer/platformOrderItem/getApiSku
     */
    platformOrderItemGetApiSku: (
      query: {
        /** platformOrderNo */
        platformOrderNo: string;
        /** productSku */
        productSku: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePlatformOrderApiSkuRespDTO, any>({
        path: `/customer/platformOrderItem/getApiSku`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemGetOrderDetail
     * @summary 查询平台订单详情列表
     * @request GET:/customer/platformOrderItem/getOrderDetail
     */
    platformOrderItemGetOrderDetail: (
      query?: {
        /**
         * 平台订单详情表id
         * @format int64
         */
        platformOrderItemId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerPlatformOrderItemRespDTO, any>({
        path: `/customer/platformOrderItem/getOrderDetail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemGetOrderItemSendNum
     * @summary getOrderItemSendNum
     * @request GET:/customer/platformOrderItem/getOrderItemSendNum
     */
    platformOrderItemGetOrderItemSendNum: (
      query: {
        /** systemOrderNo */
        systemOrderNo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseInt, any>({
        path: `/customer/platformOrderItem/getOrderItemSendNum`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemGetOrderItemStatusInfo
     * @summary 获取商品状态信息
     * @request POST:/customer/platformOrderItem/getOrderItemStatusInfo
     */
    platformOrderItemGetOrderItemStatusInfo: (systemOrderNos: string[], params: RequestParams = {}) =>
      this.request<BizResponseListOrderItemStatusInfoDTO, any>({
        path: `/customer/platformOrderItem/getOrderItemStatusInfo`,
        method: "POST",
        body: systemOrderNos,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemGetPlatformOrderItemByPlatformOrderId
     * @summary getPlatformOrderItemByPlatformOrderId
     * @request GET:/customer/platformOrderItem/getPlatformOrderItemByPlatformOrderId
     */
    platformOrderItemGetPlatformOrderItemByPlatformOrderId: (
      query: {
        /**
         * platformOrderId
         * @format int64
         */
        platformOrderId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListPlatformOrderItemRespDTO, any>({
        path: `/customer/platformOrderItem/getPlatformOrderItemByPlatformOrderId`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemGetPlatformOrderItemList
     * @summary getPlatformOrderItemList
     * @request GET:/customer/platformOrderItem/getPlatformOrderItemList
     */
    platformOrderItemGetPlatformOrderItemList: (
      query: {
        /**
         * customerShopId
         * @format int64
         */
        customerShopId: number;
        /** productSkuList */
        productSkuList: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListPlatformOrderItemRespDTO, any>({
        path: `/customer/platformOrderItem/getPlatformOrderItemList`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemGetProductMaterial
     * @summary 获取商品材质
     * @request GET:/customer/platformOrderItem/getProductMaterial
     */
    platformOrderItemGetProductMaterial: (
      query?: {
        /** 系统订单编号 */
        systemOrderNo?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListProductMaterialRespDTO, any>({
        path: `/customer/platformOrderItem/getProductMaterial`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemGetProductSpecialCheck
     * @summary getProductSpecialCheck
     * @request GET:/customer/platformOrderItem/getProductSpecialCheck
     */
    platformOrderItemGetProductSpecialCheck: (
      query: {
        /** platformOrderNo */
        platformOrderNo: string;
        /** productSku */
        productSku: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseProductSpecialCheckRespDTO, any>({
        path: `/customer/platformOrderItem/getProductSpecialCheck`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemItemDiscount
     * @summary itemDiscount
     * @request POST:/customer/platformOrderItem/itemDiscount
     */
    platformOrderItemItemDiscount: (itemDiscountReqDTOS: ItemDiscountReqDTO[], params: RequestParams = {}) =>
      this.request<BizResponseListPlatformOrderItemDiscountDTO, any>({
        path: `/customer/platformOrderItem/itemDiscount`,
        method: "POST",
        body: itemDiscountReqDTOS,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemList
     * @summary 查询平台订单详情列表
     * @request GET:/customer/platformOrderItem/list
     */
    platformOrderItemList: (
      query?: {
        /**
         * 平台订单表id
         * @format int64
         */
        platformOrderId?: number;
        /**
         * 来源 1-列表展示 2-申请取消
         * @format int32
         */
        source?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCustomerPlatformOrderItemRespDTO, any>({
        path: `/customer/platformOrderItem/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemListAdditionalItemsInfo
     * @summary 批量获取附加项信息
     * @request GET:/customer/platformOrderItem/listAdditionalItemsInfo
     */
    platformOrderItemListAdditionalItemsInfo: (
      query?: {
        /** 系统订单编号 */
        systemOrderNos?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListAdditionalItemsInfoRespDTO, any>({
        path: `/customer/platformOrderItem/listAdditionalItemsInfo`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemListPlatformOrderItemAdditionSettle
     * @summary 查询平台订单详情结算列表-附加项
     * @request GET:/customer/platformOrderItem/listPlatformOrderItemAdditionSettle
     */
    platformOrderItemListPlatformOrderItemAdditionSettle: (
      query?: {
        /** 直行便订单编号 */
        platformOrderNo?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListPlatformOrderItemSettleDTO, any>({
        path: `/customer/platformOrderItem/listPlatformOrderItemAdditionSettle`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemListPlatformOrderItemSettle
     * @summary 查询平台订单详情结算列表-商品代金
     * @request GET:/customer/platformOrderItem/listPlatformOrderItemSettle
     */
    platformOrderItemListPlatformOrderItemSettle: (
      query?: {
        /** 直行便订单编号 */
        platformOrderNo?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListPlatformOrderItemSettleDTO, any>({
        path: `/customer/platformOrderItem/listPlatformOrderItemSettle`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemListSpecialCheckRequirement
     * @summary 批量根据系统订单号获取特殊质检要求
     * @request GET:/customer/platformOrderItem/listSpecialCheckRequirement
     */
    platformOrderItemListSpecialCheckRequirement: (
      query?: {
        /** 系统订单号 */
        systemOrderNos?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListSpecialCheckInfoDTO, any>({
        path: `/customer/platformOrderItem/listSpecialCheckRequirement`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemListSystemOrderNoByShopProductSku
     * @summary 根据系统订单号和店铺sku 查附加项
     * @request POST:/customer/platformOrderItem/listSystemOrderNoByShopProductSku
     */
    platformOrderItemListSystemOrderNoByShopProductSku: (
      reqDTO: PlatformOrderItemAdditionReqDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListSystemOrderItemAdditionRespDTO, any>({
        path: `/customer/platformOrderItem/listSystemOrderNoByShopProductSku`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemNotifySystemOrderPurchasing
     * @summary 通知系统订单采购中
     * @request POST:/customer/platformOrderItem/notifySystemOrderPurchasing
     */
    platformOrderItemNotifySystemOrderPurchasing: (systemOrderNoList: string[], params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/customer/platformOrderItem/notifySystemOrderPurchasing`,
        method: "POST",
        body: systemOrderNoList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemOrderSettlement
     * @summary 订单结算
     * @request GET:/customer/platformOrderItem/orderSettlement
     * @deprecated
     */
    platformOrderItemOrderSettlement: (
      query?: {
        /** 平台订单号 */
        platformOrderNo?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/customer/platformOrderItem/orderSettlement`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemPageCustomerIdByProductCode
     * @summary 根据客户id查询平台商品SPU
     * @request POST:/customer/platformOrderItem/pageCustomerIdByProductCode
     */
    platformOrderItemPageCustomerIdByProductCode: (
      reqDTO: PageCustomerIdByProductCodeReqDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageResultPageCustomerIdByProductCodeRespDTO, any>({
        path: `/customer/platformOrderItem/pageCustomerIdByProductCode`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemProductDetails
     * @summary 商品详情
     * @request POST:/customer/platformOrderItem/productDetails
     */
    platformOrderItemProductDetails: (reqDTO: ProductDetailsReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseProductDetailsRespDTO, any>({
        path: `/customer/platformOrderItem/productDetails`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemQueryItemExpressInfo
     * @summary 查询商品采购运输详情
     * @request GET:/customer/platformOrderItem/queryItemExpressInfo
     */
    platformOrderItemQueryItemExpressInfo: (
      query?: {
        /**
         * 平台订单明细表id
         * @format int64
         */
        platformOrderItemId?: number;
        /**
         * 请求来源 1-客户端（日文） 2-后台管理（中文）
         * @format int32
         */
        requestSource?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseQueryItemExpressesRespDTO, any>({
        path: `/customer/platformOrderItem/queryItemExpressInfo`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemReduceOrderItemExpressNum
     * @summary reduceOrderItemExpressNum
     * @request POST:/customer/platformOrderItem/reduceOrderItemExpressNum
     */
    platformOrderItemReduceOrderItemExpressNum: (statusDTO: OrderItemStatusDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/customer/platformOrderItem/reduceOrderItemExpressNum`,
        method: "POST",
        body: statusDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemRemainCombinationList
     * @summary 获取组合商品-子商品第一条可转结的数据
     * @request POST:/customer/platformOrderItem/remainCombinationList
     * @deprecated
     */
    platformOrderItemRemainCombinationList: (reqDTO: SystemOrderItemReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListRemainCombinationProductItemRespDTO, any>({
        path: `/customer/platformOrderItem/remainCombinationList`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemRemakeFreeze
     * @summary 重拍冻结
     * @request POST:/customer/platformOrderItem/remakeFreeze
     * @deprecated
     */
    platformOrderItemRemakeFreeze: (remakeFreezeDTO: RemakeFreezeDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/customer/platformOrderItem/remakeFreeze`,
        method: "POST",
        body: remakeFreezeDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemSearch
     * @summary 平台订单详情搜索
     * @request POST:/customer/platformOrderItem/search
     */
    platformOrderItemSearch: (dto: CustomerSearchPlatformOrderItemReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerSearchPlatformOrderItemRespDTO, any>({
        path: `/customer/platformOrderItem/search`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemSearchApp
     * @summary app商品搜索
     * @request POST:/customer/platformOrderItem/search/app
     */
    platformOrderItemSearchApp: (dto: CustomerSearchPlatformOrderItemReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerSearchPlatformOrderItemRespDTO, any>({
        path: `/customer/platformOrderItem/search/app`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemSelectOneByShopProductSku
     * @summary selectOneByShopProductSku
     * @request GET:/customer/platformOrderItem/selectOneByShopProductSku
     */
    platformOrderItemSelectOneByShopProductSku: (
      query: {
        /** shopProductSku */
        shopProductSku: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePlatformOrderItemRespDTO, any>({
        path: `/customer/platformOrderItem/selectOneByShopProductSku`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemSelectOneBySystemOrderNo
     * @summary selectOneBySystemOrderNo
     * @request GET:/customer/platformOrderItem/selectOneBySystemOrderNo
     */
    platformOrderItemSelectOneBySystemOrderNo: (
      query: {
        /** systemOrderNo */
        systemOrderNo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePlatformOrderItemRespDTO, any>({
        path: `/customer/platformOrderItem/selectOneBySystemOrderNo`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemSelectProductdeliveryAfterSalePrice
     * @summary 国际发货单申请售后获取售后价格
     * @request GET:/customer/platformOrderItem/selectProductdeliveryAfterSalePrice
     */
    platformOrderItemSelectProductdeliveryAfterSalePrice: (
      query?: {
        /** 店铺商品sku */
        shopProductSku?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBigdecimal, any>({
        path: `/customer/platformOrderItem/selectProductdeliveryAfterSalePrice`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemSelectSearchSourceSampleInfo
     * @summary selectSearchSourceSampleInfo
     * @request GET:/customer/platformOrderItem/selectSearchSourceSampleInfo
     */
    platformOrderItemSelectSearchSourceSampleInfo: (
      query: {
        /** 业务id集合 */
        bizIdSet: string;
        /** bizType(1:寻源单 2:寻源单复购单) */
        bizType: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListSearchSourceSampleInfoDTO, any>({
        path: `/customer/platformOrderItem/selectSearchSourceSampleInfo`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemSelectSpecialCheckInfo
     * @summary 根据系统订单号获取特殊质检要求
     * @request GET:/customer/platformOrderItem/selectSpecialCheckInfo
     */
    platformOrderItemSelectSpecialCheckInfo: (
      query?: {
        /** 系统订单号 */
        systemOrderNo?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePlatformOrderItemSpecialCheckInfo, any>({
        path: `/customer/platformOrderItem/selectSpecialCheckInfo`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemUpdateOrderItemExpressNum
     * @summary updateOrderItemExpressNum
     * @request POST:/customer/platformOrderItem/updateOrderItemExpressNum
     */
    platformOrderItemUpdateOrderItemExpressNum: (dtoList: OrderItemStatusDTO[], params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/customer/platformOrderItem/updateOrderItemExpressNum`,
        method: "POST",
        body: dtoList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name PlatformOrderItemUpdateOrderItemStatus
     * @summary 更新商品状态【更新发货数量】
     * @request POST:/customer/platformOrderItem/updateOrderItemStatus
     */
    platformOrderItemUpdateOrderItemStatus: (dtoList: OrderItemStatusDTO[], params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/customer/platformOrderItem/updateOrderItemStatus`,
        method: "POST",
        body: dtoList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情附加项(前台)
     * @name PlatformOrderItemAdditionListSystemOrderNoByShopProductSku
     * @summary 根据系统订单号和店铺sku 查附加项
     * @request POST:/customer/platformOrderItemAddition/listSystemOrderNoByShopProductSku
     */
    platformOrderItemAdditionListSystemOrderNoByShopProductSku: (
      reqDTO: PlatformOrderItemAdditionReqDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListSystemOrderItemAdditionRespDTO, any>({
        path: `/customer/platformOrderItemAddition/listSystemOrderNoByShopProductSku`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情附加项结算（前台）
     * @name PlatformOrderItemAdditionSettleListPlatformOrderItemAdditionSettle
     * @summary 查询平台订单详情结算列表-附加项
     * @request GET:/customer/platformOrderItemAdditionSettle/listPlatformOrderItemAdditionSettle
     */
    platformOrderItemAdditionSettleListPlatformOrderItemAdditionSettle: (
      query?: {
        /** 直行便订单编号 */
        platformOrderNo?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListPlatformOrderItemSettleDTO, any>({
        path: `/customer/platformOrderItemAdditionSettle/listPlatformOrderItemAdditionSettle`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情结算（前台）
     * @name PlatformOrderItemSettleListPlatformOrderItemSettle
     * @summary 查询平台订单详情结算列表-商品代金
     * @request GET:/customer/platformOrderItemSettle/listPlatformOrderItemSettle
     */
    platformOrderItemSettleListPlatformOrderItemSettle: (
      query?: {
        /** 直行便订单编号 */
        platformOrderNo?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListPlatformOrderItemSettleDTO, any>({
        path: `/customer/platformOrderItemSettle/listPlatformOrderItemSettle`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单付款流水（前台）
     * @name PlatformOrderPaymentFlowSavePlatformOrderPaymentFlow
     * @summary 保存平台订单付款流水
     * @request POST:/customer/platformOrderPaymentFlow/savePlatformOrderPaymentFlow
     */
    platformOrderPaymentFlowSavePlatformOrderPaymentFlow: (
      eventDTO: WalletChangeEventDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponseObject, any>({
        path: `/customer/platformOrderPaymentFlow/savePlatformOrderPaymentFlow`,
        method: "POST",
        body: eventDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单付款流水详情附加项（前台）
     * @name PlatformOrderPaymentFlowItemAdditionSavePlatformOrderPaymentFlowItemAddition
     * @summary 保存平台订单付款流水详情附加项
     * @request POST:/customer/platformOrderPaymentFlowItemAddition/savePlatformOrderPaymentFlowItemAddition
     */
    platformOrderPaymentFlowItemAdditionSavePlatformOrderPaymentFlowItemAddition: (
      eventDTO: AdditionEventDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponseObject, any>({
        path: `/customer/platformOrderPaymentFlowItemAddition/savePlatformOrderPaymentFlowItemAddition`,
        method: "POST",
        body: eventDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单结算（前台）
     * @name PlatformOrderSettleSelectCombinationProductAdditionSettleDetail
     * @summary selectCombinationProductAdditionSettleDetail
     * @request GET:/customer/platformOrderSettle/selectCombinationProductAdditionSettleDetail
     */
    platformOrderSettleSelectCombinationProductAdditionSettleDetail: (
      query: {
        /** 组合商品附加项扣除bizId */
        bizId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePlatformOrderAdditionSettleRespDTO, any>({
        path: `/customer/platformOrderSettle/selectCombinationProductAdditionSettleDetail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单结算（前台）
     * @name PlatformOrderSettleSelectOrderFreezeDetail
     * @summary selectOrderFreezeDetail
     * @request GET:/customer/platformOrderSettle/selectOrderFreezeDetail
     */
    platformOrderSettleSelectOrderFreezeDetail: (
      query: {
        /** platformOrderNo */
        platformOrderNo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListSelectOrderFreezeDetailRespDTO, any>({
        path: `/customer/platformOrderSettle/selectOrderFreezeDetail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单结算（前台）
     * @name PlatformOrderSettleSelectProductSettleDetail
     * @summary selectProductSettleDetail
     * @request GET:/customer/platformOrderSettle/selectProductSettleDetail
     */
    platformOrderSettleSelectProductSettleDetail: (
      query: {
        /** 平台订单号 */
        platformOrderNo: string;
        /** purchasingAbnormalOrderNo */
        purchasingAbnormalOrderNo?: string;
        /** 结算类型(1-下单冻结; 2-订单解冻; 4-重拍冻结;) */
        settleType: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePlatformOrderProductSettleDetail, any>({
        path: `/customer/platformOrderSettle/selectProductSettleDetail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单结算（前台）
     * @name PlatformOrderSettleSettleGetTodayTotalSettleAmount
     * @summary 获取当日的总结算金额
     * @request GET:/customer/platformOrderSettle/settle/getTodayTotalSettleAmount
     */
    platformOrderSettleSettleGetTodayTotalSettleAmount: (
      query?: {
        /**
         * systemSource
         * @format int32
         */
        systemSource?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBigdecimal, any>({
        path: `/customer/platformOrderSettle/settle/getTodayTotalSettleAmount`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单结算（前台）
     * @name PlatformOrderSettleSettleSelectDayTotalSettleAmountList
     * @summary 获取一段时间的总结算金额
     * @request GET:/customer/platformOrderSettle/settle/selectDayTotalSettleAmountList
     */
    platformOrderSettleSettleSelectDayTotalSettleAmountList: (
      query: {
        /**
         * endTime
         * @format date-time
         */
        endTime: string;
        /**
         * startTime
         * @format date-time
         */
        startTime: string;
        /**
         * systemSource
         * @format int32
         */
        systemSource?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListPlatformOrderSettleDayScopeDTO, any>({
        path: `/customer/platformOrderSettle/settle/selectDayTotalSettleAmountList`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单结算（前台）
     * @name PlatformOrderSettleSettleSelectPayTotalSettleAmountTopList
     * @summary 获取一段时间的用户支付榜
     * @request GET:/customer/platformOrderSettle/settle/selectPayTotalSettleAmountTopList
     */
    platformOrderSettleSettleSelectPayTotalSettleAmountTopList: (
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
      this.request<BizResponseListPlatformOrderSettlePayDTO, any>({
        path: `/customer/platformOrderSettle/settle/selectPayTotalSettleAmountTopList`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单结算（前台）
     * @name PlatformOrderSettleSettleSelectSourceTotalSettleAmountList
     * @summary 获取一段时间的渠道销售榜
     * @request GET:/customer/platformOrderSettle/settle/selectSourceTotalSettleAmountList
     */
    platformOrderSettleSettleSelectSourceTotalSettleAmountList: (
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
      this.request<BizResponseListPlatformOrderSettleSourceDTO, any>({
        path: `/customer/platformOrderSettle/settle/selectSourceTotalSettleAmountList`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 店铺商品SKU（前台）
     * @name ProductSkuBatchSaveIfAbsent
     * @summary 批量添加到店铺商品SKU
     * @request POST:/customer/productSku/batchSaveIfAbsent
     */
    productSkuBatchSaveIfAbsent: (reqDtoList: ImportStockReqDTO[], params: RequestParams = {}) =>
      this.request<BizResponseListShopProductSkuDTO, any>({
        path: `/customer/productSku/batchSaveIfAbsent`,
        method: "POST",
        body: reqDtoList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 补货计划(前台)
     * @name ReplenishPlanCancelPlan
     * @summary cancelPlan
     * @request POST:/customer/replenishPlan/cancelPlan
     */
    replenishPlanCancelPlan: (shipmentId: string, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/customer/replenishPlan/cancelPlan`,
        method: "POST",
        body: shipmentId,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 补货计划(前台)
     * @name ReplenishPlanConfirmPlan
     * @summary 确认补货计划
     * @request POST:/customer/replenishPlan/confirmPlan/{shipmentId}
     */
    replenishPlanConfirmPlan: (shipmentId: string, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/customer/replenishPlan/confirmPlan/${shipmentId}`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 补货计划(前台)
     * @name ReplenishPlanCreatePlan
     * @summary 创建补货计划
     * @request POST:/customer/replenishPlan/createPlan
     */
    replenishPlanCreatePlan: (reqDTO: CreateReplenishPlanReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/customer/replenishPlan/createPlan`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 补货计划(前台)
     * @name ReplenishPlanDiscardPlan
     * @summary 作废补货计划
     * @request POST:/customer/replenishPlan/discardPlan/{shipmentId}
     */
    replenishPlanDiscardPlan: (shipmentId: string, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/customer/replenishPlan/discardPlan/${shipmentId}`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 补货计划(前台)
     * @name ReplenishPlanNotifyDelivered
     * @summary notifyDelivered
     * @request POST:/customer/replenishPlan/notifyDelivered
     */
    replenishPlanNotifyDelivered: (shipmentId: string, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/customer/replenishPlan/notifyDelivered`,
        method: "POST",
        body: shipmentId,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 补货计划(前台)
     * @name ReplenishPlanPage
     * @summary 补货计划分页
     * @request POST:/customer/replenishPlan/page
     */
    replenishPlanPage: (reqDTO: CustomerReplenishPlanReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageReplenishPlanRespDTO, any>({
        path: `/customer/replenishPlan/page`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺辅料
     * @name ShopIngredientsAddCustomerIngredientsAddDtoByWms
     * @summary addCustomerIngredientsAddDTOByWms
     * @request POST:/customer/shop/ingredients/addCustomerIngredientsAddDTOByWms
     */
    shopIngredientsAddCustomerIngredientsAddDtoByWms: (
      customerIngredientsAddDTOS: CustomerIngredientsAddDTO[],
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/customer/shop/ingredients/addCustomerIngredientsAddDTOByWms`,
        method: "POST",
        body: customerIngredientsAddDTOS,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺辅料
     * @name ShopIngredientsCustomerList
     * @summary 列表(前台)
     * @request GET:/customer/shop/ingredients/customer/list
     */
    shopIngredientsCustomerList: (params: RequestParams = {}) =>
      this.request<BizResponseListCustomerShopIngredientsRespDTO, any>({
        path: `/customer/shop/ingredients/customer/list`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺辅料
     * @name ShopIngredientsCustomerRelatedFlagList
     * @summary 辅料是否关联附加项列表(前台)
     * @request POST:/customer/shop/ingredients/customer/relatedFlagList
     */
    shopIngredientsCustomerRelatedFlagList: (queryDTO: CustomerIngredientsQueryDTO, params: RequestParams = {}) =>
      this.request<BizResponseListCustomerShopIngredientsRespDTO, any>({
        path: `/customer/shop/ingredients/customer/relatedFlagList`,
        method: "POST",
        body: queryDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺辅料
     * @name ShopIngredientsLockIngredientsNotify
     * @summary lockIngredientsNotify
     * @request POST:/customer/shop/ingredients/lockIngredientsNotify
     */
    shopIngredientsLockIngredientsNotify: (dtoList: StockRespDTO[], params: RequestParams = {}) =>
      this.request<BizResponseVoid, any>({
        path: `/customer/shop/ingredients/lockIngredientsNotify`,
        method: "POST",
        body: dtoList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺辅料
     * @name ShopIngredientsManageList
     * @summary 列表(后台)
     * @request GET:/customer/shop/ingredients/manage/list
     */
    shopIngredientsManageList: (
      query: {
        /**
         * 客户店铺id
         * @format int64
         */
        customerShopId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCustomerShopIngredientsRespDTO, any>({
        path: `/customer/shop/ingredients/manage/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺辅料
     * @name ShopIngredientsPage
     * @summary 分页
     * @request POST:/customer/shop/ingredients/page
     */
    shopIngredientsPage: (dto: CustomerShopIngredientsQueryDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerShopIngredientsRespDTO, any>({
        path: `/customer/shop/ingredients/page`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺辅料
     * @name ShopIngredientsRefreshWarningQuantity
     * @summary refreshWarningQuantity
     * @request GET:/customer/shop/ingredients/refresh/warning_quantity
     */
    shopIngredientsRefreshWarningQuantity: (params: RequestParams = {}) =>
      this.request<BizResponseVoid, any>({
        path: `/customer/shop/ingredients/refresh/warning_quantity`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺辅料
     * @name ShopIngredientsSelectOneByIngredientsSku
     * @summary selectOneByIngredientsSku
     * @request GET:/customer/shop/ingredients/selectOneByIngredientsSku
     */
    shopIngredientsSelectOneByIngredientsSku: (
      query: {
        /** ingredientsSku */
        ingredientsSku: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerShopIngredientsRespDTO, any>({
        path: `/customer/shop/ingredients/selectOneByIngredientsSku`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺辅料
     * @name ShopIngredientsSetWarningQuantity
     * @summary 辅料预警设置(前台)
     * @request POST:/customer/shop/ingredients/set/warning_quantity
     */
    shopIngredientsSetWarningQuantity: (reqDTO: CustomerShopIngredientsReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/customer/shop/ingredients/set/warning_quantity`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺辅料
     * @name ShopIngredientsUpload
     * @summary upload
     * @request POST:/customer/shop/ingredients/upload
     */
    shopIngredientsUpload: (
      data: {
        /** file */
        file?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseVoid, any>({
        path: `/customer/shop/ingredients/upload`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),
  };
  delivery = {
    /**
     * No description
     *
     * @tags 国际发货
     * @name Create
     * @summary 创建国际发货单(b2b)
     * @request POST:/delivery/create
     */
    create: (reqDTO: DeliveryCreateReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/delivery/create`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 国际发货
     * @name Create111
     * @summary 创建国际发货单(b2b)
     * @request GET:/delivery/create111
     */
    create111: (
      query: {
        /** platformOrderNo */
        platformOrderNo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseObject, any>({
        path: `/delivery/create111`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 国际发货模板下载
     *
     * @tags 国际发货
     * @name DeliverTaskTemplateDownload
     * @summary 国际发货模板下载
     * @request POST:/delivery/deliverTaskTemplateDownload
     */
    deliverTaskTemplateDownload: (params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/delivery/deliverTaskTemplateDownload`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 国际发货
     * @name Page
     * @summary 国际发货分页
     * @request POST:/delivery/page
     */
    page: (dto: DeliverTaskReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageResultDeliverTaskRespDTO, any>({
        path: `/delivery/page`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 国际发货
     * @name ProcessNoticeCount
     * @summary 国际发货-待确认提醒
     * @request POST:/delivery/process/noticeCount
     */
    processNoticeCount: (params: RequestParams = {}) =>
      this.request<BizResponseDeliveryReviewNoticeCount, any>({
        path: `/delivery/process/noticeCount`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 国际发货
     * @name ProcessByOrderConfirm
     * @summary 国际发货-待确认-整单确认
     * @request POST:/delivery/processByOrder/confirm
     */
    processByOrderConfirm: (reqDTO: DeliveryReviewOrderConfirmReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/delivery/processByOrder/confirm`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 国际发货
     * @name ProcessByOrderPage
     * @summary 国际发货-待确认分页列表
     * @request POST:/delivery/processByOrder/page
     */
    processByOrderPage: (query: DeliveryReviewOrderQuery, params: RequestParams = {}) =>
      this.request<BizResponsePageResultDeliveryReviewOrderPage, any>({
        path: `/delivery/processByOrder/page`,
        method: "POST",
        body: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 国际发货
     * @name ProcessBySkuConfirm
     * @summary 国际发货-待确认-sku方式确认
     * @request POST:/delivery/processBySku/confirm
     */
    processBySkuConfirm: (reqDTO: DeliveryReviewOrderSkuConfirmReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListString, any>({
        path: `/delivery/processBySku/confirm`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 国际发货
     * @name ProcessBySkuPage
     * @summary 国际发货-待确认分页列表
     * @request POST:/delivery/processBySku/page
     */
    processBySkuPage: (query: DeliveryReviewOrderQuery, params: RequestParams = {}) =>
      this.request<BizResponsePageResultDeliveryReviewOrderPage, any>({
        path: `/delivery/processBySku/page`,
        method: "POST",
        body: query,
        type: ContentType.Json,
        ...params,
      }),
  };
  excel = {
    /**
     * No description
     *
     * @tags 表格导入
     * @name BatchPay
     * @summary batchPay
     * @request GET:/excel/batchPay
     */
    batchPay: (batchPayReqDTO: BatchPayReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseOrderPayRespDTO, any>({
        path: `/excel/batchPay`,
        method: "GET",
        body: batchPayReqDTO,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name HeadExcel
     * @summary batchPay
     * @request HEAD:/excel/batchPay
     */
    headExcel: (batchPayReqDTO: BatchPayReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseOrderPayRespDTO, any>({
        path: `/excel/batchPay`,
        method: "HEAD",
        body: batchPayReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name BatchPay2
     * @summary batchPay
     * @request POST:/excel/batchPay
     * @originalName batchPay
     * @duplicate
     */
    batchPay2: (batchPayReqDTO: BatchPayReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseOrderPayRespDTO, any>({
        path: `/excel/batchPay`,
        method: "POST",
        body: batchPayReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name BatchPay3
     * @summary batchPay
     * @request PUT:/excel/batchPay
     * @originalName batchPay
     * @duplicate
     */
    batchPay3: (batchPayReqDTO: BatchPayReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseOrderPayRespDTO, any>({
        path: `/excel/batchPay`,
        method: "PUT",
        body: batchPayReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name BatchPay4
     * @summary batchPay
     * @request DELETE:/excel/batchPay
     * @originalName batchPay
     * @duplicate
     */
    batchPay4: (batchPayReqDTO: BatchPayReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseOrderPayRespDTO, any>({
        path: `/excel/batchPay`,
        method: "DELETE",
        body: batchPayReqDTO,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name OptionsExcel
     * @summary batchPay
     * @request OPTIONS:/excel/batchPay
     */
    optionsExcel: (batchPayReqDTO: BatchPayReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseOrderPayRespDTO, any>({
        path: `/excel/batchPay`,
        method: "OPTIONS",
        body: batchPayReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name BatchPay5
     * @summary batchPay
     * @request PATCH:/excel/batchPay
     * @originalName batchPay
     * @duplicate
     */
    batchPay5: (batchPayReqDTO: BatchPayReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseOrderPayRespDTO, any>({
        path: `/excel/batchPay`,
        method: "PATCH",
        body: batchPayReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name DownloadExcel
     * @summary downloadExcel
     * @request GET:/excel/downloadExcel
     */
    downloadExcel: (
      query: {
        /**
         * taskId
         * @format int64
         */
        taskId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseVoid, any>({
        path: `/excel/downloadExcel`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name HeadExcel2
     * @summary downloadExcel
     * @request HEAD:/excel/downloadExcel
     * @originalName headExcel
     * @duplicate
     */
    headExcel2: (
      query: {
        /**
         * taskId
         * @format int64
         */
        taskId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseVoid, any>({
        path: `/excel/downloadExcel`,
        method: "HEAD",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name DownloadExcel2
     * @summary downloadExcel
     * @request POST:/excel/downloadExcel
     * @originalName downloadExcel
     * @duplicate
     */
    downloadExcel2: (
      query: {
        /**
         * taskId
         * @format int64
         */
        taskId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseVoid, any>({
        path: `/excel/downloadExcel`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name DownloadExcel3
     * @summary downloadExcel
     * @request PUT:/excel/downloadExcel
     * @originalName downloadExcel
     * @duplicate
     */
    downloadExcel3: (
      query: {
        /**
         * taskId
         * @format int64
         */
        taskId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseVoid, any>({
        path: `/excel/downloadExcel`,
        method: "PUT",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name DownloadExcel4
     * @summary downloadExcel
     * @request DELETE:/excel/downloadExcel
     * @originalName downloadExcel
     * @duplicate
     */
    downloadExcel4: (
      query: {
        /**
         * taskId
         * @format int64
         */
        taskId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseVoid, any>({
        path: `/excel/downloadExcel`,
        method: "DELETE",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name OptionsExcel2
     * @summary downloadExcel
     * @request OPTIONS:/excel/downloadExcel
     * @originalName optionsExcel
     * @duplicate
     */
    optionsExcel2: (
      query: {
        /**
         * taskId
         * @format int64
         */
        taskId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseVoid, any>({
        path: `/excel/downloadExcel`,
        method: "OPTIONS",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name DownloadExcel5
     * @summary downloadExcel
     * @request PATCH:/excel/downloadExcel
     * @originalName downloadExcel
     * @duplicate
     */
    downloadExcel5: (
      query: {
        /**
         * taskId
         * @format int64
         */
        taskId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseVoid, any>({
        path: `/excel/downloadExcel`,
        method: "PATCH",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name EditDeliveryAdditions
     * @summary editDeliveryAdditions
     * @request GET:/excel/editDeliveryAdditions
     */
    editDeliveryAdditions: (reqDTO: EditDeliveryAdditionsReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/editDeliveryAdditions`,
        method: "GET",
        body: reqDTO,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name HeadExcel3
     * @summary editDeliveryAdditions
     * @request HEAD:/excel/editDeliveryAdditions
     * @originalName headExcel
     * @duplicate
     */
    headExcel3: (reqDTO: EditDeliveryAdditionsReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/editDeliveryAdditions`,
        method: "HEAD",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name EditDeliveryAdditions2
     * @summary editDeliveryAdditions
     * @request POST:/excel/editDeliveryAdditions
     * @originalName editDeliveryAdditions
     * @duplicate
     */
    editDeliveryAdditions2: (reqDTO: EditDeliveryAdditionsReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/editDeliveryAdditions`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name EditDeliveryAdditions3
     * @summary editDeliveryAdditions
     * @request PUT:/excel/editDeliveryAdditions
     * @originalName editDeliveryAdditions
     * @duplicate
     */
    editDeliveryAdditions3: (reqDTO: EditDeliveryAdditionsReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/editDeliveryAdditions`,
        method: "PUT",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name EditDeliveryAdditions4
     * @summary editDeliveryAdditions
     * @request DELETE:/excel/editDeliveryAdditions
     * @originalName editDeliveryAdditions
     * @duplicate
     */
    editDeliveryAdditions4: (reqDTO: EditDeliveryAdditionsReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/editDeliveryAdditions`,
        method: "DELETE",
        body: reqDTO,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name OptionsExcel3
     * @summary editDeliveryAdditions
     * @request OPTIONS:/excel/editDeliveryAdditions
     * @originalName optionsExcel
     * @duplicate
     */
    optionsExcel3: (reqDTO: EditDeliveryAdditionsReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/editDeliveryAdditions`,
        method: "OPTIONS",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name EditDeliveryAdditions5
     * @summary editDeliveryAdditions
     * @request PATCH:/excel/editDeliveryAdditions
     * @originalName editDeliveryAdditions
     * @duplicate
     */
    editDeliveryAdditions5: (reqDTO: EditDeliveryAdditionsReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/editDeliveryAdditions`,
        method: "PATCH",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name EditIntShip
     * @summary editIntShip
     * @request GET:/excel/editIntShip
     */
    editIntShip: (reqDTO: EditIntShipReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/editIntShip`,
        method: "GET",
        body: reqDTO,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name HeadExcel4
     * @summary editIntShip
     * @request HEAD:/excel/editIntShip
     * @originalName headExcel
     * @duplicate
     */
    headExcel4: (reqDTO: EditIntShipReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/editIntShip`,
        method: "HEAD",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name EditIntShip2
     * @summary editIntShip
     * @request POST:/excel/editIntShip
     * @originalName editIntShip
     * @duplicate
     */
    editIntShip2: (reqDTO: EditIntShipReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/editIntShip`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name EditIntShip3
     * @summary editIntShip
     * @request PUT:/excel/editIntShip
     * @originalName editIntShip
     * @duplicate
     */
    editIntShip3: (reqDTO: EditIntShipReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/editIntShip`,
        method: "PUT",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name EditIntShip4
     * @summary editIntShip
     * @request DELETE:/excel/editIntShip
     * @originalName editIntShip
     * @duplicate
     */
    editIntShip4: (reqDTO: EditIntShipReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/editIntShip`,
        method: "DELETE",
        body: reqDTO,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name OptionsExcel4
     * @summary editIntShip
     * @request OPTIONS:/excel/editIntShip
     * @originalName optionsExcel
     * @duplicate
     */
    optionsExcel4: (reqDTO: EditIntShipReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/editIntShip`,
        method: "OPTIONS",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name EditIntShip5
     * @summary editIntShip
     * @request PATCH:/excel/editIntShip
     * @originalName editIntShip
     * @duplicate
     */
    editIntShip5: (reqDTO: EditIntShipReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/editIntShip`,
        method: "PATCH",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name EditItemAdditions
     * @summary editItemAdditions
     * @request GET:/excel/editItemAdditions
     */
    editItemAdditions: (reqDTO: EditItemAdditionsReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/editItemAdditions`,
        method: "GET",
        body: reqDTO,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name HeadExcel5
     * @summary editItemAdditions
     * @request HEAD:/excel/editItemAdditions
     * @originalName headExcel
     * @duplicate
     */
    headExcel5: (reqDTO: EditItemAdditionsReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/editItemAdditions`,
        method: "HEAD",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name EditItemAdditions2
     * @summary editItemAdditions
     * @request POST:/excel/editItemAdditions
     * @originalName editItemAdditions
     * @duplicate
     */
    editItemAdditions2: (reqDTO: EditItemAdditionsReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/editItemAdditions`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name EditItemAdditions3
     * @summary editItemAdditions
     * @request PUT:/excel/editItemAdditions
     * @originalName editItemAdditions
     * @duplicate
     */
    editItemAdditions3: (reqDTO: EditItemAdditionsReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/editItemAdditions`,
        method: "PUT",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name EditItemAdditions4
     * @summary editItemAdditions
     * @request DELETE:/excel/editItemAdditions
     * @originalName editItemAdditions
     * @duplicate
     */
    editItemAdditions4: (reqDTO: EditItemAdditionsReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/editItemAdditions`,
        method: "DELETE",
        body: reqDTO,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name OptionsExcel5
     * @summary editItemAdditions
     * @request OPTIONS:/excel/editItemAdditions
     * @originalName optionsExcel
     * @duplicate
     */
    optionsExcel5: (reqDTO: EditItemAdditionsReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/editItemAdditions`,
        method: "OPTIONS",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name EditItemAdditions5
     * @summary editItemAdditions
     * @request PATCH:/excel/editItemAdditions
     * @originalName editItemAdditions
     * @duplicate
     */
    editItemAdditions5: (reqDTO: EditItemAdditionsReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/editItemAdditions`,
        method: "PATCH",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name Know
     * @summary know
     * @request GET:/excel/know
     */
    know: (reqDTO: UserKnowReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/know`,
        method: "GET",
        body: reqDTO,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name HeadExcel6
     * @summary know
     * @request HEAD:/excel/know
     * @originalName headExcel
     * @duplicate
     */
    headExcel6: (reqDTO: UserKnowReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/know`,
        method: "HEAD",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name Know2
     * @summary know
     * @request POST:/excel/know
     * @originalName know
     * @duplicate
     */
    know2: (reqDTO: UserKnowReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/know`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name Know3
     * @summary know
     * @request PUT:/excel/know
     * @originalName know
     * @duplicate
     */
    know3: (reqDTO: UserKnowReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/know`,
        method: "PUT",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name Know4
     * @summary know
     * @request DELETE:/excel/know
     * @originalName know
     * @duplicate
     */
    know4: (reqDTO: UserKnowReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/know`,
        method: "DELETE",
        body: reqDTO,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name OptionsExcel6
     * @summary know
     * @request OPTIONS:/excel/know
     * @originalName optionsExcel
     * @duplicate
     */
    optionsExcel6: (reqDTO: UserKnowReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/know`,
        method: "OPTIONS",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name Know5
     * @summary know
     * @request PATCH:/excel/know
     * @originalName know
     * @duplicate
     */
    know5: (reqDTO: UserKnowReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/excel/know`,
        method: "PATCH",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name OrderDetails
     * @summary orderDetails
     * @request GET:/excel/orderDetails
     */
    orderDetails: (batchPayReqDTO: BatchPayReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseOrderDetailsRespDTO, any>({
        path: `/excel/orderDetails`,
        method: "GET",
        body: batchPayReqDTO,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name HeadExcel7
     * @summary orderDetails
     * @request HEAD:/excel/orderDetails
     * @originalName headExcel
     * @duplicate
     */
    headExcel7: (batchPayReqDTO: BatchPayReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseOrderDetailsRespDTO, any>({
        path: `/excel/orderDetails`,
        method: "HEAD",
        body: batchPayReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name OrderDetails2
     * @summary orderDetails
     * @request POST:/excel/orderDetails
     * @originalName orderDetails
     * @duplicate
     */
    orderDetails2: (batchPayReqDTO: BatchPayReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseOrderDetailsRespDTO, any>({
        path: `/excel/orderDetails`,
        method: "POST",
        body: batchPayReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name OrderDetails3
     * @summary orderDetails
     * @request PUT:/excel/orderDetails
     * @originalName orderDetails
     * @duplicate
     */
    orderDetails3: (batchPayReqDTO: BatchPayReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseOrderDetailsRespDTO, any>({
        path: `/excel/orderDetails`,
        method: "PUT",
        body: batchPayReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name OrderDetails4
     * @summary orderDetails
     * @request DELETE:/excel/orderDetails
     * @originalName orderDetails
     * @duplicate
     */
    orderDetails4: (batchPayReqDTO: BatchPayReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseOrderDetailsRespDTO, any>({
        path: `/excel/orderDetails`,
        method: "DELETE",
        body: batchPayReqDTO,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name OptionsExcel7
     * @summary orderDetails
     * @request OPTIONS:/excel/orderDetails
     * @originalName optionsExcel
     * @duplicate
     */
    optionsExcel7: (batchPayReqDTO: BatchPayReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseOrderDetailsRespDTO, any>({
        path: `/excel/orderDetails`,
        method: "OPTIONS",
        body: batchPayReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name OrderDetails5
     * @summary orderDetails
     * @request PATCH:/excel/orderDetails
     * @originalName orderDetails
     * @duplicate
     */
    orderDetails5: (batchPayReqDTO: BatchPayReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseOrderDetailsRespDTO, any>({
        path: `/excel/orderDetails`,
        method: "PATCH",
        body: batchPayReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name QueryCount
     * @summary queryCount
     * @request GET:/excel/queryCount
     */
    queryCount: (params: RequestParams = {}) =>
      this.request<BizResponseQueryOrderCountRespDTO, any>({
        path: `/excel/queryCount`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name HeadExcel8
     * @summary queryCount
     * @request HEAD:/excel/queryCount
     * @originalName headExcel
     * @duplicate
     */
    headExcel8: (params: RequestParams = {}) =>
      this.request<BizResponseQueryOrderCountRespDTO, any>({
        path: `/excel/queryCount`,
        method: "HEAD",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name QueryCount2
     * @summary queryCount
     * @request POST:/excel/queryCount
     * @originalName queryCount
     * @duplicate
     */
    queryCount2: (params: RequestParams = {}) =>
      this.request<BizResponseQueryOrderCountRespDTO, any>({
        path: `/excel/queryCount`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name QueryCount3
     * @summary queryCount
     * @request PUT:/excel/queryCount
     * @originalName queryCount
     * @duplicate
     */
    queryCount3: (params: RequestParams = {}) =>
      this.request<BizResponseQueryOrderCountRespDTO, any>({
        path: `/excel/queryCount`,
        method: "PUT",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name QueryCount4
     * @summary queryCount
     * @request DELETE:/excel/queryCount
     * @originalName queryCount
     * @duplicate
     */
    queryCount4: (params: RequestParams = {}) =>
      this.request<BizResponseQueryOrderCountRespDTO, any>({
        path: `/excel/queryCount`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name OptionsExcel8
     * @summary queryCount
     * @request OPTIONS:/excel/queryCount
     * @originalName optionsExcel
     * @duplicate
     */
    optionsExcel8: (params: RequestParams = {}) =>
      this.request<BizResponseQueryOrderCountRespDTO, any>({
        path: `/excel/queryCount`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name QueryCount5
     * @summary queryCount
     * @request PATCH:/excel/queryCount
     * @originalName queryCount
     * @duplicate
     */
    queryCount5: (params: RequestParams = {}) =>
      this.request<BizResponseQueryOrderCountRespDTO, any>({
        path: `/excel/queryCount`,
        method: "PATCH",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name QueryTask
     * @summary queryTask
     * @request GET:/excel/queryTask
     */
    queryTask: (reqDTO: ExcelImportQueryTaskReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseExcelImportQueryTaskRespDTO, any>({
        path: `/excel/queryTask`,
        method: "GET",
        body: reqDTO,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name HeadExcel9
     * @summary queryTask
     * @request HEAD:/excel/queryTask
     * @originalName headExcel
     * @duplicate
     */
    headExcel9: (reqDTO: ExcelImportQueryTaskReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseExcelImportQueryTaskRespDTO, any>({
        path: `/excel/queryTask`,
        method: "HEAD",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name QueryTask2
     * @summary queryTask
     * @request POST:/excel/queryTask
     * @originalName queryTask
     * @duplicate
     */
    queryTask2: (reqDTO: ExcelImportQueryTaskReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseExcelImportQueryTaskRespDTO, any>({
        path: `/excel/queryTask`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name QueryTask3
     * @summary queryTask
     * @request PUT:/excel/queryTask
     * @originalName queryTask
     * @duplicate
     */
    queryTask3: (reqDTO: ExcelImportQueryTaskReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseExcelImportQueryTaskRespDTO, any>({
        path: `/excel/queryTask`,
        method: "PUT",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name QueryTask4
     * @summary queryTask
     * @request DELETE:/excel/queryTask
     * @originalName queryTask
     * @duplicate
     */
    queryTask4: (reqDTO: ExcelImportQueryTaskReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseExcelImportQueryTaskRespDTO, any>({
        path: `/excel/queryTask`,
        method: "DELETE",
        body: reqDTO,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name OptionsExcel9
     * @summary queryTask
     * @request OPTIONS:/excel/queryTask
     * @originalName optionsExcel
     * @duplicate
     */
    optionsExcel9: (reqDTO: ExcelImportQueryTaskReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseExcelImportQueryTaskRespDTO, any>({
        path: `/excel/queryTask`,
        method: "OPTIONS",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name QueryTask5
     * @summary queryTask
     * @request PATCH:/excel/queryTask
     * @originalName queryTask
     * @duplicate
     */
    queryTask5: (reqDTO: ExcelImportQueryTaskReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseExcelImportQueryTaskRespDTO, any>({
        path: `/excel/queryTask`,
        method: "PATCH",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name SubmitTask
     * @summary submitTask
     * @request GET:/excel/submitTask
     */
    submitTask: (reqDTO: ExcelImportSubmitTaskReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseLong, any>({
        path: `/excel/submitTask`,
        method: "GET",
        body: reqDTO,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name HeadExcel10
     * @summary submitTask
     * @request HEAD:/excel/submitTask
     * @originalName headExcel
     * @duplicate
     */
    headExcel10: (reqDTO: ExcelImportSubmitTaskReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseLong, any>({
        path: `/excel/submitTask`,
        method: "HEAD",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name SubmitTask2
     * @summary submitTask
     * @request POST:/excel/submitTask
     * @originalName submitTask
     * @duplicate
     */
    submitTask2: (reqDTO: ExcelImportSubmitTaskReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseLong, any>({
        path: `/excel/submitTask`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name SubmitTask3
     * @summary submitTask
     * @request PUT:/excel/submitTask
     * @originalName submitTask
     * @duplicate
     */
    submitTask3: (reqDTO: ExcelImportSubmitTaskReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseLong, any>({
        path: `/excel/submitTask`,
        method: "PUT",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name SubmitTask4
     * @summary submitTask
     * @request DELETE:/excel/submitTask
     * @originalName submitTask
     * @duplicate
     */
    submitTask4: (reqDTO: ExcelImportSubmitTaskReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseLong, any>({
        path: `/excel/submitTask`,
        method: "DELETE",
        body: reqDTO,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name OptionsExcel10
     * @summary submitTask
     * @request OPTIONS:/excel/submitTask
     * @originalName optionsExcel
     * @duplicate
     */
    optionsExcel10: (reqDTO: ExcelImportSubmitTaskReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseLong, any>({
        path: `/excel/submitTask`,
        method: "OPTIONS",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 表格导入
     * @name SubmitTask5
     * @summary submitTask
     * @request PATCH:/excel/submitTask
     * @originalName submitTask
     * @duplicate
     */
    submitTask5: (reqDTO: ExcelImportSubmitTaskReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseLong, any>({
        path: `/excel/submitTask`,
        method: "PATCH",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  ingredients = {
    /**
     * No description
     *
     * @tags OEM-辅料自动化报价
     * @name AutoQuoteDeleteById
     * @summary 删除
     * @request POST:/ingredients/autoQuote/deleteById
     */
    autoQuoteDeleteById: (reqDTO: IngredientsAutoQuoteDTO, params: RequestParams = {}) =>
      this.request<BizResponseVoid, any>({
        path: `/ingredients/autoQuote/deleteById`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OEM-辅料自动化报价
     * @name AutoQuotePage
     * @summary 查询分页
     * @request POST:/ingredients/autoQuote/page
     */
    autoQuotePage: (reqDTO: IngredientsAutoQuotePageReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageIngredientsAutoQuoteDTO, any>({
        path: `/ingredients/autoQuote/page`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OEM-辅料自动化报价
     * @name AutoQuoteQueryById
     * @summary 查询详情
     * @request POST:/ingredients/autoQuote/queryById
     */
    autoQuoteQueryById: (reqDTO: IngredientsAutoQuoteDTO, params: RequestParams = {}) =>
      this.request<BizResponseIngredientsAutoQuoteDTO, any>({
        path: `/ingredients/autoQuote/queryById`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OEM-辅料自动化报价
     * @name AutoQuoteQueryLog
     * @summary 查询日志
     * @request POST:/ingredients/autoQuote/queryLog
     */
    autoQuoteQueryLog: (reqDTO: IngredientsAutoQuoteDTO, params: RequestParams = {}) =>
      this.request<BizResponseListIngredientsAutoQuoteLogDTO, any>({
        path: `/ingredients/autoQuote/queryLog`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OEM-辅料自动化报价
     * @name AutoQuoteSave
     * @summary 新增/修改
     * @request POST:/ingredients/autoQuote/save
     */
    autoQuoteSave: (dto: IngredientsAutoQuoteDTO, params: RequestParams = {}) =>
      this.request<BizResponseVoid, any>({
        path: `/ingredients/autoQuote/save`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OEM-辅料自动化报价
     * @name AutoQuoteUpdateStatus
     * @summary 修改状态
     * @request POST:/ingredients/autoQuote/updateStatus
     */
    autoQuoteUpdateStatus: (dto: IngredientsAutoQuoteUpdateStatusDTO, params: RequestParams = {}) =>
      this.request<BizResponseVoid, any>({
        path: `/ingredients/autoQuote/updateStatus`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),
  };
  ingredientsRecommandPlan = {
    /**
     * No description
     *
     * @tags 辅料推荐方案
     * @name AddIngredientsPrice
     * @summary 添加辅料价格
     * @request POST:/ingredientsRecommandPlan/addIngredientsPrice
     */
    addIngredientsPrice: (vo: IngredientsPriceAddVO, params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/ingredientsRecommandPlan/addIngredientsPrice`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 辅料推荐方案
     * @name Ingredients
     * @summary 辅料（前台）
     * @request GET:/ingredientsRecommandPlan/ingredients
     */
    ingredients: (params: RequestParams = {}) =>
      this.request<BizResponseListIngredients, any>({
        path: `/ingredientsRecommandPlan/ingredients`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 辅料推荐方案
     * @name IngredientsLogoPrintMode
     * @summary 辅料推荐logo印刷方式（前台）
     * @request GET:/ingredientsRecommandPlan/ingredients/logoPrintMode
     */
    ingredientsLogoPrintMode: (
      query?: {
        /**
         * ingredientsId
         * @format int64
         */
        ingredientsId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListIngredientsLogoPrintMode, any>({
        path: `/ingredientsRecommandPlan/ingredients/logoPrintMode`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 辅料推荐方案
     * @name IngredientsMaterials
     * @summary 辅料推荐材质（前台）
     * @request GET:/ingredientsRecommandPlan/ingredients/materials
     */
    ingredientsMaterials: (
      query?: {
        /**
         * ingredientsId
         * @format int64
         */
        ingredientsId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListIngredientsMaterials, any>({
        path: `/ingredientsRecommandPlan/ingredients/materials`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 辅料推荐方案
     * @name IngredientsPrice
     * @summary 辅料价格（前台）
     * @request GET:/ingredientsRecommandPlan/ingredients/price
     */
    ingredientsPrice: (
      query?: {
        /** @format int64 */
        ingredientsId?: number;
        /** @format int64 */
        ingredientsLogoPrintModeId?: number;
        /** @format int64 */
        ingredientsMaterialsId?: number;
        /** @format int64 */
        ingredientsSizeId?: number;
        /** @format int64 */
        ingredientsStyleId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListIngredientsPrice, any>({
        path: `/ingredientsRecommandPlan/ingredients/price`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 辅料推荐方案
     * @name IngredientsSize
     * @summary 辅料推荐尺寸（前台）
     * @request GET:/ingredientsRecommandPlan/ingredients/size
     */
    ingredientsSize: (
      query?: {
        /**
         * ingredientsId
         * @format int64
         */
        ingredientsId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListIngredientsSize, any>({
        path: `/ingredientsRecommandPlan/ingredients/size`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 辅料推荐方案
     * @name IngredientsStyle
     * @summary 辅料推荐款式（前台）
     * @request GET:/ingredientsRecommandPlan/ingredients/style
     */
    ingredientsStyle: (
      query?: {
        /**
         * ingredientsId
         * @format int64
         */
        ingredientsId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListIngredientsStyle, any>({
        path: `/ingredientsRecommandPlan/ingredients/style`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  log = {
    /**
     * No description
     *
     * @tags 收集前端日志
     * @name AsyncCombinationTask
     * @summary asyncCombinationTask
     * @request POST:/log/asyncCombinationTask
     */
    asyncCombinationTask: (orderAsycDTO: OrderAsycDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/log/asyncCombinationTask`,
        method: "POST",
        body: orderAsycDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收集前端日志
     * @name CreateOrderSettle
     * @summary createOrderSettle
     * @request GET:/log/createOrderSettle
     */
    createOrderSettle: (
      query: {
        /** platformOrderNo */
        platformOrderNo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/log/createOrderSettle`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收集前端日志
     * @name CreateSystemOrder
     * @summary 创建系统单号
     * @request GET:/log/createSystemOrder
     */
    createSystemOrder: (
      query?: {
        /** orderNo */
        orderNo?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/log/createSystemOrder`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收集前端日志
     * @name FixGjfhSendAddress
     * @summary 修复国际发货单地址
     * @request POST:/log/fixGJFHSendAddress
     */
    fixGjfhSendAddress: (platformOrderNos: string[], params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/log/fixGJFHSendAddress`,
        method: "POST",
        body: platformOrderNos,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收集前端日志
     * @name TestAddPurchaseBadNum
     * @summary 增加采购异常数量 减少国内运输中数量
     * @request POST:/log/testAddPurchaseBadNum
     */
    testAddPurchaseBadNum: (notifyItemChangeNumDTO: NotifyItemChangeNumDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/log/testAddPurchaseBadNum`,
        method: "POST",
        body: notifyItemChangeNumDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收集前端日志
     * @name TestBatchSaveAbnormalOrderFromPurchase
     * @summary 测试生成异常
     * @request POST:/log/testBatchSaveAbnormalOrderFromPurchase
     */
    testBatchSaveAbnormalOrderFromPurchase: (reqDTO: CancelAbnormalOrderReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/log/testBatchSaveAbnormalOrderFromPurchase`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收集前端日志
     * @name TestNotifySystemOrderPurchasing
     * @summary 通知系统订单采购中
     * @request POST:/log/testNotifySystemOrderPurchasing
     */
    testNotifySystemOrderPurchasing: (reqDTO: NotifySystemOrderPurchasingDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/log/testNotifySystemOrderPurchasing`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收集前端日志
     * @name TestReduceOrderItemExpressNum
     * @summary 测试减少国内发货中数量
     * @request POST:/log/testReduceOrderItemExpressNum
     */
    testReduceOrderItemExpressNum: (
      itemExpressNumDTO: NotifyReduceOrderItemExpressNumDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/log/testReduceOrderItemExpressNum`,
        method: "POST",
        body: itemExpressNumDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收集前端日志
     * @name TestUpdateCancelProgress
     * @summary 测试取消异常
     * @request POST:/log/testUpdateCancelProgress
     */
    testUpdateCancelProgress: (cancelProgressReqDTO: CancelProgressReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/log/testUpdateCancelProgress`,
        method: "POST",
        body: cancelProgressReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收集前端日志
     * @name TestUpdateOrderItemExpressNum
     * @summary 更新采购完成数量----->直接到国内运输中了
     * @request POST:/log/testUpdateOrderItemExpressNum
     */
    testUpdateOrderItemExpressNum: (notifyItemChangeNumDTO: NotifyItemChangeNumDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/log/testUpdateOrderItemExpressNum`,
        method: "POST",
        body: notifyItemChangeNumDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收集前端日志
     * @name TestUpdateOrderItemExpressing
     * @summary 处理商品从采购完成到国内运输
     * @request POST:/log/testUpdateOrderItemExpressing
     */
    testUpdateOrderItemExpressing: (notifyItemChangeNumDTO: NotifyItemChangeNumDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/log/testUpdateOrderItemExpressing`,
        method: "POST",
        body: notifyItemChangeNumDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收集前端日志
     * @name TestUpdateOrderItemPurchase
     * @summary 处理商品采购完成
     * @request POST:/log/testUpdateOrderItemPurchase
     */
    testUpdateOrderItemPurchase: (notifyItemChangeNumDTO: NotifyItemChangeNumDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/log/testUpdateOrderItemPurchase`,
        method: "POST",
        body: notifyItemChangeNumDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 收集前端日志
     * @name VueLog
     * @summary vueLogCollection
     * @request POST:/log/vueLog
     */
    vueLog: (logJson: string, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/log/vueLog`,
        method: "POST",
        body: logJson,
        type: ContentType.Json,
        ...params,
      }),
  };
  manage = {
    /**
     * No description
     *
     * @tags 异常订单(后台)
     * @name AbnormalOrderDandangAudit
     * @summary 担当审核
     * @request POST:/manage/abnormalOrder/dandangAudit
     */
    abnormalOrderDandangAudit: (reqDTO: AbnormalOrderAuditReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/manage/abnormalOrder/dandangAudit`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 异常订单(后台)
     * @name AbnormalOrderExport
     * @summary 导出异常订单
     * @request POST:/manage/abnormalOrder/export
     */
    abnormalOrderExport: (reqDTO: ManageAbnormalOrderQueryReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseExportRespDTO, any>({
        path: `/manage/abnormalOrder/export`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 异常订单(后台)
     * @name AbnormalOrderPage
     * @summary 分页列表异常订单
     * @request POST:/manage/abnormalOrder/page
     */
    abnormalOrderPage: (reqDTO: ManageAbnormalOrderQueryReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageAbnormalOrderRespDTO, any>({
        path: `/manage/abnormalOrder/page`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 异常订单(后台)
     * @name AbnormalOrderPageAbnormalOrder
     * @summary 分页商品取消履历
     * @request POST:/manage/abnormalOrder/pageAbnormalOrder
     */
    abnormalOrderPageAbnormalOrder: (pageDTO: PageAbnormalOrderReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageAbnormalOrder, any>({
        path: `/manage/abnormalOrder/pageAbnormalOrder`,
        method: "POST",
        body: pageDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情附加项(后台)
     * @name PlatformOrderItemAdditionEdit
     * @summary 编辑商品辅料
     * @request POST:/manage/platform/order/item/addition/edit
     */
    platformOrderItemAdditionEdit: (reqDTO: PlatformOrderItemAdditionReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/manage/platform/order/item/addition/edit`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情附加项(后台)
     * @name PlatformOrderItemAdditionGetAdditionalItemsInfo
     * @summary 获取附加项信息
     * @request GET:/manage/platform/order/item/addition/getAdditionalItemsInfo
     */
    platformOrderItemAdditionGetAdditionalItemsInfo: (
      query?: {
        /** 系统订单编号 */
        systemOrderNo?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListAdditionalItemsInfoRespDTO, any>({
        path: `/manage/platform/order/item/addition/getAdditionalItemsInfo`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情附加项(后台)
     * @name PlatformOrderItemAdditionGetProductMaterial
     * @summary 获取商品材质
     * @request GET:/manage/platform/order/item/addition/getProductMaterial
     */
    platformOrderItemAdditionGetProductMaterial: (
      query?: {
        /** 系统订单编号 */
        systemOrderNo?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListProductMaterialRespDTO, any>({
        path: `/manage/platform/order/item/addition/getProductMaterial`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情附加项(后台)
     * @name PlatformOrderItemAdditionListAdditionalItemsInfo
     * @summary 批量获取附加项信息
     * @request GET:/manage/platform/order/item/addition/listAdditionalItemsInfo
     */
    platformOrderItemAdditionListAdditionalItemsInfo: (
      query?: {
        /** 系统订单编号 */
        systemOrderNos?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListAdditionalItemsInfoRespDTO, any>({
        path: `/manage/platform/order/item/addition/listAdditionalItemsInfo`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（后台）
     * @name PlatformOrderCancelPage
     * @summary 取消订单分页
     * @request POST:/manage/platformOrder/cancelPage
     */
    platformOrderCancelPage: (dto: GetManagePlatformOrderPageReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageManagePlatformOrderRespDTO, any>({
        path: `/manage/platformOrder/cancelPage`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（后台）
     * @name PlatformOrderExport
     * @summary 平台订单导出
     * @request POST:/manage/platformOrder/export
     */
    platformOrderExport: (dto: GetManagePlatformOrderPageReqDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/manage/platformOrder/export`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单（后台）
     * @name PlatformOrderPage
     * @summary 查询平台订单分页
     * @request POST:/manage/platformOrder/page
     */
    platformOrderPage: (dto: GetManagePlatformOrderPageReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageManagePlatformOrderRespDTO, any>({
        path: `/manage/platformOrder/page`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单发货（后台）
     * @name PlatformOrderDeliveryDeliveryAdditionalList
     * @summary 查询平台订单发货附加项列表
     * @request GET:/manage/platformOrderDelivery/deliveryAdditional/list
     */
    platformOrderDeliveryDeliveryAdditionalList: (
      query: {
        /**
         * platformOrderId
         * @format int64
         */
        platformOrderId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListDeliveryAdditionalRespDTO, any>({
        path: `/manage/platformOrderDelivery/deliveryAdditional/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单发货（后台）
     * @name PlatformOrderDeliveryDeliveryAddressList
     * @summary 查询平台订单发货地址
     * @request GET:/manage/platformOrderDelivery/deliveryAddress/list
     */
    platformOrderDeliveryDeliveryAddressList: (
      query: {
        /**
         * platformOrderId
         * @format int64
         */
        platformOrderId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseDeliveryAddressCreateDTO, any>({
        path: `/manage/platformOrderDelivery/deliveryAddress/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（后台）
     * @name PlatformOrderItemList
     * @summary 查询平台订单详情列表
     * @request GET:/manage/platformOrderItem/list
     */
    platformOrderItemList: (
      query?: {
        /**
         * 平台订单表id
         * @format int64
         */
        platformOrderId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListManagePlatformOrderItemRespDTO, any>({
        path: `/manage/platformOrderItem/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（后台）
     * @name PlatformOrderItemListDeductionDetails
     * @summary 扣款明细
     * @request GET:/manage/platformOrderItem/listDeductionDetails
     */
    platformOrderItemListDeductionDetails: (
      query?: {
        /**
         * 平台订单详情表id
         * @format int64
         */
        platformOrderItemId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListDeductionDetailsRespDTO, any>({
        path: `/manage/platformOrderItem/listDeductionDetails`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（后台）
     * @name PlatformOrderItemListInternationalityLogisticsInfoDetail
     * @summary 国际物流信息详情
     * @request GET:/manage/platformOrderItem/listInternationalityLogisticsInfoDetail
     */
    platformOrderItemListInternationalityLogisticsInfoDetail: (
      query?: {
        /** 物流单号 */
        logisticsCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseLogisticsInfoDetailRespDTO, any>({
        path: `/manage/platformOrderItem/listInternationalityLogisticsInfoDetail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（后台）
     * @name PlatformOrderItemProductDetails
     * @summary 商品详情
     * @request POST:/manage/platformOrderItem/productDetails
     */
    platformOrderItemProductDetails: (reqDTO: ProductDetailsReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseProductDetailsRespDTO, any>({
        path: `/manage/platformOrderItem/productDetails`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（后台）
     * @name PlatformOrderItemSearchManagePlatformOrderItemPage
     * @summary 平台订单详情搜索
     * @request POST:/manage/platformOrderItem/searchManagePlatformOrderItemPage
     */
    platformOrderItemSearchManagePlatformOrderItemPage: (
      dto: ManageSearchPlatformOrderItemReqDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageManagePlatformOrderItemRespDTO, any>({
        path: `/manage/platformOrderItem/searchManagePlatformOrderItemPage`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（后台）
     * @name PlatformOrderItemSpecialCheckEdit
     * @summary 编辑特殊质检要求
     * @request POST:/manage/platformOrderItem/specialCheckEdit
     */
    platformOrderItemSpecialCheckEdit: (reqDTO: OrderItemSpecialCheckEditReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/manage/platformOrderItem/specialCheckEdit`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 平台订单详情（后台）
     * @name PlatformOrderItemSpecialCheckEditBatch
     * @summary 批量编辑特殊质检要求
     * @request POST:/manage/platformOrderItem/specialCheckEditBatch
     */
    platformOrderItemSpecialCheckEditBatch: (
      reqDTOList: OrderItemSpecialCheckEditReqDTO[],
      params: RequestParams = {},
    ) =>
      this.request<BizResponseObject, any>({
        path: `/manage/platformOrderItem/specialCheckEditBatch`,
        method: "POST",
        body: reqDTOList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 补货计划(后台)
     * @name ReplenishPlanPage
     * @summary 补货计划分页
     * @request GET:/manage/replenishPlan/page
     */
    replenishPlanPage: (
      query?: {
        /** 亚马逊msku */
        amazonMsku?: string;
        /**
         * 客户id
         * @format int64
         */
        customerId?: number;
        /** 用户名 */
        customerName?: string;
        /**
         * 用户店铺表id
         * @format int64
         */
        customerShopId?: number;
        /** 用户店铺名称 */
        customerShopName?: string;
        /** 商品名称 */
        keywordName?: string;
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        /**
         * 计划状态(1:处理中 1:已确认 2:已作废)
         * @format int32
         */
        planStatus?: number;
        /** 商品SKU */
        productSku?: string;
        /** 补货批次号 */
        shipmentId?: string;
        /** @format int32 */
        startIndex?: number;
        /** 统一客户全名 */
        unificationCustomerFullName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageReplenishPlanRespDTO, any>({
        path: `/manage/replenishPlan/page`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  measure = {
    /**
     * No description
     *
     * @tags 商品测量
     * @name NewCount
     * @summary 新数量查询
     * @request GET:/measure/newCount
     */
    newCount: (params: RequestParams = {}) =>
      this.request<BizResponseInt, any>({
        path: `/measure/newCount`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品测量
     * @name Page
     * @summary 分页查询
     * @request POST:/measure/page
     */
    page: (query: ProductMeasureQueryReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageProductMeasureRespDTO, any>({
        path: `/measure/page`,
        method: "POST",
        body: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 商品测量
     * @name UpdateProductMeasure
     * @summary updateProductMeasure
     * @request POST:/measure/updateProductMeasure
     */
    updateProductMeasure: (reqDTO: ProductUpdateMeasureReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/measure/updateProductMeasure`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  oem = {
    /**
     * No description
     *
     * @tags oem-search-source-order-feign-api-impl
     * @name GetOrderAndSkuDetail
     * @summary getOrderAndSkuDetail
     * @request GET:/oem/getOrderAndSkuDetail
     */
    getOrderAndSkuDetail: (
      query: {
        /** productsku */
        productsku: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseOrderAndSkuDetailRespDTO, any>({
        path: `/oem/getOrderAndSkuDetail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags oem-search-source-order-feign-api-impl
     * @name GetOrderId
     * @summary getOrderId
     * @request GET:/oem/getOrderId
     */
    getOrderId: (
      query: {
        /**
         * purchaseId
         * @format int32
         */
        purchaseId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseLong, any>({
        path: `/oem/getOrderId`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags oem-search-source-order-feign-api-impl
     * @name GetOrderPriceDetail
     * @summary getOrderPriceDetail
     * @request GET:/oem/getOrderPriceDetail
     */
    getOrderPriceDetail: (
      query: {
        /**
         * orderId
         * @format int32
         */
        orderId: number;
        /**
         * repurchaseOrderId
         * @format int32
         */
        repurchaseOrderId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseSearchSourceOrderSupplierPriceDetailRespDTO, any>({
        path: `/oem/getOrderPriceDetail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags oem-search-source-order-feign-api-impl
     * @name GetOrderPriceDetailV2
     * @summary getOrderPriceDetailV2
     * @request GET:/oem/getOrderPriceDetailV2
     */
    getOrderPriceDetailV2: (
      query: {
        /**
         * orderId
         * @format int32
         */
        orderId: number;
        /**
         * repurchaseOrderId
         * @format int32
         */
        repurchaseOrderId?: number;
        /**
         * searchSourceSupplierPriceId
         * @format int64
         */
        searchSourceSupplierPriceId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseSearchSourceOrderSupplierPriceDetailRespDTO, any>({
        path: `/oem/getOrderPriceDetailV2`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags oem-search-source-order-feign-api-impl
     * @name GetSearchSourceOrderByShopId
     * @summary getSearchSourceOrderByShopId
     * @request GET:/oem/getSearchSourceOrderByShopId
     */
    getSearchSourceOrderByShopId: (
      query: {
        /**
         * shopId
         * @format int64
         */
        shopId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseSearchSourceOrderByShopIdResp, any>({
        path: `/oem/getSearchSourceOrderByShopId`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags oem-search-source-order-feign-api-impl
     * @name GetSearchSourceOrderDetailBySku
     * @summary getPriceBySku
     * @request GET:/oem/getSearchSourceOrderDetailBySku
     */
    getSearchSourceOrderDetailBySku: (
      query: {
        /** productskus */
        productskus: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListSearchSourceOrderSkusResp, any>({
        path: `/oem/getSearchSourceOrderDetailBySku`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags oem-search-source-order-feign-api-impl
     * @name GetSearchSourceOrderDetailFeign
     * @summary getSearchSourceOrderDetailFeign
     * @request GET:/oem/getSearchSourceOrderDetailFeign
     */
    getSearchSourceOrderDetailFeign: (
      query: {
        /**
         * orderId
         * @format int32
         */
        orderId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseSearchSourceOrderDetailRespDTO, any>({
        path: `/oem/getSearchSourceOrderDetailFeign`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags oem-search-source-order-feign-api-impl
     * @name GetSearchSourceOrderDetailFeignV2
     * @summary getSearchSourceOrderDetailFeign
     * @request GET:/oem/getSearchSourceOrderDetailFeignV2
     */
    getSearchSourceOrderDetailFeignV2: (
      query: {
        /**
         * orderId
         * @format int32
         */
        orderId: number;
        /**
         * searchSourcePriceId
         * @format int64
         */
        searchSourcePriceId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseSearchSourceOrderDetailRespDTO, any>({
        path: `/oem/getSearchSourceOrderDetailFeignV2`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags oem-search-source-order-feign-api-impl
     * @name GetSearchSourceOrderPriceDetailBySku
     * @summary getPriceDetailBySku
     * @request GET:/oem/getSearchSourceOrderPriceDetailBySku
     */
    getSearchSourceOrderPriceDetailBySku: (
      query: {
        /** productsku */
        productsku: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListSearchSourceOrderSupplierPriceItemResp, any>({
        path: `/oem/getSearchSourceOrderPriceDetailBySku`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags oem-search-source-order-feign-api-impl
     * @name GetSearchSourceOrderPurchaseFeign
     * @summary getSearchSourceOrderPurchaseFeign
     * @request GET:/oem/getSearchSourceOrderPurchaseFeign
     */
    getSearchSourceOrderPurchaseFeign: (
      query: {
        /**
         * orderId
         * @format int32
         */
        orderId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListString, any>({
        path: `/oem/getSearchSourceOrderPurchaseFeign`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags oem-search-source-order-feign-api-impl
     * @name GetSkuProductCustomsRespDto
     * @summary getSkuProductCustomsRespDTO
     * @request GET:/oem/getSkuProductCustomsRespDTO
     */
    getSkuProductCustomsRespDto: (
      query: {
        /** productskus */
        productskus: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListOemSkuProductCustomsResp, any>({
        path: `/oem/getSkuProductCustomsRespDTO`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags oem-search-source-order-feign-api-impl
     * @name ListSearchSourceOrderSkuDetail
     * @summary listSearchSourceOrderSkuDetail
     * @request POST:/oem/listSearchSourceOrderSkuDetail
     */
    listSearchSourceOrderSkuDetail: (
      searchSourceOrderSkuQuery: SearchSourceOrderSkuQuery,
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListSearchSourceOrderSkuDetailResp, any>({
        path: `/oem/listSearchSourceOrderSkuDetail`,
        method: "POST",
        body: searchSourceOrderSkuQuery,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OEM寻源单下订单商品列表
     * @name OrderBigOrderProductList
     * @summary 寻源单下大货单商品列表（前台）
     * @request GET:/oem/order/bigOrder/product/list
     */
    orderBigOrderProductList: (
      query?: {
        /**
         * searchSourceOrderId
         * @format int64
         */
        searchSourceOrderId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseOemOrderProductListDTO, any>({
        path: `/oem/order/bigOrder/product/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OEM寻源单下订单商品列表
     * @name OrderBigOrderUpdateSellPriceProductList
     * @summary 寻源单下大货单修改数量后的商品列表（前台）
     * @request POST:/oem/order/bigOrder/update/sellPrice/product/list
     */
    orderBigOrderUpdateSellPriceProductList: (vo: SellQuantityProductListVO, params: RequestParams = {}) =>
      this.request<BizResponseOemOrderProductListDTO, any>({
        path: `/oem/order/bigOrder/update/sellPrice/product/list`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OEM寻源单下订单商品列表
     * @name OrderSampleProductList
     * @summary 寻源单下样品单商品列表（前台）
     * @request GET:/oem/order/sample/product/list
     */
    orderSampleProductList: (
      query?: {
        /**
         * searchSourceOrderId
         * @format int64
         */
        searchSourceOrderId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseOemOrderProductListDTO, any>({
        path: `/oem/order/sample/product/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OEM寻源单下订单商品列表
     * @name OrderSampleUpdateSellPriceProductList
     * @summary 寻源单下样品单修改数量后的商品列表（前台）
     * @request POST:/oem/order/sample/update/sellPrice/product/list
     */
    orderSampleUpdateSellPriceProductList: (vo: SellQuantityProductListVO, params: RequestParams = {}) =>
      this.request<BizResponseOemOrderProductListDTO, any>({
        path: `/oem/order/sample/update/sellPrice/product/list`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags oem-search-source-order-feign-api-impl
     * @name PaySearchSourceOrderResult
     * @summary paySearchSourceOrderResult
     * @request POST:/oem/paySearchSourceOrderResult
     */
    paySearchSourceOrderResult: (walletChangeResultEventDTO: WalletChangeResultEventDTO, params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/oem/paySearchSourceOrderResult`,
        method: "POST",
        body: walletChangeResultEventDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OEM商品分类
     * @name ProductClassificationList
     * @summary OEM商品分类列表(1个分类对应1个溢价率)（后台）
     * @request GET:/oem/product/classification/list
     */
    productClassificationList: (params: RequestParams = {}) =>
      this.request<BizResponseListOemProductClassification, any>({
        path: `/oem/product/classification/list`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OEM商品分类
     * @name ProductClassificationOperateList
     * @summary 日志列表
     * @request GET:/oem/product/classification/operateList
     */
    productClassificationOperateList: (
      query: {
        /**
         * id
         * @format int64
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListOperateLogVO, any>({
        path: `/oem/product/classification/operateList`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OEM商品分类
     * @name ProductClassificationUpdatePremiumRate
     * @summary 修改分类溢价率
     * @request POST:/oem/product/classification/update/premiumRate
     */
    productClassificationUpdatePremiumRate: (vo: UpdatePremiumRateVO, params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/oem/product/classification/update/premiumRate`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OEM寻源单复购申请下订单商品列表
     * @name RepurchaseOrderBigOrderProductList
     * @summary 复购申请下大货单商品列表（前台）
     * @request GET:/oem/repurchase/order/bigOrder/product/list
     */
    repurchaseOrderBigOrderProductList: (
      query?: {
        /**
         * searchSourceOrderRepurchaseApplyId
         * @format int64
         */
        searchSourceOrderRepurchaseApplyId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseOemOrderProductListDTO, any>({
        path: `/oem/repurchase/order/bigOrder/product/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OEM寻源单复购申请下订单商品列表
     * @name RepurchaseOrderBigOrderUpdateSellPriceProductList
     * @summary 复购申请下大货单修改数量后的商品列表（前台）
     * @request POST:/oem/repurchase/order/bigOrder/update/sellPrice/product/list
     */
    repurchaseOrderBigOrderUpdateSellPriceProductList: (
      vo: RepurchaseSellQuantityProductListVO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponseOemOrderProductListDTO, any>({
        path: `/oem/repurchase/order/bigOrder/update/sellPrice/product/list`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OEM寻源单复购申请下订单商品列表
     * @name RepurchaseOrderSampleProductList
     * @summary 复购申请下样品单商品列表（前台）
     * @request GET:/oem/repurchase/order/sample/product/list
     */
    repurchaseOrderSampleProductList: (
      query?: {
        /**
         * searchSourceOrderRepurchaseApplyId
         * @format int64
         */
        searchSourceOrderRepurchaseApplyId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseOemOrderProductListDTO, any>({
        path: `/oem/repurchase/order/sample/product/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OEM寻源单复购申请下订单商品列表
     * @name RepurchaseOrderSampleUpdateSellPriceProductList
     * @summary 复购申请下样品单修改数量后的商品列表（前台）
     * @request POST:/oem/repurchase/order/sample/update/sellPrice/product/list
     */
    repurchaseOrderSampleUpdateSellPriceProductList: (
      vo: RepurchaseSellQuantityProductListVO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponseOemOrderProductListDTO, any>({
        path: `/oem/repurchase/order/sample/update/sellPrice/product/list`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),
  };
  ops = {
    /**
     * No description
     *
     * @tags ops-controller
     * @name DeleteAbnormalDeliveryOrder
     * @summary deleteAbnormalDeliveryOrder
     * @request POST:/ops/deleteAbnormalDeliveryOrder
     */
    deleteAbnormalDeliveryOrder: (orderNos: string[], params: RequestParams = {}) =>
      this.request<BizResponseVoid, any>({
        path: `/ops/deleteAbnormalDeliveryOrder`,
        method: "POST",
        body: orderNos,
        type: ContentType.Json,
        ...params,
      }),
  };
  orderScript = {
    /**
     * No description
     *
     * @tags search-source-order-script-controller
     * @name ExpireOrder
     * @summary 将寻源单置为过期
     * @request GET:/orderScript/expireOrder
     */
    expireOrder: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/orderScript/expireOrder`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags search-source-order-script-controller
     * @name RunjobTest
     * @summary runJob
     * @request GET:/orderScript/runjob/test
     */
    runjobTest: (
      query: {
        /**
         * jobId
         * @format int64
         */
        jobId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/orderScript/runjob/test`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags search-source-order-script-controller
     * @name RunjobTest2
     * @summary runJob2
     * @request GET:/orderScript/runjob/test2
     */
    runjobTest2: (
      query: {
        /**
         * jobId
         * @format int64
         */
        jobId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/orderScript/runjob/test2`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags search-source-order-script-controller
     * @name UpdateRepurchaseData
     * @summary updateRepurchaseData
     * @request GET:/orderScript/updateRepurchaseData
     */
    updateRepurchaseData: (
      query?: {
        /** password */
        password?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/orderScript/updateRepurchaseData`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  orderSkuScript = {
    /**
     * No description
     *
     * @tags search-source-order-sku-script-controller
     * @name UpdateShopId
     * @summary 更新oem商品的店铺字段，新增店铺字段，数据需要补齐
     * @request GET:/orderSkuScript/updateShopId
     */
    updateShopId: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/orderSkuScript/updateShopId`,
        method: "GET",
        ...params,
      }),
  };
  orderTask = {
    /**
     * No description
     *
     * @tags order-task-controller
     * @name ClearTask
     * @summary clearTask
     * @request GET:/orderTask/clearTask
     */
    clearTask: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/orderTask/clearTask`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-task-controller
     * @name HeadOrderTask
     * @summary clearTask
     * @request HEAD:/orderTask/clearTask
     */
    headOrderTask: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/orderTask/clearTask`,
        method: "HEAD",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-task-controller
     * @name ClearTask2
     * @summary clearTask
     * @request POST:/orderTask/clearTask
     * @originalName clearTask
     * @duplicate
     */
    clearTask2: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/orderTask/clearTask`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-task-controller
     * @name ClearTask3
     * @summary clearTask
     * @request PUT:/orderTask/clearTask
     * @originalName clearTask
     * @duplicate
     */
    clearTask3: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/orderTask/clearTask`,
        method: "PUT",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-task-controller
     * @name ClearTask4
     * @summary clearTask
     * @request DELETE:/orderTask/clearTask
     * @originalName clearTask
     * @duplicate
     */
    clearTask4: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/orderTask/clearTask`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-task-controller
     * @name OptionsOrderTask
     * @summary clearTask
     * @request OPTIONS:/orderTask/clearTask
     */
    optionsOrderTask: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/orderTask/clearTask`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-task-controller
     * @name ClearTask5
     * @summary clearTask
     * @request PATCH:/orderTask/clearTask
     * @originalName clearTask
     * @duplicate
     */
    clearTask5: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/orderTask/clearTask`,
        method: "PATCH",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-task-controller
     * @name EasyOrderDeliveryCreate
     * @summary easyOrderDeliveryCreate
     * @request POST:/orderTask/easyOrderDeliveryCreate
     */
    easyOrderDeliveryCreate: (
      easyOrderDeliveryCreateSource: EasyOrderDeliveryCreateSource,
      params: RequestParams = {},
    ) =>
      this.request<string, any>({
        path: `/orderTask/easyOrderDeliveryCreate`,
        method: "POST",
        body: easyOrderDeliveryCreateSource,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-task-controller
     * @name ResetTask
     * @summary resetTask
     * @request GET:/orderTask/resetTask
     */
    resetTask: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/orderTask/resetTask`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-task-controller
     * @name HeadOrderTask2
     * @summary resetTask
     * @request HEAD:/orderTask/resetTask
     * @originalName headOrderTask
     * @duplicate
     */
    headOrderTask2: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/orderTask/resetTask`,
        method: "HEAD",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-task-controller
     * @name ResetTask2
     * @summary resetTask
     * @request POST:/orderTask/resetTask
     * @originalName resetTask
     * @duplicate
     */
    resetTask2: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/orderTask/resetTask`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-task-controller
     * @name ResetTask3
     * @summary resetTask
     * @request PUT:/orderTask/resetTask
     * @originalName resetTask
     * @duplicate
     */
    resetTask3: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/orderTask/resetTask`,
        method: "PUT",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-task-controller
     * @name ResetTask4
     * @summary resetTask
     * @request DELETE:/orderTask/resetTask
     * @originalName resetTask
     * @duplicate
     */
    resetTask4: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/orderTask/resetTask`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-task-controller
     * @name OptionsOrderTask2
     * @summary resetTask
     * @request OPTIONS:/orderTask/resetTask
     * @originalName optionsOrderTask
     * @duplicate
     */
    optionsOrderTask2: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/orderTask/resetTask`,
        method: "OPTIONS",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-task-controller
     * @name ResetTask5
     * @summary resetTask
     * @request PATCH:/orderTask/resetTask
     * @originalName resetTask
     * @duplicate
     */
    resetTask5: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/orderTask/resetTask`,
        method: "PATCH",
        type: ContentType.Json,
        ...params,
      }),
  };
  platformOrderDeliverAddress = {
    /**
     * No description
     *
     * @tags 平台订单详情（前台）
     * @name UpdateShippingAddress
     * @summary 修改收货地址
     * @request POST:/platformOrderDeliverAddress/updateShippingAddress
     */
    updateShippingAddress: (reqDTO: ShippingAddressReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/platformOrderDeliverAddress/updateShippingAddress`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  regularization = {
    /**
     * No description
     *
     * @tags 次品处理
     * @name BatchUpdateBecomeInvalid
     * @summary 次品作废
     * @request POST:/regularization/batchUpdateBecomeInvalid
     */
    batchUpdateBecomeInvalid: (pkgCodes: string[], params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/regularization/batchUpdateBecomeInvalid`,
        method: "POST",
        body: pkgCodes,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 次品处理
     * @name BatchUpdateBecomeRegular
     * @summary 次品转正
     * @request POST:/regularization/batchUpdateBecomeRegular
     */
    batchUpdateBecomeRegular: (reqDTO: BecomeRegularReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/regularization/batchUpdateBecomeRegular`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 次品处理
     * @name ConfirmPayReselectBadAddition
     * @summary 确认支付次转正附加项
     * @request POST:/regularization/confirmPayReselectBadAddition
     */
    confirmPayReselectBadAddition: (reqDTO: ConfirmPayReselectBadAdditionReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/regularization/confirmPayReselectBadAddition`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 次品处理
     * @name ConversionRecord
     * @summary 转正记录
     * @request POST:/regularization/conversionRecord
     */
    conversionRecord: (reqDTO: ConversionRecordReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListConversionRecordRespDTO, any>({
        path: `/regularization/conversionRecord`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 次品处理
     * @name GetBadAddition
     * @summary 获取次转正附加项
     * @request POST:/regularization/getBadAddition
     */
    getBadAddition: (reqDTO: BadAdditionalItemsReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBadAdditionalItemsRespDTO, any>({
        path: `/regularization/getBadAddition`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 次品处理
     * @name GetReselectBadAddition
     * @summary 获取重选次转正附加项
     * @request POST:/regularization/getReselectBadAddition
     */
    getReselectBadAddition: (
      query: {
        /** orderAdditionCode */
        orderAdditionCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListInboundOrderAdditionRespDTO, any>({
        path: `/regularization/getReselectBadAddition`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 次品处理
     * @name PageBad
     * @summary 订单次品处理分页
     * @request POST:/regularization/pageBad
     */
    pageBad: (reqDTO: BadPendingReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBadPendingRespDTO, any>({
        path: `/regularization/pageBad`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 次品处理
     * @name PendingBadQuantity
     * @summary 待处理次品数
     * @request POST:/regularization/pendingBadQuantity
     */
    pendingBadQuantity: (shopProductSkus: string[], params: RequestParams = {}) =>
      this.request<BizResponseListPendingBadQuantityRespDTO, any>({
        path: `/regularization/pendingBadQuantity`,
        method: "POST",
        body: shopProductSkus,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 次品处理
     * @name SaveReselectBadAddition
     * @summary 保存次转正附加项
     * @request POST:/regularization/saveReselectBadAddition
     */
    saveReselectBadAddition: (reqDTO: SaveBadAdditionalItemsReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/regularization/saveReselectBadAddition`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  searchSourceOrder = {
    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateAcceptOrder
     * @summary 接单（后台）
     * @request POST:/searchSourceOrder/operate/acceptOrder
     */
    operateAcceptOrder: (searchSourceOrderId: number, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/acceptOrder`,
        method: "POST",
        body: searchSourceOrderId,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateAcceptWaitAcceptOrderSendAdjustApply
     * @summary 接受调整申请（前台）【废弃】
     * @request POST:/searchSourceOrder/operate/acceptWaitAcceptOrderSendAdjustApply
     */
    operateAcceptWaitAcceptOrderSendAdjustApply: (
      query: {
        /**
         * searchSourceOrderId
         * @format int64
         */
        searchSourceOrderId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/acceptWaitAcceptOrderSendAdjustApply`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateApplyRefund
     * @summary  申请退款（前台）
     * @request GET:/searchSourceOrder/operate/applyRefund
     */
    operateApplyRefund: (
      query: {
        /**
         * searchSourceOrderId
         * @format int64
         */
        searchSourceOrderId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/applyRefund`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateApprovePurchasePriceAbandon
     * @summary 审核报价废弃（后台）
     * @request POST:/searchSourceOrder/operate/approvePurchasePriceAbandon
     */
    operateApprovePurchasePriceAbandon: (vo: ApprovePurchasePriceVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/approvePurchasePriceAbandon`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateApprovePurchasePriceNotPass
     * @summary 审核报价不通过（后台）
     * @request POST:/searchSourceOrder/operate/approvePurchasePriceNotPass
     */
    operateApprovePurchasePriceNotPass: (vo: ApprovePurchasePriceVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/approvePurchasePriceNotPass`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateApprovePurchasePricePass
     * @summary 审核报价通过（后台）
     * @request POST:/searchSourceOrder/operate/approvePurchasePricePass
     */
    operateApprovePurchasePricePass: (vo: ApprovePurchasePriceVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/approvePurchasePricePass`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateApprovePurchasePriceToBeConfirmed
     * @summary 审核报价待定（后台）
     * @request POST:/searchSourceOrder/operate/approvePurchasePriceToBeConfirmed
     */
    operateApprovePurchasePriceToBeConfirmed: (vo: ApprovePurchasePriceVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/approvePurchasePriceToBeConfirmed`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateAutoQuote
     * @summary 系统报价
     * @request POST:/searchSourceOrder/operate/autoQuote
     */
    operateAutoQuote: (autoQuoteReqDTO: AutoQuoteReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseVoid, any>({
        path: `/searchSourceOrder/operate/autoQuote`,
        method: "POST",
        body: autoQuoteReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateBackendBatchAdjustPrice
     * @summary 批量调整采购报价（后台）
     * @request POST:/searchSourceOrder/operate/backend/batchAdjustPrice
     */
    operateBackendBatchAdjustPrice: (vos: ReportPurchasePriceVO[], params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/backend/batchAdjustPrice`,
        method: "POST",
        body: vos,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateBatchFillSellPrice
     * @summary 提交销售价（后台）
     * @request POST:/searchSourceOrder/operate/batchFillSellPrice
     */
    operateBatchFillSellPrice: (vos: FillSellPriceVO[], params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/batchFillSellPrice`,
        method: "POST",
        body: vos,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateBatchReportPurchasePrice
     * @summary 批量报采购价（后台）
     * @request POST:/searchSourceOrder/operate/batchReportPurchasePrice
     */
    operateBatchReportPurchasePrice: (vos: ReportPurchasePriceVO[], params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/batchReportPurchasePrice`,
        method: "POST",
        body: vos,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateBatchUpdatePurchasePrice
     * @summary 批量报采购价（后台）
     * @request POST:/searchSourceOrder/operate/batchUpdatePurchasePrice
     */
    operateBatchUpdatePurchasePrice: (vos: ReportPurchasePriceVO[], params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/batchUpdatePurchasePrice`,
        method: "POST",
        body: vos,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateCancleDistribute
     * @summary 取消分配寻源单（后台）
     * @request POST:/searchSourceOrder/operate/cancleDistribute
     */
    operateCancleDistribute: (vo: SearchSourceOrderCancelDistributeVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/cancleDistribute`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateCancleWaitAcceptOrderSearchSourceOrder
     * @summary 取消待接单寻源单（前台）
     * @request GET:/searchSourceOrder/operate/cancleWaitAcceptOrderSearchSourceOrder
     */
    operateCancleWaitAcceptOrderSearchSourceOrder: (
      query: {
        /**
         * searchSourceOrderId
         * @format int64
         */
        searchSourceOrderId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/cancleWaitAcceptOrderSearchSourceOrder`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateCancleWaitPublishSearchSourceOrder
     * @summary 取消待发布寻源单（前台）
     * @request GET:/searchSourceOrder/operate/cancleWaitPublishSearchSourceOrder
     */
    operateCancleWaitPublishSearchSourceOrder: (
      query: {
        /**
         * searchSourceOrderId
         * @format int64
         */
        searchSourceOrderId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/cancleWaitPublishSearchSourceOrder`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateCopySearchSourceOrder
     * @summary 复制寻源单
     * @request GET:/searchSourceOrder/operate/copySearchSourceOrder
     */
    operateCopySearchSourceOrder: (
      query: {
        /** searchSourceOrderNo */
        searchSourceOrderNo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseLong, any>({
        path: `/searchSourceOrder/operate/copySearchSourceOrder`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateCreate
     * @summary 创建寻源单（前台）
     * @request POST:/searchSourceOrder/operate/create
     */
    operateCreate: (jsonParam: Record<string, object>, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/create`,
        method: "POST",
        body: jsonParam,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateCreateAndReportPrice
     * @summary 创建寻源单并报价（后台）
     * @request POST:/searchSourceOrder/operate/createAndReportPrice
     */
    operateCreateAndReportPrice: (vo: SearchSourceOrderCreateAndReportPriceVO, params: RequestParams = {}) =>
      this.request<BizResponseLong, any>({
        path: `/searchSourceOrder/operate/createAndReportPrice`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateCreateByVo
     * @summary 创建寻源单（前台）通过vo
     * @request POST:/searchSourceOrder/operate/createByVo
     */
    operateCreateByVo: (vo: SearchSourceOrderCreateVO, params: RequestParams = {}) =>
      this.request<BizResponseLong, any>({
        path: `/searchSourceOrder/operate/createByVo`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateCustomerUpdate
     * @summary 客户编辑寻源单（前台）
     * @request POST:/searchSourceOrder/operate/customerUpdate
     */
    operateCustomerUpdate: (jsonParam: Record<string, object>, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/customerUpdate`,
        method: "POST",
        body: jsonParam,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateCustomerUpdateByVo
     * @summary 客户编辑寻源单（前台）通过vo
     * @request POST:/searchSourceOrder/operate/customerUpdateByVo
     */
    operateCustomerUpdateByVo: (vo: UpdateSearchSourceOrderVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/customerUpdateByVo`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateDdConfirmApprovePassRejectAbort
     * @summary 担当确认审核驳回的拒绝申请（后台）
     * @request POST:/searchSourceOrder/operate/ddConfirmApprovePassRejectAbort
     */
    operateDdConfirmApprovePassRejectAbort: (vo: RejectApplyApproveNotPassVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/ddConfirmApprovePassRejectAbort`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateDdConfirmApprovePassRejectApply
     * @summary 担当确认审核通过的拒绝申请（后台）
     * @request POST:/searchSourceOrder/operate/ddConfirmApprovePassRejectApply
     */
    operateDdConfirmApprovePassRejectApply: (vo: RejectApplyApproveNotPassVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/ddConfirmApprovePassRejectApply`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateDdReportSellPrice
     * @summary  担当报销售价（后台）
     * @request POST:/searchSourceOrder/operate/ddReportSellPrice
     */
    operateDdReportSellPrice: (searchSourceOrderId: number, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/ddReportSellPrice`,
        method: "POST",
        body: searchSourceOrderId,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateDdTranslateRejectRemark
     * @summary 担当翻译拒绝理由（后台）
     * @request POST:/searchSourceOrder/operate/ddTranslateRejectRemark
     */
    operateDdTranslateRejectRemark: (vo: DdTranslateRejectRemarkVo, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/ddTranslateRejectRemark`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateDistribute
     * @summary 分配寻源单（后台）
     * @request POST:/searchSourceOrder/operate/distribute
     */
    operateDistribute: (vo: SearchSourceOrderDistributeVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/distribute`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateDoBatchSavePrice
     * @summary 保存销售价（后台）
     * @request POST:/searchSourceOrder/operate/doBatchSavePrice
     */
    operateDoBatchSavePrice: (vos: FillSellPriceVO[], params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/doBatchSavePrice`,
        method: "POST",
        body: vos,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateFillSellPrice
     * @summary 填写销售价（后台）
     * @request POST:/searchSourceOrder/operate/fillSellPrice
     */
    operateFillSellPrice: (vo: FillSellPriceVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/fillSellPrice`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateIsCharged
     * @summary 查询寻源单是否收费
     * @request GET:/searchSourceOrder/operate/isCharged
     */
    operateIsCharged: (
      query: {
        /**
         * searchSourceOrderId
         * @format int64
         */
        searchSourceOrderId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/isCharged`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperatePublish
     * @summary 发布寻源单（前台）
     * @request GET:/searchSourceOrder/operate/publish
     */
    operatePublish: (
      query: {
        /**
         * customerShopID
         * @format int64
         */
        customerShopID: number;
        /**
         * searchSourceOrderId
         * @format int64
         */
        searchSourceOrderId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/publish`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperatePurchaseManagerReject
     * @summary 采购主管待分配时拒绝（后台）
     * @request POST:/searchSourceOrder/operate/purchaseManagerReject
     */
    operatePurchaseManagerReject: (vo: PurchaseManagerRejectVo, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/purchaseManagerReject`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateRecheckNotPass
     * @summary 复审不通过（后台）
     * @request POST:/searchSourceOrder/operate/recheckNotPass
     */
    operateRecheckNotPass: (vo: RecheckVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/recheckNotPass`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateRecheckPass
     * @summary 复审通过（后台）
     * @request POST:/searchSourceOrder/operate/recheckPass
     */
    operateRecheckPass: (vo: RecheckVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/recheckPass`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateRecheckSubmit
     * @summary 复审提交（后台）
     * @request POST:/searchSourceOrder/operate/recheckSubmit
     * @deprecated
     */
    operateRecheckSubmit: (vo: RecheckSubmitVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/recheckSubmit`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateReject
     * @summary 拒绝（后台）
     * @request POST:/searchSourceOrder/operate/reject
     */
    operateReject: (vo: RejectVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/reject`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateRejectApplyApproveNotPass
     * @summary 拒绝申请审核不通过（后台）
     * @request POST:/searchSourceOrder/operate/rejectApplyApproveNotPass
     */
    operateRejectApplyApproveNotPass: (vo: RejectApplyApproveNotPassVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/rejectApplyApproveNotPass`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateRejectApplyApprovePass
     * @summary  拒绝申请通过（后台）
     * @request POST:/searchSourceOrder/operate/rejectApplyApprovePass
     */
    operateRejectApplyApprovePass: (
      query: {
        /**
         * searchSourceOrderId
         * @format int64
         */
        searchSourceOrderId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/rejectApplyApprovePass`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateRejectWaitAcceptOrderSendAdjustApply
     * @summary 拒绝调整申请（前台）【废弃】
     * @request POST:/searchSourceOrder/operate/rejectWaitAcceptOrderSendAdjustApply
     * @deprecated
     */
    operateRejectWaitAcceptOrderSendAdjustApply: (
      query: {
        /**
         * searchSourceOrderId
         * @format int64
         */
        searchSourceOrderId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/rejectWaitAcceptOrderSendAdjustApply`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateReportePurchasePrice
     * @summary 报采购价（后台）
     * @request POST:/searchSourceOrder/operate/reportePurchasePrice
     */
    operateReportePurchasePrice: (vo: ReportPurchasePriceVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/reportePurchasePrice`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateSendAdjustApplyAoWaitAcceptOrder
     * @summary 担当对待接单寻源单发起调整申请（后台）【废弃】
     * @request POST:/searchSourceOrder/operate/sendAdjustApplyAoWaitAcceptOrder
     * @deprecated
     */
    operateSendAdjustApplyAoWaitAcceptOrder: (vo: SendAdjustApplyAoWaitAcceptOrderVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/sendAdjustApplyAoWaitAcceptOrder`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateSendRejectApply
     * @summary 待审核采购价---发起拒绝申请（后台）
     * @request POST:/searchSourceOrder/operate/sendRejectApply
     */
    operateSendRejectApply: (vo: SearchSourceOrderSendRejectApplyVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/sendRejectApply`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateSendRejectApplyByPurchaser
     * @summary 待报采购价----发起拒绝申请（后台）
     * @request POST:/searchSourceOrder/operate/sendRejectApplyByPurchaser
     */
    operateSendRejectApplyByPurchaser: (vo: SearchSourceOrderSendRejectApplyVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/sendRejectApplyByPurchaser`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateSendRejectForOfferSellPrice
     * @summary 待审报价内容---发起拒绝申请（后台）
     * @request POST:/searchSourceOrder/operate/sendRejectForOfferSellPrice
     */
    operateSendRejectForOfferSellPrice: (vo: SearchSourceOrderSendRejectApplyVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/sendRejectForOfferSellPrice`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateSupplierPriceOperate
     * @summary 前台拒绝或者接受报价接口
     * @request POST:/searchSourceOrder/operate/supplierPriceOperate
     */
    operateSupplierPriceOperate: (supplierPriceOperateVO: SupplierPriceOperateVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/supplierPriceOperate`,
        method: "POST",
        body: supplierPriceOperateVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateUpdateCustomerExpect
     * @summary 修改客户期望价格、起订量和sku数量（后台）
     * @request POST:/searchSourceOrder/operate/updateCustomerExpect
     */
    operateUpdateCustomerExpect: (vo: UpdateCustomerExpectVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/updateCustomerExpect`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateUserUpdate
     * @summary 用户编辑寻源单（后台）
     * @request POST:/searchSourceOrder/operate/userUpdate
     */
    operateUserUpdate: (jsonParam: Record<string, object>, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/userUpdate`,
        method: "POST",
        body: jsonParam,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源订单操作接口（前后台操作）
     * @name OperateUserUpdateByVo
     * @summary 用户编辑寻源单（后台）用于翻译  通过vo
     * @request POST:/searchSourceOrder/operate/userUpdateByVo
     */
    operateUserUpdateByVo: (vo: UpdateSearchSourceOrderVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrder/operate/userUpdateByVo`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单查看接口
     * @name ShowDetail
     * @summary 寻源单详情（前台+后台）
     * @request GET:/searchSourceOrder/show/detail
     */
    showDetail: (
      query?: {
        /**
         * searchSourceOrderId
         * @format int64
         */
        searchSourceOrderId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseSearchSourceOrderDetailDTO, any>({
        path: `/searchSourceOrder/show/detail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单查看接口
     * @name ShowFindProductClassificationRights
     * @summary 查询用户可寻源产品类型权益
     * @request GET:/searchSourceOrder/show/findProductClassificationRights
     */
    showFindProductClassificationRights: (params: RequestParams = {}) =>
      this.request<BizResponseCreateSearchSourceRightsStatusVO, any>({
        path: `/searchSourceOrder/show/findProductClassificationRights`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单查看接口
     * @name ShowGetRelatedDetail
     * @summary  寻源单列表（前台）关联商品用 详情
     * @request GET:/searchSourceOrder/show/getRelatedDetail
     */
    showGetRelatedDetail: (
      query: {
        /** productSku */
        productSku: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseSearchSourceOrderListItemDTO, any>({
        path: `/searchSourceOrder/show/getRelatedDetail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单查看接口
     * @name ShowList
     * @summary 寻源单列表查询接口（前台）
     * @request POST:/searchSourceOrder/show/list
     */
    showList: (vo: SearchSourceOrderListVO, params: RequestParams = {}) =>
      this.request<BizResponsePageResultSearchSourceOrderListItemDTO, any>({
        path: `/searchSourceOrder/show/list`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单查看接口
     * @name ShowListRelated
     * @summary  寻源单列表（前台）关联商品用
     * @request POST:/searchSourceOrder/show/listRelated
     */
    showListRelated: (vo: SearchSourceOrderListRelatedVO, params: RequestParams = {}) =>
      this.request<BizResponsePageResultSearchSourceOrderListItemDTO, any>({
        path: `/searchSourceOrder/show/listRelated`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单查看接口
     * @name ShowPlatformList
     * @summary  寻源单列表（后台）
     * @request POST:/searchSourceOrder/show/platform/list
     */
    showPlatformList: (vo: SearchSourceOrderListVO, params: RequestParams = {}) =>
      this.request<BizResponsePageResultSearchSourceOrderPlatformBackendListItemDTO, any>({
        path: `/searchSourceOrder/show/platform/list`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单查看接口
     * @name ShowPlatformListAll
     * @summary  寻源单列表-汇总列表（后台）
     * @request POST:/searchSourceOrder/show/platform/list/all
     */
    showPlatformListAll: (vo: SearchSourceOrderListVO, params: RequestParams = {}) =>
      this.request<BizResponsePageResultSearchSourceOrderPlatformBackendListItemDTO, any>({
        path: `/searchSourceOrder/show/platform/list/all`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单查看接口
     * @name ShowPlatformListCount
     * @summary OEM后台列表数量（后台）
     * @request GET:/searchSourceOrder/show/platform/list/count
     */
    showPlatformListCount: (params: RequestParams = {}) =>
      this.request<BizResponseOemPlatformListCountDTO, any>({
        path: `/searchSourceOrder/show/platform/list/count`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单查看接口
     * @name ShowPlatformListCountV1
     * @summary OEM列表数量统计（前台）
     * @request GET:/searchSourceOrder/show/platform/list/count/v1
     */
    showPlatformListCountV1: (params: RequestParams = {}) =>
      this.request<BizResponseOemPlatformListCountDTO, any>({
        path: `/searchSourceOrder/show/platform/list/count/v1`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单查看接口
     * @name ShowPlatformListCountV2
     * @summary OEM后台列表数量（前台）
     * @request POST:/searchSourceOrder/show/platform/list/count/v2
     */
    showPlatformListCountV2: (param: SearchSourceOrderListVO, params: RequestParams = {}) =>
      this.request<BizResponseOemPlatformListCountV2DTO, any>({
        path: `/searchSourceOrder/show/platform/list/count/v2`,
        method: "POST",
        body: param,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags search-source-order-oem-sku-controller
     * @name SkuBatchUpdateBackend
     * @summary 批量更新接口(后台)
     * @request POST:/searchSourceOrder/sku/batchUpdate/backend
     */
    skuBatchUpdateBackend: (vo: OemSkuUpdateVO, params: RequestParams = {}) =>
      this.request<BizResponseInt, any>({
        path: `/searchSourceOrder/sku/batchUpdate/backend`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags search-source-order-oem-sku-controller
     * @name SkuList
     * @summary 获取oem商品列表（前台）
     * @request POST:/searchSourceOrder/sku/list
     */
    skuList: (vo: SearchSourceOrderSkuQueryDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageResultSearchSourceOrderSkuVO, any>({
        path: `/searchSourceOrder/sku/list`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags search-source-order-oem-sku-controller
     * @name SkuListBackend
     * @summary 获取oem商品列表（后台）
     * @request POST:/searchSourceOrder/sku/list/backend
     */
    skuListBackend: (vo: SearchSourceOrderSkuQueryDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageResultSearchSourceOrderSkuVO, any>({
        path: `/searchSourceOrder/sku/list/backend`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags search-source-order-oem-sku-controller
     * @name SkuOperateLog
     * @summary 获取oem商品操作日志
     * @request GET:/searchSourceOrder/sku/operateLog
     */
    skuOperateLog: (
      query: {
        /**
         * productSku
         * @format int64
         */
        productSku: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListOperateLogVO, any>({
        path: `/searchSourceOrder/sku/operateLog`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags search-source-order-oem-sku-controller
     * @name SkuUpdateBackend
     * @summary 更新单个sku商品（后台）
     * @request POST:/searchSourceOrder/sku/update/backend
     */
    skuUpdateBackend: (vo: SearchSourceOrderSkuUpdateVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/searchSourceOrder/sku/update/backend`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),
  };
  searchSourceOrderLog = {
    /**
     * No description
     *
     * @tags 寻源单日志
     * @name CustomerList
     * @summary 日志列表（前台）
     * @request GET:/searchSourceOrderLog/customer/list
     */
    customerList: (
      query?: {
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        /** @format int64 */
        searchSourceOrderId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageInfoSearchSourceOrderLog, any>({
        path: `/searchSourceOrderLog/customer/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单日志
     * @name List
     * @summary 日志列表（后台）
     * @request GET:/searchSourceOrderLog/list
     */
    list: (
      query?: {
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        /** @format int64 */
        searchSourceOrderId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageInfoSearchSourceOrderLog, any>({
        path: `/searchSourceOrderLog/list`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  searchSourceOrderRepurchaseApply = {
    /**
     * No description
     *
     * @tags 寻源单复购申请操作
     * @name OperateAgree
     * @summary 客户同意（前台）
     * @request GET:/searchSourceOrderRepurchaseApply/operate/agree
     */
    operateAgree: (
      query: {
        /**
         * searchSourceOrderRepurchaseApplyId
         * @format int64
         */
        searchSourceOrderRepurchaseApplyId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrderRepurchaseApply/operate/agree`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单复购申请操作
     * @name OperateCreate
     * @summary 创建寻源单复购申请（前台）
     * @request GET:/searchSourceOrderRepurchaseApply/operate/create
     */
    operateCreate: (
      query: {
        /**
         * searchSourceOrderId
         * @format int64
         */
        searchSourceOrderId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrderRepurchaseApply/operate/create`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单复购申请操作
     * @name OperateDdReportSellPrice
     * @summary 担当报销售价（后台）
     * @request POST:/searchSourceOrderRepurchaseApply/operate/ddReportSellPrice
     */
    operateDdReportSellPrice: (
      query?: {
        /**
         * searchSourceOrderRepurchaseApplyId
         * @format int64
         */
        searchSourceOrderRepurchaseApplyId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrderRepurchaseApply/operate/ddReportSellPrice`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单复购申请操作
     * @name OperateFillSellPrice
     * @summary 填写销售价（后台）
     * @request POST:/searchSourceOrderRepurchaseApply/operate/fillSellPrice
     */
    operateFillSellPrice: (vo: RepurchaseFillSellPriceVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrderRepurchaseApply/operate/fillSellPrice`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单复购申请操作
     * @name OperateRecheckNotPass
     * @summary 复审不通过（后台）
     * @request POST:/searchSourceOrderRepurchaseApply/operate/recheckNotPass
     */
    operateRecheckNotPass: (vo: RepurchaseRecheckVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrderRepurchaseApply/operate/recheckNotPass`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单复购申请操作
     * @name OperateRecheckPass
     * @summary 复审通过（后台）
     * @request POST:/searchSourceOrderRepurchaseApply/operate/recheckPass
     */
    operateRecheckPass: (vo: RepurchaseRecheckVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrderRepurchaseApply/operate/recheckPass`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单复购申请操作
     * @name OperateReject
     * @summary 客户不同意（前台）
     * @request GET:/searchSourceOrderRepurchaseApply/operate/reject
     */
    operateReject: (
      query: {
        /**
         * searchSourceOrderRepurchaseApplyId
         * @format int64
         */
        searchSourceOrderRepurchaseApplyId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrderRepurchaseApply/operate/reject`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单复购申请操作
     * @name OperateReportePurchasePrice
     * @summary 报采购价（后台）
     * @request POST:/searchSourceOrderRepurchaseApply/operate/reportePurchasePrice
     */
    operateReportePurchasePrice: (vo: RepurchaseApplyReportePurchasePriceVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrderRepurchaseApply/operate/reportePurchasePrice`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单复购申请查看
     * @name ShowList
     * @summary 寻源单复购申请列表（前台）
     * @request GET:/searchSourceOrderRepurchaseApply/show/list
     */
    showList: (
      query?: {
        /** @format int64 */
        customerId?: number;
        /** @format int64 */
        customerShopId?: number;
        /** @format int64 */
        oemProductClassificationId?: number;
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        productName?: string;
        productNameZh?: string;
        /** @format int32 */
        repurchaseApplyStatus?: number;
        repurchaseApplyStatusList?: string;
        searchSourceOrderNo?: string;
        searchSourceOrderRepurchaseApplyNo?: string;
        /** @format date-time */
        timeEnd?: string;
        /** @format date-time */
        timeStart?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageSearchSourceOrderRepurchaseApplyListItemDTO, any>({
        path: `/searchSourceOrderRepurchaseApply/show/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单复购申请查看
     * @name ShowPlatformList
     * @summary 寻源单复购申请列表（后台）
     * @request GET:/searchSourceOrderRepurchaseApply/show/platform/list
     */
    showPlatformList: (
      query?: {
        /** @format int64 */
        customerId?: number;
        /** @format int64 */
        customerShopId?: number;
        /** @format int64 */
        oemProductClassificationId?: number;
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        productName?: string;
        productNameZh?: string;
        /** @format int32 */
        repurchaseApplyStatus?: number;
        repurchaseApplyStatusList?: string;
        searchSourceOrderNo?: string;
        searchSourceOrderRepurchaseApplyNo?: string;
        /** @format date-time */
        timeEnd?: string;
        /** @format date-time */
        timeStart?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageSearchSourceOrderRepurchaseApplyPlatformListItemDTO, any>({
        path: `/searchSourceOrderRepurchaseApply/show/platform/list`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  searchSourceOrderRepurchaseApplyLog = {
    /**
     * No description
     *
     * @tags 寻源单复购申请日志
     * @name CustomerList
     * @summary 日志列表（前台）
     * @request GET:/searchSourceOrderRepurchaseApplyLog/customer/list
     */
    customerList: (
      query?: {
        /**
         * searchSourceOrderRepurchaseApplyId
         * @format int64
         */
        searchSourceOrderRepurchaseApplyId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListSearchSourceOrderRepurchaseApplyLog, any>({
        path: `/searchSourceOrderRepurchaseApplyLog/customer/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单复购申请日志
     * @name List
     * @summary 日志列表（后台）
     * @request GET:/searchSourceOrderRepurchaseApplyLog/list
     */
    list: (
      query?: {
        /**
         * searchSourceOrderRepurchaseApplyId
         * @format int64
         */
        searchSourceOrderRepurchaseApplyId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListSearchSourceOrderRepurchaseApplyLog, any>({
        path: `/searchSourceOrderRepurchaseApplyLog/list`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  searchSourceOrderRepurchaseApplySupplierPrice = {
    /**
     * No description
     *
     * @tags 寻源单复购申请报价查看
     * @name ShowDetail
     * @summary 寻源单复购申请报价详情（前台+后台）
     * @request GET:/searchSourceOrderRepurchaseApplySupplierPrice/show/detail
     */
    showDetail: (
      query?: {
        /**
         * searchSourceOrderRepurchaseApplySupplierPriceId
         * @format int64
         */
        searchSourceOrderRepurchaseApplySupplierPriceId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseSearchSourceOrderRepurchaseApplySupplierPriceDTO, any>({
        path: `/searchSourceOrderRepurchaseApplySupplierPrice/show/detail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单复购申请报价查看
     * @name ShowPlatformList
     * @summary 寻源单复购申请报价列表（后台）
     * @request GET:/searchSourceOrderRepurchaseApplySupplierPrice/show/platform/list
     */
    showPlatformList: (
      query?: {
        /** @format int64 */
        oemProductClassificationId?: number;
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        productName?: string;
        productNameZh?: string;
        searchSourceOrderNo?: string;
        searchSourceOrderRepurchaseApplyNo?: string;
        /** @format date-time */
        timeEnd?: string;
        /** @format date-time */
        timeStart?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageResultSearchSourceOrderRepurchaseApplySupplierPricePlatformListItemDTO, any>({
        path: `/searchSourceOrderRepurchaseApplySupplierPrice/show/platform/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单复购申请报价查看
     * @name ShowTranslate
     * @summary 寻源单复购申请报价翻译（后台）
     * @request POST:/searchSourceOrderRepurchaseApplySupplierPrice/show/translate
     */
    showTranslate: (vo: RepurchaseApplyPriceTranslateVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrderRepurchaseApplySupplierPrice/show/translate`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),
  };
  searchSourceOrderSupplierPrice = {
    /**
     * No description
     *
     * @tags 寻源单报价查看接口
     * @name ShowAutoRemindExpireTime
     * @summary 自动提醒即将过期的报价
     * @request POST:/searchSourceOrderSupplierPrice/show/autoRemindExpireTime
     */
    showAutoRemindExpireTime: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/searchSourceOrderSupplierPrice/show/autoRemindExpireTime`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单报价查看接口
     * @name ShowBackendGetSupplierPriceList
     * @summary 寻源单报价详情（后台）
     * @request GET:/searchSourceOrderSupplierPrice/show/backend/getSupplierPriceList
     */
    showBackendGetSupplierPriceList: (
      query: {
        /** searchSourceOrderNo */
        searchSourceOrderNo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseSearchSourceOrderSupplierPriceListDTO, any>({
        path: `/searchSourceOrderSupplierPrice/show/backend/getSupplierPriceList`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单报价查看接口
     * @name ShowBackendGetSupplierPriceListWithStatus
     * @summary 寻源单报价详情（后台）
     * @request POST:/searchSourceOrderSupplierPrice/show/backend/getSupplierPriceListWithStatus
     */
    showBackendGetSupplierPriceListWithStatus: (priceQueryVO: PriceQueryVO, params: RequestParams = {}) =>
      this.request<BizResponseSearchSourceOrderSupplierPriceListDTO, any>({
        path: `/searchSourceOrderSupplierPrice/show/backend/getSupplierPriceListWithStatus`,
        method: "POST",
        body: priceQueryVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单报价查看接口
     * @name ShowBatchTranslate
     * @summary 批量寻源单报价翻译（后台）
     * @request POST:/searchSourceOrderSupplierPrice/show/batch/translate
     */
    showBatchTranslate: (vos: PriceTranslateVO[], params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrderSupplierPrice/show/batch/translate`,
        method: "POST",
        body: vos,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单报价查看接口
     * @name ShowDetail
     * @summary 寻源单报价详情（前台+后台）
     * @request GET:/searchSourceOrderSupplierPrice/show/detail
     */
    showDetail: (
      query?: {
        /**
         * searchSourceOrderSupplierPriceId
         * @format int64
         */
        searchSourceOrderSupplierPriceId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseSearchSourceOrderSupplierPriceDetailDTO, any>({
        path: `/searchSourceOrderSupplierPrice/show/detail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单报价查看接口
     * @name ShowGetSupplierPriceList
     * @summary 寻源单报价详情（前台）
     * @request GET:/searchSourceOrderSupplierPrice/show/getSupplierPriceList
     */
    showGetSupplierPriceList: (
      query?: {
        /** searchSourceOrderNo */
        searchSourceOrderNo?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseSearchSourceOrderSupplierPriceListDTO, any>({
        path: `/searchSourceOrderSupplierPrice/show/getSupplierPriceList`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单报价查看接口
     * @name ShowPlatformList
     * @summary 寻源单报价列表（后台）
     * @request GET:/searchSourceOrderSupplierPrice/show/platform/list
     */
    showPlatformList: (
      query?: {
        /**
         * OEM商品分类表id
         * @format int64
         */
        oemProductClassificationId?: number;
        /**
         * 页码
         * @format int32
         */
        pageNum?: number;
        /**
         * 页面大小
         * @format int32
         */
        pageSize?: number;
        /** 产品名称 */
        productName?: string;
        /** 产品名称(中文) */
        productNameZh?: string;
        /** 寻源单编号 */
        searchSourceOrderNo?: string;
        /**
         * 结束时间
         * @format date-time
         */
        timeEnd?: string;
        /**
         * 起始时间
         * @format date-time
         */
        timeStart?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageResultSearchSourceOrderSupplierPricePlatformListItemDTO, any>({
        path: `/searchSourceOrderSupplierPrice/show/platform/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单报价查看接口
     * @name ShowSupplierPriceOperate
     * @summary 寻源单报价操作（前台）（拒绝或者接受）
     * @request POST:/searchSourceOrderSupplierPrice/show/supplierPriceOperate
     */
    showSupplierPriceOperate: (priceOperateVO: PriceOperateVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/searchSourceOrderSupplierPrice/show/supplierPriceOperate`,
        method: "POST",
        body: priceOperateVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单报价查看接口
     * @name ShowTranslate
     * @summary 寻源单报价翻译（后台）
     * @request POST:/searchSourceOrderSupplierPrice/show/translate
     */
    showTranslate: (vo: PriceTranslateVO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/searchSourceOrderSupplierPrice/show/translate`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),
  };
  searchSourceOrdereValuation = {
    /**
     * No description
     *
     * @tags 寻源单评价
     * @name PostSearchSourceOrdereValuation
     * @summary 添加评价（前台）
     * @request POST:/searchSourceOrdereValuation/add
     */
    postSearchSourceOrdereValuation: (vo: SearchSourceOrdereValuationAddVO, params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/searchSourceOrdereValuation/add`,
        method: "POST",
        body: vo,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源单评价
     * @name Detail
     * @summary 寻源单评价详情（前台+后台）
     * @request GET:/searchSourceOrdereValuation/detail
     */
    detail: (
      query?: {
        /**
         * searchSourceOrderId
         * @format int64
         */
        searchSourceOrderId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseSearchSourceOrderEvaluation, any>({
        path: `/searchSourceOrdereValuation/detail`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  searchSourceType = {
    /**
     * No description
     *
     * @tags 寻源费用配置接口
     * @name Edit
     * @summary 修改寻源费用
     * @request POST:/searchSourceType/edit
     */
    edit: (searchSourceType: SearchSourceType, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/searchSourceType/edit`,
        method: "POST",
        body: searchSourceType,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源费用配置接口
     * @name List
     * @summary 获取寻源费用配置列表
     * @request GET:/searchSourceType/list
     */
    list: (
      query: {
        /** stationCode */
        stationCode: string;
        /**
         * supportCustomizationFlag
         * @format int32
         */
        supportCustomizationFlag: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListSearchSourceType, any>({
        path: `/searchSourceType/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 寻源费用配置接口
     * @name Logs
     * @summary listLogs
     * @request GET:/searchSourceType/logs
     */
    logs: (
      query?: {
        /**
         * id
         * @format int64
         */
        id?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListOperateLogVO, any>({
        path: `/searchSourceType/logs`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  shop = {
    /**
     * No description
     *
     * @tags 客户店铺sku
     * @name ProductSkuBatchBindAmazonSku
     * @summary 一键绑定亚马逊sku
     * @request POST:/shop/product/sku/batchBindAmazonSku
     */
    productSkuBatchBindAmazonSku: (params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/shop/product/sku/batchBindAmazonSku`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺sku
     * @name ProductSkuBatchEditFileFeign
     * @summary 批量编辑客户店铺sku文件
     * @request POST:/shop/product/sku/batchEditFileFeign
     */
    productSkuBatchEditFileFeign: (reqDTOList: EditShopProductSkuFileReqDTO[], params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/shop/product/sku/batchEditFileFeign`,
        method: "POST",
        body: reqDTOList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺sku
     * @name ProductSkuBatchSaveIfAbsent
     * @summary batchSaveIfAbsent
     * @request POST:/shop/product/sku/batchSaveIfAbsent
     */
    productSkuBatchSaveIfAbsent: (reqDtoList: ImportStockReqDTO[], params: RequestParams = {}) =>
      this.request<BizResponseListShopProductSkuDTO, any>({
        path: `/shop/product/sku/batchSaveIfAbsent`,
        method: "POST",
        body: reqDtoList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺sku
     * @name ProductSkuBindAmazonSku
     * @summary 绑定亚马逊sku
     * @request POST:/shop/product/sku/bindAmazonSku
     */
    productSkuBindAmazonSku: (dto: BindAmazonSkuReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/shop/product/sku/bindAmazonSku`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺sku
     * @name ProductSkuEdit
     * @summary 编辑客户店铺sku
     * @request POST:/shop/product/sku/edit
     */
    productSkuEdit: (reqDTO: ShopProductSkuReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/shop/product/sku/edit`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺sku
     * @name ProductSkuEditFileFeign
     * @summary 编辑客户店铺sku文件
     * @request POST:/shop/product/sku/editFileFeign
     */
    productSkuEditFileFeign: (reqDTO: EditShopProductSkuFileReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/shop/product/sku/editFileFeign`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺sku
     * @name ProductSkuExportAmazonSku
     * @summary 导出sku
     * @request POST:/shop/product/sku/exportAmazonSku
     */
    productSkuExportAmazonSku: (dto: ExportAmazonSkuReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/shop/product/sku/exportAmazonSku`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺sku
     * @name ProductSkuHasAvailableTransportationNums
     * @summary 是否有可用的在途库存
     * @request POST:/shop/product/sku/hasAvailableTransportationNums
     */
    productSkuHasAvailableTransportationNums: (reqDTO: OnTheWayStockQueryReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/shop/product/sku/hasAvailableTransportationNums`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺sku
     * @name ProductSkuList
     * @summary 客户店铺sku列表(b2b转用)
     * @request GET:/shop/product/sku/list
     */
    productSkuList: (
      query?: {
        amazonKeywordSku?: string;
        /** @format int64 */
        customerShopId?: number;
        keywordSku?: string;
        shopProductSku?: string;
        shopProductSkuList?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListShopProductSkuRespDTO, any>({
        path: `/shop/product/sku/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺sku
     * @name ProductSkuPage
     * @summary 客户店铺sku分页
     * @request GET:/shop/product/sku/page
     */
    productSkuPage: (
      query?: {
        /**
         * 下单标志: 0-未下单; 1-已下单
         * @format int32
         */
        customerProductSkuOrderFlag?: number;
        /** 商品sku/商品名称 */
        keywordName?: string;
        /** 商品sku/店铺商品sku/海外仓sku */
        keywordSku?: string;
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        /** 商品名称 */
        productTitle?: string;
        /**
         * 商品类型: 1-普通商品; 2-OEM商品; 3-组合商品
         * @format int32
         */
        productType?: number;
        /** @format int32 */
        startIndex?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageShopProductSkuRespDTO, any>({
        path: `/shop/product/sku/page`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺sku
     * @name ProductSkuPageMyInventory
     * @summary 分页我的商品库存
     * @request POST:/shop/product/sku/pageMyInventory
     */
    productSkuPageMyInventory: (pageDTO: MyInventoryQueryPageReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageMyInventoryRespDTO, any>({
        path: `/shop/product/sku/pageMyInventory`,
        method: "POST",
        body: pageDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺sku
     * @name ProductSkuPageMyInventoryList
     * @summary 我的商品库存列表
     * @request POST:/shop/product/sku/pageMyInventoryList
     */
    productSkuPageMyInventoryList: (shopProductSkuList: string[], params: RequestParams = {}) =>
      this.request<BizResponseListMyInventoryRespDTO, any>({
        path: `/shop/product/sku/pageMyInventoryList`,
        method: "POST",
        body: shopProductSkuList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺sku
     * @name ProductSkuPageOnTheWayStock
     * @summary 分页获取在途库存列表
     * @request POST:/shop/product/sku/pageOnTheWayStock
     */
    productSkuPageOnTheWayStock: (reqDTO: OnTheWayStockQueryReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageResultOnTheWayStockQueryResoDTO, any>({
        path: `/shop/product/sku/pageOnTheWayStock`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺sku
     * @name ProductSkuQueryCustomerProductMsku
     * @summary 查询客户sku
     * @request POST:/shop/product/sku/queryCustomerProductMsku
     */
    productSkuQueryCustomerProductMsku: (queryDTO: ShopProductSkuQueryDTO, params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/shop/product/sku/queryCustomerProductMsku`,
        method: "POST",
        body: queryDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺sku
     * @name ProductSkuQueryProductMsku
     * @summary 查询客户sku
     * @request POST:/shop/product/sku/queryProductMsku
     */
    productSkuQueryProductMsku: (queryDTO: ShopProductSkuQueryDTO, params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/shop/product/sku/queryProductMsku`,
        method: "POST",
        body: queryDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺sku
     * @name ProductSkuUnbindAmazonSku
     * @summary 解绑亚马逊sku
     * @request POST:/shop/product/sku/unbindAmazonSku
     */
    productSkuUnbindAmazonSku: (dto: UnBindAmazonSkuReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/shop/product/sku/unbindAmazonSku`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺sku
     * @name ProductSkuUpdateCustomerProductMsku
     * @summary 修改客户商品SKU
     * @request POST:/shop/product/sku/updateCustomerProductMsku
     */
    productSkuUpdateCustomerProductMsku: (reqDTO: UpdateShopProductSkuReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/shop/product/sku/updateCustomerProductMsku`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺sku
     * @name ProductSkuUpdateShopProductSkuImg
     * @summary updateShopProductSkuImg
     * @request POST:/shop/product/sku/updateShopProductSkuImg
     */
    productSkuUpdateShopProductSkuImg: (dto: UpdateShopProductSkuImgReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/shop/product/sku/updateShopProductSkuImg`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户店铺sku
     * @name ProductSkuUpdateVolume
     * @summary 更新商品体积
     * @request POST:/shop/product/sku/updateVolume
     */
    productSkuUpdateVolume: (reqDTO: UpdateVolumeReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseVoid, any>({
        path: `/shop/product/sku/updateVolume`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
}
