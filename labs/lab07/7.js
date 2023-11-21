function Con0(){
    var button_list = document.getElementsByClassName('menu_button');
    var content_list = document.getElementsByClassName('cont_value');
    console.log(button_list[0]);
    button_list[0].classList.remove('act-nav');
    button_list[1].classList.remove('act-nav');
    button_list[2].classList.remove('act-nav');
    button_list[3].classList.remove('act-nav');

    button_list[0].classList.add('act-nav');

    content_list[0].style.display = 'none';
    content_list[1].style.display = 'none';
    content_list[2].style.display = 'none';
    content_list[3].style.display = 'none';

    content_list[0].style.display = 'block';
}

function Con1(){
    var button_list = document.getElementsByClassName('menu_button');
    var content_list = document.getElementsByClassName('cont_value');
    console.log(button_list[0]);
    button_list[0].classList.remove('act-nav');
    button_list[1].classList.remove('act-nav');
    button_list[2].classList.remove('act-nav');
    button_list[3].classList.remove('act-nav');

    button_list[1].classList.add('act-nav');

    content_list[0].style.display = 'none';
    content_list[1].style.display = 'none';
    content_list[2].style.display = 'none';
    content_list[3].style.display = 'none';

    content_list[1].style.display = 'block';
}

function Con2(){
    var button_list = document.getElementsByClassName('menu_button');
    var content_list = document.getElementsByClassName('cont_value');
    console.log(button_list[0]);
    button_list[0].classList.remove('act-nav');
    button_list[1].classList.remove('act-nav');
    button_list[2].classList.remove('act-nav');
    button_list[3].classList.remove('act-nav');

    button_list[2].classList.add('act-nav');

    content_list[0].style.display = 'none';
    content_list[1].style.display = 'none';
    content_list[2].style.display = 'none';
    content_list[3].style.display = 'none';

    content_list[2].style.display = 'block';
}
function Con3(){
    var button_list = document.getElementsByClassName('menu_button');
    var content_list = document.getElementsByClassName('cont_value');
    console.log(button_list[0]);
    button_list[0].classList.remove('act-nav');
    button_list[1].classList.remove('act-nav');
    button_list[2].classList.remove('act-nav');
    button_list[3].classList.remove('act-nav');

    button_list[3].classList.add('act-nav');

    content_list[0].style.display = 'none';
    content_list[1].style.display = 'none';
    content_list[2].style.display = 'none';
    content_list[3].style.display = 'none';

    content_list[3].style.display = 'block';
}