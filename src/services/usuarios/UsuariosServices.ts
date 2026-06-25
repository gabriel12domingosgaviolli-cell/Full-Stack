import prismaClient from "../../Prisma/prismaClient";




interface cadastrarUsuario {
    nome: string;
    email: string;
    senha: string;
    telefone: string;
}



class UsuariosServices {

    async cadastrarUsuario({ nome, email, senha, telefone }: cadastrarUsuario) {

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
                telefone: telefone
            }
        })

        

        return ({ dados: "dados salvos com sucesso" })

    }
}
export { UsuariosServices }