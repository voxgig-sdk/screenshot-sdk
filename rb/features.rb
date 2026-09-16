# Screenshot SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ScreenshotFeatures
  def self.make_feature(name)
    case name
    when "base"
      ScreenshotBaseFeature.new
    when "ratelimit"
      ScreenshotRatelimitFeature.new
    when "retry"
      ScreenshotRetryFeature.new
    when "test"
      ScreenshotTestFeature.new
    when "timeout"
      ScreenshotTimeoutFeature.new
    else
      ScreenshotBaseFeature.new
    end
  end
end
