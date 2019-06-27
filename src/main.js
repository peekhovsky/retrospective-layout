let $ = require('jquery');

let openedTab = 'center';

$(document).ready(() => {
   $('#video').play();
    $('#left-block').hover(
        () => {
            $('#left-block').css({ 'z-index': '10' })
        },
        () => {
            setTimeout(() => {
                $('#left-block').css({ 'z-index': '4' })
            }, 100);
        })
});

function msToTime(ms) {
    let seconds = (ms / 1000);
    let minutes = parseInt(seconds / 60, 10);
    seconds = Math.floor(seconds % 60);
    let hours = parseInt(minutes / 60, 10);
    minutes = minutes % 60;
    return hours + 'h:' + minutes + 'm:' + seconds + 's';
}

let eventDate = new Date(2020, 3, 19, 16, 30, 0, 0);

setInterval(() => {
    let currentDate = msToTime(eventDate - new Date());
    $('#timer').text(currentDate);
}, 1000)
