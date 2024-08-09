/*
 * @Author: shiguang
 * @Date: 2024-05-20 16:18:53
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-20 16:20:32
 * @Description: 
 */

interface IconFileProps extends React.SVGAttributes<SVGElement> {
  size?: number;
}
const IconFile = (props: IconFileProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 30 22" fill="none" {...props} >
        <path d="M28.4604 2.90248H10.4512L9.39156 0.30245L1.53849 0.272461C0.208984 0.272461 0.208984 0.9722 0.208984 1.52399L0.222979 2.90348V20.397C0.222979 20.7498 0.363157 21.0882 0.612675 21.3378C0.862193 21.5873 1.20061 21.7275 1.55348 21.7275H28.4604C28.8133 21.7275 29.1517 21.5873 29.4013 21.3378C29.6508 21.0882 29.791 20.7498 29.791 20.397V4.23298C29.791 4.05826 29.7565 3.88525 29.6897 3.72382C29.6228 3.5624 29.5248 3.41572 29.4013 3.29218C29.2777 3.16863 29.131 3.07062 28.9696 3.00376C28.8082 2.93689 28.6352 2.90248 28.4604 2.90248Z" fill="white" />
    </svg>
}

export default IconFile