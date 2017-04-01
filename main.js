window.addEventListener('load', function() {
    go();
  }
);

var navToggle;
var navChevron;
var nav;
var navOpened;

function go()
{
  navToggle = document.getElementById('nav-toggle');
  navChevron = document.getElementById('nav-chevron');
  nav = document.getElementById('nav');
  navToggle.style.cursor = 'pointer';
  navToggle.classList.add('closed');
  navToggle.onclick = function() {
    toggleNav();
  }
}

function toggleNav()
{
  if(navOpened)
  {
    nav.classList.toggle('closed');
    navChevron.classList.toggle('point-down');
  }
  nav.classList.toggle('open');
  navChevron.classList.toggle('point-up');
  navOpened = true;
}
