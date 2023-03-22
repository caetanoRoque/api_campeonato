
const Campeonato = require('../models/campeonato')

exports.equipes = (req, res) => {

  Campeonato.equipes()
    .then((resultado) => {
      res.status(200).send({ Equipes: resultado.rows })
    })
    .catch((erro) => {
      res.status(500).send({ erro: erro });
    })
}

exports.partidas = (req, res) => {
  
  Campeonato.partidas()
    .then((resultado) => {
      res.status(200).send({ Partidas: resultado.rows })
    })
    .catch((erro) => {
      res.status(500).send({ erro: erro });
    })
}

exports.partidasTime = (req, res) => {
  
  const valores=req.params.id

  Campeonato.partidasTime([valores])
    .then((resultado) => {
      res.status(200).send({ Partidas: resultado.rows })
    })
    .catch((erro) => {
      res.status(500).send({ erro: erro });
    })
}

exports.maiorPontuacao = (req, res) => {
  
  Campeonato.maiorPontuacao()
    .then((resultado) => {
      res.status(200).send({ Times: resultado.rows })
    })
    .catch((erro) => {
      res.status(500).send({ erro: erro });
    })
}

exports.inserirEquipe = (req, res) => {
  const valores=req.body

  Campeonato.inserirEquipe(valores)
    .then(() => {
      res.status(200).send({ Mensagem: "Adicionado com sucesso!" })
    })
    .catch((erro) => {
      res.status(500).send({ erro: erro });
    })
}

exports.atualizarPlacar = (req, res) => {
  const valores=req.body

  Campeonato.atualizarPlacar(valores)
    .then(() => {
      res.status(200).send({ Mensagem: "Placar atualizado com sucesso!" })
    })
    .catch((erro) => {
      res.status(500).send({ erro: erro });
    })
}

exports.deletarPartida = (req, res) => {
  const valores=[req.params.id]

  Campeonato.deletarPartida(valores)
    .then(() => {
      res.status(200).send({ Mensagem: "Partida excluida com sucesso!" })
    })
    .catch((erro) => {
      res.status(500).send({ erro: erro });
    })
}

exports.inserirPartida = (req, res) => {
  const valores=req.body

  Campeonato.inserirPartida(valores)
    .then(() => {
      res.status(200).send({ Mensagem: "Partida inserida com sucesso!" })
    })
    .catch((erro) => {
      res.status(500).send({ erro: erro });
    })
}