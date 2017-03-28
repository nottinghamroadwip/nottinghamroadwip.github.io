window.addEventListener('load', function() {
    go();
  }
);

var navToggle;
var nav;
var navOpened;

function go()
{
  navToggle = document.getElementById('nav-toggle');
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
  }
  nav.classList.toggle('open');
  navOpened = true;
}
