import "./style.css";

interface CartItem {
    name: string;
    price: number;
    count: number;
    intro: string;
    imgSrc: string;
}

interface Goods {
    imgSrc: string;
    name: string;
    price: string;
    intro: string;
}

const goods: Goods[] = [
    // 商品列表
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

function getItemList(): CartItem[] {
    const data = localStorage.getItem('shopping') || '[]';
    return JSON.parse(data);
}

function addItem(item: CartItem): void {
    const cart = getItemList();
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
        existingItem.count += item.count;
    } else {
        cart.push(item);
    }
    localStorage.setItem('shopping', JSON.stringify(cart));
}

function removeItem(index: number): void {
    const cart = getItemList();
    cart.splice(index, 1);
    localStorage.setItem('shopping', JSON.stringify(cart));
}

function removeAll(): void {
    localStorage.removeItem('shopping');
}

function renderCart(): void {
    const cartList = document.getElementById('cart-list');
    if (!cartList) return;

    const items = getItemList();
    let total = 0;
    let itemCount = 0;

    let htmlString = items.map((item, index) => {
        total += item.price * item.count;
        itemCount += item.count;
        const matchedGood = goods.find(g => g.name === item.name);
        const itemIntro = matchedGood ? matchedGood.intro : '暂无简介'; 
    
        return `
            <div class="cart-item">
                <img src="${matchedGood?.imgSrc}" alt="${item.name}" class="item-img">
                <div class="item-name">${item.name}</div>
                <div class="item-intro">${itemIntro}</div>
                <div class="item-price">￥${item.price}</div>
                <div class="item-count">${item.count}</div>
                <button id="remove-item-btn-${index}" class="remove-item-btn">移除</button>
            </div>
        `;
    }).join('');

    htmlString += `
        <div class="cart-summary">
            <div>商品总数: ${itemCount}</div>
            <div>总价: ￥${total.toFixed(2)}</div>
            <button id="checkout-btn" class="checkout-btn">结算</button>
        </div>
    `;

    cartList.innerHTML = htmlString;

    items.forEach((_, index) => {
        const removeButton = document.getElementById(`remove-item-btn-${index}`);
        if (removeButton) {
            removeButton.addEventListener('click', () => {
                removeItem(index);
                renderCart();
            });
        }
    });

    const checkoutButton = document.getElementById('checkout-btn');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            alert('结算成功！感谢您的购买。');
            removeAll();
            renderCart();
        });
    }
}
renderCart();

export {
    getItemList,
    addItem,
    removeItem,
    removeAll,
};
