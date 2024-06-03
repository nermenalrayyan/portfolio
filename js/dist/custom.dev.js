"use strict";

// Start Header
window.addEventListener("scroll", function () {
  var navbar = document.querySelector("#header");

  if (window.scrollY >= 100) {
    navbar.classList.add("fixed-header");
  } else {
    navbar.classList.remove("fixed-header");
  }
}); // End Header
// Start Menubar

function menuNav() {
  var menuNav = document.getElementById('menuNav'),
      linkMenu = document.querySelectorAll('.linkMenu'),
      closeMenu = document.getElementById('closeMenu'),
      openMenu = document.getElementById('openMenu');
  openMenu.addEventListener('click', function () {
    menuNav.style.display = 'block';
  });
  closeMenu.addEventListener('click', function () {
    menuNav.style.display = 'none';
  }); // linkMenu.forEach(el => el.addEventListener('click', event => {
  //     menuNav.click(event);
  // }));

  linkMenu.forEach(function (el) {
    el.addEventListener('click', function () {
      linkMenu.forEach(function (link) {
        return link.classList.remove('active');
      });
      el.classList.add('active');
    });
  });

  window.onclick = function (event) {
    if (event.target.matches('#menuNav')) {
      menuNav.style.display = 'none';
    }
  }; // for (var i = 0; i < linkMenu.length; i++) {
  //     linkMenu[i].addEventListener("click", function() {
  //         var current = document.getElementsByClassName("active");
  //         current[0].className = current[0].className.replace("active", "");
  //         this.className += " active";
  //     })
  // };

}

menuNav(); // End Menubar
// Start Current Year

var newYear = new Date();
var currentYear = newYear.getFullYear();
document.querySelector("#currentYear").innerHTML = currentYear; // End Current Year
// Start Loading

setTimeout(function () {
  var loadingPage = document.getElementById('preload');
  loadingPage.style.display = 'none';
}, 1000);