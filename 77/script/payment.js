let btn = document.getElementById('btn1');


btn.addEventListener('click', () => {
    $('.payment').css('display', 'block');
    $('.check-out').css('display', 'none');
})