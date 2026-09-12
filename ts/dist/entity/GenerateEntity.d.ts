import { ScreenshotEntityBase } from '../ScreenshotEntityBase';
import type { ScreenshotSDK } from '../ScreenshotSDK';
import type { Control } from '../types';
import type { Generate, GenerateLoadMatch } from '../ScreenshotTypes';
declare class GenerateEntity extends ScreenshotEntityBase<Generate> {
    constructor(client: ScreenshotSDK, entopts: any);
    make(this: GenerateEntity): GenerateEntity;
    load(this: any, reqmatch?: GenerateLoadMatch, ctrl?: Control): Promise<GenerateEntity>;
}
export { GenerateEntity };
