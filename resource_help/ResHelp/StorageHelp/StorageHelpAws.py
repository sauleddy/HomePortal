#!/usr/bin/env python3
# -*- coding: utf-8 -*-

' StorageHelp for AWS version '

import boto3
import logging
import os
import configparser
if __name__ == '__main__':
    from StorageHelpBase import StorageHelpBase
else:
    from .StorageHelpBase import StorageHelpBase


__author__ = 'Ed Hsu'


logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s %(levelname)s [%(filename)s-%(funcName)s()]'
    ' %(message)s',
    datefmt='%m-%d %H:%M')


class StorageHelpAws(StorageHelpBase):
    def __init__(self, credential):
        super().__init__(credential)

    def get_bucket_acl(self, bucket):
        client = self.__get_client()
        acl = client.get_bucket_acl(Bucket=bucket)
        logging.info('''bucket acl:{}'''.format(acl))

    def upload(self, bucket, src_file, target_file):
        logging.info('''
                bucket:{}
                src_file:{}
                target_file:{}'''.format(bucket, src_file, target_file))
        res = self.__get_resource()
        res.Bucket(bucket).upload_file(src_file, target_file, ExtraArgs={'ACL': 'public-read'})

    def __get_client(self):
        client = boto3.client(
            's3',
            aws_access_key_id=self.credential['aws_access_key_id'],
            aws_secret_access_key=self.credential['aws_secret_access_key']
        )
        return client

    def __get_resource(self):
        res = boto3.resource(
            's3',
            aws_access_key_id=self.credential['aws_access_key_id'],
            aws_secret_access_key=self.credential['aws_secret_access_key']
        )
        return res

if __name__ == '__main__':
    credentialFile = os.path.join(os.path.dirname(__file__), 'credential.cfg')
    config = configparser.ConfigParser()
    config.read(credentialFile)
    # print(config.sections())
    dict_credential = {
        'aws_access_key_id': config['AWS_INFO']['AWS_ACCESS_KEY_ID'],
        'aws_secret_access_key': config['AWS_INFO']['AWS_SECRET_ACCESS_KEY']}
    myStorageHelp = StorageHelpAws(dict_credential)
    bucket_name = config['AWS_INFO']['AWS_BUCKET_HOME_PORTAL']
    # myStorageHelp.get_bucket_acl(bucket_name)

    resDir = os.path.join(os.path.dirname(__file__), 'res')
    srcFile = os.path.join(resDir, '1.jpg')
    targetFile = 'test/{}'.format(os.path.basename(srcFile))
    myStorageHelp.upload(bucket_name, srcFile, targetFile)
