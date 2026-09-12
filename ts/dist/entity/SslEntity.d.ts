import { ScreenshotEntityBase } from '../ScreenshotEntityBase';
import type { ScreenshotSDK } from '../ScreenshotSDK';
import type { Control } from '../types';
import type { Ssl, SslListMatch } from '../ScreenshotTypes';
declare class SslEntity extends ScreenshotEntityBase<Ssl> {
    constructor(client: ScreenshotSDK, entopts: any);
    make(this: SslEntity): SslEntity;
    list(this: any, reqmatch?: SslListMatch, ctrl?: Control): Promise<SslEntity[]>;
}
export { SslEntity };
