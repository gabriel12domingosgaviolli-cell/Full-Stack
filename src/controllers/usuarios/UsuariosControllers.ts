import { Request, Response } from "express";

import {UsuariosServices} from "../../services/usuarios/UsuariosServices"

class UsuariosControllers {
    async cadastrarUsuario(req: Request, res: Response) {
        const { nome, email, senha, telefone } = req.body
        const enviarDadosService = new UsuariosServices()
        const resultado = await enviarDadosService.cadastrarUsuario({ 
            nome,
            email, 
            senha,
            telefone,
            id_cargos: req.body.id_cargos
        })

        return res.json(resultado)           
        }
    }


export { UsuariosControllers }