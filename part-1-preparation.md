# Preparation
## Pre-configured environments
Please open document [UX Performance Workshop - Vilnius 2018](https://docs.google.com/spreadsheets/d/1TmI4cHQAgsNtVySozQ7uVcY2WOJebensJgPgzq8Ecz4/edit?usp=sharing) and select on of the available servers. Put your name next IP address to mark that you are going to use this environment.
Connect to the server using ssh as 'ubuntu' user (password will be provided during the workshop).

## Starting tools
Use `screen` utility to start following tools in the separate terminal or add -d flag to start them in the detached mode.
* Start Webpagetest server and verify if server is available at http://\<your-ip-address\>
```
docker run -p 80:80 --rm webpagetest/server
```
* Start Webpagetest agent
```
docker run -p 4001:80 --network="host" -e "SERVER_URL=http://localhost:80/work/" -e "LOCATION=Test" -e "SHAPER=none" --cap-add="NET_ADMIN" webpagetest/agent
```
* Start Graphana/Graphite server
```
cd sidespeed
docker-compose up
```

## Local environment preparation
In order to use all tools presented during the workshop please install following software and execute commands stated below
* Install Docker
For ubuntu you can use [How to Install and Use Docker on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04) instruction.

* Install Docker Compose
For Ubuntu you can use [How To Install Docker Compose on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-18-04) instruction.

* Pull Webpagetest docker images
```
$ docker pull webpagetest/server
$ docker pull webpagetest/agent
```
You might execute `$ sudo modprobe ifb numifbs=1` command in order to make webpage test agent working.

* Pull Sidespeed.io docker images
```
$ docker pull sidespeedio/sidespeedio
```

* Install mode and npm 
```
sudu apt get node
sudu apt get npm
```

* Install Webpagetest node package
```
sudo npm install -g webpagetest
````

* Install Lighthouse node package
```
npm install -g lighthouse
```

* Edit corntab file by executing `crontab -e` and place there those lines
````
SHELL=/bin/bash
PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin
*/10 * * * * <path-to-run.webpagetest.sh-file> >> /tmp/sitespeed.io.log 2>&1
```