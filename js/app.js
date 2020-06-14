const posts = new Posts()

document.addEventListener('DOMContentLoaded', () => {
   if (document.getElementById('cards')) {
      posts.mostrarposts()
   }
   if (document.getElementById('post')) {
      const id = window.location.search[1]
      posts.mostarPost(id)
   }


  
})
function comentario(){
   document.getElementById('btnComment').disabled = true
   document.getElementById('loader').style.display = 'block'
   const id = window.location.search[1]
   posts.mostrarcomment(id)
   
}