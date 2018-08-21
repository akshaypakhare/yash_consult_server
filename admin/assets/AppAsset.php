<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace backend\assets;

use yii\web\AssetBundle;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{   
    public $sourcePath = 'C:/wamp/www/yash_consult_server/admin/backend/web'
    public $basePath = 'C:/wamp/www/yash_consult_server/admin/backend/web';
    public $baseUrl = '/yash_consult_server/admin/backend/web';
    public $css = [
        //'css/site.css',
        //'css/style.css',
        'css/style_yc.css',
            ];
    public $js = [
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}
