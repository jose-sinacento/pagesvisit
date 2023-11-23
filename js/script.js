const contVisitasSpan = document.getElementById("contadorVisitas");
document.addEventListener("DOMContentLoaded", function() {
    const contadorVisitas = localStorage.getItem("contadorVisitas");
    
    
    if (contadorVisitas) {
        let contadorVisitasNumerico = parseInt(contadorVisitas);

        contadorVisitasNumerico++;
        contVisitasSpan.textContent = contadorVisitasNumerico.toFixed();
        console.log(contadorVisitasNumerico);
    
        localStorage.setItem('contadorVisitas', contadorVisitasNumerico.toFixed());
        
        
    } else {
        localStorage.setItem("contadorVisitas", "0");
        console.log('no hay ningun valor');
    }
});

const btnReset = document.getElementById('btnReestablecer');

btnReset.addEventListener('click', function() {

    contVisitasSpan.textContent = "0";

    localStorage.setItem("contadorVisitas", "0");
});
