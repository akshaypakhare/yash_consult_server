<?php

namespace backend\controllers;

use Yii;
use yii\filters\AccessControl;
use backend\models\UploadCv;
use backend\models\UploadcvSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\UploadedFile;
//use yii\controllers\ZipArchive;
/**
 * UploadcvController implements the CRUD actions for Uploadcv model.
 */
class UploadcvController extends Controller
{
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'access' => [
                    'class' => AccessControl::className(),
                    'rules' => [
                        [
                            'actions' => ['login', 'error'],
                            'allow' => true,
                        ],
                        [
                            'actions' => ['logout', 'index', 'view', 'delete', 'create', 'update', 'download', 'test' ],
                            'allow' => true,
                            'roles' => ['@'],
                        ],
                    ],
                ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    /**
     * Lists all Uploadcv models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new UploadcvSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Uploadcv model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new Uploadcv model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Uploadcv();
        $username = Yii::$app->user->identity->username; 
        $model->created_by=$username;
        
        if ($model->load(Yii::$app->request->post())) {
                $model->cvfile = UploadedFile::getInstance($model, 'cvfile');
                if ($model->validate()) {                
                    $model->cvfile->saveAs('uploads/' . $model->cvfile->baseName . '.' . $model->cvfile->extension);
                    $model->cvpath=$model->cvfile->baseName . '.' . $model->cvfile->extension;
                }
                date_default_timezone_set("Asia/Kolkata");
                $model->created_at=date("Y-m-d H:i:s");
                $model->envi='1';
                
                 if ($model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }
         } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Updates an existing Uploadcv model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id)
   {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post())) {
         $model->cvfile = UploadedFile::getInstance($model, 'cvfile');

            if ($model->cvfile && $model->validate()){                
                    $model->cvfile->saveAs('uploads/' . $model->cvfile->baseName . '.' . $model->cvfile->extension);
                     $model->cvpath=$model->cvfile->baseName . '.' . $model->cvfile->extension;
                }
                $username = Yii::$app->user->identity->username;
                date_default_timezone_set("Asia/Kolkata");
                $model->modified_by=$username;
                $model->modified_at=date("Y-m-d H:i:s");
                 if ($model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
            }
         } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Deletes an existing Uploadcv model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    public function actionDownload($id) 
    { 
        $model = Uploadcv::findOne($id); 
       // $path = Yii::getAlias('@webroot').'/uploads/'.$download->cvpath;
        if(!empty($model->cvpath)){
            if (file_exists(Yii::getAlias('@webroot').'/uploads/'.$model->cvpath)){
                     //\Yii::$app->session->setFlash('success', 'Resume is downloaded.');
                 return Yii::$app->response->sendFile(Yii::getAlias('@webroot').'/uploads/'.$model->cvpath);
                }else{
                    \Yii::$app->session->setFlash('error', 'File not found! Kindly request candidate to upload Resume.');
                    return $this->redirect(['view', 'id' => $model->id]);
                }
             }else{
                    \Yii::$app->session->setFlash('error', 'File not found! Kindly request candidate to upload Resume.');
                    return $this->redirect(['view', 'id' => $model->id]);
             }
    }

    public function actionTest()
    {
                $rootPath = realpath('uploads/');

                // Initialize archive object
                $zip = new \ZipArchive();
                $zip->open('../web/Region.zip', \ZipArchive::CREATE );

                // Initialize empty "delete list"
                //$filesToDelete = array();

                // Create recursive directory iterator
                /** @var SplFileInfo[] $files */
                $files = new \RecursiveIteratorIterator(
                    new \RecursiveDirectoryIterator($rootPath),
                    \RecursiveIteratorIterator::LEAVES_ONLY
                );

                foreach ($files as $name => $file)
                {
                    // Skip directories (they would be added automatically)
                    if (!$file->isDir())
                    {
                        // Get real and relative path for current file
                        $filePath = $file->getRealPath();
                        $relativePath = substr($filePath, strlen($rootPath) + 1);

                        // Add current file to archive
                        $zip->addFile($filePath, $relativePath);

                        // Add current file to "delete list"
                        // delete it later cause ZipArchive create archive only after calling close function and ZipArchive lock files until archive created)
                        /*if ($file->getFilename() != 'important.txt')
                        {
                            $filesToDelete[] = $filePath;
                        }*/
                    }
                }

                // Zip archive will be created only after closing object
                //ref link =https://stackoverflow.com/questions/41299967/zip-download-issue-in-php;
                $zip->close();

                $zipfile='../web/Region.zip';
                if (headers_sent()) {
                    echo 'HTTP header already sent';
                } else {
                    if (!is_file($zipfile)) {
                        header($_SERVER['SERVER_PROTOCOL'].' 404 Not Found');
                        echo 'File not found';
                    } else if (!is_readable($zipfile)) {
                        header($_SERVER['SERVER_PROTOCOL'].' 403 Forbidden');
                        echo 'File not readable';
                    } else {
                        header($_SERVER['SERVER_PROTOCOL'].' 200 OK');
                        header("Content-Type: application/zip");
                        header("Content-Transfer-Encoding: Binary");
                        header("Content-Length: ".filesize($zipfile));
                        header("Content-Disposition: attachment; filename=\"".basename($zipfile)."\"");
                        readfile($zipfile);
                        // Delete all files from "delete list"
                        unlink($zipfile);
                        exit;                        
                    }
                }

        }

    /**
     * Finds the Uploadcv model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Uploadcv the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Uploadcv::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}
