#!/usr/bin/env python3
# -*- coding: utf-8 -*-

' ImageHelp implemented with Pillow '

import os
import logging
from PIL import Image
if __name__ == '__main__':
    from ImageHelpBase import ImageHelpBase
else:
    from .ImageHelpBase import ImageHelpBase

__author__ = 'Ed Hsu'

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s %(levelname)s [%(filename)s-%(funcName)s()]'
    ' %(message)s',
    datefmt='%m-%d %H:%M')


class ImageHelpPillow(ImageHelpBase):
    def __init__(self):
        super().__init__()

    @classmethod
    def resize_by_long_side(cls, length, quality, src_img, target_img):
        logging.debug('''
        srcFile:{}
        targetFile:{}
        length:{}'''.format(src_img, target_img, length))
        try:
            img = Image.open(src_img)
            width, height = img.size
            logging.debug('''image size:{} X {}'''.format(width, height))
            new_size = cls.calculate_size((width, height), length)
            logging.debug(
                '''new image size:{} X {}'''.format(
                    new_size[0], new_size[1]))
            # img.thumbnail((new_size[0], new_size[1]), Image.ANTIALIAS)
            img = img.resize((new_size[0], new_size[1]), Image.ANTIALIAS)
            img.save(target_img, quality=quality)
        except Exception as inst:
            logging.error('''Exception:{},{}'''.format(type(inst), inst))


if __name__ == '__main__':
    myImageHelp = ImageHelpPillow()
    # resDir = '{}{}{}'.format(os.path.dirname(__file__), os.sep, 'res')
    resDir = os.path.join(os.path.dirname(__file__), 'res')
    srcFile = os.path.join(resDir, '1.jpg')
    targetFile = os.path.join(resDir, '1_output.jpg')
    myImageHelp.resize_by_long_side(300, 100, srcFile, targetFile)
