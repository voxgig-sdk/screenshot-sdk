import { Context } from './Context';
declare class ScreenshotError extends Error {
    isScreenshotError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { ScreenshotError };
