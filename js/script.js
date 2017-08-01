var nav = document.getElementById('navToggle');
var btn = document.querySelector('.header__button');


nav.addEventListener('click', function() {
  btn.classList.toggle('is-active');
});
console.log(btn)