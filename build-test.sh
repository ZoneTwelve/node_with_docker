#!/bin/bash
PORT=9000
IMAGE="nr_runtime/node"
sudo docker run -p $PORT:$PORT $IMAGE