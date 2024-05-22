/*
 * @Author: shiguang
 * @Date: 2024-05-22 11:29:34
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-22 11:31:12
 * @Description: 
 */


interface IconFlameProps extends React.SVGAttributes<SVGElement> {
    size?: number;
  }
  const IconFlame = (props: IconFlameProps) => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props} >
    <path d="M12 22C16.1173 22 19.4999 18.7371 19.4999 14.5491C19.4999 13.5209 19.4476 12.4187 18.8777 10.7058C18.3078 8.9929 18.193 8.7718 17.5904 7.71395C17.333 9.8727 15.9555 10.7724 15.6055 11.0413C15.6055 10.7615 14.7722 7.66795 13.5088 5.81695C12.2685 4 10.5817 2.80796 9.59265 2C9.59265 3.53489 9.16095 5.81695 8.5427 6.9797C7.92445 8.14245 7.80835 8.1848 7.0361 9.0501C6.2639 9.9154 5.90945 10.1826 5.2637 11.2325C4.61798 12.2825 4.5 13.6809 4.5 14.7091C4.5 18.8971 7.88265 22 12 22Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    </svg>);
    
  }

  export default IconFlame


