/*
 * @Author: shiguang
 * @Date: 2023-07-07 17:51:31
 * @LastEditors: shiguang
 * @LastEditTime: 2023-07-08 16:44:07
 * @Description: useInterceptorOtherSystemUrl
 */
import { useNavigation } from 'react-router-dom';

const useInterceptorOtherSystemUrl = () => {
    const { location } = useNavigation();
};
export default useInterceptorOtherSystemUrl;
