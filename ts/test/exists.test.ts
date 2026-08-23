
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ScreenshotSDK } from '..'


describe('exists', async () => {

  // NOT async, and the assertion is deliberate.
  //
  // ScreenshotSDK.test() is synchronous — it returns the client, not a promise
  // — so the `await` here was a no-op. Worse, it hid the weakness of the
  // assertion: `null !== testsdk` is trivially true for ANY non-null value,
  // including the promise an `await` would have unwrapped. The test could not
  // have failed short of test() returning null.
  //
  // instanceof is the real check: it fails if test() ever starts returning a
  // promise, or anything other than a client.
  test('test-mode', () => {
    const testsdk = ScreenshotSDK.test()
    equal(testsdk instanceof ScreenshotSDK, true,
      'ScreenshotSDK.test() must return a client synchronously')
  })

})
