$(document).ready(function () {

  $('.filter-slider').slick({
    responsive: [{
        breakpoint: 99999,
        settings: "unslick"
    }, {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            infinite: false,
            variableWidth: true,
            nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
            prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
        }
    }, {
        breakpoint: 768,
        settings: {
            infinite: false,
            slidesToShow: 2,
            adaptiveHeight: true,
            variableWidth: true,
            nextArrow: '<button class="slick-arrow next"><i class="icon-icon28"></i></button>',
            prevArrow: '<button class="slick-arrow prev"><i class="icon-icon28"></i></button>',
        }
    }, ]
});

  $('.js-item').on('click', function () {
    var dataTab = $(this).data('items');
    $('.js-item').removeClass('active');
    $('.js-content').removeClass('active');

    $(this).addClass('active');
    $('#content-' + dataTab).addClass('active');
  });

  $('.description > h5').on('click', function () {
    $(this).parent().toggleClass('open-descriptiion')
  });

  $('.open-priceServ').on('click', function () {
    $(this).parent().find('.hiddenP').toggleClass('showp')
  });

  function windowSize(){
    if ($(window).width() >= '1024'){
        $('.description').addClass(' open-descriptiion')
        $('.hiddenP').removeClass('showp')
    } 
  }
  $(window).on('load resize',windowSize);

  $('.switch-btn').click(function(){

    $('.switch-btn').removeClass('switch-on');

    $(this).toggleClass('switch-on');

    if ($(this).hasClass('switch-on')) {
        $(this).trigger('on.switch');
    } else {
        $(this).trigger('off.switch');
    }
  });

  $('.delete-card').on('click', function () {
    $('html').css('overflow','hidden')
    $('.background-pop').addClass('open-backg')
    $('.delete-card-p').addClass('open-popfiin')
    // $(this).parent().remove();
  });

  $('.send-col').on('click', function () {
    $('html').css('overflow','hidden')
    $('.background-pop').addClass('open-backg')
    $('.send-check-pop').addClass('open-popfiin')
  });

  $('.open-yes-pop').on('click', function (event) {
    event.preventDefault()
    $('html').css('overflow','hidden')
    $('.background-pop').addClass('open-backg')
    $('.send-check-pop').removeClass('open-popfiin')
    $('.yes-pop').addClass('open-popfiin')
  });

  $('.close').on('click', function () {
    $('html').css('overflow','auto')
    $('.background-pop').removeClass('open-backg')
    $('.pop-up').removeClass('open-popfiin')
  });

})