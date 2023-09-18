FROM php:8.2-fpm

COPY composer.lock composer.json /var/www/

WORKDIR /var/www

# Instala as dependências necessárias
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl

# clean cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Configura a biblioteca GD com as dependências
RUN docker-php-ext-configure gd

# Instala a extensão GD
RUN docker-php-ext-install gd

# Instala outras extensões do PHP, se necessário
RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable pdo_mysql

# install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# add user for laravel
RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www 

# copy applications folder
COPY . /var/www/

# copy existing permissions from folder to docker
COPY --chown=www:www . /var/www/
RUN chown -R www-data:www-data /var/www

# change current user to www
USER www 

# Expõe a porta para o servidor de desenvolvimento do Vue.js
EXPOSE 9000

CMD ["php-fpm"]