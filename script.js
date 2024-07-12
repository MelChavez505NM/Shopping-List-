window.onload = function(){
    initShoppingList = function();
};
function initShoppingList(){
    let form = document.getElementById('shopping-list');

    form.addEventListener('submit', function(e)=>{
        handleItemform(e, form);
    });
}

function handleItemform(e, formRef){
    if(e.preventDefault) {
        event.preventDefault();
    }

    addItemToShoppingList();
    formRef.reset();

    return false;
}

function addItemToShoppingList(){
    let item = document.getElementById('item-name');
    let item =document.getElementById('item-amount');
    let id =getRandomInt(0, 10000000);

    let itemHtml = createListItemHTML(itemName.value, itemAmount.value, id);
    console.log(item HTML:, itemHTML);
    let itemListRef = document.getElementById('shopping-list');
    itemListRef.insertAdjacentHTML("afterend", itemHtml);

    setDeleteButtonEvent(id);
}

function setDeleteButtonEvent(id){
    let deleteButton = document.getElementById("button"+id);
    deleteButton.addEventListener('click',function() => {
       removeListItem(id);
    });
}

function createListItemHTML (itemName, itemAmount, id){
    return '<li>
        ${itemName} -${itemAmount}
        return `<li id="item${id}">
        <button type="button">Delete Item</button>
    < /li>';
}

function removalListItem(id){
    let listItem = document.getElementById('item'+id);
    listItem.parentNode.removeChild(listItem);
}

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
