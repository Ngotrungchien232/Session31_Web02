document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function() {
        document.getElementById('main-container').style.backgroundColor = this.dataset.color;
    });
});
