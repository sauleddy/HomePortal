#!/usr/bin/env python3
# -*- coding: utf-8 -*-

' this is a base class for ImageHelp '

import logging
from abc import ABCMeta, abstractmethod

__author__ = 'Ed Hsu'


class ImageHelpBase(metaclass=ABCMeta):
    @abstractmethod
    def resize_by_long_side(self, size, quality, src_img, target_img):
        pass

    @classmethod
    def calculate_size(cls, size_image, length):
        if size_image[0] >= size_image[1]:
            length_long = size_image[0]
            length_short = size_image[1]
        else:
            length_long = size_image[1]
            length_short = size_image[0]
        factor = length_long / length
        logging.debug('''factor:{}'''.format(factor))
        length_long_new = length
        length_short_new = int(round(length_short / factor))
        if size_image[0] >= size_image[1]:
            return length_long_new, length_short_new
        else:
            return length_short_new, length_long_new

if __name__ == '__main__':
    pass
