import "./style.css";

// 导航栏按钮点击事件
document.getElementById('index-btn')!.addEventListener('click', function () {
    window.location.href = 'index.html';
});

document.getElementById('shopping-cart')!.addEventListener('click', function () {
    window.location.href = 'shopcart.html';
});

document.getElementById('login-btn')!.addEventListener('click', function () {
    window.location.href = 'login.html';
});

document.getElementById('register-btn')!.addEventListener('click', function () {
    window.location.href = 'register.html';
});

export{
        
}