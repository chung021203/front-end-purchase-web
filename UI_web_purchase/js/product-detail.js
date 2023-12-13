import { apiCameras } from '../API/gatewayApi.js'
import getDataFromApi from '../API/getDataFromApi.js';

// get information detail cameres
const params = new URLSearchParams(window.location.search);
const idProduct = params.get('id');
console.log(idProduct)
function start () {
    // getDataFromApi((data) =>{
    //     console.log(data)
    // }, `${apiCameras}${idProduct}`)
    getDataFromApi(renderCameraDetail, `${apiCameras}${idProduct}`)
    
}
start()
function renderCameraDetail(camera){
    const detailPage = document.querySelector('.detail-page')
    const detailItem = document.createElement('div')
    detailItem.classList.add('item-detail')
    detailItem.innerHTML = `
        <div class='detail-container'>
            <div class='header-detail'>
                <h2 class='detail-heading'>${camera.name}</h2>
                <img class='detail-img' src='${camera.urlImage}' alt=''>
            </div>
            <div class='body-detail'>
                <p>Mã sản phẩm:<span class='product-side'> ${camera.id}</span></p>
                <p>Giá bán:<span class='product-price product-side'>${camera.price}</span></p>
                <p>Company:<span class='product-side'>${camera.company}</span></p>
                <p>Color:<span class='product-side'>${camera.color}</span></p>
                <button class='btn-detail'>MUA HÀNG</button>
                
            </div>

        </div>
    `
    detailPage.appendChild(detailItem)
    

}
function handleBoughtProduct() {
    const btnDetail = document.querySelector('.btn-detail');

    // Kiểm tra xem nút có tồn tại không trước khi thêm sự kiện
    if (btnDetail) {
        btnDetail.addEventListener('click', function () {
            
            
        });
    } else {
        console.error('Không tìm thấy phần tử nút mua hàng.');
    }
}

// Sử dụng sự kiện "load" thay vì "DOMContentLoaded"
window.addEventListener('load', function () {
    handleBoughtProduct();
});



// function getDataFromApi(callback,urlApi){
//     fetch(urlApi)
//     .then((response) =>{
//         return response.json()
//     })
//     .then(callback)

// }
// getDataFromApi((data) =>{console.log(data)}, `http://localhost:3000/camera/${idProduct}`)


