<?php

/* @var $this yii\web\View */
use common\models\User;
use common\models\UserSearch;
use yii\helpers\Html;

$this->title = 'My Yii Application';
?>
<div class="site-index">

    <div class="jumbotron">
        <h1>Yash Consult!</h1>
        <?php  Html::img('http://yashconsult.com/admin/backend/web/logo-yc1.png', ['class' => 'pull-left img-responsive']); ?>
        <p class="lead">You have successfully created your Yii-powered application.</p>

        <p><a class="btn btn-lg btn-success" href= "http://yashconsult.com/admin/backend/web/index.php?r=uploadcv/index">Manage Candidate's</a></p>

        <?php $model = new User();
        $role = Yii::$app->user->identity->role; 
        if($role==100){ ?>

         <p><a class="btn btn-lg btn-success" href= "http://yashconsult.com/admin/backend/web/index.php?r=user/index">Manage User's</a></p>

           <?php  }?>
    </div>

    <div class="body-content">
        
        <div class="row">
        
    </div>
</div>
