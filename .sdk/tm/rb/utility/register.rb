# Screenshot SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ScreenshotUtility.registrar = ->(u) {
  u.clean = ScreenshotUtilities::Clean
  u.done = ScreenshotUtilities::Done
  u.make_error = ScreenshotUtilities::MakeError
  u.feature_add = ScreenshotUtilities::FeatureAdd
  u.feature_hook = ScreenshotUtilities::FeatureHook
  u.feature_init = ScreenshotUtilities::FeatureInit
  u.fetcher = ScreenshotUtilities::Fetcher
  u.make_fetch_def = ScreenshotUtilities::MakeFetchDef
  u.make_context = ScreenshotUtilities::MakeContext
  u.make_options = ScreenshotUtilities::MakeOptions
  u.make_request = ScreenshotUtilities::MakeRequest
  u.make_response = ScreenshotUtilities::MakeResponse
  u.make_result = ScreenshotUtilities::MakeResult
  u.make_point = ScreenshotUtilities::MakePoint
  u.make_spec = ScreenshotUtilities::MakeSpec
  u.make_url = ScreenshotUtilities::MakeUrl
  u.param = ScreenshotUtilities::Param
  u.prepare_auth = ScreenshotUtilities::PrepareAuth
  u.prepare_body = ScreenshotUtilities::PrepareBody
  u.prepare_headers = ScreenshotUtilities::PrepareHeaders
  u.prepare_method = ScreenshotUtilities::PrepareMethod
  u.prepare_params = ScreenshotUtilities::PrepareParams
  u.prepare_path = ScreenshotUtilities::PreparePath
  u.prepare_query = ScreenshotUtilities::PrepareQuery
  u.result_basic = ScreenshotUtilities::ResultBasic
  u.result_body = ScreenshotUtilities::ResultBody
  u.result_headers = ScreenshotUtilities::ResultHeaders
  u.transform_request = ScreenshotUtilities::TransformRequest
  u.transform_response = ScreenshotUtilities::TransformResponse
}
