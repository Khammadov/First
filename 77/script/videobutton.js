let btn11 = document.getElementById('btn11');
let btn22 = document.getElementById('btn22');
btn11.addEventListener('click', () => {
    $('.big-video').css('display', 'block');
    $('.left-video').css('display', 'none');

})

btn22.addEventListener('click', () => {
    $('.big-video').css('display', 'none');
    $('.left-video').css('display', 'block');

})