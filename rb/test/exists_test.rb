# Screenshot SDK exists test

require "minitest/autorun"
require_relative "../Screenshot_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = ScreenshotSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
