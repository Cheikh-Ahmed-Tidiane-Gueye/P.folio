// document.addEventListener('DOMContentLoaded', function() {

  // Scroll de la barre de navigation
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function() {
    // console.log(window.scrollY );
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#091020';
    } else {
      navbar.style.backgroundColor = 'transparent';
    }
  });

  // cache la barre de navigation lorsque qu'on clique sur un lien
  let navBar = document.querySelectorAll(".nav-link");
  
  let navCollapse = document.querySelector(".navbar-collapse.collapse");
  navBar.forEach(function(a){
    a.addEventListener("click", function(){
      navCollapse.classList.remove("show");
    })
  })
// });