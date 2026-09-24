
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ScreenshotSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = ScreenshotSDK.test()
    equal(testsdk instanceof ScreenshotSDK, true,
      'ScreenshotSDK.test() must return a client synchronously')
  })

})
