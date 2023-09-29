export declare const isJSON: (str: string) => boolean;
export declare const nest_match_encrypt_key: string, auth: string;
export declare const encrypt: (word: Record<string, unknown>) => string;
export declare const decrypt: (word: string) => Record<string, any> | string;
export declare function hashString(data: Record<string, any>): string;
export declare const jsonSort: (json: Record<string, unknown>) => string;
export declare const businessEncrypt: (word: Record<string, unknown> | string, m_key: string) => string;
export declare const businessDecrypt: (word: string, m_key: string) => Record<string, any> | string;
