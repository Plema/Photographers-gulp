$(document).ready(function () {

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
    $(this).toggleClass('switch-on');
    if ($(this).hasClass('switch-on')) {
        $(this).trigger('on.switch');
    } else {
        $(this).trigger('off.switch');
    }
  });

  $('.delete-serv').on('click', function () {
    var att = $(this).parent().data('attr')
    console.log(att)
    $('html').css('overflow','hidden')
    $('.background-pop').addClass('open-backg')
    $('.delete-pop').addClass('open-popfiin')
  });

  $('.open-thank').on('click', function (event) {
    event.preventDefault()
    $('html').css('overflow','hidden')
    $('.background-pop').addClass('open-backg')
    $('.thank-pop').addClass('open-popfiin')
  });

  $('.close').on('click', function () {
    $('html').css('overflow','auto')
    $('.background-pop').removeClass('open-backg')
    $('.pop-up').removeClass('open-popfiin')
  });

})