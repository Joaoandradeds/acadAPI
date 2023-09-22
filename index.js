const Fastify = require('fastify')
const fastify = Fastify({
    logger: true
})
const { v4: uuidv4 } = require('uuid');


const membros = {};


// criar membro
fastify.post('/membros', async function handler(req, res) {
    const membro = req.body
    membro.id = uuidv4()
    membros[membro.id] = membro
    res.send(membro)
})

// ler membros
fastify.get('/membros', async function (req, res) {
    res.send(Object.values(membros));
})


// ler membros por id
fastify.get('/membros/:id', async function (req, res) {
    const id = req.params.id;
    const membro = membros[id]
    console.log(membro)
    if (membro == undefined) {
        res.code(404).send("AI DEU BIGODE NEGAO")

        return
    }

    res.send(membro)


})
// atualizar membro por id



// deletar membro por id
fastify.delete('/membros/:id', async function (req, res) {
    const id = req.params.id;
    (membros);
})




try {
    fastify.listen({ port: 3000 })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}

