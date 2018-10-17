#!/bin/bash
# Specify the exact version of sitespeed.io. When you upgrade to the next version, pull it down and the chage the tag
DOCKER_CONTAINER=sitespeed.io-plus1

# Simplify some configurations
CONFIG="--config /sitespeed.io/default.json"
DOCKER_SETUP="--shm-size=1g --rm -v /home/ubuntu/sitespeed:/sitespeed.io -v /result:/result -v /etc/localtime:/etc/localtime:ro --name sitespeed"

# Start running the tests
# We run more tests on our test server but this gives you an idea of how you can configure it
docker-compose run $DOCKER_CONTAINER -n 1 /sitespeed.io/urls.txt -b chrome $CONFIG

# We remove all docker stuff to get a clean next run
# docker system prune --all --volumes -f

# Get the container so we have it the next time we wanna use it
# docker pull $DOCKER_CONTAINER
