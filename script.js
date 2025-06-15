let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick =() => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}
document.getElementById('read-more-btn').addEventListener('click', function(e) {
  e.preventDefault();
  const hiddenContent = document.getElementById('more-about');
  const btn = this;

  hiddenContent.classList.toggle('show');
  btn.textContent = hiddenContent.classList.contains('show') ? 'Read Less' : 'Read More';
});



