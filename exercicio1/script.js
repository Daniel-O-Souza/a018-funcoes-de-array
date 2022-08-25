const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// EXERCÍCIO 1:

// A:

const maiuscula = (parametro1) =>{
    return{
        nome: "ASTRODEV",
        profissao:"DEV DAS ESTRELAS",
        username: "ASTRODEV_LABENU",
        senha: "MELHORDETODOS"
    }
}
console.log(maiuscula)


// B:

const corrido = (parametros2) =>{

    return console.log(`${objeto.nome} ${objeto.profissao} ${objeto.username} ${objeto.senha}`)
}

corrido(objeto)