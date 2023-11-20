import express from "express";
import db from "./config/dbConnect.js"
import livros from "./models/Livro.js"

db.on("error", console.log.bind(console, 'Erro de conexao'));
db.once("open", () => {
    console.log('conexao com o banco criada com sucesso');
})

const app = express();

app.use(express.json());

// const livros = [
//       {id: 1, "titulo": "Senhor dos Aneis"}
//     , {id: 2, "titulo": "The Witcher"}
// ]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
})

app.get('/livros', (req,res) =>{
    livros.find({})
    .then(livros => { res.status(200).json(livros); })
    .catch(err => { console.error(err); });
}) 

app.get('/livros/:id', (req,res) =>{
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
})

app.post('/livros', (req,res) =>{
    livros.push(req.body);
    res.status(201).send(`Livro foi cadastrado com sucesso`);
})


app.put('/livros/:id', (req,res) =>{
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

app.delete('/livros/:id', (req,res) =>{
    let { id } = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso`);
})

function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id);
}

export default app 