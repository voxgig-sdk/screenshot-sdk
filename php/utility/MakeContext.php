<?php
declare(strict_types=1);

// Screenshot SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ScreenshotMakeContext
{
    public static function call(array $ctxmap, ?ScreenshotContext $basectx): ScreenshotContext
    {
        return new ScreenshotContext($ctxmap, $basectx);
    }
}
