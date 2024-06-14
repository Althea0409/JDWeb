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

    let fi = arr.find((i) => i.name === item.name)
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

export {
    getItemList,
    addItem,
    removeItem,
    removeAll,
}



