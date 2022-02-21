#!/bin/bash
image_name="nr_runtime/node"
res=$(sudo docker images $image_name -q)
if [ ! -z "$res" ]; then
  echo "Remove oldest images"
  sudo docker rmi $res
fi
sudo docker build -t="$image_name" ./app