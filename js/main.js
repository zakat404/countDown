//определение эллементов на странице 
const year = document.querySelector('#year');

const days = document.querySelector('#days');

const hours = document.querySelector('#hours');

const minutes = document.querySelector('#minutes');

const seconds = document.querySelector('#seconds');

const countdown = document.querySelector('#countdown');

const preloader = document.querySelector('#preloader');

// делаем расчёты 

const currentEar = new Date().getFullYear();
console.log(currentEar)
const nexEar = new Date(`January 01 ${currentEar +1} 00:00:00`)
console.log(nexEar)

// год на странице 
year.innerText = currentEar + 1

// установка года на странице

function updateCounter() {
    
    const currentTime = new Date()
    const diff = nexEar - currentTime
    // перевод дни 
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    // перевод часы
    const hoursLeft = Math.floor(diff /1000 / 60 / 60) % 24;
    //перевод в минуты 
    const minuteLeft = Math.floor(diff / 1000 / 60 ) % 60;
    // перевод в секунды
    const secondLeft = Math.floor(diff /1000) % 60;


    days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minuteLeft < 10 ? '0' + minuteLeft : minuteLeft;
    seconds.innerText = secondLeft < 10 ? '0' + secondLeft : secondLeft;

}


setInterval(updateCounter, 1000);

setTimeout(function(){
    preloader.remove();
    countdown.style.display = 'flex';
}, 1000);

