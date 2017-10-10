$('.panel-title').click(function (){
    $(this).parents('.panel-heading').toggleClass('active');
});
$('aside .dropdown a').click(function (){
    var classopen = $(this).parent().hasClass('open');
    if(classopen == false){
        $('aside .dropdown a i').removeClass('fa fa-plus').addClass('fa fa-minus');
    }
    else{
        $('aside .dropdown a i').removeClass('fa fa-minus').addClass('fa fa-plus');
    }
});
$('aside ul li a').click(function (){
    $('aside ul li a').removeClass('active').find('.fa-angle-right').remove('i');
    $(this).addClass('active').prepend('<i class="fa fa-angle-right pull-left font-16 margin-top-minus-1"></i>');
});

$(window).click(function() {
  $('aside ul li a').find('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
});
