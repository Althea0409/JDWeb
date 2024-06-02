import "./style.css"

// 导航栏按钮点击事件
document.getElementById('index-btn')!.addEventListener('click', function () {
    window.location.href = 'index.html';
});

document.getElementById('login-btn')!.addEventListener('click', function () {
    window.location.href = 'login.html';
});

document.getElementById('register-btn')!.addEventListener('click', function () {
    window.location.href = 'register.html';
});

// 购物车相关函数
export type Item = {
    imgSrc: string,
    name: string,
    price: number,
    count: number,
    intro: string   
}
      
function getItemList():Item[] {
    let data = localStorage.getItem('shopping')
    if (data == null) {
        data = '[]'
    }

    return JSON.parse(data)
}   

function addItem(item:Item):void {

    let arr = getItemList()
    let fi = arr.find((item) => item.name == item.name)
    if (fi) {
        fi.count += item.count
    } else {
        arr.push(item)
    }

    localStorage.setItem('shopping', JSON.stringify(arr))

} 

function removeItem(index:number):void {

    let arr = getItemList()
    arr.splice(index, 1)
    localStorage.setItem('shopping', JSON.stringify(arr))
}
    
function removeAll():void {
    localStorage.removeItem('shopping')
}

function getPrice(id:number):number {

    return 0;

}       

function getCount(id:number):number {

    return 0;
}

export {
    getItemList,
    addItem,
    removeItem,
    removeAll,
    getPrice,
    getCount
}