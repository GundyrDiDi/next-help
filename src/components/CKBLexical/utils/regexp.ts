/*
 * @Author: shiguang
 * @Date: 2024-06-17 03:07:39
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-20 15:08:25
 * @Description: 
 */
// https://www.freecodecamp.org/chinese/news/how-to-validate-urls-in-javascript/
// export const REGEXP_URL = /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i
export const REGEXP_URL = /^(https?:\/\/)((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+,=-]*)?(\#[-a-z\d_]*)?$/i