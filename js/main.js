window.onload = function () {
    var modal = document.getElementById('modal'),
        modalBtn = document.getElementById('modalBtn');

    modalBtn.onclick = function () {
        modal.style.display = 'block';
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}