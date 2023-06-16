# Burnwood Metadata Manager

## Demo

O que vamos apresentar?

- [ ] Cadastrar um novo contrato;
  - [ ] Validar contrato;
  - [ ] Enviar o contrato para uma fila;
- [ ] Listar Contratos cadastrados;
- [ ] Atualizar um contrato via ID;
  - [ ] Validar contrato;
  - [ ] Enviar o contrato para uma fila;
- [ ] Deletar um contrato via ID;
  - [ ] Enviar o contrato para uma fila;

Queue

- [ ] Atualizar o BigQuery;
- [ ] Atualizar o Datahub;
- [ ] Atualizar o DataCatalog;
- [ ] Atualizar o Dataflow;
- [ ] Atualizar o Kafka;
- [ ] Atualizar o Schema Registry;

> A responsabilidade das atividades acima não é do Metadata Manager. O Metadata Manager é apenas a peça que invoca o comportamento e coordena quando esses comportamentos devem ou não ser iniciados.

## Futuro

Backend:

- [ ] Cadastro de usuário;
- [ ] Autenticação por usuário
- [ ] Nível de permissão (Writer, Reader and Admin);
- [ ] Manutenção de BUs;
- [ ] Manutenção de Dominínios;
- [ ] Manutenção de Parâmetros;
- [ ] Aprovação de Contrato;
- [ ] Criar um contrato a partir de um schema do Schema Registry;

Frontend:

- [ ] Consulta de Contratos;
- [ ] Aprovação de Contratos;
- [ ] Status da fila;

### Estrutura do Contrato vs Banco de Dados

Tabela **user**
| Column Name | Type     | Contrants | Obs |
| ----------- | -------- | --------- | --- |
| id          | uuid     | PK        |     |
| name        | string   |           |     |
| email       | string   |           |     |
| groupIds    | string[] | FK        |     |
| isActive    | boolean  |           |     |

Tabela **group**
| Column Name | Type    | Contrants | Obs |
| ----------- | ------- | --------- | --- |
| id          | uuid    | PK        |     |
| name        | string  |           |     |
| email       | string  |           |     |
| isActive    | boolean |           |     |

Tabela **contract**:
| Column Name     | Type     | Contrants | Obs              |
| --------------- | -------- | --------- | ---------------- |
| id              | uuid     | PK        |                  |
| description     | string   |           |                  |
| dataOwner       | string   |           |                  |
| dataOwnerEmail  | string   |           |                  |
| ingestionMethod | enum     |           | batch, streaming |
| cronScheduler   | string   |           |                  |
| bu              | string   |           |                  |
| buCode          |          |           |                  |
| tags            | string[] |           |                  |

Tabela **propertyLine**:
| Column Name      | Type   | Contrants | Obs |
| ---------------- | ------ | --------- | --- |
| id               | uuid   | PK        |     |
| contractId       | uuid   | FK        |     |
| fieldName        | string |           |     |
| fieldType        | string |           |     |
| fieldMode        | string |           |     |
| fieldDescription | string |           |     |
| fieldParent      | uuid   | FK        |     |
