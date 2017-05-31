#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import logging
import os
import sys
import configparser
import credential
from ResHelp.ResHelp import ResHelp

logging.basicConfig(
    level=logging.WARNING,
    format='%(asctime)s %(levelname)s [%(filename)s-%(funcName)s()]'
    ' %(message)s',
    datefmt='%m-%d %H:%M')

dict_credential = {
    'aws_access_key_id': credential.AWS_ACCESS_KEY_ID,
    'aws_secret_access_key': credential.AWS_SECRET_ACCESS_KEY}
myResHelp = ResHelp(dict_credential)
configFile = os.path.join(os.path.dirname(__file__), 'main.cfg')
config = configparser.ConfigParser()
config.read(configFile, encoding = 'utf8')
srcDir = config['MAIN']['IMAGES']
logging.info('''image_dir {}'''.format(srcDir))

if not os.path.exists(srcDir):
    logging.error('''image_dir {} is not exist'''.format(srcDir))
    sys.exit(0)

thumbnailDir = os.path.join(srcDir, 'thumbnail')
originDir = os.path.join(srcDir, 'origin')
myResHelp.resize_images(1920, 90, srcDir, originDir)
myResHelp.resize_images(300, 100, srcDir, thumbnailDir)
resourceKey = config['MAIN']['KEY']
targetTnDir = 'resource/{}/thumbnail'.format(resourceKey)
myResHelp.upload_images(credential.AWS_BUCKET_HOME_PORTAL,
                        thumbnailDir, targetTnDir)
targetOriginDir = 'resource/{}/origin'.format(resourceKey)
myResHelp.upload_images(credential.AWS_BUCKET_HOME_PORTAL,
                        originDir, targetOriginDir)

