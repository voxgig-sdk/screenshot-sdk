# Screenshot SDK feature factory

from screenshot_sdk.feature.base_feature import ScreenshotBaseFeature
from screenshot_sdk.feature.ratelimit_feature import ScreenshotRatelimitFeature
from screenshot_sdk.feature.retry_feature import ScreenshotRetryFeature
from screenshot_sdk.feature.test_feature import ScreenshotTestFeature
from screenshot_sdk.feature.timeout_feature import ScreenshotTimeoutFeature


_FEATURES = {
    "base": lambda: ScreenshotBaseFeature(),
    "ratelimit": lambda: ScreenshotRatelimitFeature(),
    "retry": lambda: ScreenshotRetryFeature(),
    "test": lambda: ScreenshotTestFeature(),
    "timeout": lambda: ScreenshotTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
