$(document).ready(function () {
$('#owldemo2').owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    dots: false,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 5
      }
    }
  });


   });