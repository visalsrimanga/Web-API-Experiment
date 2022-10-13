const cursorElm = document.getElementById('cursor');

let tmrId = null;


addEventListener('mousemove', (eventData)=>{
    if (tmrId){                     // truthy and falsy
        clearTimeout(tmrId);
        tmrId = null;
    }

    cursorElm.style.opacity = 1;
    cursorElm.style.left = `${eventData.pageX}px`;
    cursorElm.style.top = `${eventData.pageY}px`;
    // console.log(eventData.screenX, eventData.screenY)
    // console.log(eventData.pageX, eventData.pageY);

    tmrId = setTimeout(()=>{
        cursorElm.style.opacity = 0;
    }, 2000);

    
});

document.body.addEventListener('mouseleave', ()=>{
    cursorElm.style.opacity = 0;
});

document.body.addEventListener('mouseenter', ()=>{
    cursorElm.style.opacity = 1;
});


/* =============== There are two type of timers here, one is running periodically and other one running after given time
and then it will be stopped (not continue more) ===================== */

// const tmrId1 = setInterval(()=>{
//     console.log('print this..!')
// },500);

// const btnStopTimer1 = document.querySelector('#btnStopTimer1');
// btnStopTimer1.addEventListener('click', ()=> {
//     clearInterval(tmrId1);
// });

// const tmrId1 = setTimeout(()=>{
//     console.log('pipuruwa..!')
// },5000);

// const btnStopTimer1 = document.querySelector('#btnStopTimer1');
// btnStopTimer1.addEventListener('click', ()=> {
//     clearInterval(tmrId1);
//     console.log('Nishkriya kara')
// });

