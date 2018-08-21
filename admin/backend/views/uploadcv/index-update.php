<?php

use yii\helpers\Html;
use yii\helpers\ArrayHelper;
use yii\grid\GridView;
use kartik\export\ExportMenu;
use backend\models\Uploadcv;

/* @var $this yii\web\View */
/* @var $searchModel app\models\UploadcvSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = "List Of Candidates";
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="uploadcv-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('New Entry', ['create'], ['class' => 'btn btn-success']) ?>
        <?= Html::a('Download All Resumes',['zip-download'],['class' => 'btn btn-primary']) ?>
    </p>
     
     <div id="export-report" class="pull-right">
    <?php
        $gridColumns = '';
        echo ExportMenu::widget([
        'dataProvider' => $dataProvider,
        'columns' => [
            'id',
            'name',
            'email',
            'mobile',
            'reference',
            //'envi',
            [
                    'attribute'=>'envi',
                   'label' => 'Created From',
                   'value' => function ($model) {
                                 return ($model->envi=='1')?'Backend':'Website';
                             },
            ],
            'created_by',
            'created_at',
            'modified_by',
            'modified_at',

            //['class' => 'yii\grid\ActionColumn'],
        ],
        'fontAwesome' => true,
        'initProvider' => true,
        'columnSelectorOptions'=>[
            'class' => 'btn btn-default'
        ],
        'dropdownOptions' => [
            'label' => 'Export',
            //'class' => 'btn btn-default'
            'class' => 'fa  btn btn-warning'

        ],
        'exportConfig' => [
            ExportMenu::FORMAT_TEXT => false,
            ExportMenu::FORMAT_HTML => false,
            ExportMenu::FORMAT_EXCEL_X => false,
           
        ],
        'target' => ExportMenu::TARGET_SELF,
        'filename' => 'resume-upload-report'. '_' . date("d-m-Y"),
        ]);
    ?>
    </div>




    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        //hide total count
        //'layout' => '{items}\n{pager}',
        //'summary' => '',
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

             [
                'attribute'=>'id',
                'label'=>'Candidate Id',
            ],
            'name',
            'email:email',
            'mobile',
            //'reference:ntext',
            //'envi',
             [
                    'attribute'=>'envi',
                   'label' => 'Created From',
                   'filter'=>array("0"=>"Website","1"=>"Backend"),
                   'value' => function ($model) {
                                 return ($model->envi=='1')?'Backend':'Website';
                             },
            ],
            'created_by',
            'created_at',
            'modified_by',
            'modified_at',
            /*

                        [
                   'label' => 'cvpath',
                   'format' => 'raw',
                   'value' => function ($model) {
                                 return Html::a($model->cvpath, ['@app', '/admin/region/view', 'id' => $model->id]);
                             },
            ],
            */
            //['class' => 'yii\grid\ActionColumn', 'template' => '{view}',],
            ['class' => 'yii\grid\ActionColumn',
            'template' => '{view} {update} {download} {delete}',
            'buttons' => [
            'download' => function ($url) {
            return Html::a(
                '<span class="glyphicon glyphicon-arrow-down"></span>',
                $url, 
                [
                    'title' => 'Download',
                    'data-pjax' => '0',
                ]
            );
        },
    ],
        ],
        ],
    ]); ?>
</div>
