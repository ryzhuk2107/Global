$(document).ready(function(){
    $('.carousel__inner').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '60px',
      Infinity: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow1.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow2.png"></button>',
      
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          }
        },
       
        {
          breakpoint: 577,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '20px',
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
            centerPadding: '10px',
            
          }
        },
        
      ]
     
    });
    
    $('[data-modal=payment]').on('click', function() {
      $('.overlay, #payment').fadeIn('slow');
    });
    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });
  
    $('.modal__close').on('click', function(){
      $('.overlay, #consultation, #payment, #thanks').fadeOut('slow')
    });
    
    function valideForms (form) {
      $(form).validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          phone: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: {
            required: "Пожалуйста, введите свое имя",
            minlength: jQuery.validator.format("Введите {0} символа!")
          },
          phone: "Пожалуйста, введите свой номер телефона",
          email: {
            required: "Пожалуйста, введите свою почту",
            email: "Неправильно введен адрес почты"
          }
        }
      });
    };
    valideForms('#request form');
    valideForms('#questions form');
    valideForms('#consultation form');
    valideForms('#payment form');

    $('input[name=phone]').mask("+7(999) 999-99-99");

    $('.feed-form').submit(function (e) {
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "send.php",
          data: $(this).serialize()
      }).done(function () {
          $(this).find("input").val("");
          $('#consultation, #payment').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');
          $('.overlay, #thanks').fadeIn().delay(2000).fadeOut();
          $('form').trigger('reset');
      });
      return false;
  });
});
  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu_active');
        });
    });
});
  
 