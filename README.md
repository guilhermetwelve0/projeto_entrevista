


# Tabela de conteúdos
1. [A aplicação](#a-aplicação)
2. [Scripts](#scripts) 
	-  [yarn start](#yarn-start)
	-  [yarn build](#yarn-build)
	-  [yarn eject](#yarn-eject)
	-  [yarn predeploy](#yarn-predeploy)
	-  [yarn deploy](#yarn-deploy)
	-  [yarn test](#yarn-test)
3. [Como executar localmente](#como-executar-localmente)
4. [Informações adicionais sobre as dependências da aplicação](#informações-adicionais-sobre-as-dependências-da-aplicação)
5. [Informações adicionais sobre as funcionalidades da aplicação](#informações-adicionais-sobre-as-funcionalidades-da-aplicação)
	- [Navegação entre telas](#navegação-entre-telas)
	- [Endpoints utilizados](#endpoints-utilizados)
	- [Paginação das listas](#paginação-das-listas)
	- [Resultados da busca](#resultados-da-busca)
	- [Ordenação da lista de repositórios](#ordenação-da-lista-de-repositórios)
	- [Tratamento de erros](#tratamento-de-erros)
	- [Página não encontrada](#página-não-encontrada)
6. [Testes](#testes)

## A aplicação 

O Github Lite é um projeto criado utilizando a api pública do GitHub e pode ser acessado clicando [aqui](https://guilhermemcardoso.github.io/github-lite/).
A aplicação é uma web application criada utilizando o [ReactJS](https://reactjs.org/) e é composta pelas seguintes páginas:

 - **Search, que é a página inicial da aplicação:** nela é possível pesquisar por usuários do GitHub através de um campo de texto. Os resultados são exibidos em uma lista, que possui paginação e exibe, no máximo, 10 itens por vez. Ao clicar na imagem, nome ou login do usuário listado, a aplicação é redirecionada para a outra página, a página de usuário.
 
	Para acessar a página de buscas, basta utilizar o endereço [https://guilhermemcardoso.github.io/github-lite/](https://guilhermemcardoso.github.io/github-lite/).
 - **User:** esta é a página de usuário e nela podemos encontrar informações sobre o usuário, como empresa que trabalha, localização e lista de repositórios, além das informações que já são exibidas nos resultados de busca, como nome, login, foto de perfil e bio (as quantidades de "seguindo" e seguidores são exibidas apenas na lista de resultados da busca). A lista de repositórios também possui paginação e exibe, no máximo, 30 repositórios por vez. Cada item da lista de repositórios é composto por nome do repositório, descrição e número de estrelas. Ao clicar no nome do repositório (em azul), um modal será exibido com as informações do item da lista, além de exibir também a linguagem utilizada no repositório e um link que abre, em uma nova aba do browser, a página do repositório selecionado no GitHub

	Para acessar a página de algum usuário, basta utilizar o endereço [https://guilhermemcardoso.github.io/github-lite/users/[nome_usuario]](https://guilhermemcardoso.github.io/github-lite/users/), substituindo `[nome_usuario]` pelo nome de usuário (login) do usuário que deseja visualizar.

A aplicação é simples, porém responsiva. E seu visual é baseado no visual do site do próprio GitHub.


## Scripts

Dentro do diretório do repositório, é possível executar os seguintes comandos:

### `yarn start`

Executa a aplicação em modo de desenvolvimento no seguinte endereço: [http://localhost:3000/github-lite](http://localhost:3000/github-lite).

A página é recarregada toda vez que um dos arquivos do projeto é alterado e salvo.

### `yarn build`

Cria a aplicação para ambiente de produção na pasta `build`.

### `yarn eject`

Ejeta a aplicação das configurações criadas pelo [create-react-app](https://create-react-app.dev/docs/getting-started/). Create React App é uma forma oficial de criar aplicações React *single-page*, oferecendo um setup de build moderno sem necessidade de configurações adicionais.

### `yarn predeploy`

É utilizado no processo de deploy do *github-pages*.

### `yarn deploy`

Realiza o deploy da aplicação no *github-pages* utlizando uma branch específica chamada *gh-pages*.

### `yarn test`

Inicializa o menu para execução dos testes da aplicação. Após abrir o menu, digite `a` para rodar todos os testes.

## Como executar localmente

 1. Clonar o repositório

Para executar a aplicação localmente, alterar arquivos e desenvolver novas funcionalidades, é preciso, primeiramente, clonar o projeto para seu computador. Para isso, execute o seguinte comando em seu terminal:

`git clone git@github.com:guilhermemcardoso/github-lite.git`

> Ou então `git clone https://github.com/guilhermemcardoso/github-lite.git`, caso não possua chave SSH configurada.

 2. Instalar as dependências

Para instalar as dependências do projeto, acesse o diretório do projeto e digite o comando:

`yarn`

> Ou então `npm install`, caso prefira utilizar o *npm*.

Lembrando que, para conseguir executar  a aplicação localmente é preciso ter o `node` e o `yarn` (ou npm) instalados no computador.

3. Executar o projeto

Depois de clonar o projeto e instalar as dependências, basta utilizar o comando `yarn start` para executar a aplicação em modo de desenvolvimento. Depois de executar o comando, a aplicação pode ser acessada através do seguinte endereço: [http://localhost:3000/github-lite](http://localhost:3000/github-lite).

## Informações adicionais sobre as dependências da aplicação

Para desenvolver o projeto, foram utilizadas outras bibliotecas interessantes que facilitam o desenvolvimento e a manutenção da aplicação. Abaixo, segue a lista com as principais bibliotecas utilizadas e um breve resumo do porquê foram utilizadas:

1. [material-ui](https://material-ui.com/pt/): esta biblioteca possui vários componentes e temas, mas foi usada neste projeto apenas para fornecer o pacote de ícones.
2. [axios](https://github.com/axios/axios):  biblioteca utilizada para realizar requisições HTTP para a api do GitHub.
3. [prop-types](https://github.com/facebook/prop-types): foi utilizada para analisar os tipos de parâmetros passados como *props* para os componentes React criados na aplicação. Além disso, ela também fornece os valores padrão das *props* dos componentes, quando necessário.
4. [react](https://reactjs.org/): a principal biblioteca do projeto e utilizada para a criação dos componentes utilizados em toda a interface da aplicação.
5. [redux](https://react-redux.js.org/): fornece uma *store* de estados da aplicação que pode ser consumida por qualquer componente React. Assim, é possível armazenar a lista de usuários que uma busca retornou, por exemplo, e utilizarmos essas informações em qualquer lugar da aplicação.
6. [react-router](https://reacttraining.com/react-router/): é responsável por toda a navegação da aplicação. Foi utilizada a versão 6 desta biblioteca, que ainda está em alfa. Porém, depois de pesquisar e ver as novas opções disponíveis nesta versão, foi concluído que valeria a pena a tentativa de utilizá-la.
7. [redux-saga](https://redux-saga.js.org/): como o próprio site do redux-saga já diz, ela facilita o gerenciamento dos efeitos colaterais da aplicação. No caso deste projeto, foi principalmente utilizada para lidar com as requisições HTTP realizadas pelo axios.
8. [styled-components.com](https://styled-components.com/): utilizada para estilização dos componentes visuais da aplicação.

## Informações adicionais sobre as funcionalidades da aplicação

### Navegação entre telas

A aplicação utiliza o `BrowserRouter` da biblioteca `react-router` para realizar a navegação entre telas. Porém, a aplicação está hospedada no GitHub pages e é acessada através do endereço do meu GitHub, dentro de uma subpasta, github-lite. Por isso, toda a navegação da aplicação possui como base o caminho `/github-lite/` e não somente `/`.

#### OBS: O GitHub pages tem (aparentemente) algumas incompatibilidades com o BrowserRouter e, por isso, não é possível acessar uma URL com parâmetros diretamente pela barra de endereços do browser. 
#### Ex: [https://guilhermemcardoso.github.io/github-lite/users/guilhermemcardoso](https://guilhermemcardoso.github.io/github-lite/users/guilhermemcardoso) - porém, se procurarmos por este usuário na página de buscas ([https://guilhermemcardoso.github.io/github-lite/](https://guilhermemcardoso.github.io/github-lite/)) e selecionarmos o usuário, a página abrirá normalmente.

### Endpoints utilizados

Apesar de ser uma aplicação pequena e com poucas funcionalidades, foi uma experiência divertida desenvolver o GitHub Lite. 

Utilizei a api do GitHub apenas com requisições públicas, que não precisam de autenticação para funcionar. São elas: 

 - `/search/users` para buscar por usuários utilizando palavras chave, além dos parâmetros para paginação;
 - `/users/username` para buscar mais informações de cada usuário retornado na pesquisa;
 - `/users/username/repos` para buscar a lista de repositórios de um usuário;

Um detalhe interessante é que realizei requisições simultâneas para a api, utilizando o método `axios.all()`, que aceita como parâmetro uma lista de requisições, retornando também uma lista com as respostas das requisições. Isso foi necessário em duas situações:

- A primeira é ao retornar a lista de resultados da busca, pois o endpoint retorna apenas algumas informações de cada usuário. Portanto, foi necessário realizar uma requisição para cada item retornado pelo endpoint da busca, para que fosse possível exibir o nome e as quantidades de "seguindo" e de seguidores de cada item da lista de resultados da busca.
- A outra é ao carregar a página de usuário. Como gostaria que fosse possível acessar diretamente esta página no browser, sem precisar passar pela página de buscas e selecionar um dos itens exibidos na lista de resultados, a requisição para obter as informações do usuário é executada novamente, junto da requisição para buscar a lista de repositórios do mesmo usuário. Porém, como há paginação da lista de repositórios, a requisição para obter as informações do usuário é realizada uma única vez, executando apenas a requisição para buscar a lista de repositórios quando tentamos utilizar a paginação desta lista.
<hr>

### Paginação das listas

A paginação da lista de repositórios é diferente da paginação da lista de resultados da busca. Ao realizar uma busca, é possível saber quantos resultados aquela busca retorna, portanto é possível calcular o número de páginas necessárias para exibir todos os resultados da busca, de acordo com o número total a ser exibido por vez.

Já a lista de repositórios do usuário não retorna a quantidade total de repositórios do usuário, o que torna impossível saber a quantidade total de páginas necessárias para exibir todos os respositórios do usuário. Porém, no cabeçalho da *response*, vem um campo opcional chamado *links*, que contém a lista de url disponíveis depende de quais repositórios foram trazidos naquela *response*:

 - **first**: link para a primeira página dos repositórios do usuário;
 - **prev**: link para a página anterior dos repositórios do usuário;
 - **next**: link para a página posterior dos repositórios do usuário;
 - **last**: link para a última página dos repositórios do usuário;

Esses dois tipos de paginação diferentes influenciou a estrutura e as *props* a serem passadas para o componente de paginação da aplicação.
<hr>

### Resultados da busca

Os resultados retornados na busca são salvos na *store* de estados da aplicação, assim, é possível visualizar os resultados da busca realizada ao clicar em "voltar" depois de acessar a página de algum dos usuários exibidos na lista de resultados, por exemplo.
<hr>

### Ordenação da lista de repositórios

Os repositórios de um usuário são exibidos através de uma lista e podem ser ordenados de acordo com o número de estrelas que o repositório possui, de forma crescente ou decrescente, podendo a ordenação ser alterada ao clicar no botão no localizado no canto superior direito da página. Porém, essa ordenação é feita a cada página, localmente, pois não existe um meio de ordenar os resultados por número de estrelas utilizando parâmetros na requisição. De acordo com a própria documentação da api do GitHub, que pode ser acessada [neste link](https://developer.github.com/v3/repos/#list-repositories-for-a-user), é possível ordenar a lista de repositórios de um usuário através dos seguintes campos: `created`,  `updated`,  `pushed` ou  `full_name`, sendo `full_name` o campo padrão utilizado.

### Tratamento de erros

Caso as requisições realizadas para a api do GitHub retornem com erro, seja por valores incorretos ou por ter estourado o limite de requisições, uma mensagem é exibida no topo da página. A mensagem possui um texto padrão e um formato simples, sendo removida da tela automaticamente após alguns segundos.

### Página não encontrada

Caso o usuário tente acessar uma págna que não existe dentro da aplicação, uma página padrão será exibida, informando ao usuário que o endereço buscado não foi encontrado. A página também exibe um botão que redireciona o usuário para a página inicial da aplicação.

## Testes

Foram iniciados os testes da aplicação, porém apenas testes unitários relacionados à função de ordenação da lista de repositórios foram criados. Não possuo muita experiência com desenvolvimento de testes, apenas na época em que trabalhei como *fullstack* e, por isso, desenvolvia testes unitários para os serviços desenvolvidos por mim e pelo time. Desenvolver testes para uma aplicação React que depende, em sua maioria, de ações executadas através do Redux Saga está sendo uma aventura, pois não é simplesmente desenvolver testes unitários, as funcionalidades da aplicação dependem de funções assíncronas, actions, sagas, stores, requisições HTTP, etc.

Tentei seguir alguns links e tutoriais, mas preciso entender um pouco melhor como as ferramentas funcionam para que consiga desenvolver testes para toda a aplicação.
