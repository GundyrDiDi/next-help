/*
 * @Author: shiguang
 * @Date: 2024-05-23 15:14:53
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-23 15:14:57
 * @Description: 
 */

import type {HistoryState} from '@lexical/react/LexicalHistoryPlugin';

import {createEmptyHistoryState} from '@lexical/react/LexicalHistoryPlugin';
import * as React from 'react';
import {createContext, ReactNode, useContext, useMemo} from 'react';

type ContextShape = {
  historyState?: HistoryState;
};

const Context: React.Context<ContextShape> = createContext({});

export const SharedHistoryContext = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const historyContext = useMemo(
    () => ({historyState: createEmptyHistoryState()}),
    [],
  );
  return <Context.Provider value={historyContext}>{children}</Context.Provider>;
};

export const useSharedHistoryContext = (): ContextShape => {
  return useContext(Context);
};
