<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model backend\models\Uploadcv */

$this->title = 'Create Uploadcv';
$this->params['breadcrumbs'][] = ['label' => 'List Page', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="uploadcv-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
