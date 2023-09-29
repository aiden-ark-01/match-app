export { default as users } from './users.json';
export { default as systems } from './systems.json';
export { default as platform } from './platform.json';
export { default as order } from './order.json';
export declare enum USERS {
    USERS_NOT_FOUND = 1000,
    USERS_OR_PASSWORD_ERROR = 1001,
    USERS_EXIST = 1002,
    USERS_DISABLED = 1003,
    USERS_DELETED = 1004,
    USERS_LOCKED = 1005,
    USERS_EXPIRED = 1006,
    USERS_LOGIN_EXPIRED = 1007,
    USERS_OFFLINE = 1008,
    USERS_NOT_LOGIN = 1009,
    USERS_NOT_PERMISSION = 1010,
    USERS_LOGIN_IP_ERROR = 1011,
    USERS_ROLE_ERROR = 1012
}
export declare enum SYSTEMS {
    SYSTEMS_PARAMETER_ERROR = 2000,
    SYSTEMS_ERROR = 2500
}
export declare enum PLATFORM {
    PLATFORM_EXIST = 3101,
    PLATFORM_NOT_EXIST = 3104
}
export declare enum ORDER {
    ORDER_NOT_EXIST = 4404,
    ORDER_STATUS_ERROR = 4501
}
