class API {


    async obtenerdatos(data) {
        // url de la API
        const apiblog = "http://jsonplaceholder.typicode.com"
        // Obtener los datos de la API
        const datos = await fetch(`${apiblog}/${data}`)
        // convertir datos a JSON
        const dtsJSON = datos.json()
        //retorna los datos JSON
        return {
            dtsJSON
        }
    }
    // consultar todos los posts
    async consultarposts() {
        const dts = 'posts'
        const posts = await this.obtenerdatos(dts)
        return posts.dtsJSON

    }
    

    async consultarpost(id) {
        console.log("prueba")
        const dts = `posts/${id}`
        const posts = await this.obtenerdatos(dts)
        console.log(posts.dtsJSON)
        return posts.dtsJSON

    }

    async consultarcomentarios(id) {
        const dts = `posts/${id}/comments`
        const posts = await this.obtenerdatos(dts)
        return posts.dtsJSON

    }
    // mantener una sola instancia
    static getInstance() {
        return this.intance || (this._intance = new this())
    }

}