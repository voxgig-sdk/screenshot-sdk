
import { Context } from './Context'


class ScreenshotError extends Error {

  isScreenshotError = true

  sdk = 'Screenshot'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  ScreenshotError
}

