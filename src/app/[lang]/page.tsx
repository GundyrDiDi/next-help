/*
 * @Author: shiguang
 * @Date: 2024-04-25 11:55:19
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-16 20:06:24
 * @Description: 
 */
'use server'
import React from 'react';
import HelpPage, { generateMetadataAaa as helpGenerateMetadata } from './(help)/PageContent';
// import MediaPage from './(media)/PageContent';
import MediaPage from './(media)/newxx/page';
import { createSwitchGenerateMetadata, createSwitchPageComponent } from '@/utils/server/mergePage';

// const MergePageComponentWithAsync = (getServerComponent: () => Promise<React.FC>) => {
//     return async (props: any) => {
//         const ServerComponent = await getServerComponent()
//         return <ServerComponent {...props} />;
//     }
// }


export const generateMetadata = createSwitchGenerateMetadata({
    // helpCenter: helpGenerateMetadata,
    helpCenter: () => helpGenerateMetadata,
    media: () => undefined as any
})


export default createSwitchPageComponent({
    helpCenter: () => HelpPage,
    media: () => MediaPage,
})


// const getServerComponent1 = switchDifferentHost({
//     helpCenter: () => HelpPage,
//     media: () => MediaPage,
// }).bind(null)

// export default MergePageComponentWithAsync(getServerComponent1)

// export default MergePageComponentWithAsync(() => switchDifferentHost({
//     helpCenter: () => HelpPage,
//     media: () => MediaPage,
// }))