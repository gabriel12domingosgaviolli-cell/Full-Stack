import {Router } from 'express'
 
// Importação dos controladores
import { UsuariosControllers } from './controllers/usuarios/UsuariosControllers'
import { CargosControllers } from './controllers/cargos/cargoscontrollers'
 
const router = Router()/// istansiando o Router do express, para criar as rotas

 
// criação da rota de endPoints
router.post('/cadastrarUsuarios', new UsuariosControllers().cadastrarUsuario)

router.post('/visualizarUsuarioUnico', new UsuariosControllers().visualizarUsuarioUnicoPOST)

router.get('/visualizarUsuarioUnicoGet/:id', new UsuariosControllers().visualizarUsuarioUnicoGET)

router.get('/visualizarUsuarios', new UsuariosControllers().visualizarDadosGeral)

router.post('/CadastrarCargos', new CargosControllers().cadastrarCargo)
 
export default router
 