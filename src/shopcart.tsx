import "./style.css";

export type Item = {
    imgSrc: string;
    name: string;
    price: number;
    count: number;
    intro: string;
};

// 获取购物车中的物品列表
function getItemList(): Item[] {
    let data = localStorage.getItem('shopping');
    if (data == null) {
        data = '[]';
    }
    return JSON.parse(data);
}

// 添加物品到购物车
function addItem(item: Item): void {
    let arr = getItemList();
    let fi = arr.find((i) => i.name === item.name);
    if (fi) {
        fi.count += item.count;
    } else {
        arr.push(item);
    }
    localStorage.setItem('shopping', JSON.stringify(arr));
}

// 移除购物车中的某个物品
function removeItem(index: number): void {
    let arr = getItemList();
    arr.splice(index, 1);
    localStorage.setItem('shopping', JSON.stringify(arr));
}

// 清空购物车
function removeAll(): void {
    localStorage.removeItem('shopping');
}

// 渲染购物车页面
function renderCart(): void {
    const cartList = document.getElementById('cart-list');
    if (!cartList) return;

    const items = getItemList();
    let total = 0;
    let itemCount = 0;

    let htmlString = '';
    items.forEach((item, index) => {
        total += item.price * item.count;
        itemCount += item.count;
        htmlString += `
            <div class="cart-item">
                <img src="${item.imgSrc}" alt="${item.name}" class="item-img">
                <div class="item-name">${item.name}</div>
                <div class="item-intro">${item.intro}</div>
                <div class="item-price">￥${item.price}</div>
                <div class="item-count">${item.count}</div>
                <button id="remove-item-btn-${index}" class="remove-item-btn">移除</button>
            </div>
        `;
    });

    htmlString += `
        <div class="cart-summary">
            <div>商品总数: ${itemCount}</div>
            <div>总价: ￥${total.toFixed(2)}</div>
            <button id="checkout-btn" class="checkout-btn">结算</button>
        </div>
    `;

    cartList.innerHTML = htmlString;

    // 添加移除按钮事件监听器
    items.forEach((_, index) => {
        const removeButton = document.getElementById(`remove-item-btn-${index}`);
        if (removeButton) {
            removeButton.addEventListener('click', () => {
                removeItem(index);
                renderCart();
            });
        }
    });

    // 添加结算按钮事件监听器
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
