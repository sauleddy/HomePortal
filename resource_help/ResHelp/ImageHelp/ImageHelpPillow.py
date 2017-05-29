#!/usr/bin/env python3
# -*- coding: utf-8 -*-

' ImageHelp implemented with Pillow '

import os
import sys
import logging
from .ImageHelpBase import ImageHelpBase
from PIL import Image

__author__ = 'Ed Hsu'

logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s %(levelname)s [%(filename)s-%(funcName)s()]'
                    ' %(message)s',
                    datefmt='%m-%d %H:%M')


class ImageHelpPillow(ImageHelpBase):
    def __init__(self):
        super().__init__()

    @classmethod
    def resize_by_long_side(cls, length, quality, src_img, target_img):
        logging.info('''
        srcFile:{}
        targetFile:{}
        length:{}'''.format(src_img, target_img, length))
        try:
            img = Image.open(src_img)
            width, height = img.size
            logging.info('''image size:{} X {}'''.format(width, height))
            new_size = cls.calculate_size((width, height), length)
            logging.info('''new image size:{} X {}'''.format(new_size[0], new_size[1]))
            # img.thumbnail((new_size[0], new_size[1]), Image.ANTIALIAS)
            img = img.resize((new_size[0], new_size[1]), Image.ANTIALIAS)
            img.save(target_img, quality=quality)
        except Exception as inst:
            logging.error('''Exception:{},{}'''.format(type(inst), inst))

if __name__ == '__main__':
    myImageHelp = ImageHelpPillow()
    # resDir = '{}{}{}'.format(os.path.dirname(__file__), os.sep, 'Images')
    resDir = os.path.join(os.path.dirname(__file__), 'images')
    srcFile = os.path.join(resDir, '1.jpg')
    targetFile = os.path.join(resDir, '1_output.jpg')
    myImageHelp.resize_by_long_side(300, 100, srcFile, targetFile)
