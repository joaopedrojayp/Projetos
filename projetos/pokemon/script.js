let formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e){
      //Bloqueia o Refresh da página
        e.preventDefault()

        //Url Da Pesquisa
        let urlForm = "https://pokeapi.co/api/v2/pokemon/"

        //Valor do Inputname
        let nome =  document.getElementById("name")

        //Concatena URL com o Inputname 
        urlForm = urlForm + this.name.value

        //Transfoma os valores para Minúsculo
        urlForm = urlForm.toLocaleLowerCase()

        //ID Content
        let resposta = document.getElementById('content')

        //ID imgPokémon
        let imagem = document.getElementById('imgPokemon')

        //Resposta em HTML
        let html = ''
        
        fetch(urlForm)
       .then(resposta => resposta.json())
       .then(function (data) {
        console.log(data)
        html = 'Nome: ' + maiuscula(data.name) + '<br>'
        html = html + 'Type: ' + maiuscula(data.types[0].type.name)
        resposta.innerHTML = html

        imagem.innerHTML = "<img src='" + data.sprites.front_default 
        +  "'><img src='" + data.sprites.back_default + "'>"
       })
       .catch(function (err) {
       if(err == 'Unexpected token N in JSON at position 0'){
        html = 'Pokémon não encontrado!'
       }
       })
        
});

function maiuscula(val){
    return val[0].toUpperCase() + val.substr(1)
}