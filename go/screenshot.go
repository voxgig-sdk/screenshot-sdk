package voxgigscreenshotsdk

import (
	"github.com/voxgig-sdk/screenshot-sdk/go/core"
	"github.com/voxgig-sdk/screenshot-sdk/go/entity"
	"github.com/voxgig-sdk/screenshot-sdk/go/feature"
	_ "github.com/voxgig-sdk/screenshot-sdk/go/utility"
)

// Type aliases preserve external API.
type ScreenshotSDK = core.ScreenshotSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type ScreenshotEntity = core.ScreenshotEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type ScreenshotError = core.ScreenshotError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewDnsResultEntityFunc = func(client *core.ScreenshotSDK, entopts map[string]any) core.ScreenshotEntity {
		return entity.NewDnsResultEntity(client, entopts)
	}
	core.NewDomainEntityFunc = func(client *core.ScreenshotSDK, entopts map[string]any) core.ScreenshotEntity {
		return entity.NewDomainEntity(client, entopts)
	}
	core.NewEmailValidateEntityFunc = func(client *core.ScreenshotSDK, entopts map[string]any) core.ScreenshotEntity {
		return entity.NewEmailValidateEntity(client, entopts)
	}
	core.NewGenerateEntityFunc = func(client *core.ScreenshotSDK, entopts map[string]any) core.ScreenshotEntity {
		return entity.NewGenerateEntity(client, entopts)
	}
	core.NewGrammarEntityFunc = func(client *core.ScreenshotSDK, entopts map[string]any) core.ScreenshotEntity {
		return entity.NewGrammarEntity(client, entopts)
	}
	core.NewIpnEntityFunc = func(client *core.ScreenshotSDK, entopts map[string]any) core.ScreenshotEntity {
		return entity.NewIpnEntity(client, entopts)
	}
	core.NewRedactEntityFunc = func(client *core.ScreenshotSDK, entopts map[string]any) core.ScreenshotEntity {
		return entity.NewRedactEntity(client, entopts)
	}
	core.NewSslEntityFunc = func(client *core.ScreenshotSDK, entopts map[string]any) core.ScreenshotEntity {
		return entity.NewSslEntity(client, entopts)
	}
	core.NewUtilityEntityFunc = func(client *core.ScreenshotSDK, entopts map[string]any) core.ScreenshotEntity {
		return entity.NewUtilityEntity(client, entopts)
	}
	core.NewWhoiEntityFunc = func(client *core.ScreenshotSDK, entopts map[string]any) core.ScreenshotEntity {
		return entity.NewWhoiEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewScreenshotSDK = core.NewScreenshotSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewScreenshotSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *ScreenshotSDK  { return NewScreenshotSDK(nil) }
func Test() *ScreenshotSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
