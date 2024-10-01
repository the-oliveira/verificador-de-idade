function verificar() {
    var ano = new Date()
    var anoAtual = ano.getFullYear() //ano atual
    var formularioAno = document.querySelector('input#txtano')
    var nascimento = formularioAno.value //recebendo valores da query
    var idade = Number(anoAtual) - Number(nascimento) //calculando a idade

    var resultado = document.querySelector('div#resultado')
    var fsexo = document.getElementsByName('radsex')
    
    var img = document.createElement('img') //criar o elemento para foto
    img.setAttribute('id', 'foto') // adicionando o id para o img

    if (fsexo[0].checked){ //Verifica se o valor na posição 0 está checado (no caso o Masculino)
        if (idade >= 0 && idade <= 10){
            //código para criança
            img.setAttribute('src', 'img/child-homem.png')
            resultado.innerHTML = `Você é um homem de ${idade} anos!`
        }else if (idade > 10 && idade <= 25){
            //código para jovem
            img.setAttribute('src', 'img/jovem-homem.png')
            resultado.innerHTML = `Você é um homem de ${idade} anos!`
        } else if (idade > 25 && idade < 60){
            //código para adulto
            img.setAttribute('src', 'img/adulto.homem.png')
            resultado.innerHTML = `Você é um homem de ${idade} anos!`
        }else if (idade > 60 && idade <= 120){
            //código para idoso
            img.setAttribute('src', 'img/idoso-homem.png')
            resultado.innerHTML = `Você é um homem de ${idade} anos!`
        }else{
            alert('[ERRO] Idade informada inválida!')
        }
    } else {
        if (idade >= 0 && idade <= 10){
            //código para criança
            img.setAttribute('src', 'img/child-mulher.png')
            resultado.innerHTML = `Você é uma mulher de ${idade} anos!`
        } else if (idade > 10 && idade <= 25){
            //código para jovem
            img.setAttribute('src', 'img/jovem-mulher.png')
            resultado.innerHTML = `Você é uma mulher de ${idade} anos!`
        } else if (idade > 25 && idade < 60){
            //código para adulto
            img.setAttribute('src', 'img/adulta-mulher.png')
            resultado.innerHTML = `Você é uma mulher de ${idade} anos!`
        } else if (idade > 60 && idade <= 120){
            //código para idoso
            img.setAttribute('src', 'img/idoso-mulher.png')
            resultado.innerHTML = `Você é uma mulher de ${idade} anos!`
        } else{
            alert('[ERRO] Idade informada inválida!')
        }
    
    }
    resultado.appendChild(img)
}