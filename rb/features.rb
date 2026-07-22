# Screenshot SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ScreenshotFeatures
  def self.make_feature(name)
    case name
    when "base"
      ScreenshotBaseFeature.new
    when "test"
      ScreenshotTestFeature.new
    else
      ScreenshotBaseFeature.new
    end
  end
end
