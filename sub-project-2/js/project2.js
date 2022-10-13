// console.log('ih',window.innerHeight);
// console.log('oh',window.outerHeight);

// console.log(window.innerWidth);
// console.log(window.outerWidth);

const boxElm = document.querySelector('#box');

/* clientHeight, clientWidth = padding box */
console.log(boxElm.clientHeight, boxElm.clientWidth);
/* offsetHeight, offsetWidth = border box */
console.log(boxElm.offsetHeight, boxElm.offsetWidth);


// let y =0;
// let up = false;

// setInterval(()=>{
//     boxElm.style.top = `${y}px`;
//     y+= !up ? 1:-1;
//     if (y + boxElm.offsetHeight > innerHeight){
//         up = true;
//     } else if (y<=0){
//         up = false;
//     }
// },5);

let x=0;
// let startY = innerHeight/2 - boxElm.offsetHeight
setInterval(()=>{
    const y = ((innerHeight - 80)/2)+(Math.sin(x++/180) * (innerHeight-80/2));
    boxElm.style.top = `${y}px`;
},10);




