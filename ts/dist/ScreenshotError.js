"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenshotError = void 0;
class ScreenshotError extends Error {
    isScreenshotError = true;
    sdk = 'Screenshot';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.ScreenshotError = ScreenshotError;
//# sourceMappingURL=ScreenshotError.js.map