
import './App.css';
import React from 'react';

import {loadposts} from './utils/load-posts'
import { PostCard } from './components/postCard';
// classe app que chamar , inicializar sistema
// constructor chama props de parametro 
// cria um objeto de parametro o this.state 
// variavel couter no objeto state
class App extends React.Component{

  // state é do componente app.js prncipal , 
  //ele nao regride para conponentes anteriores
  state = {
   
    posts:[]
 }

  //metodo de ciclo de vida
  //componentDidMount: Este é o método que é executado depois que o componente foi montado no DOM. 
  //Este método é executado uma vez em um ciclo de vida de um componente e será após a primeira renderização
  // quando component for renderizado na tela 
  // fazer 
  // settimeOut configura o tempo de renderização
  // 5000 -> 5 segundos

 // timeoutUpdate = null;

// funcao do ciclo de vida do componente, 
//funcao faz algo depois que componente foi renderizado na tela 
 async componentDidMount(){

    await this.loadPosts();

    
  }
  loadPosts = async () => {

    //trabalhando com arquivo ja convertido em json
// array local posts dentro do objeto 
//state vai receber posts do arquivo json 


const postsandPhotos = await loadposts()
this.setState({posts: postsandPhotos});

  }

  componentDidUpdate(){

  }

  componentWillUnmount(){
;
  }
 
  render(){

    //chamando variaveis e array que sao do objeto state 
    //para serem renderizados no render 
    const { posts} = this.state
    //{posts.map pega o que vc quer do array e monta um novo array que 
    // no post => a variavel que vai receber dados ,
    // cria um jsx 
    //<h1> pegando o array.titulo </h1>
    // key dentro do elemento indentificador  pro 
    // renderizador enteder de qual elemento se trata 
    // se nao buga
    // no caso varios elementos de 1 array {key post.id do map}
    //do  map arrey de returno 
    return (
      
      <section className="container">
      <div className="posts">
        {posts.map(post =>(
            //chamando , usando o componente
          <PostCard 
          //key e indentificador do map
          key={post.id}
          post={post}
          />
        ) 

        )}
      
      </div>
     </section>
    );

  }
}
 
//function App() {

  
//}

export default App;
