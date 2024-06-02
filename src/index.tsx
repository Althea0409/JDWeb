import "./style.css"

// 导航栏按钮点击事件
document.getElementById('shopping-cart')!.addEventListener('click', function () {
    window.location.href = 'shopcart.html';
});

document.getElementById('login-btn')!.addEventListener('click', function () {
    window.location.href = 'login.html';
});

document.getElementById('register-btn')!.addEventListener('click', function () {
    window.location.href = 'register.html';
});

// 搜索功能
document.getElementById('search-btn')!.addEventListener('click', function () {
    window.location.href = 'search.html';
});

//渲染商品列表
interface Goods {
    imgSrc: string;
    name: string;
    price: string;
    intro: string;
}

/* 
   定义了一个名为 goods 的常量数组，其中包含了若干个对象。
   对象符合 Goods 接口的定义
*/
const goods: Goods[] = [
    {
        imgSrc: './pic/1.png',
        name: '华为蓝牙耳机',
        price: '￥289.00',
        intro: '华为出品，高品质音质。'
    },
    {
        imgSrc: './pic/2.png',
        name: '索尼头戴式耳机',
        price: '￥176.00',
        intro: '舒适，隔音，无忧无虑。'
    },
    {
        imgSrc: './pic/3.png',
        name: 'ccd数码相机',
        price: '￥209.00', 
        intro: '高清照片，轻松拍摄。'
    },
    {
        imgSrc: './pic/4.png',
        name: 'MK870侧刻键盘',
        price: '￥599.00',
        intro: '轻松打字，高效工作。'
    },
    {
        imgSrc: './pic/5.png',
        name: '小米电脑包',
        price: '￥99.00',
        intro: '结实，轻盈，舒适。'
    },
    {
        imgSrc: './pic/6.png',
        name: '简约小椅子',
        price: '￥146.00',
        intro: '轻松休息，享受健康生活。'
    },
    {
        imgSrc: './pic/7.png',
        name: '小米无线吸尘器',
        price: '￥899.90',
        intro: '清洁无烦恼。'
    },
    {
        imgSrc: './pic/8.png',
        name: '狼蛛F98Pro',
        price: '￥369.00',
        intro: '手感很足，按键声音好听。'
    },
    {
        imgSrc: './pic/9.png',
        name: '自带线充电宝',
        price: '￥119.00',
        intro: '轻松充电，随时随地工作。'
    },
    {
        imgSrc: './pic/10.png',
        name: '漫步者无线耳机',
        price: '￥128.00',
        intro: '轻巧，舒适，高音质。'
    },
    {
        imgSrc: './pic/11.png',
        name: '雷蛇游戏鼠标',
        price: '￥599.00',
        intro: '高效性能，轻松玩游戏。'
    },
    {
        imgSrc: './pic/12.png',
        name: '简约办公书桌',
        price: '￥179.00', 
        intro: '轻松办公，随时随地工作。'
    },
    {
        imgSrc: './pic/13.png',
        name: '公牛移动插座',
        price: '￥142.00',
        intro: '便捷，安全，省电。'
    },
    {
        imgSrc: './pic/14.png',
        name: '小米平板6Pro',
        price: '￥1429.00',
        intro: '轻薄，高性能，超长续航。'
    },
    {
        imgSrc: './pic/15.png',
        name: 'KTC电脑显示屏',
        price: '￥729.00',
        intro: '高清显示，轻松看视频。'
    }
];


function createGoodsHtml(goods: Goods): string {
    return `
        <div class="goods">
            <div>
                <img src="${goods.imgSrc}" alt="${goods.name}">
            </div>
            <div class="name">${goods.name}</div>
            <div class="price">${goods.price}</div>
            <div class="btn" onclick="redirectToDetailPage('${goods.name}')">商品详情</div>
            <div class="btn">加入购物车</div>
        </div>
    `;
}

function renderGoods(goods: Goods[]) {
    const goodsList = document.getElementById('goods-list');
    if (goodsList) {
        goodsList.innerHTML = goods.map(createGoodsHtml).join('');
    }
}

// 为商品详情按钮添加点击事件
const detailButtons = document.querySelectorAll('.btn');
detailButtons.forEach(button => {
    if (button.textContent === "商品详情") {
        button.addEventListener('click', function() {
            const name = button.previousElementSibling?.textContent; // 使用可选链操作符
            if (name) {
                redirectToDetailPage(name); // 只有在 name 不为 null 或 undefined 时才调用函数
            }
        });
    }
});

// 页面加载后的逻辑
document.addEventListener('DOMContentLoaded', function() {
    // 渲染商品列表
    renderGoods(goods);
});

// 商品详情页面跳转函数
function redirectToDetailPage(name: string) {
    // 执行页面跳转到 detail.html，并将商品名称作为参数传递
    window.location.href = 'detail.html?name=' + name;
    // 或者使用下面这种方式
}

export{
    renderGoods,
    redirectToDetailPage,
    createGoodsHtml
}