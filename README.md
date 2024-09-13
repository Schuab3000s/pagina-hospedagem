# Página de Reserva de Hotel

Este projeto é uma página de reservas para um hotel, com funcionalidades adicionais para simular postagens e recuperação de dados usando o JSON Server. Ele permite o envio de solicitações de reservas via formulário e a exibição dessas reservas em uma nova página em formato de tabela.

## Funcionalidades

1. Layout responsivo utilizando Bootstrap 5.<br>
2. Formulário de reserva com campos como nome, e-mail, datas de entrada e saída, número de adultos e crianças.<br>
3. Exibição de um modal de confirmação de reserva ao submeter o formulário.<br>
4. Ícones estilizados usando Font Aweson.<br>
5. Seção de quartos e benefícios, destacando as vantagens de se hospedar no hotel.<br>
6. Um formulário de reservas no rodapé da página que coleta informações do cliente, como nome, e-mail, datas de entrada e saída, número de adultos, número de crianças e observações.
7. Integração com JSON Server
   - As informações enviadas pelo formulário são postadas para um servidor simulado, o JSON Server.
   - O envio dos dados é feito via uma requisição `POST` para o endereço `http://localhost:3000/reservas`
8. Recuperação de dados de reserva
   - Uma página adicional foi criada, onde todas as reservas registradas no JSON Server são exibidas em uma tabela
   - Os dados são recuperados via requisição `GET` ao mesmo servidor simulado

## Tecnologias Utilizadas

- HTML5: Estruturação da página.
- Bootstrap 5: Para layout responsivo, componentes de UI e modal de confirmação.
- Font Aweson: Conjunto de ícones usados para melhorar a interface.
- JavaScript: Manipulação do DOM, envio de dados e exibição do modal.
- JSON Server: Servidor simulado para postar e recuperar dados de reservas.

## Instação e Configuração

#### Requisitos
- Node.js instalado no sistema
- JSON Server instalado globalmente ou localmente no projeto

#### Pssso a Passo
1. Clone do repositório
   ``` bash
   git clone https://github.com/usuario/projeto-reservas-hotel.git
   cd projeto-reservas-hotel

2. Instale o JSON Server
   ``` bash
   npm install -g json-server

3. Inicie o JSON Server
Para simular o backend da aplicação, rode o seguinte comando:
    ``` bash
    json-server --watch db.json

4. Abra o arquivo HTML no navegador:

   Abra o arquivo `index.html` em um navegador de sua preferência. Envie os dados pelo formulário e veja o modal de confirmação.
   
6. Veja as reservas registradas:

   Para visualizar todas as reservas registradas, acesse a página de listagem (`reservas.html`), que exibe as informações recuperadas do servidor.
   
## Pré-visualização

Aqui está um esboço visual básico do projeto:

- Header: Inclui um logo fictício e uma breve introdução à hospedagem.
- Seção de Apresentação: Um banner com detalhes sobre o hotel.
- Seção de Benefícios: Mostra as vantagens de se hospedar no hotel (ex: café da manhã incluso, localização central).
- Seção de Quartos: Exibe três tipos de quartos disponíveis para reserva.
- Formulário de Reserva: Um formulário completo para que os usuários façam suas reservas. Ao enviar o formulário, o usuário verá um modal de confirmação.

## Exemplo de Uso

#### Formulário de Reservas

1. Preencha o formulário de reserva com as informações solicitadas.
2. Clique no botão Enviar.
3. Um modal será exibido confirmando o envio da reserva.
4. As informações da reserva serão postadas no JSON Server.

#### Visualização das Reservas

1. Acesse a página `reservas.html`.
2. A tabela exibirá todas as reservas enviadas anteriormente.

## Contribuições

Sinta-se à vontade para contribuir com melhorias, novos recursos ou correções de bugs. Basta seguir os seguintes passos:

1. Faça um fork do projeto.
2. Crie uma nova branch: git checkout -b feature/nova-feature.
3. Envie suas alterações: git commit -m 'Adiciona nova feature'.
4. Envie para a branch principal: git push origin feature/nova-feature.
5. Abra um Pull Request.
