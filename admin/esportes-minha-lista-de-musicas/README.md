# esportes-minha-lista-de-musicas - Backstage Admin App

## Backstage Admin App

Este projeto contém uma **Backstage Admin App**, uma aplicação em React que
extende a lib [backstage-admin][bs-admin-lib].

Consulte a [documentação][customizando-admin] para saber como adaptá-la às suas
necessidades.

### Tecnologias

* React para desenvolvimento da app
* transpiling de JSX / ES6+ usando [Webpack][webpack] e [Babel][babel]
* conversão de [Sass][sass] em CSS com [PostCSS][postcss]
* [jest][jest] para testes e cobertura

### Estrutura de arquivos

Abaixo uma explicação dos principais arquivos do projeto:

* `demo/index.html`: página principal do demo, raramente será preciso alterá-la
* `demo/index.js`: script principal do demo, ativa a sua App no server local
* `demo/index.scss`: estilos específicos do demo (não serão incluídos no build)
* `src/App.js`: código da sua app
* `src/*.test.js`: testes
* `src/index.js`: exporta a app e estilos
* `src/bundle.js`: expõe a app para o client da **Backstage Store**
* `src/index.scss`: estilos a serem incluídos no build


## Uso

O projeto conta com alguns comandos iniciais definidos na seção `scripts` do
arquivo `package.json`.

* `start`: levanta o server de desenvolvimento
* `build`: prepara o código para ser distribuído
* `test`: roda testes usando o jest
* `coverage`: roda os testes e inclui relatório de cobertura
* `lint`: roda lint com o prettier (ajustando formatação automaticamente)
* `precommit`: ajusta formatação antes do commit

Os comandos podem ser usados com `npm run <comando>` ou `yarn run <comando>`.

Veja mais detalhes a seguir.


### `start`

Levanta o server de desenvolvimento usando [Webpack][webpack] e abre o browser
no endereço [http://localhost:3000](http://localhost:3000).

Se a porta `3000` estiver em uso por outro processo será atribuída outra porta
automaticamente.

Modificações de código serão refletidas automaticamente.


### `build`

Usa o [Webpack][webpack] para processar o código em `src/` e gerar arquivos no
diretório `dist/` em um formato adequado para serem distribuídos pela integração
do **Backstage Admin** com o **Backstage Store**.


### `test`

Roda testes usando o [Jest][jest].

Por padrão entra em modo "watch", rodando testes sempre que os arquivos forem
alterados.

O Jest reconhece arquivos locais modificados após o último commit e tenta rodar
apenas os testes destes arquivos.

É possível usar atalhos de teclado para rodar todos os testes, para selecionar
testes específicos e para outras operações. A própria CLI exibe uma ajuda sobre
estes atalhos.


### `lint`

Formata o código **Javascript** em `src/`, `demo/`, `config/` usando o
[Prettier][prettier] garantindo uniformidade de estilos.


### `precommit`

Usa a lib [lint-staged][lint-staged] para aplicar o `lint` automático ao
realizar commits.


## Sobre a estrutura inicial

Este projeto foi criado com o [create-react-app][cra], um gerador de
boilerplate que usa o pacote `react-scripts` para executar operações comuns.

O `create-react-app` tem configurações fechadas, não dando muita margem para
customização, para contornar isto é possível
["ejetar a configuração"][cra-eject].

Este projeto já vem "ejetado" para transformar as configurações de app em
um modelo melhor adaptado para os componentes do **Backstage Admin**.

Consulte a versão mais recente do [guia do react-scripts][react-scripts-guide]
para uma documentação mais detalhada.

[cra]: https://github.com/facebookincubator/create-react-app.
[react-scripts-guide]: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md
[cra-eject]: https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html#no-lock-in

[lint-staged]: https://github.com/okonet/lint-staged
[prettier]: https://github.com/prettier/prettier#why-prettier
[webpack]: https://webpack.js.org/
[postcss]: http://postcss.org/
[sass]: http://sass-lang.com/
[babel]: https://babeljs.io
[jest]: https://facebook.github.io/jest/

[customizando-admin]: http://docs.backstage.globoi.com/admin-v2/customizando/
[bs-admin-lib]: https://gitlab.globoi.com/backstage/backstage-admin-lib
