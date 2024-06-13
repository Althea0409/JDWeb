import "./style.css"

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

// 假设这是你的 updateTotal 函数
function updateTotal(input: HTMLInputElement): void {
    if (input.parentElement && input.parentElement.nextElementSibling){
        const priceString = (input.parentElement.nextElementSibling as HTMLElement).innerText;
        const price = parseFloat(priceString.replace('￥', ''));
        const quantity = parseInt(input.value);

        const total = price * quantity;

        const totalCell = input.parentElement.nextElementSibling.nextElementSibling as HTMLElement;
    if (totalCell) {
        totalCell.innerText = '￥' + total.toFixed(2);
    } else {
        console.error('Total cell is null');
    }
    } else {
        console.error('Input element\'s parent or next sibling is null');
    }
}

// 在 TypeScript 中创建对应的函数
function incrementQuantity(input: HTMLInputElement): void {
    input.stepUp(1);
    updateTotal(input);
}

function decrementQuantity(input: HTMLInputElement): void {
    input.stepDown(1);
    updateTotal(input);
}



export {
    getItemList,
    addItem,
    removeItem,
    removeAll,
    getPrice,
    getCount
}