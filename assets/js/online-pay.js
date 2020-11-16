$(document).ready(function () {

  $('.description > h5').on('click', function () {
    $(this).parent().toggleClass('open-descriptiion')
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

var maxBon = $(".count-bon").text();
  $("#max-val").attr({
    "max" : maxBon,        // substitute your own
    "min" : 0          // values (or variables) here
  });



  var customSelect45 = $('.price-Serv1');
  var customSelect46 = $('.price-Serv2');
  var customSelect47 = $('.price-Serv6');
  var customSelect48 = $('.price-Serv3');
  var customSelect49 = $('.price-Serv4');
  var customSelect50 = $('.price-Serv5');
  var customSelect51 = $('.price-Serv7');
  var customSelect52 = $('.price-Serv9');

  jcf.setOptions('customSelect45', {
    wrapNative: false,
    wrapNativeOnMobile: false,
    fakeDropInBody: false,
    maxVisibleItems: 4
  });

  jcf.replace(customSelect45);
  jcf.replace(customSelect46);
  jcf.replace(customSelect47);
  jcf.replace(customSelect48);
  jcf.replace(customSelect49);
  jcf.replace(customSelect50);
  jcf.replace(customSelect51);
  jcf.replace(customSelect45);
  jcf.replace(customSelect52);


  $('#chack-pay').on('change', function(){
    if($('#chack-pay').prop('checked')){
    $('#pay-but').attr('disabled', false);
    $('#pay-but').removeClass('dis-but');
  }else{
    $('#pay-but').attr('disabled', true);
    $('#pay-but').addClass('dis-but');
  }
  });

})