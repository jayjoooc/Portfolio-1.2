(function () {
    let navbar = document.querySelector('#navbar');
    let bonny = document.querySelector('#bonny');
    bonny.addEventListener('click', () => {
        navbar.classList.toggle('open');
    }); 
})()