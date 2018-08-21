<?php

namespace backend\models;

use Yii;
use yii\web\UploadedFile;

/**
 * This is the model class for table "upload_cv".
 *
 * @property integer $id
 * @property string $name
 * @property string $created_by
 * @property string $modified_by
 * @property string $created_at
 * @property string $modified_at
 * @property string $email
 * @property string $mobile
 * @property string $reference
 * @property resource $cvpath
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
            [['cvpath'], 'file', 'skipOnEmpty' => true],
            [['name', 'email', 'mobile', 'reference'], 'required'],
            [['reference'], 'string'],
            [['name'], 'string', 'max' => 15],
            [['email'], 'string', 'max' => 50],
            [['mobile'], 'string', 'max' => 10],
            ['created_at', 'date', 'format' => 'yyyy-M-d H:m:s'],
            ['created_by', 'string', 'max' => 20],
            ['modified_at', 'date', 'format' => 'yyyy-M-d H:m:s'],
            ['modified_by', 'string', 'max' => 20],

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
            'created_by' => 'Created by',
            'created_at' => 'Created at',
            'modified_by' => 'Modified by',
            'modified_at' => 'Modified at',
            'cvpath' => 'cv path',
        ];
    }
}
