#!/usr/bin/env python3
# -*- coding: utf-8 -*-

' this is a base class for ResHelp '

import logging
from abc import ABCMeta, abstractmethod

__author__ = 'Ed Hsu'


class ResHelpBase(metaclass=ABCMeta):
    @abstractmethod
    def __init__(self, image_help, storage_help):
        self.myImageHelp = image_help
        self.myStorageHelp = storage_help

    @abstractmethod
    def resize_images(self, length, quality, src_dir, target_dir):
        pass

    @abstractmethod
    def upload_images(self, src_dir, target_dir):
        pass


if __name__ == '__main__':
    pass
