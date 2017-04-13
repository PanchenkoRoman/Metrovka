window.onload = function () {
    var modal = document.getElementById('modal'),
        modalBtn = document.getElementById('modalBtn'),
        modalBtn2 = document.getElementsByClassName('header-insert')[0];
        close = document.getElementById('closeX');

    modalBtn.onclick = function () {
        modal.style.display = 'block';
        modalBtn.classList.remove('header-insert');
        modalBtn.classList.add('disabled');
    }
    modalBtn2.onclick = function () {
        modal.style.display = 'block';
        modalBtn2.classList.remove('header-insert');
        modalBtn2.classList.add('disabled');
    }

    window.onclick = function (event) {
        if (event.target == modal || event.target == close) {
            modal.style.display = 'none';
        }
    }

    var primary = document.getElementById('btn-prime');
    var primary2 = document.getElementById('btn-prime2');

    primary.onclick = function () {
            primary.classList.add('primary-disabled');
    }

    primary2.onclick = function () {
        primary2.classList.add('primary-disabled');
    }
    $(function(){
        $('.navigation').slicknav({
            prependTo:'.mobile-menu'
        });
    });

    $('.slicknav_btn').click(function(){
        $('.header-content').not('.header-ul').toggleClass('blur');
        return false;
    });
}



