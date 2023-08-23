'use strict'
let first=document.getElementById('cont1');
let last=document.getElementById('cont2');
let conver=document.getElementById('conver');
// fonction
function sum(arr) {
  let somme =0;
for (let i=0; i<arr.length; i++){
  somme=somme+arr[i];
}
  return somme;
}

// display

function display() {
 first = first.value.split(',').map(Number);
 const all= sum(first);
 last.value =`${all}`;
}
conver.addEventListener('click', display);

