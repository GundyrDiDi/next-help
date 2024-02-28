/*
 * @Author: shiguang
 * @Date: 2023-05-17 16:04:20
 * @LastEditors: shiguang
 * @LastEditTime: 2023-05-17 17:09:00
 * @Description: IconVIPLogo
 */

import { CSSProperties } from 'react';
interface IconVIPLogoProps {
    style?: CSSProperties;
}
const IconVIPLogo = (props: IconVIPLogoProps) => {
    const {
        style = {
            height: 12,
            width: 12
        }
    } = props;
    return (
        <img
            alt=""
            style={{
                display: 'block',
                ...style
            }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAAXNSR0IArs4c6QAABXBJREFUWEe9Vw1olWUUPs/5dt1MjQgdLtE7raVLw6ggDILEn+tu4TTdtCRJE9HMUhMTptudN9NsWaBbZmroUlyZf8HMTTGEgkqG01RMrbmh5U9FIBPn7j3xfu/3e+91G1fwsguX7/3e8z7nnOd5zjvQXXxaDpf0k1igQgghAt1GXLbdiv29LC+87la6YZHuxnO18zMzA70biOgxbwwRqg6OLZuebty0AbXUlU8U0O6kg4XibSI5j4QiV9MBlTag5kORN0hQmepQuS1Dg+HI6XsKqKV+xeNC0khEvqSE6K8b/0pwaHGk7Z4CUoddrIuUA1jugBJqjVO8KHdseW06YNSetFtmH3jxYOleAhdCR6oaMCYyL10wdw2oaf+ygZSJs0QIACCAb4KNvP6jll1KF5SZ15maOSFhYyQRHc+fXFkDkHQl4O+1JZ8BNJvApAGZ3w0DxkTmdmW/CKHlcHkxiQwT4GhwdFk9Tu2Y/Q4xV5DOkCD0Rf6UypmdBTy/d1F/DnQ7R8SZCoi9Xxkkx+L5A8LvXegsRnN9ZDMR3LOEFuPk9tlXwMhWdDIzZEhre3v2069svN5RwPPfLllHhDftyjgJmeDoy9xQ9NWO9rd8F3lQDKgzvDz+Eye2z7oEooe8ZSdBydWzZ9aMjHzfniro6W8W5HTLyLhAQHcTiIrJum0qPjNiIAwPjoueuhOolroVswTyecL6ZTRWz5jLzJW65m5QAL8K8NawKVVHEoOe3bPgI4AXqRbbgEwwzOar6jfD2JNbEH0pcW9TfTTfoPg6IRqVsKZ4O88s18nqGc8K814S9PG2gBkigl3CscXDijc2q3fPfTW/T9ww/iBQD5NzDn9cHlkxJI74Mw8XrP5F7bu2b0mvm1n3lQrjbRAFEsD8J4IXgmNLf3D6d6J6xj4hjE/khOYGWkG06krrzYq+vXqWgXip9dwisxaEw0MbJBt1g8IrQ00HS6aR8IcE5JjxVYst41LAhOhwcEzZaJ8PHd/62nICrdAZWzJWW1nzQreHLmgBcC9X5i4QP0gdg4HjAjxh88tps2UTJiDQB8HRZUt9gBq2Ti9gQq0T1FadzRM7gGUP5mZFZCtbyxidiplJsFYukZWgk5y/vRKXomAosssPaEtRH3DW1aSy+3hik9bPHW9VO91vYvG0mEHxGAYOLIg0JY2Ohi3TmgAO+kpvZpqCHzZP7HWLG26LPa33EN/LNS1sXMsNRbNtkvuGa8OWaV8L0WSTdvplq9xmf3yK8irM5phXcV5x6Pb5LMWpEpgO5I5bGU4J6Nimqe8SYbWPsO6MMkF5HD0lf+zq+tri4Z+77iQYHRR+vzR1hTZNHRUXOeRVgp/k7hBNVJTXIHWLFVcs40xomas4k0uFg15ctT8loCMfT3igZ4/AP9DycEZBklSdqiVL3mcbPtPUivS3laldqN+QwjWXUwJSD3/eMPk3AvJStY3ArQy6IjaBTWCGHo+KY6x8R2tFPzdNIYfAWXdw9Mt5hRX9vK6ddGP86dNJOwC87OWCVgM3Q+Ijnnx9p5NNZ9cLtd64bU52ZpZxTID+vhZqn9r/6IS1hZ0AmriQCGu9dxyrWgeemrXTUUNXwNjvnN45t5aYC/zcUbdAlA6Z9Em0Y0BVhc8J4ah2YEViR/IxMC03hBqJMsw/IsOJZRjub/OhkWG+IjCGC1MUxIbPCtRYEQkPLlp/oENARyqf75lF91+H5ybov3zp4ej6lH8MJKvNXrfnoXPVjfHttr6DEy6CKf/r+HH9+M0gmukqxpWwdzQkq8/v6IlGafqYJQiDUTOkuGpqYutTA1o7ojsCvSsIVEzg3t4BmlStrtqDc7OEspXdYF44tLjqRiKg/wGA81tMYCPm1QAAAABJRU5ErkJggg=="
        />
    );
};
export default IconVIPLogo;
