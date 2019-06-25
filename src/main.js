let $ = require('jquery');

let openedTab = 'center';


$(document).ready(() => {
    $('#upside-block').hover(() => {

    })
    $('#left-block').hover(() => {
        $('#left-block').css({'z-index': '10'})
    }, () => {
        setTimeout(() => {
            $('#left-block').css({'z-index': '4'})
        }, 100);
    })
});