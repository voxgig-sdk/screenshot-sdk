# Screenshot SDK utility: make_context
require_relative '../core/context'
module ScreenshotUtilities
  MakeContext = ->(ctxmap, basectx) {
    ScreenshotContext.new(ctxmap, basectx)
  }
end
