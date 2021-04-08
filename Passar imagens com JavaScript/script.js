let foto = document.getElementsByTagName("img")[0]
let z = 0


function addImagem(i){
    return i  
}

let imagens = [
    addImagem("./ImagensPaisagem/paisagem1.png"),
    addImagem("./ImagensPaisagem/paisagem2.png"),
    addImagem("./ImagensPaisagem/paisagem3.png"),
    addImagem("./ImagensPaisagem/paisagem4.png"),  //pode adicionar qualquer imagem sem precisar alterar o codigo
]
let ultimo = imagens.length-1


foto.src = imagens[z]

function avançar(){
    if(z < imagens.length){
        z++ 
        foto.src = imagens[z]
        console.log(z)
    } 
    if(z == imagens.length){
        z = 0
        foto.src = imagens[z]
        console.log(z)
    }    
}
function retornar(){
    if(z == 0){
        z = ultimo
        foto.src = imagens[z]
        console.log(z)
    }else{
        z--
        foto.src = imagens[z]
        console.log(z)
    }
}