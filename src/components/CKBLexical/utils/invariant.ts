/*
 * @Author: shiguang
 * @Date: 2024-05-23 15:19:19
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-23 15:19:23
 * @Description: 
 */
export default function invariant(
    cond?: boolean,
    message?: string,
    ...args: string[]
  ): asserts cond {
    if (cond) {
      return;
    }
  
    throw new Error(
      'Internal Lexical error: invariant() is meant to be replaced at compile ' +
        'time. There is no runtime version. Error: ' +
        message,
    );
  }
  