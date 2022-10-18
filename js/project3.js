const input = ["This is my first text!", "This is second!", "Third!"];

const text = document.getElementById('text');

let index = 0;
let charIndex = 0;
let end = false;

setInterval(()=>{
    if(!end){
        text.innerText = input[index].substring(0, charIndex++);
        if(charIndex === input[index].length + 8){
            end = true;
        }
    }
},300);

setInterval(()=>{
    if(end){
        text.innerText = input[index].substring(0, charIndex--);
        if(charIndex === 0){
            end = false;
            index++;
            if(index == input.length){
                index = 0;
            }
        }
    }
},50);
