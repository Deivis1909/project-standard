export const PostCard = (props) => {

    // props que serao passados parametros tudo que esta dentro de post
    // props {post.title} , {post.body} parametros 
    //para a construcao / renderizacao
    const post = props.post;
    // quando return tem mais de uma coisa , colocar dentro dos parenteses
    return(
        <div className='post'>
        <img src={post.cover} alt={post.title}/>
        
      <div className="post-card">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
     </div> 
    )
}