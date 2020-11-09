$(document).ready(function () {

  $('.add-citat').on("click", function () {
      $('.tab-item_content').addClass('with-citat');
      $('.text-file').css('display','block')
      $('.remove-citat').css('display','block')
      $('.li-add-citat').css('display','none')
  });


  $('.tab-item_content').on("click", function () {
      $(this).toggleClass('with-citat-active');
  });

  $('.stop-citat').on("click", function () {
      $('.text-file').css('display','none')
      $('.tab-item_content').removeClass('with-citat');
      $('.remove-citat').css('display','none')
      $('.li-add-citat').css('display','block')

  });
 


});