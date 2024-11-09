// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
// const searchForm = document.querySelector('.search-form');
// const searchBox = document.querySelector('#search-box');

// document.querySelector('#search-button').onclick = (e) => {
//   searchForm.classList.toggle('active');
//   searchBox.focus();
//   e.preventDefault();
// };

// Toggle class active untuk shopping cart
// const shoppingCart = document.querySelector('.shopping-cart');
// document.querySelector('#shopping-cart-button').onclick = (e) => {
//   shoppingCart.classList.toggle('active');
//   e.preventDefault();
// };

// Klik di luar elemen
// const hm = document.querySelector('#hamburger-menu');
// const sb = document.querySelector('#search-button');
// const sc = document.querySelector('#shopping-cart-button');

// document.addEventListener('click', function (e) {
//   if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
//     navbarNav.classList.remove('active');
//   }

//   if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
//     searchForm.classList.remove('active');
//   }

//   if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
//     shoppingCart.classList.remove('active');
//   }
// });

// Scroll Animation
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log (entry)
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//     } else {
//       entry.target.classList.remove('show');
//     }
//   });
// });

// const hiddenElements = document.querySelectorAll('.about');
// hiddenElements.forEach((el) => observer.observe(el));