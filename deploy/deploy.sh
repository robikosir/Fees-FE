#!/bin/bash
sudo git checkout prod
sudo echo '---------- Git checkout master complete ----------'
sudo git fetch --all
sudo echo '---------- Git fetch complete ----------'
sudo git reset --hard origin/prod
sudo echo '---------- Git reset master complete ----------'
sudo echo '---------- Docker compose build started ----------'
sudo sudo docker-compose build
sudo echo '---------- Docker compose build complete ----------'
sudo echo '---------- Docker compose deploy started ----------'
sudo sudo docker-compose up -d
