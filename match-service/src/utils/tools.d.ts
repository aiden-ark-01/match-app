import { Repository } from 'typeorm';
export declare const getFilterData: (data: Record<string, any>, key?: string, fn?: (data: any) => any) => Record<string, any>;
export declare const getBetweenData: (data: Record<string, any>, key: string) => void;
export declare const generateRandomString: (length: number, useLetters?: boolean) => string;
type FindAllTypes = <T>(params: {
    page: number;
    pageSize: number;
    repository: Repository<T>;
    filter: any;
    buildSelect: string;
    selectList: string[];
    atKey?: string;
}) => Promise<{
    total: number;
    data: T[];
    page: number;
    pageSize: number;
}>;
export declare const findAll: FindAllTypes;
export declare const formatBankCard: (bankCard: string) => string;
type MergeTablesParams = <T>(params: {
    page: number;
    pageSize: number;
    repositorys: any[];
    filter: Record<string, any>;
    buildSelect: string[];
    selectList: Array<[string, string]>;
    searchKey: string;
    atKey?: string;
    addWhere?: (queryBuilder: any) => void;
}) => Promise<{
    total: number;
    data: T[];
    page: number;
    pageSize: number;
}>;
export declare const mergeAndSortTables: MergeTablesParams;
export {};
