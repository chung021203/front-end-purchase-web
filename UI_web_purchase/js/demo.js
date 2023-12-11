const cameras = [
    {
        id: 1,
        urlImage: 'https://binhminhdigital.com/StoreData/Images/Product/NIKON_Z7II-body-1.jpg',
        name: 'Nikon Z7 II + Kit 24-70mm f/4 (Chính hãng VIC)',
        price: '91,870,000 VNĐ'
    },
    {
        id: 2,
        urlImage: 'https://binhminhdigital.com/StoreData/Images/Product/nikon-z7-ii-ngam-chuyen-ftz-chinh-hang-vic-1.jpg',
        name: 'Nikon Z7 II + Ngàm chuyển FTZ (Chính hãng VIC)',
        price: '76,000,000 VNĐ'
    },
    {
        id: 3,
        urlImage: 'https://binhminhdigital.com/StoreData/Images/Product/NIKON_Z7II-body-1.jpg',
        name: 'Nikon Z7 II (Body) (Chính hãng VIC), best-seller',
        price: '77,000,000 VNĐ'
    },
    {
        id: 4,
        urlImage: 'https://binhminhdigital.com/StoreData/images/Product/canon-eos-5d-mark-iv-body.jpg',
        name: 'Máy Ảnh Canon EOS 5D Mark IV Body (Nhập Khẩu)',
        price: '42,000,000 VNĐ'
    },
    {
        id: 5,
        urlImage: 'https://binhminhdigital.com/StoreData/images/Product/may-anh-canon-eos-m200.jpg',
        name: 'MÁY ẢNH CANON EOS M200 KIT EF-M15-45MM F3.5-6.3 IS STM/ ĐEN',
        price: '15,000,000 VNĐ'
    },
    
]
function renderProduct (){
    const listProduct = cameras.map((camera) =>{
        return `
        <li class= 'camera-item-${camera.id.toString() } item'>
            <div class='img-camera'>  <img src='${camera.urlImage}' alt=''></div>
           
            <div class= 'body-item'>
                <h2 class= 'name-camera'>${camera.name}</h2>
                <p class= 'price-camera'>${camera.price}</p>
                <button class= 'btn-bought'>Mua Hang</button>
            </div>


        </li>
        `
    });
    document.querySelector('.list-cameras').innerHTML = listProduct.join('')

}
function start() {
    renderProduct()
}
start()
