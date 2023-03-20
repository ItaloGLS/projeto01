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