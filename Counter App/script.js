//-----DOM Element take
const count=document.getElementById('count');
const decrease_btn=document.getElementById('decrease');
const reset_btn=document.getElementById('reset');
const increase_btn=document.getElementById('increase');


// condition set 

let value=0;

increase_btn.addEventListener('click',function(){
     value++;
     count.textContent=value;
})
decrease_btn.addEventListener('click',function(){
     value--;
     count.textContent=value;
})
reset_btn.addEventListener('click',function(){
     value=0;
     count.textContent=value;
})