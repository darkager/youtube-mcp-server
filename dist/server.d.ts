import { Server } from '@modelcontextprotocol/sdk/server/index.js';
export declare function startMcpServer(): Promise<Server<{
    method: string;
    params?: {
        [x: string]: unknown;
        _meta?: {
            [x: string]: unknown;
            progressToken?: string | number;
        };
    };
}, {
    method: string;
    params?: {
        [x: string]: unknown;
        _meta?: {
            [x: string]: unknown;
        };
    };
}, {
    [x: string]: unknown;
    _meta?: {
        [x: string]: unknown;
    };
}>>;
