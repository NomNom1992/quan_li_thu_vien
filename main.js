const modal = document.querySelector('.modal')
const btnLogin = document.querySelector('.btn-login')
const modalBlock = document.querySelector('.modal-block')
const modalBtnLogin = document.querySelector('.modal-btn-login')
const login = document.querySelector('.login')


function showModal(){
    modal.classList.add('open')
}
function hideModal(){
    modal.classList.remove('open')
}

function hideModalAndChangeLogin(){
    modal.classList.remove('open')
    login.removeChild(login.firstChild)
    login.innerHTML = `
        <a href="/info.html">
            <div class="name-student">
                <p>Xin chào, Lê Thanh Nam</p>
            </div>
            <div class="avt-student" href="/info.html">
                <img src="imgs/avatar-370-456322.webp" alt="">
            </div>
        </a>
    `
}

function checkLogin(){
    let code = document.querySelector('.input-mssv')
    let passWord = document.querySelector('.input-pw')
    let wrongLogin = document.querySelector('.wrong-login')
    let input = document.querySelector('.input')
    
    if (code.value == 20202020 && passWord.value == 123456) {
        hideModalAndChangeLogin()
    }
    else{
        passWord.value = ""
        wrongLogin.innerHTML = '<p>x Sai tên đăng nhập hoặc mật khẩu !</p>'
    }
}

btnLogin.addEventListener('click', showModal)
modal.addEventListener('click', hideModal)
modalBlock.addEventListener('click', function(event){
			event.stopPropagation()
		})
modalBtnLogin.addEventListener('click', checkLogin) 

let imgs = [
    "imgs/New_Student.jpg",
    "imgs/Slide2_1.png",
    "imgs/chaotan.jpg",
    "imgs/Screenshot.png"
]
function changeImage(currentIndex) {
    document.querySelector(".slide-show").style = "background-image: url(" + imgs[currentIndex] + ")"
}
let currentIndex = 0
setInterval(function() {
        currentIndex = (currentIndex + 1) % imgs.length;
        changeImage(currentIndex);
    }, 5000)
