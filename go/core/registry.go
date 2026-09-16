package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewDnsResultEntityFunc func(client *ScreenshotSDK, entopts map[string]any) ScreenshotEntity

var NewDomainEntityFunc func(client *ScreenshotSDK, entopts map[string]any) ScreenshotEntity

var NewEmailValidateEntityFunc func(client *ScreenshotSDK, entopts map[string]any) ScreenshotEntity

var NewGenerateEntityFunc func(client *ScreenshotSDK, entopts map[string]any) ScreenshotEntity

var NewGrammarEntityFunc func(client *ScreenshotSDK, entopts map[string]any) ScreenshotEntity

var NewIpnEntityFunc func(client *ScreenshotSDK, entopts map[string]any) ScreenshotEntity

var NewRedactEntityFunc func(client *ScreenshotSDK, entopts map[string]any) ScreenshotEntity

var NewSslEntityFunc func(client *ScreenshotSDK, entopts map[string]any) ScreenshotEntity

var NewUtilityEntityFunc func(client *ScreenshotSDK, entopts map[string]any) ScreenshotEntity

var NewWhoiEntityFunc func(client *ScreenshotSDK, entopts map[string]any) ScreenshotEntity

