import "./style.css"

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

// 搜索框输入事件
const goods = [
    {
        imgSrc: './pic/1.png',
        name: '华为蓝牙耳机',
        price: '￥289.00'
    },
    {
        imgSrc: './pic/2.png',
        name: '索尼头戴式耳机',
        price: '￥176.00'
    },
];

renderGoods(goods); // 渲染商品列表

// 简单的模拟搜索功能
const searchBtn = document.getElementById('search-btn')!;
const searchInput = document.getElementById('search-input') as HTMLInputElement;
searchBtn.addEventListener('click', function () {
    const keyword = searchInput.value.trim(); // 获取搜索关键词
    const results = goods.filter(item => item.name.includes(keyword)); // 简单地根据关键词过滤搜索结果
    displaySearchResult(results); // 显示搜索结果
});

function renderGoods(goods: any[]) {
    const resultContainer = document.querySelector('.search-result')!;
    resultContainer.innerHTML = ''; // 清空原有内容
    // 渲染商品列表
    goods.forEach((item) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.name}">
            <div>${item.name}</div>
            <div>${item.price}</div>
        `;
        resultContainer.appendChild(itemElement);
    });
}

function displaySearchResult(results: any[]) {
    renderGoods(results); // 重新渲染商品列表
}

export {

}