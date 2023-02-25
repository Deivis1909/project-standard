export const loadposts = async () => {
    // Fetch comando javascript para fazer requisiçoes a um api externo 
const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')
const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

const [posts,photos] =  await Promise.all([postsResponse,photosResponse]);
// recebendo um retorto array de posts como resposta/response da internet

//convertendo pra json
const postsJson = await posts.json();
const photosJson = await photos.json();

 // funcao de zipper une dois arrays com tamnhos diferentes
// map funcao que pega um array e de retorno constroi um novo array
// post do site da internet e um objeto ...post pega tudo de post
//return faz a juncao
//cover pega a foto da para a junçao comn o outro array
//photosJson para cada post pega um [index/indice].url 
const postsandPhotos = postsJson.map((post,index) =>{
  return{...post, cover:photosJson[index].url}

});
// faz toda a parte de busca/requisicao 
//no outro api internet e retorna post/imagem montado com 
//e resposta / response
return postsandPhotos
}