window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){

    navbar.style.background = "rgba(2,6,23,0.9)";

  }else{

    navbar.style.background = "transparent";
  }
});

/* SMOOTH SCROLL */

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {

  link.addEventListener('click', function(e){

    e.preventDefault();

    const targetId = this.getAttribute('href');

    const targetSection = document.querySelector(targetId);

    const navbar = document.querySelector('.navbar');

    const navbarHeight = navbar.offsetHeight;

    const sectionTop =
      targetSection.offsetTop - navbarHeight - 30;

    window.scrollTo({

      top: sectionTop,

      behavior: 'smooth'
    });
  });
});