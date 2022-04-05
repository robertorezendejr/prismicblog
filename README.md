This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).





01-### Atenção são pontos que devo mudar quando o software estiver funcionando na real. E ### 
02-***Voltar qui *** quer dizer que devo mudar dentro do código alguma coisa quando estiver em produção.




### Atenção STRIPE - em produção precisamos voltar para configurar o webhool dostripe no proprio site em: configuração/pagamentos/webhooks = https://dashboard.stripe.com/test/webhooks     - e quando a configuração estiver online precisamos cadastrar um **ENDPOINT**

### Para instalar o stripe em ambiente de desenvolvimento
brew install stripe/stripe-cli/stripe
stripe -h   - para saber se está instalado

Com stripe instalado precisamos dar um comando = 
stripe login

Ele vai abrir em no navegador pedindo acesso e vai deixar esse acesso
liberado por 90 dias.

#### Agora para o stripe ouvir os WEBHOOKS precisamos dar o comando = 
stripe listen --forward-to localhost:3000/api/webhooks













##############################################################
Ações a tomar... 

 Toda parte do código que tenho que voltar para corrigir quando site/sistema estiver em operação... Eu vou deixar com: ***voltar aqui


---------------------------------------------------------------------------

###### para iniciar
yarn dev

### Sobre o projeto
#### CSS
para o css funcionar precisa mudar o nome para mudules.css
E tem que chamar no arquivo por exemplo depois uma classe ou id, não posso chamar direto no h1 por exemplo, ou p ou span... e por ai vai tem que chamar a classe primeiro e depois o h1...


##### Imagens
quando estamos usando imagem no next as imagens sempre ficam na pasta public



##### Para passar um produto de pagamento mensal para paenas uma vez 
no index da pasta pages.
stripe.prices.retrieve - significa que é pagamento mensal retrieve é quando é um só.


###### Font usada Roboto


##### Back end 
A pasta API dentro de pages vai se comunicar fazendo a parte do backend.


#### banco de dados FAUNA
banco: cursomsproject
Region Group: classic (C)

Documentação
https://docs.fauna.com/fauna/current/api/fql/cheat_sheet


test






=======
>>>>>>> bdbcb7d4a0145cfdb13a8033c2b984613e0ce3df

#### banco de dados FAUNA
banco: cursomsproject
Region Group: classic (C)

Documentação
https://docs.fauna.com/fauna/current/api/fql/cheat_sheet






#### Rotas
Todo arquivo dentro da pasta API vira uma rota, salvo se tiver com underline antes, por exemplo a nossa pasta _lib


