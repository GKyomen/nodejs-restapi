const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect((e) => {
  if (e) {
    console.log(e)
  } else {
    console.log('conectado com sucesso')
    Tabelas.init(conexao)
    const app = customExpress()
    app.listen(3000, () => console.log('servidor rodando na porta 3000'))
  }
})
