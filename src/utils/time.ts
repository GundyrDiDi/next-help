import { atomCustomerDetail } from '@/model/CustomerDetail'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { useAtom,getDefaultStore } from 'jotai'
import { isEN } from './language'

dayjs.extend(customParseFormat)

export const setStationTime = (time: any, format?: any) => {
  if (time && time !== '-') {
    const defferZone = getDefferTime()
    return dayjs(time).add(defferZone, 'hour').format(format || 'YYYY-MM-DD HH:mm:ss')
  }
  return '-'
}


// 获取用户信息
export const getUserFn=()=>{
  return getDefaultStore().get(atomCustomerDetail)
}


// 服务器差额时间
export const getDefferTime = () => {
  // 日本站韩国站默认为1
  if (!isEN()) return 1
  const user = getUserFn()
  // 目前服务器时间为+8东八区时间，根据用户所在地的时区加减时间
  const defaultZone = 8
  const customerUtcTimeZone = user?.utcTimeZone ? Number(user?.utcTimeZone?.replace('UTC', '')) : (0 - new Date().getTimezoneOffset() / 60)
  const defferZone = customerUtcTimeZone - defaultZone
  return defferZone
}

