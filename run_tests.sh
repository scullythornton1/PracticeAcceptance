#!/usr/bin/env bash
ENV="local"
if [ "$1" = "dev" ] || [ "$1" = "qa" ] || [ "$1" = "staging" ] || [ "$1" = "ete" ]
then
    ENV="$1"
fi
echo "Environment : $ENV"
sbt -Denvironment=$ENV 'testOnly utils.TestRunner'