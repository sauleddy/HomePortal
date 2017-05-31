#!/usr/bin/env python3
# -*- coding: utf-8 -*-

' ResHelp implementing with Pillow and Aws '

import os
import sys
import logging
from ResHelpBase import ResHelpBase
from ImageHelp.ImageHelpPillow import ImageHelpPillow
from StorageHelp.StorageHelpAws import StorageHelpAws

__author__ = 'Ed Hsu'


class ResHelp(ResHelpBase):
    def __init__(self, image_help, storage_help):
        super().__init__(image_help, storage_help)

    def resize_images(self, length, quality, src_dir, target_dir):
        os.makedirs(target_dir, exist_ok=True)
        for filename in os.listdir(src_dir):
            logging.info('''filename:{}'''.format(filename))
            src_image = os.path.join(src_dir, filename)
            target_image = os.path.join(target_dir, filename)
            self.myImageHelp.resize_by_long_side(length, quality, src_image, target_image)

    def upload_images(self, src_dir, target_dir):
        pass


if __name__ == '__main__':
    myImageHelp = ImageHelpPillow()
    myStorageHelp = StorageHelpAws()
    myResHelp = ResHelp(myImageHelp, myStorageHelp)
    srcDir = os.path.join(os.path.dirname(__file__), 'res')
    thumbnailDir = os.path.join(os.path.dirname(__file__), 'res', 'thumbnail')
    originDir = os.path.join(os.path.dirname(__file__), 'res', 'origin')
    # myResHelp.resize_images(1920, 90, srcDir, originDir)
    # myResHelp.resize_images(300, 100, srcDir, thumbnailDir)
