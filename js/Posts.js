class Posts {
  constructor() {
    this.api = API.getInstance()

  }

  async mostrarposts() {
    const cards = document.getElementById('cards')
    const posts = await this.api.consultarposts()
    document.getElementById('loader').remove()
    /* for (const key in posts){
         cards.innerHTML +=` <div class="col-12 col-sm-6 col-md-4 pb-3">
         <div class="card">
           <div class="card-body">
             <h5 class="card-title"> ${posts[key].title}</h5>
             <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
             <p class="card-text">${posts[key].body}</p>
             <a href="#" class="card-link">Card link</a>
             <a href="#" class="card-link">Another link</a>
           </div>
         </div>
       </div>
      `
     }*/

    posts.forEach(posts => {
      cards.innerHTML += `<div class="col-12 col-sm-6 col-md-4 pb-3">
           <div class="card">
             <div class="card-body">
               <h5 class="card-title"> ${posts.title}</h5>
               <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
               <p class="card-text">${posts.body}</p>
               <a href="/views/posts.html?${posts.id}" class="card-link">Leer Mas...</a>
        
             </div>
           </div>
         </div>`
    });

  }

  async mostarPost(id) {
    const postDiv = document.getElementById('post')

    const post = await this.api.consultarpost(id)
    document.getElementById('loader').style.display = 'none'
    postDiv.innerHTML = ` <h1>${post.title}</h1>
    <p>${post.body} </p>
    <input id="btnComment" type="button" onclick="comentario()" value="Cargar Comentarios" class="btn btn-primary">`

  }
  async mostrarcomment(id) {
    const comentarioDiv = document.getElementById('comentario')
    const comentarios = await this.api.consultarcomentarios(id)
    document.getElementById('loader').style.display = 'none'
    comentarios.forEach(comentario => {
      comentarioDiv.innerHTML += `<h3>${comentario.email}</h3>
        <p> ${comentario.body} </p>`
    })
  }


}