const form=document.querySelector("#new-item-form");
const list=document.querySelector('#list');
const input=document.querySelector('#item-input');

form.addEventListener("submit",e=>{
    e.preventDefault();
    // 1.create new item
    const item=document.createElement('div');
    item.innerText=input.value;
    item.classList.add("list-item");
    // 2.add that item to the list
    list.appendChild(item);
    // 3.clear input
    input.value=""
    // 4.setup eventlistner to delete item when clcked
    item.addEventListener("click",()=>{
        list.removeChild(item);
    })
})

