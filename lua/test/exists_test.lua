-- Screenshot SDK exists test

local sdk = require("screenshot_sdk")

describe("ScreenshotSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
