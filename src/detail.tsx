// 商品详情页

// 导入样式文件
import "./style.css";

// 商品接口
interface Goods {
    imgSrc: string;
    name: string;
    price: string;
    intro:string;
}

// 商品列表
const goods: Goods[] = [
    {
        imgSrc: './pic/1.png',
        name: '华为蓝牙耳机',
        price: '￥289.00',
        intro: '华为蓝牙耳机，高品质音质，轻巧便携，让你享受音乐的每一刻'
    },
    {
        imgSrc: './pic/2.png',
        name: '索尼头戴式耳机',
        price: '￥176.00',
        intro: '索尼头戴式耳机，高品质音质，轻巧便携，让你享受音乐的每一刻'
    },
    {
        imgSrc: './pic/3.png',
        name: 'ccd数码相机',
        price: '￥209.00',
        intro: 'ccd数码相机，高清照片，超长续航，让你拍出更好的照片'
    },
    {
        imgSrc: './pic/4.png',
        name: 'MK870侧刻键盘',
        price: '￥599.00',
        intro: 'MK870侧刻键盘，高效工作，轻松打字，让你更高效地工作'
    },
    {
        imgSrc: './pic/5.png',
        name: '小米电脑包',
        price: '￥99.00',
        intro: '小米电脑包，轻巧便携，让你随时随地工作'
    },
    {
        imgSrc: './pic/6.png',
        name: '简约小椅子',
        price: '￥146.00',
        intro: '简约小椅子，舒适休闲，让你享受生活的每一天'
    },
    {
        imgSrc: './pic/7.png',
        name: '小米无线吸尘器',
        price: '￥899.90',
        intro: '小米无线吸尘器，高效清洁，让你每天更清爽'
    },
    {
        imgSrc: './pic/8.png',
        name: '狼蛛F98Pro',
        price: '￥369.00',
        intro: '狼蛛F98Pro，高效工作，轻松打字，让你更高效地工作'
    },
    {
        imgSrc: './pic/9.png',
        name: '自带线充电宝',
        price: '￥119.00',
        intro: '自带线充电宝，随时随地充电，让你生活更充实'
    },
    {
        imgSrc: './pic/10.png',
        name: '漫步者无线耳机',
        price: '￥128.00',
        intro: '漫步者无线耳机，高品质音质，轻巧便携，让你享受音乐的每一刻'
    },
    {
        imgSrc: './pic/11.png',
        name: '雷蛇游戏鼠标',
        price: '￥599.00',
        intro: '雷蛇游戏鼠标，高效工作，轻松打字，让你更高效地工作'
    },
    {
        imgSrc: './pic/12.png',
        name: '简约办公书桌',
        price: '￥179.00',
        intro: '简约办公书桌，舒适休闲，让你享受生活的每一天'
    },
    {
        imgSrc: './pic/13.png',
        name: '公牛移动插座',
        price: '￥142.00',
        intro: '公牛移动插座，随时随地充电，让你生活更充实'
    },
    {
        imgSrc: './pic/14.png',
        name: '小米平板6Pro',
        price: '￥1429.00',
        intro: '小米平板6Pro，高效工作，轻松打字，让你更高效地工作'
    },
    {
        imgSrc: './pic/15.png',
        name: 'KTC电脑显示屏',
        price: '￥729.00',
        intro: 'KTC电脑显示屏，高清显示，让你看清屏幕'
    }
];

// 定义了一个 getProductNameFromUrl 函数，用于从URL中获取商品名称。
function getProductNameFromUrl(): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('name');
}

// 定义了一个 renderProductDetail 函数，用于将商品详情渲染到页面上。
function renderProductDetail(product: Goods): void {
    const productDetail = document.getElementById('product-detail');
    if (productDetail) {
        productDetail.innerHTML = `
            <div class="product">
                <div class="product-image">
                    <img src="${product.imgSrc}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-intro">${product.intro}</div>
                    <div class="product-price">${product.price}</div>
                </div>
            </div>
        `;
    } else {
        console.error('未找到商品详情元素');
    }
}

// 定义了一个 addToCart 函数，用于将商品添加到购物车中，如果购物车中已有同名商品，则增加其数量
function addToCart(product: Goods): void {
    const cartItem = { name: product.name, price: parseFloat(product.price.replace('￥', '')), count: 1 };
    let cart = JSON.parse(localStorage.getItem('shopping') || '[]');
    let existingItem = cart.find((item: { name: string }) => item.name === cartItem.name);
    if (existingItem) {
        existingItem.count += cartItem.count;
    } else {
        cart.push(cartItem);
    }
    localStorage.setItem('shopping', JSON.stringify(cart));
    alert('商品已加入购物车');
}

// 监听DOMContentLoaded事件
// 实现了在页面加载完成后自动获取商品信息并渲染商品详情
// 同时为关键按钮添加点击事件处理程序，确保用户可以方便地查看商品详情和将商品添加到购物车。
document.addEventListener('DOMContentLoaded', () => {
    const productName = getProductNameFromUrl();
    if (productName) {
        const product = goods.find(item => item.name === productName);
        if (product) {
            renderProductDetail(product);

            const backToHomeButton = document.getElementById('back-to-home');
            if (backToHomeButton) {
                backToHomeButton.addEventListener('click', () => {
                    window.location.href = 'index.html';
                });
            } else {
                console.error('未找到返回首页按钮');
            }
    
            const addToCartButton = document.getElementById('add-to-cart');
            if (addToCartButton) {
                addToCartButton.addEventListener('click', () => {
                    addToCart(product);
                });
            } else {
                console.error('未找到加入购物车按钮');
            }
        } else {
            console.error('未找到该商品');
        }
    } else {
        console.error('未找到商品名称');
    }
});

export{}