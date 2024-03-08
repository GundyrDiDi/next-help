export type GetKeyByMap<M extends Map<any, any>> = M extends Map<infer K, any>
    ? K
    : unknown;
export type GetValueByMap<M extends Map<any, any>> = M extends Map<any, infer V>
    ? V
    : unknown;
export type GetPromiseValue<T extends Promise<any>> = T extends Promise<infer V>
    ? V
    : unknown;
export type AsyncReturnType<T extends (...params: any) => Promise<any>> =
    T extends (...params: any) => Promise<infer V> ? V : unknown;



