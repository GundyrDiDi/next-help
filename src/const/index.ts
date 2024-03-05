/**
 * 国家及货币单位
 */
enum Site {
  /**
   * 日本站
   */
  JP = 'JapanStation',
  /**
   * 韩国站
   */
  KR = 'KoreaStation',
  /**
   * 英国站
   */
  UK = 'UkStation'
}

enum simpleSite {
  /**
   * 日本站
   */
  JP = 'ja',
  /**
   * 韩国站
   */
  KR = 'ko',
  /**
   * 英国站
   */
  UK = 'en'
}
/**
* 站点对应的货币单位
*/
const siteMapMonetaryUnit = new Map<string, string>();
siteMapMonetaryUnit.set(Site.JP, '円');
siteMapMonetaryUnit.set(Site.KR, '원');
siteMapMonetaryUnit.set(Site.UK, '$');

/**
* 站点的导航条时区名字
*/
const siteMapAreaName = new Map<string, string>();
// 日本
siteMapAreaName.set(Site.JP, 'Tokyo');
// 韩国
siteMapAreaName.set(Site.KR, 'Seoul');
// GMT +n
siteMapAreaName.set(Site.UK, 'GMT');

/**
* 国家枚举
*/
enum CountriesEnum {
  /**
   * 日本
   */
  Japan = 'JP',
  /**
   * 澳大利亚
   */
  Australia = 'AU',
  /**
   * 加拿大
   */
  Canada = 'CA',
  /**
   * 爱尔兰
   */
  Ireland = 'IE',

  /**
   * 韩国
   */
  Korea = 'KR',
  /**
   * 马来西亚
   */
  Malaysia = 'MY',
  /**
   * 新西兰
   */
  NewZealand = 'NZ',
  /**
   * 新加坡
   */
  Singapore = 'SG',
  /**
   * 英国
   */
  UK = 'GB',
  /**
   * 其他国家
   */
  other = 'OTHER'
}

/**
* 国家对应的一些信息
*/
const countries = [
  {
      key: CountriesEnum.Japan,
      desc: '日本',
      navigatorLang: ['ja'],
      mobileAreaCode: '+81'
  },
  {
      key: CountriesEnum.Korea,
      desc: '韩国',
      navigatorLang: ['ko'],
      mobileAreaCode: '+82'
  },
  {
      key: CountriesEnum.Australia,
      desc: '澳大利亚',
      navigatorLang: ['en-AU', 'en'],
      mobileAreaCode: '+61'
  },
  {
      key: CountriesEnum.Canada,
      desc: '加拿大',
      navigatorLang: ['en-CA', 'fr-CA'],
      mobileAreaCode: '+1'
  },
  {
      key: CountriesEnum.Ireland,
      desc: '爱尔兰',
      navigatorLang: ['en-IE', 'en'],
      mobileAreaCode: '+353'
  },

  {
      key: CountriesEnum.Malaysia,
      desc: '马来西亚',
      navigatorLang: ['en-MY', 'en', 'ms-MY'],
      mobileAreaCode: '+60'
  },
  {
      key: CountriesEnum.NewZealand,
      desc: '新西兰',
      navigatorLang: ['en-NZ', 'en', 'zh-SG'],
      mobileAreaCode: '+64'
  },
  {
      key: CountriesEnum.Singapore,
      desc: '新加坡',
      navigatorLang: ['en-SG', 'zh-SG', 'en', 'zh'],
      mobileAreaCode: '+65'
  },
  {
      key: CountriesEnum.UK,
      desc: '英国',
      navigatorLang: ['en', 'en-GB'],
      mobileAreaCode: '+44'
  },
  {
      key: CountriesEnum.other,
      desc: '其他国家和地区',
      navigatorLang: ['*'],
      mobileAreaCode: ''
  }
];

/**
* 日本站点下的国家
*/
const japanStationCor2Country: string[] = [CountriesEnum.Japan];
/**
* 韩国站点下的国家
*/
const koreaStationCor2Country: string[] = [CountriesEnum.Korea];
/**
* 英国站点下的国家
*/
const ukStationCor2Country: string[] = [
  CountriesEnum.Australia,
  CountriesEnum.Canada,
  CountriesEnum.Ireland,
  CountriesEnum.Malaysia,
  CountriesEnum.NewZealand,
  CountriesEnum.Singapore,
  CountriesEnum.UK,
  CountriesEnum.other
];

/**
*  判断那个国家属于哪个
*/
const countryMapSite = new Map<string, Site>();
Object.keys(CountriesEnum).forEach((countryKey) => {
  const isJapanStationCountry = japanStationCor2Country.includes(countryKey);
  const isKoreaStationCountry = koreaStationCor2Country.includes(countryKey);
  const isUKStationCounyty = ukStationCor2Country.includes(countryKey);

  if (isJapanStationCountry) {
      countryMapSite.set(countryKey, Site.JP);
  }
  if (isKoreaStationCountry) {
      countryMapSite.set(countryKey, Site.KR);
  }
  if (isUKStationCounyty) {
      countryMapSite.set(countryKey, Site.UK);
  }
});

// 国家货币
const countryCurrency = new Map<string, string>();
countryCurrency.set(Site.JP, 'JPY');
countryCurrency.set(Site.KR, 'KRW');
countryCurrency.set(Site.UK, 'USD');

enum TermType {
  /** 利用规约 */
  utilize = 'utilize',
  /** 隐私权限 */
  privacy = 'privacy',
  /** 次转正提醒 */
  regular = 'regular',
  /** OEM条款 */
  oem = 'oem'
}

export {
  TermType,
  Site,
  siteMapMonetaryUnit,
  countries,
  countryMapSite,
  CountriesEnum,
  countryCurrency,
  japanStationCor2Country,
  koreaStationCor2Country,
  ukStationCor2Country,
  siteMapAreaName,
  simpleSite
};
