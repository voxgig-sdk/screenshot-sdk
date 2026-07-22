package core

type ScreenshotError struct {
	IsScreenshotError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewScreenshotError(code string, msg string, ctx *Context) *ScreenshotError {
	return &ScreenshotError{
		IsScreenshotError: true,
		Sdk:              "Screenshot",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ScreenshotError) Error() string {
	return e.Msg
}
