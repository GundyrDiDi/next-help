
export default function FileUtils () {
  const imageExt = ['gif', 'jpg', 'jpeg', 'png']

  /**
   * 获取文件后缀
   */
  const getExtension = (value: string) => {
    if (typeof value === 'string') {
      const strList = value.split('.')
      const len = strList.length
      return strList[len - 1]
    } else {
      return ''
    }
  }

  /**
   * 判断是否excel后缀
   */
  const isExcelExt = (fileName: any) => {
    const ext = getExtension(fileName).toLowerCase()
    const result = ext === 'xls' || ext === 'xlsx'
    console.log('isExcelExt', fileName, ext, result)
    return result
  }

  /**
   * 判断是否excel文件类型
   */
  const isExcelFile = (fileType: string) => {
    console.log('>>>>>>>>>>>>fileType', fileType)
    // macOS 返回是空值
    if (!fileType) {
      return true
    }
    const result = fileType === 'application/vnd.ms-excel' ||
      fileType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    console.log('isExcelFile', fileType, result)
    return result
  }

  const isImageExt = (fileName: string) => {
    const ext = getExtension(fileName).toLowerCase()
    const filterList = imageExt.filter(item => item === ext)
    return filterList.length > 0
  }

  const isImageFile = (fileType: string | string[]) => {
    const result = fileType && fileType.indexOf('image/')
    console.log('isImageFile', result)
    return +result >= 0
  }

  const isMP3Ext = (fileName: string) => {
    const ext = getExtension(fileName).toLowerCase()
    return ext === 'mp3'
  }

  const isMP3File = (fileType: string | string[]) => {
    const result = fileType && fileType.indexOf('audio/mp3')
    return +result >= 0
  }

  return {
    getExtension,
    isExcelExt,
    isExcelFile,
    isImageExt,
    isImageFile,
    isMP3Ext,
    isMP3File
  }
}
