<?php
$params = array_merge(
    require(__DIR__ . '/../../common/config/params.php'),
    require(__DIR__ . '/../../common/config/params-local.php'),
    require(__DIR__ . '/params.php'),
    require(__DIR__ . '/params-local.php')
);

return [
    'id' => 'app-backend',
    'basePath' => dirname(__DIR__),
    'controllerNamespace' => 'backend\controllers',
    'bootstrap' => ['log'],
    'modules' => [],
    'components' => [
        'user' => [
            'identityClass' => 'common\models\User',
            'enableAutoLogin' => true,
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        
         'i18n' => [
        'translations' => [
            'app' => [
                'class' => 'yii\i18n\PhpMessageSource',
                'basePath' => '@app/messages',
            ],
            'kvgrid' => [
                'class' => 'yii\i18n\PhpMessageSource',
                'basePath' => '@app/messages',
            ],
        ],
    ],
        'urlManager' => [
            'class' => 'yii\web\UrlManager',
            'enablePrettyUrl'=>'false',
            'showScriptName'=>'true',
            'rules'=>[
                //'baseUrl' => 'yash_consult_server/admin',
                //'<controller>s' =>'<controller>/index',
                //'<controller>/<id:\d+>' =>'<controller>/view',
               // '<controller>/<id:\d+>' =>'<controller>/update',
            ]
        ]
    ],
    'params' => $params,
];
