import { ScreenshotEntityBase } from '../ScreenshotEntityBase';
import type { ScreenshotSDK } from '../ScreenshotSDK';
import type { Control } from '../types';
import type { Domain, DomainListMatch } from '../ScreenshotTypes';
declare class DomainEntity extends ScreenshotEntityBase<Domain> {
    constructor(client: ScreenshotSDK, entopts: any);
    make(this: DomainEntity): DomainEntity;
    list(this: any, reqmatch?: DomainListMatch, ctrl?: Control): Promise<DomainEntity[]>;
}
export { DomainEntity };
