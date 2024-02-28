/*
 * @Author: shiguang
 * @Date: 2023-04-28 11:50:07
 * @LastEditors: shiguang
 * @LastEditTime: 2023-07-08 16:43:32
 * @Description: validateCodeVersion
 */
import axios from 'axios';
import { debounce } from 'lodash';

export const validateCodeVersion = () => {
    const axiosV = axios.create({
        timeout: 3 * 60 * 1000,
        baseURL: ''
    });
    debounce(() => {
        const curVersion = window.curVersion ?? {};
        if (curVersion.time + 10 * 60 * 1000 < Date.now()) {
            //
        } else {
            // 1:client 2:system 3:wms
            axiosV
                .post('/customer/getClientVersion', { project: 2 })
                .then((res) => {
                    if (!curVersion.version) {
                        //
                    } else if (curVersion.version !== res?.data?.data) {
                        requestAnimationFrame(() => {
                            window.location.reload();
                        });
                    }
                    curVersion.version = res?.data?.data;
                    curVersion.time = Date.now();
                    window.curVersion = curVersion;
                });
        }
    }, 1000);
};
