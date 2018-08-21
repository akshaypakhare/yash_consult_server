<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\web\UploadedFile;
use kartik\file\FileInput;
use backend\models\Uploadcv;

//use kartik\widgets\FileInput;

/* @var $this yii\web\View */
/* @var $model app\models\Uploadcv */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="uploadcv-form">

    <?php $form = ActiveForm::begin(['options' => ['enctype' => 'multipart/form-data']]); ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'email')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'mobile')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'reference')->textarea(['rows' => 6]) ?>
    <div id='field'>
      <?= $form->field($model, 'cvfile')->widget(FileInput::classname(), [
        'options'=>[
            'accept'=>'file/*',
            'multiple'=>true
        ],
        'pluginOptions' => [
            'allowedFileExtensions'=>['doc','docx','pdf'],
            'initialPreview'=>[
                $model->cvfile ? Html::file('public_html/uploads/', ['class'=>'file-preview-image']) : null,
            ],
            'previewFileType' => 'image',
            'showUpload'=>false,
            'showRemove'=>false,
            'initialCaption'=>$model->cvfile,
            'overwriteInitial'=>true,
        ]
      ]);
      ?>

    </div>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
