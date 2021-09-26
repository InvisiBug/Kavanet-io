#!/bin/sh

REGISTRY_IP=192.168.1.61
yarn install && gatsby build && docker build -t kavanet.io . && docker tag kavanet.io $REGISTRY_IP:5000/kavanet.io && docker push $REGISTRY_IP:5000/kavanet.io 