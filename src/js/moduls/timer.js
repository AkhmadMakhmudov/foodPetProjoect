const timer = () => {
    
    const deadline = '2023-07-25 11:57:00';
    const t = Date.parse(deadline) - Date.parse(new Date());
    // const t = Date.parse(endtime) - Date.parse(new Date()),
    // console.log(t);
    function getTimeRemaining(endtime) {
        if(endtime <= 0){
            return {
                'total': 0,
                'days': 0,
                'hours': 0,
                'minutes': 0,
                'seconds': 0,
            };
        }

        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / ((1000 * 60 * 60)) % 24)),
            minutes = Math.floor((t / ((1000 * 60)) % 60)),
            seconds = Math.floor((t / 1000) % 60);
        // console.log(t);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds');
        // id = setInterval(updateClock, 1000);
        const id = setTimeout(updateClock, 1000);
        updateClock();
        function updateClock() {
            const t = getTimeRemaining(endtime);
            // const id = setTimeout(updateClock, 1000);

            if (t.total <= 0) {
                days.innerHTML = 0;
                hours.innerHTML = 0;
                minutes.innerHTML = 0;
                seconds.innerHTML = 0;
                // setTimeout(updateClock, 1000);
                clearTimeout(id);
                // seconds.innerHTML = 0;
            } else {
                days.innerHTML = t.days;
                hours.innerHTML = t.hours;
                minutes.innerHTML = t.minutes;
                seconds.innerHTML = t.seconds;
                setTimeout(updateClock, 1000);
            }
        }
    }

    setClock('.timer', deadline);
}

export default timer;