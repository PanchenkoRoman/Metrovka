window.onload = function () {
    var modal = document.getElementById('modal'),
        modalBtn = document.getElementById('modalBtn'),
        close = document.getElementById('closeX');

    modalBtn.onclick = function () {
        modal.style.display = 'block';
        modalBtn.classList.remove('header-insert');
        modalBtn.classList.add('disabled');
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

}

