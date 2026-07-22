<?php
declare(strict_types=1);

// Screenshot SDK utility: prepare_body

class ScreenshotPrepareBody
{
    public static function call(ScreenshotContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
