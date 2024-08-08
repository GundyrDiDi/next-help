/*
 * @Author: shiguang
 * @Date: 2024-05-20 16:18:53
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-20 18:27:01
 * @Description: 
 */

interface IconFileProps extends React.SVGAttributes<SVGElement> {
    size?: number;
  }
  const IconClose = (props: IconFileProps) => {
      return <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" {...props} >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.13807 0.195262C0.877722 -0.0650874 0.455612 -0.0650874 0.195262 0.195262C-0.0650874 0.455612 -0.0650874 0.877722 0.195262 1.13807L5.05719 6L0.195262 10.8619C-0.0650874 11.1223 -0.0650874 11.5444 0.195262 11.8047C0.455612 12.0651 0.877722 12.0651 1.13807 11.8047L6 6.94281L10.8619 11.8047C11.1223 12.0651 11.5444 12.0651 11.8047 11.8047C12.0651 11.5444 12.0651 11.1223 11.8047 10.8619L6.94281 6L11.8047 1.13807C12.0651 0.877722 12.0651 0.455612 11.8047 0.195262C11.5444 -0.0650874 11.1223 -0.0650874 10.8619 0.195262L6 5.05719L1.13807 0.195262Z" fill="black"/>
      </svg>
  }
  
  export default IconClose