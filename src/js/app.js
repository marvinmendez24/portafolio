document.addEventListener('DOMContentLoaded', function(){
    const expandir = this.querySelectorAll('.open>li');
    const menuExpandir = this.querySelector('.menu-despegable');

    expandir.forEach(lista => {
        lista.addEventListener('click', function(){
            fnExpandir(this.getAttribute('data-id'));
        });
    });

    function fnExpandir(id){
        const menuContenedor = document.querySelector(`ul[data-menu="${id}"]`);

        if(menuContenedor){
            menuContenedor.classList.toggle('d-none');
        }
    }
});