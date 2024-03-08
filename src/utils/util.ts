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