import { ScreenshotEntityBase } from '../ScreenshotEntityBase';
import type { ScreenshotSDK } from '../ScreenshotSDK';
import type { Control } from '../types';
import type { Ipn, IpnLoadMatch } from '../ScreenshotTypes';
declare class IpnEntity extends ScreenshotEntityBase<Ipn> {
    constructor(client: ScreenshotSDK, entopts: any);
    make(this: IpnEntity): IpnEntity;
    load(this: any, reqmatch?: IpnLoadMatch, ctrl?: Control): Promise<IpnEntity>;
}
export { IpnEntity };
