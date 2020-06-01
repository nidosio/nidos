#!/bin/bash -xe

source /home/ec2-user/.bash_profile
[ -d "/home/ec2-user/app/release" ] && \ cd /home/ec2-user/app/release && \

sudo docker-compose down

sudo docker system prune --all --force --volumes 