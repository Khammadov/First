let btn = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');


btn.addEventListener('click', () => {
    $('.overwiev').css('display', 'block');
    $('.curiculum').css('display', 'none');
    $('.instructor').css('display', 'none');
    $('.reviews').css('display', 'none');
})

btn2.addEventListener('click', () => {
    $('.overwiev').css('display', 'none');
    $('.curiculum').css('display', 'block');
    $('.instructor').css('display', 'none');
    $('.reviews').css('display', 'none');
})

btn3.addEventListener('click', () => {
    $('.overwiev').css('display', 'none');
    $('.curiculum').css('display', 'none');
    $('.instructor').css('display', 'block');
    $('.reviews').css('display', 'none');
})

btn4.addEventListener('click', () => {
    $('.overwiev').css('display', 'none');
    $('.curiculum').css('display', 'none');
    $('.instructor').css('display', 'none');
    $('.reviews').css('display', 'block');
})