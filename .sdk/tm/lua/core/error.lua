-- Screenshot SDK error

local ScreenshotError = {}
ScreenshotError.__index = ScreenshotError


function ScreenshotError.new(code, msg, ctx)
  local self = setmetatable({}, ScreenshotError)
  self.is_sdk_error = true
  self.sdk = "Screenshot"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ScreenshotError:error()
  return self.msg
end


function ScreenshotError:__tostring()
  return self.msg
end


return ScreenshotError
