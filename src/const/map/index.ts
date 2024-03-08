import { ENUM_SYSTEM_SOURCE } from '../enum';

export const MAP_SYSTEM_SOURCE = new Map([
    [
        ENUM_SYSTEM_SOURCE.D2C,
        {
            pathPrefix: '/d2c'
        }
    ],
    [
        ENUM_SYSTEM_SOURCE.B2B,
        {
            pathPrefix: '/b2b'
        }
    ]
]);

export {};
