#!/bin/bash
sudo su
git checkout prod
echo '---------- Git checkout master complete ----------'
git fetch --all
echo '---------- Git fetch complete ----------'
git reset --hard origin/prod
echo '---------- Git reset master complete ----------'
echo '---------- Docker compose build started ----------'
sudo docker-compose build
echo '---------- Docker compose build complete ----------'
echo '---------- Docker compose deploy started ----------'
sudo docker-compose up -d
