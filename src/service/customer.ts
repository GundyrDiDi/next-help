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

/** AddAdditionItemReqDTO */
export interface AddAdditionItemReqDTO {
  /** @format int32 */
  additionConfigId?: number;
  /** @format int32 */
  ingredientStatus?: number;
  /** @format int32 */
  ingredientsCount?: number;
  ingredientsSku?: string;
  /** @format int32 */
  spotCheckFlag?: number;
  spotCheckRatio?: number;
}

/** AddAdditionReqDTO */
export interface AddAdditionReqDTO {
  additionList?: AddAdditionItemReqDTO[];
  /** @format int32 */
  additionScene?: number;
  addressAddition?: ShopAddressAdditionReqDTO;
  categoryCodeList?: number[];
  /** @format int32 */
  noAdditionalFlag?: number;
}

/** AddBannerReqDTO */
export interface AddBannerReqDTO {
  /**
   * 适用用户会员模板id
   * @format int64
   */
  bannerApplicableTemplateId?: number;
  /** 指定用户的id，以英文逗号分隔 */
  bannerDesignatedUserId?: string;
  /** banner图片url-H5页面 */
  bannerImgMobileUrl?: string;
  /** banner图片url */
  bannerImgUrl?: string;
  /** banner图片点击跳转链接 */
  bannerJumpLink?: string;
  /** 名称 */
  bannerName?: string;
  /**
   * 开启/关闭状态，0：开启，1：关闭
   * @format int32
   */
  bannerStatus?: number;
  /**
   * banner类型，0：我的频道；1：透明购，2：市场购,3:青蛙文章
   * @format int32
   */
  bannerType?: number;
  /**
   * banner有效期结束时间
   * @format date-time
   */
  endTime?: string;
  /** @format int64 */
  mallCategoryId?: number;
  /**
   * banner有效期开始时间
   * @format date-time
   */
  startTime?: string;
  /** 站点code */
  stationCode?: string;
  /**
   * 系统来源，1:d2c,2:b2b
   * @format int32
   */
  systemSource?: number;
}

/** AddClearanceAddressReqDTO */
export interface AddClearanceAddressReqDTO {
  address?: string;
  addressEn?: string;
  area?: string;
  areaEn?: string;
  city?: string;
  cityEn?: string;
  /** 市名称 */
  cityName?: string;
  /** 通关码 */
  clearanceCode?: string;
  /** @format int32 */
  clearanceType?: number;
  companyCode?: string;
  companyName?: string;
  companyNameEn?: string;
  countryCode?: string;
  /** 国家名称 */
  countryName?: string;
  /** @format int32 */
  defaultAddress?: number;
  email?: string;
  /** 国家代码 */
  nationCode?: string;
  /** 国家id */
  nationId?: string;
  phone?: string;
  postalCode?: string;
  /** 省名称 */
  provinceName?: string;
  receiveName?: string;
  receiveNameEn?: string;
}

/** AddCustomerShopReqDTO */
export interface AddCustomerShopReqDTO {
  clientId?: string;
  clientSecret?: string;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  customerShopLogo?: string;
  customerShopName?: string;
  /** @format int32 */
  customerShopPlatform?: number;
  customerShopUrl?: string;
  /** @format int64 */
  mainCustomerId?: number;
  /** 站点code */
  stationCode?: string;
  wareCode?: string;
}

/** AddDepartmentReqDTO */
export interface AddDepartmentReqDTO {
  directorId?: string;
  id?: string;
  name?: string;
  parentId?: string;
  /** @format int32 */
  sort?: number;
  status?: string;
  treePath?: string;
}

/** AddFrogArticleReqDTO */
export interface AddFrogArticleReqDTO {
  frogArticleAuthor?: string;
  frogArticleContent?: string;
  /** @format int32 */
  frogArticleEnableStatus?: number;
  frogArticleImgUrl?: string;
  frogArticleSubTitle?: string;
  frogArticleTitle?: string;
  /** @format int32 */
  frogArticleType?: number;
  /**
   * 文章类型Id
   * @format int32
   */
  frogArticleTypeId?: number;
  /** @format int64 */
  frogArticleViewCount?: number;
  /**
   * 未登录限制；1.可查看全文；2.部分可查看；3.不可查看
   * @format int32
   */
  noLoginRestriction?: number;
  /**
   * 未入会限制；1.可查看全文；2.部分可查看；3.不可查看
   * @format int32
   */
  noMembershipRestriction?: number;
  /** SEO 描述 */
  seoDescription?: string;
  stationCode?: string;
}

/** AddIntendedCustomerInfoReqDTO */
export interface AddIntendedCustomerInfoReqDTO {
  /** 邮箱 */
  email: string;
  /** 姓名 */
  name: string;
  /** 手机号 */
  phone?: string;
  /** 站点 */
  stationCode: string;
}

/** AddManageUserReqDTO */
export interface AddManageUserReqDTO {
  avatar?: string;
  deptId?: string;
  /** @format int32 */
  directoried?: number;
  email?: string;
  /** @format int32 */
  gender?: number;
  mobile?: string;
  nickname?: string;
  password?: string;
  relationDd?: string;
  relationDdDeptId?: string;
  relationDdDeptName?: string;
  relationDdUserId?: string;
  relationDdUserName?: string;
  roleIds?: string[];
  /** @format int32 */
  status?: number;
  username?: string;
  wareCode?: string[];
}

/** AddMenuReqDTO */
export interface AddMenuReqDTO {
  backEndPath?: string;
  btnPerm?: string;
  code?: string;
  icon?: string;
  name?: string;
  parentId?: string;
  redirect?: string;
  routeName?: string;
  routePath?: string;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  type?: number;
  /** @format int32 */
  visible?: number;
}

/** AddRoleReqDTO */
export interface AddRoleReqDTO {
  deptId?: string;
  name?: string;
  remark?: string;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  status?: number;
}

/** AddShippingAddressReqDTO */
export interface AddShippingAddressReqDTO {
  address?: string;
  addressEn?: string;
  area?: string;
  areaEn?: string;
  city?: string;
  cityEn?: string;
  /** 市名称 */
  cityName?: string;
  countryCode?: string;
  /** 国家名称 */
  countryName?: string;
  /** @format int32 */
  defaultAddress?: number;
  email?: string;
  /** 国家代码 */
  nationCode?: string;
  /** 国家id */
  nationId?: string;
  phone?: string;
  postalCode?: string;
  /** 省名称 */
  provinceName?: string;
  receiveName?: string;
  receiveNameEn?: string;
}

/** AddShopTaxDeductionAccountDTO */
export interface AddShopTaxDeductionAccountDTO {
  /** 分行代码 */
  branchCode?: string;
  /**
   * 客户店铺ID
   * @format int64
   */
  customerShopId?: number;
  /** 金融机构代码 */
  financialInstitutionCode?: string;
  /** 进口商标准代码 */
  importerCode?: string;
  /**
   * 是否是默认设置 0 否 1 是
   * @format int32
   */
  isDefault?: number;
  /** 扣税账号 */
  taxDeductionAccount?: string;
}

/** AddSubCustomerReqDTO */
export interface AddSubCustomerReqDTO {
  chatWorkId?: string;
  countryCode?: string;
  customerEmail?: string;
  customerMobile?: string;
  customerName?: string;
  /** @format int64 */
  customerShopId?: number;
  /** @format int32 */
  customerStatus?: number;
  /** @format int32 */
  gender?: number;
  loginName?: string;
  password?: string;
  skype?: string;
  verificationCode?: string;
}

/** AddUserReqDTO */
export interface AddUserReqDTO {
  customerIds?: number[];
  userId?: string;
  userName?: string;
}

/** AddUserRoleReqDTO */
export interface AddUserRoleReqDTO {
  roleId?: string;
  userId?: string;
}

