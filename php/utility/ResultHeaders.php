<?php
declare(strict_types=1);

// Screenshot SDK utility: result_headers

class ScreenshotResultHeaders
{
    public static function call(ScreenshotContext $ctx): ?ScreenshotResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
