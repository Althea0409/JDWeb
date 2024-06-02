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

//搜索功能
document.getElementById('search-btn')!.addEventListener('click', function () {
    window.location.href = 'search.html';
});

//渲染商品列表
interface Goods {
    imgSrc: string;
    name: string;
    price: string;
}

const goods: Goods[] = [
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
    {
        imgSrc: './pic/3.png',
        name: 'ccd数码相机',
        price: '￥209.00'
    },
    {
        imgSrc: './pic/4.png',
        name: 'MK870侧刻键盘',
        price: '￥599.00'
    },
    {
        imgSrc: './pic/5.png',
        name: '小米电脑包',
        price: '￥99.00'
    },
    {
        imgSrc: './pic/6.png',
        name: '简约小椅子',
        price: '￥146.00'
    },
    {
        imgSrc: './pic/7.png',
        name: '小米无线吸尘器',
        price: '￥899.90'
    },
    {
        imgSrc: './pic/8.png',
        name: '狼蛛F98Pro',
        price: '￥369.00'
    },
    {
        imgSrc: './pic/9.png',
        name: '自带线充电宝',
        price: '￥119.00'
    },
    {
        imgSrc: './pic/10.png',
        name: '漫步者无线耳机',
        price: '￥128.00'
    },
    {
        imgSrc: './pic/11.png',
        name: '雷蛇游戏鼠标',
        price: '￥599.00'
    },
    {
        imgSrc: './pic/12.png',
        name: '简约办公书桌',
        price: '￥179.00'
    },
    {
        imgSrc: './pic/13.png',
        name: '公牛移动插座',
        price: '￥142.00'
    },
    {
        imgSrc: './pic/14.png',
        name: '小米平板6Pro',
        price: '￥1429.00'
    },
    {
        imgSrc: './pic/15.png',
        name: 'KTC电脑显示屏',
        price: '￥729.00'
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
            <div class="btn">商品详情</div>
            <div class="btn">加入购物车</div>
        </div>
    `;
}

function renderGoods(goods: Goods[]): void {
    const goodsList = document.getElementById('goods-list');
    if (goodsList) {
        goodsList.innerHTML = goods.map(createGoodsHtml).join('');
    }
}

renderGoods(goods);
export {
    renderGoods as default   // 导出renderGoods函数                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
}