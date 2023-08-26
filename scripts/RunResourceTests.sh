#!/bin/sh

cd /var/www/
npm i
sudo systemctl restart firstServer

exit 0
