#!/bin/sh  
  
git remote add dokku dokku@stack.chester.how:stack
git push dokku add-ci-deploy:master
