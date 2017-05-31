#!/usr/bin/env python3
# -*- coding: utf-8 -*-

' this is a base class for StorageHelp '

from abc import ABCMeta, abstractmethod
import copy

__author__ = 'Ed Hsu'


class StorageHelpBase(metaclass=ABCMeta):
    def __init__(self, credential):
        self.credential = copy.copy(credential)

    @abstractmethod
    def upload(self, bucket, src_file, target_file):
        pass


if __name__ == '__main__':
    pass
