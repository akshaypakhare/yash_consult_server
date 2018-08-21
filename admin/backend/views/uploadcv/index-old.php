<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel app\models\UploadcvSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = "List Of Candidates";
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="uploadcv-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>
    
 <!--  kept hidden
	<p>
        <?= Html::a('New Entry', ['create'], ['class' => 'btn btn-success']) ?>
    </p>-->
    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'name',
            'email:email',
            'mobile',
            'reference:ntext',
            /*
                        [
                   'label' => 'cvpath',
                   'format' => 'raw',
                   'value' => function ($model) {
                                 return Html::a($model->cvpath, ['@app', '/admin/region/view', 'id' => $model->id]);
                             },
            ],
            */
            //kept hidden
            ['class' => 'yii\grid\ActionColumn', 'template' => '{view}',],
        ],
    ]); ?>
</div>
