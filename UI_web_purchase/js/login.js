// xử lí hiện form đăng nhập
const headerUser = document.querySelector('.header-user')
const modalItem = document.querySelector('.modal')
headerUser.onclick = ()=>{
    modalItem.classList.remove('display')


}
// xử lí tắt form đăng nhập
const iconCloseLogin = document.querySelector('.btn-modal-close')
iconCloseLogin.onclick = ()=>{
    modalItem.classList.add('display')
}
