# Screenshot SDK exists test

import pytest
from screenshot_sdk import ScreenshotSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ScreenshotSDK.test(None, None)
        assert testsdk is not None
