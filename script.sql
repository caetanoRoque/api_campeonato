CREATE TABLE nomeTime(
id serial primary key,
nome varchar(100) not null
);

CREATE TABLE pontuacao(
nome varchar(100) not null,
vitorias int not null,
empates int not null,
derrotas int not null,
pontuacao int not null
);

CREATE TABLE registroPartidas(
partida_id serial primary key,
data date not null,
nome1 varchar(100) not null,
placar1 int not null,
placar2 int not null,
nome2 varchar(100) not null
);

INSERT INTO nomeTime(nome) values
('inter'),
('gremio'),
('vasco'),
('flamengo');

INSERT INTO pontuacao(nome,vitorias,empates,derrotas,pontuacao) values
('inter',0,0,3,0),
('gremio',1,0,2,3),
('vasco',3,0,0,9),
('flamengo',2,0,1,6);

INSERT INTO registroPartidas(data,nome1,placar1,placar2,nome2) values
('01/01/2023','inter',0,1,'gremio'),
('02/01/2023','inter',0,1,'vasco'),
('03/01/2023','inter',0,1,'flamengo'),
('04/01/2023','gremio',0,1,'flamengo'),
('05/01/2023','gremio',0,1,'vasco'),
('06/01/2023','vasco',1,0,'flamengo');