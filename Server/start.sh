#!/bin/sh  

composer update

composer dump-autoload

php artisan key:generate

php artisan storage:link

php artisan migrate

php artisan db:seed
