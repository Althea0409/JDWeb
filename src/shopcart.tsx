// 购物车页面

// 导入样式文件
import "./style.css";

// 商品接口
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

// 商品列表
// 包含多个商品项，每个商品项都符合Goods接口的定义
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

// 购物车相关函数
// 从localStorage中获取购物车数据，并将其解析为CartItem数组
function getItemList(): CartItem[] {
    const data = localStorage.getItem('shopping') || '[]';
    return JSON.parse(data);
}

// 添加商品到购物车
// 如果购物车中已有同名商品，则增加其数量；否则，将新商品添加到购物车中
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

// 从购物车中移除指定索引的商品
function removeItem(index: number): void {
    const cart = getItemList();
    cart.splice(index, 1);
    localStorage.setItem('shopping', JSON.stringify(cart));
}

// 从购物车移除所有商品
function removeAll(): void {
    localStorage.removeItem('shopping');
}

// 渲染购物车
function renderCart(): void {
    const cartList = document.getElementById('cart-list');
    if (!cartList) return;
    const items = getItemList();
    let total = 0;
    let itemCount = 0;

    // 使用 map 方法遍历购物车中的每个商品项，生成相应的 HTML 字符串。
    // 在遍历过程中，计算总价和商品总数，并查找商品列表中对应的商品信息（如图片路径和简介）
    // 生成的 HTML 字符串包含商品的图片、名称、简介、价格、数量和移除按钮。
    let htmlString = items.map((item, index) => {
        total += item.price * item.count;
        itemCount += item.count;
        const matchedGood = goods.find(g => g.name === item.name);
        const itemIntro = matchedGood ? matchedGood.intro : '暂无简介';
        // 生成购物车项的HTML字符串，并将其插入到页面中
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

    // 计算总价和商品总数，并生成结算按钮的 HTML 字符串
    htmlString += `
        <div class="cart-summary">
            <div>商品总数: ${itemCount}</div>
            <div>总价: ￥${total.toFixed(2)}</div>
            <button id="checkout-btn" class="checkout-btn">结算</button>
        </div>
    `;

    // 渲染购物车列表
    // 将生成的 HTML 字符串插入到 cartList 元素中，从而在页面上显示购物车内容
    cartList.innerHTML = htmlString;

    // 为每个移除按钮绑定点击事件，点击时移除对应商品并重新渲染购物车
    items.forEach((_, index) => {
        const removeButton = document.getElementById(`remove-item-btn-${index}`);
        if (removeButton) {
            removeButton.addEventListener('click', () => {
                removeItem(index);
                renderCart();
            });
        }
    });

    // 为结算按钮绑定点击事件，点击时显示结算成功提示，清空购物车并重新渲染购物车
    const checkoutButton = document.getElementById('checkout-btn');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            alert('结算成功！感谢您的购买。');
            removeAll();
            renderCart();
        });
    }
}

// 页面加载完成后渲染购物车
renderCart();

// 导出相关函数
export {
    getItemList,
    addItem,
    removeItem,
    removeAll,
};

/*
  这段代码实现了一个简单的购物车页面，主要功能包括：
  商品列表的展示、购物车的管理以及购物车页面的渲染。
  通过 localStorage 存储购物车数据，实现了添加、移除商品和清空购物车的功能，
  并在页面加载完成后渲染购物车页面。
*/