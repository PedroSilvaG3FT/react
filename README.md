### Componente

- Por padrão é uma função que retorna um conteudo html;
- Em todo componente é necessario importar o React ( import React from "react"; );
- Para exportar coloca (export default) na frente de: function nomeComponent()
  # CSS
  - No react usa-se 'className=' ao inves de 'class', pois o class é tambem uma palavra reservada do JS

###Importações de imagens

-Tudo parte do JS, imagens podem ser importadas pelo proprio JS Tambem como no arquivo App.js;
-Para vizualizar a IMAGEM na tela usa-se src={} e não src="";

### Rotas

- Adicionar a biblioteca atraves do yarn add react-router-dom
- Criar novo arquivo com nome: routes. js
- Importar : BrowserRouter e Route no arquivo
- Exportar, pois não deixa de ser um componente
- Importar as Paginas criadas
- Importar routes no arquivo App.js
- history é a propriedade padrao que é recebida em um componente e resposavel pela navegação
- Para capturar um parametro enviado pela rota usa-se o match
- Para usar o parametro recebido : match.params.'NomeDoParametro'

### Pegar info de campos (ESTADO)

-Conceito de estados : Toda e qualquer informação que o componente vai manipular

### Chamar uma API

- Adicionar o axios

### Geral

    # O React pode se basear em 3 conceitos
    - Componentes
    - Estado - useState
    - Propriedades - Ex: history
