<?php
declare(strict_types=1);

// Screenshot SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class ScreenshotFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new ScreenshotBaseFeature();
            case "test":
                return new ScreenshotTestFeature();
            default:
                return new ScreenshotBaseFeature();
        }
    }
}
