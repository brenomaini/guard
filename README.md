# Guard

### Bem-vindo ao Repositório do Projeto Guard - Gerenciamento de Estoque

O projeto Guard é uma aplicação robusta e versátil desenvolvida para simplificar o gerenciamento de estoque. Com tecnologia como React e Tailwind CSS no front-end e uma API desenvolvida com Laravel 10 e um banco de dados SQL, o Guard é a solução perfeita para otimizar a gestão do estoque.

Recursos Principais:

- Gerenciamento de Marcas, Categorias e Itens: Tenha controle total sobre o estoque, categorizando produtos e acompanhando suas marcas.

- Gestão de Setores Empresariais: Organize seu negócio, atribuindo produtos e responsabilidades a diferentes setores da empresa.

- Atribuição de Itens a Colaboradores: Atribua produtos específicos a colaboradores, rastreando sua responsabilidade.

- Atribuição de Pedidos com Centro de Custo: Gerencie pedidos com eficiência, atribuindo-os a setores específicos com controle de custos detalhado.

O Guard foi desenvolvido com a simplicidade de uso em mente, garantindo que até mesmo usuários iniciantes possam tirar o máximo proveito de suas funcionalidades avançadas.

Explore, experimente e aprimore o Guard para atender às suas necessidades específicas. Sua jornada de otimização do gerenciamento de estoque começa aqui.

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
chmod +x start.sh
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

### Usando

- Ao iniciar os containers, acesse (http://localhost:3000), irá ser solicitada a autenticação, preencha os campos solicitados com as credênciais abaixo.

email:
```
admin@guard.com
```
senha:
```
12345678
```
<img src="/WebApp/src/assets/img/login.png">

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
