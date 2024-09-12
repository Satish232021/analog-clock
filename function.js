const hourElement = document.querySelector('.hours');
const minuteElement = document.querySelector('.minutes');
const secondElement = document.querySelector('.seconds');

// const presentTime = new Date();
// let h = presentTime.getHours();
/* console.log(h); */
// let m = presentTime.getMinutes();
/* console.log(m); */
// let s = presentTime.getSeconds();
/* console.log(s); */

updateTime();

function updateTime() {
    let s = new Date().getSeconds();
    let m = new Date().getMinutes();
    let h = new Date().getHours();
    secondElement.style.transform = `rotate(${s * 6}deg)`;
    if ( h > 12 ){
        h = h - 12;
    }
    hourElement.style.transform = `rotate(${(h * 30) + ( m * 0.5) }deg)`;
    minuteElement.style.transform = `rotate(${m * 6}deg)`;
    // setTimeout(() => {
        
    //     updateTime();
    // },1000);
}

setInterval(updateTime, 1000);