#!/usr/bin/env python3
# -*- coding: utf-8 -*-

' this is a base class for StorageHelp '

from abc import ABCMeta, abstractmethod

__author__ = 'Ed Hsu'


class StorageHelpBase(metaclass=ABCMeta):
    @abstractmethod
    def upload(self):
        pass


if __name__ == '__main__':
    pass
