/*
 * @Author: shiguang
 * @Date: 2024-05-23 17:56:28
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-17 05:14:52
 * @Description: 
 */
import { Tooltip } from 'antd';
import { TooltipPropsWithTitle } from 'antd/es/tooltip';
interface TooltipWithMenuProps extends TooltipPropsWithTitle {
  isShowToolTip: boolean;
}
const TooltipWithMenu = (props: TooltipWithMenuProps) => {
  const { children, isShowToolTip, ...otherProps } = props;
  if (!isShowToolTip) return children;
  return <Tooltip {...otherProps} arrow={false} > {children} </Tooltip>

}

export default TooltipWithMenu;