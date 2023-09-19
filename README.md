# Guard

Aplicação destinada ao controle de Itens e pedidos.
Aplicação feita de forma genérica, buscando abarcar os mais diversos cenários possíveis para controle de itens e pedidos.

## Entendendo este doc

As instruções abaixo visa te ajudar a copiar o projeto e setá-lo para rodar em sua máquina de forma local e poder testá-lo e contribuir com o mesmo.

### Pré-requisitos

Docker ^20.10

## Subindo Container e configurando a API 

- Abra um terminal no diretório /Server e siga o passo a passo para configurar a API


1° Crie o arquivo .env e configure as variaveis de conexão do banco (default: user: root / password: password / dbname: guard)

```
cp .env.example .env
```

2° Agora suba o container Server

```
docker-compose up -d
```

3° Identifique o containerID do server_app

```
docker ps
```

4° Abrir um terminal do contaniner em execução

```
docker exec -it (CONTAINER ID) bash
```

5° Torne o start.sh executável

```
chmod +x /start.sh
``` 

6° Execute o script start.sh para instalar e configurar depedências do laravel no container

```
./start.sh
``` 
#### API configurada!


## Subindo Container e configurando front da aplicação

- Abra um terminal no diretório /WebApp e siga o passo a passo para configurar o front que irá consumir a api

1° Instale as depedências do node

```
npm install
```

2° Execute o arquivo docker-compose.yml para subi o container do front

```
docker-compose up -d
```
#### Front da aplicação configurada!


## Feito com:

* [ReactJS](https://react.dev/) - WebFramework usado
* [TailwindCSS](https://tailwindcss.com/) - CSS Framework
* [Laravel](https://laravel.com/) - Framework backend usado
* [Docker](https://www.docker.com/) - Orquestrador de containers usado
* [Icones - HeroIcons](https://heroicons.com/) - Usado para os icones do projeto

## Gostaria de contribuir?

Leia a política [CONTRIBUTING.md](https://github.com/brenomaini/guard/blob/main/CONTRIBUTING.md) para detalhes, contudo, toda e qualquer benfeitoria será vista e revisada por nós <3 

## Versioning

Usaremos [SemVer](http://semver.org/) para padrões de versionamento. As versos disponíveis estarão aqui [TAGS](https://github.com/brenomaini/guard/tags). 

## Autores

* **Breno Maini** - *Código Frontend inicial* - [Breno Maini](https://github.com/brenomaini)
* **Lucas Cardoso** - *Código Backend inicial* - [Lucas Cardoso](https://github.com/CLucasrodrigues22)

Lista de contribuintes [contribuintes](https://github.com/brenomaini/guard/contributors) que participaram do projeto.

## Licença

Projeto licenciado de acordo com a licença GNU AGPLv3 - veja [LICENSE.md](https://github.com/brenomaini/guard/blob/main/LICENSE.md) para mais detalhes
