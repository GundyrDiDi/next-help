/*
 * @Author: shiguang
 * @Date: 2024-05-23 15:24:39
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-16 22:35:10
 * @Description: 
 */

import * as React from 'react';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

// import {DEFAULT_SETTINGS, INITIAL_SETTINGS} from '../appSettings';
import { DEFAULT_SETTINGS, INITIAL_SETTINGS, SettingName, Settings } from '../utils/settings';

// type SettingName

// SettingsContext

type SettingsContextShape = {
  setOption: <K extends keyof Settings>(name: K, value: Settings[K]) => void;
  settings: Settings;
};

/**
 * context 初始化
 */
const Context: React.Context<SettingsContextShape> = createContext({
  setOption: <K extends keyof Settings>(name: K, value: Settings[K]) => {
    return;
  },
  settings: INITIAL_SETTINGS,
});


/**
 * SettingsContext 组件
 * 动态修改 默认的就是初始化的， 可以通过 hooks 修改 setting
 */
export const SettingsContext = ({
  children,
  value
}: {
  children: ReactNode;
  value?: Partial<Settings>;
}): JSX.Element => {
  const [settings, setSettings] = useState({...INITIAL_SETTINGS, ...value});

  const setOption = useCallback(<K extends keyof Settings>(name: K, value: Settings[K]) => {
    setSettings((options) => ({
      ...options,
      [name]: value,
    }));
    // TODO ??
    // setURLParam(name, value);
  }, []);

  const contextValue = useMemo(() => {
    return {setOption, settings};
  }, [setOption, settings]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useSettings = (): SettingsContextShape => {
  return useContext(Context);
};

function setURLParam(param: SettingName, value: null | boolean) {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  if (value !== DEFAULT_SETTINGS[param]) {
    params.set(param, String(value));
  } else {
    params.delete(param);
  }
  url.search = params.toString();
  window.history.pushState(null, '', url.toString());
}
