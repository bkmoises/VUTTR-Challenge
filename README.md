# VUTTR-Challenge
-   [Sobre o Projeto](#sobre-o-projeto)
    -   [Objetivo](#objetivo)
    -   [Recursos Principais](#recursos-principais)
-   [Métodos da API](#m%C3%A9todos-da-api)
-   [Documentação](#documenta%C3%A7%C3%A3o)
-   [Tecnologias Utilizadas](#tecnologias-utilizadas)
-   [Execução do Projeto](#execu%C3%A7%C3%A3o-do-projeto)
    -   [Clonando o Repositório](#clonando-o-reposit%C3%B3rio)
    -   [Instalando as Dependências](#instalando-as-depend%C3%AAncias)
        -   [Utilizando npm](#utilizando-npm)
        -   [Utilizando yarn](#utilizando-yarn)
    -   [Inicializando o Banco de Dados](#inicializando-o-banco-de-dados)
-   [Licença](#licen%C3%A7a)

## Sobre o Projeto

Bem-vindo ao projeto VUTTR (Very Useful Tools to Remember), uma API projetada para simplificar o gerenciamento de ferramentas úteis. A aplicação VUTTR oferece um repositório onde você pode registrar suas ferramentas favoritas, incluindo seus nomes, links, descrições e tags.

### Objetivo

O objetivo principal deste projeto é fornecer uma plataforma simples e eficaz para armazenar e organizar suas ferramentas de trabalho ou recursos on-line. A API oferece uma variedade de recursos para listar, adicionar, atualizar e excluir ferramentas, permitindo que você mantenha seu conjunto de ferramentas sempre atualizado e acessível.

### Recursos Principais

-   **Listagem de Ferramentas**: Visualize todas as suas ferramentas cadastradas ou filtre por tags específicas.
-   **Cadastro de Ferramentas**: Adicione novas ferramentas à sua coleção especificando nome, link, descrição e tags.
-   **Atualização de Ferramentas**: Atualize informações de ferramentas existentes, como título, link, descrição ou tags.
-   **Exclusão de Ferramentas**: Remova ferramentas da sua lista quando necessário.

## Métodos da API

1.  **Listar Todas as Ferramentas**
    -   Método: GET
    -   Endpoint: `/tools`
    
2.  **Listar Ferramentas por Tag**
    -   Método: GET
    -   Endpoint: `/tools?tag=tag1`
   
3.  **Criar uma Nova Ferramenta**
    -   Método: POST
    -   Endpoint: `/tools` 
4.  **Excluir uma Ferramenta**
    -   Método: DELETE
    -   Endpoint: `/tools/:id`
    
5.  **Atualizar uma Ferramenta**
    -   Método: PUT
    -   Endpoint: `/tools/:id`

## Documentação

Para obter informações detalhadas sobre os métodos da API, bem como informações sobre o corpo das requisições e as respostas correspondentes, consulte o arquivo HTML de documentação disponível em [./docs/index.html](./docs/index.html). Lá você encontrará todas as informações necessárias para interagir com a API do projeto.


## Tecnologias Utilizadas

-   [Node.js](https://nodejs.org/)
-   [Express.js](https://expressjs.com/)
-   [MySQL](https://www.mysql.com/)
-   [mysql2](https://github.com/mysqljs/mysql)
-   [Docker](https://www.docker.com/)
-   [Docker Compose](https://docs.docker.com/compose/)
-   [BlueprintAPI](https://apiblueprint.org/)

## Execução do Projeto

Para executar este projeto em sua máquina local, siga os passos abaixo:

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

### Clonando o Repositório

Primeiro, clone este repositório para o seu sistema local usando o seguinte comando:

```bash
git clone https://github.com/bkmoises/VUTTR-Challenge
```

### Instalando as Dependências

Após clonar o repositório, navegue até o diretório raiz do projeto e instale as dependências necessárias.

#### Utilizando npm

```bash
npm install
```

#### Utilizando yarn

```bash
yarn install
```

Isso instalará todas as bibliotecas e módulos necessários para o projeto.

### Inicializando o Banco de Dados

Este projeto depende de um banco de dados MySQL. Você pode facilmente configurar uma instância do MySQL usando o Docker Compose. Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.

No diretório raiz do projeto, você encontrará um arquivo `docker-compose.yml` que contém a configuração necessária para o MySQL. Execute o seguinte comando para iniciar o contêiner do MySQL:

```bash
docker-compose up -d
``` 

Isso irá iniciar o MySQL em um contêiner separado, que pode ser acessado pelo projeto.

## Licença

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/devsuperior/sds1-wmazoni/blob/master/LICENSE)
Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](https://github.com/bkmoises/VUTTR-Challenge/blob/main/LICENSE) para obter mais detalhes.

