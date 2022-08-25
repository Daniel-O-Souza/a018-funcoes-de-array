const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// EXERCÍCIO 1:

// A:

const maiuscula = (objetos) =>{

    return{

        nome: "ASTRODEV",
        profissao: "Dev das estrelas".toUpperCase(),
        username: "atrodev_labenu".toUpperCase(),
        senha: "melhorDeTodos".toUpperCase()
    }
}

console.log(maiuscula)