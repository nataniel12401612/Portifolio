var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".saidebar").classList.toggle("show-menu");
});