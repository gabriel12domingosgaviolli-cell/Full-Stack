import {Router } from 'express'
 
// Importação dos controladores
import { UsuariosControllers } from './controllers/usuarios/UsuariosControllers'
 
const router = Router()/// istansiando o Router do express, para criar as rotas
 
// criação da rota de endPoints
router.post('/cadastrarUsuarios', new UsuariosControllers().cadastrarUsuario)
 
export default router
 