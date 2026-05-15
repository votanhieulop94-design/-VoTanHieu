window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){

    navbar.style.background = "rgba(2,6,23,0.75)";

  }else{

    navbar.style.background = "transparent";
  }
}); 