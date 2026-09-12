import { ScreenshotEntityBase } from '../ScreenshotEntityBase';
import type { ScreenshotSDK } from '../ScreenshotSDK';
import type { Control } from '../types';
import type { Grammar, GrammarCreateData } from '../ScreenshotTypes';
declare class GrammarEntity extends ScreenshotEntityBase<Grammar> {
    constructor(client: ScreenshotSDK, entopts: any);
    make(this: GrammarEntity): GrammarEntity;
    create(this: any, reqdata?: GrammarCreateData, ctrl?: Control): Promise<GrammarEntity>;
}
export { GrammarEntity };
