#!/usr/bin/env python3
# -*- coding: utf-8 -*-

' ResHelp implementing with Pillow and Aws '

import os
import sys
import logging
import configparser
if __name__ == '__main__':
    from ImageHelp.ImageHelpPillow import ImageHelpPillow
    from StorageHelp.StorageHelpAws import StorageHelpAws
    from ResHelpBase import ResHelpBase
else:
    from .ImageHelp.ImageHelpPillow import ImageHelpPillow
    from .StorageHelp.StorageHelpAws import StorageHelpAws
    from .ResHelpBase import ResHelpBase

__author__ = 'Ed Hsu'

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s %(levelname)s [%(filename)s-%(funcName)s()]'
    ' %(message)s',
    datefmt='%m-%d %H:%M')


class ResHelp(ResHelpBase):
    def __init__(self, credential):
        image_help = ImageHelpPillow()
        storage_help = StorageHelpAws(credential)
        super().__init__(image_help, storage_help)

    def resize_images(self, length, quality, src_dir, target_dir):
        os.makedirs(target_dir, exist_ok=True)
        for filename in os.listdir(src_dir):
            logging.debug('''filename:{}'''.format(filename))
            src_image = os.path.join(src_dir, filename)
            if os.path.isfile(src_image):
                target_image = os.path.join(target_dir, filename)
                self.myImageHelp.resize_by_long_side(
                    length, quality, src_image, target_image)

    def upload_images(self, bucket, src_dir, target_dir):
        if not os.path.exists(src_dir):
            logging.error('''src_dir {} is not exist'''.format(src_dir))
            return
        for filename in os.listdir(src_dir):
            src_image = os.path.join(src_dir, filename)
            if os.path.isfile(src_image):
                target_image = '{}/{}'.format(target_dir, filename)
                self.myStorageHelp.upload(bucket, src_image, target_image)


if __name__ == '__main__':

    credentialFile = os.path.join(os.path.dirname(__file__), 'credential.cfg')
    config = configparser.ConfigParser()
    config.read(credentialFile)
    # print(config.sections())
    dict_credential = {
        'aws_access_key_id': config['AWS_INFO']['AWS_ACCESS_KEY_ID'],
        'aws_secret_access_key': config['AWS_INFO']['AWS_SECRET_ACCESS_KEY']}
    myResHelp = ResHelp(dict_credential)
    srcDir = os.path.join(os.path.dirname(__file__), 'res')
    thumbnailDir = os.path.join(os.path.dirname(__file__), 'res', 'thumbnail')
    originDir = os.path.join(os.path.dirname(__file__), 'res', 'origin')
    myResHelp.resize_images(1920, 90, srcDir, originDir)
    myResHelp.resize_images(300, 100, srcDir, thumbnailDir)

    tourName = '20170529_二子坪'
    targetTnDir = 'resource/{}/thumbnail'.format(tourName)
    # myResHelp.upload_images(config['AWS_INFO']['AWS_BUCKET_HOME_PORTAL'],
    #                         thumbnailDir, targetTnDir)
    # targetOriginDir = 'resource/{}/origin'.format(tourName)
    # myResHelp.upload_images(config['AWS_INFO']['AWS_BUCKET_HOME_PORTAL'],
    #                         originDir, targetOriginDir)
