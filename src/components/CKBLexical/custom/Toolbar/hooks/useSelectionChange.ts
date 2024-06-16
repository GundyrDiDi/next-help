/*
 * @Author: shiguang
 * @Date: 2024-05-23 16:53:32
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-23 17:01:46
 * @Description: 
 */

import { COMMAND_PRIORITY_CRITICAL, LexicalEditor, SELECTION_CHANGE_COMMAND } from 'lexical';
import { useEffect, useRef } from 'react';

export const useSelectionChange = (activeEditor: LexicalEditor, $updateMenu?: (newEditor: LexicalEditor) => void) => {
    const $updateMenuRef = useRef($updateMenu);
    $updateMenuRef.current = $updateMenu;
    useEffect(() => {
        return activeEditor.registerCommand(
          SELECTION_CHANGE_COMMAND,
          (_payload, newEditor) => {
            $updateMenuRef.current?.(newEditor);
            return false;
          },
          COMMAND_PRIORITY_CRITICAL,
        );
      }, [activeEditor])
    return 
}
