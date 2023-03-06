#!/bin/bash
git checkout prod
sudo echo '---------- Git checkout master complete ----------'
git fetch --all
sudo echo '---------- Git fetch complete ----------'
git reset --hard origin/prod
sudo echo '---------- Git reset master complete ----------'
sudo echo '---------- Docker compose build started ----------'
sudo docker-compose build
sudo echo '---------- Docker compose build complete ----------'
sudo echo '---------- Docker compose deploy started ----------'
sudo docker-compose up -d
