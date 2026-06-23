interface cadastrarUsuario {
    nome: string;
    email: string;
    senha: string;
    telefone: string;
}



class UsuariosServices {

    async cadastrarUsuario({ nome, email, senha, telefone }: cadastrarUsuario) {
        return ({ dados: "dados salvos com sucesso" })

    }
}
export { UsuariosServices }