#!/bin/sh

GREEN='\033[0;32m'
BLACK='\033[0;30m'

echo "${GREEN}Start postinstall${BLACK}"

cd ios && pod install
