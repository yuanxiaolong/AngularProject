#!/usr/bin/env bash

# kill jinx drive
ID=`ps -ef | grep 'grunt' | awk '{print $2}'`
for id in $ID
do
        echo "kill process $id"
        kill -9 $id
done


cd /data/jenkins/workspace/Janna/
echo "bower install -allow-root"
bower install -allow-root

echo "npm install"
npm install

echo "grunt build"
grunt build

echo "grunt serve:dist >> /data/jenkins/workspace/Janna/jannaRun.log 2>&1 &"
nohup grunt serve:dist >> /data/jenkins/workspace/Janna/jannaRun.log 2>&1 &