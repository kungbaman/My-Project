const empty = document.querySelector('.empty_room');
const empty2 = document.querySelector('.empty_room2');
const empty3 = document.querySelector('.empty_room3');

empty.addEventListener('click',messages);
empty2.addEventListener('click',messages);
empty3.addEventListener('click',messages);


function messages(){
    alert("ห้องว่าง !!");
}