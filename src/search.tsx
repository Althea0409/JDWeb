import "./style.css"

// 商品数据
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

// 获取元素
const searchBtn = document.getElementById('search-btn')!;
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const resultContainer = document.querySelector('.search-result');

// 渲染商品列表
renderGoods(goods);

// 搜索按钮点击事件
searchBtn.addEventListener('click', function () {
    const keyword = searchInput.value.trim(); // 获取搜索关键词
    const results = goods.filter(item => item.name.includes(keyword)); // 根据关键词过滤搜索结果
    renderGoods(results); // 根据搜索结果重新渲染商品列表
});

// 渲染商品列表的函数
function renderGoods(goods: any[]) {
    if (resultContainer) {
        resultContainer.innerHTML = ''; // 清空原有内容
        // 渲染包含搜索关键词的商品列表
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
    } else {
        console.error('Result container not found');
    }
}

export {};
