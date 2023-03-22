const database = require("../database")

exports.equipes = () => {
    const query = "SELECT * FROM nomeTime"
    return database.query(query)
}

exports.partidas = () => {
  const query = "SELECT * FROM registroPartidas ORDER BY partida_id ASC"
  return database.query(query)
}

exports.partidasTime = (valores) => {
  const query = "SELECT * FROM registroPartidas WHERE nome1=$1 or nome2=$1"

  return database.query(query,valores)
}

exports.maiorPontuacao = () => {
  const query = "SELECT * FROM pontuacao ORDER BY pontuacao DESC "

  return database.query(query)
}

exports.maiorPlacar = () => {
  const query = "SELECT * FROM registroPartidas ORDER BY placar1 DESC "

  return database.query(query)
}

exports.inserirEquipe = (valores) => {
  const query = `INSERT INTO nomeTime(nome) VALUES ('${valores.nome}'); INSERT INTO pontuacao(nome,vitorias,empates,derrotas,pontuacao) VALUES ('${valores.nome}',${valores.vitorias},${valores.empates},${valores.derrotas},${valores.pontuacao})`

  return database.query(query)
}

exports.atualizarPlacar = (valores) => {
  //{"id":1,"data":"01/01/2023","nome1":"botafogo","placar1":3,"placar2":0,"nome2":"inter"}
  const query = `UPDATE registroPartidas SET data='${valores.data}', nome1='${valores.nome1}', placar1=${valores.placar1},placar2=${valores.placar2},nome2='${valores.nome2}' WHERE partida_id=${valores.id};`

  return database.query(query)
}

exports.deletarPartida = (valores) => {
  const query = "DELETE FROM registroPartidas WHERE partida_id=$1;"
  return database.query(query,valores)
}

exports.inserirPartida = (valores) => {
  //{"data":"01/01/2023","nome1":"botafogo","placar1":3,"placar2":0,"nome2":"inter"}
  if(valores.placar1>valores.placar2){
    var query = `INSERT INTO registroPartidas(data,nome1,placar1,placar2,nome2) VALUES ('${valores.data}','${valores.nome1}',${valores.placar1},${valores.placar2},'${valores.nome2}');`
    var query2=`UPDATE pontuacao SET vitorias=vitorias + 1, pontuacao=pontuacao + 3 WHERE nome='${valores.nome1}';`
    var query3=`UPDATE pontuacao SET derrotas=derrotas + 1 WHERE nome='${valores.nome2}';`
  }else if(valores.placar1<valores.placar2){
    var query = `INSERT INTO registroPartidas(data,nome1,placar1,placar2,nome2) VALUES ('${valores.data}','${valores.nome1}',${valores.placar1},${valores.placar2},'${valores.nome2}');`
    var query2=`UPDATE pontuacao SET vitorias=vitorias + 1, pontuacao=pontuacao + 3 WHERE nome='${valores.nome2}';`
    var query3=`UPDATE pontuacao SET derrotas=derrotas + 1 WHERE nome='${valores.nome1}';`
  }else{
    var query = `INSERT INTO registroPartidas(data,nome1,placar1,placar2,nome2) VALUES ('${valores.data}','${valores.nome1}',${valores.placar1},${valores.placar2},'${valores.nome2}');`
    var query2=`UPDATE pontuacao SET empates=empates + 1, pontuacao=pontuacao + 1 WHERE nome='${valores.nome1}';`
    var query3=`UPDATE pontuacao SET empates=empates + 1, pontuacao=pontuacao + 1 WHERE nome='${valores.nome2}';`
  }
  console.log(query)
  return database.query(query+query2+query3)
}
