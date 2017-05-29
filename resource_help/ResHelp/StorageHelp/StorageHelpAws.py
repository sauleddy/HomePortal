#!/usr/bin/env python3
# -*- coding: utf-8 -*-

' StorageHelp for AWS version '

from .StorageHelpBase import StorageHelpBase

__author__ = 'Ed Hsu'


class StorageHelpAws(StorageHelpBase):
    def __init__(self):
        pass

    def upload(self):
        pass


if __name__ == '__main__':
    myStorageHelp = StorageHelpAws()
    myStorageHelp.upload()
