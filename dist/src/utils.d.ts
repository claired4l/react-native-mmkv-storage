import { StorageOptions } from './types';
export declare function promisify(fn: Function): (...args: any) => Promise<unknown>;
/**
 * Accessible modes for iOS Keychain
 */
export declare const ACCESSIBLE: {
    WHEN_UNLOCKED: string;
    AFTER_FIRST_UNLOCK: string;
    ALWAYS: string;
    WHEN_PASSCODE_SET_THIS_DEVICE_ONLY: string;
    WHEN_UNLOCKED_THIS_DEVICE_ONLY: string;
    AFTER_FIRST_UNLOCK_THIS_DEVICE_ONLY: string;
    ALWAYS_THIS_DEVICE_ONLY: string;
};
/**
 * Processing modes for storage.
 */
export declare const MODES: {
    SINGLE_PROCESS: number;
    MULTI_PROCESS: number;
};
export declare const DATA_TYPES: Readonly<{
    STRING: number;
    NUMBER: number;
    BOOL: number;
    MAP: number;
    ARRAY: number;
}>;
/**
 * Information about all storage instances
 */
export declare const options: {
    [name: string]: StorageOptions;
};
export declare const stringToHex: (input: string) => string;
//# sourceMappingURL=utils.d.ts.map