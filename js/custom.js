// Start Menubar

function menuNav() {
    const menuNav = document.getElementById('menuNav'),
        linkMenu = document.querySelectorAll('.linkMenu'),
        closeMenu = document.getElementById('closeMenu'),   
        openMenu = document.getElementById('openMenu');    

        openMenu.addEventListener('click', () => {
            menuNav.style.display = 'block';
        });

        closeMenu.addEventListener('click', () => {
            menuNav.style.display = 'none';
        });

        linkMenu.forEach(el => el.addEventListener('click', event => {
            menuNav.click(event);
        }));

        window.onclick = function(event) {
            if (event.target.matches('#menuNav')) {
                menuNav.style.display = 'none';
            }
        };


        for (var i = 0; i < linkMenu.length; i++) {
            linkMenu[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace("active", "");
                this.className += " active";
            })
        };
}
menuNav();
// End Menubar





// Start Current Year
const newYear = new Date();
const currentYear = newYear.getFullYear();

document.querySelector("#currentYear").innerHTML = currentYear;
// End Current Year





// Start Loading

setTimeout(() => {
    const loadingPage = document.getElementById('preload');

    loadingPage.style.display = 'none';
    // loadingPage.style.transition = 'all 0.2s ease-out'
}, 1000);