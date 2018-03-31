#!/bin/sh

cd /home/john/motosite/client && 
   git fetch origin master &&
   git merge origin/master &&
   yarn run build
