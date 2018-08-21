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
        <!--echo below image to diplay. currently hidden.-->
        <?php  Html::img('http://localhost/yash_consult_server/admin/backend/web/logo-yc1.png', ['class' => 'pull-left img-responsive']); ?>
        <p class="lead">You have successfully created your Yii-powered application.</p>

        <p><a class="btn btn-lg btn-success" href= "http://localhost/yash_consult_server/admin/backend/web/index.php/uploadcv/index">Manage Candidate's</a></p>

        <?php $model = new User();
        $role = Yii::$app->user->identity->role; 
        if($role==100){ ?>

         <p><a class="btn btn-lg btn-success" href= "http://localhost/yash_consult_server/admin/backend/web/index.php/user/index">Manage User's</a></p>

           <?php  }?>
    </div>

    <div class="body-content">
        
        <div class="row">
        <!--
            
            <div class="col-lg-4">
                <h2>Heading</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.</p>

                <p><a class="btn btn-default" href="http://localhost:8080/yash_consult/YC/admin/backend/web/index.php?r=uploadcv%2Findex">Yii Documentation &raquo;</a></p>
            </div>
            <div class="col-lg-4">
                <h2>Heading</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.</p>

                <p><a class="btn btn-default" href="http://www.yiiframework.com/forum/">Yii Forum &raquo;</a></p>
            </div>
            <div class="col-lg-4">
                <h2>Heading</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.</p>

                <p><a class="btn btn-default" href="http://www.yiiframework.com/extensions/">Yii Extensions &raquo;</a></p>
            </div>
        </div>
        -->
    </div>
</div>
