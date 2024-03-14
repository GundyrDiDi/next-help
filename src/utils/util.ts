// 格式化文章阅读量
export function formatViewNum (num: number) {
  if (isNaN(num)) {
    return 0
  } else if (num > 10000) {
    return (num / 10000).toFixed(1) + 'W'
  } else {
    return num
  }
}

/**
 * 是不是URL
 * @param url 
 * @returns 
 */
export const isUrl = (url: string): boolean =>
  /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?/.test(url)
export const onlyHttps = (url: string): boolean => /(https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?/.test(
  url
)