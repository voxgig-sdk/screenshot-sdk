# Screenshot SDK utility: make_context

from screenshot_sdk.core.context import ScreenshotContext


def make_context_util(ctxmap, basectx):
    return ScreenshotContext(ctxmap, basectx)
