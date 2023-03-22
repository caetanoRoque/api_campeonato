const express = require("express")
const router = express.Router()
const controllers = require("../controllers/campeonato.js")

router.get("/equipes", controllers.equipes)
router.get("/partidas", controllers.partidas)
router.get("/partidas-time/:id", controllers.partidasTime)
router.get("/maior-pontuacao", controllers.maiorPontuacao)
router.get("/maior-placar", controllers.inserirEquipe)
router.post("/inserir-equipe", controllers.inserirEquipe)
router.put("/atualizar-placar", controllers.atualizarPlacar)
router.delete("/deletar-partida/:id", controllers.deletarPartida)
router.post("/inserir-partida", controllers.inserirPartida)



module.exports = router