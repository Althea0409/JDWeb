// 商品搜索页面

// 导入样式文件
import "./style.css"

// 商品接口
interface Goods {
    imgSrc: string;
    name: string;
    price: string;
    intro: string;
}

// 商品列表
const goods: Goods[] = [
    {
        imgSrc: './pic/1.png',
        name: '华为蓝牙耳机',
        price: '￥289.00',
        intro: '华为蓝牙耳机，畅享音乐，自由无束缚'
    },
    {
        imgSrc: './pic/2.png',
        name: '索尼头戴式耳机',
        price: '￥176.00',
        intro: '索尼头戴式耳机，沉浸音效，乐享非凡'
    },
    {
        imgSrc: './pic/3.png',
        name: 'ccd数码相机',
        price: '￥209.00',
        intro: 'ccd数码相机，高清照片，超长续航，拍出更好的照片'
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
        intro: '漫步者无线耳机，卓越音质，乐动无限'
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

// 根据传入的 filteredGoods 数组渲染商品列表
// filteredGoods 是一个 Goods 类型的数组，表示过滤后的商品列表
function renderGoods(filteredGoods: Goods[]) {
    const resultNone = document.getElementById('result-none');
    const resultList = document.getElementById('result-list');

    // 如果 filteredGoods 数组中有商品（即 filteredGoods.length > 0），
    // 则隐藏 result-none 元素（通常用于显示“没有找到商品”的提示），
    // 并生成商品列表的 HTML 字符串，插入到 result-list 元素中。
    if (filteredGoods.length > 0) {
        if (resultNone) resultNone.style.display = 'none';
        if (resultList) {
            // map 方法遍历 filteredGoods 数组，生成商品列表的 HTML 字符串，
            // 并使用 join 方法将其拼接成一个字符串，插入到 result-list 元素中
            resultList.innerHTML = filteredGoods.map(item => `
                <div class="goods">
                    <div>
                        <img src="${item.imgSrc}" alt="${item.name}">
                    </div>
                    <div class="name">${item.name}</div>
                    <div class="intro">${item.intro}</div>
                    <div class="price">${item.price}</div>
                </div>
            `).join("");
        }
    } 
    // 如果 filteredGoods 数组中没有商品，则显示 result-none 元素，并清空 result-list 元素的内容
    else {
        if (resultNone) resultNone.style.display = 'block';
        if (resultList) resultList.innerHTML = '';
    }
}

// 搜索商品
// 根据搜索关键词过滤商品列表，并调用 renderGoods 函数渲染过滤后的商品列表。
function searchGoods(keyword: string) {
    // 使用 filter 方法过滤 goods 数组，找出名称或简介中包含 keyword 的商品。
    const filteredGoods = goods.filter(item =>
        item.name.includes(keyword) || item.intro.includes(keyword)
    );
    // 调用 renderGoods 函数，传入过滤后的商品列表 filteredGoods。
    renderGoods(filteredGoods);
}

// 监听搜索框输入
window.onload = () => {
    // 页面加载完成后，从 localStorage 中获取 searchKeyword。
    // 如果 searchKeyword 存在，则调用 searchGoods 函数进行搜索
    const keyword = localStorage.getItem('searchKeyword');
    if (keyword) {
        searchGoods(keyword);
        localStorage.removeItem('searchKeyword'); // 清除已使用的搜索关键词
    }
};

export { };

/*  
  这段代码主要实现了：商品列表的渲染和搜索功能。
  通过监听页面加载事件，从 localStorage 中获取搜索关键词并执行搜索，
  并通过 searchGoods 函数实现商品搜索。
*/
