import prismaClient from '../../Prisma/prismaClient'

class CargosServices {

    async cadastrarCargo(nome: string) {
        const resposta = await prismaClient.cargos.create({
            data: {
                nome: nome
            },
            select: {
                id: true,
                nome: true
            }

        })
        return resposta
    }

}
export { CargosServices }