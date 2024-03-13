import { resolve } from "path"

/**
 * file转化base64
 * @param file
 * @returns
 */
export const transImgToBase64 = (file: File): Promise<{data:string|null}> => {
  return new Promise((resolve, reject) => {
    let canvas
    const URL = window.URL || window.webkitURL
    const blob = URL.createObjectURL(file)
    const img = new Image()
    img.src = blob
    img.onload = function () {
      const that = this as any
      const rate = file.size > 200 * 1024 ? 0.7 : 1

      const w = that.width * rate
      const h = that.height * rate
      // 生成canvas
      canvas = document.createElement('canvas')
      canvas.width = w
      canvas.height = h
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
      ctx.drawImage(that, 0, 0, w, h)
      const base64 = canvas.toDataURL('image/jpeg', rate)
      resolve({  data: base64 })
    }
    img.onerror = () => {
      resolve({ data:null})
    }
  })
}

export const  isImage=(file:File)=> {
  return file.type.startsWith('image/');
}
export const isImgUrl = (name: string) => /\.(jpg|png|jpeg|webp|gif|bmp)/.test(name)