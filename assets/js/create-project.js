$(document).ready(function(){
    
    jcf.replaceAll();

    $("#file-1").fileinput({
        uploadUrl: "/ file-upload-batch / 1",
    });
   
    $('.add-image#files2, .add-video#files3, .add-files#files4').on('click', function(){
        $('#file-1').trigger('click');
    })

    //hover on mobile
    $('.create-promotion .item .title .tooltip').on('click', function(){
        $(this).parent().find('.tooltip-text').toggle();
        $(this).toggleClass('close');
    });


    
});