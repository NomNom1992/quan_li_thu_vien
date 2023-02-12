const modal = document.querySelector('.modal')
const btnLogin = document.querySelector('.btn-login')
const modalBlock = document.querySelector('.modal-block')
const modalBtnLogin = document.querySelector('.modal-btn-login')
const login = document.querySelector('.login')
let accountAPI = 'https://r6vol.wiremockapi.cloud/json/account'
let accounts //store data of account

async function getAccounts() {
    try {
        const response = await fetch(accountAPI);
        accounts = await response.json();
    } 
    catch (error) {
        console.error('Error fetching data:', error);
    }
}



function showModal(){
    modal.classList.add('open')
}
function hideModal(){
    modal.classList.remove('open')
}

// function hideModalAndChangeLogin(){
//     modal.classList.remove('open')
//     login.removeChild(login.firstChild)
//     login.innerHTML = `
//         <a href="/info.html">
//             <div class="name-student">
//                 <p>Xin chào, ${accounts[i].name}</p>
//             </div>
//             <div class="avt-student" href="/info.html">
//                 <img src="imgs/avatar-370-456322.webp" alt="">
//             </div>
//         </a>
//     `
// }

function checkLogin(){
    let code = document.querySelector('.input-mssv')
    let passWord = document.querySelector('.input-pw')
    let wrongLogin = document.querySelector('.wrong-login')
    let input = document.querySelector('.input')
    
    getAccounts().then (()=> {
        console.log(accounts)
        for (let i = 0; i < accounts.length; i++) {
            if(code.value == accounts[i].username && passWord.value == accounts[i].password ){
                // hideModalAndChangeLogin()      
                modal.classList.remove('open')
                login.removeChild(login.firstChild)
                login.innerHTML = `
                    <a href="/info.html">
                        <div class="name-student">
                            <p>Xin chào, ${accounts[i].name}</p>
                        </div>
                        <div class="avt-student" href="/info.html">
                            <img src="imgs/avatar-370-456322.webp" alt="">
                        </div>
                    </a>
                `
                break;
            }
        }    
        passWord.value = ""
        wrongLogin.innerHTML = '<p>x Sai tên đăng nhập hoặc mật khẩu !</p>'
        postAccount()
    })

    // if (code.value == 20202020 && passWord.value == 123456) {
    //     hideModalAndChangeLogin()
    // }
    // else{
    //     passWord.value = ""
    //     wrongLogin.innerHTML = '<p>x Sai tên đăng nhập hoặc mật khẩu !</p>'
    // }
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





// getAccounts().then (()=> {
// console.log(accounts)})

function postAccount(){
    fetch(accountAPI, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id: 5,
        name: 'John Doe',
        username: 'johndoe',
        password: '123456',
        mssv: 123456,
        khoa: 'K66',
        avt: '/imgs/b7f63ae99c6c95b6b5d4931f1a0ce4bf.jpg',
        status: 0
    })
})
  .then(response => response.json())
  .then(jsonData => {
    console.log('Success:', jsonData);
  })
}