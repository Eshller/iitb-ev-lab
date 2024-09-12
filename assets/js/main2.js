/*
Template Name: Craft - Startup Landing Page Template.
Author: GrayGrids
*/

(function () {
    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }


    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;
        var logo = document.querySelector('.navbar-brand img')
        var logo2 = document.querySelector('.log1 img')
        if (window.pageYOffset > sticky) {
            // header_navbar.classList.add("bg-change");
        //   header_navbar.classList.add("sticky");

          logo.src = 'ass/lbh.png';
          logo2.src='ass/iitbb.svg';
        } else {
        //   header_navbar.classList.remove("sticky");
          header_navbar.classList.remove("bg-change");

          logo.src = 'ass/lbh.png';
          logo2.src = 'ass/iitbb.svg'
        }

        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    // WOW active
    new WOW().init();

    //===== mobile-menu-btn
  


})();