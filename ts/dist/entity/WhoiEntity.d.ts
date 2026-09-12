import { ScreenshotEntityBase } from '../ScreenshotEntityBase';
import type { ScreenshotSDK } from '../ScreenshotSDK';
import type { Control } from '../types';
import type { Whoi, WhoiListMatch } from '../ScreenshotTypes';
declare class WhoiEntity extends ScreenshotEntityBase<Whoi> {
    constructor(client: ScreenshotSDK, entopts: any);
    make(this: WhoiEntity): WhoiEntity;
    list(this: any, reqmatch?: WhoiListMatch, ctrl?: Control): Promise<WhoiEntity[]>;
}
export { WhoiEntity };
