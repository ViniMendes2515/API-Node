import livros from "../models/Livro.js";

class LivroController {
    
    static listarLivro = (req, res) => {
        livros.find().populate('autor')
            .then(livros => { res.status(200).json(livros); })
            .catch(err => { console.error(err); });
    }

    static listarLivroId = (req, res) => {
        const id = req.params.id;

        livros.findById(id).populate('autor', 'nome')
        .then(livro => { 
            res.status(200).send(livro); 
        })
        .catch(err => { 
            res.status(400).send({messaage:`${err} - falha ao listar o livro com ID ${id}`}); 
        });
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save()
            .then(livro => { 
                res.status(201).send(livro.toJSON()); 
            })
            .catch(err => { 
                res.status(500).send({messaage:`${err} - falha ao cadastrar livro`}); 
            });
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, { $set: req.body })
        .then(livro => { 
            res.status(200).send({message: 'Livro atualizado com sucesso'}); 
        })
        .catch(err => { 
            res.status(500).send({messaage:`${err} - falha ao atualizar livro`}); 
        });
    }

    static deletarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, { $set: req.body })
        .then(livro => { 
            res.status(200).send({message: 'Livro deletado com sucesso'});
        })
        .catch(err => { 
            res.status(500).send({messaage:`${err} - falha ao deletar livro`}); 
        });
    }

    static listarLivroEditora = (req, res) => {
        const editora = req.query.editora;

        livros.find({'editora': editora})
        .then(livros => { 
            res.status(200).send(livros);
        })
        .catch(err => { 
            res.status(500).send({messaage:`${err} - falha ao listar livro`}); 
        });
    }

}

export default LivroController;