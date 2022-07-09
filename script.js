window.onload = function(){
    var contenedor = document.getElementById ('contenedor_carga');

    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
};


var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-success', 'shadow');
    } else {
        nav.classList.remove('bg-success', 'shadow');
    }
});