import { ScreenshotEntityBase } from '../ScreenshotEntityBase';
import type { ScreenshotSDK } from '../ScreenshotSDK';
import type { Control } from '../types';
import type { Redact, RedactCreateData } from '../ScreenshotTypes';
declare class RedactEntity extends ScreenshotEntityBase<Redact> {
    constructor(client: ScreenshotSDK, entopts: any);
    make(this: RedactEntity): RedactEntity;
    create(this: any, reqdata?: RedactCreateData, ctrl?: Control): Promise<RedactEntity>;
}
export { RedactEntity };
