<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model app\models\Uploadcv */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => 'List Page', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="uploadcv-view">

    <h1><?= Html::encode($this->title) ?></h1>
    <p>
        <?= Html::a('Update', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>

        <?php
            //button to download CV
            if($model->cvpath){
                $file = $model->cvpath;
            ?>
                <a href="http://yashconsult.com/admin/backend/web/uploads/<?php echo $file?>" class = 'btn btn-primary'>View CV</a>
            <?php
                }else{
                    $file = 'No file';
                }
            ?>

             <!--   Button to download resumes -->
               <?= Html::a('*Download CV', ['/uploadcv/download', 'id' => $model->id], ['class'=>'btn btn-primary'])?>
    </p>
    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            [
                'attribute'=>'id',
                'label'=>'Candidate Id'
                ],
            'name',
            'email:email',
            'mobile',
            'reference:ntext',
            [
            'label'  => 'Created From',
            'value'  => ($model->envi=='1')?'Backend':'Website',
            ],
            'created_by',
            'created_at',
            'modified_by',
            'modified_at',
        ],
    ]) ?>

</div>
