#!/usr/bin/env python3
# -*- coding: utf-8 -*-

' this is a base class for ResHelp '

import logging
from abc import ABCMeta, abstractmethod

__author__ = 'Ed Hsu'

logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s %(levelname)s [%(filename)s-%(funcName)s()]'
                    ' %(message)s',
                    datefmt='%m-%d %H:%M')

class ResHelpBase(metaclass=ABCMeta):
    @abstractmethod
    def __init__(self, image_help, storage_help):
        self.myImageHelp = image_help
        self.myStorageHelp = storage_help

    @abstractmethod
    def resize_images(self, length, quality, src_dir, target_dir):
        pass


if __name__ == '__main__':
    pass
