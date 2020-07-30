# GameOfStudent

![languages](https://img.shields.io/github/languages/count/developers-pantaneiros/game?color=%2304D361)
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat)](#colaboradores-sparkles)
[![last commit](https://img.shields.io/github/last-commit/developers-pantaneiros/game/master)](https://github.com/developers-pantaneiros/game/commits/master)
[![issues](https://img.shields.io/github/issues/developers-pantaneiros/game)](https://github.com/developers-pantaneiros/game/issues)
[![license](https://img.shields.io/github/license/developers-pantaneiros/game)](/LICENSE)

<p align="center">
 <a href="#projeto-computer">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias-utilizadas-rocket">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pré-requisitos-clipboard">Pré-requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-executar-a-aplicação-hammer_and_wrench">Execução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#colaboradores-sparkles">Colaboradores</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença-page_facing_up">Licença</a>
</p>

## Projeto :computer:
#### Aplicação front-end desenvolvida para a Maratona UNICEF SAMSUNG: Tecnologias Móveis nas Escolas
<p align="center">
    <img width="450" height="300" src="/src/assets/images/logo_maratona.png">
</p>

## Tecnologias utilizadas :rocket:

Este projeto foi desenvolvido utilizando as seguintes tecnologias:
* [VueJS](https://vuejs.org/)
	* [Vuex](https://vuex.vuejs.org/guide/)
	* [Vue Router](https://router.vuejs.org/)
	* [Vue.Draggable](https://github.com/SortableJS/Vue.Draggable)
* [Phaser](https://phaser.io/)
* [Firebase](https://firebase.google.com/)
	* [Authentication](https://firebase.google.com/products/auth)
	* [Database (Firestore)](https://firebase.google.com/products/firestore)
	* [Hosting](https://firebase.google.com/products/hosting)
* [Sass](https://sass-lang.com/)
* [Nes.css](https://nostalgic-css.github.io/NES.css/)
* [Travis CI](https://travis-ci.org/)
* [ResponsiveVoice](https://responsivevoice.org/)
* [VLibras](https://vlibras.gov.br/)

## Pré-requisitos :clipboard:

Para executar esta aplicação em seu dispositivo no modo de desenvolvimento você precisará ter as seguintes dependências devidamente instaladas e configuradas:
* <a href="https://nodejs.org/en/" target="_blank">NodeJS</a> (Preferencialmente em sua última versão LTS)
* <a href="https://github.com/vuejs/vue-cli" target="_blank">vue-cli</a>

## Como executar a aplicação :hammer_and_wrench:

1. Para executar a aplicação em seu dispositivo, clone ou baixe o repositório em seu diretório de preferência. Após baixar o repositório, navegue até o diretório onde foi baixado e instale as dependências:

``` bash
# instalar as dependências
npm install
```

2. Crie o arquivo chamado ".env" na raiz do projeto e copie o conteúdo do arquivo ".env.example" para o arquivo criado. Consulte a API do firebase para adicionar as credenciais corretamente em todos os campos não preenchidos.

3. Após instalar as dependências do projeto, escolha um dos scripts de acordo com o seu objetivo de uso:

``` bash
# execute a aplicação em um servidor com live reloading em https://localhost:8080/
npm run dev

# faça o build da aplicação com transpilação/minificação dos arquivos
npm run build

# execute a aplicação em modo de produção em localhost:5000
npm run serve
```
## Colaboradores :sparkles:

<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/carlos-henrique-costa-silva/"><img src="https://avatars3.githubusercontent.com/u/25915025?v=4" width="100px;" alt=""/><br /><sub><b>Carlos Henrique</b></sub></a><br /><a href="#code-carlosh" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/carlos-eduardo-dias-giacomini-587918177/"><img src="https://avatars0.githubusercontent.com/u/31314944?v=4" width="100px;" alt=""/><br /><sub><b>Carlos Eduardo</b></sub></a><br /><a href="#code-carlose" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/nathalia-cosim/"><img src="https://avatars2.githubusercontent.com/u/26313761?v=4" width="100px;" alt=""/><br /><sub><b>Nathalia Cosim</b></sub></a><br /><a href="#design-nathalia" title="Design">🎨</a></td>
    <td align="center"><a><img src="https://avatars1.githubusercontent.com/u/54413245?v=4" width="100px;" alt=""/><br /><sub><b>Yasmim Mayumi</b></sub></a><br /><a href="#education-yasmim" title="Education">📖</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/fábio-duarte-de-oliveira-b88b2033/"><img src="https://avatars1.githubusercontent.com/u/4038636?v=4" width="100px;" alt=""/><br /><sub><b>Fábio Duarte</b></sub></a><br /><a href="#coordinator-fabio" title="Coordinator">📢</a></td>
  </tr>
</table>

## Licença :page_facing_up:

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

<p align="center" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">Feito com :blue_heart: por <strong> Developers Pantaneiros </strong> </p>

