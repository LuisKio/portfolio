const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');

toggleMenuElement.addEventListener('click', () => {
    toggleMenuElement.classList.toggle('active-menu');
    mainMenuElement.classList.toggle('main-menu-show');
})

//SE LE ASIGNA UNA CLASE AL HEADER QUE CONTIENE EL NAV CUANDO EL USUARIO ESTA EN UNA POSICION EN EL EJE Y MAYOR A 0
window.addEventListener('scroll', () => {
    const mainHeader = document.getElementById('main-header');
    mainHeader.classList.toggle('header-sticky', window.scrollY > 0);
})