// servidor
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')
 
// configs do nunjucks
 
const nunjucks = require('nunjucks')
 nunjucks.configure('src/views', {
     express: server,
     noCache: true,
})
 
// configs de arquivos estáticos e rotas da aplicação
 
server
// Receber os dados do req.body
.use(express.urlencoded({ extended: true }))
// configurar arquivos estaticos (css, scripts, imagens)
.use(express.static("public"))
// rotas de aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//.post("/give-classes")
.post("/save-classes", saveClasses)
.listen(5000)