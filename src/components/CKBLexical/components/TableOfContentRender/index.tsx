/*
 * @Author: shiguang
 * @Date: 2024-05-28 10:04:40
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-28 10:39:02
 * @Description: 
 */

import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";



interface ContextValue{

}


const Context = createContext<[ContextValue|undefined, Dispatch<SetStateAction<ContextValue>>]>([undefined, () => {}]);

interface TableOfContentDataContextProps{
    children: ReactNode;

}

export const TableOfContentDataContext = (props: TableOfContentDataContextProps) => {
    const [contextValue, setContextValue] = useState<ContextValue>();
    const { children } = props;
    return <Context.Provider value={[contextValue, setContextValue]} >
        {children}
    </Context.Provider>
}

export const useTableOfContentData = () => {
    return useContext(Context);
}

export const useTableOfContentDataValue = () => {
    const [value] = useContext(Context);
    return value;
}

export const useSetTableOfContentData = () => {
    const [value, setState] = useContext(Context);
    return setState;
}

const TableOfContentRender = () => {
    const tableOfContentData = useTableOfContentDataValue()
    
    return (
        <div>
            {JSON.stringify(tableOfContentData)}
        </div>
    );
}

export default TableOfContentRender;