let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    //Quando for clicado o menuContent vai ter uma classe(on) adicionada a ele e aplicar um boolean.
    menuContent.classList.toggle('on', show);
    //Altera o valor(boolean) do show.
    show = !show;
});