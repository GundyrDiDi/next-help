/*
 * @Author: shiguang
 * @Date: 2024-05-24 18:47:28
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-24 18:48:35
 * @Description: 
 */

import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import {useEffect} from 'react';

type Props = {
  defaultSelection?: 'rootStart' | 'rootEnd';
};

export function AutoFocusPlugin({defaultSelection}: Props): null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.focus(
      () => {
        // If we try and move selection to the same point with setBaseAndExtent, it won't
        // trigger a re-focus on the element. So in the case this occurs, we'll need to correct it.
        // Normally this is fine, Selection API !== Focus API, but fore the intents of the naming
        // of this plugin, which should preserve focus too.
        const activeElement = document.activeElement;
        const rootElement = editor.getRootElement() as HTMLDivElement;
        if (
          rootElement !== null &&
          (activeElement === null || !rootElement.contains(activeElement))
        ) {
          // Note: preventScroll won't work in Webkit.
          rootElement.focus({preventScroll: true});
        }
      },
      {defaultSelection},
    );
  }, [defaultSelection, editor]);

  return null;
}
