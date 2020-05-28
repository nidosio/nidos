#!/bin/bash -xe

source /home/ec2-user/.bash_profile
cd /home/ec2-user/app/release

echo "Starting Docker"
sudo service docker start

sudo docker load -i backend.tar.gz 

sudo docker-compose up -d
