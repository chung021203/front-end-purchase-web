function getDataFromApi(callback,urlApi){
    fetch(urlApi)
    .then((response) =>{
        return response.json()
    })
    .then(callback)

}
export default getDataFromApi
