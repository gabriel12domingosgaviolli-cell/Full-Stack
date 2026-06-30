import prismaClient from "../../Prisma/prismaClient";




interface cadastrarUsuario {
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    id_cargos: string;
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
}
export { UsuariosServices }