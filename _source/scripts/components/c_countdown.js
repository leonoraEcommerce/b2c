function makeCount(date, elDays, elHour, elMin, elSec) {
    // make date
    let actualDate = new Date();
    let futureDate = Date.parse(date);
    let timeStamp = futureDate - actualDate.getTime();

    let days = Math.floor(timeStamp / (24 * 60 * 60 * 1000));
    let hours = Math.floor(timeStamp / (60 * 60 * 1000));
    let minutes = Math.floor(timeStamp / (60 * 1000));
    let seconds = Math.floor(timeStamp / 1000);

    let total = {
        days: days,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60
    }

    // start count
    if (total.days < 10) {
        elDays.innerHTML = '0' + total.days;
    } else {
        elDays.innerHTML = total.days;
    }
    if (total.hours < 10) {
        elHour.innerHTML =  '0' + total.hours;
    } else {
        elHour.innerHTML = total.hours;
    }
    if (total.minutes < 10) {
        elMin.innerHTML = '0' + total.minutes;
    } else {
        elMin.innerHTML = total.minutes;
    }
    if (total.seconds < 10) {
        elSec.innerHTML = '0' + total.seconds;
    } else {
        elSec.innerHTML = total.seconds;
    }

    if ((total.days < 0) && (total.hours < 0) && (total.minutes < 0) && (total.seconds < 0)) {
        $('.c-countdown__hero').hide();
        $('.c-countdown__end').show();
        setTimeout(() => {
            window.location.href = 'https://www.leonorashop.com.br';
        }, 5000);
    }

    //elDays.innerHTML = total.days;
    //elHour.innerHTML = total.hours;
    //elMin.innerHTML = total.minutes;
    //elSec.innerHTML = total.seconds;

    // return total
    return total;
}
if (document.querySelector('.c-count')) {
    const promotionDate = document.querySelector('.js-count').getAttribute('data-count');
    const elementDays = document.querySelector('.js-count .--days');
    const elementHours = document.querySelector('.js-count .--hours');
    const elementMinutes = document.querySelector('.js-count .--minutes');
    const elementSeconds = document.querySelector('.js-count .--seconds');

    makeCount(promotionDate, elementDays, elementHours, elementMinutes, elementSeconds);

    setInterval(() => {
        makeCount(promotionDate, elementDays, elementHours, elementMinutes, elementSeconds);
    }, 1000)
}
