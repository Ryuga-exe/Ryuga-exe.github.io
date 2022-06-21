const body = document.querySelector('body'),
  nav = document.querySelector('nav'),
  modeToggle = document.querySelector('.dark-light'),
  sidebarOpen = document.querySelector('.sidebarOpen'),
  siderbarClose = document.querySelector('.siderbarClose');

let getMode = localStorage.getItem('mode');
if (getMode && getMode === 'dark-mode') {
  body.classList.add('dark');
}

// js code to toggle dark and light mode
modeToggle.addEventListener('click', () => {
  modeToggle.classList.toggle('active');
  body.classList.toggle('dark');

  // js code to keep user selected mode even page refresh or file reopen
  if (!body.classList.contains('dark')) {
    localStorage.setItem('mode', 'light-mode');
  } else {
    localStorage.setItem('mode', 'dark-mode');
  }
});

//   js code to toggle sidebar
sidebarOpen.addEventListener('click', () => {
  nav.classList.add('active');
});

body.addEventListener('click', (e) => {
  let clickedElm = e.target;

  if (!clickedElm.classList.contains('sidebarOpen') && !clickedElm.classList.contains('menu')) {
    nav.classList.remove('active');
  }
});

$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }

    // scroll-up button show/hide script
    if (this.scrollY > 200) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
  });

  // slide-up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $('html').css('scrollBehavior', 'auto');
  });

  $('.navbar .menu li a').click(function () {
    // applying again smooth scroll on menu items click
    $('html').css('scrollBehavior', 'smooth');
  });
});
