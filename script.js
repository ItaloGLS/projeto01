const navigation = document.querySelector(".navigation");

window.addEventListener('scroll', () => {
    if (window.scrollY > 10 ) {
        navigation.classList.add('scrolled');
        navigation.classList.add('scrolled2');
    }
    else {
        navigation.classList.remove('scrolled');
        navigation.classList.remove('scrolled2');
    }
})

// JavaScript para adicionar a classe animar-ativo aos elementos animados
document.addEventListener("DOMContentLoaded", function() {
    var elementosAnimados = document.querySelectorAll(".animar");
    window.addEventListener("scroll", function() {
      elementosAnimados.forEach(function(elemento) {
        if (elemento.getBoundingClientRect().top < window.innerHeight) {
          elemento.classList.add("animar-ativo");
        } else {
          elemento.classList.remove("animar-ativo");
        }
      });
    });
  });
  
