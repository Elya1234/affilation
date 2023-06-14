// Exemple de fonction JavaScript pour suivre les clics sur les liens d'affiliation
function trackAffiliateClick(affiliateLink) {
    // Effectuez ici le suivi des clics sur les liens d'affiliation
    console.log("Clic sur le lien d'affiliation : ", affiliateLink);
  }
  
  // Événement de chargement du DOM
  document.addEventListener("DOMContentLoaded", function() {
    // Obtenez tous les liens d'affiliation
    var affiliateLinks = document.querySelectorAll(".affiliate-link");
  
    // Parcourez tous les liens d'affiliation et ajoutez un gestionnaire d'événements au clic
    affiliateLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        // Empêchez le comportement de lien par défaut
        event.preventDefault();
  
        // Obtenez l'URL du lien d'affiliation
        var affiliateLink = link.getAttribute("href");
  
        // Suivre le clic sur le lien d'affiliation
        trackAffiliateClick(affiliateLink);
  
        // Naviguez vers l'URL d'affiliation après le suivi
        window.location.href = affiliateLink;
      });
    });
  });
  
// script.js
function toggleNavbar() {
  var navbarMenu = document.getElementById("navbarMenu");
  navbarMenu.classList.toggle("active");
}

// script.js
window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".navbar");
  var sticky = navbar.offsetTop;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

  