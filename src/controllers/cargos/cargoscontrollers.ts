import { Request, Response } from 'express';

import { CargosServices } from '../../services/cargos/cargosServices';

class CargosControllers {
    async cadastrarCargo(req: Request, res: Response) {
        const { nome } = req.body;
        const enviarDadosServices = new CargosServices();
        const resposta = await enviarDadosServices.cadastrarCargo(nome);
        return res.json(resposta)
    }
}

export { CargosControllers };