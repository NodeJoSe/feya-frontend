#!/usr/bin/env bash

apt update
apt install -y python3 python3-pip python


curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs build-essential
