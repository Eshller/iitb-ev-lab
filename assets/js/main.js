/*
Template Name: Craft - Startup Landing Page Template.
Author: GrayGrids
*/

(function () {
  //===== Prealoder

  window.onload = function () {
    window.setTimeout(fadeout, 500);
  };

  function fadeout() {
    document.querySelector('.preloader').style.opacity = '0';
    document.querySelector('.preloader').style.display = 'none';
  }

  /*=====================================
    Sticky
    ======================================= */
  window.onscroll = function () {
    var header_navbar = document.querySelector('.navbar-area');
    var sticky = header_navbar.offsetTop;
    var logo = document.querySelector('.navbar-brand img');
    var logo2 = document.querySelector('.log1 img');
    if (window.pageYOffset > sticky) {
      header_navbar.classList.add('sticky');
      logo.src = 'ass/lbh.png';
      logo2.src = 'ass/iitbb.svg';
    } else {
      //   header_navbar.classList.remove("sticky");
      logo.src = 'ass/lbh.png';
      logo2.src = 'ass/iitbb.svg';
    }

    // show or hide the back-top-top button
    var backToTo = document.querySelector('.scroll-top');
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTo.style.display = 'flex';
    } else {
      backToTo.style.display = 'none';
    }
  };

  // WOW active
  new WOW().init();

  //===== mobile-menu-btn
  let navbarToggler = document.querySelector('.mobile-menu-btn');
  navbarToggler.addEventListener('click', function () {
    navbarToggler.classList.toggle('active');
  });

  //======= portfolio-btn active
  var elements = document.getElementsByClassName('portfolio-btn');
  for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function () {
      // remove class from sibling

      var el = elements[0];
      while (el) {
        if (el.tagName === 'BUTTON') {
          //remove class
          el.classList.remove('active');
        }
        // pass to the new sibling
        el = el.nextSibling;
      }

      this.classList.add('active');
    };
  }
})();

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevents the default form submission behavior

  // Retrieve input field values
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let message = document.getElementById('message');

  // Validate if fields are filled
  if (name.value == '' || email.value == '' || message.value == '') {
    alert('Please fill all the required fields.');
  } else {
    // Construct the Google Forms submission URL
    let link =
      // https://docs.google.com/forms/d/e/1FAIpQLScE2BhXylkTVRDiVZRU1lMXxxAh91C1h1SKmrUU1VkVUh8G9Q/viewform
      'https://docs.google.com/forms/d/e/1FAIpQLScE2BhXylkTVRDiVZRU1lMXxxAh91C1h1SKmrUU1VkVUh8G9Q/formResponse?entry.1671981725=' +
      encodeURIComponent(name.value.trim()) +
      '&entry.703421147=' +
      encodeURIComponent(email.value.trim()) +
      '&entry.813673043=' +
      encodeURIComponent(message.value.trim());

    // Send data using XMLHttpRequest
    const xhttpr = new XMLHttpRequest();
    xhttpr.open('GET', link, true);
    xhttpr.send();

    xhttpr.onload = () => {
      if (xhttpr.status === 200 || xhttpr.status === 0) {
        // Show a success notification when the submission is successful
        alert('Thank you! Your message has been sent successfully.');

        // Clear the form after submission
        name.value = '';
        email.value = '';
        message.value = '';
      } else {
        // Show an error notification if something went wrong
        alert('Oops! Something went wrong. Please try again later.');
      }
    };
  }
});
