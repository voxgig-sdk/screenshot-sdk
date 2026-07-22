# Screenshot SDK feature factory

from feature.base_feature import ScreenshotBaseFeature
from feature.test_feature import ScreenshotTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ScreenshotBaseFeature(),
        "test": lambda: ScreenshotTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
