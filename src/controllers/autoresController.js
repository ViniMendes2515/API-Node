import autores from "../models/Autor.js";

class AutorController {
    
    static listarAutor = (req, res) => {
        autores.find({})
            .then(autor => { res.status(200).json(autor); })
            .catch(err => { console.error(err); });
    }

    static listarAutorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id)
        .then(autor => { 
            res.status(200).send(autor) 
        })
        .catch(err => { 
            res.status(400).send({messaage:`${err} - falha ao listar o Autor com ID ${id}`}); 
        });
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save()
            .then(autor => { res.status(201).send(autor.toJSON()) })
            .catch(err => { 
                res.status(500).send({messaage:`${err} - falha ao cadastrar Autor`}); 
            });
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, { $set: req.body })
        .then(autor  => { 
            res.status(200).send({message: 'Autor atualizado com sucesso'}) 
        })
        .catch(err => { 
            res.status(500).send({messaage:`${err} - falha ao atualizar Autor`}); 
        });
    }

    static deletarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, { $set: req.body })
        .then(Autor => { 
            res.status(200).send({message: 'Autor deletado com sucesso'}) 
        })
        .catch(err => { 
            res.status(500).send({messaage:`${err} - falha ao deletar Autor`}); 
        });
    }
}

export default AutorController;