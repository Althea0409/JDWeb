import "./style.css"

type Item = {
    name: string,
    price: number,
    count: number   
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
    // arr.push(item)

    let fi = arr.find((item) => item.name == item.name)
    if (fi) {
        fi.count += item.count
    } else {
        arr.push(item)
    }

    localStorage.setItem('shopping', JSON.stringify(arr))

} 

function removeItem(index:number) {

    let arr = getItemList()
    arr.splice(index, 1)
    localStorage.setItem('shopping', JSON.stringify(arr))
}
    
function removeAll(){
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