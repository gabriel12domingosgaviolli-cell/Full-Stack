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

        async visualizarDadosGeral(req: Request, res: Response) {
            const enviarDados = new UsuariosServices()
            const resposta = await enviarDados.visualizarDadosGeral()
            return res.json(resposta)
        }

        async visualizarUsuarioUnicoPOST(req: Request, res: Response) {
            const { id } = req.body
            const enviarDados = new UsuariosServices()
            const resposta = await enviarDados.visualizarUsuarioUnico(id)
            return res.json(resposta)
        }
}

export { UsuariosControllers }