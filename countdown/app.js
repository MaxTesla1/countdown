const items = document.querySelectorAll('.countdown-item > h4');
const countdownElement = document.querySelector('.couwndown')


let countdownDate = new Date(2026, 10, 10, 19, 34, 0).getTime();

function getCountTime() {
    const now = new Date().getTime();

    const timeDefference = countdownDate - now;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMin = 60 * 1000;

    let days = Math.floor(timeDefference / oneDay);
    let hours = Math.floor((timeDefference % oneDay) / oneHour); 
    let mins = Math.floor((timeDefference % oneHour) / oneMin);
    let seconds = Math.floor((timeDefference % oneMin) / 1000);
    
    const values = [days, hours, mins, seconds];
    console.log(values);

    items.forEach(function(item, index) {
        item.textContent = (values[index])
    })

    if (timeDefference < 0) {
        clearInterval(countdown);

        countdownElement.innerHTML = "<h4 class ='expired'>Time is over</h4>";
    }
} 

let countdown = setInterval(getCountTime, 1000);

getCountTime();


