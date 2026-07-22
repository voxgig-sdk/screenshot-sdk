
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ScreenshotSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await ScreenshotSDK.test()
    equal(null !== testsdk, true)
  })

})
