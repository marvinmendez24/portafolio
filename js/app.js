
function iniciarApp(){

    //Trabajando el nav de habilidades
    const tecnicas = document.querySelector('#link-tecnicas');
    const framework = document.querySelector('#link-frameworks');
    const navegacion = document.querySelector('.habilidades-nav');

    navegacion.addEventListener('click', cambiarElementos);

    function cambiarElementos(e){
        e.preventDefault();
        
        if(e.target.classList.contains('nav-link')){
            const data = (e.target.dataset.name);
            const elementoSeleccionado = document.querySelector(`#${data}`);
             
            document.querySelectorAll('.habilidades').forEach( elemento => elemento.classList.add('d-none'));
            document.querySelector('.active').classList.remove('active');
            elementoSeleccionado.classList.remove('d-none');
           const enlaceSeleccionado = e.target;

           enlaceSeleccionado.classList.add('active')
            elementoSeleccionado.classList.add('d-flex');
        }
    }

}
document.addEventListener('DOMContentLoaded', iniciarApp)