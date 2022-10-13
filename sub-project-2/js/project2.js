console.log('ih',window.innerHeight);
console.log('oh',window.outerHeight);

console.log(window.innerWidth);
console.log(window.outerWidth);

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

// let x=0;
/* let startY = innerHeight/2 - boxElm.offsetHeight */

// setInterval(()=>{
//     const y = ((innerHeight - 80)/2)+(Math.sin(x++/180) * (innerHeight-80/2));
//     boxElm.style.top = `${y}px`;
// },10);

let y = 0;
let x= 0;
let up = false;
setInterval(()=>{
    boxElm.style.top = `${(innerHeight/2)+((innerHeight/2 -40)*Math.sin(y++/180))}px`;
    boxElm.style.left = `${x/2}px`;

    x+= !up ? 1:-1;
    if (x/2 + boxElm.offsetWidth > innerWidth){
        up = true;
    } else if (x<=0){
        up = false;
    }
},5);


const moon1Elm = document.querySelector('#moon1');
const moon2Elm = document.querySelector('#moon2');

let z1=0;
setInterval(()=>{
    moon1Elm.style.top = `${Math.sin(z1/180)*100+(innerHeight/2)}px`;
    moon1Elm.style.left = `${Math.cos(z1/180)*100+innerWidth/2}px`;
    z1++;
},10);

let z2=0;
setInterval(()=>{
    moon2Elm.style.left = `${Math.sin(z2/180)*100+(innerWidth/2)}px`;
    moon2Elm.style.top = `${Math.cos(z2/180)*100+innerHeight/2}px`;
    z2++;
},1);

