# Game

#### Aplicação front-end desenvolvida para a Maratona de Técnologias Móveis nas Escolas, promovido por Unicef Samsung.

Este projeto foi desenvolvido utilizando as seguintes tecnologias:
* *VueJS*
	* *Vuex*
	* *Vue Router*
* *Phaser*
* *Axios*
* *Sass*

## Pré-requisitos

Para executar esta aplicação em seu dispositivo no modo de desenvolvimento você precisará ter as seguintes dependências devidamente instaladas e configuradas:
* *<a href="https://nodejs.org/en/" target="_blank">NodeJS</a> (Preferencialmente em sua última versão LTS)*

## Como executar a aplicação

Para executar a aplicação em seu dispositivo, clone ou baixe o repositório em seu diretório de preferência. Após baixar o repositório, navegue até o diretório onde foi baixado e instale as dependências:

``` bash
# instalar as dependências
npm install
```

Crie o arquivo chamado ".env" na raiz do projeto e copie o conteúdo do arquivo ".env.example" para o arquivo criado. Consulte a API do firebase para adicionar as credenciais corretamente em todos os campos não preenchidos.

Após instalar as dependências do projeto, escolha um dos scripts de acordo com o seu objetivo de uso:

``` bash
# execute a aplicação em um servidor com live reloading em https://localhost:8080/
npm run dev

# faça o build da aplicação com transpilação/minificação dos arquivos
npm run build

# execute a aplicação em modo de produção em localhost:5000
npm run serve
```
