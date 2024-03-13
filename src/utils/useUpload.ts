// 上传文件接口
import FileUtils from './useFileUtils'
import { api } from '@/service'

import {userInfo} from "./index"
import axios from 'axios'
const { getExtension } = FileUtils()
interface FAO {
  bizType: any
  file: any
  path: string // 文件路径 根据模块功能命名   形式：xxx/xxx/   覆盖路径举例：marketing/fileUpload/
  overwrite?: boolean // 是否覆盖 true 允许 false 禁止
  fileName?: string // 文件名称 覆盖文件用
  readAuto?: boolean // 前端是否可以直接拼接url读取
}

// 根据环境获取bucket名称
export const getBucketName = () => {
  // 预发和正式环境用
  return (process.env.NEXT_PUBLIC_ENV === 'prod' || process.env.NEXT_PUBLIC_ENV === 'pre') ? 'ckb-service-prod' : 'ckb-service-test'
}

// 获取随机文件名称
export const getRandomFileName = (params: FAO) => {
  const ext = getExtension(params.file.name)
  // timeId 后期改接口，目前用时间戳
  return params.overwrite ? params.fileName : `${params.path}${params.bizType}_${userInfo()?.customerId}_${new Date().getTime()}.${ext}`
}

export const uploadAliOSS = (params: FAO) => {
  return new Promise((resolve, reject) => {
    if (params.overwrite && !params.fileName) {
      reject(new Error('覆盖文件必须添加文件名【fileName】'))
      return
    }
    api.customer.oss.signAnother({
      bucketName: getBucketName(),
      path: params.path,
      type: params.overwrite ? 1 : 0
    }).then((res) => {
      const sign = res.data  as any;
      if (!sign) {
        reject(new Error('当前文件路径不允许覆盖文件'))
        return
      }
      const formData: any = new FormData()
      const key = getRandomFileName(params)
      formData.append('name', params.file.name)
      formData.append('Content-Disposition', params.file.name)
      formData.append('key', key)
      formData.append('policy', sign.policy)
      formData.append('OSSAccessKeyId', sign.accessId)
      formData.append('success_action_status', '200')
      formData.append('signature', sign.signature)
      formData.append('x-oss-object-acl', params.readAuto ? 'public-read' : 'private') // 读取权限
      formData.append('x-oss-forbid-overwrite', !!params.overwrite) // 是否允许覆盖
      formData.append('file', params.file) // 文件必须放在最后
      axios({
        method: 'post',
        url: sign.host,
        data: formData
      }).then((res:any) => {
        console.log(res)
        resolve({ url: `${sign.host}/${key}`, key })
      }).catch((error) => {
        reject(error)
      })
    })
  })
}

export const GOODS_IMAGE_SEARCH = `goods/imageSearch/${userInfo()?.customerId}/` // 图搜


export const upFileToAliOss = async (file:any) => {
  const res = await uploadAliOSS({
    file: file,
    path: GOODS_IMAGE_SEARCH,
    bizType: 'searchPic',
    readAuto: true
  })
  return res
}