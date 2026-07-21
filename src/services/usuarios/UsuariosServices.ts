import prismaClient from "../../Prisma/prismaClient";




interface cadastrarUsuario {
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    id_cargos: string;
}
interface visualizarUsuarioUnico {
    id: string;
}


class UsuariosServices {

    async cadastrarUsuario({ nome, email, senha, telefone, id_cargos }: cadastrarUsuario) {

        const emailExiste= await prismaClient.usuario.findFirst({
            where:{
                email: email
            }

        })
        if(emailExiste){
            throw new Error('E-mail ja cadastrado')
        }

        await prismaClient.usuario.create({
            data: {
                nome: nome,
                email: email,            
                senha: senha,
                telefone: telefone,
                id_cargo: id_cargos
            }
            
        })

        

        return ({ dados: "dados salvos com sucesso" })

    }

    async visualizarDadosGeral() {
        const resposta = await prismaClient.usuario.findMany({
            select: {
                id: true, 
                nome: true,
                email: true, 
                status: true, 
                telefone: true, 
            }        
        })


        return resposta
    }

    async visualizarUsuarioUnico(id: string) {
        const resposta = await prismaClient.usuario.findFirst({
            where: {
                id: id
            },
            select: {
                id: true, 
                nome: true,
                email: true,
                status: true,
                telefone: true
            }
        })

        return resposta

    }
}
export { UsuariosServices }