import { apiCameras } from '../API/gatewayApi.js'
import getDataFromApi from '../API/getDataFromApi.js';

// get information detail cameres
const params = new URLSearchParams(window.location.search);
const idProduct = params.get('id');
console.log(idProduct)
function start () {
    getDataFromApi((data) =>{
        console.log(data)
    }, `${apiCameras}${idProduct}`)
}
start()
function renderCameraDetail(camera){
    const cameraDetailContanier = document.querySelector('.camera-detail')
    const detailItem = document.createElement('div')
    detailItem.classList.add('.item-detail')
    // detailItem.innerHTML = 

}
// function getDataFromApi(callback,urlApi){
//     fetch(urlApi)
//     .then((response) =>{
//         return response.json()
//     })
//     .then(callback)

// }
// getDataFromApi((data) =>{console.log(data)}, `http://localhost:3000/camera/${idProduct}`)


