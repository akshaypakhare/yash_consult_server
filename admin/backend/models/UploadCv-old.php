<?php

namespace backend\models;

use Yii;
use yii\web\UploadedFile;

/**
 * This is the model class for table "upload_cv".
 *
 * @property integer $id
 * @property string $name
 * @property string $email
 * @property string $mobile
 * @property string $reference
 * @property resource $cvfile
 */
class UploadCv extends \yii\db\ActiveRecord
{
    public $cvfile;
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'upload_cv';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['cvfile'], 'file', 'skipOnEmpty' => true],
            [['name', 'email', 'mobile', 'reference'], 'required'],
            [['reference'], 'string'],
            [['name'], 'string', 'max' => 15],
            [['email'], 'string', 'max' => 50],
            [['mobile'], 'string', 'max' => 10],
        ];
    }


    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'email' => 'Email',
            'mobile' => 'Mobile',
            'reference' => 'Reference',
            'cvfile' => 'cvfile',
        ];
    }
}