/** AdditionItemRespDTO */
export interface AdditionItemRespDTO {
  /** @format int32 */
  additionCode?: number;
  /** @format int32 */
  additionConfigId?: number;
  /** @format int32 */
  additionId?: number;
  additionName?: string;
  additionNameJp?: string;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  createTime?: string;
  /** @format int64 */
  customerShopId?: number;
  imageUrl?: string;
  /** @format int32 */
  ingredientStatus?: number;
  /** @format int32 */
  ingredientsCount?: number;
  ingredientsSku?: string;
  /** @format int64 */
  shopAdditionId?: number;
  /** @format int64 */
  shopAdditionItemId?: number;
  /** @format int32 */
  spotCheckFlag?: number;
  spotCheckRatio?: number;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  updateTime?: string;
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

/** AppShopRespDTO */
export interface AppShopRespDTO {
  /** @format int64 */
  abnormalOrderCount?: number;
  /** @format int64 */
  apiOrderCount?: number;
  availableAmount?: number;
  /** @format int64 */
  canDeliveryOrderCount?: number;
  /** @format int32 */
  canceledCount?: number;
  /** @format int64 */
  completeOrderCount?: number;
  /** @format int64 */
  customerId?: number;
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
  /** @format int32 */
  customerShopPlatform?: number;
  /** @format int64 */
  dealOrderCount?: number;
  /** @format int32 */
  deletedFlag?: number;
  /** @format int32 */
  noBindAmazonSkuCount?: number;
  /** @format int32 */
  noConfirmReplenishPlanCount?: number;
  orderAmount?: number;
  /** @format int32 */
  orderCount?: number;
  /** @format int64 */
  partDeliveryOrderCount?: number;
  /** @format int32 */
  pendingInventoryCount?: number;
  /** @format int32 */
  systemSource?: number;
  /** @format int32 */
  yesterdayOrderQuantity?: number;
  /** @format int32 */
  yesterdayShipmentsQuantity?: number;
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

/** BaseResponse */
export interface BaseResponse {
  code?: string;
  msg?: string;
  success?: boolean;
}

/** BatchModifyPurchaseReqDTO */
export interface BatchModifyPurchaseReqDTO {
  /** @format int32 */
  modifyType?: number;
  records?: ModifyPurchaseRecordDTO[];
  userId?: string;
  userName?: string;
}

/** BatchRemoveUserReqDTO */
export interface BatchRemoveUserReqDTO {
  customerIds?: number[];
}

/** BindThirdReqDTO */
export interface BindThirdReqDTO {
  /**
   * 0-直采 1-代采
   * @format int32
   */
  buType?: number;
  /** 渠道 */
  channel?: string;
  /** chartWorkId */
  chatWorkId?: string;
  /** 区号 */
  countryCode?: string;
  /** 国家code */
  countryPlaceCode?: string;
  /** 邮箱地址 */
  customerEmail?: string;
  /**
   * 用户id
   * @format int64
   */
  customerId?: number;
  /** 客户手机号 */
  customerMobile?: string;
  /** 联系人姓名 */
  customerName?: string;
  /**
   * 客户状态：1-正常；2-停用
   * @format int32
   * @example 1
   */
  customerStatus?: number;
  /**
   * 性别：1-男；2-女；3-未知
   * @format int32
   * @example 1
   */
  gender?: number;
  /** 三方邀请码 */
  invitationCode?: string;
  /**
   * 邀请平台:0-内部,1-aucfan
   * @format int32
   */
  invitationPlatform?: number;
  /** 语言代码 */
  langcode?: string;
  /** 登录名 */
  loginName?: string;
  /** 登录密码 */
  password?: string;
  /**
   * 平台类型:1网页端,2APP
   * @format int32
   */
  platformType?: number;
  /** 三方推荐邮箱 */
  recommendationEmail?: string;
  /** skype */
  skype?: string;
  /** spm */
  spm?: string;
  /** 站点code */
  stationCode?: string;
  /**
   * 隐私协议id
   * @format int64
   */
  termId?: number;
  /** 三方平台用户账号,可以理解为唯一标识 */
  thirdCustomerId?: string;
  /** 三方平台用户名称 */
  thirdCustomerName?: string;
  /** 三方平台用户邮箱 */
  thirdEmail?: string;
  /** 三方平台标识 */
  thirdPlatform?: string;
  /** 时区 */
  utcTimeZone?: string;
  /** 验证码 */
  verificationCode?: string;
}

/** BizResponse */
export interface BizResponse {
  code?: string;
  data?: object;
  msg?: string;
  success?: boolean;
}

/** CategoryAdditionRespDTO */
export interface CategoryAdditionRespDTO {
  /** @format int64 */
  categoryCateId?: number;
  categoryCateName?: string;
  categoryCateNameEn?: string;
  categoryCateNameJp?: string;
  categoryCateNameKr?: string;
  /** @format int32 */
  categoryLevel?: number;
  /** @format int64 */
  categoryParentId?: number;
  /** @format int32 */
  categoryStaus?: number;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  createTime?: string;
  /** @format int64 */
  customerShopId?: number;
  /** @format int64 */
  shopAdditionConfigCategoryId?: number;
  /** @format int64 */
  shopAdditionId?: number;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  updateTime?: string;
}

/** CategoryCodeRespDTO */
export interface CategoryCodeRespDTO {
  levelOneCategoryCode?: string;
  levelTwoCategoryCodes?: string[];
}

/** ChangeEmailReqDTO */
export interface ChangeEmailReqDTO {
  /** @format int64 */
  customerId?: number;
  newCustomerEmail?: string;
  password?: string;
  stationCode?: string;
  verificationCode?: string;
}

/** ChangeMobileReqDTO */
export interface ChangeMobileReqDTO {
  /** 区号 */
  countryCode?: string;
  /** 新手机号 */
  newMobile?: string;
  /** 密码 */
  password?: string;
  /** 验证码 */
  verificationCode?: string;
}

/**
 * ChangeUrlWhiteUserReqDTO
 * 换源白名单列表
 */
export interface ChangeUrlWhiteUserReqDTO {
  /**
   * 客户经理id
   * @format int64
   */
  managerId?: number;
  /**
   * 会员等级id
   * @format int64
   */
  membershipId?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  /**
   * 客户总监id
   * @format int64
   */
  supervisionManagerId?: number;
  /**
   * 系统来源: 1-D2C; 2-B2B
   * @format int32
   */
  systemSource?: number;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
  /** 仓库编码 */
  wareCode?: string;
}

/**
 * ChangeUrlWhiteUserRespDTO
 * 换源白名单列表
 */
export interface ChangeUrlWhiteUserRespDTO {
  /**
   * 添加时间
   * @format date-time
   */
  createTime?: string;
  /**
   * 用户id
   * @format int64
   */
  customerId?: number;
  /**
   * 客户经理id
   * @format int64
   */
  managerId?: number;
  /** 客户经理名称 */
  managerName?: string;
  /** 会员信息 */
  membership?: CustomerMembership;
  /** 国家代码 */
  nationCode?: string;
  /** 站点代码 */
  stationCode?: string;
  /**
   * 客户id
   * @format int64
   */
  superCustomerId?: number;
  /**
   * 客户总监id
   * @format int64
   */
  supervisionManagerId?: number;
  /** 客户总监名称 */
  supervisionManagerName?: string;
  /**
   * 系统来源: 1-D2C; 2-B2B
   * @format int32
   */
  systemSource?: number;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
  /** 添加人 */
  userName?: string;
  /** 仓库编码 */
  wareCode?: string;
  /** 仓库名称 */
  wareName?: string;
}

/** CheckEmailReqDTO */
export interface CheckEmailReqDTO {
  /**
   * 业务类型 0直采 1代采
   * @format int32
   */
  buType?: number;
  countryPlaceCode?: string;
  customerEmail?: string;
  langcode?: string;
  stationCode?: string;
}

/** Customer */
export interface Customer {
  /** @format int32 */
  accountType?: number;
  /**
   * 业务类型 0 直采 1 代采
   * @format int32
   */
  buType?: number;
  chatWorkId?: string;
  countryCode?: string;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  createTime?: string;
  customerEmail?: string;
  /** @format int64 */
  customerId?: number;
  customerMobile?: string;
  customerName?: string;
  /** @format int32 */
  customerStatus?: number;
  /** @format int32 */
  defaultLogin?: number;
  /** @format int32 */
  defectiveProductRiskFlagMain?: number;
  defectiveProductRiskFlagMainRemark?: string;
  /** @format int32 */
  defectiveProductRiskFlagSub?: number;
  defectiveProductRiskFlagSubRemark?: string;
  /** @format int32 */
  gender?: number;
  googleUrl?: string;
  headerUrl?: string;
  /** @format int32 */
  internalFlag?: number;
  langcode?: string;
  /** @format date-time */
  lastLoginTime?: string;
  loginName?: string;
  /** @format int64 */
  mainCustomerId?: number;
  /** @format int64 */
  managerId?: number;
  /** @format int32 */
  memberChangeFlag?: number;
  nationCode?: string;
  /** @format int64 */
  oldCustomerStatus?: number;
  outsideLink?: string;
  password?: string;
  /** @format int32 */
  passwordChangeFlag?: number;
  /**
   * 建议补全手机号是否已读:0-没有,1-已读
   * @format int32
   */
  phoneCompletedFlag?: number;
  /** @format int32 */
  platformType?: number;
  salt?: string;
  skype?: string;
  stationCode?: string;
  /** @format int64 */
  superCustomerId?: number;
  /** @format int64 */
  supervisionManagerId?: number;
  /** @format int32 */
  systemSource?: number;
  timeZone?: string;
  unificationCustomerFullName?: string;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  updateTime?: string;
  /** @format int32 */
  zeroChangeFlag?: number;
}

/** CustomerCanTransformRespDTO */
export interface CustomerCanTransformRespDTO {
  /**
   * 账号类型：1-主账号；2-子账号；
   * @format int32
   */
  accountType?: number;
  /**
   * 用户id
   * @format int64
   */
  customerId?: number;
  /** 用户名 */
  customerName?: string;
  /**
   * 店铺id
   * @format int64
   */
  customerShopId?: number;
  /** 店铺名称 */
  customerShopName?: string;
  /**
   * 客户店铺平台: 0-其他; 1-Base; 2-Shopify; 3-Stores; 4-Amazon
   * @format int32
   */
  customerShopPlatform?: number;
  /** 登录名 */
  loginName?: string;
  /**
   * 来源，1- d2c ,2- b2b
   * @format int32
   */
  systemSource?: number;
}

/** CustomerConfigRespDTO */
export interface CustomerConfigRespDTO {
  configCode?: string;
  configName?: string;
  configValue?: string;
}

/** CustomerCount */
export interface CustomerCount {
  platformType?: string;
}

/** CustomerDetailManagerRespDTO */
export interface CustomerDetailManagerRespDTO {
  /** @format int64 */
  account?: number;
  /** @format int32 */
  accountType?: number;
  automaticRenewalStatusInfo?: string;
  automaticToggleStaus?: boolean;
  availableAmount?: number;
  /**
   * 业务类型 0直采 1代采
   * @format int32
   */
  buType?: number;
  chatWorkId?: string;
  /** 国家 */
  country?: string;
  countryCode?: string;
  /** @format date-time */
  createTime?: string;
  customerDetailRespDTOS?: CustomerDetailRespDTO[];
  customerEmail?: string;
  /** @format int64 */
  customerId?: number;
  customerMobile?: string;
  customerName?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopList?: CustomerShopRespDTO[];
  /** @format int32 */
  customerStatus?: number;
  /** @format int32 */
  defaultLogin?: number;
  /** @format int32 */
  deleteStatus?: number;
  /** @format int32 */
  gender?: number;
  headerUrl?: string;
  /** @format int32 */
  internalFlag?: number;
  /** 语言代码:ja-日语,en-英语,th-泰语,ko-韩语 */
  langcode?: string;
  /** @format date-time */
  lastLoginTime?: string;
  loginName?: string;
  /** @format int64 */
  mainCustomerId?: number;
  /** @format int32 */
  manageStatus?: number;
  /** @format int64 */
  managerId?: number;
  managerName?: string;
  /** 客户与会员身份关联数据 */
  membership?: CustomerMembership;
  membershipPreChargeOrder?: string;
  nationCode?: string;
  outsideLink?: string;
  /**
   * 业务类型 0直采 1代采
   * @format int32
   */
  platformType?: number;
  shopAddressAdditionRespDTO?: ShopAddressAdditionRespDTO;
  shopPurchaseRespDTO?: ShopPurchaseRespDTO;
  skype?: string;
  stationCode?: string;
  /** @format int64 */
  superCustomerId?: number;
  /** @format int64 */
  supervisionManagerId?: number;
  supervisionManagerName?: string;
  /** @format int32 */
  systemSource?: number;
  thirdBind?: string[];
  timeZone?: string;
  unificationCustomerFullName?: string;
  /** @format date-time */
  updateTime?: string;
  wareCode?: string;
  wareName?: string;
}

/** CustomerDetailRespDTO */
export interface CustomerDetailRespDTO {
  /**
   * 账号类型：1-主账号；2-子账号；
   * @format int32
   */
  accountType?: number;
  /** 默认店铺余额 */
  availableAmount?: number;
  /** chartWorkId */
  chatWorkId?: string;
  /** 国家代码 */
  countryCode?: string;
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** 邮箱地址 */
  customerEmail?: string;
  customerEmailChecked?: boolean;
  /**
   * 用户id
   * @format int64
   */
  customerId?: number;
  /** 客户手机号 */
  customerMobile?: string;
  /** 用户名 */
  customerName?: string;
  /**
   * 用户店铺表id
   * @format int64
   */
  customerShopId?: number;
  /** 客户店铺列表 */
  customerShopList?: CustomerShopRespDTO[];
  /**
   * 客户状态：1-正常；2-停用
   * @format int32
   */
  customerStatus?: number;
  /**
   * 是否默认登录：0-否；1-是
   * @format int32
   */
  defaultLogin?: number;
  /**
   * 性别：1-男；2-女；3-未知
   * @format int32
   */
  gender?: number;
  /** 谷歌表 */
  googleUrl?: string;
  /** 头像 */
  headerUrl?: string;
  initialPassword?: boolean;
  /**
   * 内部用户标志：0-否；1-是
   * @format int32
   */
  internalFlag?: number;
  langcode?: string;
  /**
   * 上次登录时间
   * @format date-time
   */
  lastLoginTime?: string;
  /** 登录名 */
  loginName?: string;
  /**
   * 主账号id
   * @format int64
   */
  mainCustomerId?: number;
  /**
   * 是否有分配业务员权限:1-有,0-没有
   * @format int32
   */
  manageStatus?: number;
  /**
   * 客户经理id
   * @format int64
   */
  managerId?: number;
  /** 客户经理名称 */
  managerName?: string;
  /** 会员信息 */
  membership?: CustomerMembership;
  /** 国家代码 */
  nationCode?: string;
  /** 外链分享 */
  outsideLink?: string;
  /** 对应店铺名称 */
  shopName?: string;
  /** 是否展示会员信息 */
  showMembershipInfo?: boolean;
  /** skype */
  skype?: string;
  /**
   * 下单拆包提醒的标志：默认0-需要提醒；1-不再提醒
   * @format int32
   */
  splitRemindFlag?: number;
  /** 站点代码 */
  stationCode?: string;
  /**
   * b2b与d2c的统一id
   * @format int64
   */
  superCustomerId?: number;
  /**
   * 客户总监id
   * @format int64
   */
  supervisionManagerId?: number;
  /** 客户总监名称 */
  supervisionManagerName?: string;
  /**
   * 系统来源: 1-D2C; 2-B2B
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
  utcTimeZone?: string;
}

/** CustomerDistributeQueryRespDTO */
export interface CustomerDistributeQueryRespDTO {
  /** @format int64 */
  customerId?: number;
  merchandiserUserId?: string;
  merchandiserUserName?: string;
  oemPurchaseUserId?: string;
  oemPurchaseUserName?: string;
  purchaseUserId?: string;
  purchaseUserName?: string;
}

/** CustomerGuide */
export interface CustomerGuide {
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  customerGuideId?: number;
  /** @format int64 */
  customerId?: number;
  guideProperties?: string;
  /** @format date-time */
  updateTime?: string;
}

/** CustomerItemRespDTO */
export interface CustomerItemRespDTO {
  /** @format int32 */
  accountType?: number;
  chatWorkId?: string;
  countryCode?: string;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  createTime?: string;
  customerEmail?: string;
  /** @format int64 */
  customerId?: number;
  customerMobile?: string;
  customerName?: string;
  /** @format int32 */
  customerStatus?: number;
  /** @format int32 */
  gender?: number;
  headerUrl?: string;
  /** @format int32 */
  internalFlag?: number;
  langcode?: string;
  /** @format date-time */
  lastLoginTime?: string;
  loginName?: string;
  /** @format int64 */
  mainCustomerId?: number;
  /** 客户与会员身份关联数据 */
  membership?: CustomerMembership;
  outsideLink?: string;
  password?: string;
  salt?: string;
  skype?: string;
  stationCode?: string;
  /** @format int64 */
  superCustomerId?: number;
  /** @format int32 */
  systemSource?: number;
  unificationCustomerFullName?: string;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  updateTime?: string;
}

/** CustomerJpushReqDTO */
export interface CustomerJpushReqDTO {
  customerId?: string;
  extrasParam?: string;
  msgContent?: string;
  msgTitle?: string;
  notificationTitle?: string;
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

/** CustomerMembershipReqDTO */
export interface CustomerMembershipReqDTO {
  automaticRenewalSuperCustomerIdList?: number[];
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  customerMembershipId?: number;
  /** @format int32 */
  customerMembershipStatus?: number;
  customerName?: string;
  expired?: boolean;
  /** @format date-time */
  expiresDate?: string;
  /** @format int64 */
  membershipTemplateId?: number;
  membershipTemplateName?: string;
  /** @format int64 */
  membershipTemplatePriceId?: number;
  membershipTemplatePriceName?: string;
  /**
   * 会员类型:0-普通,1-特殊
   * @format int32
   */
  specialType?: number;
  /** @format int64 */
  superCustomerId?: number;
  /**
   * 试用标志:0-不是,1是
   * @format int32
   */
  trialFlag?: number;
  /** @format date-time */
  updateTime?: string;
}

/** CustomerMembershipResDTO */
export interface CustomerMembershipResDTO {
  /** @format int32 */
  basicFlag?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  customerMembershipId?: number;
  /** @format int32 */
  customerMembershipStatus?: number;
  customerName?: string;
  discountActualPrice?: number;
  /** @format date-time */
  expiresDate?: string;
  /** @format int64 */
  membershipTemplateId?: number;
  membershipTemplateName?: string;
  /** @format int64 */
  membershipTemplatePriceId?: number;
  membershipTemplatePriceName?: string;
  sellingPrice?: number;
  stationCode?: string;
  /** @format int64 */
  superCustomerId?: number;
  /** @format date-time */
  updateTime?: string;
}

/** CustomerOverviewRespDTO */
export interface CustomerOverviewRespDTO {
  /** @format int32 */
  accountType?: number;
  availableAmount?: number;
  customerEmail?: string;
  /** @format int64 */
  customerId?: number;
  customerMobile?: string;
  customerName?: string;
  customerShop?: CustomerShopRespDTO;
  customerShopList?: CustomerShopRespDTO[];
  /**
   * 店铺数量
   * @format int32
   */
  customerShopQuantity?: number;
  /** @format int32 */
  customerStatus?: number;
  /** @format int32 */
  daysTogether?: number;
  /** @format int32 */
  gender?: number;
  headerUrl?: string;
  loginName?: string;
  /** @format int64 */
  mainCustomerId?: number;
  /** 客户与会员身份关联数据 */
  membership?: CustomerMembership;
  /** @format int64 */
  superCustomerId?: number;
  /** @format int32 */
  systemSource?: number;
}

/** CustomerPageDTO */
export interface CustomerPageDTO {
  /** @format int32 */
  accountType?: number;
  chatWorkId?: string;
  countryCode?: string;
  /** @format date-time */
  createTime?: string;
  customerEmail?: string;
  /** @format int64 */
  customerId?: number;
  customerMobile?: string;
  customerName?: string;
  /** @format int32 */
  customerStatus?: number;
  /** @format int32 */
  defaultLogin?: number;
  /** @format int32 */
  gender?: number;
  headerUrl?: string;
  /** @format int32 */
  internalFlag?: number;
  /** @format date-time */
  lastLoginTime?: string;
  loginName?: string;
  /** @format int64 */
  mainCustomerId?: number;
  /** @format int64 */
  managerId?: number;
  /** @format int64 */
  oldCustomerStatus?: number;
  outsideLink?: string;
  password?: string;
  salt?: string;
  skype?: string;
  /** @format int64 */
  superCustomerId?: number;
  /** @format int64 */
  supervisionManagerId?: number;
  /** @format int32 */
  systemSource?: number;
  unificationCustomerFullName?: string;
  /** @format date-time */
  updateTime?: string;
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

/** CustomerShopAddressRespDTO */
export interface CustomerShopAddressRespDTO {
  /** @format int64 */
  customerShopId?: number;
  /** @format int64 */
  logisticsId?: number;
  logisticsName?: string;
}

/** CustomerShopBySuperRespDTO */
export interface CustomerShopBySuperRespDTO {
  customerShopList?: CustomerShopRespDTO[];
  /** @format int64 */
  superCustomerId?: number;
}

/** CustomerShopOptDTO */
export interface CustomerShopOptDTO {
  /**
   * 是否自动下单
   * @format int32
   */
  customerShopAutoOrderFlag?: number;
  /** @format int64 */
  customerShopId?: number;
  /**
   * 是否使用在途库存
   * @format int32
   */
  customerShopUseOnTheWayStockFlag?: number;
}

/** CustomerShopPageDTO */
export interface CustomerShopPageDTO {
  /** @format int32 */
  activeSubAccountFlag?: number;
  clientId?: string;
  clientSecret?: string;
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
  customerShopLogo?: string;
  customerShopName?: string;
  customerShopPermission?: string;
  /** @format int32 */
  customerShopPlatform?: number;
  customerShopUrl?: string;
  /** @format int64 */
  mainCustomerId?: number;
  mainCustomerName?: string;
  /** @format date-time */
  updateTime?: string;
  /** @format int32 */
  virtualFlag?: number;
  wareCode?: string;
  wareName?: string;
}

/** CustomerShopQueryDTO */
export interface CustomerShopQueryDTO {
  customerIds?: number[];
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
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

/** CustomerShopShipDelReqDTO */
export interface CustomerShopShipDelReqDTO {
  /**
   * 配置id
   * @format int64
   */
  shopShipId?: number;
}

/** CustomerShopShipReqDTO */
export interface CustomerShopShipReqDTO {
  /** 目的地国家 */
  countryCode?: string;
  /**
   * 配置id，编辑时必传
   * @format int64
   */
  customerShopShipId?: number;
  /**
   * 物流 id
   * @format int64
   */
  logisticsId?: number;
}

/** CustomerShopShipRespDTO */
export interface CustomerShopShipRespDTO {
  countryCode?: string;
  countryName?: string;
  /** @format int64 */
  customerShopShipId?: number;
  /** @format int64 */
  logisticsId?: number;
  logisticsLogo?: string;
  logisticsName?: string;
}

/** CustomerShopWmsRespDTO */
export interface CustomerShopWmsRespDTO {
  /** @format int64 */
  customerShopId?: number;
  customerShopName?: string;
}

/** CustomerSplitRemindFlagDTO */
export interface CustomerSplitRemindFlagDTO {
  /** @format int64 */
  customerId?: number;
}

/** CustomerStationDTO */
export interface CustomerStationDTO {
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 是否删除 0:未删除 1:已删除
   * @format int32
   */
  isDelete?: number;
  /** 语言代码 */
  languageCode?: string;
  /** 国家代码 */
  nationCode?: string;
  /** 国家名称 */
  nationName?: string;
  /** 站点代码 */
  stationCode?: string;
  /** 站点名称 */
  stationName?: string;
}

/** CustomerTagDTO */
export interface CustomerTagDTO {
  /** @format int64 */
  customerId?: number;
  /** @format int64 */
  id?: number;
  /** @format int64 */
  mainCustomerId?: number;
  /** @format int32 */
  tag?: number;
}

/** CustomerTagSearchReq */
export interface CustomerTagSearchReq {
  customerIds?: number[];
  /** @format int32 */
  customerTag?: number;
  customerTags?: number[];
}

/** CustomerThirdBindRespDTO */
export interface CustomerThirdBindRespDTO {
  /**
   * 系统用户id
   * @format int64
   */
  customerId?: number;
  /** 三方用户id唯一 */
  thirdCustomerId?: string;
  /** 三方用户名 */
  thirdCustomerName?: string;
  /** 三方邮箱 */
  thirdEmail?: string;
  /** 三方手机号 */
  thirdPhoneNumber?: string;
  /** 三方平台 */
  thirdPlatform?: string;
}

/** DataDictRespDTO */
export interface DataDictRespDTO {
  /** @format date-time */
  createTime?: string;
  /** @format int32 */
  dataDictId?: number;
  dictKey?: string;
  dictName?: string;
  dictValue?: string;
  /** @format int32 */
  parentId?: number;
  remark?: string;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  status?: number;
  /** @format int32 */
  type?: number;
  /** @format date-time */
  updateTime?: string;
}

/** DeclarationWhitelistPageDTO */
export interface DeclarationWhitelistPageDTO {
  /** 主客户ID */
  mainCustomerIds?: number[];
  /** 用户名 */
  mainCustomerName?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
}

/** DeclarationWhitelistRespDTO */
export interface DeclarationWhitelistRespDTO {
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  id?: number;
  /** @format int64 */
  mainCustomerId?: number;
  mainCustomerName?: string;
  unificationCustomerFullName?: string;
}

/** DefaultLoginReqDTO */
export interface DefaultLoginReqDTO {
  /** @format int32 */
  systemSource?: number;
  uuid?: string;
}

/** DelUserRoleReqDTO */
export interface DelUserRoleReqDTO {
  roleId?: string[];
  userId?: string[];
}

/** DeleteClearanceAddressReqDTO */
export interface DeleteClearanceAddressReqDTO {
  /** @format int64 */
  customerShopId?: number;
  /** @format int64 */
  shopClearanceAddressId?: number;
}

/** DeleteShippingAddressReqDTO */
export interface DeleteShippingAddressReqDTO {
  /** @format int64 */
  customerShopId?: number;
  /** @format int64 */
  shopShippingAddressId?: number;
}

/** DepartmentDetailRespDTO */
export interface DepartmentDetailRespDTO {
  code?: string;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  createTime?: string;
  director?: string;
  directorId?: string;
  id?: string;
  mobile?: string;
  name?: string;
  parentId?: string;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  status?: number;
  treePath?: string;
  /** @format int32 */
  type?: number;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  updateTime?: string;
}

/** DepartmentTreeRespDTO */
export interface DepartmentTreeRespDTO {
  children?: DepartmentTreeRespDTO[];
  icon?: string;
  id?: string;
  label?: string;
  path?: string;
  roles?: ManageRoleRespDTO[];
  /** @format int32 */
  size?: number;
  /** @format int32 */
  type?: number;
  users?: ManageUserRespDTO[];
  /** @format int32 */
  visible?: number;
}

/** DirectorSetReqDTO */
export interface DirectorSetReqDTO {
  /** @format int32 */
  status?: number;
  userId?: string;
}

/** EmailLoginReqDTO */
export interface EmailLoginReqDTO {
  /** @format int32 */
  buType?: number;
  customerEmail?: string;
  /** @format int32 */
  platformType?: number;
  stationCode?: string;
  /** 三方平台用户账号,可以理解为唯一标识 */
  thirdCustomerId?: string;
  /** 三方平台用户名称 */
  thirdCustomerName?: string;
  /** 三方平台用户邮箱 */
  thirdEmail?: string;
  /** 三方平台标识 */
  thirdPlatform?: string;
  verificationCode?: string;
}

/** FeedbackInfoReqDTO */
export interface FeedbackInfoReqDTO {
  companyName?: string;
  /** 邮箱 */
  email: string;
  /** 附件、图片 */
  files?: string[];
  message?: string;
  phone?: string;
  /** 站点信息 */
  stationCode: string;
  /** 姓名 */
  userName: string;
}

/** FeedbackInfoRspDTO */
export interface FeedbackInfoRspDTO {
  companyName?: string;
  /** @format date-time */
  createTime?: string;
  email?: string;
  files?: string[];
  /** @format int64 */
  id?: number;
  message?: string;
  phone?: string;
  stationCode?: string;
  /** @format date-time */
  updateTime?: string;
  userName?: string;
}

/** FrogArticleArchiveSortRespDTO */
export interface FrogArticleArchiveSortRespDTO {
  /** @format int32 */
  articleNum?: number;
  /** @format int32 */
  frogArticleMonth?: number;
  /** @format int32 */
  frogArticleYear?: number;
}

/** FrogArticleDetailRespDTO */
export interface FrogArticleDetailRespDTO {
  /** @format date-time */
  createTime?: string;
  frogArticleContent?: string;
  /** @format int32 */
  frogArticleEnableStatus?: number;
  /** @format int64 */
  frogArticleId?: number;
  frogArticleImgUrl?: string;
  frogArticleSubTitle?: string;
  frogArticleTitle?: string;
  /** @format int32 */
  frogArticleType?: number;
  /** @format int64 */
  frogArticleViewCount?: number;
  /**
   * 未登录限制；1.可查看全文；2.部分可查看；3.不可查看
   * @format int32
   */
  noLoginRestriction?: number;
  /**
   * 未入会限制；1.可查看全文；2.部分可查看；3.不可查看
   * @format int32
   */
  noMembershipRestriction?: number;
  /** SEO 描述 */
  seoDescription?: string;
  stationCode?: string;
  /** @format int64 */
  viewNum?: number;
}

/** FrogArticlePrepAndNextRespDTO */
export interface FrogArticlePrepAndNextRespDTO {
  /** @format int64 */
  nextArticleId?: number;
  nextArticleTitle?: string;
  /** @format int64 */
  prepArticleId?: number;
  prepArticleTitle?: string;
}

/** FrogArticleRespDTO */
export interface FrogArticleRespDTO {
  /** @format date-time */
  createTime?: string;
  /** @format int32 */
  frogArticleEnableStatus?: number;
  /** @format int64 */
  frogArticleId?: number;
  frogArticleImgUrl?: string;
  frogArticleSubTitle?: string;
  frogArticleTitle?: string;
  /** @format int32 */
  frogArticleType?: number;
  /**
   * 文章类型id
   * @format int32
   */
  frogArticleTypeId?: number;
  /** @format int64 */
  frogArticleViewCount?: number;
  /**
   * 是否置顶
   * @format int32
   */
  isPinTop?: number;
  /**
   * 未登录限制；1.可查看全文；2.部分可查看；3.不可查看
   * @format int32
   */
  noLoginRestriction?: number;
  /**
   * 未入会限制；1.可查看全文；2.部分可查看；3.不可查看
   * @format int32
   */
  noMembershipRestriction?: number;
  /** SEO 描述 */
  seoDescription?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  stationCode?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** @format int64 */
  viewNum?: number;
}

/**
 * GetActivitiesRespDTO
 * 获取直播间列表
 */
export interface GetActivitiesRespDTO {
  /** 回放列表 */
  backActivities?: VideoActivityDTO[];
  /** 直播中列表 */
  livingActivities?: VideoActivityDTO[];
  /** 预约列表 */
  reserveActivities?: VideoActivityDTO[];
}

/** GetAllFrogArticlePageDTO */
export interface GetAllFrogArticlePageDTO {
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
  typeList?: string[];
}

/** GetCustomerByMainCustomerReqDTO */
export interface GetCustomerByMainCustomerReqDTO {
  customerName?: string;
  /** @format int64 */
  mainCustomerId?: number;
  /** @format int32 */
  systemSource?: number;
}

/**
 * GetCustomerGoogleListReqDTO
 * 查询用户谷歌表列表请求DTO
 */
export interface GetCustomerGoogleListReqDTO {
  /**
   * 客户id
   * @format int32
   */
  customerId?: number;
  /** 谷歌表id */
  googleId?: string;
  /** 负责人名称 */
  managerName?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  /** 统一客户全名 */
  unificationCustomerFullName?: string;
  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

/** GetCustomerListReqDTO */
export interface GetCustomerListReqDTO {
  /** @format int32 */
  accountType?: number;
  /** @format int32 */
  assign?: number;
  /** @format int64 */
  customerId?: number;
  customerIds?: number[];
  customerName?: string;
  email?: string;
  loginName?: string;
  multiMatch?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  phone?: string;
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
  superCustomerIds?: number[];
  /** @format int32 */
  systemSource?: number;
  unificationCustomerFullName?: string;
  wareCode?: string;
}

/** GetCustomerShopDTO */
export interface GetCustomerShopDTO {
  /** @format int64 */
  accountType?: number;
  /** @format int64 */
  customerId?: number;
  /** @format int64 */
  customerShopId?: number;
  /** @format int64 */
  mainCustomerId?: number;
  /** @format int32 */
  systemSource?: number;
  /**
   * 是否查看前10个店铺: 1是,0否-查看剩余店铺
   * @format int32
   */
  viewFirstTenStores?: number;
}

/** GetCustomerShopListByShopIdListDTO */
export interface GetCustomerShopListByShopIdListDTO {
  customerShopIdList?: number[];
}

/** GetCustomerShopListReqDTO */
export interface GetCustomerShopListReqDTO {
  /** @format int64 */
  customerId?: number;
  customerShopIdList?: number[];
  /** @format int32 */
  customerShopPlatform?: number;
  /** @format int64 */
  mainCustomerId?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  shopAuthStatus?: number;
  /** @format int32 */
  startIndex?: number;
}

/** GetDepartmentTreeByIdReqDTO */
export interface GetDepartmentTreeByIdReqDTO {
  deptId?: string;
  types?: number[];
}

/** GetDepartmentTreeByNameReqDTO */
export interface GetDepartmentTreeByNameReqDTO {
  nickname?: string;
  types?: number[];
}

/** GetDepartmentTreeReqDTO */
export interface GetDepartmentTreeReqDTO {
  types?: number[];
}

/** GetDepartmentUserReqDTO */
export interface GetDepartmentUserReqDTO {
  createTimeOrder?: boolean;
  depId?: string;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  endTime?: string;
  info?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  startTime?: string;
}

/** GetFrogArticleArchivePageDTO */
export interface GetFrogArticleArchivePageDTO {
  frogArticleMonth?: string;
  frogArticleYear?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
}

/** GetFrogArticlePageDTO */
export interface GetFrogArticlePageDTO {
  /** 文章归档月份 */
  frogArticleMonth?: string;
  /** @format int32 */
  frogArticleType?: number;
  /**
   * 文章类型Id
   * @format int32
   */
  frogArticleTypeId?: number;
  /** 文章归档年份 */
  frogArticleYear?: string;
  /** 关键字 */
  keyword?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
  /**
   * 客户Id
   * @format int64
   */
  superCustomerId?: number;
}

/** GetFrogArticlePrepAndNextReqDTO */
export interface GetFrogArticlePrepAndNextReqDTO {
  /** @format int64 */
  frogArticleId?: number;
  stationCode?: string;
  /** @format int32 */
  type?: number;
}

/** GetManageBannerPageReqDTO */
export interface GetManageBannerPageReqDTO {
  /** @format int64 */
  bannerApplicableTemplateId?: number;
  bannerDesignatedUser?: boolean;
  /** @format int32 */
  bannerStatus?: number;
  /** @format date-time */
  endTime?: string;
  name?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  /** @format date-time */
  startTime?: string;
  stationCode?: string;
  /**
   * banner类型，0：我的频道；1：透明购，2：市场购, 3:青蛙文章
   * @format int32
   */
  type?: number;
}

/** GetManageFrogArticlePageDTO */
export interface GetManageFrogArticlePageDTO {
  /** @format int32 */
  frogArticleEnableStatus?: number;
  frogArticleTitle?: string;
  /** @format int32 */
  frogArticleType?: number;
  /**
   * 文章类型id
   * @format int32
   */
  frogArticleTypeId?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
}

/** GetRolesUserListReqDTO */
export interface GetRolesUserListReqDTO {
  name?: string;
  roleId?: string[];
}

/** GetShopListByCustomerReqDTO */
export interface GetShopListByCustomerReqDTO {
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  /** @format int64 */
  mainCustomerId?: number;
  /** @format int32 */
  systemSource?: number;
}

/** GetThirdAuthLinkReqDTO */
export interface GetThirdAuthLinkReqDTO {
  /**
   * 类型 0-直采 1-代采
   * @format int32
   */
  buType: number;
  /**
   * 回调地址
   * @example "http://2peuvm.natappfree.cc/oauth/callback/google"
   */
  redirectUrl: string;
  /** 站点信息 美国站 US */
  stationCode?: string;
  /**
   * 三方平台标识
   * @example "google"
   */
  thirdPlatform: string;
}

/** GetThirdDataReqDTO */
export interface GetThirdDataReqDTO {
  /**
   * 回调地址上带的授权Code
   * @example "4%2F0Adeu5BXKXVMj0i3b3L7IBojphwa_mrwL46nHLmvJMgK_y_Npt3mBBltKKhuyRRtggDh54Q"
   */
  authCode: string;
  /**
   * 0-直采 1-代采
   * @format int32
   */
  buType: number;
  /**
   * 三方邮箱,苹果会在回调时返回,特殊逻辑
   * @example "111@163.com"
   */
  email?: string;
  /**
   * idToken,苹果特殊逻辑
   * @example "4%2F0Adeu5BXKXVMj0i3b3L7IBojphwa_mrwL46nHLmvJMgK_y_Npt3mBBltKKhuyRRtggDh54Q"
   */
  idToken?: string;
  /**
   * 回调地址
   * @example "http://2peuvm.natappfree.cc/oauth/callback/google"
   */
  redirectUrl: string;
  /**
   * 回调链接上带的state参数
   * @example "b1b0971bfa724c8c512847b33eb78353"
   */
  state: string;
  /**
   * 三方平台标识
   * @example "google"
   */
  thirdPlatform: string;
  /**
   * 三方名称,苹果会在回调时返回,特殊逻辑
   * @example 111
   */
  username?: string;
}

/** GetThirdDataRespDTO */
export interface GetThirdDataRespDTO {
  /** 三方平台用户邮箱 */
  thirdCustomerEmail?: string;
  /** 三方平台用户账号,可以理解为唯一标识 */
  thirdCustomerId?: string;
  /** 三方平台用户昵称 */
  thirdCustomerName?: string;
  /** 三方平台用户手机号 */
  thirdCustomerPhone?: string;
  /** 三方平台标识 */
  thirdPlatform?: string;
}

/** GetUserListReqDTO */
export interface GetUserListReqDTO {
  createTimeOrder?: boolean;
  deptId?: string;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  endTime?: string;
  endTimeOrder?: boolean;
  mobile?: string;
  nickname?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  startTime?: string;
  /** @format int32 */
  status?: number;
}

/** HolidayDateDTO */
export interface HolidayDateDTO {
  /**
   * 日期（格式:20230101）
   * @format int64
   */
  date?: number;
  /**
   * 天
   * @format int32
   */
  day?: number;
  /**
   * 月
   * @format int32
   */
  month?: number;
  /**
   * 1为工作日，2为周末，3为节假日
   * @format int32
   */
  type?: number;
  workDay?: boolean;
  /**
   * 年
   * @format int32
   */
  year?: number;
}

/** HotFrogArticleRespDTO */
export interface HotFrogArticleRespDTO {
  /** @format date-time */
  createTime?: string;
  /** @format int32 */
  frogArticleEnableStatus?: number;
  /** @format int64 */
  frogArticleId?: number;
  frogArticleImgUrl?: string;
  frogArticleSubTitle?: string;
  frogArticleTitle?: string;
  /** @format int32 */
  frogArticleType?: number;
  /** @format int64 */
  frogArticleViewCount?: number;
  /**
   * 未登录限制；1.可查看全文；2.部分可查看；3.不可查看
   * @format int32
   */
  noLoginRestriction?: number;
  /**
   * 未入会限制；1.可查看全文；2.部分可查看；3.不可查看
   * @format int32
   */
  noMembershipRestriction?: number;
  /** @format int64 */
  viewNum?: number;
}

/** HotFrogArticleSortDTO */
export interface HotFrogArticleSortDTO {
  /** @format int64 */
  frogArticleId?: number;
  /** @format int64 */
  realViewCount?: number;
}

/** IntAreaDTO */
export interface IntAreaDTO {
  /** 区号 */
  areaNum?: string;
  /** 子级地区 */
  children?: IntAreaDTO[];
  /** 区域代码 */
  code?: string;
  /**
   * id
   * @format int64
   */
  intAreaId?: number;
  /**
   * 层级:1洲 2国家 3省 4市
   * @format int64
   */
  level?: number;
  /** 中文名称 */
  name?: string;
  /** 英文名称 */
  nameEn?: string;
  /** 日文名称 */
  nameJa?: string;
  /** 韩文名称 */
  nameKr?: string;
  /** 中文拼音 */
  namePinyin?: string;
  /**
   * 父id
   * @format int64
   */
  pid?: number;
  /** 邮编 */
  postalCode?: string;
}

/** IntAreaQueryDTO */
export interface IntAreaQueryDTO {
  /** 区号 */
  areaNum?: string;
  /** 区域代码 */
  code?: string;
  /**
   * 地区id
   * @format int64
   */
  intAreaId?: number;
  /** 地区id */
  intAreaIdList?: number[];
  /**
   * 层级:1洲 2国家 3省....
   * @format int64
   */
  level?: number;
  /** 中文名称 */
  name?: string;
  /** 英文名称 */
  nameEn?: string;
  /** 日文名称 */
  nameJa?: string;
  /** 中文拼音 */
  namePinyin?: string;
  /**
   * 父id
   * @format int64
   */
  pid?: number;
}

/** InvitationInfoRespDTO */
export interface InvitationInfoRespDTO {
  /** 国家：日本：JP 韩国：KR */
  country?: string;
  /** 国家中文描述 */
  countryDesc?: string;
  /** 语言编码 */
  langCode?: string;
  /** 站点代码 */
  stationCode?: string;
}

/** JSONObject */
export type JSONObject = Record<string, object>;

/** ManageBannerReqDTO */
export interface ManageBannerReqDTO {
  categoryList?: number[];
}

/** ManageBannerRespDTO */
export interface ManageBannerRespDTO {
  /** @format int64 */
  bannerApplicableTemplateId?: number;
  bannerApplicableTemplateName?: string;
  /** @format int32 */
  bannerClickNum?: number;
  bannerDesignatedUserId?: string;
  bannerDesignatedUserList?: CustomerDetailRespDTO[];
  /** @format int64 */
  bannerId?: number;
  /** banner图片url-H5页面 */
  bannerImgMobileUrl?: string;
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
  stationCode?: string;
  /** @format int32 */
  systemSource?: number;
}

/** ManageFrogArticleRespDTO */
export interface ManageFrogArticleRespDTO {
  /** @format date-time */
  createTime?: string;
  /** @format int32 */
  frogArticleEnableStatus?: number;
  /** @format int64 */
  frogArticleId?: number;
  frogArticleSubTitle?: string;
  frogArticleTitle?: string;
  frogArticleType?: string;
  /**
   * 文章类型id
   * @format int32
   */
  frogArticleTypeId?: number;
  /** @format int64 */
  frogArticleViewCount?: number;
  /**
   * 是否置顶
   * @format int32
   */
  isPinTop?: number;
  /**
   * 未登录限制；1.可查看全文；2.部分可查看；3.不可查看
   * @format int32
   */
  noLoginRestriction?: number;
  /**
   * 未入会限制；1.可查看全文；2.部分可查看；3.不可查看
   * @format int32
   */
  noMembershipRestriction?: number;
  /** SEO 描述 */
  seoDescription?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  stationCode?: string;
}

/** ManageLoginRespDTO */
export interface ManageLoginRespDTO {
  containCustomerIds?: number[];
  containUserIds?: string[];
  /** @format int32 */
  directoried?: number;
  /** @format int64 */
  expiresIn?: number;
  loginWareHouse?: string;
  nick?: string;
  roles?: string[];
  token?: string;
  userId?: string;
  username?: string;
  warehouses?: UserWarehouseRespDTO[];
}

/** ManageMenuRespDTO */
export interface ManageMenuRespDTO {
  backEndPath?: string;
  btnPerm?: string;
  code?: string;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  createTime?: string;
  icon?: string;
  id?: string;
  name?: string;
  parentId?: string;
  redirect?: string;
  routeName?: string;
  routePath?: string;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  type?: number;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  updateTime?: string;
  /** @format int32 */
  visible?: number;
}

/** ManageRoleRespDTO */
export interface ManageRoleRespDTO {
  code?: string;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  createTime?: string;
  deptId?: string;
  manageRoleId?: string;
  name?: string;
  remark?: string;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  status?: number;
  type?: string;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  updateTime?: string;
}

/** ManageUserDetailRespDTO */
export interface ManageUserDetailRespDTO {
  avatar?: string;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  createTime?: string;
  deptId?: string;
  /** @format int32 */
  directoried?: number;
  email?: string;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  endTime?: string;
  /** @format int32 */
  gender?: number;
  id?: string;
  menus?: string[];
  mobile?: string;
  nickname?: string;
  relationDd?: string;
  relationDdDeptId?: string;
  relationDdDeptName?: string;
  relationDdUserId?: string;
  relationDdUserName?: string;
  roleIds?: string[];
  /** @format int32 */
  status?: number;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  updateTime?: string;
  username?: string;
}

/** ManageUserInfoRespDTO */
export interface ManageUserInfoRespDTO {
  id?: string;
  menus?: string[];
  roles?: string[];
}

/** ManageUserLoginRespDTO */
export interface ManageUserLoginRespDTO {
  avatar?: string;
  change?: boolean;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  createTime?: string;
  deptId?: string;
  /** @format int32 */
  directoried?: number;
  email?: string;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  endTime?: string;
  /** @format int32 */
  gender?: number;
  id?: string;
  mobile?: string;
  nickname?: string;
  perms?: string[];
  relationDd?: string;
  relationDdDeptId?: string;
  relationDdDeptName?: string;
  relationDdUserId?: string;
  relationDdUserName?: string;
  roles?: string[];
  /** @format int32 */
  status?: number;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  updateTime?: string;
  username?: string;
  warehouses?: UserWarehouseRespDTO[];
}

/** ManageUserRespDTO */
export interface ManageUserRespDTO {
  /** @example "yyyy-MM-dd HH:mm:ss" */
  createTime?: string;
  deptId?: string;
  /** @format int32 */
  directoried?: number;
  email?: string;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  endTime?: string;
  /** @format int32 */
  gender?: number;
  manageUserId?: string;
  mobile?: string;
  nickname?: string;
  relationDd?: string;
  relationDdDeptId?: string;
  relationDdDeptName?: string;
  relationDdUserId?: string;
  relationDdUserName?: string;
  roleIdStrs?: string;
  roleNames?: string;
  /** @format int32 */
  status?: number;
  type?: string;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  updateTime?: string;
  username?: string;
  wareCodeList?: UserWarehouseRespDTO[];
}

/** MembershipOrderDTO */
export interface MembershipOrderDTO {
  /** @format int32 */
  approveStatus?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int32 */
  creationChannel?: number;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
  exchangeCurrencyFrom?: string;
  exchangeCurrencyTo?: string;
  exchangeRate?: number;
  exchangeRateFloat?: number;
  /** @format date-time */
  expiresDate?: string;
  /** @format int32 */
  getChannel?: number;
  /** @format int64 */
  membershipOrderId?: number;
  /** @format int64 */
  membershipTemplateId?: number;
  membershipTemplateName?: string;
  /** @format int64 */
  membershipTemplatePriceId?: number;
  membershipTemplatePriceName?: string;
  /** @format int64 */
  oldMembershipTemplateId?: number;
  oldMembershipTemplateName?: string;
  orderNo?: string;
  /** @format int32 */
  orderType?: number;
  originCurrencyCode?: string;
  originDiscountPrice?: number;
  originPaymentAmount?: number;
  originReceiptAmount?: number;
  originSellAmount?: number;
  /** @format int32 */
  payChannel?: number;
  /** @format int32 */
  payStatus?: number;
  /** @format date-time */
  payTime?: string;
  payeeBankName?: string;
  payerBankName?: string;
  payerName?: string;
  /** @format date-time */
  paymentDate?: string;
  paypalCycleDate?: string;
  paypalOrderId?: string;
  paypalSubscriptionId?: string;
  /** @format date-time */
  receiptDate?: string;
  /**
   * 会员类型:0-普通,1-特殊
   * @format int32
   */
  specialType?: number;
  /** @format int64 */
  superCustomerId?: number;
  systemSource?: string;
  targetCurrencyCode?: string;
  targetDiscountPrice?: number;
  targetPaymentAmount?: number;
  targetReceiptAmount?: number;
  targetSellAmount?: number;
  txnId?: string;
  unificationCustomerFullName?: string;
  /** @format date-time */
  updateTime?: string;
  /** @format int32 */
  validPeriod?: number;
  /** @format int32 */
  validPeriodUnit?: number;
  zhongyinExchangeRate?: number;
}

/** MenuTreeListRespDTO */
export interface MenuTreeListRespDTO {
  children?: MenuTreeListRespDTO[];
  component?: string;
  icon?: string;
  id?: string;
  name?: string;
  parentId?: string;
  path?: string;
  redirect?: string;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  visible?: number;
}

/** MenuTreeRespDTO */
export interface MenuTreeRespDTO {
  children?: MenuTreeRespDTO[];
  icon?: string;
  id?: string;
  label?: string;
  path?: string;
  /** @format int32 */
  size?: number;
  /** @format int32 */
  type?: number;
  users?: ManageUserRespDTO[];
  /** @format int32 */
  visible?: number;
}

/** Meta */
export interface Meta {
  icon?: string;
  roles?: string[];
  title?: string;
}

/** ModifyPurchaseRecordDTO */
export interface ModifyPurchaseRecordDTO {
  /** @format int64 */
  customerId?: number;
  originUserName?: string;
  userId?: string;
  userName?: string;
}

/** MoveUserDepartmentReqDTO */
export interface MoveUserDepartmentReqDTO {
  deptId?: string;
  userList?: string[];
}

/** NotifyPrivatePublishVO */
export interface NotifyPrivatePublishVO {
  content?: string;
  /** @format int64 */
  targetCustomerShopId?: number;
  title?: string;
}

/** NotifyPrivateReadVO */
export interface NotifyPrivateReadVO {
  /** @format int64 */
  notifyTemplatePrivateId?: number;
  /** @format int32 */
  operateType?: number;
}

/** NotifyPrivateVO */
export interface NotifyPrivateVO {
  content?: string;
  /** @format date-time */
  createTime?: string;
  extraContent?: string;
  hyperlink?: string;
  hyperlinkParams?: string;
  notifyStatus?: boolean;
  /** @format int64 */
  notifyTemplateId?: number;
  /** @format int64 */
  notifyTemplatePrivateId?: number;
  notifyType?: string;
  /** @format int32 */
  operateType?: number;
  sourceBizId?: string;
  sourceBizType?: string;
  sourceId?: string;
  /** @format int64 */
  targetCustomerId?: number;
  /** @format int64 */
  targetCustomerShopId?: number;
  targetCustomerShopName?: string;
  targetLoginName?: string;
  /** @format int64 */
  targetMainCustomerId?: number;
  targetMainReadStatus?: boolean;
  /** @format date-time */
  targetMainReadTime?: string;
  targetSubReadStatus?: boolean;
  /** @format date-time */
  targetSubReadTime?: string;
  targetSystemSource?: string;
  title?: string;
  /** @format date-time */
  updateTime?: string;
}

/** NotifyPublicReadVO */
export interface NotifyPublicReadVO {
  /** @format int64 */
  notifyTemplatePublicId?: number;
}

/** NotifyPublicVO */
export interface NotifyPublicVO {
  content?: string;
  /** @format date-time */
  createTime?: string;
  hyperlink?: string;
  hyperlinkParams?: string;
  notifyStatus?: boolean;
  /** @format int64 */
  notifyTemplateId?: number;
  /** @format int64 */
  notifyTemplatePublicId?: number;
  notifyType?: string;
  readStatus?: boolean;
  /** @format date-time */
  readTime?: string;
  sourceBizId?: string;
  sourceBizType?: string;
  sourceId?: string;
  title?: string;
  /** @format date-time */
  updateTime?: string;
}

/** NotifyTemplateUpsertVO */
export interface NotifyTemplateUpsertVO {
  content?: string;
  /** @format date-time */
  createTime?: string;
  description?: string;
  hyperlink?: string;
  /** @format int64 */
  isMarketingNotification?: number;
  langcode?: string;
  /** @format int64 */
  notifyTemplateId?: number;
  notifyTemplateType?: string;
  notifyType?: string;
  title?: string;
  /** @format date-time */
  updateTime?: string;
}

/** OpenBaseReqDto */
export interface OpenBaseReqDto {
  /** app key */
  appKey?: string;
  /** sign */
  sign?: string;
  /**
   * timestamp
   * @format int64
   */
  timestamp?: number;
}

/** OpenShopListRespDTO */
export interface OpenShopListRespDTO {
  /**
   * customer shop id
   * @format int64
   */
  customerShopId?: number;
  /** customer shop name */
  customerShopName?: string;
  /** customer shop url */
  customerShopUrl?: string;
}

/** OrderItem */
export interface OrderItem {
  asc?: boolean;
  column?: string;
}

/** PageMenuReqDTO */
export interface PageMenuReqDTO {
  menuId?: string;
  name?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  /** @format int32 */
  visible?: number;
}

/** PasswordLoginReqDTO */
export interface PasswordLoginReqDTO {
  /** @format int32 */
  buType?: number;
  nameOrEmail?: string;
  password?: string;
  /** @format int32 */
  platformType?: number;
  recaptchaCode?: string;
  stationCode?: string;
  /** 三方平台用户账号,可以理解为唯一标识 */
  thirdCustomerId?: string;
  /** 三方平台用户名称 */
  thirdCustomerName?: string;
  /** 三方平台用户邮箱 */
  thirdEmail?: string;
  /** 三方平台标识 */
  thirdPlatform?: string;
}

/** QueryCustomerByManagerDTO */
export interface QueryCustomerByManagerDTO {
  /** @format int32 */
  accountType?: number;
  /** @format int64 */
  autoRenawal?: number;
  /** @format int64 */
  beforeWareCode?: number;
  /**
   * 业务类型 0 直采 1 代采
   * @format int32
   */
  buType?: number;
  chatWorkId?: string;
  countryCode?: string;
  countryPlaceCode?: string;
  /** @format int64 */
  currentCode?: number;
  customerEmail?: string;
  /** @format int64 */
  customerId?: number;
  customerIdList?: number[];
  customerMobile?: string;
  customerName?: string;
  /** @format int64 */
  customerShopId?: number;
  customerShopIds?: number[];
  /** @format int32 */
  customerStatus?: number;
  /** @format int32 */
  defaultLogin?: number;
  /** @format int32 */
  gender?: number;
  /** @format int64 */
  hasAssignSuccess?: number;
  /** @format int64 */
  hasSub?: number;
  /** @format int32 */
  internalFlag?: number;
  /** 语言代码:ja-日语,en-英语,th-泰语,ko-韩语 */
  langcode?: string;
  /** @format date-time */
  lastLoginTime?: string;
  loginName?: string;
  /** @format int64 */
  mainCustomerId?: number;
  /** @format int64 */
  managerId?: number;
  /** @format int64 */
  membershipId?: number;
  /** @format int64 */
  onlyBelongMe?: number;
  outsideLink?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  password?: string;
  /**
   * 平台类型:1网页端,2APP 3PLUGIN,4H5
   * @format int32
   */
  platformType?: number;
  salt?: string;
  skype?: string;
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
  /** @format int64 */
  superCustomerId?: number;
  /** @format int64 */
  supervisionManagerId?: number;
  /** @format int32 */
  systemSource?: number;
  unificationCustomerFullName?: string;
  userId?: string;
  userName?: string;
  /** @format int64 */
  wareCode?: number;
}

/** QueryCustomerDetailManagerReqDTO */
export interface QueryCustomerDetailManagerReqDTO {
  customerStatusList?: number[];
  /** @format int64 */
  managerId?: number;
  /** @format int64 */
  supervisionManagerId?: number;
}

/** QueryCustomerDetailReqDTO */
export interface QueryCustomerDetailReqDTO {
  /** @format int64 */
  customerId?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  /** @format int32 */
  systemSource?: number;
  unificationCustomerFullName?: string;
}

/** QueryCustomerDistributeReqDTO */
export interface QueryCustomerDistributeReqDTO {
  /** @format int32 */
  merchandiserUserEmptyFlag?: number;
  merchandiserUserId?: string;
  /** @format int32 */
  oemPurchaseUserEmptyFlag?: number;
  oemPurchaseUserId?: string;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  purchaseUserEmptyFlag?: number;
  purchaseUserId?: string;
  /** @format int32 */
  startIndex?: number;
  stationCode?: string;
  /** @format int32 */
  systemSource?: number;
  unificationCustomerFullName?: string;
  wareCode?: string;
}

/** QueryCustomerDistributeRespDTO */
export interface QueryCustomerDistributeRespDTO {
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  customerId?: number;
  merchandiserUserId?: string;
  merchandiserUserName?: string;
  nationCode?: string;
  oemPurchaseUserId?: string;
  oemPurchaseUserName?: string;
  purchaseUserId?: string;
  purchaseUserName?: string;
  stationCode?: string;
  /** @format int32 */
  systemSource?: number;
  unificationCustomerFullName?: string;
  wareCode?: string;
  wareName?: string;
}

/** QueryOperateLogRespDTO */
export interface QueryOperateLogRespDTO {
  content?: string;
  /** @format date-time */
  createTime?: string;
  userName?: string;
}

/** RegisterPageImageBackendDTO */
export interface RegisterPageImageBackendDTO {
  /** 图片地址 */
  imageUrl?: string;
  /** 跳转链接 */
  jumpUrl?: string;
  /**
   * id
   * @format int64
   */
  registerPageImageId?: number;
  /** 站点code */
  stationCode?: string;
}

/** RegisterPageImageBackendUpdateDTO */
export interface RegisterPageImageBackendUpdateDTO {
  /** 图片地址 */
  imageUrl?: string;
  /** 跳转链接 */
  jumpUrl?: string;
  /**
   * id
   * @format int64
   */
  registerPageImageId?: number;
  /** 站点code */
  stationCode?: string;
}

/** RegisterPageImageDTO */
export interface RegisterPageImageDTO {
  /** 图片地址 */
  imageUrl?: string;
  /** 跳转链接 */
  jumpUrl?: string;
  /** 站点code */
  stationCode?: string;
}

/** ReserveCallBackReqDTO */
export interface ReserveCallBackReqDTO {
  AccountID?: string;
  ActivityID?: string;
  ActivityName?: string;
  EventType?: string;
  LiveTime?: string;
  RequestUuid?: string;
  Sign?: string;
  Timestamp?: string;
  UserInfos?: UserReservationInfo[];
  ViewUrl?: string;
}

/** ResetPasswordReqDTO */
export interface ResetPasswordReqDTO {
  customerEmail?: string;
  /** 手机号 */
  customerMobile?: string;
  /** 国际区号 */
  globalRoaming?: string;
  newPassword?: string;
  stationCode?: string;
  verificationCode?: string;
}

/** RoleUserRespDTO */
export interface RoleUserRespDTO {
  /** @format int32 */
  count?: number;
  departmentName?: string;
  mobile?: string;
  nickname?: string;
  userId?: string;
  userName?: string;
}

/** RouteRespDTO */
export interface RouteRespDTO {
  alwaysShow?: boolean;
  children?: RouteRespDTO[];
  hidden?: boolean;
  id?: string;
  meta?: Meta;
  name?: string;
  path?: string;
  redirect?: string;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  type?: number;
}

/** SaveCustomerConfigReqDTO */
export interface SaveCustomerConfigReqDTO {
  /** 配置 code */
  configCode?: string;
  /** 配置名称 */
  configName?: string;
  /** 配置值 */
  configValue?: string;
}

/** SaveOrUpdateCustomerConfigReqDTO */
export interface SaveOrUpdateCustomerConfigReqDTO {
  /** 配置 code */
  configCode?: string;
  /** 配置名称 */
  configName?: string;
  /** 配置值 */
  configValue?: string;
  /**
   * 子账号id
   * @format int64
   */
  customerId?: number;
  /**
   * 级别 1-superCustomerId 2-mainCustomerId 3-customerId
   * @format int32
   */
  level?: number;
  /**
   * 主账号id
   * @format int64
   */
  mainCustomerId?: number;
  /**
   * 超级用户id
   * @format int64
   */
  superCustomerId?: number;
}

/** SearchResultDTO */
export interface SearchResultDTO {
  /**
   * 图搜剩余次数
   * @format int32
   */
  imageSearchKey?: number;
  /**
   * 图搜最大次数
   * @format int32
   */
  imageSearchKeyMax?: number;
  /**
   * 价格跟踪剩余次数
   * @format int32
   */
  priceTrackingTimes?: number;
  /**
   * 价格跟踪最大次数
   * @format int32
   */
  priceTrackingTimesMax?: number;
  /**
   * 关键字搜索剩余次数
   * @format int32
   */
  searchKeywordKey?: number;
  /**
   * 关键字搜索最大次数
   * @format int32
   */
  searchKeywordKeyMax?: number;
}

/** SelectTypeDicDTO */
export interface SelectTypeDicDTO {
  /** 业务类型 */
  businessType?: string;
  /** 站点code */
  stationCode?: string;
  /** key */
  typeKey?: string;
  /** value */
  typeValue?: string;
}

/** ShopAdditionAddressRespDTO */
export interface ShopAdditionAddressRespDTO {
  additionItemList?: AdditionItemRespDTO[];
  /** @format int32 */
  additionScene?: number;
  addressAdditionRespDTO?: ShopAddressAdditionRespDTO;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  createTime?: string;
  /** @format int64 */
  customerId?: number;
  /** @format int64 */
  customerShopId?: number;
  customerShopShipRespDTOList?: CustomerShopShipRespDTO[];
  /** @format int64 */
  shopAdditionId?: number;
  /** @format int32 */
  systemSource?: number;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  updateTime?: string;
}

/** ShopAdditionDetailRespDTO */
export interface ShopAdditionDetailRespDTO {
  additionItemList?: AdditionItemRespDTO[];
  /** @format int32 */
  additionScene?: number;
  categoryAdditionList?: CategoryAdditionRespDTO[];
  /** @example "yyyy-MM-dd HH:mm:ss" */
  createTime?: string;
  /** @format int64 */
  customerId?: number;
  /** @format int64 */
  customerShopId?: number;
  /** @format int64 */
  shopAdditionId?: number;
  shopAddressAdditionRespDTO?: ShopAddressAdditionRespDTO;
  /** @format int32 */
  systemSource?: number;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  updateTime?: string;
}

/** ShopAdditionRespDTO */
export interface ShopAdditionRespDTO {
  additionItemList?: AdditionItemRespDTO[];
  /** @format int32 */
  additionScene?: number;
  categoryAdditionList?: CategoryAdditionRespDTO[];
  /** @example "yyyy-MM-dd HH:mm:ss" */
  createTime?: string;
  /** @format int64 */
  customerId?: number;
  /** @format int64 */
  customerShopId?: number;
  /** @format int32 */
  noAdditionalFlag?: number;
  /** @format int64 */
  shopAdditionId?: number;
  /** 水洗标配置 */
  shopAdditionWashedLabelRespDTO?: ShopAdditionWashedLabelRespDTO;
  /** @format int32 */
  systemSource?: number;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  updateTime?: string;
}

/** ShopAdditionWashedLabelRespDTO */
export interface ShopAdditionWashedLabelRespDTO {
  /** @format int32 */
  additionScene?: number;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  createTime?: string;
  /** @format int64 */
  customerId?: number;
  /** @format int64 */
  customerShopId?: number;
  /** @format int64 */
  shopAdditionId?: number;
  /** @format int32 */
  systemSource?: number;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  updateTime?: string;
  washedLabelRespDTOList?: WashedLabelRespDTO[];
}

/** ShopAddressAdditionReqDTO */
export interface ShopAddressAdditionReqDTO {
  address?: string;
  area?: string;
  city?: string;
  countryCode?: string;
  email?: string;
  /** @format int64 */
  logisticsId?: number;
  logisticsName?: string;
  postalCode?: string;
  sendName?: string;
  sendTel?: string;
}

/** ShopAddressAdditionRespDTO */
export interface ShopAddressAdditionRespDTO {
  address?: string;
  area?: string;
  city?: string;
  countryCode?: string;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  createTime?: string;
  /** @format int64 */
  customerShopId?: number;
  email?: string;
  /** @format int64 */
  logisticsId?: number;
  logisticsName?: string;
  postalCode?: string;
  sendName?: string;
  sendTel?: string;
  /** @format int64 */
  shopAdditionId?: number;
  /** @format int64 */
  shopAddressAdditionId?: number;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  updateTime?: string;
}

/** ShopClearanceAddressRespDTO */
export interface ShopClearanceAddressRespDTO {
  address?: string;
  addressEn?: string;
  area?: string;
  areaEn?: string;
  city?: string;
  cityEn?: string;
  /** 市名称 */
  cityName?: string;
  clearanceCode?: string;
  /** @format int32 */
  clearanceType?: number;
  companyCode?: string;
  companyName?: string;
  companyNameEn?: string;
  countryCode?: string;
  /** 国家名称 */
  countryName?: string;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  createTime?: string;
  /** @format int64 */
  customerShopId?: number;
  /** @format int32 */
  defaultAddress?: number;
  email?: string;
  /** 国家代码 */
  nationCode?: string;
  /** 国家id */
  nationId?: string;
  phone?: string;
  postalCode?: string;
  /** 省名称 */
  provinceName?: string;
  receiveName?: string;
  receiveNameEn?: string;
  /** @format int64 */
  shopClearanceAddressId?: number;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  updateTime?: string;
}

/** ShopOverviewRespDTO */
export interface ShopOverviewRespDTO {
  availableAmount?: number;
  /** @format int64 */
  customerId?: number;
  customerShop?: AppShopRespDTO;
  /** @format int32 */
  customerStatus?: number;
  /** @format int32 */
  gender?: number;
  /** @format int64 */
  mainCustomerId?: number;
  /** @format int32 */
  systemSource?: number;
}

/** ShopPurchaseRespDTO */
export interface ShopPurchaseRespDTO {
  /**
   * api自动下单配置 1-每次询问 2-不询问，以一件代发价下单
   * @format int32
   */
  apiAutoCreateOrderType?: number;
  /** 创建时间 */
  createTime?: string;
  /**
   * 用户店铺id
   * @format int64
   */
  customerShopId?: number;
  /**
   * 发货配置项,0:每次联系 1:无需联络 2:普通无需,组合需要
   * @format int32
   */
  deliveryConfigurationType?: number;
  /**
   * 次品付费重购,0:其他 1:接受次品重拍 2:次品退货退款
   * @format int32
   */
  payRepurchaseType?: number;
  /**
   * 能接受的采购价格上涨幅度
   * @format int32
   */
  purchasePriceAdd?: number;
  /** @format int32 */
  repurchaseFree?: number;
  /** @format int32 */
  repurchasePrice?: number;
  /** @format int32 */
  repurchaseTryMax?: number;
  /**
   * 主键
   * @format int64
   */
  shopPurchaseId?: number;
  /** 更新时间 */
  updateTime?: string;
}

/** ShopShippingAddressRespDTO */
export interface ShopShippingAddressRespDTO {
  address?: string;
  addressEn?: string;
  area?: string;
  areaEn?: string;
  city?: string;
  cityEn?: string;
  /** 市名称 */
  cityName?: string;
  countryCode?: string;
  /** 国家名称 */
  countryName?: string;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  createTime?: string;
  /** @format int64 */
  customerShopId?: number;
  /** @format int32 */
  defaultAddress?: number;
  email?: string;
  /** 国家代码 */
  nationCode?: string;
  /** 国家id */
  nationId?: string;
  phone?: string;
  postalCode?: string;
  /** 省名称 */
  provinceName?: string;
  receiveName?: string;
  receiveNameEn?: string;
  /** @format int64 */
  shopShippingAddressId?: number;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  updateTime?: string;
}

/** ShopTaxDeductionAccountPageDTO */
export interface ShopTaxDeductionAccountPageDTO {
  /** @format int64 */
  customerShopId?: number;
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
}

/** ShopTaxDeductionAccountRespDTO */
export interface ShopTaxDeductionAccountRespDTO {
  branchCode?: string;
  /** @format int64 */
  customerShopId?: number;
  financialInstitutionCode?: string;
  /** @format int64 */
  id?: number;
  importerCode?: string;
  /** @format int32 */
  isDefault?: number;
  taxDeductionAccount?: string;
}

/** ShopWashedLabelAdditionReqDTO */
export interface ShopWashedLabelAdditionReqDTO {
  companyAddress?: string;
  companyLogo?: string;
  companyName?: string;
  /** @format int64 */
  customerShopId?: number;
  /** @format int32 */
  imageRatio?: number;
  /** @format int32 */
  model?: number;
  /** @format int32 */
  productDesignation?: number;
  /** @format int64 */
  shopAdditionId?: number;
  /** @format int64 */
  shopAddressWashedlabelId?: number;
}

/** SignUpReqDTO */
export interface SignUpReqDTO {
  /**
   * 业务类型 0直采 1代采
   * @format int32
   */
  buType?: number;
  /** 渠道 */
  channel?: string;
  /** chartWorkId */
  chatWorkId?: string;
  /** 区号 */
  countryCode?: string;
  /** 国家code */
  countryPlaceCode?: string;
  /** 邮箱地址 */
  customerEmail?: string;
  /** 客户手机号 */
  customerMobile?: string;
  /** 联系人姓名 */
  customerName?: string;
  /**
   * 客户状态：1-正常；2-停用
   * @format int32
   * @example 1
   */
  customerStatus?: number;
  /**
   * 性别：1-男；2-女；3-未知
   * @format int32
   * @example 1
   */
  gender?: number;
  /** 三方邀请码 */
  invitationCode?: string;
  /**
   * 邀请平台:0-内部,1-aucfan
   * @format int32
   */
  invitationPlatform?: number;
  /** 语言代码 */
  langcode?: string;
  /** 登录名 */
  loginName?: string;
  /** 登录密码 */
  password?: string;
  /**
   * 平台类型:1网页端,2APP,3插件,4H5
   * @format int32
   */
  platformType?: number;
  /** 三方推荐邮箱 */
  recommendationEmail?: string;
  /** skype */
  skype?: string;
  /** spm */
  spm?: string;
  /** 站点code */
  stationCode?: string;
  /**
   * 隐私协议id
   * @format int64
   */
  termId?: number;
  /** 三方平台用户账号,可以理解为唯一标识 */
  thirdCustomerId?: string;
  /** 三方平台用户名称 */
  thirdCustomerName?: string;
  /** 三方平台用户邮箱 */
  thirdEmail?: string;
  /** 三方平台标识 */
  thirdPlatform?: string;
  /** 时区 */
  utcTimeZone?: string;
  /** 验证码 */
  verificationCode?: string;
}

/** SignUpRespDTO */
export interface SignUpRespDTO {
  uuid?: string;
}

/** SupportCenterContentDTO */
export interface SupportCenterContentDTO {
  /** 业务类型: 2B, 2C */
  bizType?: string;
  /** content */
  content?: string;
  /** 内容类型: text, video */
  contentType?: string;
  /** 内容url */
  contentUrl?: string;
  /**
   * 发生时间
   * @format date-time
   */
  createTime?: string;
  /**
   * 创建者id
   * @format int64
   */
  creator?: number;
  /** 描述 */
  description?: string;
  /**
   * 修改者id
   * @format int64
   */
  modifier?: number;
  /** @format int64 */
  parentSupportCenterSubjectId?: number;
  /** SEO 描述 */
  seoDescription?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /** 站点code */
  stationCode?: string;
  /**
   * id
   * @format int64
   */
  supportCenterContentId?: number;
  /**
   * 所属分类id
   * @format int64
   */
  supportCenterSubjectId?: number;
  /** 标题 */
  title?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
  /** 封面图片 */
  videoImageUrl?: string;
}

/** SupportCenterContentUpdateBackendDTO */
export interface SupportCenterContentUpdateBackendDTO {
  /** 业务类型: 2B, 2C */
  bizType?: string;
  /** 内容 */
  content?: string;
  /** 内容类型: text, video */
  contentType?: string;
  /** 描述 */
  description?: string;
  /** SEO 描述 */
  seoDescription?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /** 站点code */
  stationCode?: string;
  /**
   * id
   * @format int64
   */
  supportCenterContentId?: number;
  /**
   * 所属分类id
   * @format int64
   */
  supportCenterSubjectId?: number;
  /** 标题 */
  title?: string;
  /** 封面图片 */
  videoImageUrl?: string;
}

/** SupportCenterSubjectDTO */
export interface SupportCenterSubjectDTO {
  /** 业务类型: 2B, 2C */
  bizType?: string;
  /** 子目录集合 */
  childrenList?: SupportCenterSubjectDTO[];
  /** 下属的文档 */
  contentList?: SupportCenterContentDTO[];
  /** 菜单类型： video；text */
  contentType?: string;
  /**
   * 发生时间
   * @format date-time
   */
  createTime?: string;
  /**
   * 创建者id
   * @format int64
   */
  creator?: number;
  /** 描述 */
  description?: string;
  /**
   * 修改者id
   * @format int64
   */
  modifier?: number;
  /**
   * 父级分类id
   * @format int64
   */
  parentSupportCenterSubjectId?: number;
  /** 路径 */
  path?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /** 站点code */
  stationCode?: string;
  /** 分类名称 */
  subject?: string;
  /**
   * id
   * @format int64
   */
  supportCenterSubjectId?: number;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/** SupportCenterSubjectUpdateBackendDTO */
export interface SupportCenterSubjectUpdateBackendDTO {
  /** 业务类型: 2B, 2C */
  bizType?: string;
  /** 描述 */
  description?: string;
  /**
   * 父级分类id
   * @format int64
   */
  parentSupportCenterSubjectId?: number;
  /** 路径 */
  path?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /** 站点code */
  stationCode?: string;
  /** 分类名称 */
  subject?: string;
  /**
   * id
   * @format int64
   */
  supportCenterSubjectId?: number;
}

/** TakeUserAddReqDTO */
export interface TakeUserAddReqDTO {
  /** @format int32 */
  cityId?: number;
  email?: string;
  password?: string;
  takeUserMallReqDTOList?: TakeUserMallReqDTO[];
  username?: string;
}

/** TakeUserEditReqDTO */
export interface TakeUserEditReqDTO {
  /** @format int32 */
  cityId?: number;
  email?: string;
  password?: string;
  /** @format int64 */
  takeUserId?: number;
  takeUserMallReqDTOList?: TakeUserMallReqDTO[];
  username?: string;
}

/** TakeUserLoginReqDTO */
export interface TakeUserLoginReqDTO {
  email?: string;
  password?: string;
}

/** TakeUserMallReqDTO */
export interface TakeUserMallReqDTO {
  mallId?: string;
  mallName?: string;
}

/** TakeUserReqDTO */
export interface TakeUserReqDTO {
  /** @format int32 */
  pageNum?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  startIndex?: number;
  username?: string;
}

/** TakeUserRespDTO */
export interface TakeUserRespDTO {
  /** @format int32 */
  cityId?: number;
  /** @format date-time */
  createTime?: string;
  email?: string;
  mallId?: string;
  mallName?: string;
  password?: string;
  /** @format int64 */
  takeUserId?: number;
  /** @format date-time */
  updateTime?: string;
  username?: string;
}

/** TermConfigDTO */
export interface TermConfigDTO {
  /**
   * 客户同意时间
   * @format date-time
   */
  agreeTime?: string;
  /**
   * 发生时间
   * @format date-time
   */
  createTime?: string;
  /**
   * 创建者id
   * @format int64
   */
  creator?: number;
  /** 创建者名称 */
  creatorName?: string;
  /** 配置地址 */
  fileUrl?: string;
  /**
   * 是否生效: 0 未生效, 1 生效中
   * @format int32
   */
  isEffect?: number;
  /**
   * 修改者id
   * @format int64
   */
  modifier?: number;
  /** 修改者名称 */
  modifierName?: string;
  /** 站点code */
  stationCode?: string;
  /**
   * 条款id
   * @format int64
   */
  termId?: number;
  /** 条款类型: utilize:利用规约, privacy:隐私权限, regular:次转正提醒, oem:oem条款 */
  termType?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime?: string;
}

/** TermUpdateDTO */
export interface TermUpdateDTO {
  content?: string;
  /** @format int64 */
  termId?: number;
}

/** ThirdIsBindRespDTO */
export interface ThirdIsBindRespDTO {
  /** 是否已绑定 */
  isBind?: boolean;
  /** 是否为新注册用户 */
  isNew?: boolean;
}

/** Type */
export interface Type {
  typeName?: string;
}

/** UpdateAdditionAddressReqDTO */
export interface UpdateAdditionAddressReqDTO {
  additionList?: AddAdditionItemReqDTO[];
  /** @format int32 */
  additionScene?: number;
  addressAddition?: ShopAddressAdditionReqDTO;
}

/** UpdateAdditionReqDTO */
export interface UpdateAdditionReqDTO {
  additionList?: AddAdditionItemReqDTO[];
  /** @format int32 */
  additionScene?: number;
  addressAddition?: ShopAddressAdditionReqDTO;
  categoryCodeList?: number[];
  /** @format int32 */
  noAdditionalFlag?: number;
  /** @format int64 */
  shopAdditionId?: number;
}

/** UpdateAdditionWashedLabelReqDTO */
export interface UpdateAdditionWashedLabelReqDTO {
  /** @format int32 */
  additionScene?: number;
  /** @format int64 */
  customerShopId?: number;
  shopAdditionId?: string;
  washedLabelAdditionReqDTOs?: ShopWashedLabelAdditionReqDTO[];
}

/** UpdateBannerReqDTO */
export interface UpdateBannerReqDTO {
  /** @format int64 */
  bannerApplicableTemplateId?: number;
  bannerDesignatedUserId?: string;
  /** @format int64 */
  bannerId?: number;
  /** banner图片url-H5页面 */
  bannerImgMobileUrl?: string;
  bannerImgUrl?: string;
  bannerJumpLink?: string;
  bannerName?: string;
  /** @format int32 */
  bannerStatus?: number;
  /** @format int32 */
  bannerType?: number;
  /** @format date-time */
  endTime?: string;
  /** @format int64 */
  mallCategoryId?: number;
  /** @format date-time */
  startTime?: string;
  /** @format int32 */
  systemSource?: number;
}

/** UpdateClearanceAddressReqDTO */
export interface UpdateClearanceAddressReqDTO {
  address?: string;
  addressEn?: string;
  area?: string;
  areaEn?: string;
  city?: string;
  cityEn?: string;
  /** 市名称 */
  cityName?: string;
  /** 通关码 */
  clearanceCode?: string;
  /** @format int32 */
  clearanceType?: number;
  companyCode?: string;
  companyName?: string;
  companyNameEn?: string;
  /** 国家名称 */
  countryName?: string;
  /** @format int32 */
  defaultAddress?: number;
  email?: string;
  /** 国家代码 */
  nationCode?: string;
  /** 国家id */
  nationId?: string;
  phone?: string;
  postalCode?: string;
  /** 省名称 */
  provinceName?: string;
  receiveName?: string;
  receiveNameEn?: string;
  shopClearanceAddressId?: string;
}

/** UpdateClearanceDefaultAddressReqDTO */
export interface UpdateClearanceDefaultAddressReqDTO {
  shopClearanceAddressId?: string;
}

/** UpdateCustomerReqDTO */
export interface UpdateCustomerReqDTO {
  chatWorkId?: string;
  countryCode?: string;
  /** @format int64 */
  customerId?: number;
  customerMobile?: string;
  customerName?: string;
  /** @format int32 */
  gender?: number;
  googleUrl?: string;
  loginName?: string;
  skype?: string;
  /** @format int32 */
  systemSource?: number;
}

/** UpdateCustomerShopDTO */
export interface UpdateCustomerShopDTO {
  clientId?: string;
  clientSecret?: string;
  /** @format int32 */
  customerShopAuthStatus?: number;
  /** @format int64 */
  customerShopId?: number;
  customerShopLogo?: string;
  customerShopName?: string;
  /** @format int32 */
  customerShopPlatform?: number;
  customerShopUrl?: string;
  wareCode?: string;
}

/** UpdateDepartmentReqDTO */
export interface UpdateDepartmentReqDTO {
  directorId?: string;
  id?: string;
  name?: string;
  /** @format int32 */
  sort?: number;
}

/** UpdateFrogArticleReqDTO */
export interface UpdateFrogArticleReqDTO {
  frogArticleContent?: string;
  /** @format int32 */
  frogArticleEnableStatus?: number;
  /** @format int64 */
  frogArticleId?: number;
  frogArticleImgUrl?: string;
  frogArticleSubTitle?: string;
  frogArticleTitle?: string;
  /** @format int32 */
  frogArticleType?: number;
  /**
   * 文章类型Id
   * @format int32
   */
  frogArticleTypeId?: number;
  /** @format int64 */
  frogArticleViewCount?: number;
  /**
   * 未登录限制；1.可查看全文；2.部分可查看；3.不可查看
   * @format int32
   */
  noLoginRestriction?: number;
  /**
   * 未入会限制；1.可查看全文；2.部分可查看；3.不可查看
   * @format int32
   */
  noMembershipRestriction?: number;
  /** SEO 描述 */
  seoDescription?: string;
  stationCode?: string;
}

/** UpdateFrogArticleStatusReqDTO */
export interface UpdateFrogArticleStatusReqDTO {
  /** @format int64 */
  frogArticleId?: number;
}

/** UpdateManageBannerReqDTO */
export interface UpdateManageBannerReqDTO {
  /** @format int64 */
  bannerId?: number;
}

/** UpdateManageUserReqDTO */
export interface UpdateManageUserReqDTO {
  avatar?: string;
  deptId?: string;
  /** @format int32 */
  directoried?: number;
  email?: string;
  /** @format int32 */
  gender?: number;
  id?: string;
  mobile?: string;
  nickname?: string;
  password?: string;
  relationDd?: string;
  relationDdDeptId?: string;
  relationDdDeptName?: string;
  relationDdUserId?: string;
  relationDdUserName?: string;
  roleIds?: string[];
  /** @format int32 */
  status?: number;
  username?: string;
  wareCode?: string[];
}

/** UpdateManagerPasswordReqDTO */
export interface UpdateManagerPasswordReqDTO {
  id?: string;
  newPassword?: string;
  oldPassword?: string;
}

/** UpdateMenuReqDTO */
export interface UpdateMenuReqDTO {
  backEndPath?: string;
  btnPerm?: string;
  code?: string;
  icon?: string;
  id?: string;
  name?: string;
  redirect?: string;
  routeName?: string;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  type?: number;
  /** @format int32 */
  visible?: number;
}

/** UpdateMenuVisibleReqDTO */
export interface UpdateMenuVisibleReqDTO {
  id?: string;
  /** @format int32 */
  visible?: number;
}

/** UpdatePasswordReqDTO */
export interface UpdatePasswordReqDTO {
  /** @format int64 */
  customerId?: number;
  newPassword?: string;
  oldPassword?: string;
}

/**
 * UpdatePasswordReqManagerDTO
 * 更新管理员密码DTO
 */
export interface UpdatePasswordReqManagerDTO {
  id?: string;
  password?: string;
  /** @format int32 */
  status?: number;
}

/** UpdateRoleMenusReqDTO */
export interface UpdateRoleMenusReqDTO {
  id?: string;
  menuIds?: string[];
}

/** UpdateRoleReqDTO */
export interface UpdateRoleReqDTO {
  id?: string;
  name?: string;
  remark?: string;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  status?: number;
}

/** UpdateShippingAddressReqDTO */
export interface UpdateShippingAddressReqDTO {
  address?: string;
  addressEn?: string;
  area?: string;
  areaEn?: string;
  city?: string;
  cityEn?: string;
  /** 市名称 */
  cityName?: string;
  countryCode?: string;
  /** 国家名称 */
  countryName?: string;
  /** @format int32 */
  defaultAddress?: number;
  email?: string;
  /** 国家代码 */
  nationCode?: string;
  /** 国家id */
  nationId?: string;
  phone?: string;
  postalCode?: string;
  /** 省名称 */
  provinceName?: string;
  receiveName?: string;
  receiveNameEn?: string;
  shopShippingAddressId?: string;
}

/** UpdateShippingDefaultAddressReqDTO */
export interface UpdateShippingDefaultAddressReqDTO {
  shopShippingAddressId?: string;
}

/** UpdateShopDeliveryReqDTO */
export interface UpdateShopDeliveryReqDTO {
  /** @format int64 */
  customerShopId?: number;
  /**
   * 发货配置项,0:每次联系 1:无需联络 2:普通无需,组合需要
   * @format int32
   */
  deliveryConfigurationType?: number;
  /** @format date-time */
  updateTime?: string;
}

/** UpdateShopPurchaseReqDTO */
export interface UpdateShopPurchaseReqDTO {
  /**
   * api自动下单配置 1-每次询问 2-不询问，以一件代发价下单
   * @format int32
   */
  apiAutoCreateOrderType?: number;
  /**
   * 发货配置项,0:每次联系 1:无需联络 2:普通无需,组合需要
   * @format int32
   */
  deliveryConfigurationType?: number;
  /**
   * 次品付费重购,0:其他 1:接受次品重拍 2:次品退货退款
   * @format int32
   */
  payRepurchaseType?: number;
  /**
   * 能接受的采购价格上涨幅度
   * @format int32
   */
  purchasePriceAdd?: number;
  /**
   * 更新渠道:1-接口2-feign
   * @format int32
   */
  updateChannel?: number;
}

/** UpdateShopTaxDeductionAccountDTO */
export interface UpdateShopTaxDeductionAccountDTO {
  /** 分行代码 */
  branchCode?: string;
  /** 金融机构代码 */
  financialInstitutionCode?: string;
  /**
   * 唯一ID
   * @format int64
   */
  id?: number;
  /** 进口商标准代码 */
  importerCode?: string;
  /**
   * 是否是默认设置 0 否 1 是
   * @format int32
   */
  isDefault?: number;
  /** 扣税账号 */
  taxDeductionAccount?: string;
}

/** UpdateWareOemReqDTO */
export interface UpdateWareOemReqDTO {
  /** @format int64 */
  customerShopId?: number;
  /** @format int32 */
  isExistOem?: number;
}

/** UserManagerDetailRespDTO */
export interface UserManagerDetailRespDTO {
  businessRepresentativeId?: string;
  businessRepresentativeName?: string;
  customerDirectorId?: string;
  customerDirectorName?: string;
  /** @format int64 */
  customerId?: number;
  customerName?: string;
}

/** UserReservationInfo */
export interface UserReservationInfo {
  ExternalID?: string;
  Extra?: string;
  NickName?: string;
  ReservationTel?: string;
  UserAccessIP?: string;
  UserAgent?: string;
  UserID?: string;
}

/** UserWarehouseRespDTO */
export interface UserWarehouseRespDTO {
  /** @format date-time */
  createTime?: string;
  manageUserId?: string;
  /** @format int64 */
  manageUserWarehouseId?: number;
  wareCode?: string;
  wareName?: string;
}

/**
 * VideoActivityDTO
 * 直播间对象
 */
export interface VideoActivityDTO {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 关播时间
   * @format int64
   */
  closeTime?: number;
  /** 直播间封面 */
  coverImage?: string;
  /**
   * 是否开启显示观看人数 0：关闭 1：开启
   * @format int32
   */
  enablePeopleCount?: number;
  /**
   * 是否开启直播预约功能 0-关闭 1-开启
   * @format int32
   */
  enableReserve?: number;
  /**
   * 开播时间
   * @format int64
   */
  liveTime?: number;
  /** 直播间名称 */
  name?: string;
  /** PC 端页头图的URL */
  pcBackImageUrl?: string;
  /** 默认PC端背景图的URL */
  pcBackImageUrlDefault?: string;
  /** PC端页头图的URL */
  pcHeaderImageUrl?: string;
  /**
   * 直播间预约状态 0-未预约 1-已预约
   * @format int32
   */
  reserveFlag?: number;
  /**
   * 直播状态 1：直播中 2：预告 3：回放 4：停止
   * @format int32
   */
  status?: number;
  /** token 游客模式-1 */
  token?: string;
  /**
   * 播放量
   * @format int64
   */
  uv?: number;
  /** 直播间地址 */
  viewUrl?: string;
}

/** WareNameLangDTO */
export interface WareNameLangDTO {
  lang?: string;
  wareName?: string;
}

/** WashedLabelRespDTO */
export interface WashedLabelRespDTO {
  companyAddress?: string;
  companyLogo?: string;
  companyName?: string;
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  customerShopId?: number;
  /** @format int32 */
  imageRatio?: number;
  /** @format int32 */
  model?: number;
  /** @format int32 */
  productDesignation?: number;
  /** @format int64 */
  shopAdditionId?: number;
  /** @format int64 */
  shopAddressWashedlabelId?: number;
  /** @format date-time */
  updateTime?: string;
}

/** BizResponse«CustomerConfigRespDTO» */
export interface BizResponseCustomerConfigRespDTO {
  code?: string;
  data?: CustomerConfigRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerDetailManagerRespDTO» */
export interface BizResponseCustomerDetailManagerRespDTO {
  code?: string;
  data?: CustomerDetailManagerRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerDetailRespDTO» */
export interface BizResponseCustomerDetailRespDTO {
  code?: string;
  data?: CustomerDetailRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerDistributeQueryRespDTO» */
export interface BizResponseCustomerDistributeQueryRespDTO {
  code?: string;
  data?: CustomerDistributeQueryRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerGuide» */
export interface BizResponseCustomerGuide {
  code?: string;
  data?: CustomerGuide;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerLoginRespDTO» */
export interface BizResponseCustomerLoginRespDTO {
  code?: string;
  data?: CustomerLoginRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerMembershipResDTO» */
export interface BizResponseCustomerMembershipResDTO {
  code?: string;
  data?: CustomerMembershipResDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerMembership对象» */
export interface BizResponseCustomerMembership {
  code?: string;
  /** 客户与会员身份关联数据 */
  data?: CustomerMembership;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerOverviewRespDTO» */
export interface BizResponseCustomerOverviewRespDTO {
  code?: string;
  data?: CustomerOverviewRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerRespDTO» */
export interface BizResponseCustomerRespDTO {
  code?: string;
  data?: CustomerRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerShopAddressRespDTO» */
export interface BizResponseCustomerShopAddressRespDTO {
  code?: string;
  data?: CustomerShopAddressRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«CustomerShopRespDTO» */
export interface BizResponseCustomerShopRespDTO {
  code?: string;
  data?: CustomerShopRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«DataDictRespDTO» */
export interface BizResponseDataDictRespDTO {
  code?: string;
  data?: DataDictRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«DepartmentDetailRespDTO» */
export interface BizResponseDepartmentDetailRespDTO {
  code?: string;
  data?: DepartmentDetailRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«FrogArticleDetailRespDTO» */
export interface BizResponseFrogArticleDetailRespDTO {
  code?: string;
  data?: FrogArticleDetailRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«FrogArticlePrepAndNextRespDTO» */
export interface BizResponseFrogArticlePrepAndNextRespDTO {
  code?: string;
  data?: FrogArticlePrepAndNextRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«GetActivitiesRespDTO» */
export interface BizResponseGetActivitiesRespDTO {
  code?: string;
  /** 获取直播间列表 */
  data?: GetActivitiesRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«GetThirdDataRespDTO» */
export interface BizResponseGetThirdDataRespDTO {
  code?: string;
  data?: GetThirdDataRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«HashSet«long»» */
export interface BizResponseHashSetLong {
  code?: string;
  data?: number[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«IntAreaDTO» */
export interface BizResponseIntAreaDTO {
  code?: string;
  data?: IntAreaDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«InvitationInfoRespDTO» */
export interface BizResponseInvitationInfoRespDTO {
  code?: string;
  data?: InvitationInfoRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«JSONArray» */
export interface BizResponseJSONArray {
  code?: string;
  data?: object[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«JSONObject» */
export interface BizResponseJSONObject {
  code?: string;
  data?: Record<string, object>;
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

/** BizResponse«List«CategoryCodeRespDTO»» */
export interface BizResponseListCategoryCodeRespDTO {
  code?: string;
  data?: CategoryCodeRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerCanTransformRespDTO»» */
export interface BizResponseListCustomerCanTransformRespDTO {
  code?: string;
  data?: CustomerCanTransformRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerDetailRespDTO»» */
export interface BizResponseListCustomerDetailRespDTO {
  code?: string;
  data?: CustomerDetailRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerMembershipResDTO»» */
export interface BizResponseListCustomerMembershipResDTO {
  code?: string;
  data?: CustomerMembershipResDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerMembership对象»» */
export interface BizResponseListCustomerMembership {
  code?: string;
  data?: CustomerMembership[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerShopBySuperRespDTO»» */
export interface BizResponseListCustomerShopBySuperRespDTO {
  code?: string;
  data?: CustomerShopBySuperRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerShopPageDTO»» */
export interface BizResponseListCustomerShopPageDTO {
  code?: string;
  data?: CustomerShopPageDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerShopRespDTO»» */
export interface BizResponseListCustomerShopRespDTO {
  code?: string;
  data?: CustomerShopRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerShopShipRespDTO»» */
export interface BizResponseListCustomerShopShipRespDTO {
  code?: string;
  data?: CustomerShopShipRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerStationDTO»» */
export interface BizResponseListCustomerStationDTO {
  code?: string;
  data?: CustomerStationDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerTagDTO»» */
export interface BizResponseListCustomerTagDTO {
  code?: string;
  data?: CustomerTagDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«CustomerThirdBindRespDTO»» */
export interface BizResponseListCustomerThirdBindRespDTO {
  code?: string;
  data?: CustomerThirdBindRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«Customer»» */
export interface BizResponseListCustomer {
  code?: string;
  data?: Customer[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«DataDictRespDTO»» */
export interface BizResponseListDataDictRespDTO {
  code?: string;
  data?: DataDictRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«DepartmentDetailRespDTO»» */
export interface BizResponseListDepartmentDetailRespDTO {
  code?: string;
  data?: DepartmentDetailRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«DepartmentTreeRespDTO»» */
export interface BizResponseListDepartmentTreeRespDTO {
  code?: string;
  data?: DepartmentTreeRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«DingCompany对象»» */
export interface BizResponseListDingCompany {
  code?: string;
  data?: DingCompany[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«FeedbackInfoRspDTO»» */
export interface BizResponseListFeedbackInfoRspDTO {
  code?: string;
  data?: FeedbackInfoRspDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«FrogArticleArchiveSortRespDTO»» */
export interface BizResponseListFrogArticleArchiveSortRespDTO {
  code?: string;
  data?: FrogArticleArchiveSortRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«FrogArticleType对象»» */
export interface BizResponseListFrogArticleType {
  code?: string;
  data?: FrogArticleType[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«HolidayDateDTO»» */
export interface BizResponseListHolidayDateDTO {
  code?: string;
  data?: HolidayDateDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«HotFrogArticleSortDTO»» */
export interface BizResponseListHotFrogArticleSortDTO {
  code?: string;
  data?: HotFrogArticleSortDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«IntAreaDTO»» */
export interface BizResponseListIntAreaDTO {
  code?: string;
  data?: IntAreaDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ManageBannerRespDTO»» */
export interface BizResponseListManageBannerRespDTO {
  code?: string;
  data?: ManageBannerRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ManageRoleRespDTO»» */
export interface BizResponseListManageRoleRespDTO {
  code?: string;
  data?: ManageRoleRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ManageUserRespDTO»» */
export interface BizResponseListManageUserRespDTO {
  code?: string;
  data?: ManageUserRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«MaterialPrice对象»» */
export interface BizResponseListMaterialPrice {
  code?: string;
  data?: MaterialPrice[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«MembershipOrderDTO»» */
export interface BizResponseListMembershipOrderDTO {
  code?: string;
  data?: MembershipOrderDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«MenuTreeListRespDTO»» */
export interface BizResponseListMenuTreeListRespDTO {
  code?: string;
  data?: MenuTreeListRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«MenuTreeRespDTO»» */
export interface BizResponseListMenuTreeRespDTO {
  code?: string;
  data?: MenuTreeRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«OpenShopListRespDTO»» */
export interface BizResponseListOpenShopListRespDTO {
  code?: string;
  data?: OpenShopListRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«QueryOperateLogRespDTO»» */
export interface BizResponseListQueryOperateLogRespDTO {
  code?: string;
  data?: QueryOperateLogRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«RegisterPageImageBackendDTO»» */
export interface BizResponseListRegisterPageImageBackendDTO {
  code?: string;
  data?: RegisterPageImageBackendDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«RoleUserRespDTO»» */
export interface BizResponseListRoleUserRespDTO {
  code?: string;
  data?: RoleUserRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«RouteRespDTO»» */
export interface BizResponseListRouteRespDTO {
  code?: string;
  data?: RouteRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«SelectTypeDicDTO»» */
export interface BizResponseListSelectTypeDicDTO {
  code?: string;
  data?: SelectTypeDicDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ShopAdditionRespDTO»» */
export interface BizResponseListShopAdditionRespDTO {
  code?: string;
  data?: ShopAdditionRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ShopClearanceAddressRespDTO»» */
export interface BizResponseListShopClearanceAddressRespDTO {
  code?: string;
  data?: ShopClearanceAddressRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ShopPurchaseRespDTO»» */
export interface BizResponseListShopPurchaseRespDTO {
  code?: string;
  data?: ShopPurchaseRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«ShopShippingAddressRespDTO»» */
export interface BizResponseListShopShippingAddressRespDTO {
  code?: string;
  data?: ShopShippingAddressRespDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«SupportCenterContentDTO»» */
export interface BizResponseListSupportCenterContentDTO {
  code?: string;
  data?: SupportCenterContentDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«SupportCenterSubjectDTO»» */
export interface BizResponseListSupportCenterSubjectDTO {
  code?: string;
  data?: SupportCenterSubjectDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«TermConfigDTO»» */
export interface BizResponseListTermConfigDTO {
  code?: string;
  data?: TermConfigDTO[];
  msg?: string;
  success?: boolean;
}

/** BizResponse«List«long»» */
export interface BizResponseListLong {
  code?: string;
  data?: number[];
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

/** BizResponse«ManageLoginRespDTO» */
export interface BizResponseManageLoginRespDTO {
  code?: string;
  data?: ManageLoginRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ManageMenuRespDTO» */
export interface BizResponseManageMenuRespDTO {
  code?: string;
  data?: ManageMenuRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ManageRoleRespDTO» */
export interface BizResponseManageRoleRespDTO {
  code?: string;
  data?: ManageRoleRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ManageUserDetailRespDTO» */
export interface BizResponseManageUserDetailRespDTO {
  code?: string;
  data?: ManageUserDetailRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ManageUserInfoRespDTO» */
export interface BizResponseManageUserInfoRespDTO {
  code?: string;
  data?: ManageUserInfoRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ManageUserLoginRespDTO» */
export interface BizResponseManageUserLoginRespDTO {
  code?: string;
  data?: ManageUserLoginRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ManageUserRespDTO» */
export interface BizResponseManageUserRespDTO {
  code?: string;
  data?: ManageUserRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Map«long,CustomerDistributeQueryRespDTO»» */
export interface BizResponseMapLongCustomerDistributeQueryRespDTO {
  code?: string;
  data?: Record<string, CustomerDistributeQueryRespDTO>;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Map«string,List«DepartmentDetailRespDTO»»» */
export interface BizResponseMapStringListDepartmentDetailRespDTO {
  code?: string;
  data?: Record<string, DepartmentDetailRespDTO[]>;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Map«string,List«string»»» */
export interface BizResponseMapStringListString {
  code?: string;
  data?: Record<string, string[]>;
  msg?: string;
  success?: boolean;
}

/** BizResponse«NotifyPrivateVO» */
export interface BizResponseNotifyPrivateVO {
  code?: string;
  data?: NotifyPrivateVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«ChangeUrlWhiteUserRespDTO»» */
export interface BizResponsePageChangeUrlWhiteUserRespDTO {
  code?: string;
  data?: PageChangeUrlWhiteUserRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerDetailManagerRespDTO»» */
export interface BizResponsePageCustomerDetailManagerRespDTO {
  code?: string;
  data?: PageCustomerDetailManagerRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerDetailRespDTO»» */
export interface BizResponsePageCustomerDetailRespDTO {
  code?: string;
  data?: PageCustomerDetailRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerGoogle对象»» */
export interface BizResponsePageCustomerGoogle {
  code?: string;
  data?: PageCustomerGoogle;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerItemRespDTO»» */
export interface BizResponsePageCustomerItemRespDTO {
  code?: string;
  data?: PageCustomerItemRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerPageDTO»» */
export interface BizResponsePageCustomerPageDTO {
  code?: string;
  data?: PageCustomerPageDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerShopPageDTO»» */
export interface BizResponsePageCustomerShopPageDTO {
  code?: string;
  data?: PageCustomerShopPageDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerShopRespDTO»» */
export interface BizResponsePageCustomerShopRespDTO {
  code?: string;
  data?: PageCustomerShopRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«CustomerShopWmsRespDTO»» */
export interface BizResponsePageCustomerShopWmsRespDTO {
  code?: string;
  data?: PageCustomerShopWmsRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«DeclarationWhitelistRespDTO»» */
export interface BizResponsePageDeclarationWhitelistRespDTO {
  code?: string;
  data?: PageDeclarationWhitelistRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«DepartmentDetailRespDTO»» */
export interface BizResponsePageDepartmentDetailRespDTO {
  code?: string;
  data?: PageDepartmentDetailRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«FrogArticleRespDTO»» */
export interface BizResponsePageFrogArticleRespDTO {
  code?: string;
  data?: PageFrogArticleRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«HotFrogArticleRespDTO»» */
export interface BizResponsePageHotFrogArticleRespDTO {
  code?: string;
  data?: PageHotFrogArticleRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«ManageBannerRespDTO»» */
export interface BizResponsePageManageBannerRespDTO {
  code?: string;
  data?: PageManageBannerRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«ManageFrogArticleRespDTO»» */
export interface BizResponsePageManageFrogArticleRespDTO {
  code?: string;
  data?: PageManageFrogArticleRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«ManageMenuRespDTO»» */
export interface BizResponsePageManageMenuRespDTO {
  code?: string;
  data?: PageManageMenuRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«ManageUserRespDTO»» */
export interface BizResponsePageManageUserRespDTO {
  code?: string;
  data?: PageManageUserRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«NotifyPrivateVO»» */
export interface BizResponsePageNotifyPrivateVO {
  code?: string;
  data?: PageNotifyPrivateVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«NotifyPublicVO»» */
export interface BizResponsePageNotifyPublicVO {
  code?: string;
  data?: PageNotifyPublicVO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«QueryCustomerDistributeRespDTO»» */
export interface BizResponsePageQueryCustomerDistributeRespDTO {
  code?: string;
  data?: PageQueryCustomerDistributeRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«ShopTaxDeductionAccountRespDTO»» */
export interface BizResponsePageShopTaxDeductionAccountRespDTO {
  code?: string;
  data?: PageShopTaxDeductionAccountRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Page«TakeUserRespDTO»» */
export interface BizResponsePageTakeUserRespDTO {
  code?: string;
  data?: PageTakeUserRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«RegisterPageImageDTO» */
export interface BizResponseRegisterPageImageDTO {
  code?: string;
  data?: RegisterPageImageDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«SearchResultDTO» */
export interface BizResponseSearchResultDTO {
  code?: string;
  data?: SearchResultDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ShopAdditionAddressRespDTO» */
export interface BizResponseShopAdditionAddressRespDTO {
  code?: string;
  data?: ShopAdditionAddressRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ShopAdditionDetailRespDTO» */
export interface BizResponseShopAdditionDetailRespDTO {
  code?: string;
  data?: ShopAdditionDetailRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ShopAdditionWashedLabelRespDTO» */
export interface BizResponseShopAdditionWashedLabelRespDTO {
  code?: string;
  data?: ShopAdditionWashedLabelRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ShopClearanceAddressRespDTO» */
export interface BizResponseShopClearanceAddressRespDTO {
  code?: string;
  data?: ShopClearanceAddressRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ShopOverviewRespDTO» */
export interface BizResponseShopOverviewRespDTO {
  code?: string;
  data?: ShopOverviewRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ShopPurchaseRespDTO» */
export interface BizResponseShopPurchaseRespDTO {
  code?: string;
  data?: ShopPurchaseRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ShopShippingAddressRespDTO» */
export interface BizResponseShopShippingAddressRespDTO {
  code?: string;
  data?: ShopShippingAddressRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ShopTaxDeductionAccountRespDTO» */
export interface BizResponseShopTaxDeductionAccountRespDTO {
  code?: string;
  data?: ShopTaxDeductionAccountRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«SignUpRespDTO» */
export interface BizResponseSignUpRespDTO {
  code?: string;
  data?: SignUpRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«SupportCenterContentDTO» */
export interface BizResponseSupportCenterContentDTO {
  code?: string;
  data?: SupportCenterContentDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«SupportCenterSubjectDTO» */
export interface BizResponseSupportCenterSubjectDTO {
  code?: string;
  data?: SupportCenterSubjectDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«TakeUserRespDTO» */
export interface BizResponseTakeUserRespDTO {
  code?: string;
  data?: TakeUserRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«TermConfigDTO» */
export interface BizResponseTermConfigDTO {
  code?: string;
  data?: TermConfigDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«ThirdIsBindRespDTO» */
export interface BizResponseThirdIsBindRespDTO {
  code?: string;
  data?: ThirdIsBindRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«UserManagerDetailRespDTO» */
export interface BizResponseUserManagerDetailRespDTO {
  code?: string;
  data?: UserManagerDetailRespDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«VideoActivityDTO» */
export interface BizResponseVideoActivityDTO {
  code?: string;
  /** 直播间对象 */
  data?: VideoActivityDTO;
  msg?: string;
  success?: boolean;
}

/** BizResponse«Void» */
export interface BizResponseVoid {
  code?: string;
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

/**
 * CustomerGoogle对象
 * 客户谷歌表
 */
export interface CustomerGoogle {
  /** @example "yyyy-MM-dd HH:mm:ss" */
  createTime?: string;
  createrId?: string;
  /** @format int64 */
  customerGooleId?: number;
  /** @format int32 */
  customerId?: number;
  developerCredentials?: string;
  googleId?: string;
  googleUrl?: string;
  managerId?: string;
  managerName?: string;
  remark?: string;
  /** @format int32 */
  status?: number;
  unificationCustomerFullName?: string;
  /** @example "yyyy-MM-dd HH:mm:ss" */
  updateTime?: string;
}

/**
 * CustomerMembership对象
 * 客户与会员身份关联数据
 */
export interface CustomerMembership {
  /**
   * 创建日期
   * @format date-time
   */
  createTime?: string;
  /** @format int64 */
  customerMembershipId?: number;
  /**
   * 状态：1-正常；2-停用
   * @format int32
   */
  customerMembershipStatus?: number;
  /** 客户姓名 */
  customerName?: string;
  /**
   * 过期日期
   * @format date-time
   */
  expiresDate?: string;
  /**
   * 会员身份模板
   * @format int64
   */
  membershipTemplateId?: number;
  /** 会员身份名称 */
  membershipTemplateName?: string;
  /**
   * 会员身份收费标准
   * @format int64
   */
  membershipTemplatePriceId?: number;
  /** 会员身份收费标准名称 */
  membershipTemplatePriceName?: string;
  /**
   * 会员类型:0-普通,1-特殊
   * @format int32
   */
  specialType?: number;
  stationCode?: string;
  /**
   * 客户id
   * @format int64
   */
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
  /**
   * 更新日期
   * @format date-time
   */
  updateTime?: string;
}

/**
 * DingCompany对象
 * 公司钉钉信息表
 */
export interface DingCompany {
  agentId?: string;
  appKey?: string;
  appSecret?: string;
  corpId?: string;
  /** @format date-time */
  createTime?: string;
  deleted?: string;
  dingCompanyId?: string;
  leader?: string;
  name?: string;
  /** @format date-time */
  updateTime?: string;
}

/** FrogArticleType对象 */
export interface FrogArticleType {
  /** @format date-time */
  createTime?: string;
  /** @format int64 */
  id?: number;
  name?: string;
  /** @format int32 */
  sort?: number;
  stationCode?: string;
  /** @format date-time */
  updateTime?: string;
}

/** Map«long,CustomerDistributeQueryRespDTO» */
export type MapLongCustomerDistributeQueryRespDTO = Record<string, CustomerDistributeQueryRespDTO>;

/** Map«string,List«DepartmentDetailRespDTO»» */
export type MapStringListDepartmentDetailRespDTO = Record<string, any>;

/** Map«string,List«string»» */
export type MapStringListString = Record<string, any>;

/**
 * MaterialPrice对象
 * 国际料金表
 */
export interface MaterialPrice {
  /** 创建时间 */
  createTime?: string;
  /** @format int64 */
  materialPriceId?: number;
  /** 名称 */
  name?: string;
  stationCode?: string;
  /** 显示位置 */
  systemSource?: string;
  /** 文件类型 */
  type?: string;
  /** 更新时间 */
  updateTime?: string;
  /** 操作人 */
  updateUser?: string;
  /** 链接 */
  url?: string;
}

/** Page«ChangeUrlWhiteUserRespDTO» */
export interface PageChangeUrlWhiteUserRespDTO {
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
  records?: ChangeUrlWhiteUserRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerDetailManagerRespDTO» */
export interface PageCustomerDetailManagerRespDTO {
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
  records?: CustomerDetailManagerRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerDetailRespDTO» */
export interface PageCustomerDetailRespDTO {
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
  records?: CustomerDetailRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerGoogle对象» */
export interface PageCustomerGoogle {
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
  records?: CustomerGoogle[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerItemRespDTO» */
export interface PageCustomerItemRespDTO {
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
  records?: CustomerItemRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerPageDTO» */
export interface PageCustomerPageDTO {
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
  records?: CustomerPageDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerShopPageDTO» */
export interface PageCustomerShopPageDTO {
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
  records?: CustomerShopPageDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerShopRespDTO» */
export interface PageCustomerShopRespDTO {
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
  records?: CustomerShopRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«CustomerShopWmsRespDTO» */
export interface PageCustomerShopWmsRespDTO {
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
  records?: CustomerShopWmsRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«DeclarationWhitelistRespDTO» */
export interface PageDeclarationWhitelistRespDTO {
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
  records?: DeclarationWhitelistRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«DepartmentDetailRespDTO» */
export interface PageDepartmentDetailRespDTO {
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
  records?: DepartmentDetailRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«FrogArticleRespDTO» */
export interface PageFrogArticleRespDTO {
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
  records?: FrogArticleRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«HotFrogArticleRespDTO» */
export interface PageHotFrogArticleRespDTO {
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
  records?: HotFrogArticleRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«ManageBannerRespDTO» */
export interface PageManageBannerRespDTO {
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
  records?: ManageBannerRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«ManageFrogArticleRespDTO» */
export interface PageManageFrogArticleRespDTO {
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
  records?: ManageFrogArticleRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«ManageMenuRespDTO» */
export interface PageManageMenuRespDTO {
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
  records?: ManageMenuRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«ManageUserRespDTO» */
export interface PageManageUserRespDTO {
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
  records?: ManageUserRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«NotifyPrivateVO» */
export interface PageNotifyPrivateVO {
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
  records?: NotifyPrivateVO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«NotifyPublicVO» */
export interface PageNotifyPublicVO {
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
  records?: NotifyPublicVO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«QueryCustomerDistributeRespDTO» */
export interface PageQueryCustomerDistributeRespDTO {
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
  records?: QueryCustomerDistributeRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«ShopTaxDeductionAccountRespDTO» */
export interface PageShopTaxDeductionAccountRespDTO {
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
  records?: ShopTaxDeductionAccountRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** Page«TakeUserRespDTO» */
export interface PageTakeUserRespDTO {
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
  records?: TakeUserRespDTO[];
  searchCount?: boolean;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
}

/** 手机号登录请求DTO */
export interface _DTO {
  /** @format int32 */
  buType?: number;
  customerMobile?: string;
  /** 国际区号 */
  globalRoaming?: string;
  /** @format int32 */
  platformType?: number;
  stationCode?: string;
  /** 三方平台用户账号,可以理解为唯一标识 */
  thirdCustomerId?: string;
  /** 三方平台用户名称 */
  thirdCustomerName?: string;
  /** 三方平台用户邮箱 */
  thirdEmail?: string;
  /** 三方平台标识 */
  thirdPlatform?: string;
  verificationCode?: string;
}

/** 绑定邮箱请求DTO */
export interface DTO2 {
  /** 新的邮箱 */
  newCustomerEmail?: string;
  /** 邮箱验证码 */
  verificationCode?: string;
}

/** 请求验证码DTO */
export interface DTO3 {
  /**
   * 1注册 2重置密码 3登录 4 修改手机号
   * @format int32
   */
  bizType?: number;
  /** 国家code */
  countryPlaceCode?: string;
  /** 用户手机号 */
  customerMobile?: string;
  /** 国际区号 */
  globalRoaming?: string;
  /** 语言代码 */
  langcode?: string;
  /** 人机校验code,不能为空 */
  recaptchaCode?: string;
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
      baseURL: axiosConfig.baseURL || "//master-gateway.theckb.com:443/customer",
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
 * @baseUrl //master-gateway.theckb.com:443/customer
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
  addEmail = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户密码和邮箱修改
     * @name AddEmail
     * @summary 更改新邮箱
     * @request POST:/addEmail
     */
    addEmail: (changeEmailReqDTO: DTO2, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/addEmail`,
        method: "POST",
        body: changeEmailReqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  additional = {
    /**
     * No description
     *
     * @tags additional-controller
     * @name PostAdditional
     * @summary 添加商品附加项
     * @request POST:/additional/add
     */
    postAdditional: (reqDTO: AddAdditionReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/additional/add`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags additional-controller
     * @name Delete
     * @summary 删除附加项详情
     * @request GET:/additional/delete
     */
    delete: (
      query?: {
        /**
         * shopAdditionId
         * @format int64
         */
        shopAdditionId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/additional/delete`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags additional-controller
     * @name GetAdditional
     * @summary 获取附加项配置详情
     * @request GET:/additional/get
     */
    getAdditional: (
      query?: {
        /**
         * shopAdditionId
         * @format int64
         */
        shopAdditionId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseShopAdditionDetailRespDTO, any>({
        path: `/additional/get`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-additional-feign-api-impl
     * @name GetAdditionFeign
     * @summary getAdditionFeign
     * @request GET:/additional/getAdditionFeign
     */
    getAdditionFeign: (
      query: {
        /**
         * customerShopId
         * @format int64
         */
        customerShopId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListShopAdditionRespDTO, any>({
        path: `/additional/getAdditionFeign`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags additional-controller
     * @name GetAddress
     * @summary 获取国际物流附加项
     * @request GET:/additional/getAddress
     */
    getAddress: (params: RequestParams = {}) =>
      this.request<BizResponseShopAdditionAddressRespDTO, any>({
        path: `/additional/getAddress`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-additional-feign-api-impl
     * @name GetAddressByShopIdFeign
     * @summary getAddressByShopIdFeign
     * @request GET:/additional/getAddressByShopIdFeign
     */
    getAddressByShopIdFeign: (
      query: {
        /**
         * customerShopId
         * @format int64
         */
        customerShopId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseShopAdditionAddressRespDTO, any>({
        path: `/additional/getAddressByShopIdFeign`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags additional-controller
     * @name GetAddressFeign
     * @summary 获取国际物流附加项(Feign)
     * @request GET:/additional/getAddressFeign
     */
    getAddressFeign: (
      query: {
        /**
         * customerShopId
         * @format int64
         */
        customerShopId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseShopAdditionAddressRespDTO, any>({
        path: `/additional/getAddressFeign`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags additional-controller
     * @name GetCategoryConfigured
     * @summary 查询店铺已配置附加项的类目
     * @request GET:/additional/getCategoryConfigured
     */
    getCategoryConfigured: (params: RequestParams = {}) =>
      this.request<BizResponseListCategoryCodeRespDTO, any>({
        path: `/additional/getCategoryConfigured`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-additional-feign-api-impl
     * @name GetGoodsAdditionFeign
     * @summary getGoodsAdditionFeign
     * @request GET:/additional/getGoodsAdditionFeign
     */
    getGoodsAdditionFeign: (
      query: {
        /**
         * categoryCateId
         * @format int64
         */
        categoryCateId: number;
        /**
         * customerShopId
         * @format int64
         */
        customerShopId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseShopAdditionDetailRespDTO, any>({
        path: `/additional/getGoodsAdditionFeign`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags additional-controller
     * @name GetList
     * @summary 获取附加项模板
     * @request GET:/additional/getList
     */
    getList: (params: RequestParams = {}) =>
      this.request<BizResponseListAdditionTemplateRespDTO, any>({
        path: `/additional/getList`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-additional-feign-api-impl
     * @name GetShopLogisticsInfo
     * @summary getShopLogisticsInfo
     * @request GET:/additional/getShopLogisticsInfo
     */
    getShopLogisticsInfo: (
      query: {
        /**
         * customerShopId
         * @format int64
         */
        customerShopId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerShopAddressRespDTO, any>({
        path: `/additional/getShopLogisticsInfo`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags additional-controller
     * @name GetWashedlabel
     * @summary 获取水洗标配置
     * @request GET:/additional/getWashedlabel
     */
    getWashedlabel: (params: RequestParams = {}) =>
      this.request<BizResponseShopAdditionWashedLabelRespDTO, any>({
        path: `/additional/getWashedlabel`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags additional-controller
     * @name GetWashedlabelWarehouse
     * @summary 获取水洗标配置-仓库
     * @request GET:/additional/getWashedlabelWarehouse
     */
    getWashedlabelWarehouse: (
      query: {
        /**
         * customerShopId
         * @format int64
         */
        customerShopId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseShopAdditionWashedLabelRespDTO, any>({
        path: `/additional/getWashedlabelWarehouse`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags additional-controller
     * @name List
     * @summary 获取附加项配置表
     * @request GET:/additional/list
     */
    list: (params: RequestParams = {}) =>
      this.request<BizResponseListShopAdditionRespDTO, any>({
        path: `/additional/list`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags additional-controller
     * @name Update
     * @summary 更新商品附加项
     * @request POST:/additional/update
     */
    update: (reqDTO: UpdateAdditionReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/additional/update`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags additional-controller
     * @name UpdateAddress
     * @summary 更新国际物流附加项
     * @request POST:/additional/updateAddress
     */
    updateAddress: (reqDTO: UpdateAdditionAddressReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/additional/updateAddress`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags additional-controller
     * @name UpdateWashedlabel
     * @summary 更新水洗标配置
     * @request POST:/additional/updateWashedlabel
     */
    updateWashedlabel: (reqDTO: UpdateAdditionWashedLabelReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/additional/updateWashedlabel`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  area = {
    /**
     * No description
     *
     * @tags 地区设置
     * @name GetAreaById
     * @summary 查询地区信息通过id
     * @request POST:/area/getAreaById
     */
    getAreaById: (
      query: {
        /**
         * intAreaId
         * @format int64
         */
        intAreaId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseIntAreaDTO, any>({
        path: `/area/getAreaById`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 地区设置
     * @name GetAreaListByIds
     * @summary 批量查询地区信息通过ids
     * @request POST:/area/getAreaListByIds
     */
    getAreaListByIds: (
      query: {
        /** intAreaIds */
        intAreaIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListIntAreaDTO, any>({
        path: `/area/getAreaListByIds`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 地区设置
     * @name GetByKrNameLike
     * @summary getByKrNameLike
     * @request GET:/area/getByKrNameLike
     */
    getByKrNameLike: (
      query: {
        /** krName */
        krName: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseIntAreaDTO, any>({
        path: `/area/getByKrNameLike`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 地区设置
     * @name GetByPid
     * @summary 查询下级地区信息
     * @request GET:/area/getByPid
     */
    getByPid: (
      query: {
        /**
         * pid
         * @format int64
         */
        pid: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListIntAreaDTO, any>({
        path: `/area/getByPid`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 地区设置
     * @name GetCountryByCountryCode
     * @summary getCountryByCountryCode
     * @request GET:/area/getCountryByCountryCode
     */
    getCountryByCountryCode: (
      query: {
        /** countryCode */
        countryCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseIntAreaDTO, any>({
        path: `/area/getCountryByCountryCode`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 地区设置
     * @name GetJapanProvinceByEnLike
     * @summary getJapanProvinceByEnLike
     * @request GET:/area/getJapanProvinceByEnLike
     */
    getJapanProvinceByEnLike: (
      query: {
        /** nameEn */
        nameEn: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseIntAreaDTO, any>({
        path: `/area/getJapanProvinceByEnLike`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 地区设置
     * @name GetJapanProvinceByNameLike
     * @summary getJapanProvinceByNameLike
     * @request GET:/area/getJapanProvinceByNameLike
     */
    getJapanProvinceByNameLike: (
      query: {
        /** name */
        name: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseIntAreaDTO, any>({
        path: `/area/getJapanProvinceByNameLike`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 地区设置
     * @name GetTree
     * @summary 查询地区信息全部
     * @request POST:/area/getTree
     */
    getTree: (
      query?: {
        /**
         * 查询级别： 1洲 2国 3省
         * @format int64
         */
        level?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListIntAreaDTO, any>({
        path: `/area/getTree`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),
  };
  assignManager = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name AssignManager
     * @summary assignManager
     * @request POST:/assignManager
     */
    assignManager: (reqDTOs: QueryCustomerByManagerDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/assignManager`,
        method: "POST",
        body: reqDTOs,
        type: ContentType.Json,
        ...params,
      }),
  };
  assignSupervisionManager = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name AssignSupervisionManager
     * @summary assignSupervisionManager
     * @request POST:/assignSupervisionManager
     */
    assignSupervisionManager: (reqDTOs: QueryCustomerByManagerDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/assignSupervisionManager`,
        method: "POST",
        body: reqDTOs,
        type: ContentType.Json,
        ...params,
      }),
  };
  backdoor = {
    /**
     * No description
     *
     * @tags 省市区后门接口
     * @name AreaInitJapanEnName
     * @summary initJapanEnName
     * @request GET:/backdoor/area/initJapanEnName
     */
    areaInitJapanEnName: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/backdoor/area/initJapanEnName`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 省市区后门接口
     * @name AreaSetCountryCode
     * @summary setCountryCode
     * @request GET:/backdoor/area/setCountryCode
     */
    areaSetCountryCode: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/backdoor/area/setCountryCode`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户后门接口
     * @name CustomerCreateNew
     * @summary 新建一个用户
     * @request POST:/backdoor/customer/createNew
     */
    customerCreateNew: (
      query?: {
        /**
         * 业务类型 0直采 1代采
         * @format int32
         */
        buType?: number;
        /** 渠道 */
        channel?: string;
        /** chartWorkId */
        chatWorkId?: string;
        /** 区号 */
        countryCode?: string;
        /** 国家code */
        countryPlaceCode?: string;
        /** 邮箱地址 */
        customerEmail?: string;
        /** 客户手机号 */
        customerMobile?: string;
        /** 联系人姓名 */
        customerName?: string;
        /**
         * 客户状态：1-正常；2-停用
         * @format int32
         * @example 1
         */
        customerStatus?: number;
        /**
         * 性别：1-男；2-女；3-未知
         * @format int32
         * @example 1
         */
        gender?: number;
        /** 三方邀请码 */
        invitationCode?: string;
        /**
         * 邀请平台:0-内部,1-aucfan
         * @format int32
         */
        invitationPlatform?: number;
        /** 语言代码 */
        langcode?: string;
        /** 登录名 */
        loginName?: string;
        /** 登录密码 */
        password?: string;
        /**
         * 平台类型:1网页端,2APP,3插件,4H5
         * @format int32
         */
        platformType?: number;
        /** 三方推荐邮箱 */
        recommendationEmail?: string;
        /** skype */
        skype?: string;
        /** spm */
        spm?: string;
        /** 站点code */
        stationCode?: string;
        /**
         * 隐私协议id
         * @format int64
         */
        termId?: number;
        /** 三方平台用户账号,可以理解为唯一标识 */
        thirdCustomerId?: string;
        /** 三方平台用户名称 */
        thirdCustomerName?: string;
        /** 三方平台用户邮箱 */
        thirdEmail?: string;
        /** 三方平台标识 */
        thirdPlatform?: string;
        /** 时区 */
        utcTimeZone?: string;
        /** 验证码 */
        verificationCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/backdoor/customer/createNew`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户后门接口
     * @name CustomerDeleteCustomerBack
     * @summary 后台删除用户接口,松松使用
     * @request DELETE:/backdoor/customer/deleteCustomerBack
     */
    customerDeleteCustomerBack: (
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
        path: `/backdoor/customer/deleteCustomerBack`,
        method: "DELETE",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户后门接口
     * @name CustomerInternalCustomerBack
     * @summary 标记用户为内部用户,松松使用
     * @request POST:/backdoor/customer/internalCustomerBack
     */
    customerInternalCustomerBack: (
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
        path: `/backdoor/customer/internalCustomerBack`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户后门接口
     * @name CustomerManagerLogSaveAndDelayDel
     * @summary 获取经济舱或退会的客户总监客户经理存入数据库
     * @request POST:/backdoor/customer/managerLogSaveAndDelayDel
     */
    customerManagerLogSaveAndDelayDel: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/backdoor/customer/managerLogSaveAndDelayDel`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户后门接口
     * @name NotifyInitKrAndEnContent
     * @summary 初始化英文和韩文文案
     * @request GET:/backdoor/notify/initKrAndEnContent
     */
    notifyInitKrAndEnContent: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/backdoor/notify/initKrAndEnContent`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 帮助中心后面接口
     * @name SupportContentInitContent
     * @summary initContent
     * @request GET:/backdoor/supportContent/initContent
     */
    supportContentInitContent: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/backdoor/supportContent/initContent`,
        method: "GET",
        ...params,
      }),
  };
  banner = {
    /**
     * No description
     *
     * @tags banner管理接口
     * @name Create
     * @summary 创建Banner
     * @request POST:/banner/create
     */
    create: (addBannerReqDTO: AddBannerReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/banner/create`,
        method: "POST",
        body: addBannerReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags banner管理接口
     * @name Delete
     * @summary 删除banner
     * @request DELETE:/banner/delete
     */
    delete: (
      query: {
        /**
         * bannerId
         * @format int64
         */
        bannerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseObject, any>({
        path: `/banner/delete`,
        method: "DELETE",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags banner管理接口
     * @name GetByCategory
     * @summary getMarketBannerByCategory
     * @request POST:/banner/getByCategory
     */
    getByCategory: (reqDTO: ManageBannerReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListManageBannerRespDTO, any>({
        path: `/banner/getByCategory`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags banner管理接口
     * @name Increment
     * @summary 累加点击数
     * @request POST:/banner/increment
     */
    increment: (dto: UpdateManageBannerReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseLong, any>({
        path: `/banner/increment`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags banner管理接口
     * @name Page
     * @summary 查询banner分页
     * @request POST:/banner/page
     */
    page: (getManageBannerPageReqDTO: GetManageBannerPageReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageManageBannerRespDTO, any>({
        path: `/banner/page`,
        method: "POST",
        body: getManageBannerPageReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags banner管理接口
     * @name Show
     * @summary 获取用户显示的banner(前台)
     * @request GET:/banner/show
     */
    show: (
      query?: {
        /**
         * bannerType
         * @format int32
         */
        bannerType?: number;
        /** stationCode */
        stationCode?: string;
        /**
         * systemSource
         * @format int32
         */
        systemSource?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListManageBannerRespDTO, any>({
        path: `/banner/show`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags banner管理接口
     * @name ShowMarket
     * @summary 根据banner类型获取banner列表
     * @request GET:/banner/show/market
     */
    showMarket: (
      query: {
        /**
         * bannerType
         * @format int32
         */
        bannerType: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListManageBannerRespDTO, any>({
        path: `/banner/show/market`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags banner管理接口
     * @name ToggleStatus
     * @summary 开启/关闭banner状态
     * @request POST:/banner/toggle/status
     */
    toggleStatus: (dto: UpdateManageBannerReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/banner/toggle/status`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags banner管理接口
     * @name Update
     * @summary 修改Banner
     * @request PUT:/banner/update
     */
    update: (updateBannerReqDTO: UpdateBannerReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/banner/update`,
        method: "PUT",
        body: updateBannerReqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  base = {
    /**
     * No description
     *
     * @tags 官网接口
     * @name FeedbackAddFeedbackInfo
     * @summary 保存客户信息
     * @request POST:/base/feedback/addFeedbackInfo
     */
    feedbackAddFeedbackInfo: (feedbackInfoReqDTO: FeedbackInfoReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/base/feedback/addFeedbackInfo`,
        method: "POST",
        body: feedbackInfoReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 官网接口
     * @name FeedbackList
     * @summary 查询列表
     * @request GET:/base/feedback/list
     */
    feedbackList: (params: RequestParams = {}) =>
      this.request<BizResponseListFeedbackInfoRspDTO, any>({
        path: `/base/feedback/list`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 注册页配图
     * @name RegisterPageImageBackendEdit
     * @summary 编辑(后台)
     * @request POST:/base/registerPageImage/backend/edit
     */
    registerPageImageBackendEdit: (dto: RegisterPageImageBackendUpdateDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/base/registerPageImage/backend/edit`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 注册页配图
     * @name RegisterPageImageBackendQuery
     * @summary 查询列表(后台)
     * @request GET:/base/registerPageImage/backend/query
     */
    registerPageImageBackendQuery: (params: RequestParams = {}) =>
      this.request<BizResponseListRegisterPageImageBackendDTO, any>({
        path: `/base/registerPageImage/backend/query`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 注册页配图
     * @name RegisterPageImageGetRegisterImage
     * @summary 查询注册页配图
     * @request GET:/base/registerPageImage/getRegisterImage
     */
    registerPageImageGetRegisterImage: (
      query?: {
        /** stationCode */
        stationCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseRegisterPageImageDTO, any>({
        path: `/base/registerPageImage/getRegisterImage`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 类型选择字典
     * @name SelectTypeDicGetSelectType
     * @summary 查询类型字典
     * @request GET:/base/selectTypeDic/getSelectType
     */
    selectTypeDicGetSelectType: (
      query?: {
        /** businessType */
        businessType?: string;
        /** stationCode */
        stationCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListSelectTypeDicDTO, any>({
        path: `/base/selectTypeDic/getSelectType`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 全球化基础站点信息
     * @name StationGetSupportStation
     * @summary 查询支持的站点信息
     * @request GET:/base/station/getSupportStation
     */
    stationGetSupportStation: (params: RequestParams = {}) =>
      this.request<BizResponseListCustomerStationDTO, any>({
        path: `/base/station/getSupportStation`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 帮助中心
     * @name SupportCenterContentAdd
     * @summary 添加文档
     * @request POST:/base/supportCenter/content/add
     */
    supportCenterContentAdd: (updateBackendDTO: SupportCenterContentUpdateBackendDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/base/supportCenter/content/add`,
        method: "POST",
        body: updateBackendDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 帮助中心
     * @name SupportCenterContentDelete
     * @summary 删除文档
     * @request POST:/base/supportCenter/content/delete/{contentId}
     */
    supportCenterContentDelete: (contentId: number, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/base/supportCenter/content/delete/${contentId}`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 帮助中心
     * @name SupportCenterContentQuery
     * @summary 查询文档
     * @request GET:/base/supportCenter/content/query
     */
    supportCenterContentQuery: (
      query?: {
        /** bizType */
        bizType?: string;
        /** contentType */
        contentType?: string;
        /** keyword */
        keyword?: string;
        /** stationCode */
        stationCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListSupportCenterContentDTO, any>({
        path: `/base/supportCenter/content/query`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 帮助中心
     * @name SupportCenterContentUpdate
     * @summary 更新文档
     * @request POST:/base/supportCenter/content/update
     */
    supportCenterContentUpdate: (updateBackendDTO: SupportCenterContentUpdateBackendDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/base/supportCenter/content/update`,
        method: "POST",
        body: updateBackendDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 帮助中心
     * @name SupportCenterGetSupportSubjectByParentId
     * @summary 查询帮助中心子目录，用于构建帮助中心目录（前台）
     * @request GET:/base/supportCenter/getSupportSubjectByParentId
     */
    supportCenterGetSupportSubjectByParentId: (
      query?: {
        /** bizType */
        bizType?: string;
        /**
         * parentId
         * @format int64
         */
        parentId?: number;
        /** stationCode */
        stationCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListSupportCenterSubjectDTO, any>({
        path: `/base/supportCenter/getSupportSubjectByParentId`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 帮助中心
     * @name SupportCenterQueryByPath
     * @summary 帮助中心根据路径查全路径
     * @request GET:/base/supportCenter/query/byPath
     */
    supportCenterQueryByPath: (
      query?: {
        /** path */
        path?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseSupportCenterSubjectDTO, any>({
        path: `/base/supportCenter/query/byPath`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 帮助中心
     * @name SupportCenterQueryGetSupportCenterContentById
     * @summary 帮助中心根据id查内容
     * @request GET:/base/supportCenter/query/getSupportCenterContentById
     */
    supportCenterQueryGetSupportCenterContentById: (
      query?: {
        /**
         * contentId
         * @format int32
         */
        contentId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseSupportCenterContentDTO, any>({
        path: `/base/supportCenter/query/getSupportCenterContentById`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 帮助中心
     * @name SupportCenterSubjectBatchUpdateContentSort
     * @summary 批量更新排序
     * @request POST:/base/supportCenter/subject/batchUpdateContentSort
     */
    supportCenterSubjectBatchUpdateContentSort: (
      updateBackendDTOList: SupportCenterContentUpdateBackendDTO[],
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/base/supportCenter/subject/batchUpdateContentSort`,
        method: "POST",
        body: updateBackendDTOList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 帮助中心
     * @name SupportCenterSubjectBatchUpdateSort
     * @summary 批量更新目录排序
     * @request POST:/base/supportCenter/subject/batchUpdateSort
     */
    supportCenterSubjectBatchUpdateSort: (
      updateBackendDTOList: SupportCenterSubjectUpdateBackendDTO[],
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/base/supportCenter/subject/batchUpdateSort`,
        method: "POST",
        body: updateBackendDTOList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 帮助中心
     * @name SupportCenterSubjectBatchUpdateSubject
     * @summary 批量更新分类
     * @request POST:/base/supportCenter/subject/batchUpdateSubject
     */
    supportCenterSubjectBatchUpdateSubject: (
      updateBackendDTOList: SupportCenterSubjectUpdateBackendDTO[],
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/base/supportCenter/subject/batchUpdateSubject`,
        method: "POST",
        body: updateBackendDTOList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 帮助中心
     * @name SupportCenterSubjectContentList
     * @summary 获取帮助中心内容
     * @request GET:/base/supportCenter/subject/contentList
     */
    supportCenterSubjectContentList: (
      query?: {
        /**
         * subjectId
         * @format int64
         */
        subjectId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListSupportCenterContentDTO, any>({
        path: `/base/supportCenter/subject/contentList`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 帮助中心
     * @name SupportCenterTree
     * @summary 帮助中心目录-树结构
     * @request GET:/base/supportCenter/tree
     */
    supportCenterTree: (
      query?: {
        /** bizType */
        bizType?: string;
        /** stationCode */
        stationCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListSupportCenterSubjectDTO, any>({
        path: `/base/supportCenter/tree`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 条款配置
     * @name TermAgreeTerm
     * @summary 用户同意条款
     * @request GET:/base/term/agreeTerm
     */
    termAgreeTerm: (
      query?: {
        /**
         * termId
         * @format int64
         */
        termId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/base/term/agreeTerm`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 条款配置
     * @name TermGetCustomerAgreeEffectTermByType
     * @summary 获取用户同意过的条款
     * @request GET:/base/term/getCustomerAgreeEffectTermByType
     */
    termGetCustomerAgreeEffectTermByType: (
      query?: {
        /** stationCode */
        stationCode?: string;
        /** type */
        type?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseTermConfigDTO, any>({
        path: `/base/term/getCustomerAgreeEffectTermByType`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 条款配置
     * @name TermGetEffectTermByType
     * @summary 获取最新的条款配置
     * @request GET:/base/term/getEffectTermByType
     */
    termGetEffectTermByType: (
      query?: {
        /** stationCode */
        stationCode?: string;
        /** type */
        type?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListTermConfigDTO, any>({
        path: `/base/term/getEffectTermByType`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 条款配置
     * @name TermGetTermUpdateLog
     * @summary 查询条款的修改记录
     * @request GET:/base/term/getTermUpdateLog
     */
    termGetTermUpdateLog: (
      query?: {
        /** stationCode */
        stationCode?: string;
        /** type */
        type?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListTermConfigDTO, any>({
        path: `/base/term/getTermUpdateLog`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 条款配置
     * @name TermUpdateTermContent
     * @summary 更新条款内容(管理后台)
     * @request POST:/base/term/updateTermContent
     */
    termUpdateTermContent: (termUpdateDTO: TermUpdateDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/base/term/updateTermContent`,
        method: "POST",
        body: termUpdateDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  bind = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name Third
     * @summary 绑定第三方账号
     * @request POST:/bind/third
     */
    third: (reqDTO: BindThirdReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/bind/third`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name ThirdCancel
     * @summary 解绑第三方账号
     * @request POST:/bind/third/cancel
     */
    thirdCancel: (reqDTO: BindThirdReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/bind/third/cancel`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name ThirdGetBindList
     * @summary 第三方账号已绑定列表
     * @request GET:/bind/third/getBindList
     */
    thirdGetBindList: (params: RequestParams = {}) =>
      this.request<BizResponseListCustomerThirdBindRespDTO, any>({
        path: `/bind/third/getBindList`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name ThirdIsBind
     * @summary 第三方账号是否已绑定系统账号
     * @request POST:/bind/third/isBind
     */
    thirdIsBind: (reqDTO: BindThirdReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseThirdIsBindRespDTO, any>({
        path: `/bind/third/isBind`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  cancelAllCustomerCheck = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户密码和邮箱修改
     * @name CancelAllCustomerCheck
     * @summary 注销全部账号校验
     * @request GET:/cancelAllCustomerCheck
     */
    cancelAllCustomerCheck: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCustomerShopRespDTO, any>({
        path: `/cancelAllCustomerCheck`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  cancelCustomer = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户密码和邮箱修改
     * @name CancelCustomer
     * @summary 注销全部账号
     * @request GET:/cancelCustomer
     */
    cancelCustomer: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/cancelCustomer`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  cancelSubCustomer = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户密码和邮箱修改
     * @name CancelSubCustomer
     * @summary 注销子账号
     * @request GET:/cancelSubCustomer
     */
    cancelSubCustomer: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/cancelSubCustomer`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  cancelSubCustomerCheck = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户密码和邮箱修改
     * @name CancelSubCustomerCheck
     * @summary 注销子账号校验
     * @request GET:/cancelSubCustomerCheck
     */
    cancelSubCustomerCheck: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCustomerShopRespDTO, any>({
        path: `/cancelSubCustomerCheck`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  changeEmailsendEmail = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户密码和邮箱修改
     * @name ChangeEmailsendEmail
     * @summary 更改邮箱发送邮件
     * @request GET:/changeEmailsendEmail
     */
    changeEmailsendEmail: (
      query: {
        /**
         * buType
         * @format int32
         */
        buType?: number;
        /** newCustomerEmail */
        newCustomerEmail: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/changeEmailsendEmail`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  changeLogin = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name ChangeLogin
     * @summary 切换登陆登录(2B-2C)
     * @request POST:/changeLogin
     */
    changeLogin: (params: RequestParams = {}) =>
      this.request<BizResponseCustomerLoginRespDTO, any>({
        path: `/changeLogin`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),
  };
  changeLoginByType = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name ChangeLoginByType
     * @summary 根据类型切换登录
     * @request GET:/changeLoginByType
     */
    changeLoginByType: (
      query: {
        /**
         * type
         * @format int32
         */
        type: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerLoginRespDTO, any>({
        path: `/changeLoginByType`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  changeMobile = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户密码和邮箱修改
     * @name ChangeMobile
     * @summary 修改手机号码
     * @request POST:/changeMobile
     */
    changeMobile: (reqDTO: ChangeMobileReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseVoid, any>({
        path: `/changeMobile`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  changeNewEmail = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户密码和邮箱修改
     * @name ChangeNewEmail
     * @summary 更改新邮箱
     * @request POST:/changeNewEmail
     */
    changeNewEmail: (changeEmailReqDTO: ChangeEmailReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/changeNewEmail`,
        method: "POST",
        body: changeEmailReqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  changePriceTrackingFlag = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name ChangePriceTrackingFlag
     * @summary 开启关闭价格跟踪
     * @request GET:/changePriceTrackingFlag
     */
    changePriceTrackingFlag: (
      query: {
        /**
         * priceTrackingFlag
         * @format int32
         */
        priceTrackingFlag: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/changePriceTrackingFlag`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  changeShop = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name ChangeShop
     * @summary 切换店铺
     * @request GET:/changeShop
     */
    changeShop: (
      query: {
        /**
         * shopId
         * @format int64
         */
        shopId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/changeShop`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  checkAdmin = {
    /**
     * No description
     *
     * @tags manage-feign-api-impl
     * @name CheckAdmin
     * @summary checkAdmin
     * @request GET:/checkAdmin
     */
    checkAdmin: (
      query: {
        /** userId */
        userId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/checkAdmin`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  checkPalletWhite = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name CheckPalletWhite
     * @summary 检测货盘白名单
     * @request GET:/checkPalletWhite
     */
    checkPalletWhite: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/checkPalletWhite`,
        method: "GET",
        ...params,
      }),
  };
  checkSmcBlack = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name CheckSmcBlack
     * @summary 检测推广联盟黑名单
     * @request GET:/checkSMCBlack
     */
    checkSmcBlack: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/checkSMCBlack`,
        method: "GET",
        ...params,
      }),
  };
  clearCache = {
    /**
     * No description
     *
     * @tags area-feign-api-impl
     * @name ClearCache
     * @summary 清空缓存
     * @request GET:/clearCache
     */
    clearCache: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/clearCache`,
        method: "GET",
        ...params,
      }),
  };
  closeAutorenewQuestionnaire = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name CloseAutorenewQuestionnaire
     * @summary 关闭自动续费问卷调查
     * @request POST:/closeAutorenewQuestionnaire
     */
    closeAutorenewQuestionnaire: (questionnaire: JSONObject, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/closeAutorenewQuestionnaire`,
        method: "POST",
        body: questionnaire,
        type: ContentType.Json,
        ...params,
      }),
  };
  config = {
    /**
     * No description
     *
     * @tags customer-config-controller
     * @name GetConfig
     * @summary 获取用户配置
     * @request GET:/config/get
     */
    getConfig: (
      query: {
        /** configCode */
        configCode: string;
        /**
         * 级别 1-superCustomerId 2-mainCustomerId 3-customerId
         * @format int32
         */
        level?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerConfigRespDTO, any>({
        path: `/config/get`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-config-controller
     * @name Save
     * @summary 保存用户配置
     * @request POST:/config/save
     */
    save: (saveCustomerConfigReqDTO: SaveCustomerConfigReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseVoid, any>({
        path: `/config/save`,
        method: "POST",
        body: saveCustomerConfigReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-config-controller
     * @name SaveOrUpdate
     * @summary 保存或更新用户配置
     * @request POST:/config/saveOrUpdate
     */
    saveOrUpdate: (request: SaveOrUpdateCustomerConfigReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseVoid, any>({
        path: `/config/saveOrUpdate`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),
  };
  create2D = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name Create2D
     * @summary 创建2D账号
     * @request POST:/create2D
     */
    create2D: (superCustomerIds: number[], params: RequestParams = {}) =>
      this.request<BizResponseInt, any>({
        path: `/create2D`,
        method: "POST",
        body: superCustomerIds,
        type: ContentType.Json,
        ...params,
      }),
  };
  crossBorder = {
    /**
     * No description
     *
     * @tags shop
     * @name ShopList
     * @summary get shop list
     * @request POST:/crossBorder/shop/list
     */
    shopList: (dto: OpenBaseReqDto, params: RequestParams = {}) =>
      this.request<BizResponseListOpenShopListRespDTO, any>({
        path: `/crossBorder/shop/list`,
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
     * @tags 会员信息列表操作
     * @name MembershipGetBeforeTodayExpireList
     * @summary 查询会员信息List
     * @request POST:/customer/membership/getBeforeTodayExpireList
     */
    membershipGetBeforeTodayExpireList: (queryDTO: CustomerMembershipReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListCustomerMembershipResDTO, any>({
        path: `/customer/membership/getBeforeTodayExpireList`,
        method: "POST",
        body: queryDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 会员信息列表操作
     * @name MembershipGetExpiresDate
     * @summary 计算过期日期
     * @request GET:/customer/membership/getExpiresDate
     */
    membershipGetExpiresDate: (
      query: {
        /**
         * start
         * @format date-time
         */
        start: string;
        /**
         * validPeriod
         * @format int32
         */
        validPeriod: number;
        /**
         * validPeriodUnit
         * @format int32
         */
        validPeriodUnit: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/customer/membership/getExpiresDate`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 会员信息列表操作
     * @name MembershipGetExpiresDateBySuperCustomerId
     * @summary 基于会员等级数据计算过期日期
     * @request GET:/customer/membership/getExpiresDateBySuperCustomerId
     */
    membershipGetExpiresDateBySuperCustomerId: (
      query: {
        /**
         * idDelay
         * @format int64
         */
        idDelay: number;
        /**
         * membershipTemplateId
         * @format int64
         */
        membershipTemplateId?: number;
        /**
         * superCustomerId
         * @format int64
         */
        superCustomerId: number;
        /**
         * validPeriod
         * @format int32
         */
        validPeriod: number;
        /**
         * validPeriodUnit
         * @format int32
         */
        validPeriodUnit: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/customer/membership/getExpiresDateBySuperCustomerId`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 会员信息列表操作
     * @name MembershipInsert
     * @summary 添加会员信息
     * @request POST:/customer/membership/insert
     */
    membershipInsert: (dto: CustomerMembershipReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/customer/membership/insert`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 会员信息列表操作
     * @name MembershipSelectCustomerMembership
     * @summary 查询会员信息
     * @request POST:/customer/membership/selectCustomerMembership
     */
    membershipSelectCustomerMembership: (queryDTO: CustomerMembershipReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseCustomerMembershipResDTO, any>({
        path: `/customer/membership/selectCustomerMembership`,
        method: "POST",
        body: queryDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 会员信息列表操作
     * @name MembershipSelectNoExpiredListByTemplateId
     * @summary 根据会员身份模板获取未过期用户列表
     * @request POST:/customer/membership/selectNoExpiredListByTemplateId
     */
    membershipSelectNoExpiredListByTemplateId: (
      query: {
        /**
         * membershipTemplateId
         * @format int64
         */
        membershipTemplateId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCustomerMembershipResDTO, any>({
        path: `/customer/membership/selectNoExpiredListByTemplateId`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 会员信息列表操作
     * @name MembershipUpdateById
     * @summary 更新会员信息
     * @request POST:/customer/membership/updateById
     */
    membershipUpdateById: (dto: CustomerMembershipReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/customer/membership/updateById`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 会员信息列表操作
     * @name MembershipValidMembership
     * @summary 查询会员信息/是否过期
     * @request GET:/customer/membership/validMembership
     */
    membershipValidMembership: (
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
        path: `/customer/membership/validMembership`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopActivateSubCustomer
     * @summary 激活子账号
     * @request POST:/customer/shop/activateSubCustomer
     */
    shopActivateSubCustomer: (reqDTO: AddSubCustomerReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/customer/shop/activateSubCustomer`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopAdd
     * @summary 添加店铺
     * @request POST:/customer/shop/add
     */
    shopAdd: (dto: AddCustomerShopReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseLong, any>({
        path: `/customer/shop/add`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopAddClearanceAddress
     * @summary 添加清关地址
     * @request POST:/customer/shop/addClearanceAddress
     */
    shopAddClearanceAddress: (reqDTO: AddClearanceAddressReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseLong, any>({
        path: `/customer/shop/addClearanceAddress`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopAddShippingAddress
     * @summary 添加收货地址
     * @request POST:/customer/shop/addShippingAddress
     */
    shopAddShippingAddress: (reqDTO: AddShippingAddressReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseLong, any>({
        path: `/customer/shop/addShippingAddress`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopAutoOrderSwitch
     * @summary 开启/关闭自动下单
     * @request POST:/customer/shop/auto/order/switch
     */
    shopAutoOrderSwitch: (dto: CustomerShopOptDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/customer/shop/auto/order/switch`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopDeleteClearanceAddressV2
     * @summary 删除清关地址
     * @request POST:/customer/shop/deleteClearanceAddress/v2
     */
    shopDeleteClearanceAddressV2: (
      deleteClearanceAddressReqDTO: DeleteClearanceAddressReqDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/customer/shop/deleteClearanceAddress/v2`,
        method: "POST",
        body: deleteClearanceAddressReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopDeleteDefaultClearanceAddress
     * @summary 删除清关地址
     * @request POST:/customer/shop/deleteDefaultClearanceAddress
     */
    shopDeleteDefaultClearanceAddress: (
      query?: {
        /**
         * shopClearanceAddressId
         * @format int64
         */
        shopClearanceAddressId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/customer/shop/deleteDefaultClearanceAddress`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopDeleteShippingAddress
     * @summary 删除收货地址
     * @request POST:/customer/shop/deleteShippingAddress
     */
    shopDeleteShippingAddress: (
      query?: {
        /**
         * shopShippingAddressId
         * @format int64
         */
        shopShippingAddressId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/customer/shop/deleteShippingAddress`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopDeleteShippingAddressV2
     * @summary 删除收货地址
     * @request POST:/customer/shop/deleteShippingAddress/v2
     */
    shopDeleteShippingAddressV2: (
      deleteShippingAddressReqDTO: DeleteShippingAddressReqDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/customer/shop/deleteShippingAddress/v2`,
        method: "POST",
        body: deleteShippingAddressReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopGet
     * @summary 取得用户店铺
     * @request POST:/customer/shop/get
     */
    shopGet: (params: RequestParams = {}) =>
      this.request<BizResponseCustomerShopRespDTO, any>({
        path: `/customer/shop/get`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopGetShop
     * @summary 店铺分页_可根据账户id
     * @request POST:/customer/shop/get/shop
     */
    shopGetShop: (dto: GetCustomerShopListReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListCustomerShopRespDTO, any>({
        path: `/customer/shop/get/shop`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopGetBaseCustomerAuthStatus
     * @summary 获取BASE店铺绑定且token失效
     * @request POST:/customer/shop/getBaseCustomerAuthStatus
     */
    shopGetBaseCustomerAuthStatus: (params: RequestParams = {}) =>
      this.request<BizResponseListCustomerShopRespDTO, any>({
        path: `/customer/shop/getBaseCustomerAuthStatus`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopGetBaseCustomerAuthStatusByShopId
     * @summary 根据店铺ID获取BASE店铺绑定且token失效
     * @request POST:/customer/shop/getBaseCustomerAuthStatusByShopId
     */
    shopGetBaseCustomerAuthStatusByShopId: (params: RequestParams = {}) =>
      this.request<BizResponseCustomerShopRespDTO, any>({
        path: `/customer/shop/getBaseCustomerAuthStatusByShopId`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopGetClearanceAddress
     * @summary 获取单个店铺清关地址
     * @request GET:/customer/shop/getClearanceAddress
     */
    shopGetClearanceAddress: (
      query?: {
        /**
         * shopClearanceAddressId
         * @format int64
         */
        shopClearanceAddressId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseShopClearanceAddressRespDTO, any>({
        path: `/customer/shop/getClearanceAddress`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopGetClearanceAddressList
     * @summary 获取店铺收货清关列表
     * @request GET:/customer/shop/getClearanceAddressList
     */
    shopGetClearanceAddressList: (params: RequestParams = {}) =>
      this.request<BizResponseListShopClearanceAddressRespDTO, any>({
        path: `/customer/shop/getClearanceAddressList`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopGetShippingAddress
     * @summary 获取单个店铺收货地址
     * @request GET:/customer/shop/getShippingAddress
     */
    shopGetShippingAddress: (
      query?: {
        /**
         * shopShippingAddressId
         * @format int64
         */
        shopShippingAddressId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseShopShippingAddressRespDTO, any>({
        path: `/customer/shop/getShippingAddress`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopGetShippingAddressList
     * @summary 获取店铺收货地址列表
     * @request GET:/customer/shop/getShippingAddressList
     */
    shopGetShippingAddressList: (params: RequestParams = {}) =>
      this.request<BizResponseListShopShippingAddressRespDTO, any>({
        path: `/customer/shop/getShippingAddressList`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopGetShopPurchase
     * @summary 获取店铺采购配置信息
     * @request GET:/customer/shop/getShopPurchase
     */
    shopGetShopPurchase: (params: RequestParams = {}) =>
      this.request<BizResponseShopPurchaseRespDTO, any>({
        path: `/customer/shop/getShopPurchase`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopHasCustomerShop
     * @summary 检查用户是否包含子账户
     * @request GET:/customer/shop/hasCustomerShop
     */
    shopHasCustomerShop: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/customer/shop/hasCustomerShop`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopList
     * @summary 店铺列表
     * @request POST:/customer/shop/list
     */
    shopList: (dto: GetCustomerShopListReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListCustomerShopRespDTO, any>({
        path: `/customer/shop/list`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopPage
     * @summary 店铺分页
     * @request POST:/customer/shop/page
     */
    shopPage: (dto: GetCustomerShopListReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerShopRespDTO, any>({
        path: `/customer/shop/page`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopQuery
     * @summary wms查询店铺分页数据
     * @request GET:/customer/shop/query
     */
    shopQuery: (
      query?: {
        customerShopName?: string;
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        startIndex?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageCustomerShopWmsRespDTO, any>({
        path: `/customer/shop/query`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopSetDefaultClearanceAddress
     * @summary 清关地址设为-默认
     * @request POST:/customer/shop/setDefaultClearanceAddress
     */
    shopSetDefaultClearanceAddress: (reqDTO: UpdateClearanceDefaultAddressReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/customer/shop/setDefaultClearanceAddress`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopSetDefaultShippingAddress
     * @summary 收货地址设为默认
     * @request POST:/customer/shop/setDefaultShippingAddress
     */
    shopSetDefaultShippingAddress: (reqDTO: UpdateShippingDefaultAddressReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/customer/shop/setDefaultShippingAddress`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopUpdate
     * @summary 编辑店铺
     * @request POST:/customer/shop/update
     */
    shopUpdate: (dto: UpdateCustomerShopDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/customer/shop/update`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopUpdateClearanceAddress
     * @summary 更新清关地址
     * @request POST:/customer/shop/updateClearanceAddress
     */
    shopUpdateClearanceAddress: (reqDTO: UpdateClearanceAddressReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseLong, any>({
        path: `/customer/shop/updateClearanceAddress`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopUpdateShippingAddress
     * @summary 更新收货地址
     * @request POST:/customer/shop/updateShippingAddress
     */
    shopUpdateShippingAddress: (reqDTO: UpdateShippingAddressReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseLong, any>({
        path: `/customer/shop/updateShippingAddress`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopUpdateShopDelivery
     * @summary 更新店发货配置信息
     * @request POST:/customer/shop/updateShopDelivery
     */
    shopUpdateShopDelivery: (reqDTO: UpdateShopDeliveryReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/customer/shop/updateShopDelivery`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户店铺
     * @name ShopUpdateShopPurchase
     * @summary 更新店铺采购配置信息
     * @request POST:/customer/shop/updateShopPurchase
     */
    shopUpdateShopPurchase: (reqDTO: UpdateShopPurchaseReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/customer/shop/updateShopPurchase`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 工具类
     * @name ToolImportRelation
     * @summary 导入excel，建立关系
     * @request POST:/customer/tool/import_relation
     */
    toolImportRelation: (
      data: {
        /**
         * excelFile
         * @format binary
         */
        excelFile: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseVoid, any>({
        path: `/customer/tool/import_relation`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),
  };
  customerTag = {
    /**
     * No description
     *
     * @tags customer-tag-feign-api-impl
     * @name Search
     * @summary 根据客户ids和标签查询标签信息
     * @request POST:/customerTag/search
     */
    search: (req: CustomerTagSearchReq, params: RequestParams = {}) =>
      this.request<BizResponseListCustomerTagDTO, any>({
        path: `/customerTag/search`,
        method: "POST",
        body: req,
        type: ContentType.Json,
        ...params,
      }),
  };
  data = {
    /**
     * No description
     *
     * @tags 数据字典
     * @name DictList
     * @summary 根据父级字典key获取下级字典信息集合
     * @request GET:/data/dict/list
     */
    dictList: (
      query: {
        /** parentKey */
        parentKey: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListDataDictRespDTO, any>({
        path: `/data/dict/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 数据字典
     * @name DictOne
     * @summary 根据字典key获取字典信息
     * @request GET:/data/dict/one
     */
    dictOne: (
      query: {
        /** 字典key */
        key: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseDataDictRespDTO, any>({
        path: `/data/dict/one`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 数据字典
     * @name DictSelectListByType
     * @summary 根据类型获取下级字典信息集合
     * @request GET:/data/dict/selectListByType
     */
    dictSelectListByType: (
      query: {
        /**
         * type
         * @format int32
         */
        type: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListDataDictRespDTO, any>({
        path: `/data/dict/selectListByType`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  declaration = {
    /**
     * No description
     *
     * @tags 申报白名单接口
     * @name WhitelistAdd
     * @summary 增加白名單
     * @request POST:/declaration/whitelist/add
     */
    whitelistAdd: (mainCustomerIds: number[], params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/declaration/whitelist/add`,
        method: "POST",
        body: mainCustomerIds,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 申报白名单接口
     * @name WhitelistCheck
     * @summary 校验是否在白名单中
     * @request POST:/declaration/whitelist/check/{mainCustomerId}
     */
    whitelistCheck: (mainCustomerId: number, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/declaration/whitelist/check/${mainCustomerId}`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 申报白名单接口
     * @name WhitelistGetPage
     * @summary 分页查询
     * @request POST:/declaration/whitelist/getPage
     */
    whitelistGetPage: (pageDTO: DeclarationWhitelistPageDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageDeclarationWhitelistRespDTO, any>({
        path: `/declaration/whitelist/getPage`,
        method: "POST",
        body: pageDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 申报白名单接口
     * @name WhitelistRemoveById
     * @summary 删除白名單
     * @request POST:/declaration/whitelist/removeById/{id}
     */
    whitelistRemoveById: (id: number, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/declaration/whitelist/removeById/${id}`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),
  };
  defectiveProductRiskFlag = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name DefectiveProductRiskFlag
     * @summary 是否已读不良品风险弹窗
     * @request GET:/defectiveProductRiskFlag
     */
    defectiveProductRiskFlag: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/defectiveProductRiskFlag`,
        method: "GET",
        ...params,
      }),
  };
  deleteAccount = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name DeleteAccount
     * @summary 删除账号，危险操作
     * @request DELETE:/deleteAccount
     */
    deleteAccount: (
      query: {
        /**
         * superCustomerId
         * @format int64
         */
        superCustomerId: number;
        /** token */
        token: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/deleteAccount`,
        method: "DELETE",
        query: query,
        ...params,
      }),
  };
  depts = {
    /**
     * No description
     *
     * @tags 组织架构目录接口
     * @name PostDepts
     * @summary 新增组织接口
     * @request POST:/depts/add
     */
    postDepts: (reqDTO: AddDepartmentReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/depts/add`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 组织架构目录接口
     * @name DeleteByIds
     * @summary 批量删除组织机构公司部门（子公司，子部门）接口
     * @request DELETE:/depts/deleteByIds
     */
    deleteByIds: (ids: string[], params: RequestParams = {}) =>
      this.request<BizResponseMapStringListDepartmentDetailRespDTO, any>({
        path: `/depts/deleteByIds`,
        method: "DELETE",
        body: ids,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 组织架构目录接口
     * @name GetDepartmentUser
     * @summary 根据组织目录id和条件查询目录下面的部门列表分页展示
     * @request POST:/depts/getDepartmentUser
     */
    getDepartmentUser: (reqDTO: GetDepartmentUserReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageDepartmentDetailRespDTO, any>({
        path: `/depts/getDepartmentUser`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 组织架构目录接口
     * @name GetTree
     * @summary 查询展示组织机构左侧目录
     * @request POST:/depts/getTree
     */
    getTree: (treeReqDTO: GetDepartmentTreeReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListDepartmentTreeRespDTO, any>({
        path: `/depts/getTree`,
        method: "POST",
        body: treeReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 组织架构目录接口
     * @name GetTreeByDeptId
     * @summary 查询根据组织机构目录id展示其下面的目录
     * @request POST:/depts/getTreeByDeptId
     */
    getTreeByDeptId: (treeDeptIdVO: GetDepartmentTreeByIdReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListDepartmentTreeRespDTO, any>({
        path: `/depts/getTreeByDeptId`,
        method: "POST",
        body: treeDeptIdVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 组织架构目录接口
     * @name GetTreeByName
     * @summary 用户角色添加用户条件查询
     * @request POST:/depts/getTreeByName
     */
    getTreeByName: (treeReqDTO: GetDepartmentTreeByNameReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListDepartmentTreeRespDTO, any>({
        path: `/depts/getTreeByName`,
        method: "POST",
        body: treeReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 组织架构目录接口
     * @name Update
     * @summary 修改公司部门（子部门，子公司）详细
     * @request PUT:/depts/update
     */
    update: (reqDTO: UpdateDepartmentReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/depts/update`,
        method: "PUT",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 组织架构目录接口
     * @name Depts
     * @summary 查询组织机构详情
     * @request GET:/depts/{depId}
     */
    depts: (depId: string, params: RequestParams = {}) =>
      this.request<BizResponseDepartmentDetailRespDTO, any>({
        path: `/depts/${depId}`,
        method: "GET",
        ...params,
      }),
  };
  dingding = {
    /**
     * @description 根据选择字段导出钉钉通讯录(该接口官方不支持)
     *
     * @tags 钉钉接口
     * @name ExportExcel
     * @summary 根据选择字段导出钉钉通讯录(该接口官方不支持)
     * @request GET:/dingding/exportExcel
     */
    exportExcel: (
      query: {
        /** columns */
        columns?: string;
        /** companyId */
        companyId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/dingding/exportExcel`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 根据部门ID获取指定部门详情
     *
     * @tags 钉钉接口
     * @name GetDepartmentById
     * @summary 根据部门ID获取指定部门详情
     * @request GET:/dingding/getDepartmentById
     */
    getDepartmentById: (
      query: {
        /**
         * deptId
         * @format int64
         */
        deptId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseJSONObject, any>({
        path: `/dingding/getDepartmentById`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 获取某个部门下的所有子部门
     *
     * @tags 钉钉接口
     * @name GetDepartments
     * @summary 获取某个部门下的所有子部门
     * @request GET:/dingding/getDepartments
     */
    getDepartments: (params: RequestParams = {}) =>
      this.request<BizResponseJSONArray, any>({
        path: `/dingding/getDepartments`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 获取全部的子部门和用户数据
     *
     * @tags 钉钉接口
     * @name GetDepartmentsAndUsers
     * @summary 获取全部的子部门和用户数据
     * @request GET:/dingding/getDepartmentsAndUsers
     */
    getDepartmentsAndUsers: (
      query: {
        /** companyId */
        companyId: string;
        /** userId */
        userId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseJSONArray, any>({
        path: `/dingding/getDepartmentsAndUsers`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 获取指定部门中的用户详细信息(本接口只支持获取指定部门下的员工详情信息，子部门员工信息获取不到)
     *
     * @tags 钉钉接口
     * @name GetUserListByDepartmentId
     * @summary 获取指定部门中的用户详细信息
     * @request GET:/dingding/getUserListByDepartmentId
     */
    getUserListByDepartmentId: (
      query: {
        /** companyId */
        companyId: string;
        /**
         * deptId
         * @format int64
         */
        deptId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseJSONObject, any>({
        path: `/dingding/getUserListByDepartmentId`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 获取某个部门下的全部用户信息
     *
     * @tags 钉钉接口
     * @name GetUsersByDepartmentId
     * @summary 获取某个部门下的全部用户信息
     * @request GET:/dingding/getUsersByDepartmentId
     */
    getUsersByDepartmentId: (
      query: {
        /** companyId */
        companyId: string;
        /**
         * deptId
         * @format int64
         */
        deptId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseJSONObject, any>({
        path: `/dingding/getUsersByDepartmentId`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 钉钉接口
     * @name QueryList
     * @summary 获取全部公司钉钉信息表
     * @request GET:/dingding/queryList
     */
    queryList: (params: RequestParams = {}) =>
      this.request<BizResponseListDingCompany, any>({
        path: `/dingding/queryList`,
        method: "GET",
        ...params,
      }),
  };
  distribute = {
    /**
     * No description
     *
     * @tags 客户分配
     * @name AddUser
     * @summary 新增白名单
     * @request POST:/distribute/addUser
     */
    addUser: (reqDTO: AddUserReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/distribute/addUser`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户分配
     * @name BatchModify
     * @summary 批量修改
     * @request POST:/distribute/batchModify
     */
    batchModify: (reqDTO: BatchModifyPurchaseReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/distribute/batchModify`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户分配
     * @name BatchRemoveUser
     * @summary 单个/批量移除白名单
     * @request POST:/distribute/batchRemoveUser
     */
    batchRemoveUser: (reqDTO: BatchRemoveUserReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/distribute/batchRemoveUser`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户分配
     * @name List
     * @summary 获取用户列表
     * @request POST:/distribute/list
     */
    list: (reqDTO: QueryCustomerDistributeReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageQueryCustomerDistributeRespDTO, any>({
        path: `/distribute/list`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户分配
     * @name QueryChangeUrlUsers
     * @summary 获取白名单用户列表
     * @request POST:/distribute/queryChangeUrlUsers
     */
    queryChangeUrlUsers: (reqDTO: ChangeUrlWhiteUserReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageChangeUrlWhiteUserRespDTO, any>({
        path: `/distribute/queryChangeUrlUsers`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 客户分配
     * @name QueryOperateLog
     * @summary 查询用户操作日志
     * @request GET:/distribute/queryOperateLog
     */
    queryOperateLog: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListQueryOperateLogRespDTO, any>({
        path: `/distribute/queryOperateLog`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  editLoginName = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户密码和邮箱修改
     * @name EditLoginName
     * @summary 修改登录名
     * @request POST:/editLoginName
     */
    editLoginName: (
      query: {
        /** loginName */
        loginName: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/editLoginName`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),
  };
  emailLogin = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name EmailLogin
     * @summary 邮箱验证登录
     * @request POST:/emailLogin
     */
    emailLogin: (queryDTO: EmailLoginReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseCustomerLoginRespDTO, any>({
        path: `/emailLogin`,
        method: "POST",
        body: queryDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name SendCode
     * @summary 邮箱登录发送验证码
     * @request POST:/emailLogin/send/code
     */
    sendCode: (checkEmailReqDTO: CheckEmailReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/emailLogin/send/code`,
        method: "POST",
        body: checkEmailReqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  forgetPasswordResetPassword = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户密码和邮箱修改
     * @name ForgetPasswordResetPassword
     * @summary 忘记密码重置密码
     * @request POST:/forgetPasswordResetPassword
     */
    forgetPasswordResetPassword: (resetPasswordReqDTO: ResetPasswordReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/forgetPasswordResetPassword`,
        method: "POST",
        body: resetPasswordReqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  forgetPasswordSendEmail = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户密码和邮箱修改
     * @name ForgetPasswordSendEmail
     * @summary 忘记密码发送邮件
     * @request GET:/forgetPasswordSendEmail
     */
    forgetPasswordSendEmail: (
      query: {
        /**
         * buType
         * @format int32
         */
        buType?: number;
        /** customerEmail */
        customerEmail: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/forgetPasswordSendEmail`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  frog = {
    /**
     * No description
     *
     * @tags 青蛙文章接口
     * @name ArticleArchive
     * @summary 获取归档列表
     * @request POST:/frog/article/archive
     */
    articleArchive: (request: GetFrogArticleArchivePageDTO, params: RequestParams = {}) =>
      this.request<BizResponseListFrogArticleArchiveSortRespDTO, any>({
        path: `/frog/article/archive`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 青蛙文章接口
     * @name ArticleArchivePage
     * @summary 查询归档文章分页
     * @request POST:/frog/article/archive/page
     */
    articleArchivePage: (request: GetFrogArticleArchivePageDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageFrogArticleRespDTO, any>({
        path: `/frog/article/archive/page`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 青蛙文章接口
     * @name ArticleCount
     * @summary 累加阅读量
     * @request GET:/frog/article/count
     */
    articleCount: (
      query: {
        /**
         * frogArticleId
         * @format int64
         */
        frogArticleId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseLong, any>({
        path: `/frog/article/count`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 青蛙文章接口
     * @name ArticleCreate
     * @summary 创建青蛙文章
     * @request POST:/frog/article/create
     */
    articleCreate: (article: AddFrogArticleReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/frog/article/create`,
        method: "POST",
        body: article,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 青蛙文章接口
     * @name ArticleDelete
     * @summary 删除文章
     * @request DELETE:/frog/article/delete
     */
    articleDelete: (
      query: {
        /**
         * frogArticleId
         * @format int64
         */
        frogArticleId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseObject, any>({
        path: `/frog/article/delete`,
        method: "DELETE",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 青蛙文章接口
     * @name ArticleDetail
     * @summary 文章详情
     * @request GET:/frog/article/detail
     */
    articleDetail: (
      query: {
        /**
         * frogArticleId
         * @format int64
         */
        frogArticleId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseFrogArticleDetailRespDTO, any>({
        path: `/frog/article/detail`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 青蛙文章接口
     * @name ArticleFootPage
     * @summary 查询青蛙文章浏览记录分页（前台）
     * @request POST:/frog/article/foot/page
     */
    articleFootPage: (request: GetFrogArticlePageDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageFrogArticleRespDTO, any>({
        path: `/frog/article/foot/page`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 青蛙文章接口
     * @name ArticleGetPrepAndNext
     * @summary 查询当前文章上一篇/下一篇文章
     * @request POST:/frog/article/get/prepAndNext
     */
    articleGetPrepAndNext: (request: GetFrogArticlePrepAndNextReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseFrogArticlePrepAndNextRespDTO, any>({
        path: `/frog/article/get/prepAndNext`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 青蛙文章接口
     * @name ArticleHotPage
     * @summary 查询热门文章分页
     * @request POST:/frog/article/hot/page
     */
    articleHotPage: (dto: GetFrogArticleArchivePageDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageHotFrogArticleRespDTO, any>({
        path: `/frog/article/hot/page`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 青蛙文章接口
     * @name ArticleManagePage
     * @summary 查询青蛙文章分页（后台）
     * @request POST:/frog/article/manage/page
     */
    articleManagePage: (request: GetManageFrogArticlePageDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageManageFrogArticleRespDTO, any>({
        path: `/frog/article/manage/page`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 青蛙文章接口
     * @name ArticlePage
     * @summary 查询青蛙文章分页（前台）
     * @request POST:/frog/article/page
     */
    articlePage: (request: GetFrogArticlePageDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageFrogArticleRespDTO, any>({
        path: `/frog/article/page`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 青蛙文章接口
     * @name ArticlePageAll
     * @summary 查询除平台频道外所有青蛙文章分页（前台）
     * @request POST:/frog/article/page/all
     */
    articlePageAll: (request: GetAllFrogArticlePageDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageFrogArticleRespDTO, any>({
        path: `/frog/article/page/all`,
        method: "POST",
        body: request,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 青蛙文章接口
     * @name ArticlePinTop
     * @summary 置顶文章
     * @request GET:/frog/article/pinTop
     */
    articlePinTop: (
      query: {
        /**
         * frogArticleId
         * @format int64
         */
        frogArticleId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseObject, any>({
        path: `/frog/article/pinTop`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 青蛙文章接口
     * @name ArticleSignHot
     * @summary 标记热门文章
     * @request POST:/frog/article/sign/hot
     */
    articleSignHot: (
      query?: {
        frogArticleMonth?: string;
        frogArticleYear?: string;
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        startIndex?: number;
        stationCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListHotFrogArticleSortDTO, any>({
        path: `/frog/article/sign/hot`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 青蛙文章接口
     * @name ArticleToggleStatus
     * @summary 开启/关闭文章可见状态
     * @request PUT:/frog/article/toggle/status
     */
    articleToggleStatus: (dto: UpdateFrogArticleStatusReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/frog/article/toggle/status`,
        method: "PUT",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 青蛙文章接口
     * @name ArticleTypeDelete
     * @summary 删除青蛙文章分类
     * @request GET:/frog/article/type/delete
     */
    articleTypeDelete: (
      query: {
        /**
         * id
         * @format int64
         */
        id: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseObject, any>({
        path: `/frog/article/type/delete`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 青蛙文章接口
     * @name ArticleTypeList
     * @summary 青蛙文章分类列表
     * @request GET:/frog/article/type/list
     */
    articleTypeList: (
      query: {
        /** stationCode */
        stationCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListFrogArticleType, any>({
        path: `/frog/article/type/list`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 青蛙文章接口
     * @name ArticleTypeSave
     * @summary 保存青蛙文章分类
     * @request POST:/frog/article/type/save
     */
    articleTypeSave: (typeList: FrogArticleType[], params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/frog/article/type/save`,
        method: "POST",
        body: typeList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 青蛙文章接口
     * @name ArticleUnPinTop
     * @summary 取消置顶文章
     * @request GET:/frog/article/unPinTop
     */
    articleUnPinTop: (
      query: {
        /**
         * frogArticleId
         * @format int64
         */
        frogArticleId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseObject, any>({
        path: `/frog/article/unPinTop`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 青蛙文章接口
     * @name ArticleUpdate
     * @summary 修改青蛙文章
     * @request POST:/frog/article/update
     */
    articleUpdate: (article: UpdateFrogArticleReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/frog/article/update`,
        method: "POST",
        body: article,
        type: ContentType.Json,
        ...params,
      }),
  };
  generateCode = {
    /**
     * No description
     *
     * @tags customer-invitation-feign-api-impl
     * @name GenerateCode
     * @summary 生成推广码
     * @request GET:/generateCode
     */
    generateCode: (
      query: {
        /** superCustomerId */
        superCustomerId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseString, any>({
        path: `/generateCode`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getAdminRoles = {
    /**
     * No description
     *
     * @tags manage-feign-api-impl
     * @name GetAdminRoles
     * @summary getAdminRoles
     * @request POST:/getAdminRoles
     */
    getAdminRoles: (params: RequestParams = {}) =>
      this.request<BizResponseListManageRoleRespDTO, any>({
        path: `/getAdminRoles`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),
  };
  getAgentCustomerIdByDirectId = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name GetAgentCustomerIdByDirectId
     * @summary getAgentCustomerIdByDirectId
     * @request GET:/getAgentCustomerIdByDirectId
     */
    getAgentCustomerIdByDirectId: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseLong, any>({
        path: `/getAgentCustomerIdByDirectId`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getAllArea = {
    /**
     * No description
     *
     * @tags area-feign-api-impl
     * @name GetAllArea
     * @summary 获取所有地址列表，会存储到redis
     * @request GET:/getAllArea
     */
    getAllArea: (params: RequestParams = {}) =>
      this.request<BizResponseListIntAreaDTO, any>({
        path: `/getAllArea`,
        method: "GET",
        ...params,
      }),
  };
  getAllDepartment = {
    /**
     * No description
     *
     * @tags manage-feign-api-impl
     * @name GetAllDepartment
     * @summary getAllDepartment
     * @request GET:/getAllDepartment
     */
    getAllDepartment: (
      query: {
        /** token */
        token: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListDepartmentDetailRespDTO, any>({
        path: `/getAllDepartment`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getAllMainCustomer = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name GetAllMainCustomer
     * @summary getAllMainCustomer
     * @request POST:/getAllMainCustomer
     */
    getAllMainCustomer: (reqDTO: QueryCustomerByManagerDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerDetailManagerRespDTO, any>({
        path: `/getAllMainCustomer`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  getAreaById = {
    /**
     * No description
     *
     * @tags area-feign-api-impl
     * @name GetAreaById
     * @summary 查询地区信息feign
     * @request GET:/getAreaById
     */
    getAreaById: (
      query: {
        /**
         * intAreaId
         * @format int64
         */
        intAreaId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseIntAreaDTO, any>({
        path: `/getAreaById`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getAreaByIdOnly = {
    /**
     * No description
     *
     * @tags area-feign-api-impl
     * @name GetAreaByIdOnly
     * @summary 查询地区信息通过id,没有下级feign
     * @request GET:/getAreaByIdOnly
     */
    getAreaByIdOnly: (
      query: {
        /**
         * intAreaId
         * @format int64
         */
        intAreaId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseIntAreaDTO, any>({
        path: `/getAreaByIdOnly`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getAreaByIds = {
    /**
     * No description
     *
     * @tags area-feign-api-impl
     * @name GetAreaByIds
     * @summary 查询地区信息feign
     * @request POST:/getAreaByIds
     */
    getAreaByIds: (queryDTO: IntAreaQueryDTO, params: RequestParams = {}) =>
      this.request<BizResponseListIntAreaDTO, any>({
        path: `/getAreaByIds`,
        method: "POST",
        body: queryDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  getAreaByLevelOnly = {
    /**
     * No description
     *
     * @tags area-feign-api-impl
     * @name GetAreaByLevelOnly
     * @summary 查询地区信息通过地区等级,没有下级feign
     * @request GET:/getAreaByLevelOnly
     */
    getAreaByLevelOnly: (
      query?: {
        /**
         * 查询级别： 1洲 2国 3省
         * @format int64
         */
        level?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListIntAreaDTO, any>({
        path: `/getAreaByLevelOnly`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getByNationCodes = {
    /**
     * No description
     *
     * @tags customer-station-feign-api-impl
     * @name GetByNationCodes
     * @summary 根据国家code查询
     * @request GET:/getByNationCodes
     */
    getByNationCodes: (
      query: {
        /** nationCodes */
        nationCodes: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCustomerStationDTO, any>({
        path: `/getByNationCodes`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getByStationCode = {
    /**
     * No description
     *
     * @tags customer-station-feign-api-impl
     * @name GetByStationCode
     * @summary 根据站点查询
     * @request GET:/getByStationCode
     */
    getByStationCode: (
      query: {
        /** stationCode */
        stationCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCustomerStationDTO, any>({
        path: `/getByStationCode`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getCanTransformList = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name GetCanTransformList
     * @summary 获取可转账的账号列表
     * @request GET:/getCanTransformList
     */
    getCanTransformList: (params: RequestParams = {}) =>
      this.request<BizResponseListCustomerCanTransformRespDTO, any>({
        path: `/getCanTransformList`,
        method: "GET",
        ...params,
      }),
  };
  getCanTransformListBySuperId = {
    /**
     * No description
     *
     * @tags customer-invitation-feign-api-impl
     * @name GetCanTransformListBySuperId
     * @summary 获取可以提现的列表
     * @request GET:/getCanTransformListBySuperId
     */
    getCanTransformListBySuperId: (
      query: {
        /** superCustomerId */
        superCustomerId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCustomerCanTransformRespDTO, any>({
        path: `/getCanTransformListBySuperId`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getClientVersion = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name GetClientVersion
     * @summary 获取前端版本号
     * @request POST:/getClientVersion
     */
    getClientVersion: (
      query: {
        /**
         * project
         * @format int64
         */
        project: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseString, any>({
        path: `/getClientVersion`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),
  };
  getCountByKey = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户密码和邮箱修改
     * @name GetCountByKey
     * @summary 根据key获取数量
     * @request GET:/getCountByKey
     */
    getCountByKey: (
      query: {
        /** key */
        key: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseLong, any>({
        path: `/getCountByKey`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getCustomer2AgencyGoodsSign = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name GetCustomer2AgencyGoodsSign
     * @summary 获取直采用户跳转代采是否弹框标识
     * @request GET:/getCustomer2AgencyGoodsSign
     */
    getCustomer2AgencyGoodsSign: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/getCustomer2AgencyGoodsSign`,
        method: "GET",
        ...params,
      }),
  };
  getCustomer2AgencySign = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name GetCustomer2AgencySign
     * @summary 获取直采用户跳转代采是否弹框标识
     * @request GET:/getCustomer2AgencySign
     */
    getCustomer2AgencySign: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/getCustomer2AgencySign`,
        method: "GET",
        ...params,
      }),
  };
  getCustomerByDto = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name GetCustomerByDto
     * @summary getCustomerByDto
     * @request POST:/getCustomerByDto
     */
    getCustomerByDto: (reqDTO: QueryCustomerByManagerDTO, params: RequestParams = {}) =>
      this.request<BizResponseListCustomerDetailRespDTO, any>({
        path: `/getCustomerByDto`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  getCustomerByGoogleUrl = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name GetCustomerByGoogleUrl
     * @summary 通过谷歌表获取用户信息
     * @request GET:/getCustomerByGoogleUrl
     */
    getCustomerByGoogleUrl: (
      query: {
        /** url */
        url: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCustomer, any>({
        path: `/getCustomerByGoogleUrl`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getCustomerByMainCustomerId = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name GetCustomerByMainCustomerId
     * @summary getCustomerByMainCustomerId
     * @request POST:/getCustomerByMainCustomerId
     */
    getCustomerByMainCustomerId: (reqDTO: GetCustomerByMainCustomerReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListCustomerDetailRespDTO, any>({
        path: `/getCustomerByMainCustomerId`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  getCustomerByManageId = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name GetCustomerByManageId
     * @summary getCustomerBySuperAndManageId
     * @request POST:/getCustomerByManageId
     */
    getCustomerByManageId: (
      queryCustomerDetailManagerReqDTO: QueryCustomerDetailManagerReqDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCustomerDetailRespDTO, any>({
        path: `/getCustomerByManageId`,
        method: "POST",
        body: queryCustomerDetailManagerReqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  getCustomerByShopId = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name GetCustomerByShopId
     * @summary getCustomerByShopId
     * @request GET:/getCustomerByShopId
     */
    getCustomerByShopId: (
      query: {
        /**
         * shopId
         * @format int64
         */
        shopId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerDetailRespDTO, any>({
        path: `/getCustomerByShopId`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getCustomerByShopIds = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name GetCustomerByShopIds
     * @summary getCustomerByShopIds
     * @request POST:/getCustomerByShopIds
     */
    getCustomerByShopIds: (
      query: {
        /** shopIds */
        shopIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCustomerDetailRespDTO, any>({
        path: `/getCustomerByShopIds`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),
  };
  getCustomerBySuperId = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name GetCustomerBySuperId
     * @summary getCustomerBySuperId
     * @request GET:/getCustomerBySuperId
     */
    getCustomerBySuperId: (
      query: {
        /**
         * superCustomerId
         * @format int64
         */
        superCustomerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCustomerDetailRespDTO, any>({
        path: `/getCustomerBySuperId`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getCustomerBySuperIds = {
    /**
     * No description
     *
     * @tags customer-invitation-feign-api-impl
     * @name GetCustomerBySuperIds
     * @summary 获取用户信息
     * @request GET:/getCustomerBySuperIds
     */
    getCustomerBySuperIds: (
      query: {
        /** superCustomerIds */
        superCustomerIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCustomerDetailRespDTO, any>({
        path: `/getCustomerBySuperIds`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getCustomerDetail = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name GetCustomerDetail
     * @summary getCustomerDetail
     * @request GET:/getCustomerDetail
     */
    getCustomerDetail: (
      query: {
        /** token */
        token: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerDetailRespDTO, any>({
        path: `/getCustomerDetail`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getCustomerDetailByFullName = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name GetCustomerDetailByFullName
     * @summary getCustomerDetailByFullName
     * @request GET:/getCustomerDetailByFullName
     */
    getCustomerDetailByFullName: (
      query?: {
        /** unificationCustomerFullName */
        unificationCustomerFullName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCustomerDetailRespDTO, any>({
        path: `/getCustomerDetailByFullName`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getCustomerDetailById = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name GetCustomerDetailById
     * @summary getCustomerDetailById
     * @request GET:/getCustomerDetailById
     */
    getCustomerDetailById: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerDetailRespDTO, any>({
        path: `/getCustomerDetailById`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getCustomerDetailByIdList = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name GetCustomerDetailByIdList
     * @summary getCustomerDetailByIdList
     * @request POST:/getCustomerDetailByIdList
     */
    getCustomerDetailByIdList: (customerId: number[], params: RequestParams = {}) =>
      this.request<BizResponseListCustomerDetailRespDTO, any>({
        path: `/getCustomerDetailByIdList`,
        method: "POST",
        body: customerId,
        type: ContentType.Json,
        ...params,
      }),
  };
  getCustomerDetailByManager = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name GetCustomerDetailByManager
     * @summary getCustomerDetailByManager
     * @request POST:/getCustomerDetailByManager
     */
    getCustomerDetailByManager: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
        /** userId */
        userId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerDetailManagerRespDTO, any>({
        path: `/getCustomerDetailByManager`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),
  };
  getCustomerDetailByMarketing = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name GetCustomerDetailByMarketing
     * @summary 根据用户信息查用户-营销策略
     * @request GET:/getCustomerDetailByMarketing
     */
    getCustomerDetailByMarketing: (
      query?: {
        /** message */
        message?: string;
        /** stationCode */
        stationCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCustomerDetailRespDTO, any>({
        path: `/getCustomerDetailByMarketing`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getCustomerDetails = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name GetCustomerDetails
     * @summary 获取用户列表详情
     * @request GET:/getCustomerDetails
     */
    getCustomerDetails: (params: RequestParams = {}) =>
      this.request<BizResponseCustomerDetailRespDTO, any>({
        path: `/getCustomerDetails`,
        method: "GET",
        ...params,
      }),
  };
  getCustomerIdsByManagerId = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name GetCustomerIdsByManagerId
     * @summary getCustomerIdsByManagerId
     * @request GET:/getCustomerIdsByManagerId
     */
    getCustomerIdsByManagerId: (
      query: {
        /** managerId */
        managerId: string;
        /** roleEnum */
        roleEnum?:
          | "ADMIN"
          | "CUSTOMER_DIRECTOR"
          | "CUSTOMER_MANAGER"
          | "PURCHASER"
          | "MERCHANDISER"
          | "PURCHASER_MANAGER"
          | "MERCHANDISER_MANAGER"
          | "OEM_PURCHASER_MANAGER"
          | "BLACK_SUPPLIER_AUDITOR"
          | "OEM_PURCHASER"
          | "FINANCE_DIRECTOR"
          | "FINANCE_CASHIER"
          | "FINANCE_ACCOUNTANT"
          | "FINANCE_JP_ACCOUNTANT"
          | "ONLINE_CS";
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseHashSetLong, any>({
        path: `/getCustomerIdsByManagerId`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getCustomerIsNewMembership = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name GetCustomerIsNewMembership
     * @summary 获取用户是否主动开启过新会员
     * @request GET:/getCustomerIsNewMembership
     */
    getCustomerIsNewMembership: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/getCustomerIsNewMembership`,
        method: "GET",
        ...params,
      }),
  };
  getCustomerList = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name GetCustomerList
     * @summary 获取用户列表
     * @request POST:/getCustomerList
     */
    getCustomerList: (reqDTO: GetCustomerListReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerItemRespDTO, any>({
        path: `/getCustomerList`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name PostGetCustomerList
     * @summary 获取用户列表
     * @request POST:/getCustomerList/new
     */
    postGetCustomerList: (reqDTO: GetCustomerListReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerItemRespDTO, any>({
        path: `/getCustomerList/new`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  getCustomerListAuth = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name GetCustomerListAuth
     * @summary 获取用户列表带权限限制
     * @request POST:/getCustomerListAuth
     */
    getCustomerListAuth: (reqDTO: GetCustomerListReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerItemRespDTO, any>({
        path: `/getCustomerListAuth`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  getCustomerListByCustomerIds = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name GetCustomerListByCustomerIds
     * @summary getCustomerList
     * @request POST:/getCustomerListByCustomerIds
     */
    getCustomerListByCustomerIds: (reqDTO: GetCustomerListReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerItemRespDTO, any>({
        path: `/getCustomerListByCustomerIds`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  getCustomerMembership = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name GetCustomerMembership
     * @summary 获取登陆用户会员信息
     * @request GET:/getCustomerMembership
     */
    getCustomerMembership: (params: RequestParams = {}) =>
      this.request<BizResponseCustomerMembership, any>({
        path: `/getCustomerMembership`,
        method: "GET",
        ...params,
      }),
  };
  getCustomerMembershipById = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name GetCustomerMembershipById
     * @summary getCustomerMembershipById
     * @request GET:/getCustomerMembershipById
     */
    getCustomerMembershipById: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerMembership, any>({
        path: `/getCustomerMembershipById`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getCustomerOverview = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name GetCustomerOverview
     * @summary 获取账户概览-废弃
     * @request POST:/getCustomerOverview
     */
    getCustomerOverview: (reqDTO: GetCustomerShopDTO, params: RequestParams = {}) =>
      this.request<BizResponseCustomerOverviewRespDTO, any>({
        path: `/getCustomerOverview`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  getCustomerOverviewOtherShop = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name GetCustomerOverviewOtherShop
     * @summary 获取账户概览-全部店铺信息
     * @request POST:/getCustomerOverviewOtherShop
     */
    getCustomerOverviewOtherShop: (reqDTO: GetCustomerShopDTO, params: RequestParams = {}) =>
      this.request<BizResponseCustomerOverviewRespDTO, any>({
        path: `/getCustomerOverviewOtherShop`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  getCustomerOverviewOwnerShop = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name GetCustomerOverviewOwnerShop
     * @summary 获取账户概览-当前店铺
     * @request POST:/getCustomerOverviewOwnerShop
     */
    getCustomerOverviewOwnerShop: (reqDTO: GetCustomerShopDTO, params: RequestParams = {}) =>
      this.request<BizResponseCustomerOverviewRespDTO, any>({
        path: `/getCustomerOverviewOwnerShop`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  getCustomerShopBySuperId = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name GetCustomerShopBySuperId
     * @summary getCustomerShopBySuperId
     * @request GET:/getCustomerShopBySuperId
     */
    getCustomerShopBySuperId: (
      query: {
        /** superCustomerIds */
        superCustomerIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListCustomerShopBySuperRespDTO, any>({
        path: `/getCustomerShopBySuperId`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getCustomerSimple = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name GetCustomerSimple
     * @summary getCustomerSimple
     * @request GET:/getCustomerSimple
     */
    getCustomerSimple: (params: RequestParams = {}) =>
      this.request<BizResponseCustomerRespDTO, any>({
        path: `/getCustomerSimple`,
        method: "GET",
        ...params,
      }),
  };
  getDefaultCustomerBySuperId = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name GetDefaultCustomerBySuperId
     * @summary getDefaultCustomerBySuperId
     * @request GET:/getDefaultCustomerBySuperId
     */
    getDefaultCustomerBySuperId: (
      query: {
        /**
         * superCustomerId
         * @format int64
         */
        superCustomerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerDetailRespDTO, any>({
        path: `/getDefaultCustomerBySuperId`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getDetailBySystem = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name GetDetailBySystem
     * @summary 后台获取用户详情,新建寻源单用
     * @request GET:/getDetailBySystem
     */
    getDetailBySystem: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerDetailRespDTO, any>({
        path: `/getDetailBySystem`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getMainCustomerDetail = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name GetMainCustomerDetail
     * @summary getMainCustomerDetail
     * @request GET:/getMainCustomerDetail
     */
    getMainCustomerDetail: (
      query: {
        /** token */
        token: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerDetailRespDTO, any>({
        path: `/getMainCustomerDetail`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getManageUserById = {
    /**
     * No description
     *
     * @tags manage-feign-api-impl
     * @name GetManageUserById
     * @summary getManageUserById
     * @request POST:/getManageUserById
     */
    getManageUserById: (userId: string, params: RequestParams = {}) =>
      this.request<BizResponseManageUserRespDTO, any>({
        path: `/getManageUserById`,
        method: "POST",
        body: userId,
        type: ContentType.Json,
        ...params,
      }),
  };
  getManageUserByToken = {
    /**
     * No description
     *
     * @tags manage-feign-api-impl
     * @name GetManageUserByToken
     * @summary getManageUserByToken
     * @request GET:/getManageUserByToken
     */
    getManageUserByToken: (
      query: {
        /** token */
        token: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseManageUserRespDTO, any>({
        path: `/getManageUserByToken`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getManageUserList = {
    /**
     * No description
     *
     * @tags manage-feign-api-impl
     * @name GetManageUserList
     * @summary getManageUserList
     * @request POST:/getManageUserList
     */
    getManageUserList: (userIds: string[], params: RequestParams = {}) =>
      this.request<BizResponseListManageUserRespDTO, any>({
        path: `/getManageUserList`,
        method: "POST",
        body: userIds,
        type: ContentType.Json,
        ...params,
      }),
  };
  getManageUserListByNickNameList = {
    /**
     * No description
     *
     * @tags manage-feign-api-impl
     * @name GetManageUserListByNickNameList
     * @summary getManageUserListByNickNameList
     * @request POST:/getManageUserListByNickNameList
     */
    getManageUserListByNickNameList: (nickNames: string[], params: RequestParams = {}) =>
      this.request<BizResponseListManageUserRespDTO, any>({
        path: `/getManageUserListByNickNameList`,
        method: "POST",
        body: nickNames,
        type: ContentType.Json,
        ...params,
      }),
  };
  getManageUserListByNickNames = {
    /**
     * No description
     *
     * @tags manage-feign-api-impl
     * @name GetManageUserListByNickNames
     * @summary getManageUserListByNickNames
     * @request GET:/getManageUserListByNickNames
     */
    getManageUserListByNickNames: (
      query: {
        /** roleId */
        roleId: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListManageUserRespDTO, any>({
        path: `/getManageUserListByNickNames`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getManageUserListByRoleId = {
    /**
     * No description
     *
     * @tags manage-feign-api-impl
     * @name GetManageUserListByRoleId
     * @summary getManageUserListByRoleId
     * @request GET:/getManageUserListByRoleId
     */
    getManageUserListByRoleId: (roleId: string, params: RequestParams = {}) =>
      this.request<BizResponseListManageUserRespDTO, any>({
        path: `/getManageUserListByRoleId`,
        method: "GET",
        body: roleId,
        type: ContentType.Json,
        ...params,
      }),
  };
  getManagerDetailByCustomerId = {
    /**
     * No description
     *
     * @tags manage-feign-api-impl
     * @name GetManagerDetailByCustomerId
     * @summary getManagerDetailByCustomerId
     * @request GET:/getManagerDetailByCustomerId
     */
    getManagerDetailByCustomerId: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseUserManagerDetailRespDTO, any>({
        path: `/getManagerDetailByCustomerId`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getNationByIdOnly = {
    /**
     * No description
     *
     * @tags area-feign-api-impl
     * @name GetNationByIdOnly
     * @summary 查询国家信息通过code,没有下级feign
     * @request GET:/getNationByIdOnly
     */
    getNationByIdOnly: (
      query: {
        /** code */
        code: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseIntAreaDTO, any>({
        path: `/getNationByIdOnly`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getPurchaserRole = {
    /**
     * No description
     *
     * @tags manage-feign-api-impl
     * @name GetPurchaserRole
     * @summary getPurchaserRole
     * @request GET:/getPurchaserRole
     */
    getPurchaserRole: (params: RequestParams = {}) =>
      this.request<BizResponseManageRoleRespDTO, any>({
        path: `/getPurchaserRole`,
        method: "GET",
        ...params,
      }),
  };
  getRoleByCode = {
    /**
     * No description
     *
     * @tags manage-feign-api-impl
     * @name GetRoleByCode
     * @summary getPurchaserRoleByCode
     * @request GET:/getRoleByCode
     */
    getRoleByCode: (
      query: {
        /** code */
        code: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseManageRoleRespDTO, any>({
        path: `/getRoleByCode`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getRoleList = {
    /**
     * No description
     *
     * @tags manage-feign-api-impl
     * @name GetRoleList
     * @summary getRoleList
     * @request POST:/getRoleList
     */
    getRoleList: (roleIds: string[], params: RequestParams = {}) =>
      this.request<BizResponseListManageRoleRespDTO, any>({
        path: `/getRoleList`,
        method: "POST",
        body: roleIds,
        type: ContentType.Json,
        ...params,
      }),
  };
  getRolesById = {
    /**
     * No description
     *
     * @tags manage-feign-api-impl
     * @name GetRolesById
     * @summary getRolesById
     * @request POST:/getRolesById
     */
    getRolesById: (userId: string, params: RequestParams = {}) =>
      this.request<BizResponseListManageRoleRespDTO, any>({
        path: `/getRolesById`,
        method: "POST",
        body: userId,
        type: ContentType.Json,
        ...params,
      }),
  };
  getRolesByMenuId = {
    /**
     * No description
     *
     * @tags manage-feign-api-impl
     * @name GetRolesByMenuId
     * @summary getRolesByMenuId
     * @request POST:/getRolesByMenuId
     */
    getRolesByMenuId: (menuId: string, params: RequestParams = {}) =>
      this.request<BizResponseListManageRoleRespDTO, any>({
        path: `/getRolesByMenuId`,
        method: "POST",
        body: menuId,
        type: ContentType.Json,
        ...params,
      }),
  };
  getShopOverview = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name GetShopOverview
     * @summary 获取店铺情报
     * @request POST:/getShopOverview
     */
    getShopOverview: (reqDTO: GetCustomerShopDTO, params: RequestParams = {}) =>
      this.request<BizResponseShopOverviewRespDTO, any>({
        path: `/getShopOverview`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  getSubCustomerDetailByManager = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name GetSubCustomerDetailByManager
     * @summary getSubCustomerDetailByManager
     * @request POST:/getSubCustomerDetailByManager
     */
    getSubCustomerDetailByManager: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerDetailManagerRespDTO, any>({
        path: `/getSubCustomerDetailByManager`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),
  };
  getSubCustomerList = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name GetSubCustomerList
     * @summary 获取子账号列表
     * @request GET:/getSubCustomerList
     */
    getSubCustomerList: (params: RequestParams = {}) =>
      this.request<BizResponseListCustomerDetailRespDTO, any>({
        path: `/getSubCustomerList`,
        method: "GET",
        ...params,
      }),
  };
  getSumAmountGroupBySuperCustomerId = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name GetSumAmountGroupBySuperCustomerId
     * @summary getSumAmountGroupBySuperCustomerId
     * @request GET:/getSumAmountGroupBySuperCustomerId
     */
    getSumAmountGroupBySuperCustomerId: (params: RequestParams = {}) =>
      this.request<BizResponseListMembershipOrderDTO, any>({
        path: `/getSumAmountGroupBySuperCustomerId`,
        method: "GET",
        ...params,
      }),
  };
  getSuperCustomerBySuperId = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name GetSuperCustomerBySuperId
     * @summary getSuperCustomerBySuperId
     * @request GET:/getSuperCustomerBySuperId
     */
    getSuperCustomerBySuperId: (
      query: {
        /**
         * superCustomerId
         * @format int64
         */
        superCustomerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerRespDTO, any>({
        path: `/getSuperCustomerBySuperId`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  getWhileList = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name GetWhileList
     * @summary 获取白名单
     * @request POST:/getWhileList
     */
    getWhileList: (params: RequestParams = {}) =>
      this.request<BizResponseListLong, any>({
        path: `/getWhileList`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),
  };
  hasSubscriptionOrder = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name HasSubscriptionOrder
     * @summary hasSubscriptionOrder
     * @request POST:/hasSubscriptionOrder
     */
    hasSubscriptionOrder: (
      query: {
        /** nextPaymentDate */
        nextPaymentDate: string;
        /** subscriptionId */
        subscriptionId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/hasSubscriptionOrder`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),
  };
  holiday = {
    /**
     * No description
     *
     * @tags holiday-date-feign-api-impl
     * @name QueryHolidayDate
     * @summary queryHolidayDate
     * @request POST:/holiday/queryHolidayDate
     */
    queryHolidayDate: (dateList: number[], params: RequestParams = {}) =>
      this.request<BizResponseListHolidayDateDTO, any>({
        path: `/holiday/queryHolidayDate`,
        method: "POST",
        body: dateList,
        type: ContentType.Json,
        ...params,
      }),
  };
  insertMembershipOrder = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name InsertMembershipOrder
     * @summary insertMembershipOrder
     * @request POST:/insertMembershipOrder
     */
    insertMembershipOrder: (reqDTO: MembershipOrderDTO, params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/insertMembershipOrder`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  intended = {
    /**
     * No description
     *
     * @tags 美国站首页底部用户信息相关
     * @name PostIntended
     * @summary 添加信息
     * @request POST:/intended/add
     */
    postIntended: (reqDTO: AddIntendedCustomerInfoReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseVoid, any>({
        path: `/intended/add`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  isAllowedAccess = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name IsAllowedAccess
     * @summary 当前ip是否能够访问
     * @request GET:/isAllowedAccess
     */
    isAllowedAccess: (
      query: {
        /** ip */
        ip: string;
        /** productId */
        productId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/isAllowedAccess`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  isSignup = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name IsSignup
     * @summary 是否注册
     * @request GET:/isSignup
     */
    isSignup: (
      query: {
        /** mobileOrEmail */
        mobileOrEmail: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/isSignup`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  listCustomerIdsByManagerId = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name ListCustomerIdsByManagerId
     * @summary listCustomerIdsByManagerId
     * @request GET:/listCustomerIdsByManagerId
     */
    listCustomerIdsByManagerId: (
      query: {
        /** managerId */
        managerId: string;
        /** roleEnum */
        roleEnum:
          | "ADMIN"
          | "CUSTOMER_DIRECTOR"
          | "CUSTOMER_MANAGER"
          | "PURCHASER"
          | "MERCHANDISER"
          | "PURCHASER_MANAGER"
          | "MERCHANDISER_MANAGER"
          | "OEM_PURCHASER_MANAGER"
          | "BLACK_SUPPLIER_AUDITOR"
          | "OEM_PURCHASER"
          | "FINANCE_DIRECTOR"
          | "FINANCE_CASHIER"
          | "FINANCE_ACCOUNTANT"
          | "FINANCE_JP_ACCOUNTANT"
          | "ONLINE_CS";
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseHashSetLong, any>({
        path: `/listCustomerIdsByManagerId`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  loginFeign = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name LoginFeign
     * @summary loginFeign
     * @request GET:/loginFeign
     */
    loginFeign: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerLoginRespDTO, any>({
        path: `/loginFeign`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  logout = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name Logout
     * @summary 用户退出
     * @request GET:/logout
     */
    logout: (params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/logout`,
        method: "GET",
        ...params,
      }),
  };
  memberChangeFlag = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name MemberChangeFlag
     * @summary 是否已读会员变更
     * @request GET:/memberChangeFlag
     */
    memberChangeFlag: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/memberChangeFlag`,
        method: "GET",
        ...params,
      }),
  };
  memberChangeZeroFlag = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name MemberChangeZeroFlag
     * @summary 是否已读0级会员变更
     * @request GET:/memberChangeZeroFlag
     */
    memberChangeZeroFlag: (
      query?: {
        /**
         * customerId
         * @format int64
         */
        customerId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/memberChangeZeroFlag`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  menus = {
    /**
     * No description
     *
     * @tags 菜单接口
     * @name Menus
     * @summary 新增菜单
     * @request POST:/menus
     */
    menus: (menu: AddMenuReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/menus`,
        method: "POST",
        body: menu,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 菜单接口
     * @name GetMenustree
     * @summary 查询菜单树
     * @request GET:/menus/getMenustree
     */
    getMenustree: (params: RequestParams = {}) =>
      this.request<BizResponseListMenuTreeRespDTO, any>({
        path: `/menus/getMenustree`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 菜单接口
     * @name GetPageMenu
     * @summary 根据目录id,名称,状态分页查询功能菜单
     * @request POST:/menus/getPageMenu
     */
    getPageMenu: (pageMenuVO: PageMenuReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageManageMenuRespDTO, any>({
        path: `/menus/getPageMenu`,
        method: "POST",
        body: pageMenuVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 菜单接口
     * @name Routes
     * @summary 查询路由列表
     * @request GET:/menus/routes
     */
    routes: (params: RequestParams = {}) =>
      this.request<BizResponseListRouteRespDTO, any>({
        path: `/menus/routes`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 菜单接口
     * @name UpdateById
     * @summary 修改菜单
     * @request PUT:/menus/updateById
     */
    updateById: (menu: UpdateMenuReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/menus/updateById`,
        method: "PUT",
        body: menu,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 菜单接口
     * @name UpdateVisible
     * @summary 修改菜单的状态
     * @request POST:/menus/updateVisible
     */
    updateVisible: (updateMenuVisibleReqDTOList: UpdateMenuVisibleReqDTO[], params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/menus/updateVisible`,
        method: "POST",
        body: updateMenuVisibleReqDTOList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 菜单接口
     * @name Menus2
     * @summary 批量删除菜单
     * @request DELETE:/menus/{ids}
     * @originalName menus
     * @duplicate
     */
    menus2: (ids: string, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/menus/${ids}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 菜单接口
     * @name Menus3
     * @summary 查询菜单详情
     * @request GET:/menus/{id}
     * @originalName menus
     * @duplicate
     */
    menus3: (id: number, params: RequestParams = {}) =>
      this.request<BizResponseManageMenuRespDTO, any>({
        path: `/menus/${id}`,
        method: "GET",
        ...params,
      }),
  };
  mobile = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name SendCode
     * @summary 手机号码发送验证码
     * @request POST:/mobile/send/code
     */
    sendCode: (checkMobileReqDTO: DTO3, params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/mobile/send/code`,
        method: "POST",
        body: checkMobileReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name SendCodeApp
     * @summary 手机号码发送验证码for app
     * @request POST:/mobile/send/code/app
     */
    sendCodeApp: (
      query?: {
        /** request */
        request?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BaseResponse, any>({
        path: `/mobile/send/code/app`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),
  };
  mobileLogin = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name MobileLogin
     * @summary 手机验证登录
     * @request POST:/mobileLogin
     */
    mobileLogin: (queryDTO: _DTO, params: RequestParams = {}) =>
      this.request<BizResponseCustomerLoginRespDTO, any>({
        path: `/mobileLogin`,
        method: "POST",
        body: queryDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  needPopUpWindowByType = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name NeedPopUpWindowByType
     * @summary 是否需要弹出弹窗
     * @request GET:/needPopUpWindowByType
     */
    needPopUpWindowByType: (
      query: {
        /**
         * type
         * @format int32
         */
        type: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/needPopUpWindowByType`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  notify = {
    /**
     * No description
     *
     * @tags 通知
     * @name GetPrivateUnreadCount
     * @summary 获取私有未读消息数量
     * @request GET:/notify/get/private/unread/count
     */
    getPrivateUnreadCount: (params: RequestParams = {}) =>
      this.request<BizResponseInt, any>({
        path: `/notify/get/private/unread/count`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通知
     * @name PrivatePublish
     * @summary 发布私有通知
     * @request POST:/notify/private/publish
     */
    privatePublish: (queryVO: NotifyPrivatePublishVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/notify/private/publish`,
        method: "POST",
        body: queryVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通知
     * @name PrivateQuery
     * @summary 私有消息分页查询
     * @request GET:/notify/private/query
     */
    privateQuery: (
      query?: {
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        startIndex?: number;
        /** @format int64 */
        targetCustomerShopId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageNotifyPrivateVO, any>({
        path: `/notify/private/query`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通知
     * @name PrivateQueryById
     * @summary 私有消息分页查询
     * @request GET:/notify/private/queryById
     */
    privateQueryById: (
      query?: {
        /** 私有消息id */
        notifyTemplatePrivateId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseNotifyPrivateVO, any>({
        path: `/notify/private/queryById`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通知
     * @name PrivateRead
     * @summary 私有消息已读
     * @request POST:/notify/private/read
     */
    privateRead: (readVO: NotifyPrivateReadVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/notify/private/read`,
        method: "POST",
        body: readVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通知
     * @name PrivateReadAll
     * @summary 私有消息全部已读
     * @request POST:/notify/private/read/all
     */
    privateReadAll: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/notify/private/read/all`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通知
     * @name PublicQuery
     * @summary 公有消息分页查询
     * @request GET:/notify/public/query
     */
    publicQuery: (
      query?: {
        /** @format int32 */
        pageNum?: number;
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        startIndex?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponsePageNotifyPublicVO, any>({
        path: `/notify/public/query`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通知
     * @name PublicRead
     * @summary 公有消息已读
     * @request POST:/notify/public/read
     */
    publicRead: (readVO: NotifyPublicReadVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/notify/public/read`,
        method: "POST",
        body: readVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通知
     * @name PublicReadAll
     * @summary 公有消息已读
     * @request POST:/notify/public/read/all
     */
    publicReadAll: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/notify/public/read/all`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通知
     * @name TemplateInsert
     * @summary 插入通知模板
     * @request POST:/notify/template/insert
     */
    templateInsert: (entity: NotifyTemplateUpsertVO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/notify/template/insert`,
        method: "POST",
        body: entity,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通知
     * @name Test
     * @summary 公有消息已读
     * @request GET:/notify/test
     */
    test: (
      query: {
        /** customerEmail */
        customerEmail: string;
        /** subject */
        subject: string;
        /** templatePath */
        templatePath: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/notify/test`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 通知
     * @name Test1
     * @summary 公有消息已读
     * @request GET:/notify/test1
     */
    test1: (
      query: {
        /** customerEmail */
        customerEmail: string;
        /** subject */
        subject: string;
        /** templatePath */
        templatePath: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/notify/test1`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  openApi = {
    /**
     * No description
     *
     * @tags a-li-user-feign-api-impl
     * @name ThirdPlatformUserCountGet
     * @summary getThirdPlatformUserCount
     * @request POST:/openApi/thirdPlatformUserCount/get
     */
    thirdPlatformUserCountGet: (req: CustomerCount, params: RequestParams = {}) =>
      this.request<BizResponseInt, any>({
        path: `/openApi/thirdPlatformUserCount/get`,
        method: "POST",
        body: req,
        type: ContentType.Json,
        ...params,
      }),
  };
  oss = {
    /**
     * No description
     *
     * @tags 云存储
     * @name PutOss
     * @summary 上传文件
     * @request POST:/oss/putOSS
     */
    putOss: (
      data: {
        /** file */
        file: File;
      },
      query?: {
        /** path */
        path?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/oss/putOSS`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 云存储
     * @name Sign
     * @summary 获取上传签名信息
     * @request POST:/oss/sign
     */
    sign: (
      query?: {
        /** path */
        path?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/oss/sign`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 云存储
     * @name SignAnother
     * @summary 获取上传签名
     * @request POST:/oss/sign/another
     */
    signAnother: (
      query?: {
        /** bucketName */
        bucketName?: string;
        /** path */
        path?: string;
        /**
         * type
         * @format int64
         */
        type?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/oss/sign/another`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 云存储
     * @name SignAnotherWithoutLogin
     * @summary 获取上传签名
     * @request POST:/oss/sign/another/withoutLogin
     */
    signAnotherWithoutLogin: (
      query?: {
        /** bucketName */
        bucketName?: string;
        /** path */
        path?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/oss/sign/another/withoutLogin`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),
  };
  page = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name Page
     * @summary queryPage
     * @request POST:/page
     */
    page: (reqDTO: GetCustomerListReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerPageDTO, any>({
        path: `/page`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  passwordChangeFlag = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name PasswordChangeFlag
     * @summary 是否已读建议修改密码弹窗
     * @request GET:/passwordChangeFlag
     */
    passwordChangeFlag: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/passwordChangeFlag`,
        method: "GET",
        ...params,
      }),
  };
  passwordLogin = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name PasswordLogin
     * @summary 密码登录
     * @request POST:/passwordLogin
     */
    passwordLogin: (queryDTO: PasswordLoginReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseCustomerLoginRespDTO, any>({
        path: `/passwordLogin`,
        method: "POST",
        body: queryDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  pluginSearchStatistics = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name PluginSearchStatistics
     * @summary 插件搜索次数统计
     * @request GET:/pluginSearchStatistics
     */
    pluginSearchStatistics: (params: RequestParams = {}) =>
      this.request<BizResponseSearchResultDTO, any>({
        path: `/pluginSearchStatistics`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name Update
     * @summary 插件搜索次数更新
     * @request GET:/pluginSearchStatistics/update
     */
    update: (
      query: {
        /**
         * type
         * @format int64
         */
        type: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/pluginSearchStatistics/update`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  pluginSearchStatisticsAll = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name PluginSearchStatisticsAll
     * @summary 插件搜索次数统计全部包含非会员和会员
     * @request GET:/pluginSearchStatisticsAll
     */
    pluginSearchStatisticsAll: (params: RequestParams = {}) =>
      this.request<BizResponseSearchResultDTO, any>({
        path: `/pluginSearchStatisticsAll`,
        method: "GET",
        ...params,
      }),
  };
  priceTrackingFlag = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name PriceTrackingFlag
     * @summary 是否开启价格跟踪
     * @request GET:/priceTrackingFlag
     */
    priceTrackingFlag: (params: RequestParams = {}) =>
      this.request<BizResponseInt, any>({
        path: `/priceTrackingFlag`,
        method: "GET",
        ...params,
      }),
  };
  query = {
    /**
     * No description
     *
     * @tags customer-query-feign-api-impl
     * @name CaCheckPalletWhite
     * @summary checkPalletWhite
     * @request GET:/query/ca/checkPalletWhite
     */
    caCheckPalletWhite: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/query/ca/checkPalletWhite`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-query-feign-api-impl
     * @name CaGetCustomerMembershipTemplateIdBySuperId
     * @summary getCustomerMembershipTemplateIdBySuperId
     * @request POST:/query/ca/getCustomerMembershipTemplateIdBySuperId
     */
    caGetCustomerMembershipTemplateIdBySuperId: (
      query: {
        /**
         * superCustomerId
         * @format int64
         */
        superCustomerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseLong, any>({
        path: `/query/ca/getCustomerMembershipTemplateIdBySuperId`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-query-feign-api-impl
     * @name CaGetSimpleCustomer
     * @summary getSimpleCustomer
     * @request GET:/query/ca/getSimpleCustomer
     */
    caGetSimpleCustomer: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerRespDTO, any>({
        path: `/query/ca/getSimpleCustomer`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-query-feign-api-impl
     * @name CaGetSimpleCustomerV1
     * @summary getSimpleCustomerV1
     * @request GET:/query/ca/getSimpleCustomerV1
     */
    caGetSimpleCustomerV1: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerRespDTO, any>({
        path: `/query/ca/getSimpleCustomerV1`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  queryChangeUrlUserByCustomerId = {
    /**
     * No description
     *
     * @tags customer-distribute-feign-api-impl
     * @name QueryChangeUrlUserByCustomerId
     * @summary queryChangeUrlUserByCustomerId
     * @request GET:/queryChangeUrlUserByCustomerId
     */
    queryChangeUrlUserByCustomerId: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/queryChangeUrlUserByCustomerId`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  queryRelationByCustomerId = {
    /**
     * No description
     *
     * @tags customer-distribute-feign-api-impl
     * @name QueryRelationByCustomerId
     * @summary queryPurchaseUserByCustomerId
     * @request GET:/queryRelationByCustomerId
     */
    queryRelationByCustomerId: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerDistributeQueryRespDTO, any>({
        path: `/queryRelationByCustomerId`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  queryRelationByCustomerIds = {
    /**
     * No description
     *
     * @tags customer-distribute-feign-api-impl
     * @name QueryRelationByCustomerIds
     * @summary queryPurchaseUserByCustomerIds
     * @request POST:/queryRelationByCustomerIds
     */
    queryRelationByCustomerIds: (customerIds: number[], params: RequestParams = {}) =>
      this.request<BizResponseMapLongCustomerDistributeQueryRespDTO, any>({
        path: `/queryRelationByCustomerIds`,
        method: "POST",
        body: customerIds,
        type: ContentType.Json,
        ...params,
      }),
  };
  removeWhileList = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name RemoveWhileList
     * @summary 移出白名单
     * @request POST:/removeWhileList
     */
    removeWhileList: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/removeWhileList`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),
  };
  reqDto = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name ReqDto
     * @summary queryCustomerDetail
     * @request POST:/reqDTO
     */
    reqDto: (reqDTO: QueryCustomerDetailReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerDetailRespDTO, any>({
        path: `/reqDTO`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  roles = {
    /**
     * No description
     *
     * @tags 角色接口
     * @name Roles
     * @summary 新增角色
     * @request POST:/roles
     */
    roles: (roleReqDTO: AddRoleReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/roles`,
        method: "POST",
        body: roleReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 角色接口
     * @name AddUserRole
     * @summary 人员批量分配角色
     * @request POST:/roles/addUserRole
     */
    addUserRole: (userRole: AddUserRoleReqDTO[], params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/roles/addUserRole`,
        method: "POST",
        body: userRole,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 角色接口
     * @name DelUserRole
     * @summary 批量删除角色里面的人员
     * @request POST:/roles/delUserRole
     */
    delUserRole: (delUserRoleVO: DelUserRoleReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/roles/delUserRole`,
        method: "POST",
        body: delUserRoleVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 角色接口
     * @name DeleteById
     * @summary 删除角色接口
     * @request DELETE:/roles/deleteById
     */
    deleteById: (
      query?: {
        /** id */
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/roles/deleteById`,
        method: "DELETE",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 角色接口
     * @name FindRolesManager
     * @summary 查询客户经理包含的人员
     * @request POST:/roles/findRoles/manager
     */
    findRolesManager: (rolesUsersVO: GetRolesUserListReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListRoleUserRespDTO, any>({
        path: `/roles/findRoles/manager`,
        method: "POST",
        body: rolesUsersVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 角色接口
     * @name FindRolesSupervisionManager
     * @summary 查询客户总监包含的人员
     * @request POST:/roles/findRoles/supervisionManager
     */
    findRolesSupervisionManager: (rolesUsersVO: GetRolesUserListReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListRoleUserRespDTO, any>({
        path: `/roles/findRoles/supervisionManager`,
        method: "POST",
        body: rolesUsersVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 角色接口
     * @name FindRolesUser
     * @summary 查询多个角色包含的人员
     * @request POST:/roles/findRoles/user
     */
    findRolesUser: (rolesUsersVO: GetRolesUserListReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListRoleUserRespDTO, any>({
        path: `/roles/findRoles/user`,
        method: "POST",
        body: rolesUsersVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 角色接口
     * @name GetUsersById
     * @summary 通过角色id获取用户集合
     * @request GET:/roles/getUsersById
     */
    getUsersById: (
      query?: {
        /** roleId */
        roleId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListManageUserRespDTO, any>({
        path: `/roles/getUsersById`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 角色接口
     * @name MenuTree
     * @summary 查询多个角色拥有的菜单树
     * @request POST:/roles/menu_tree
     */
    menuTree: (roleIds: string[], params: RequestParams = {}) =>
      this.request<BizResponseListMenuTreeListRespDTO, any>({
        path: `/roles/menu_tree`,
        method: "POST",
        body: roleIds,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 角色接口
     * @name UpdateRolesMenus
     * @summary 修改多个角色菜单
     * @request PUT:/roles/update/roles_menus
     */
    updateRolesMenus: (roles: UpdateRoleMenusReqDTO[], params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/roles/update/roles_menus`,
        method: "PUT",
        body: roles,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 角色接口
     * @name UpdateRole
     * @summary 修改角色
     * @request PUT:/roles/updateRole
     */
    updateRole: (role: UpdateRoleReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/roles/updateRole`,
        method: "PUT",
        body: role,
        type: ContentType.Json,
        ...params,
      }),
  };
  selectCustomerMembershipList = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name SelectCustomerMembershipList
     * @summary selectCustomerMembershipList
     * @request POST:/selectCustomerMembershipList
     */
    selectCustomerMembershipList: (dto: CustomerMembershipReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseListCustomerMembership, any>({
        path: `/selectCustomerMembershipList`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),
  };
  selectCustomerPriceTrackingFlag = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name SelectCustomerPriceTrackingFlag
     * @summary selectCustomerPriceTrackingFlag
     * @request GET:/selectCustomerPriceTrackingFlag
     */
    selectCustomerPriceTrackingFlag: (
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
        path: `/selectCustomerPriceTrackingFlag`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  sendMsg = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name SendMsg
     * @summary sendMsg
     * @request POST:/sendMsg
     */
    sendMsg: (dto: CustomerJpushReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/sendMsg`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),
  };
  shop = {
    /**
     * No description
     *
     * @tags customer-shop-feign-api-impl
     * @name AddCustomerShop
     * @summary addCustomerShop
     * @request POST:/shop/addCustomerShop
     */
    addCustomerShop: (addShopDTO: AddCustomerShopReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseLong, any>({
        path: `/shop/addCustomerShop`,
        method: "POST",
        body: addShopDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-shop-feign-api-impl
     * @name PostShop
     * @summary getCustomerShop
     * @request POST:/shop/get
     */
    postShop: (dto: GetCustomerShopDTO, params: RequestParams = {}) =>
      this.request<BizResponseCustomerShopRespDTO, any>({
        path: `/shop/get`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-shop-feign-api-impl
     * @name GetCustomerShopListByShopIdList
     * @summary getCustomerShopListByShopIdList
     * @request POST:/shop/getCustomerShopListByShopIdList
     */
    getCustomerShopListByShopIdList: (dto: GetCustomerShopListByShopIdListDTO, params: RequestParams = {}) =>
      this.request<BizResponseListCustomerShopRespDTO, any>({
        path: `/shop/getCustomerShopListByShopIdList`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-shop-feign-api-impl
     * @name GetDefaultClearanceAddress
     * @summary getDefaultClearanceAddress
     * @request GET:/shop/getDefaultClearanceAddress
     */
    getDefaultClearanceAddress: (
      query: {
        /**
         * customerShopId
         * @format int64
         */
        customerShopId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseShopClearanceAddressRespDTO, any>({
        path: `/shop/getDefaultClearanceAddress`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-shop-feign-api-impl
     * @name GetList
     * @summary getCustomerShopList
     * @request POST:/shop/getList
     */
    getList: (dto: GetCustomerShopDTO, params: RequestParams = {}) =>
      this.request<BizResponseListCustomerShopRespDTO, any>({
        path: `/shop/getList`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-shop-feign-api-impl
     * @name GetShopListByCustomerId
     * @summary getShopListByCustomerId
     * @request POST:/shop/getShopListByCustomerId
     */
    getShopListByCustomerId: (reqDTO: GetShopListByCustomerReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseCustomerShopRespDTO, any>({
        path: `/shop/getShopListByCustomerId`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-shop-feign-api-impl
     * @name GetShopPurchase
     * @summary getShopPurchase
     * @request GET:/shop/getShopPurchase
     */
    getShopPurchase: (
      query: {
        /**
         * customerShopId
         * @format int64
         */
        customerShopId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseShopPurchaseRespDTO, any>({
        path: `/shop/getShopPurchase`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-shop-feign-api-impl
     * @name GetShopPurchaseList
     * @summary getShopPurchaseList
     * @request POST:/shop/getShopPurchaseList
     */
    getShopPurchaseList: (customerShopIds: number[], params: RequestParams = {}) =>
      this.request<BizResponseListShopPurchaseRespDTO, any>({
        path: `/shop/getShopPurchaseList`,
        method: "POST",
        body: customerShopIds,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-shop-feign-api-impl
     * @name GetVirtualShopByMainCustomer
     * @summary getVirtualShopByMainCustomer
     * @request GET:/shop/getVirtualShopByMainCustomer
     */
    getVirtualShopByMainCustomer: (
      query: {
        /**
         * mainCustomerId
         * @format int64
         */
        mainCustomerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerShopRespDTO, any>({
        path: `/shop/getVirtualShopByMainCustomer`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-shop-feign-api-impl
     * @name Page
     * @summary getCustomerShopPage
     * @request POST:/shop/page
     */
    page: (dto: BaseQueryPage, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerShopRespDTO, any>({
        path: `/shop/page`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-shop-feign-api-impl
     * @name QueryPage
     * @summary queryCustomerShopPage
     * @request POST:/shop/query/page
     */
    queryPage: (dto: CustomerShopQueryDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerShopPageDTO, any>({
        path: `/shop/query/page`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-shop-feign-api-impl
     * @name SelectListByCustomerIds
     * @summary selectShopListByCustomerIds
     * @request POST:/shop/select/list/by/customerIds
     */
    selectListByCustomerIds: (customerIds: number[], params: RequestParams = {}) =>
      this.request<BizResponseListCustomerShopPageDTO, any>({
        path: `/shop/select/list/by/customerIds`,
        method: "POST",
        body: customerIds,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-用户店铺物流配置修改
     * @name ShipAdd
     * @summary 新建店铺国际物流配置
     * @request POST:/shop/ship/add
     */
    shipAdd: (dto: CustomerShopShipReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseVoid, any>({
        path: `/shop/ship/add`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-用户店铺物流配置修改
     * @name ShipDelete
     * @summary 删除店铺国际物流配置
     * @request POST:/shop/ship/delete
     */
    shipDelete: (customerShopShipDelReqDTO: CustomerShopShipDelReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseVoid, any>({
        path: `/shop/ship/delete`,
        method: "POST",
        body: customerShopShipDelReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-用户店铺物流配置修改
     * @name ShipGet
     * @summary 获取店铺国际物流配置列表
     * @request GET:/shop/ship/get
     */
    shipGet: (params: RequestParams = {}) =>
      this.request<BizResponseListCustomerShopShipRespDTO, any>({
        path: `/shop/ship/get`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-用户店铺物流配置修改
     * @name ShipUpdate
     * @summary 编辑店铺国际物流配置
     * @request POST:/shop/ship/update
     */
    shipUpdate: (dto: CustomerShopShipReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseVoid, any>({
        path: `/shop/ship/update`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-shop-feign-api-impl
     * @name UpdateFeigh
     * @summary updateCustomerShop
     * @request POST:/shop/updateFeigh
     */
    updateFeigh: (dto: UpdateCustomerShopDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/shop/updateFeigh`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customer-shop-feign-api-impl
     * @name UpdateShopPurchase
     * @summary updateShopPurchase
     * @request POST:/shop/updateShopPurchase
     */
    updateShopPurchase: (reqDTO: UpdateShopPurchaseReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/shop/updateShopPurchase`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  shopTaxDeductionAccount = {
    /**
     * No description
     *
     * @tags 扣税账号接口
     * @name PostShopTaxDeductionAccount
     * @summary 新增扣税账号
     * @request POST:/shopTaxDeductionAccount/add
     */
    postShopTaxDeductionAccount: (
      addShopTaxDeductionAccountDTO: AddShopTaxDeductionAccountDTO,
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/shopTaxDeductionAccount/add`,
        method: "POST",
        body: addShopTaxDeductionAccountDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 扣税账号接口
     * @name Edit
     * @summary 编辑扣税账号
     * @request POST:/shopTaxDeductionAccount/edit
     */
    edit: (editShopTaxDeductionAccountDTO: UpdateShopTaxDeductionAccountDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/shopTaxDeductionAccount/edit`,
        method: "POST",
        body: editShopTaxDeductionAccountDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 扣税账号接口
     * @name GetById
     * @summary 根据ID获取
     * @request GET:/shopTaxDeductionAccount/getById/{id}
     */
    getById: (id: number, params: RequestParams = {}) =>
      this.request<BizResponseShopTaxDeductionAccountRespDTO, any>({
        path: `/shopTaxDeductionAccount/getById/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 扣税账号接口
     * @name GetPage
     * @summary 分页查询
     * @request POST:/shopTaxDeductionAccount/getPage
     */
    getPage: (pageDTO: ShopTaxDeductionAccountPageDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageShopTaxDeductionAccountRespDTO, any>({
        path: `/shopTaxDeductionAccount/getPage`,
        method: "POST",
        body: pageDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 扣税账号接口
     * @name RemoveById
     * @summary 删除扣税账号
     * @request POST:/shopTaxDeductionAccount/removeById/{id}
     */
    removeById: (id: number, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/shopTaxDeductionAccount/removeById/${id}`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 扣税账号接口
     * @name SetDefault
     * @summary 设置默认
     * @request POST:/shopTaxDeductionAccount/setDefault/{id}
     */
    setDefault: (id: number, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/shopTaxDeductionAccount/setDefault/${id}`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),
  };
  showGoogle = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name ShowGoogle
     * @summary 查看客户谷歌表
     * @request POST:/showGoogle
     */
    showGoogle: (dto: GetCustomerGoogleListReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageCustomerGoogle, any>({
        path: `/showGoogle`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),
  };
  showGuide = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name ShowGuide
     * @summary 查看新手指引
     * @request GET:/showGuide
     */
    showGuide: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerGuide, any>({
        path: `/showGuide`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  showMaterialPrice = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name ShowMaterialPrice
     * @summary 查看国际料金表
     * @request POST:/showMaterialPrice
     */
    showMaterialPrice: (
      query?: {
        /** stationCode */
        stationCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListMaterialPrice, any>({
        path: `/showMaterialPrice`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),
  };
  showWareIsExistOem = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name ShowWareIsExistOem
     * @summary showWareIsExistOem
     * @request GET:/showWareIsExistOem
     */
    showWareIsExistOem: (
      query: {
        /**
         * customerShopId
         * @format int64
         */
        customerShopId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseCustomerShopRespDTO, any>({
        path: `/showWareIsExistOem`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  signup = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name Signup
     * @summary 注册
     * @request POST:/signup
     */
    signup: (signUpReqDTO: SignUpReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseSignUpRespDTO, any>({
        path: `/signup`,
        method: "POST",
        body: signUpReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name CheckInvitationCode
     * @summary 验证推广码是否为推广联盟
     * @request GET:/signup/check/invitationCode
     */
    checkInvitationCode: (
      query?: {
        /** invitationCode */
        invitationCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/signup/check/invitationCode`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name CheckLoginname
     * @summary 验证登录名是否唯一
     * @request GET:/signup/check/loginname
     */
    checkLoginname: (
      query?: {
        /** loginName */
        loginName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/signup/check/loginname`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name DefaultLogin
     * @summary 用户默认登录b2b或d2c
     * @request POST:/signup/defaultLogin
     */
    defaultLogin: (reqDTO: DefaultLoginReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseCustomerLoginRespDTO, any>({
        path: `/signup/defaultLogin`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name GetInvitationInfo
     * @summary 根据邀请码获取邀请信息
     * @request GET:/signup/getInvitationInfo
     */
    getInvitationInfo: (
      query?: {
        /** invitationCode */
        invitationCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseInvitationInfoRespDTO, any>({
        path: `/signup/getInvitationInfo`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name NeedEmailCode
     * @summary 直采注册是否需要邮箱验证码
     * @request GET:/signup/needEmailCode
     */
    needEmailCode: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/signup/needEmailCode`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name NoEmailCode
     * @summary 直采注册，不需要邮箱验证码
     * @request POST:/signup/noEmailCode
     */
    noEmailCode: (signUpReqDTO: SignUpReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseSignUpRespDTO, any>({
        path: `/signup/noEmailCode`,
        method: "POST",
        body: signUpReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name SendCode
     * @summary 注册发送验证码
     * @request POST:/signup/send/code
     */
    sendCode: (checkEmailReqDTO: CheckEmailReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/signup/send/code`,
        method: "POST",
        body: checkEmailReqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  splitRemindFlag = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name SplitRemindFlag
     * @summary 拆单不再提醒标记
     * @request POST:/splitRemindFlag
     */
    splitRemindFlag: (dto: CustomerSplitRemindFlagDTO, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/splitRemindFlag`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),
  };
  systemSourceLogin = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户登录注册
     * @name SystemSourceLogin
     * @summary 通过uuid和系统来源登录
     * @request POST:/systemSourceLogin
     */
    systemSourceLogin: (queryDTO: DefaultLoginReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseCustomerLoginRespDTO, any>({
        path: `/systemSourceLogin`,
        method: "POST",
        body: queryDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  take = {
    /**
     * No description
     *
     * @tags 档口用户接口
     * @name UsersAddUser
     * @summary 添加拿货员
     * @request POST:/take/users/addUser
     */
    usersAddUser: (addReqDTO: TakeUserAddReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/take/users/addUser`,
        method: "POST",
        body: addReqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 档口用户接口
     * @name UsersEditUser
     * @summary 修改拿货员
     * @request POST:/take/users/editUser
     */
    usersEditUser: (reqDTO: TakeUserEditReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/take/users/editUser`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 档口用户接口
     * @name UsersGetOne
     * @summary 根据ID获取拿货员详情
     * @request GET:/take/users/getOne
     */
    usersGetOne: (
      query?: {
        /**
         * 拿货员ID
         * @format int64
         */
        takeUserId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseTakeUserRespDTO, any>({
        path: `/take/users/getOne`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 档口用户接口
     * @name UsersGetOneByToken
     * @summary 根据token获取拿货员详情
     * @request GET:/take/users/getOneByToken
     */
    usersGetOneByToken: (params: RequestParams = {}) =>
      this.request<BizResponseTakeUserRespDTO, any>({
        path: `/take/users/getOneByToken`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 档口用户接口
     * @name UsersGetTakeUser
     * @summary getTakeUser
     * @request GET:/take/users/getTakeUser
     */
    usersGetTakeUser: (
      query: {
        /** token */
        token: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseTakeUserRespDTO, any>({
        path: `/take/users/getTakeUser`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 档口用户接口
     * @name UsersLogin
     * @summary 拿货员登录
     * @request POST:/take/users/login
     */
    usersLogin: (reqDTO: TakeUserLoginReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/take/users/login`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 档口用户接口
     * @name UsersPageUser
     * @summary 拿货员列表
     * @request POST:/take/users/pageUser
     */
    usersPageUser: (takeUserReqDTO: TakeUserReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageTakeUserRespDTO, any>({
        path: `/take/users/pageUser`,
        method: "POST",
        body: takeUserReqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  thirdAuthLink = {
    /**
     * No description
     *
     * @tags 三方平台Oauth2授权相关
     * @name ThirdAuthLink
     * @summary 获取三方授权链接
     * @request POST:/thirdAuthLink
     */
    thirdAuthLink: (thirdAuthLinkReqDTO: GetThirdAuthLinkReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseString, any>({
        path: `/thirdAuthLink`,
        method: "POST",
        body: thirdAuthLinkReqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  thirdCallback = {
    /**
     * No description
     *
     * @tags 三方平台Oauth2授权相关
     * @name Apple
     * @summary 苹果授权回调接口
     * @request POST:/thirdCallback/apple
     */
    apple: (
      query: {
        /** code */
        code: string;
        /** id_token */
        id_token: string;
        /** state */
        state: string;
        /** user */
        user?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/thirdCallback/apple`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 三方平台Oauth2授权相关
     * @name EasyApple
     * @summary 苹果授权回调接口
     * @request POST:/thirdCallback/easy/apple
     */
    easyApple: (
      query: {
        /** code */
        code: string;
        /** id_token */
        id_token: string;
        /** state */
        state: string;
        /** user */
        user?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/thirdCallback/easy/apple`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),
  };
  thirdData = {
    /**
     * No description
     *
     * @tags 三方平台Oauth2授权相关
     * @name ThirdData
     * @summary 获取三方数据
     * @request POST:/thirdData
     */
    thirdData: (thirdDataReqDTO: GetThirdDataReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseGetThirdDataRespDTO, any>({
        path: `/thirdData`,
        method: "POST",
        body: thirdDataReqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  update = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name DefectiveProductRiskFlag
     * @summary 已读不良品风险弹窗
     * @request GET:/update/defectiveProductRiskFlag
     */
    defectiveProductRiskFlag: (
      query: {
        /**
         * confirmationStyle
         * @format int64
         */
        confirmationStyle: number;
        /** version */
        version: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/update/defectiveProductRiskFlag`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name MemberChangeFlag
     * @summary 更新会员变更为已读
     * @request GET:/update/memberChangeFlag
     */
    memberChangeFlag: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/update/memberChangeFlag`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name MemberChangeZeroFlag
     * @summary 更新0级会员变更为已读
     * @request GET:/update/memberChangeZeroFlag
     */
    memberChangeZeroFlag: (
      query?: {
        /**
         * customerId
         * @format int64
         */
        customerId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/update/memberChangeZeroFlag`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name PasswordChangeFlag
     * @summary 已读建议修改密码弹窗
     * @request GET:/update/passwordChangeFlag
     */
    passwordChangeFlag: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/update/passwordChangeFlag`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name PopUpWindowByType
     * @summary 已读弹窗
     * @request GET:/update/popUpWindowByType
     */
    popUpWindowByType: (
      query: {
        /**
         * type
         * @format int32
         */
        type: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/update/popUpWindowByType`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  updateCustomer = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户密码和邮箱修改
     * @name UpdateCustomer
     * @summary 更新个人信息
     * @request POST:/updateCustomer
     */
    updateCustomer: (reqDTO: UpdateCustomerReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/updateCustomer`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  updateCustomer2AgencyGoodsSign = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name UpdateCustomer2AgencyGoodsSign
     * @summary 更新直采用户跳转代采商品是否弹框标识
     * @request POST:/updateCustomer2AgencyGoodsSign
     */
    updateCustomer2AgencyGoodsSign: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/updateCustomer2AgencyGoodsSign`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),
  };
  updateCustomer2AgencySign = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name UpdateCustomer2AgencySign
     * @summary 更新直采用户跳转代采是否弹框标识
     * @request POST:/updateCustomer2AgencySign
     */
    updateCustomer2AgencySign: (params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/updateCustomer2AgencySign`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),
  };
  updateCustomerDetail = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name UpdateCustomerDetail
     * @summary updateCustomerDetail
     * @request GET:/updateCustomerDetail
     */
    updateCustomerDetail: (
      query: {
        /**
         * customerId
         * @format int64
         */
        customerId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/updateCustomerDetail`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  updateCustomerGoogle = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户密码和邮箱修改
     * @name UpdateCustomerGoogle
     * @summary 更新个人谷歌表
     * @request POST:/updateCustomerGoogle
     */
    updateCustomerGoogle: (reqDTO: UpdateCustomerReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/updateCustomerGoogle`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  updateCustomerRegistration = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name UpdateCustomerRegistration
     * @summary 更新客户设备注册表
     * @request GET:/updateCustomerRegistration
     */
    updateCustomerRegistration: (
      query: {
        /** registrationId */
        registrationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseObject, any>({
        path: `/updateCustomerRegistration`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  updateCustomerRegistrationEmpty = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name UpdateCustomerRegistrationEmpty
     * @summary 删除设备注册表
     * @request GET:/updateCustomerRegistrationEmpty
     */
    updateCustomerRegistrationEmpty: (
      query: {
        /** registrationId */
        registrationId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseObject, any>({
        path: `/updateCustomerRegistrationEmpty`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  updateExpireAndMembership = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name UpdateExpireAndMembership
     * @summary updateExpireAndMembership
     * @request POST:/updateExpireAndMembership
     */
    updateExpireAndMembership: (dto: CustomerMembershipReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/updateExpireAndMembership`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),
  };
  updateGoogle = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name UpdateGoogle
     * @summary 更新客户谷歌表
     * @request POST:/updateGoogle
     */
    updateGoogle: (dto: CustomerGoogle, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/updateGoogle`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),
  };
  updateGuide = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name UpdateGuide
     * @summary 更新新手指引
     * @request POST:/updateGuide
     */
    updateGuide: (dto: CustomerGuide, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/updateGuide`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),
  };
  updateManager = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name UpdateManager
     * @summary updateManager
     * @request POST:/updateManager
     */
    updateManager: (reqDTOs: QueryCustomerByManagerDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/updateManager`,
        method: "POST",
        body: reqDTOs,
        type: ContentType.Json,
        ...params,
      }),
  };
  updateMaterialPrice = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户
     * @name UpdateMaterialPrice
     * @summary 更新国际料金表
     * @request POST:/updateMaterialPrice
     */
    updateMaterialPrice: (dto: MaterialPrice, params: RequestParams = {}) =>
      this.request<BizResponseObject, any>({
        path: `/updateMaterialPrice`,
        method: "POST",
        body: dto,
        type: ContentType.Json,
        ...params,
      }),
  };
  updatePassword = {
    /**
     * No description
     *
     * @tags D2C&&B2B-前台用户密码和邮箱修改
     * @name UpdatePassword
     * @summary 原密码更新密码
     * @request POST:/updatePassword
     */
    updatePassword: (updatePasswordReqDTO: UpdatePasswordReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/updatePassword`,
        method: "POST",
        body: updatePasswordReqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
  updateSupervisionManager = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name UpdateSupervisionManager
     * @summary updateSupervisionManager
     * @request POST:/updateSupervisionManager
     */
    updateSupervisionManager: (reqDTOs: QueryCustomerByManagerDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/updateSupervisionManager`,
        method: "POST",
        body: reqDTOs,
        type: ContentType.Json,
        ...params,
      }),
  };
  updateUnificationCustomerFullName = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name UpdateUnificationCustomerFullName
     * @summary updateUnificationCustomerFullName
     * @request POST:/updateUnificationCustomerFullName
     */
    updateUnificationCustomerFullName: (reqDTOs: QueryCustomerByManagerDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/updateUnificationCustomerFullName`,
        method: "POST",
        body: reqDTOs,
        type: ContentType.Json,
        ...params,
      }),
  };
  updateWare = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name UpdateWare
     * @summary updateWare
     * @request POST:/updateWare
     */
    updateWare: (reqDTOs: QueryCustomerByManagerDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/updateWare`,
        method: "POST",
        body: reqDTOs,
        type: ContentType.Json,
        ...params,
      }),
  };
  updateWareIsExistOem = {
    /**
     * No description
     *
     * @tags customer-feign-api-impl
     * @name UpdateWareIsExistOem
     * @summary updateWareIsExistOem
     * @request POST:/updateWareIsExistOem
     */
    updateWareIsExistOem: (reqDTOs: UpdateWareOemReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/updateWareIsExistOem`,
        method: "POST",
        body: reqDTOs,
        type: ContentType.Json,
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags 用户接口
     * @name BatchMoveDepartments
     * @summary 批量移动用户部门
     * @request POST:/users/batchMoveDepartments
     */
    batchMoveDepartments: (reqDTO: MoveUserDepartmentReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/users/batchMoveDepartments`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户接口
     * @name DeleteByIds
     * @summary 批量删除部门员工接口
     * @request DELETE:/users/deleteByIds
     */
    deleteByIds: (ids: string[], params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/users/deleteByIds`,
        method: "DELETE",
        body: ids,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户接口
     * @name DirectorSet
     * @summary 把用户设置为主管
     * @request POST:/users/directorSet
     */
    directorSet: (reqDTO: DirectorSetReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/users/directorSet`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户接口
     * @name FindUserList
     * @summary 根据部门id等条件查询用户列表分页
     * @request POST:/users/findUserList
     */
    findUserList: (findUserListVO: GetUserListReqDTO, params: RequestParams = {}) =>
      this.request<BizResponsePageManageUserRespDTO, any>({
        path: `/users/findUserList`,
        method: "POST",
        body: findUserListVO,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户接口
     * @name GetOemPurser
     * @summary 获取oem采购员
     * @request GET:/users/getOemPurser
     */
    getOemPurser: (
      query?: {
        /** userId */
        userId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListManageUserRespDTO, any>({
        path: `/users/getOemPurser`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户接口
     * @name GetRoleIds
     * @summary 查询用户登录名获取角色id
     * @request GET:/users/getRoleIds
     */
    getRoleIds: (
      query?: {
        /** userName */
        userName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListString, any>({
        path: `/users/getRoleIds`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户接口
     * @name GetUserByRole
     * @summary 获取角色code获取用户
     * @request GET:/users/getUserByRole
     */
    getUserByRole: (
      query?: {
        /** roleCode */
        roleCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListManageUserRespDTO, any>({
        path: `/users/getUserByRole`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户接口
     * @name GetUserByRoleList
     * @summary 通过批量角色code获取用户
     * @request POST:/users/getUserByRoleList
     */
    getUserByRoleList: (roleCodes: string[], params: RequestParams = {}) =>
      this.request<BizResponseListManageUserRespDTO, any>({
        path: `/users/getUserByRoleList`,
        method: "POST",
        body: roleCodes,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户接口
     * @name GetUserInfoByUsername
     * @summary 查询用户名获取用户的角色，资源信息
     * @request GET:/users/getUserInfoByUsername/{username}
     */
    getUserInfoByUsername: (username: string, params: RequestParams = {}) =>
      this.request<BizResponseManageUserInfoRespDTO, any>({
        path: `/users/getUserInfoByUsername/${username}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户接口
     * @name GetUsersByDirector
     * @summary 主管获取当前部门所有人员的信息
     * @request GET:/users/getUsersByDirector
     */
    getUsersByDirector: (
      query?: {
        /** userId */
        userId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseListManageUserRespDTO, any>({
        path: `/users/getUsersByDirector`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户接口
     * @name Logout
     * @summary 用户退出
     * @request DELETE:/users/logout
     */
    logout: (
      query: {
        /** id */
        id: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/users/logout`,
        method: "DELETE",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户接口
     * @name GetUsers
     * @summary 查询当前登陆的用户信息
     * @request GET:/users/me
     */
    getUsers: (params: RequestParams = {}) =>
      this.request<BizResponseManageUserLoginRespDTO, any>({
        path: `/users/me`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户接口
     * @name Save
     * @summary 新增部门用户接口
     * @request POST:/users/save
     */
    save: (user: AddManageUserReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/users/save`,
        method: "POST",
        body: user,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户接口
     * @name Saves
     * @summary 批量新增部门用户接口
     * @request POST:/users/saves
     */
    saves: (users: AddManageUserReqDTO[], params: RequestParams = {}) =>
      this.request<BizResponseMapStringListString, any>({
        path: `/users/saves`,
        method: "POST",
        body: users,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户接口
     * @name Token
     * @summary 用户登录
     * @request POST:/users/token
     */
    token: (
      query: {
        /** password */
        password: string;
        /** username */
        username: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseManageLoginRespDTO, any>({
        path: `/users/token`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户接口
     * @name Update
     * @summary 部门员工详情修改接口
     * @request PUT:/users/update
     */
    update: (user: UpdateManageUserReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/users/update`,
        method: "PUT",
        body: user,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户接口
     * @name UpdateManagerPassword
     * @summary 后台用户修改密码
     * @request PATCH:/users/updateManagerPassword
     */
    updateManagerPassword: (user: UpdateManagerPasswordReqDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/users/updateManagerPassword`,
        method: "PATCH",
        body: user,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户接口
     * @name UpdatePasswordEnable
     * @summary 部门员工禁用或者修改密码局部更新接口
     * @request PATCH:/users/updatePasswordEnable
     */
    updatePasswordEnable: (user: UpdatePasswordReqManagerDTO, params: RequestParams = {}) =>
      this.request<BizResponse, any>({
        path: `/users/updatePasswordEnable`,
        method: "PATCH",
        body: user,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户接口
     * @name UploadUser
     * @summary 上传用户信息
     * @request POST:/users/uploadUser
     */
    uploadUser: (data: any, params: RequestParams = {}) =>
      this.request<BizResponseMapStringListString, any>({
        path: `/users/uploadUser`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户接口
     * @name Username
     * @summary 查询用户名获取用户信息
     * @request GET:/users/username/{username}
     */
    username: (username: string, params: RequestParams = {}) =>
      this.request<BizResponseManageUserDetailRespDTO, any>({
        path: `/users/username/${username}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户接口
     * @name VerificationMobileRepeat
     * @summary 验证手机号是否重复
     * @request GET:/users/verificationMobileRepeat
     */
    verificationMobileRepeat: (
      query: {
        /** mobile */
        mobile: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponse, any>({
        path: `/users/verificationMobileRepeat`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 用户接口
     * @name Users
     * @summary 查询用户详情
     * @request GET:/users/{id}
     */
    users: (id: string, params: RequestParams = {}) =>
      this.request<BizResponseManageUserDetailRespDTO, any>({
        path: `/users/${id}`,
        method: "GET",
        ...params,
      }),
  };
  video = {
    /**
     * No description
     *
     * @tags 火山直播控制层
     * @name GetActivities
     * @summary 获取直播间列表
     * @request GET:/video/getActivities
     */
    getActivities: (params: RequestParams = {}) =>
      this.request<BizResponseGetActivitiesRespDTO, any>({
        path: `/video/getActivities`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 火山直播控制层
     * @name GetActivityById
     * @summary 获取直播间详情
     * @request GET:/video/getActivityById
     */
    getActivityById: (
      query: {
        /**
         * activityId
         * @format int64
         */
        activityId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseVideoActivityDTO, any>({
        path: `/video/getActivityById`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 火山直播控制层
     * @name GetToken
     * @summary 获取token
     * @request GET:/video/getToken
     */
    getToken: (
      query: {
        /**
         * activityId
         * @format int64
         */
        activityId: number;
        /**
         * mode
         * @format int32
         */
        mode: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseString, any>({
        path: `/video/getToken`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 火山直播控制层
     * @name Reserve
     * @summary 直播预约
     * @request GET:/video/reserve
     */
    reserve: (
      query: {
        /**
         * activityId
         * @format int64
         */
        activityId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BizResponseBoolean, any>({
        path: `/video/reserve`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 火山直播控制层
     * @name ReserveCallBack
     * @summary 直播预约回调
     * @request POST:/video/reserveCallBack
     */
    reserveCallBack: (reqDTO: ReserveCallBackReqDTO, params: RequestParams = {}) =>
      this.request<BizResponseBoolean, any>({
        path: `/video/reserveCallBack`,
        method: "POST",
        body: reqDTO,
        type: ContentType.Json,
        ...params,
      }),
  };
}
